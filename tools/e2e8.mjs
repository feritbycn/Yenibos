// Uçtan uca test 8: sınırsız hamle, renk karıştırma, ikmal, çark, zor seviye teklifi, premium (sahte mağaza), kalıcılık.
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
const stt = () => ev(() => { const g = window.__game; const s = g.state; const d = g.save.data; return { phase: g.phase, limit: s?.moveLimit, coins: d.coins, shuf: d.powerups.shuffle, modals: g.ui.modals.length }; });
const mockAd = (mode) => ev((m) => { window.__calls = 0; window.__mode = m; window.__game.ads.showRewarded = async () => { window.__calls++; await new Promise((r) => setTimeout(r, 150)); return window.__mode === 'cancel' ? { ok: false, reason: 'cancelled' } : window.__mode === 'error' ? { ok: false, reason: 'error' } : { ok: true, token: 'k' + Math.random() }; }; }, mode);
const setAd = (m) => ev((x) => { window.__mode = x; }, m);

// ===== A) Sınırsız hamle
await ev(() => window.__game.startLevel(30)); await ff(0.6);
let a = await ev(() => { const g = window.__game; const s = g.state; const E = window.__E; let n = 0; for (let i = 0; i < 150; i++) { const b = s.buses.find((x) => x.st === 'board'); if (!b) break; const r = E.tap(s, b.id); n++; } return { limit: s.moveLimit, ev: E.evaluate(s).reason || E.evaluate(s).status, moves: s.moves, chip: document.getElementById('chipMoves').hidden, txt: document.body.textContent.includes('Hamlelerin bitti') }; });
check('Hamle sınırı yok: moveLimit null, sayaç gizli, "Hamlelerin bitti" penceresi yok', a.limit === null && a.chip && !a.txt && a.ev !== 'moves', JSON.stringify(a));
await ev(() => { window.__game.ui.closeAll(); window.__game.startLevel(30); }); await ff(0.6); await prep();
const lims = await ev(() => [1, 10, 41, 90, 120].map((n) => { window.__game.startLevel(n); return window.__game.state.moveLimit; }));
check('Hiçbir seviyede (1–120) hamle sınırı yok', lims.every((x) => x === null), JSON.stringify(lims));
await ev(() => { window.__game.startLevel(30); }); await ff(0.6);
const blocked = await ev(async () => { const g = window.__game; const s = g.state; const E = window.__E; let ok = 0; for (let k = 0; k < 60; k++) { const b = s.buses.find((x) => x.st === 'board' && E.blockers(s, x).length); if (!b) break; E.tap(s, b.id); ok++; } return { ok, phase: g.phase }; });
check('Engelli otobüse çok kez dokunmak oyunu bitirmez', blocked.phase === 'play', JSON.stringify(blocked));

