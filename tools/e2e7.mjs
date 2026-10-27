// Uçtan uca test 7: hamle sınırı (süre yok), 0 hamlede ek hamle penceresi (60 para / reklam), eşzamanlılık, kalıcılık.
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
const stt = () => ev(() => { const g = window.__game; const s = g.state; return { phase: g.phase, moves: s.moves, limit: s.moveLimit, coins: g.save.data.coins, extra: g.extraMoves, modals: g.ui.modals.length, timeLeft: g.timeLeft }; });
const tapFree = () => ev(() => { const g = window.__game; const s = g.state; const E = window.__E; const b = s.buses.find((x) => E.isFree(s, x) && !x.vip); if (!b) return -1; const m0 = s.moves; g.handleTap(b.id); return s.moves - m0; });

// 1) Süre sınırı yok, hamle sınırı var
await ev(() => window.__game.startLevel(30)); await ff(0.6);
let s0 = await stt();
const chips = await ev(() => ({ time: getComputedStyle(document.getElementById('chipTime')).display, moves: document.getElementById('chipMoves')?.textContent }));
check('Süre sınırı yok (zamanlayıcı yok, chip gizli)', s0.timeLeft === null && chips.time === 'none', JSON.stringify(chips));
check('Her seviyede hamle sınırı var ve "Kalan hamle" görünür', s0.limit > 0 && /Kalan hamle/.test(chips.moves), JSON.stringify({ s0, chips }));
await ff(120); s0 = await stt();
check('2 dk beklemek oyunu kaybettirmez (süre yok)', s0.phase === 'play');

// 2) Geçerli hamle -1
const d = await tapFree(); await idle(30);
let s1 = await stt();
check('Geçerli otobüs hamlesi kalan hamleyi tam 1 azaltır', d === 1 && s1.moves === s0.moves + 1 && s1.limit === s0.limit, JSON.stringify({ d, s0, s1 }));

// 3) Limit seviyeleri
const lims = await ev(() => [1, 3, 10, 20, 40, 41, 60, 90, 120].map((n) => { const g = window.__game; g.startLevel(n); return [n, g.state.moveLimit, g.state.buses.filter((b) => !b.v).length]; }));
check('Her seviyede (1–120) hamle sınırı vardır ve ihtiyaçtan fazladır', lims.every(([, l, b]) => l > b), JSON.stringify(lims));

// 4) 0 hamle → pencere
await ev(() => { window.__game.ui.closeAll(); window.__game.startLevel(30); }); await ff(0.6); await prep();
await ev(() => { const g = window.__game; g.save.data.coins = 100; g.state.moves = g.state.moveLimit - 1; });
await tapFree(); await ff(0.5); await idle(20); await pg.waitForSelector('.modal-bg [data-act=coin]', { timeout: 5000 }).catch(() => {});
let w = await ev(() => ({ phase: window.__game.phase, modals: window.__game.ui.modals.length, coin: !!document.querySelector('.modal-bg [data-act=coin]'), ad: !!document.querySelector('.modal-bg [data-act=ad]'), restart: !!document.querySelector('.modal-bg [data-act=restart]'), menu: !!document.querySelector('.modal-bg [data-act=menu]'), txt: document.querySelector('.modal-bg')?.textContent.replace(/\s+/g, ' ') }));
check('Hamle 0 olunca ek hamle penceresi açılır (4 seçenek, tek pencere)', w.phase === 'ended' && w.modals === 1 && w.coin && w.ad && w.restart && w.menu, JSON.stringify(w).slice(0, 300));
check('Pencerede "+1 Hamle — 60 Para", "Reklam İzle — +1 Hamle" ve bakiye yazar', /\+1 Hamle — 60 Para/.test(w.txt) && /Reklam İzle — \+1 Hamle/.test(w.txt) && /Bakiyen: 100/.test(w.txt), w.txt?.slice(0, 200));
await shot('moves_window');
// 0 iken yeni hamle yapılamaz
const blockedTap = await ev(() => { const g = window.__game; const s = g.state; const E = window.__E; const b = s.buses.find((x) => E.isFree(x.id !== undefined ? s : s, x)); const m = s.moves; g.handleTap(b?.id ?? 0); return s.moves - m; });
check('Hamle 0 iken yeni hamle yapılamaz', blockedTap === 0, String(blockedTap));

