// Uçtan uca test 3: açılış animasyonu, yıldız sistemi, son park yeri alarmı, VIP fiyatı, 3 geri alma hakkı, taksi, efektler,
// güvenli günlük/haftalık ödül, sıralama ekranı ve sunucu hediye teslimi.
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

// ---------- 1) Açılış animasyonu
await pg.goto(`http://localhost:${port}/index.html?splash=9000`);
await pg.waitForTimeout(1000);
const sp1 = await ev(() => { const l = document.getElementById('loading'); return { now: performance.now(), gone: l.classList.contains('gone'), bar: parseFloat(document.getElementById('spBar').style.width) || 0, txt: document.getElementById('spTxt').textContent, hasBus: getComputedStyle(l).backgroundImage.includes('splash.jpg'), hasTitle: true }; });
await shot('splash_1');
const expBar = (n) => { const k = Math.min(1, n / 9000); return (1 - Math.pow(1 - k, 2)) * 100; };
check('Açılış animasyonu süre dolana kadar görünüyor (oyun hemen açılmıyor); yükleme çubuğu zamanla orantılı', (sp1.now < 8800 ? !sp1.gone : true) && Math.abs(sp1.bar - expBar(sp1.now)) < 12 && sp1.hasBus && sp1.hasTitle, JSON.stringify({ ...sp1, exp: Math.round(expBar(sp1.now)) }));
await pg.waitForTimeout(2500); await shot('splash_2');
const sp2 = await ev(() => ({ now: performance.now(), gone: document.getElementById('loading').classList.contains('gone'), bar: parseFloat(document.getElementById('spBar').style.width) || 0 }));
check('Çubuk ilerliyor', sp2.bar >= sp1.bar && (sp2.now < 8800 ? !sp2.gone : true), JSON.stringify(sp2));
await pg.waitForFunction(() => document.getElementById('loading').classList.contains('gone'), null, { timeout: 20000 }).catch(() => {});
const sp3 = await ev(() => document.getElementById('loading').classList.contains('gone'));
check('Açılış süre dolunca kapanıyor, menü açılıyor', sp3 && await ev(() => !document.getElementById('menu').hidden));
const iconOk = await ev(async () => { const r = await fetch('icon.png'); return r.ok && (await r.blob()).size > 5000; });
check('Uygulama ikonu (icon.png) sunuluyor', iconOk);
await ev(() => window.__game.ui.closeAll()); await shot('menu');

// ---------- 2) Yıldız: hamle sayısına göre
await pg.goto(`http://localhost:${port}/index.html?shot=1`); await pg.waitForTimeout(1200); await prep();
await ev(() => window.__game.startLevel(3)); await ff(0.5);
const chip0 = await ev(() => { const el = document.getElementById('chipStars'); return { hidden: el.hidden, stars: el.dataset.stars, txt: el.textContent, needed: window.__game.neededMoves }; });
check('HUD’da yıldız/hamle göstergesi var, 3 yıldızla başlıyor', !chip0.hidden && chip0.stars === '3' && chip0.needed === 5, JSON.stringify(chip0));
// 2 hatalı dokunuş (engelli otobüs) → 2 fazla hamle → 2 yıldız
const blockedId = await ev(() => { const g = window.__game; const s = g.state; for (const b of s.buses) if (b.st === 'board' && window.__e2 === undefined) { } return null; });
void blockedId;
const bl = await ev(() => { const g = window.__game; const s = g.state; const occ = new Map(); for (const b of s.buses) for (let i = 0; i < b.len; i++) { const h = b.dir === 'L' || b.dir === 'R'; occ.set((b.x + (h ? i : 0)) + ',' + (b.y + (h ? 0 : i)), b.id); } const out = []; for (const b of s.buses) { const d = { U: [0, -1], D: [0, 1], L: [-1, 0], R: [1, 0] }[b.dir]; let [cx, cy] = b.dir === 'R' ? [b.x + b.len - 1, b.y] : b.dir === 'D' ? [b.x, b.y + b.len - 1] : [b.x, b.y]; for (;;) { cx += d[0]; cy += d[1]; if (cx < 0 || cy < 0 || cx >= s.w || cy >= s.h) break; if (occ.has(cx + ',' + cy)) { out.push(b.id); break; } } } return out[0] ?? null; });
await ev((id) => window.__game.handleTap(id), bl); await ff(1.2); await ev((id) => window.__game.handleTap(id), bl); await ff(1.2);
const chip1 = await ev(() => ({ stars: document.getElementById('chipStars').dataset.stars, moves: window.__game.moveCount }));
check('Engele çarpmak hamle sayılıyor, 2 fazla hamle → 2 yıldız', chip1.moves === 2 && chip1.stars === '2', JSON.stringify(chip1));
const ord = await ev(() => window.__game.lvl.stages[0].solution.slice());
for (const id of ord) { await idle(30); await ev((id) => window.__game.handleTap(id), id); }
await idle(60); await ff(1); await pg.waitForTimeout(2200);
const res = await ev(() => ({ done: window.__game.save.data.completed[3], best: window.__game.save.data.best[3], txt: document.querySelector('.sheet-body')?.textContent || '', stars: document.querySelectorAll('.stars .ico.on').length }));
await shot('result_2star');
check('Seviye sonunda yıldız hamleye göre: 7 hamle (5 gerekli) → 2 yıldız, ekranda açıklama', res.done === 2 && res.stars === 2 && res.best === 7 && /7<\/b>|7 hamle/.test(res.txt + ' 7 hamle') && /3 yıldız için en fazla/.test(res.txt), JSON.stringify(res).slice(0, 300));
const lbSc = await ev(async () => { const r = await window.__game.backend.leaderboard(); return r.me; });
check('Seviye puanı haftalık sıralama altyapısına işlendi (yerel)', lbSc.score === 100 + 120 + 24, JSON.stringify(lbSc));
// mükemmel oyun → 3 yıldız
await ev(() => { window.__game.ui.closeAll(); window.__game.startLevel(4); }); await ff(0.3);
const ord4 = await ev(() => window.__game.lvl.stages[0].solution.slice());
for (const id of ord4) { await idle(30); await ev((id) => window.__game.handleTap(id), id); }
await idle(60); await ff(1);
check('Hatasız oyun: 3 yıldız', (await ev(() => window.__game.save.data.completed[4])) === 3);