// ===== B) Renk karıştırma menüsü
await ev(() => { window.__game.ui.closeAll(); window.__game.startLevel(12); }); await ff(0.8); await prep();
await ev(() => { const d = window.__game.save.data; d.coins = 500; d.powerups.shuffle = 0; });
const snap = () => ev(() => { const s = window.__game.state; return JSON.stringify({ b: s.buses.map((b) => [b.x, b.y, b.dir, b.len, b.seats, b.st]), c: s.buses.map((b) => b.color), q: s.queue.slice(s.qi) }); });
const base = JSON.parse(await snap());
await pg.click('#powerBar [data-p=shuffle]'); await pg.waitForTimeout(400);
let m = await ev(() => ({ title: document.querySelector('.modal-bg .sheet-head')?.textContent.trim(), coin: !!document.querySelector('.modal-bg [data-act=coin]'), ad: !!document.querySelector('.modal-bg [data-act=ad]'), stock: !!document.querySelector('.modal-bg [data-act=stock]') }));
check('Karıştır menüsü: başlık, 100 jeton ve reklam seçeneği (hak yokken hak düğmesi yok)', /Araçların Renklerini Karıştır/.test(m.title) && m.coin && m.ad && !m.stock, JSON.stringify(m));
await shot('shuffle_menu');
// iptal: değişiklik yok
await mockAd('cancel'); const s0 = await stt();
await pg.click('.modal-bg [data-act=ad]'); await pg.waitForTimeout(700);
let s1 = await stt(); let sn = JSON.parse(await snap());
check('Reklam iptal: renk değişmez, hak/jeton değişmez, menü açık kalır', JSON.stringify(sn) === JSON.stringify(base) && s1.shuf === 0 && s1.coins === 500 && s1.modals === 1, JSON.stringify(s1));
await setAd('error'); await pg.click('.modal-bg [data-act=ad]'); await pg.waitForTimeout(700);
s1 = await stt(); check('Reklam hatası: hiçbir şey verilmez/harcanmaz', s1.shuf === 0 && s1.coins === 500 && JSON.parse(await snap()).c.join() === base.c.join());
// jetonla
await pg.click('.modal-bg [data-act=coin]'); await pg.waitForTimeout(600); await ff(1.5);
s1 = await stt(); sn = JSON.parse(await snap());
check('100 jetonla: tam 100 düşer, menü kapanır, renkler değişir', s1.coins === 400 && s1.modals === 0 && sn.c.join() !== base.c.join(), JSON.stringify(s1));
check('Renk değişince konum/yön/boyut/koltuk aynı kalır', JSON.stringify(sn.b) === JSON.stringify(base.b));
const solv = await ev(() => { const E = window.__E; const s = E.clone(window.__game.state); return window.__solve(s, { useVip: false, maxNodes: 300000 }).solved; });
check('Karıştırma sonrası bulmaca hâlâ çözülebilir (çözücü)', solv === true);
const mapOk = (() => { const m = {}; let bij = true; base.c.forEach((c, i) => { if (c === 99) return; if (m[c] === undefined) m[c] = sn.c[i]; else if (m[c] !== sn.c[i]) bij = false; }); const vals = Object.values(m); return bij && new Set(vals).size === vals.length && Object.keys(m).every((k) => m[k] !== +k); })();
check('Eşleme tutarlı: aynı eski renk → hep aynı yeni renk, iki renk birleşmez', mapOk);
// yolcu/otobüs uyumu: kuyruk da aynı eşlemeyle değişti
const mq = (() => { const m = {}; base.c.forEach((c, i) => { m[c] = sn.c[i]; }); return base.q.every((c, i) => m[c] === undefined || m[c] === sn.q[i]); })();
check('Yolcu kuyruğu da aynı eşlemeyle güncellenir (eşleştirme tutarlı)', mq);
// yetersiz jeton
await ev(() => { window.__game.save.data.coins = 99; }); await ff(1.2);
await pg.click('#powerBar [data-p=shuffle]'); await pg.waitForTimeout(300);
const poor = await ev(() => ({ need: !!document.querySelector('.modal-bg [data-act=needcoins]'), coin: !!document.querySelector('.modal-bg [data-act=coin]') }));
check('99 jetonda 100 jetonluk seçenek yerine "Jeton kazan" yönlendirmesi', poor.need && !poor.coin, JSON.stringify(poor));
await ev(() => window.__game.ui.closeAll());
// reklam başarı: +1 hak sonra hemen kullanılır (net 0), renk değişir; çift tetik tek işlem
await setAd('ok'); const before = (await snap());
await ev(() => { window.__game.save.data.powerups.shuffle = 0; });
const dbl = await ev(async () => { const g = window.__game; const r = await Promise.all([g.colorShuffle('ad'), g.colorShuffle('ad')]); return { r, shuf: g.save.data.powerups.shuffle, calls: window.__calls }; });
await ff(1.5);
check('Reklam başarıyla bitince renkler değişir; eşzamanlı çift çağrıda tek işlem, hak net 0', dbl.r.filter(Boolean).length === 1 && dbl.shuf === 0 && (await snap()) !== before, JSON.stringify(dbl));
// hak yolu
await ev(() => { window.__game.save.data.powerups.shuffle = 2; window.__game.save.data.coins = 300; }); await ff(1.5);
await pg.click('#powerBar [data-p=shuffle]'); await pg.waitForTimeout(300);
await pg.click('.modal-bg [data-act=stock]'); await pg.waitForTimeout(600); await ff(1.5);
s1 = await stt(); check('Hak varken "Hakkını kullan": hak 2→1, jeton değişmez', s1.shuf === 1 && s1.coins === 300, JSON.stringify(s1));