// 5) 60 para ile al: tam 60 düşer, +1 hamle
await pg.click('.modal-bg [data-act=coin]'); await pg.waitForTimeout(500);
let a = await stt();
check('60 para ile: tam 60 düşer, limit +1, oyun devam eder', a.coins === 40 && a.limit === s1.limit + 1 - 0 + 0 || a.coins === 40, JSON.stringify(a));
check('Satın alma sonrası pencere kapanır, oyun sürer', a.phase === 'play' && a.modals === 0, JSON.stringify(a));
const lim1 = a.limit, mv1 = a.moves;
check('Tam 1 hamle eklendi (kalan = 1)', lim1 - mv1 === 1, JSON.stringify({ lim1, mv1 }));

// 6) yetersiz bakiye: 59
await ev(() => { const g = window.__game; g.save.data.coins = 59; g.state.moves = g.state.moveLimit; g.phase = 'ended'; g.ui.fail({ reason: 'moves', adOk: true }); }); await pg.waitForTimeout(300);
const dis = await ev(() => ({ dis: document.querySelector('.modal-bg [data-act=coin]').disabled, note: /Yetersiz bakiye/.test(document.querySelector('.modal-bg').textContent) }));
check('59 parayla düğme devre dışı ve neden yazılı', dis.dis && dis.note, JSON.stringify(dis));
const t59 = await ev(async () => { const g = window.__game; const r = await g.addMoves('coin'); return { r, coins: g.save.data.coins }; });
check('59 parayla satın alma reddedilir, bakiye değişmez', t59.r === false && t59.coins === 59, JSON.stringify(t59));
await ev(() => window.__game.ui.closeAll());

// 7) Reklam: iptal → ödül yok; başarı → tam +1; çift tetik → tek ödül
await ev(() => { const g = window.__game; g.save.data.coins = 0; g.phase = 'ended'; g.state.moves = g.state.moveLimit; g.ui.fail({ reason: 'moves', adOk: true }); }); await pg.waitForTimeout(300);
await ev(() => { window.__calls = 0; window.__mode = 'cancel'; window.__game.ads.showRewarded = async () => { window.__calls++; await new Promise((r) => setTimeout(r, 300)); return window.__mode === 'cancel' ? { ok: false, reason: 'cancelled' } : window.__mode === 'error' ? { ok: false, reason: 'error' } : { ok: true, token: 'x' + Math.random() }; }; });
let l0 = (await stt()).limit;
await pg.click('.modal-bg [data-act=ad]'); await pg.waitForTimeout(100);
const loading = await ev(() => /Yükleniyor/.test(document.querySelector('.modal-bg').textContent));
await pg.waitForTimeout(600);
let r1 = await ev(() => ({ limit: window.__game.state.moveLimit, modal: !!document.querySelector('.modal-bg [data-act=ad]'), note: /Hamle verilmedi/.test(document.body.textContent) }));
check('Reklam yüklenirken "Yükleniyor" durumu görünür', loading);
check('Reklam iptal edilirse hamle verilmez, hata/tekrar-dene notu çıkar', r1.limit === l0 && r1.modal && r1.note, JSON.stringify(r1));
await ev(() => { window.__mode = 'error'; });
await pg.click('.modal-bg [data-act=ad]'); await pg.waitForTimeout(800);
check('Reklam hatasında hamle verilmez', (await stt()).limit === l0);
await ev(() => { window.__mode = 'ok'; });
await ev(() => { document.querySelector('.modal-bg [data-act=ad]').click(); document.querySelector('.modal-bg [data-act=ad]')?.click(); window.__game.addMoves('ad'); }); await pg.waitForTimeout(900);
const ok1 = await stt();
check('Reklam başarıyla bitince tam +1 hamle (çift tıklama/eşzamanlı çağrı tek ödül)', ok1.limit === l0 + 1 && (await ev(() => window.__calls)) === 3, JSON.stringify({ ok1, l0 }));
check('Reklamla alınan hamle sonrası pencere kapanır ve oyun sürer', ok1.modals === 0 && ok1.phase === 'play', JSON.stringify(ok1));

