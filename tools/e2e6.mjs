// Uçtan uca test 6: VIP ile kurtar akışı, ek park yeri sonrası devam, sıkılma emojisi, hızlı hamle övgüsü.
import { chromium } from '/opt/node-tools/node_modules/playwright/index.mjs';
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const root = path.resolve('www');
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png' };
const srv = http.createServer((q, r) => { let p = path.join(root, decodeURIComponent(q.url.split('?')[0])); if (p.endsWith('/')) p += 'index.html'; fs.readFile(p, (e, d) => { if (e) { r.writeHead(404); r.end(); } else { r.writeHead(200, { 'content-type': mime[path.extname(p)] || 'application/octet-stream' }); r.end(d); } }); }).listen(0);
const port = srv.address().port;
const OUT = process.env.OUT || '/tmp/e2e3'; fs.mkdirSync(OUT, { recursive: true });
const results = []; const errors = [];
const check = (name, ok, extra = '') => { results.push({ name, ok: !!ok, extra }); console.log((ok ? 'PASS ' : 'FAIL ') + name + (extra ? '  — ' + extra : '')); };
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const ctx = await browser.newContext({ viewport: { width: 390, height: 780 }, deviceScaleFactor: 1, hasTouch: true });
const pg = await ctx.newPage();
pg.on('console', (m) => { if (m.type() === 'error') { errors.push(m.text()); console.log('[console.error]', m.text()); } });
pg.on('pageerror', (e) => { errors.push(e.message); console.log('[pageerror]', e.message); });
const shot = async (n) => { const t0 = Date.now(); await pg.screenshot({ path: `${OUT}/${n}.png`, timeout: 25000 }).catch(e => console.log(`  [shot ${n} atlandı: ${String(e.message).split('\n')[0]}]`)); console.log(`  [shot ${n} ${Date.now() - t0} ms]`); };
const ev = (fn, arg) => pg.evaluate(fn, arg);
const ff = (sec) => ev((s) => { const g = window.__game; g.scene.noRender = true; for (let i = 0; i < s * 30; i++) g.frame(1 / 30); g.scene.noRender = false; }, sec);
const S = () => ev(() => { const g = window.__game; const s = g.state; return { phase: g.phase, qi: s.qi, total: s.queue.length, parked: s.buses.filter((b) => b.st === 'parked').length, board: s.buses.filter((b) => b.st === 'board').length, coins: g.save.data.coins, modals: g.ui.modals.length, busy: g.scene.isBusy(), moveCount: g.moveCount, revives: g.revives }; });
async function idle(maxSec = 60) { for (let i = 0; i < maxSec * 3; i++) { await ff(0.34); const s = await S(); if (!s.busy) { await ff(0.4); if (!(await S()).busy) return S(); } } return S(); }
const prep = () => ev(() => { const g = window.__game; g.ui.closeAll(); const t = g.save.data.tutorial; t.l1 = t.l2 = t.vip = true; t.intro = { call: true, vipcall: true, shuffle: true }; g.save.data.coins = 5000; });
const adLog = () => ev(() => window.__adLog || []);
await pg.goto(`http://localhost:${port}/index.html?fast`); await pg.waitForTimeout(1800);
await prep();
await ev(() => window.__game.startLevel(10)); await ff(0.6);

