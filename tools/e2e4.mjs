// Uçtan uca test 4: geri alma sonrası park etmiş otobüslerin yolcu alması, VIP hakkı (kuyruğun her yerinden doldurma),
// Karıştır, paketler, otobüs tasarım çeşitliliği.
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

await pg.goto(`http://localhost:${port}/index.html?fast`); await pg.waitForTimeout(1800);
await prep();

// ---------- 1) Geri alma sonrası park etmiş otobüsler yolcu almaya devam eder (kullanıcının bildirdiği hata)
await ev(() => window.__game.startLevel(8)); await ff(0.5);
const rv = await ev(async () => {
  const g = window.__game; const free = () => g.state.buses.filter((b) => b.st === 'board' && g.state && (() => { const s = g.state; const d = { U: [0, -1], D: [0, 1], L: [-1, 0], R: [1, 0] }[b.dir]; const occ = new Set(); for (const o of s.buses) if (o.st === 'board' && o.id !== b.id) { const hz = o.dir === 'L' || o.dir === 'R'; for (let i = 0; i < o.len; i++) occ.add(hz ? (o.x + i) + ',' + o.y : o.x + ',' + (o.y + i)); } const hz = b.dir === 'L' || b.dir === 'R'; let cx = b.dir === 'R' ? b.x + b.len - 1 : b.dir === 'D' ? b.x : b.x, cy = b.dir === 'D' ? b.y + b.len - 1 : b.y; if (!hz && b.dir === 'U') cy = b.y; for (;;) { cx += d[0]; cy += d[1]; if (cx < 0 || cy < 0 || cx >= s.w || cy >= s.h) return true; if (occ.has(cx + ',' + cy)) return false; } })());
  const f = free(); g.handleTap(f[0].id); g.handleTap(f[1].id);    // iki otobüs peş peşe: ikinci hamlenin anlık görüntüsünde ilki daha yolda (arrived=false)
  return { tapped: [f[0].id, f[1].id] };
});
await ff(0.1);
const undone = await ev(() => { const g = window.__game; const ok = g.doUndo(); return { ok, parked: g.state.buses.filter((b) => b.st === 'parked').map((b) => ({ id: b.id, arrived: b.arrived })) }; });
check('Geri alınca park etmiş otobüsler "varmış" sayılır (arrived=true)', undone.ok && undone.parked.length >= 1 && undone.parked.every((b) => b.arrived), JSON.stringify(undone));
// bu otobüsün rengindeki yolcular gerçekten biniyor mu?
const board = await ev(async () => { const g = window.__game; const s = g.state; const p = s.buses.find((b) => b.st === 'parked'); const before = p.boarded; const colorInWindow = s.queue.slice(s.qi, s.qi + 3).includes(p.color); return { id: p.id, color: p.color, before, colorInWindow }; });
await ff(0.5);
// pencerede rengi yoksa bir tur daha öne al: ilk yolcuyu o renge çevir (test amaçlı) ve bin
await ev(() => { const g = window.__game; const s = g.state; const p = s.buses.find((b) => b.st === 'parked'); if (!s.queue.slice(s.qi, s.qi + 3).includes(p.color)) s.queue[s.qi] = p.color; g.scene.idleFired = false; });
await ff(4);
const bd = await ev((id) => { const b = window.__game.state.buses[id]; return { boarded: b.boarded, st: b.st }; }, board.id);
check('Geri almadan sonra otobüs yolcu alıyor', bd.boarded > board.before || bd.st === 'gone', JSON.stringify({ board, bd }));

// ---------- 2) VIP: seçilen otobüs VIP alanına gelir ve rengini kuyruğun derinlerinden doldurur
await ev(() => window.__game.startLevel(10)); await ff(0.5);
const v0 = await ev(() => { const g = window.__game; g.save.data.powerups.vip = 2; const s = g.state; const cnt = {}; for (const c of s.queue) cnt[c] = (cnt[c] || 0) + 1; return { q: s.queue.length, cnt, buses: s.buses.map((b) => ({ id: b.id, c: b.color, seats: b.seats })) }; });
const pickBus = await ev(() => { const g = window.__game; const s = g.state; const b = s.buses.find((x) => x.st === 'board' && !s.queue.slice(0, 3).includes(x.color)) || s.buses[0]; g.onPower('vipcall'); const mode = g.mode; g.handleTap(b.id); return { id: b.id, color: b.color, seats: b.seats, mode }; });
await shot('vip_wings'); await ff(1.4);
await ff(10);
const v1 = await ev((id) => { const g = window.__game; const s = g.state; const b = s.buses[id]; const cnt = {}; for (const c of s.queue.slice(s.qi)) cnt[c] = (cnt[c] || 0) + 1; return { st: b.st, boarded: b.boarded, seats: b.seats, vipSlot: s.vipSlot, qLeft: s.queue.length - s.qi, cnt }; }, pickBus.id);
check('VIP otobüs rengindeki yolcularla doldu ve kalktı (kuyruğun derinlerinden de aldı)', pickBus.mode === 'vip' && v1.boarded === pickBus.seats && v1.st === 'gone' && v1.vipSlot === null, JSON.stringify({ pickBus, v1 }));
check('VIP yalnızca kendi rengini aldı (diğer renkler kuyruktan eksilmedi)', (() => { const c = pickBus.color; const total = v0.cnt; const now = v1.cnt; return Object.keys(total).every((k) => (+k === c ? (total[k] - (now[k] || 0)) === pickBus.seats : (now[k] || 0) === total[k])); })(), JSON.stringify({ was: v0.cnt, now: v1.cnt }));
check('VIP hakkı 1 azaldı', await ev(() => window.__game.save.data.powerups.vip) === 1);

