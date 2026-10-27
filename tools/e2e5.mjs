// Uçtan uca test 5: beklemeden biniş, 2x video önerisi, zorunlu reklam döngüsü, reklamsız teklifi, bildirimler (sahte eklentiyle).
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
const prep = () => ev(() => { const g = window.__game; g.ui.closeAll(); const t = g.save.data.tutorial; t.l1 = t.l2 = t.vip = true; g.save.data.coins = 5000; });
const adLog = () => ev(() => window.__adLog || []);
await pg.goto(`http://localhost:${port}/index.html?fast`); await pg.waitForTimeout(1800);
await prep();

// ---------- 1) Kalkış/diğer yolcuyu beklemeden biniş: tüm seviyeyi oyna, kalkış sırasında kuyruk ilerliyor mu?
await ev(() => window.__game.startLevel(12)); await ff(0.5);
const play = await ev(async () => {
  const g = window.__game; const sc = g.scene; let maxDep = 0, boardDuringDepart = 0, departWithWalkers = 0, lastQi = g.state.qi, frames = 0, taps = 0;
  for (let step = 0; step < 4000 && g.phase === 'play'; step++) {
    sc.noRender = true;
    for (let k = 0; k < 3; k++) {
      const wasDeparting = sc.stripBusy; const w = sc.walkers.size;
      g.frame(1 / 30); frames++;
      if (g.state.qi > lastQi && wasDeparting) boardDuringDepart++;
      lastQi = g.state.qi; maxDep = Math.max(maxDep, sc.nDep);
      if (!wasDeparting && sc.stripBusy && w > 0) departWithWalkers++;
    }
    sc.noRender = false;
    if (!sc.isTraveling() && !sc.stripBusy && g.phase === 'play' && step % 2 === 0) {
      g.doHint(); const id = [...sc.glows.keys()][0]; sc.clearGlows();
      if (id !== undefined) { g.handleTap(id); taps++; }
    }
  }
  return { phase: g.phase, qi: g.state.qi, total: g.state.queue.length, boardDuringDepart, departWithWalkers, taps, frames, maxDep };
});
check('Seviye bitti (kazanıldı)', play.phase === 'won' || play.phase === 'result' || play.qi >= play.total, JSON.stringify(play));
check('Otobüs giderken sıradaki yolcular binmeye devam etti (beklemedi)', play.boardDuringDepart > 0, 'kalkış sırasında binen: ' + play.boardDuringDepart);
check('Kalkış, yürüyen yolcuları beklemeden başladı', play.departWithWalkers > 0, 'yürürken başlayan kalkış: ' + play.departWithWalkers);

check('Otobüsler art arda gider: aynı anda 2+ otobüs yolda (öncekini beklemez)', play.maxDep >= 2, 'en çok eşzamanlı kalkış: ' + play.maxDep);

// ---------- 2) Sonuç ekranı: 2x video önerisi öne çıkar, ödül yalnızca reklam bittikten sonra
await pg.waitForTimeout(2400);
const res = await ev(() => { const g = window.__game; const b = document.querySelector('[data-act=double]'); const nx = document.querySelector('[data-act=next]'); return { dbl: b?.textContent.trim(), cls: b?.className, nextCls: nx?.className, coins: g.save.data.coins, order: [...document.querySelectorAll('[data-act]')].map((x) => x.dataset.act).filter((a) => ['double', 'next', 'menu'].includes(a)) }; });
check('Sonuç ekranında "Video izle: 2x kazan" ilk sırada', /2x kazan/.test(res.dbl || '') && res.order[0] === 'double', JSON.stringify(res));
const c0 = res.coins;
await ev(() => { const g = window.__game; g.ui.modals[g.ui.modals.length - 1].q('[data-act=double]').click(); });
await pg.waitForTimeout(500);
check('Reklam bitmeden ödül verilmedi', (await S()).coins === c0);
await pg.waitForTimeout(3600); await ev(() => document.querySelector('[data-act=claim]')?.click()); await pg.waitForTimeout(400);
const c1 = (await S()).coins;
check('Reklam bitince 2x ödül (ek jeton) verildi', c1 > c0, `${c0} → ${c1}`);