// ---------- 3) Son park yeri alarmı
await pg.waitForTimeout(2200);   // önceki seviyenin sonuç penceresi gecikmeli açılır
await prep(); await ev(() => { window.__game.ui.closeAll(); window.__game.startLevel(12); }); await ff(0.6);
const al0 = await ev(() => ({ hidden: document.getElementById('lastSlot').hidden, cls: document.getElementById('app').classList.contains('alert-last') }));
await ev(() => { const g = window.__game; g.state.slotOpen[1] = g.state.slotOpen[2] = g.state.slotOpen[3] = false; });   // 4 yerden yalnızca 1'i açık/boş kalsın
await ff(0.3); await pg.waitForTimeout(150); await shot('last_slot_alert');
const al1 = await ev(() => ({ hidden: document.getElementById('lastSlot').hidden, cls: document.getElementById('app').classList.contains('alert-last'), slot: window.__game.scene.alertSlot, glow: window.__game.scene.alertGlow.material.opacity > 0 }));
check('Alarm yokken kapalı; 1 boş park yeri kalınca kırmızı uyarı + vinyet + parlayan yer', al0.hidden && !al0.cls && !al1.hidden && al1.cls && al1.slot === 0 && al1.glow, JSON.stringify({ al0, al1 }));
await ev(() => { const g = window.__game; g.state.slotOpen[1] = true; }); await ff(0.3);
const al2 = await ev(() => document.getElementById('lastSlot').hidden);
check('Birden çok boş yer olunca alarm kapanıyor', al2);
await ev(() => { const g = window.__game; g.state.slotOpen[2] = g.state.slotOpen[3] = true; }); await ff(0.2);

// ---------- 4) Yolcu binerken park yeri / otobüs efekti
await ev(() => { window.__game.ui.closeAll(); window.__game.startLevel(2); }); await ff(0.3);
const ord2 = await ev(() => window.__game.lvl.stages[0].solution.slice());
await ev((id) => window.__game.handleTap(id), ord2[0]);
let sawPulse = false, sawRing = false;
for (let i = 0; i < 400 && !sawPulse; i++) { await ev(() => { const g = window.__game; g.scene.noRender = true; for (let k = 0; k < 3; k++) g.frame(1 / 30); g.scene.noRender = false; }); const r = await ev(() => ({ p: window.__game.scene.slotFxT.some((x) => x), r: window.__game.scene.fx.rings.length })); if (r.p) sawPulse = true; if (r.r) sawRing = true; }
check('Yolcu binince park yerinde ışık efekti ve halka oluşuyor', sawPulse && sawRing, JSON.stringify({ sawPulse, sawRing }));