// ---------- 3) Karıştır
await ev(() => window.__game.startLevel(12)); await ff(0.5);
const sh0 = await ev(() => { const g = window.__game; g.save.data.powerups.shuffle = 1; return JSON.stringify({ p: g.state.buses.map((b) => `${b.id}:${b.x},${b.y},${b.dir}`), c: g.state.buses.map((b) => b.color) }); });
const sh = await ev(async () => { const g = window.__game; g.onPower('shuffle'); const menu = !!document.querySelector('.modal-bg [data-act=stock]'); g.ui.closeAll(); const ok = await g.colorShuffle('stock'); return { menu, ok, left: g.save.data.powerups.shuffle, now: JSON.stringify({ p: g.state.buses.map((b) => `${b.id}:${b.x},${b.y},${b.dir}`), c: g.state.buses.map((b) => b.color) }), vis: g.scene.busVis.size, boardN: g.state.buses.filter((b) => b.st !== 'gone').length }; });
await ff(1);
const solv = await ev(() => window.__game.doHint());
const o0 = JSON.parse(sh0), o1 = JSON.parse(sh.now);
check('Karıştır (renk): menü açılır, hak azalır, renkler değişir, yerler/yönler aynı, görsel yenilenir', sh.menu && sh.ok && sh.left === 0 && o0.p.join() === o1.p.join() && o0.c.join() !== o1.c.join() && sh.vis === sh.boardN, JSON.stringify({ menu: sh.menu, left: sh.left, vis: sh.vis, n: sh.boardN }));
check('Karıştırdıktan sonra seviye hâlâ çözülebilir (ipucu çözüm buldu)', solv === true);
await shot('shuffled_board');

// ---------- 4) Paketler
await ev(() => { const g = window.__game; g.ui.closeAll(); g.save.data.coins = 5000; g.save.data.powerups.vip = 0; g.save.data.powerups.shuffle = 0; });
const pk = await ev(() => { const g = window.__game; const ok = g.buyPack('starter'); return { ok, coins: g.save.data.coins, vip: g.save.data.powerups.vip, sh: g.save.data.powerups.shuffle }; });
check('Başlangıç paketi jetonla alınıyor (420) ve haklar ekleniyor', pk.ok && pk.coins === 5000 - 420 && pk.vip === 2 && pk.sh === 2, JSON.stringify(pk));
const poor = await ev(() => { const g = window.__game; g.save.data.coins = 100; return g.buyPack('master'); });
check('Jeton yetmezse paket alınmıyor', poor === false && (await ev(() => window.__game.save.data.coins)) === 100);
await ev(() => { const g = window.__game; g.save.data.coins = 5000; g.goMenu(); g.ui.shop('packs'); }); await pg.waitForTimeout(500);
check('Mağazada Paketler sekmesi paketleri listeliyor', await ev(() => /Başlangıç Paketi/.test(document.body.innerText) && /VIP Paketi/.test(document.body.innerText)));
await shot('packs_tab');

// ---------- 5) Otobüs tasarım çeşitliliği
await ev(() => { const g = window.__game; g.ui.closeAll(); g.startLevel(10); }); await ff(0.6);
const styles = await ev(() => { const g = window.__game; return [...new Set([...g.scene.busVis.values()].map((v) => v.parts.style))]; });
check('Aynı seviyede en az 3 farklı otobüs tasarımı var', styles.length >= 3, styles.join(','));
await shot('variety');

console.log(JSON.stringify({ pass: results.filter((r) => r.ok).length, fail: results.filter((r) => !r.ok).length, errors: errors.length }));
await browser.close(); srv.close();
