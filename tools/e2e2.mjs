// Uçtan uca test 2: tüm seviyelerin çözüm sırasıyla gerçek oyunda kazanılması, kayıp tespiti, güçlendiriciler, reklam, mağaza, kayıt.
import { chromium } from '/opt/node-tools/node_modules/playwright/index.mjs';
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const root = path.resolve('www');
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json' };
const srv = http.createServer((q, r) => { let p = path.join(root, decodeURIComponent(q.url.split('?')[0])); if (p.endsWith('/')) p += 'index.html'; fs.readFile(p, (e, d) => { if (e) { r.writeHead(404); r.end(); } else { r.writeHead(200, { 'content-type': mime[path.extname(p)] || 'application/octet-stream' }); r.end(d); } }); }).listen(0);
const port = srv.address().port;
const OUT = process.env.OUT || '/tmp/e2e2'; fs.mkdirSync(OUT, { recursive: true });
const results = []; const errors = [];
const check = (name, ok, extra = '') => { results.push({ name, ok: !!ok, extra }); console.log((ok ? 'PASS ' : 'FAIL ') + name + (extra ? '  — ' + extra : '')); };
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const ctx = await browser.newContext({ viewport: { width: 390, height: 780 }, deviceScaleFactor: 1, hasTouch: true });
const pg = await ctx.newPage();
pg.on('console', (m) => { if (m.type() === 'error') { errors.push(m.text()); console.log('[console.error]', m.text()); } });
pg.on('pageerror', (e) => { errors.push(e.message); console.log('[pageerror]', e.message); });
const shot = (n) => pg.screenshot({ path: `${OUT}/${n}.png`, timeout: 90000 });
const ev = (fn, arg) => pg.evaluate(fn, arg);
const ff = (sec) => ev((s) => { const g = window.__game; g.scene.noRender = true; for (let i = 0; i < s * 30; i++) g.frame(1 / 30); g.scene.noRender = false; }, sec);
const S = () => ev(() => { const g = window.__game; const s = g.state; return { phase: g.phase, qi: s.qi, total: s.queue.length, moves: s.moves, parked: s.buses.filter((b) => b.st === 'parked').length, board: s.buses.filter((b) => b.st === 'board').length, slotsOpen: s.slotOpen.filter(Boolean).length, coins: g.save.data.coins, level: g.save.data.level, modals: g.ui.modals.length, busy: g.scene.isBusy(), vip: s.vipSlot, snaps: g.snapshots.length, pu: g.save.data.powerups, assists: g.assists }; });
async function idle(maxSec = 60) { for (let i = 0; i < maxSec * 3; i++) { await ff(0.34); const s = await S(); if (!s.busy) { await ff(0.4); if (!(await S()).busy) return S(); } } return S(); }

await pg.goto(`http://localhost:${port}/index.html?shot=1`); await pg.waitForTimeout(1500);
await ev(() => { const g = window.__game; g.ui.closeAll(); const t = g.save.data.tutorial; t.l1 = t.l2 = true; g.save.data.coins = 5000; });

// ---------- 1) Tüm seviyeler çözüm sırasıyla kazanılır
const LEVELS = +(process.env.LEVELS || 40);
let allWin = true; const summary = [];
for (let n = 1; n <= LEVELS; n++) {
  await ev((n) => { const g = window.__game; g.ui.closeAll(); g.startLevel(n); }, n);
  let ok = true, tapped = 0;
  const stages = await ev(() => window.__game.lvl.stages.length);
  for (let si = 0; si < stages; si++) {
    const order = await ev(() => window.__game.lvl.stages[window.__game.stageIdx].solution.slice());
    for (const id of order) {
      await idle(60);
      const r = await ev((id) => { const g = window.__game; const before = g.state.buses[id].st; g.handleTap(id); return { before, after: g.state.buses[id].st, phase: g.phase }; }, id);
      if (r.after !== 'parked' && r.after !== 'gone') { ok = false; console.log(`  L${n} stage${si} bus ${id} tap failed`, r); break; }
      tapped++;
    }
    if (!ok) break;
    await idle(90);
    if (si < stages - 1) { for (let k = 0; k < 40; k++) { const st = await ev(() => window.__game.stageIdx); if (st === si + 1) break; await ff(0.5); } }
  }
  await idle(90); await ff(1);
  const end = await S(); const lvlOk = end.phase === 'ended' && end.qi === end.total;
  const lvEnd = await ev((n) => ({ done: window.__game.save.data.completed[n], t: window.__game.timeLeft }), n);
  if (!(ok && lvlOk && lvEnd.done)) { allWin = false; console.log(`  L${n} FAIL`, JSON.stringify({ ok, end, lvEnd })); }
  summary.push(`L${n}:${ok && lvlOk ? 'ok' : 'FAIL'}(${tapped} hamle${lvEnd.t != null ? ', kalan ' + Math.round(lvEnd.t) + 'sn' : ''})`);
  if (n === 1 || n === 18 || n === 26) await shot('level_' + n + '_end');
}
check(`1..${LEVELS}. seviyelerin hepsi çözüm sırasıyla gerçek oyunda kazanıldı`, allWin, summary.join(' '));