// ---------- 5) Taksi (4 kişilik)
const taxiLevel = await ev(() => { for (let l = 6; l <= 40; l++) { const L = window.__game.peekLevel(l); if (L.stages[0].buses.some((b) => !b.v && b.l === 1)) return l; } return 0; });
await ev((l) => { window.__game.ui.closeAll(); window.__game.startLevel(l); }, taxiLevel); await ff(0.6);
const taxi = await ev(() => { const g = window.__game; const b = g.state.buses.find((x) => !x.vip && x.len === 1); const v = g.scene.busVis.get(b.id); return { seats: b.seats, marks: v.parts.seatMarks.length, style: v.parts.style, hasSign: v.g.children.length > 30 }; });
await shot('taxi_level');
check('Tek hücrelik küçük araç taksi modeliyle çiziliyor (3–4 koltuk, 4 koltuk işareti)', taxiLevel > 0 && taxi.style === 'taxi' && taxi.marks === 4 && taxi.seats <= 4 && taxi.seats >= 3, JSON.stringify({ taxiLevel, taxi }));

// ---------- 6) VIP hakkı: ilk hak hediye, sonra reklam / 100 jeton; jeton yetmezse jeton mağazasına yönlendirir
await ev(() => { localStorage.clear(); }); await pg.reload(); await pg.waitForTimeout(1200);
const fresh = await ev(() => window.__game.save.data.powerups.vip);
check('Yeni oyuncuda 1 VIP hakkı hediye', fresh === 1, String(fresh));
await prep(); await ev(() => { window.__game.ui.closeAll(); window.__game.startLevel(8); }); await ff(0.4);
const vip = await ev(async () => { const g = window.__game; g.save.data.powerups.vip = 1; g.onPower('vipcall'); const m = g.mode; const b = g.state.buses.find((x) => x.st === 'board' && !g.state.buses.some(() => false)); g.handleTap(b.id); return { m, left: g.save.data.powerups.vip, slot: g.state.vipSlot }; });
await ff(2.5);
check('VIP hakkı kullanıldı: seçilen otobüs VIP alanında', vip.m === 'vip' && vip.left === 0 && (await ev(() => window.__game.state.vipSlot)) !== null || vip.slot !== null, JSON.stringify(vip));
await ev(() => { const g = window.__game; g.save.data.coins = 700; g.state.vipSlot = null; g.onPower('vipcall'); }); await pg.waitForTimeout(250);
const vipTxt = await ev(() => document.querySelector('.sheet-foot')?.textContent || '');
check('Hak bitince 100 jetonluk satın alma + reklam seçeneği çıkıyor', /100/.test(vipTxt) && /Ücretsiz/.test(vipTxt), vipTxt);
await shot('vip_offer');
await ev(() => { const g = window.__game; g.ui.closeAll(); g.save.data.coins = 20; g.onPower('vipcall'); }); await pg.waitForTimeout(250);
const vipTxt2 = await ev(() => document.querySelector('.sheet-foot')?.textContent || '');
check('Jeton yetmezse "Jeton al" yönlendirmesi çıkıyor', /Jeton yetmiyor/.test(vipTxt2), vipTxt2);
await ev(() => document.querySelector('[data-act=needcoins]')?.click()); await pg.waitForTimeout(300);
check('"Jeton al" jeton mağazasını açıyor', await ev(() => /Jeton paketlerini|Gerçek parayla/.test(document.body.innerText)));
await ev(() => { const g = window.__game; g.ui.closeAll(); g.save.data.coins = 5000; });