// ---------- 3) Zorunlu reklam döngüsü (4-5 seviyede bir), ödülsüz
const cyc = await ev(async () => {
  const g = window.__game; g.ui.closeAll(); const a = g.save.data.ads; a.since = 0; a.nextAt = 4; a.last = 0; a.removed = false; a.offers = 0;
  g.ads.interstitials = 0; const orig = g.ads.showInterstitial.bind(g.ads); g.ads.showInterstitial = async (p) => { g.ads.interstitials++; return true; };
  const out = []; const coinsBefore = g.save.data.coins;
  g.levelN = 5;
  for (let i = 0; i < 12; i++) { a.since++; g.skipInterstitial = false; const r = await g.levelBreak(); out.push(r || '-'); }
  g.ads.showInterstitial = orig;
  return { out, shown: g.ads.interstitials, coinsSame: g.save.data.coins === coinsBefore };
});
// last=Date.now() ancak showInterstitial taklit olduğundan minGap devreye girer; bu yüzden döngüyü zamansız da doğrula
check('Zorunlu reklam seyrek ve düzenli (ilk tetik 4. seviyede)', cyc.out[3] === 'ad' || cyc.out.indexOf('ad') >= 0, JSON.stringify(cyc));
check('Zorunlu reklam jeton vermez', cyc.coinsSame);
const gaps = await ev(async () => {
  const g = window.__game; const a = g.save.data.ads; a.since = 0; a.nextAt = 4; a.last = 0; a.removed = false; g.levelN = 9;
  const hits = []; g.ads.showInterstitial = async () => true; const origNow = Date.now; let t = origNow();
  Date.now = () => t;
  for (let i = 1; i <= 30; i++) { t += 200000; a.since++; g.skipInterstitial = false; if ((await g.levelBreak()) === 'ad') hits.push(i); }
  Date.now = origNow; return hits;
});
const diffs = gaps.slice(1).map((v, i) => v - gaps[i]);
check('Aralık her zaman 4 veya 5 seviye', gaps.length >= 5 && diffs.every((d) => d === 4 || d === 5), JSON.stringify({ gaps, diffs }));
const skip = await ev(async () => { const g = window.__game; const a = g.save.data.ads; a.since = 9; a.nextAt = 4; a.last = 0; g.skipInterstitial = true; return g.adDue(); });
check('2x video izlendiyse o seviyede zorunlu reklam atlanır', skip === false);
const rem = await ev(() => { const g = window.__game; const a = g.save.data.ads; a.since = 9; a.last = 0; g.skipInterstitial = false; a.removed = true; const r = g.adDue(); a.removed = false; return r; });
check('Reklamsız alınmışsa zorunlu reklam yok', rem === false);
const early = await ev(() => { const g = window.__game; const a = g.save.data.ads; a.since = 9; a.last = 0; g.levelN = 2; const r = g.adDue(); g.levelN = 9; return r; });
check('İlk seviyelerde zorunlu reklam yok', early === false);