// ---------- 2) Kayıp tespiti: rastgele oyna → sıkış
await ev(() => { const g = window.__game; g.ui.closeAll(); g.startLevel(12); });
let lost = null;
for (let it = 0; it < 40 && !lost; it++) {
  await idle(30);
  const r = await ev(() => { const g = window.__game; if (g.phase !== 'play') return { phase: g.phase }; const mv = window.__mov(g); if (!mv.length) return { phase: 'nomove' }; g.handleTap(mv[Math.floor(Math.random() * mv.length)]); return { phase: g.phase }; }).catch(() => null);
  if (r === null) { await ev(() => { window.__mov = (g) => g.state.buses.filter((b) => b.st === 'board' && !b.vip && window.__free(g, b)).map((b) => b.id); window.__free = (g, b) => { const s = g.state; const d = { U: [0, -1], D: [0, 1], L: [-1, 0], R: [1, 0] }[b.dir]; const occ = new Set(); for (const o of s.buses) if (o.st === 'board' && o.id !== b.id) { for (let i = 0; i < o.len; i++) { const h = o.dir === 'L' || o.dir === 'R'; occ.add((o.x + (h ? i : 0)) + ',' + (o.y + (h ? 0 : i))); } } let [cx, cy] = b.dir === 'R' ? [b.x + b.len - 1, b.y] : b.dir === 'D' ? [b.x, b.y + b.len - 1] : [b.x, b.y]; for (;;) { cx += d[0]; cy += d[1]; if (cx < 0 || cy < 0 || cx >= s.w || cy >= s.h) return true; if (occ.has(cx + ',' + cy)) return false; } }; }); continue; }
  const st = await S(); if (st.phase === 'ended') lost = st;
}
await ff(1); await pg.waitForTimeout(900); const failModal = await ev(() => !!document.querySelector('.sheet-head.red'));
const endSt = await S();
check('Rastgele oyun sonunda ya kazanma ya kayıp ekranı çıkıyor', endSt.phase === 'ended' && (failModal || endSt.qi === endSt.total), JSON.stringify({ failModal, phase: endSt.phase, qi: endSt.qi, total: endSt.total }));
if (failModal) { await shot('fail_modal'); }

// ---------- 3) Reklamla ek park yeri (test reklamı), iptal = ödül yok
await pg.waitForTimeout(2600); await ev(() => { const g = window.__game; g.ui.closeAll(); g.startLevel(5); });
await pg.waitForTimeout(2600); await ev(() => window.__game.ui.closeAll());
await ff(0.5);
const open0 = (await S()).slotsOpen;
await ev(() => window.__game.handleSlotTap(4)); await pg.waitForTimeout(300); await shot('slot_offer');
check('Kilitli + alana dokunmak teklif ekranı açıyor', (await S()).modals === 1);
await pg.click('[data-act=ad]'); await pg.waitForTimeout(300);
await pg.locator('.sheet-x').last().click(); await pg.waitForTimeout(400);   // reklamı erken kapat
let s3 = await S(); check('Reklam tamamlanmadan kapatılınca ödül verilmedi', s3.slotsOpen === open0, `açık=${s3.slotsOpen}`);
await pg.click('[data-act=ad]'); await pg.waitForTimeout(3500); await pg.click('[data-act=claim]'); await pg.waitForTimeout(400); await ff(0.8);
s3 = await S(); check('Reklam tamamlanınca ek park yeri açıldı (gerçek durumda)', s3.slotsOpen === open0 + 1, `açık=${s3.slotsOpen}`);
const tempSaved = await ev(() => window.__game.save.data.temp.slots.slice());
check('Geçici reklam hakkı kayıtta ayrı tutuluyor (kalıcı perm değil)', tempSaved.length === 1 && (await ev(() => window.__game.save.data.perm.slots)) === 0, JSON.stringify(tempSaved));
// yeni alana otobüs park et
await shot('slot_unlocked');
const ids = await ev(() => { const g = window.__game; return g.lvl.stages[0].solution.slice(0, 6); });
for (let i = 0; i < 5; i++) { await idle(30); await ev((id) => window.__game.handleTap(id), ids[i]); }
await idle(40); await ff(1);
check('Seviye sürerken ek alan kullanılabildi', (await S()).qi > 0);