// ---------- 1) VIP ile kurtar: hakkı yoksa satın alma penceresi AÇIK KALIR (eskiden kayboluyordu)
const failArgs = { reason: 'noslot', canSlotAd: true, canUndo: true, revivesLeft: 3, adOk: true, canVip: true };
await ev((a) => { const g = window.__game; g.save.data.powerups.vip = 0; g.phase = 'ended'; g.ui.fail(a); }, failArgs);
await pg.waitForTimeout(300);
await pg.click('.modal-bg [data-act=vip]'); await pg.waitForTimeout(800); await ff(1.5);
let st = await ev(() => { const g = window.__game; return { phase: g.phase, modals: g.ui.modals.length, hasBuy: !!document.querySelector('[data-act=buy], [data-act=needcoins]'), hasAd: !!document.querySelector('[data-act=ad]'), title: document.querySelector('.modal-bg .sheet-head')?.textContent }; });
check('VIP ile kurtar (hak yok): satın alma penceresi açık kalır, oyun bitti durumunda', st.phase === 'ended' && st.modals === 1 && st.hasBuy && st.hasAd, JSON.stringify(st));
check('Satın alma penceresi: jeton + Ücretsiz (reklam) iki düğme', st.hasBuy && st.hasAd);
await shot('vip_buy');
// vazgeç → kayıp ekranı geri gelir
await ev(() => { const g = window.__game; g.ui.modals[g.ui.modals.length - 1].close(); }); await pg.waitForTimeout(400);
st = await ev(() => ({ phase: window.__game.phase, fail: !!document.querySelector('[data-act=restart]'), modals: window.__game.ui.modals.length }));
check('Vazgeçince kayıp ekranı geri gelir', st.phase === 'ended' && st.fail && st.modals === 1, JSON.stringify(st));
// jetonla al → VIP seçme modu, oyun devam
await pg.click('.modal-bg [data-act=vip]'); await pg.waitForTimeout(400);
await pg.click('.modal-bg [data-act=buy]'); await pg.waitForTimeout(400); await ff(1);
st = await ev(() => { const g = window.__game; return { phase: g.phase, mode: g.mode, modals: g.ui.modals.length, vip: g.save.data.powerups.vip }; });
check('Jetonla hak alınca VIP seçme modu açılır, oyun devam eder', st.phase === 'play' && st.mode === 'vip' && st.modals === 0 && st.vip === 1, JSON.stringify(st));
await ev(() => window.__game.setMode(null));

// ---------- 2) Ek park yeri sonrası devam: revize hakkı harcanmaz
const rv = await ev(async () => { const g = window.__game; g.phase = 'ended'; g.revives = 1; g.save.data.powerups.extraSlot = 1; const s = g.state; const closedBefore = s.slotOpen.filter((o) => !o).length;
  const ok = await g.unlockSlot('item'); g.reviveAfter(true); return { ok, revives: g.revives, phase: g.phase, closedBefore, closedAfter: s.slotOpen.filter((o) => !o).length }; });
check('Ek yer açılınca oyun devam eder ve devam hakkı harcanmaz', rv.ok && rv.phase === 'play' && rv.revives === 1 && rv.closedAfter === rv.closedBefore - 1, JSON.stringify(rv));

// ---------- 3) Akıllı emoji: bekledikçe sıkılır, hamlede kaybolur
await ev(() => { const g = window.__game; g.ui.closeAll(); g.startLevel(10); }); await ff(1.0);
const moods = [];
for (const sec of [3, 5, 6, 9, 9]) { await ff(sec); moods.push(await ev(() => window.__game.scene.moodVal || null)); }
check('Bekledikçe emoji değişir: (yok) → 🥱 → 😒 → 😴 → 😡', JSON.stringify(moods) === JSON.stringify([null, '🥱', '😒', '😴', '😡']), JSON.stringify(moods));
const mdom = await ev(() => !!document.querySelector('.mood i'));
check('Emoji balonu ekranda görünür', mdom);
await ev(() => { const g = window.__game; const b = g.state.buses.find((x) => x.st === 'board'); g.handleTap(b.id); }); await ff(0.2);
check('Hamle yapınca emoji kaybolur', (await ev(() => window.__game.scene.moodVal || null)) === null);

// ---------- 4) Hızlı art arda hamle övgüsü
const pr = await ev(() => { const g = window.__game; g.streak = 0; g.lastMoveAt = undefined; g.clock = 100; const out = [];
  for (let i = 0; i < 3; i++) { g.clock += 1; g.trackStreak(); } out.push(document.querySelectorAll('.praise').length, [...document.querySelectorAll('.praise')].map((e) => e.textContent).join());
  g.clock += 10; g.trackStreak(); out.push(g.streak); return out; });
check('3 hızlı hamlede "Harika!" yazısı, yavaşlayınca seri sıfırlanır', pr[0] === 1 && pr[1] === 'Harika!' && pr[2] === 1, JSON.stringify(pr));

check('Konsol hatası yok', errors.length === 0, errors.slice(0, 3).join(' | '));
const f = results.filter((r) => !r.ok).length; console.log(`\n${results.length - f}/${results.length} geçti`);
await browser.close(); srv.close(); process.exit(f ? 1 : 0);