// ---------- 4) Reklamsız teklifi: gerçek satın alma hazır değilse HİÇ gösterilmez; hazırsa seyrek
const off = await ev(async () => {
  const g = window.__game; const a = g.save.data.ads; a.removed = false; a.offers = 0; a.offerDay = ''; a.offerLevel = 0; g.levelN = 20;
  const noIap = g.removeAdsOfferDue();
  g.iap.available = () => true; const yes = g.removeAdsOfferDue();
  a.offerLevel = 15; const tooSoon = g.removeAdsOfferDue(); a.offerLevel = 0; a.offers = 5; const capped = g.removeAdsOfferDue(); a.offers = 0;
  return { noIap, yes, tooSoon, capped };
});
check('IAP hazır değilken teklif yok', off.noIap === false);
check('IAP hazırken teklif çıkar; çok sık değil, üst sınırlı', off.yes === true && off.tooSoon === false && off.capped === false, JSON.stringify(off));
const buy = await ev(async () => { const g = window.__game; const a = g.save.data.ads; a.removed = false; g.iap.available = () => false; const r = await g.iap.buyRemoveAds(); return { r, removed: a.removed }; });
check('Satın alma yoksa reklamlar kaldırılmaz (sahte satın alma yok)', buy.r.ok === false && buy.removed === false, JSON.stringify(buy));
const buy2 = await ev(async () => {
  const g = window.__game; const a = g.save.data.ads; g.iap.available = () => true;
  window.Capacitor = { Plugins: { NativePurchases: { purchaseProduct: async () => ({ transactionId: 'tx123' }) } } };
  const r = await g.iap.buyRemoveAds(); const o = { r, removed: a.removed };
  window.Capacitor = { Plugins: { NativePurchases: { purchaseProduct: async () => { throw new Error('user cancelled'); } } } }; a.removed = false;
  const r2 = await g.iap.buyRemoveAds(); o.cancelOk = r2.ok === false && a.removed === false; return o;
});
check('Başarılı satın alma sonrası reklamsız; iptalde değil', buy2.r.ok && buy2.removed && buy2.cancelOk, JSON.stringify(buy2));
await ev(() => { delete window.Capacitor; window.__game.save.data.ads.removed = false; });

// ---------- 5) Bildirimler (sahte eklenti)
const nt = await ev(async () => {
  const g = window.__game; const calls = [];
  window.Capacitor = { Plugins: { LocalNotifications: {
    checkPermissions: async () => ({ display: 'granted' }), requestPermissions: async () => { calls.push('req'); return { display: 'granted' }; },
    cancel: async (o) => { calls.push('cancel:' + o.notifications.length); }, schedule: async (o) => { calls.push(o); } } } };
  const off0 = await g.notifier.reschedule();
  const en = await g.notifier.enable();
  const sched = calls.filter((c) => typeof c === 'object').pop();
  return { off0, en, enabled: g.save.data.notif.enabled, n: sched?.notifications.length, titles: sched?.notifications.map((x) => x.title), ats: sched?.notifications.map((x) => +new Date(x.schedule.at)), now: Date.now() };
});
check('Kapalıyken bildirim planlanmaz', nt.off0 === false);
check('Etkinleştirince izin istenir ve 4 bildirim planlanır', nt.en && nt.enabled && nt.n === 4, JSON.stringify(nt.titles));
check('Tüm bildirimler gelecekte', nt.ats.every((t) => t > nt.now));
const nt2 = await ev(async () => {
  const g = window.__game; let last = null; window.Capacitor.Plugins.LocalNotifications.schedule = async (o) => { last = o; };
  await g.notifier.disable(); const afterDisable = last; await g.notifier.enable(); return { afterDisable, again: !!last };
});
check('Kapatınca yeni plan kurulmaz, açınca kurulur', nt2.afterDisable === null && nt2.again);

await ev(() => { delete window.Capacitor; });
const noPlug = await ev(async () => { const g = window.__game; return { av: g.notifier.available(), r: await g.notifier.reschedule() }; });
check('Eklenti yoksa (tarayıcı) sessizce çalışmaz', noPlug.av === false && noPlug.r === false);
await ev(() => { const g = window.__game; g.save.data.notif = { enabled: false, asked: false }; g.ui.settings(false); });
const sw = await ev(() => !!document.querySelector('[data-act=notif]'));
check('Ayarlarda bildirim anahtarı var', sw);
await shot('settings_notif');