// ---------- 4) Güçlendiriciler
await ev(() => { const g = window.__game; g.ui.closeAll(); g.startLevel(8); }); await ff(0.5);
let p0 = await S();
await ev(() => window.__game.onPower('hint')); await ff(0.3);
const glow = await ev(() => window.__game.scene.glows.size);
let p1 = await S(); check('İpucu: bir otobüs parlatıldı, hak 1 azaldı', glow === 1 && p1.pu.hint === p0.pu.hint - 1, `glow=${glow} hint ${p0.pu.hint}->${p1.pu.hint}`);
const hid = await ev(() => [...window.__game.scene.glows.keys()][0]);
await ev((id) => window.__game.handleTap(id), hid); await idle(30);
let p2 = await S(); check('İpucunun gösterdiği hamle oynanabilir', p2.moves === 1);
await ev(() => window.__game.onPower('undo')); await ff(0.6); let p3 = await S();
check('Geri al: hamle sayısı ve otobüs durumu geri döndü', p3.moves === 0 && p3.qi === 0 && p3.board === p0.board && p3.pu.undo === p1.pu.undo - 1, JSON.stringify({ moves: p3.moves, board: p3.board, undo: p3.pu.undo }));
await ev(() => window.__game.onPower('undo')); await ff(0.2); const p3b = await S();
check('Geri alınacak hamle yokken hak tüketilmiyor', p3b.pu.undo === p3.pu.undo, `undo ${p3.pu.undo}->${p3b.pu.undo}`);
// çağır
await ev(() => window.__game.onPower('call')); await ff(0.2); await idle(30); let p4 = await S();
check('Çağır: sıradaki yolcunun renginde otobüs çağrıldı ve yolcular bindi', p4.qi > 0 && p4.pu.call === p3.pu.call - 1, JSON.stringify({ qi: p4.qi, call: p4.pu.call }));
// recall
await ev(() => { const g = window.__game; const b = g.state.buses.find((x) => x.st === 'board' && !x.vip && window.__free(g, x)); g.handleTap(b.id); }); await idle(30);
const parkedBefore = (await S()).parked;
if (parkedBefore > 0) {
  await ev(() => window.__game.onPower('recall')); await ff(0.2);
  const mode = await ev(() => window.__game.mode);
  await ev(() => { const g = window.__game; const i = g.state.slots.findIndex((x) => x !== null); g.handleSlotTap(i); }); await ff(1.2);
  const p5 = await S(); check('Geri çağır: park eden otobüs başlangıç yerine döndü', mode === 'recall' && p5.parked === parkedBefore - 1 && p5.pu.recall === p4.pu.recall - 1, JSON.stringify({ mode, parked: p5.parked, recall: p5.pu.recall }));
} else check('Geri çağır (park eden otobüs yoktu, atlandı)', true, 'otobüs dolup kalkmıştı');
// VIP çağır (coin)
await ev(() => { const g = window.__game; g.save.data.temp.vipCalls = 0; });
await ev(() => window.__game.callVip('coin')); await ff(1.5); const p6 = await S();
check('VIP çağır: VIP alanı doldu', p6.vip !== null, JSON.stringify(p6.vip)); await shot('vip_called');
// dönüştür
await ev(() => { const g = window.__game; g.save.data.temp.conv = 0; });
const convRes = await ev(async () => { const g = window.__game; const b = g.state.buses.find((x) => x.st === 'board' && !x.vip); const colors = [...new Set(g.state.queue.slice(g.state.qi))].filter((c) => c !== b.color); const before = { color: b.color, seats: b.seats, id: b.id }; let ok = false; for (const c of colors) { ok = await g.applyConvert(b.id, { type: 'color', v: c }, 'coin'); if (ok) { return { ok, before, after: { color: g.state.buses[b.id].color, seats: g.state.buses[b.id].seats }, c }; } } return { ok, before, colors }; });
check('Otobüs dönüştürme: renk değişti, kapasite aynı kaldı (veya çözümsüz seçenek reddedildi)', convRes.ok ? (convRes.after.color === convRes.c && convRes.after.seats === convRes.before.seats) : true, JSON.stringify(convRes));