// ===== C) Günlük ikmal
await ev(() => { const g = window.__game; g.ui.closeAll(); g.goMenu(); const d = g.save.data; d.supply = { day: '', claimed: {}, nextAt: 0 }; d.coins = 0; });
await ev(() => window.__game.ui.daily('supply')); await pg.waitForTimeout(300);
let sp = await ev(() => { const st = window.__game.supplyState(); return st.tiers.map((t) => [t.coins, t.ad, t.ready]); });
check('İkmal: 15/20/50/70/100, yalnız ilki hazır, reklamlılar işaretli', JSON.stringify(sp) === JSON.stringify([[15, false, true], [20, true, false], [50, true, false], [70, true, false], [100, true, false]]), JSON.stringify(sp));
await ev(async () => { await window.__game.claimSupply('s0'); });
let c1 = await ev(() => ({ coins: window.__game.save.data.coins, again: null }));
const again = await ev(async () => window.__game.claimSupply('s0'));
check('İkmal 1: +15 jeton, ikinci kez alınamaz', c1.coins === 15 && again === false, JSON.stringify({ c1, again }));
const early = await ev(async () => { const g = window.__game; return { r: await g.claimSupply('s1'), coins: g.save.data.coins, wait: g.supplyState().wait }; });
check('Bekleme süresi dolmadan sıradaki ödül alınamaz (gerçek zamanlı sayaç)', early.r === false && early.coins === 15 && early.wait > 0, JSON.stringify(early));
await mockAd('cancel'); await ev(() => { window.__game.save.data.supply.nextAt = 0; });
const cn = await ev(async () => { const g = window.__game; return { r: await g.claimSupply('s1'), coins: g.save.data.coins }; });
check('Reklamlı ikmal: reklam iptalinde ödül yok', cn.r === false && cn.coins === 15, JSON.stringify(cn));
await setAd('ok');
const ok2 = await ev(async () => { const g = window.__game; const r = await Promise.all([g.claimSupply('s1'), g.claimSupply('s1')]); return { r, coins: g.save.data.coins }; });
check('Reklam başarılı: +20 jeton, eşzamanlı çift çağrıda tek ödül', ok2.coins === 35 && ok2.r.filter(Boolean).length === 1, JSON.stringify(ok2));
const tot = await ev(async () => { const g = window.__game; let t = 0; for (const id of ['s2', 's3', 's4']) { g.save.data.supply.nextAt = 0; if (await g.claimSupply(id)) t++; } return { t, coins: g.save.data.coins }; });
check('Kalan ödüller (50/70/100) sırayla alınır, toplam 255', tot.t === 3 && tot.coins === 255, JSON.stringify(tot));
await ev(() => { window.__game.save.data.supply.day = '1999-01-01'; });
const nd = await ev(() => window.__game.supplyState().tiers.filter((t) => t.done).length);
check('Yeni günde ikmal sıfırlanır', nd === 0);
const rend = await ev(() => { window.__game.ui.closeAll(); window.__game.ui.daily('supply'); return document.querySelector('.modal-bg').textContent.replace(/\s+/g, ' '); }); await pg.waitForTimeout(300);
check('İkmal ekranında reklamlı ödüller 🎬 ile işaretli', /🎬 reklam/.test(rend), rend.slice(0, 120));
await shot('supply');