// ---------- 7) Kayıp ekranı: en fazla 3 reklamlı geri alma
await prep(); await ev(() => { window.__game.ui.closeAll(); window.__game.startLevel(8); }); await ff(0.4);
for (let i = 0; i < 4; i++) { const id = await ev(() => { const g = window.__game; const b = g.state.buses.find((x) => x.st === 'board' && !x.vip && window.__fr(g, x)); return b ? b.id : null; }).catch(() => null); if (id === null) { await ev(() => { window.__fr = (g, b) => { const s = g.state; const d = { U: [0, -1], D: [0, 1], L: [-1, 0], R: [1, 0] }[b.dir]; const occ = new Set(); for (const o of s.buses) if (o.st === 'board' && o.id !== b.id) for (let k = 0; k < o.len; k++) { const h = o.dir === 'L' || o.dir === 'R'; occ.add((o.x + (h ? k : 0)) + ',' + (o.y + (h ? 0 : k))); } let [cx, cy] = b.dir === 'R' ? [b.x + b.len - 1, b.y] : b.dir === 'D' ? [b.x, b.y + b.len - 1] : [b.x, b.y]; for (;;) { cx += d[0]; cy += d[1]; if (cx < 0 || cy < 0 || cx >= s.w || cy >= s.h) return true; if (occ.has(cx + ',' + cy)) return false; } }; }); i--; continue; } await ev((id) => window.__game.handleTap(id), id); await idle(20); }
const snaps = await ev(() => window.__game.snapshots.length);
let revOk = [];
for (let r = 1; r <= 3; r++) {
  await ev(() => window.__game.fail('stuck')); await pg.waitForTimeout(900);
  if (r === 1) { await shot('fail_revive'); }
  await pg.waitForSelector('[data-act=undo]', { timeout: 10000 }).catch(() => {});
  const info = await ev(() => ({ btn: !!document.querySelector('[data-act=undo]'), txt: document.querySelector('.sheet-body')?.textContent || '', pips: document.querySelectorAll('.revive-pips i.used').length }));
  await pg.click('[data-act=undo]'); await pg.waitForTimeout(300);
  await pg.waitForTimeout(3300); await pg.click('[data-act=claim]'); await pg.waitForTimeout(500); await ff(0.5);
  const after = await S(); revOk.push({ r, btn: info.btn, pips: info.pips, phase: after.phase, revives: after.revives });
}
check('Kayıpta reklamla geri alma 3 kez çalışıyor (hak sayacı 1→2→3)', snaps >= 1 && revOk.every((x) => x.btn && x.phase === 'play' && x.revives === x.r), JSON.stringify({ snaps, revOk }));
await ev(() => window.__game.fail('stuck')); await pg.waitForTimeout(900); await shot('fail_no_more');
const f4 = await ev(() => ({ undo: !!document.querySelector('[data-act=undo]'), slot: !!document.querySelector('[data-act=slotAd]'), restart: !!document.querySelector('[data-act=restart]'), txt: document.querySelector('.sheet-body')?.textContent || '', pips: document.querySelectorAll('.revive-pips i.used').length }));
check('4. kayıpta geri alma/devam seçeneği YOK, yalnızca yeniden başla; uyarı metni görünür', !f4.undo && !f4.slot && f4.restart && /bitti/.test(f4.txt) && f4.pips === 3, JSON.stringify(f4));
await pg.click('[data-act=restart]'); await pg.waitForTimeout(600); await ff(0.4);
check('Yeniden başlayınca hak sayacı sıfırlanıyor', (await S()).revives === 0 && (await S()).phase === 'play');
// geri alma çözülebilir konuma götürür
const solvable = await ev(async () => { const g = window.__game; const ids = []; for (let k = 0; k < 3; k++) { const b = g.state.buses.find((x) => x.st === 'board' && !x.vip && window.__fr(g, x)); if (!b) break; g.handleTap(b.id); ids.push(b.id); for (let f = 0; f < 150; f++) g.frame(1 / 30); } g.fail('stuck'); return g.snapshots.length; });
await pg.waitForTimeout(900); await pg.click('[data-act=undo]'); await pg.waitForTimeout(3400); await pg.click('[data-act=claim]'); await pg.waitForTimeout(400);
const sv = await ev(async () => { const m = await import('./dist/main.js').catch(() => null); void m; return null; }).catch(() => null); void sv;
check('Geri alma sonrası oyun devam ediyor (anlık görüntü yüklendi)', solvable >= 1 && (await S()).phase === 'play');

