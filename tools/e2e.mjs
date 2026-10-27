// Uçtan uca test: gerçek tarayıcıda (headless Chromium + WebGL/SwiftShader) oyunu oynar ve doğrular.
import { chromium } from '/opt/node-tools/node_modules/playwright/index.mjs';
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const root = path.resolve('www');
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json' };
const srv = http.createServer((q, r) => { let p = path.join(root, decodeURIComponent(q.url.split('?')[0])); if (p.endsWith('/')) p += 'index.html'; fs.readFile(p, (e, d) => { if (e) { r.writeHead(404); r.end(); } else { r.writeHead(200, { 'content-type': mime[path.extname(p)] || 'application/octet-stream' }); r.end(d); } }); }).listen(0);
const port = srv.address().port;
const OUT = process.env.OUT || '/tmp/e2e'; fs.mkdirSync(OUT, { recursive: true });
const results = []; const errors = [];
const check = (name, ok, extra = '') => { results.push({ name, ok: !!ok, extra }); console.log((ok ? 'PASS ' : 'FAIL ') + name + (extra ? '  — ' + extra : '')); };

const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const ctx = await browser.newContext({ viewport: { width: 390, height: 780 }, deviceScaleFactor: +(process.env.DSF || 1), hasTouch: true });
const pg = await ctx.newPage();
pg.on('console', (m) => { if (m.type() === 'error') { errors.push(m.text()); console.log('[console.error]', m.text()); } });
pg.on('pageerror', (e) => { errors.push(e.message); console.log('[pageerror]', e.message); });
const shot = (n) => pg.screenshot({ path: `${OUT}/${n}.png`, timeout: 90000 });
const ev = (fn, arg) => pg.evaluate(fn, arg);
const ff = (sec) => ev((s) => { const g = window.__game; g.scene.noRender = true; for (let i = 0; i < s * 30; i++) g.frame(1 / 30); g.scene.noRender = false; }, sec);
const state = () => ev(() => { const g = window.__game; const s = g.state; return { phase: g.phase, qi: s.qi, total: s.queue.length, moves: s.moves, parked: s.buses.filter((b) => b.st === 'parked').length, board: s.buses.filter((b) => b.st === 'board').length, gone: s.buses.filter((b) => b.st === 'gone').length, coins: g.save.data.coins, level: g.save.data.level, modals: g.ui.modals.length, tut: g.tut.active ? g.tut.cur?.kind : null, busy: g.scene.isBusy() }; });
async function waitIdle(maxSec = 40) { for (let i = 0; i < maxSec * 2; i++) { await ff(0.5); const s = await state(); if (!s.busy) { await ff(0.3); const s2 = await state(); if (!s2.busy) return s2; } } return state(); }
async function realTap(id) { const p = await ev((id) => { const g = window.__game; const sp = g.scene.busScreenPos(id); const r = document.getElementById('stage').getBoundingClientRect(); return { x: r.left + sp.x, y: r.top + sp.y }; }, id); await pg.mouse.click(p.x, p.y); }

await pg.goto(`http://localhost:${port}/index.html?shot=1`);
await pg.waitForTimeout(2500);
check('Sayfa açılıyor, oyun nesnesi var', await ev(() => !!window.__game));
check('Ana menü görünür', await ev(() => !document.getElementById('menu').hidden));
await shot('01_menu_daily');
// günlük ödül
await pg.click('[data-act=claim]'); await pg.waitForTimeout(300);
const coins1 = (await state()).coins; check('Günlük ödül jeton ekledi', coins1 === 80, 'coins=' + coins1);
await pg.click('.sheet-x'); await pg.waitForTimeout(200);
await shot('02_menu');