// ===== D) Şanslı çark
await ev(() => { const g = window.__game; g.ui.closeAll(); g.save.data.wheel = { day: '', free: 0, ad: 0, last: '' }; g.save.data.coins = 0; });
const pw0 = await ev(() => ({ ...window.__game.save.data.powerups }));
const wsp = await ev(async () => { const g = window.__game; const r = await g.spinWheel('free'); const r2 = await g.spinWheel('free'); return { r: r && r.seg.id, r2, coins: g.save.data.coins, last: g.save.data.wheel.last, pw: { ...g.save.data.powerups } }; });
const segDef = await ev((id) => window.__CFG.WHEEL.segments.find((s) => s.id === id), wsp.r);
const gainedOk = segDef.coins ? wsp.coins === segDef.coins : wsp.pw[segDef.power[0]] === pw0[segDef.power[0]] + segDef.power[1];
check('Çark: ücretsiz çevirme tam bir ödül verir, günde yalnızca 1 ücretsiz', !!wsp.r && wsp.r2 === null && gainedOk && wsp.last === wsp.r, JSON.stringify(wsp));
await mockAd('cancel');
const wc = await ev(async () => { const g = window.__game; const c0 = g.save.data.coins; const r = await g.spinWheel('ad'); return { r, same: c0 === g.save.data.coins, ad: g.save.data.wheel.ad }; });
check('Çark: reklam iptalinde çevirme/ödül yok', wc.r === null && wc.same && wc.ad === 0, JSON.stringify(wc));
await setAd('ok');
const wa = await ev(async () => { const g = window.__game; const out = []; for (let i = 0; i < 5; i++) out.push(!!(await g.spinWheel('ad'))); return { out, ad: g.save.data.wheel.ad }; });
check('Çark: reklamla en çok 3 çevirme (günlük sınır)', JSON.stringify(wa.out) === JSON.stringify([true, true, true, false, false]) && wa.ad === 3, JSON.stringify(wa));
const wcc = await ev(async () => { const g = window.__game; g.save.data.wheel = { day: g.save.data.wheel.day, free: 0, ad: 0, last: '' }; const c0 = g.save.data.coins; const rr = await Promise.all([g.spinWheel('free'), g.spinWheel('free')]); return rr.filter(Boolean).length; });
check('Çark: eşzamanlı iki çevirme isteğinde tek ödül', wcc === 1, String(wcc));
// animasyon sonucu yansıtır
await ev(() => { const g = window.__game; g.save.data.wheel = { day: '', free: 0, ad: 0, last: '' }; g.ui.closeAll(); g.ui.daily('wheel'); }); await pg.waitForTimeout(300);
await pg.click('.modal-bg [data-act=spin][data-mode=free]'); await pg.waitForTimeout(4600);
const an = await ev(() => { const g = window.__game; const last = g.save.data.wheel.last; const segs = window.__CFG.WHEEL.segments; const idx = segs.findIndex((s) => s.id === last); const el = document.querySelector('.wheel'); const m = /rotate\(([-\d.]+)deg\)/.exec(el.style.transform); const ang = ((+m[1]) % 360 + 360) % 360; const deg = 360 / segs.length; const under = ((360 - ang) % 360); return { idx, shown: Math.floor(under / deg) }; });
check('Çark animasyonu kaydedilen gerçek sonuca durur', an.idx === an.shown, JSON.stringify(an));
await shot('wheel');
await ev(() => window.__game.ui.closeAll());

// ===== E) Zor seviye teklifi
const offer = await ev(async () => {
  const g = window.__game; g.ui.closeAll(); const d = g.save.data; const out = {};
  g.startLevel(12); await new Promise((r) => setTimeout(r, 100)); g.ui.closeAll(); d.offers = { day: window.__E ? g.supplyState().day : '', count: 0, lastAt: 0, done: {} };
  d.cur = { level: 12, fails: 0, rescues: 0, startedAt: Date.now() }; out.noFail = g.offerDue();
  d.cur.fails = 3; out.due = g.offerDue();
  out.shown = g.maybeHardOffer(); out.modal = !!document.querySelector('.modal-bg [data-act=skip]');
  g.ui.closeAll(); out.again = g.offerDue();
  g.levelN = 13; d.cur = { level: 13, fails: 3, rescues: 0, startedAt: Date.now() }; out.cool = g.offerDue();
  d.offers.lastAt = 0; out.afterCool = g.offerDue();
  g.maybeHardOffer(); g.ui.closeAll(); d.offers.lastAt = 0; g.levelN = 14; d.cur = { level: 14, fails: 3, rescues: 0, startedAt: Date.now() }; g.maybeHardOffer(); g.ui.closeAll(); d.offers.lastAt = 0; g.levelN = 15; d.cur = { level: 15, fails: 3, rescues: 0, startedAt: Date.now() }; out.cap = g.offerDue();
  return out; });