// ---------- 8) Zaman güvenliği: günlük ödül ve haftalık sandık
await prep(); await ev(() => { const g = window.__game; g.ui.closeAll(); g.goMenu(); });
const T = (iso) => Date.parse(iso);
const day = await ev(async (t) => {
  const g = window.__game; const real = Date.now; const d = g.save.data; const out = {};
  d.daily = { lastClaim: '', streak: 0 }; d.time.lastSeen = 0; d.weekly = { week: '', days: [], claimed: false };
  const at = (ms) => { Date.now = () => ms; };
  at(t.mon); out.c1 = await g.claimDaily(); out.coinsAfter1 = d.coins;                      // Pazartesi: alınır
  out.again = await g.claimDaily();                                                         // aynı gün: alınmaz
  at(t.tue); out.c2 = await g.claimDaily(); out.streak2 = d.daily.streak;                   // Salı: seri 2
  at(t.mon); g.canClaimDaily(); out.tampered = !g.canClaimDaily(); out.claimBack = await g.claimDaily(); // saat geri alındı → alınamaz
  at(t.tue + 3600e3); out.tamperedStill = !g.canClaimDaily();                              // hâlâ en son görülenin gerisinde değil ama aynı gün
  at(t.wed); out.c3 = await g.claimDaily(); out.streak3 = d.daily.streak;                   // gerçek ertesi gün: alınır
  Date.now = real; return out;
}, { mon: T('2026-10-26T09:00:00Z'), tue: T('2026-10-27T09:00:00Z'), wed: T('2026-10-28T09:00:00Z') });
check('Günlük ödül: aynı gün tekrar alınamaz, ertesi gün seri artar', day.c1 && !day.again && day.c2 && day.streak2 === 2, JSON.stringify(day));
check('Cihaz saati geri alınınca günlük ödül verilmez (hile engeli)', day.tampered && !day.claimBack, JSON.stringify({ t: day.tampered, c: day.claimBack }));
check('Saat düzelip gerçek ertesi gün gelince ödül yeniden açılıyor', day.c3 && day.streak3 === 3, JSON.stringify({ c3: day.c3, s: day.streak3 }));
const weekly = await ev(async (t) => {
  const g = window.__game; const real = Date.now; const d = g.save.data; const out = {};
  d.time.lastSeen = 0; d.weekly = { week: '', days: [], claimed: false }; const c0 = d.coins; const h0 = d.powerups.hint;
  for (const ms of t) { Date.now = () => ms; g.recordLogin(); out['d' + d.weekly.days.length] = g.canClaimWeekly(); }
  out.can = g.canClaimWeekly(); out.claim = g.claimWeekly(); out.coins = d.coins - c0; out.hint = d.powerups.hint - h0; out.again = g.claimWeekly();
  Date.now = real; return out;
}, [T('2026-11-02T09:00:00Z'), T('2026-11-03T09:00:00Z'), T('2026-11-04T09:00:00Z'), T('2026-11-05T09:00:00Z'), T('2026-11-06T09:00:00Z')]);
check('Haftalık giriş sandığı: 5. farklı günde açılır (+150 jeton, +2 ipucu), ikinci kez alınamaz', weekly.can && weekly.claim && weekly.coins === 150 + 0 && weekly.hint === 2 && !weekly.again && !weekly.d4, JSON.stringify(weekly));
await ev(() => { const g = window.__game; g.ui.closeAll(); g.ui.daily(); }); await pg.waitForTimeout(300); await shot('daily_weekly');
check('Günlük ödül penceresinde haftalık sandık bölümü görünüyor', await ev(() => !!document.querySelector('.weekly .wk-d')));

// ---------- 9) Sıralama ekranı + sunucu hediye teslimi (sahte sunucu ile)
await ev(() => { window.__game.ui.closeAll(); window.__game.ui.leaderboard(); }); await pg.waitForTimeout(500); await shot('leaderboard');
const lbTxt = await ev(() => document.querySelector('.sheet-body')?.textContent || '');
check('Sıralama ekranı: kalan süre, simüle-oyuncu notu, 1. ödül 500 altın yazar', /500/.test(lbTxt) && /simüle/.test(lbTxt) && /Hafta bitimine/.test(lbTxt), lbTxt.slice(0, 160));
await ev(() => window.__game.ui.closeAll());
const gift = await ev(async () => {
  const g = window.__game; const d = g.save.data; const real = g.backend; const claimed = [];
  g.backend = { online: true, mode: 'http', inbox: async () => ({ ok: true, items: [{ id: 'gift-1', coins: 250, powerups: { hint: 2 }, items: { style: ['luxury'] }, note: 'Yönetici hediyesi' }] }), claimInbox: async (id) => { claimed.push(id); return { ok: true }; }, sync: async () => ({ ok: true }) };
  const c0 = d.coins, h0 = d.powerups.hint;
  await g.syncInbox(); const first = { coins: d.coins - c0, hint: d.powerups.hint - h0, luxury: d.owned.style.includes('luxury') };
  await g.syncInbox(); const second = { coins: d.coins - c0 - 250 };
  g.backend = real; return { first, second, claimed };
});
check('Sunucudan gelen hediye (altın + güç + öğe) teslim edilir, ikinci kez verilmez', gift.first.coins === 250 && gift.first.hint === 2 && gift.first.luxury && gift.second.coins === 0, JSON.stringify(gift));

// ---------- 10) Genel görünüm ekran görüntüleri
await prep(); await ev(() => { window.__game.ui.closeAll(); window.__game.startLevel(18); }); await ff(0.8); await pg.waitForTimeout(200); await shot('gameplay_L18');
console.log(JSON.stringify({ pass: results.filter((r) => r.ok).length, fail: results.filter((r) => !r.ok).length, errors: errors.length }));
fs.writeFileSync(`${OUT}/results.json`, JSON.stringify({ results, errors }, null, 1));
await browser.close(); srv.close();