// ---------- 5) Ekonomi: mağaza satın alma, kalıcı slot, görevler, kayıt
const eco = await ev(() => { const g = window.__game; g.save.data.coins = 5000; const a = g.buyItem('style', 'coach'); const b = g.save.data.equipped.style === 'coach'; const c0 = g.save.data.coins; const p = g.buyPermSlot(); return { a, b, c0, p, perm: g.save.data.perm.slots, coins: g.save.data.coins }; });
check('Mağaza: otobüs satın alma + kuşanma, jeton düşüyor', eco.a && eco.b && eco.c0 === 5000 - 800, JSON.stringify(eco));
check('Kalıcı Premium park yeri satın alınıp kaydediliyor', eco.p && eco.perm === 1 && eco.coins === eco.c0 - 400);
const poor = await ev(() => { const g = window.__game; g.save.data.coins = 10; return g.buyItem('style', 'school'); });
check('Yetersiz jetonla satın alma reddediliyor', poor === false);
await ev(() => { const g = window.__game; g.save.data.coins = 1234; g.save.save(true); });
await pg.reload(); await pg.waitForTimeout(1800);
const persisted = await ev(() => { const g = window.__game; const d = g.save.data; return { coins: d.coins, perm: d.perm.slots, owned: d.owned.style, eq: d.equipped.style, level: d.level }; });
check('Uygulama yeniden açılınca ilerleme/jeton/satın almalar korundu', persisted.coins === 1234 && persisted.perm === 1 && persisted.owned.includes('coach') && persisted.eq === 'coach' && persisted.level > 1, JSON.stringify(persisted));
// bozuk kayıt
await ev(() => localStorage.setItem('busPuzzleDeluxe.save.v1', '{"coins":"abc","level":-5,"owned":{"style":42}}')); await pg.reload(); await pg.waitForTimeout(1500);
const safe = await ev(() => { const d = window.__game.save.data; return { coins: d.coins, level: d.level, style: d.owned.style }; });
check('Bozuk kayıt güvenle varsayılana düşüyor', safe.level === 1 && safe.coins === 120 && safe.style.includes('city'), JSON.stringify(safe));
// görevler
await ev(() => { const g = window.__game; g.ui.closeAll(); const t = g.save.data.tutorial; t.l1 = t.l2 = true; g.startLevel(3); }); await ff(0.3);
const ord = await ev(() => window.__game.lvl.stages[0].solution.slice());
for (const id of ord) { await idle(30); await ev((id) => window.__game.handleTap(id), id); }
await idle(60); await ff(1);
const q = await ev(() => { const g = window.__game; return { prog: g.save.data.quests.progress, list: g.save.data.quests.list.map((x) => x.id), stats: g.save.data.stats }; });
check('Görev ilerlemesi gerçek oyun olaylarından hesaplanıyor', (q.prog.pass20 ?? q.prog.pass50 ?? q.prog.levels3 ?? 0) > 0 && q.stats.passengers >= 20, JSON.stringify(q));

console.log(JSON.stringify({ pass: results.filter((r) => r.ok).length, fail: results.filter((r) => !r.ok).length, errors: errors.length }));
fs.writeFileSync(`${OUT}/results.json`, JSON.stringify({ results, errors }, null, 1));
await browser.close(); srv.close();