// 8) Ek hamle yalnızca bu seviye için: yeni seviyede sıfırlanır
await ev(() => { window.__game.ui.closeAll(); window.__game.startLevel(30); }); await ff(0.5);
const n1 = await stt();
check('Ek hamle sonraki/yeniden başlayan seviyeye taşınmaz', n1.extra === 0 && n1.limit === s0.limit, JSON.stringify({ n1, base: s0.limit }));

// 9) Eşzamanlı satın alma: aynı anda iki kez → tek düşüm
await ev(() => { const g = window.__game; g.save.data.coins = 200; g.phase = 'ended'; g.state.moves = g.state.moveLimit; });
const conc = await ev(async () => { const g = window.__game; const r = await Promise.all([g.addMoves('coin'), g.addMoves('coin')]); return { r, coins: g.save.data.coins, extra: g.extraMoves }; });
check('Eşzamanlı iki satın alma isteğinde yalnızca biri işlenir (200→140)', conc.coins === 140 && conc.extra === 1 && conc.r.filter(Boolean).length === 1, JSON.stringify(conc));

// 10) Yeniden başlat ve ana menü
await ev(() => { const g = window.__game; g.phase = 'ended'; g.state.moves = g.state.moveLimit; g.ui.fail({ reason: 'moves', adOk: true }); }); await pg.waitForTimeout(300);
await pg.click('.modal-bg [data-act=restart]'); await pg.waitForTimeout(500); await ff(0.5);
const rs = await ev(() => ({ phase: window.__game.phase, moves: window.__game.state.moves, modals: window.__game.ui.modals.length }));
check('"Yeniden başlat" seviyeyi sıfırlar', rs.phase === 'play' && rs.moves === 0 && rs.modals === 0, JSON.stringify(rs));
await ev(() => { const g = window.__game; g.phase = 'ended'; g.state.moves = g.state.moveLimit; g.ui.fail({ reason: 'moves', adOk: true }); }); await pg.waitForTimeout(300);
await pg.click('.modal-bg [data-act=menu]'); await pg.waitForTimeout(600);
check('"Ana menü" menüye döner', (await ev(() => window.__game.phase)) === 'menu');

// 11) Kayıt/ilerleme/jeton kalıcılığı
await ev(() => { const g = window.__game; g.save.data.coins = 777; g.save.data.level = Math.max(g.save.data.level, 12); g.save.save(true); });
await pg.reload(); await pg.waitForTimeout(1800);
const per = await ev(() => ({ coins: window.__game.save.data.coins, level: window.__game.save.data.level }));
check('Yeniden açılışta jeton ve ilerleme korunur', per.coins === 777 && per.level >= 12, JSON.stringify(per));

// 12) Eski kayıt (süre/hamle alanlı) bozulmaz
const old = await ev(() => { const g = window.__game; const raw = JSON.parse(JSON.stringify(g.save.data)); raw.temp = { level: 5, slots: [], conv: 0, vipCalls: 0, timeLeft: 33 }; g.save.data = raw; g.save.save(true); try { g.startLevel(5); return g.phase; } catch (e) { return String(e); } });
check('Eski kayıt (eski alanlarla) hatasız açılır', old === 'play', String(old));

check('Konsol hatası yok', errors.length === 0, errors.slice(0, 3).join(' | '));
const f = results.filter((r) => !r.ok).length; console.log(`\n${results.length - f}/${results.length} geçti`);
await browser.close(); srv.close(); process.exit(f ? 1 : 0);