// ---- Seviye 1 eğitim
await pg.click('[data-act=play]'); await pg.waitForTimeout(800);
check('Seviye 1 başladı, eğitim aktif', (await state()).tut === 'say', JSON.stringify(await state()));
await ff(0.5); await shot('03_l1_welcome');
await pg.click('.tut-bubble [data-t=ok]'); await ff(0.5);
check('Eğitim adım 2: otobüs sürükleme', (await state()).tut === 'tap');
await shot('04_l1_finger');
// yanlış otobüse dokun: reddedilmeli
await realTap(2); await ff(0.3);
check('Eğitim yanlış otobüsü reddediyor', (await state()).parked === 0 && (await state()).moves === 0);
// doğru otobüsü gerçek dokunuşla sürükle (kırmızı id=0)
await realTap(0); await ff(0.6); await shot('05_l1_driving');
await ff(2.0); await shot('06_l1_boarding');
let s = await state(); check('Kırmızı otobüs park etti', s.parked >= 1 || s.gone >= 1, JSON.stringify(s));
s = await waitIdle(); await shot('07_l1_after_red');
check('Kırmızı yolcular bindi (4 yolcu) ve otobüs kalktı', s.qi === 4 && s.gone === 1, JSON.stringify(s));
check('Eğitim sıradaki adıma geçti (mavi)', s.tut === 'tap', JSON.stringify(s));
await realTap(1); s = await waitIdle();
check('Mavi otobüs sonrası 10 yolcu bindi', s.qi === 10, JSON.stringify(s));
await realTap(2); s = await waitIdle(60); await ff(2.5); await pg.waitForTimeout(2300);
s = await state(); await shot('08_l1_done');
check('Seviye 1 tamamlandı (sonuç ekranı)', s.phase === 'ended' && s.modals === 1, JSON.stringify(s));
await ff(3); await shot('09_l1_result');
check('Seviye 2 açıldı + jeton ödülü', s.level === 2 && s.coins > coins1, `level=${s.level} coins=${s.coins}`);
await pg.click('[data-act=next]'); await pg.waitForTimeout(600); await ff(0.5);
s = await state(); check('Seviye 2 başladı, EĞİTİM YOK (eğitim yalnızca 1. seviyede)', s.tut === null && s.phase === 'play', JSON.stringify(s));
await pg.waitForTimeout(1600);
s = await state(); check('VIP tanıtımı ilk VIP seviyesinde bir kez açılıyor', s.modals === 1 && await ev(() => window.__game.save.data.tutorial.vip === true), JSON.stringify(s)); await shot('15_l2_vip_preview');
await pg.click('[data-act=ok]'); await ff(0.4);
await ev(() => window.__game.restart()); await pg.waitForTimeout(1800);
s = await state(); check('VIP tanıtımı ikinci kez açılmıyor (tek gösterim)', s.modals === 0 && s.tut === null, JSON.stringify(s));
// peş peşe gönderme: iki otobüs beklemeden art arda
const sol = await ev(() => window.__game.lvl.stages[0].solution.slice(0, 3));
const two = await ev((sol) => { const g = window.__game; g.handleTap(sol[0]); g.handleTap(sol[1]); return [g.state.buses[sol[0]].st, g.state.buses[sol[1]].st]; }, sol);
check('Otobüsler peş peşe gönderilebiliyor (yoldayken ikincisine de dokunulabilir)', two.every((x) => x === 'parked' || x === 'gone'), JSON.stringify(two));
await ff(0.3); const trav = await ev(() => window.__game.scene.isTraveling()); check('İki otobüs aynı anda yolda', trav === true);
await shot('16_l2_convoy');
s = await waitIdle(); check('Peş peşe giden otobüsler sorunsuz park etti', s.parked + s.gone >= 2 && s.phase === 'play', JSON.stringify(s));

console.log(JSON.stringify({ pass: results.filter((r) => r.ok).length, fail: results.filter((r) => !r.ok).length, errors: errors.length }));
fs.writeFileSync(`${OUT}/results.json`, JSON.stringify({ results, errors }, null, 1));
await browser.close(); srv.close();