check('Teklif: başarısızlık yokken yok, takılınca bir kez çıkar, kapatılabilir', !offer.noFail && offer.due && offer.shown && offer.modal, JSON.stringify(offer));
check('Teklif sıklığı: aynı seviyede tekrar yok, bekleme süresi, günlük en çok 3', !offer.again && !offer.cool && offer.afterCool && !offer.cap, JSON.stringify(offer));
await ev(() => { const g = window.__game; g.ui.closeAll(); g.save.data.coins = 1000; g.save.data.powerups.vip = 0; g.save.data.powerups.shuffle = 0; g.save.data.powerups.call = 0; g.ui.hardOffer(); }); await pg.waitForTimeout(300);
await shot('offer');
await pg.click('.modal-bg [data-act=buy]'); await pg.waitForTimeout(300);
const ob = await stt(); const pw = await ev(() => ({ v: window.__game.save.data.powerups.vip, s: window.__game.save.data.powerups.shuffle, c: window.__game.save.data.powerups.call }));
check('Teklif satın alma: tam 300 jeton, 2 VIP + 2 renk karıştırma + 2 çağırma', ob.coins === 700 && pw.v === 2 && pw.s === 2 && pw.c === 2 && ob.modals === 0, JSON.stringify({ ob, pw }));
await ev(() => { const g = window.__game; g.save.data.coins = 100; g.ui.hardOffer(); }); await pg.waitForTimeout(200);
const dis = await ev(() => document.querySelector('.modal-bg [data-act=buy]').disabled);
await pg.click('.modal-bg [data-act=skip]'); await pg.waitForTimeout(200);
check('Yetersiz jetonda paket düğmesi kapalı; "Şimdilik geç" ücretsiz devam ettirir', dis && (await stt()).modals === 0 && (await stt()).coins === 100);