// ---------- 1b) VIP alanına dokununca VIP seçimi açılır
await ev(() => { const g = window.__game; g.ui.closeAll(); g.startLevel(10); }); await ff(0.5);
const vs = await ev(() => { const g = window.__game; g.save.data.powerups.vip = 1; g.handleSlotTap('V'); const m = g.mode; g.handleSlotTap('V'); return { m, after: g.mode }; });
check('VIP alanına dokununca VIP modu açılır, tekrar dokununca kapanır', vs.m === 'vip' && !vs.after, JSON.stringify(vs));

// ---------- 6) Çağır/Değiştir: hak yoksa otobüs seçilmez, satın alma açılır; hak varsa kullanılır. Tümünü al. Oyun içi mağaza.
await ev(() => { const g = window.__game; g.ui.closeAll(); g.startLevel(10); g.save.data.coins = 5000; }); await ff(0.5);
const pw = await ev(() => { const g = window.__game; const d = g.save.data; d.powerups.call = 0; d.powerups.convert = 0; const o = {};
  g.onPower('call'); o.callMode = g.mode; o.callModal = g.ui.modals.length; g.ui.closeAll();
  g.onPower('convert'); o.convMode = g.mode; o.convModal = g.ui.modals.length; g.ui.closeAll(); return o; });
check('Çağır: hak yokken otobüs seçme modu açılmaz, satın alma penceresi açılır', !pw.callMode && pw.callModal === 1, JSON.stringify(pw));
check('Değiştir: hak yokken seçme modu açılmaz, satın alma penceresi açılır', !pw.convMode && pw.convModal === 1, JSON.stringify(pw));
const bought = await ev(() => { const g = window.__game; const d = g.save.data; g.buyPower('call'); g.buyPower('convert'); const r = { call: d.powerups.call, conv: d.powerups.convert }; g.onPower('call'); r.mode = g.mode; g.setMode(null); return r; });
check('Satın alınca hak eklenir; hak varsa seçme modu açılır', bought.call === 1 && bought.conv === 1 && bought.mode === 'call', JSON.stringify(bought));
const conv = await ev(async () => { const g = window.__game; const d = g.save.data; const s = g.state; const before = d.powerups.convert; let ok = false;
  for (const b of s.buses.filter((x) => x.st === 'board' && !x.vip)) { for (const c of [...new Set(s.queue.slice(s.qi))].filter((c) => c !== b.color)) { if (await g.applyConvert(b.id, { type: 'color', v: c }, 'item')) { ok = true; break; } } if (!ok && await g.applyConvert(b.id, { type: 'seat' }, 'item')) ok = true; if (!ok && await g.applyConvert(b.id, { type: 'grow' }, 'item')) ok = true; if (ok) break; }
  return { ok, before, after: d.powerups.convert }; });
check('Değiştir hakkı kullanılınca 1 azalır', conv.ok === true && conv.after === conv.before - 1, JSON.stringify(conv));
const ca = await ev(() => { const g = window.__game; const d = g.save.data; g.ui.closeAll(); d.quests.progress = {}; for (const q of d.quests.list) d.quests.progress[q.id] = 1e6; d.quests.claimed = {}; const c0 = d.coins; const n = g.claimableCount('q'); const sum = g.claimAll('q'); return { n, sum, gain: d.coins - c0, left: g.claimableCount('q') }; });
check('Görevlerde "Tümünü al": hepsi tek seferde alınır', ca.n >= 1 && ca.sum > 0 && ca.gain === ca.sum && ca.left === 0, JSON.stringify(ca));
const hs = await ev(() => { const g = window.__game; g.ui.closeAll(); document.querySelector('#btnShop').click(); return g.ui.modals.length; });
check('Oyun ekranında Mağaza düğmesi mağazayı açar', hs === 1);
await ev(() => window.__game.ui.closeAll());
check('Konsol hatası yok', errors.length === 0, errors.slice(0, 3).join(' | '));
const f = results.filter((r) => !r.ok).length; console.log(`\n${results.length - f}/${results.length} geçti`);
await browser.close(); srv.close(); process.exit(f ? 1 : 0);