// ===== F) Premium (sahte mağaza eklentisi)
await ev(() => { const g = window.__game; g.ui.closeAll(); g.goMenu(); g.save.data.premium = { owned: {} }; g.save.data.ads.removed = false; g.save.data.iap = { tx: [] }; });
await ev(() => window.__game.ui.shop('premium')); await pg.waitForTimeout(300);
const off = await ev(() => ({ dis: [...document.querySelectorAll('.modal-bg [data-act=prem]')].every((b) => b.disabled), n: document.querySelectorAll('.modal-bg [data-act=prem]').length }));
const offBuy = await ev(async () => { const g = window.__game; const r = await g.buyPremium('prem_noads'); return { r, removed: g.save.data.ads.removed }; });
check('Mağaza bağlı değilken premium düğmeleri kapalı ve hiçbir şey verilmez', off.dis && off.n === 4 && offBuy.r === false && !offBuy.removed, JSON.stringify({ off, offBuy }));
await ev(() => { window.__CFG.IAP.mode = 'play'; window.__tx = 0; window.__fail = false; window.__dup = false; window.Capacitor = window.Capacitor || {}; window.Capacitor.Plugins = window.Capacitor.Plugins || {}; window.Capacitor.Plugins.NativePurchases = { purchaseProduct: async (o) => { if (window.__fail) throw new Error('cancel'); return { transactionId: window.__dup ? 'T-FIXED' : 'T' + (++window.__tx) }; }, restorePurchases: async () => ({ purchases: [{ productIdentifier: 'premium_vip' }, { productIdentifier: 'premium_daily' }] }) }; });
await ev(() => { window.__fail = true; });
const f1 = await ev(async () => { const g = window.__game; const r = await g.buyPremium('prem_noads'); return { r, removed: g.save.data.ads.removed }; });
check('Satın alma başarısız/iptal: içerik verilmez', f1.r === false && !f1.removed, JSON.stringify(f1));
await ev(() => { window.__fail = false; });
const f2 = await ev(async () => { const g = window.__game; const r = await g.buyPremium('prem_noads'); const r2 = await g.buyPremium('prem_noads'); return { r, r2, removed: g.save.data.ads.removed, tx: g.save.data.iap.tx.length }; });
check('Başarılı satın alma: reklamsız açılır, aynı ürün ikinci kez alınmaz', f2.r && !f2.r2 && f2.removed && f2.tx === 1, JSON.stringify(f2));
const pk = await ev(async () => { const g = window.__game; const v0 = g.save.data.powerups.vip; await g.buyPremium('prem_power'); await g.buyPremium('prem_power'); return g.save.data.powerups.vip - v0; });
check('Tüketilebilir güç paketi tekrar alınabilir (+3 VIP × 2)', pk === 6, String(pk));
const dup = await ev(async () => { const g = window.__game; window.__dup = true; await g.buyPremium('prem_vip'); const owned1 = g.save.data.owned.vipSkin.length; g.save.data.premium.owned = {}; g.save.data.owned.vipSkin = ['gold']; const r = await g.buyPremium('prem_vip'); return { r, skins: g.save.data.owned.vipSkin.length, owned1 }; });
check('Tekrarlanan işlem kimliği çift ödüle yol açmaz', dup.r === false && dup.skins === 1 && dup.owned1 === 3, JSON.stringify(dup));
const rs = await ev(async () => { const g = window.__game; window.__dup = false; g.save.data.premium.owned = {}; g.save.data.owned.vipSkin = ['gold']; const n = await g.restorePremium(); return { n, skins: g.save.data.owned.vipSkin.length, daily: !!g.save.data.premium.owned.prem_daily }; });
check('Geri yükleme: mağazanın bildirdiği ürünler geri verilir', rs.n === 2 && rs.skins === 3 && rs.daily, JSON.stringify(rs));
const db = await ev(async () => { const g = window.__game; g.save.data.daily = { lastClaim: '', streak: 0 }; const c0 = g.save.data.coins; await g.claimDaily(); return g.save.data.coins - c0; });
check('Premium günlük ek ödül: günlük ödüle +25 eklenir', db === 20 + 25, String(db));
await ev(() => { window.__CFG.IAP.mode = 'off'; });
check('Premium hamle sınırını satmaz (listede böyle bir ürün yok)', await ev(() => !window.__CFG.PREMIUM.some((p) => /hamle|move/i.test(p.name + p.desc))));

// ===== G) Kalıcılık + eski kayıt
await ev(() => { const g = window.__game; g.save.data.coins = 4242; g.save.save(true); });
await pg.reload(); await pg.waitForTimeout(1800);
const per = await ev(() => { const d = window.__game.save.data; return { coins: d.coins, sup: Object.keys(d.supply.claimed).length, prem: Object.keys(d.premium.owned).length, wheel: !!d.wheel.day }; });
check('Yeniden açılışta jeton, ikmal, çark ve premium kayıtları korunur', per.coins === 4242 && per.sup >= 0 && per.prem >= 2 && per.wheel, JSON.stringify(per));
await ev(() => { localStorage.setItem('busPuzzleDeluxe.save.v1', JSON.stringify({ v: 1, level: 9, coins: 321, powerups: { undo: 1, moves: 5, time: 5 } })); });
await pg.reload(); await pg.waitForTimeout(1800);
const old = await ev(() => { const d = window.__game.save.data; return { level: d.level, coins: d.coins, supply: !!d.supply, wheel: !!d.wheel, cur: !!d.cur }; });
check('Eski kayıt (yeni alanlar yok) bozulmadan açılır, ilerleme/jeton korunur', old.level === 9 && old.coins === 321 && old.supply && old.wheel && old.cur, JSON.stringify(old));
await ev(() => { localStorage.setItem('busPuzzleDeluxe.save.v1', '{bozuk json'); });
await pg.reload(); await pg.waitForTimeout(1800);
check('Bozuk kayıt dosyasında oyun açılır (varsayılana döner)', (await ev(() => typeof window.__game.save.data.coins)) === 'number');

check('Konsol hatası yok', errors.length === 0, errors.slice(0, 3).join(' | '));
const f = results.filter((r) => !r.ok).length; console.log(`\n${results.length - f}/${results.length} geçti`);
await browser.close(); srv.close(); process.exit(f ? 1 : 0);
