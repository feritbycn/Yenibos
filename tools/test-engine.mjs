// Motor + seviye testleri (tarayıcısız). Çalıştır: npm test
import esbuild from 'esbuild'; import os from 'node:os'; import path from 'node:path'; import fs from 'node:fs';
const entry = `export * from './src/engine.js'; export * from './src/solver.js'; export * from './src/levels.js'; export * from './src/config.js'; export * from './src/clockmath.js'; export { shuffleLayout, genStage } from './src/levelgen.js'; export { makeRng } from './src/rng.js'; export { Clock } from './src/time.js'; export { LocalBackend } from './src/backend.js'; export { sanitize, defaults } from './src/save.js';`;
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'bpd-')); const out = path.join(tmp, 'bundle.mjs');
await esbuild.build({ stdin: { contents: entry, resolveDir: process.cwd(), loader: 'js' }, bundle: true, platform: 'node', format: 'esm', outfile: out, logLevel: 'silent', loader: { '.json': 'json' } });
const M = await import(out);
const { capOf, seatsOf, canAddSeat, canGrow, addSeat, starsForMoves, levelScore, dayKeyOf, weekKeyOf, weekdayOf, dayDiffKeys, Clock, LocalBackend, sanitize, defaults, BACKEND, VIP_CALL_PRICE, MAX_REVIVES, levelParams, makeState, tap, settle, evaluate, solve, replay, getLevel, PREBUILT_COUNT, blockers, recall, convertColor, vipSend, shuffleLayout, makeRng, PACKS, callMatching, unlockSlot, SLOTS_BASE, SLOTS_TOTAL, boardStep, depart } = M;
let pass = 0, fail = 0;
const t = (name, ok, extra = '') => { ok ? pass++ : fail++; console.log((ok ? 'PASS ' : 'FAIL ') + name + (extra ? ' — ' + extra : '')); };

// ---- Seviye kataloğu
t(`En az 30 seviye hazır (bulunan: ${PREBUILT_COUNT})`, PREBUILT_COUNT >= 30);
let allOk = true, multi = [];
for (let n = 1; n <= PREBUILT_COUNT; n++) {
  const L = getLevel(n);
  if (L.stages.length > 1) multi.push(n);
  const opts = { slotsOpen: L.slotsBase, moveLimit: L.moveLimit ?? null };
  for (const [i, st] of L.stages.entries()) {
    const r = replay(st, { slotsOpen: st.slots ?? L.slotsBase, moveLimit: L.moveLimit ?? null }, st.solution);
    const sv = solve(makeState(st, { slotsOpen: st.slots ?? L.slotsBase }), { useVip: false });
    if (!r.ok || !sv.solved) { allOk = false; console.log(`  L${n} aşama ${i} çözülemedi`, r.reason, sv.solved); }
  }
  void opts;
}
t(`Hazır ${PREBUILT_COUNT} seviyenin her aşaması çözücü + motor tekrarıyla çözülüyor`, allOk);
t('26–30. seviyeler çok aşamalı', [26, 27, 28, 29, 30].every((n) => multi.includes(n)), 'çok aşamalı: ' + multi.join(','));
t('1. seviye tek aşamalı eğitim (3 otobüs)', getLevel(1).stages.length === 1 && getLevel(1).stages[0].buses.length === 3);

// ---- Çalışma anında üretilen seviyeler (41+) - tanıtım sırası doğrulanıyor
let genOk = true; const t0 = Date.now();
for (let n = 41; n <= 90; n++) { try { const L = getLevel(n); for (const st of L.stages) if (!replay(st, { slotsOpen: st.slots ?? L.slotsBase }, st.par).ok) genOk = false; } catch (e) { genOk = false; console.log('  gen', n, e.message); } }
t('41–90. seviyeler çalışma anında üretiliyor ve tanık sırasıyla çözülüyor', genOk, `${Date.now() - t0} ms`);
t('Seviye üretimi deterministik', JSON.stringify(getLevel(55)) === JSON.stringify(getLevel(55)));

// ---- Tam kapasite: her renk için otobüs koltukları toplamı = o renkteki yolcu sayısı (boş koltukla giden otobüs yok)
{
  let bad = []; let total = 0; let taxis = 0;
  const check = (n, L) => { L.stages.forEach((st, si) => {
    const seats = {}, pass = {};
    for (const b of st.buses) { if (b.v) continue; const sc = b.s ?? seatsOf(b.l, false); seats[b.c] = (seats[b.c] || 0) + sc; if (b.l === 1) taxis++; if (sc > capOf(b.l) || sc < 1) bad.push(`L${n} koltuk>kapasite`); }
    for (const c of st.queue) pass[c] = (pass[c] || 0) + 1;
    for (const c of new Set([...Object.keys(seats), ...Object.keys(pass)])) if ((seats[c] || 0) !== (pass[c] || 0)) bad.push(`L${n}/a${si} renk ${c}: koltuk ${seats[c] || 0} ≠ yolcu ${pass[c] || 0}`);
    total++;
  }); };
  for (let n = 1; n <= PREBUILT_COUNT; n++) check(n, getLevel(n));
  for (let n = 41; n <= 120; n++) check(n, getLevel(n));
  t(`Tüm aşamalarda (1–120, ${total} aşama) her renkte koltuk toplamı = yolcu sayısı (boş koltuk yok)`, bad.length === 0, bad.slice(0, 4).join(' | '));
  t('Taksi (1 hücre) en çok 4 koltuklu ve seviyelerde bulunuyor', capOf(1) === 4 && capOf(2) === 4 && capOf(3) === 6 && taxis > 0, `taksi sayısı: ${taxis}`);
}
{ // taksi: koltuk ekleme 3 → 4, uzatılamaz
  const s = makeState({ w: 5, h: 5, buses: [{ c: 0, l: 1, d: 'R', x: 3, y: 0, s: 3 }, { c: 1, l: 2, d: 'R', x: 3, y: 2, s: 3 }], queue: [0, 0, 0, 1, 1, 1] });
  t('Taksi 3 koltuklu: +1 koltukla 4 olur, sonra dolu', canAddSeat(s, 0) && addSeat(s, 0).ok && s.buses[0].seats === 4 && !canAddSeat(s, 0));
  t('Taksi uzatılamaz; 2 hücrelik minibüs uzatılabilir', canGrow(s, 0) === null && canGrow(s, 1) !== null);
}
{ // yıldızlar hamle sayısına göre
  const a = starsForMoves(10, 10), b = starsForMoves(11, 10), c = starsForMoves(14, 10), d = starsForMoves(20, 10), e = starsForMoves(7, 5), f = starsForMoves(9, 5);
  t('Yıldız: gereken hamleyle bitiren 3 yıldız', a.stars === 3 && a.extra === 0);
  t('Yıldız: 1 fazla hamle hâlâ 3 yıldız, 4 fazla 2 yıldız, 10 fazla 1 yıldız (10 otobüs)', b.stars === 3 && c.stars === 2 && d.stars === 1, JSON.stringify([b, c, d].map((x) => x.stars)));
  t('Yıldız: küçük seviyede (5 otobüs) 2 fazla hamle 2 yıldız, 4 fazla 1 yıldız', e.stars === 2 && f.stars === 1 && starsForMoves(6, 5).stars === 3 && starsForMoves(10, 5).stars === 1, JSON.stringify([e, f]));
  t('Puan: 3 yıldız hatasız > 2 yıldız > 1 yıldız', levelScore({ stars: 3, extra: 0 }) > levelScore({ stars: 2, extra: 3 }) && levelScore({ stars: 2, extra: 3 }) > levelScore({ stars: 1, extra: 9 }));
}
t('VIP hakkı bedeli 100 jeton, en çok 3 geri alma', VIP_CALL_PRICE === 100 && MAX_REVIVES === 3);

// ---- Gün/hafta hesapları ve saat güvenliği
{
  const D = (iso) => Date.parse(iso);
  t('Gün anahtarı Türkiye saatine (UTC+3) göre değişir', dayKeyOf(D('2026-10-26T20:59:59Z')) === '2026-10-26' && dayKeyOf(D('2026-10-26T21:00:00Z')) === '2026-10-27');
  t('Hafta Pazartesi başlar (27 Ekim 2026 Salı → 26 Ekim)', weekKeyOf(D('2026-10-27T10:00:00Z')) === '2026-10-26' && weekKeyOf(D('2026-11-01T10:00:00Z')) === '2026-10-26' && weekKeyOf(D('2026-11-02T10:00:00Z')) === '2026-11-02' && weekdayOf(D('2026-10-26T10:00:00Z')) === 0 && weekdayOf(D('2026-11-01T10:00:00Z')) === 6);
  t('Gün farkı yıl/ay sınırında doğru', dayDiffKeys('2026-12-31', '2027-01-01') === 1 && dayDiffKeys('2026-02-28', '2026-03-01') === 1);
  // Clock: yerel modda saat geri alma tespiti
  const fakeSave = { data: defaults(), save() {} };
  Clock.offset = null; Clock.init(fakeSave);
  const realNow = Date.now; let fake = Date.now();
  Date.now = () => fake;
  Clock.tick(); const ok1 = Clock.trusted();
  fake += 3 * 86400000; Clock.tick(); const ok2 = Clock.trusted();       // ileri atlama (uyku/gerçek zaman geçişi ayırt edilemez) → izinli
  fake -= 2 * 86400000; Clock.tick(); const bad = !Clock.trusted();       // geri alma → güvenilmez
  fake += 2 * 86400000 + 1000; Clock.tick(); const back = Clock.trusted(); // gerçek zamana dönünce yeniden güvenilir
  Date.now = realNow;
  t('Yerel saat: ileri sarma kaydedilir, geri alma güvensiz sayılır, düzelince açılır', ok1 && ok2 && bad && back, JSON.stringify({ ok1, ok2, bad, back }));
  // sunucu saati cihaz saatini geçersiz kılar
  Clock.setServerTime(D('2026-10-27T10:00:00Z')); const k1 = Clock.dayKey();
  Date.now = () => D('2030-01-01T00:00:00Z'); const k2 = Clock.dayKey(); Date.now = realNow;
  t('Sunucu saati varsa cihaz saati yok sayılır', k1 === '2026-10-27' && k2 === '2026-10-27' && Clock.synced);
  Clock.offset = null;
}
{ // kayıt doğrulaması (yeni alanlar bozuk veriye dayanıklı)
  const bad = sanitize({ time: { lastSeen: 'x' }, weekly: { week: 5, days: [9, -1, 2], claimed: 1 }, account: { uid: 7 }, best: { a: 1, 3: 'z' }, lb: { levels: { 4: 'q' } } });
  t('Kayıt: bozuk zaman/haftalık/hesap verisi güvenle temizlenir', bad.time.lastSeen === 0 && bad.weekly.days.join() === '2' && bad.weekly.claimed === true && bad.account.uid === '' && Object.keys(bad.best).join() === '3' && bad.lb.levels[4] === 0);
}
{ // yerel arka uç: haftalık puan yalnızca en iyi seviye sonucunu sayar
  const sv = { data: defaults(), save() {} }; Clock.offset = null;
  const lb = new LocalBackend(sv);
  await lb.submitScore({ level: 3, stars: 2, extra: 3 }); await lb.submitScore({ level: 3, stars: 3, extra: 0 }); await lb.submitScore({ level: 3, stars: 1, extra: 9 }); await lb.submitScore({ level: 4, stars: 3, extra: 0 });
  const r = await lb.leaderboard();
  t('Yerel sıralama: aynı seviyenin en iyisi sayılır (şişirme yok)', r.me.score === 2 * levelScore({ stars: 3, extra: 0 }) && r.local === true && r.rewards.join() === '500,300,150', String(r.me.score));
}

// ---- Motor birim testleri
const mk = (buses, queue, o = {}) => makeState({ w: 5, h: 5, buses, queue }, o);
{ // engel
  const s = mk([{ c: 0, l: 2, d: 'R', x: 0, y: 0 }, { c: 1, l: 2, d: 'R', x: 3, y: 0 }], [0, 0, 0, 0, 1, 1, 1, 1]);
  const r = tap(s, 0); t('Engelli otobüs hareket etmez (blocked)', !r.ok && r.reason === 'blocked' && r.blockers.includes(1));
  const r2 = tap(s, 1); t('Yolu açık otobüs park alanına gider', r2.ok && s.buses[1].st === 'parked');
}
{ // kapı penceresi (ilk 3 yolcu) + pencere dışı yolcu binemez
  const s = mk([{ c: 0, l: 1, s: 2, d: 'R', x: 3, y: 0 }], [1, 0, 0]);
  tap(s, 0); settle(s);
  t('Kapıdaki (ilk 3) yolcu, öndeki başka renk olsa da kendi renginde otobüse biner', s.qi === 2 && s.buses[0].st === 'gone' && s.queue[s.qi] === 1);
  const s2 = mk([{ c: 0, l: 1, s: 2, d: 'R', x: 3, y: 0 }], [1, 1, 1, 0, 0]);
  tap(s2, 0); settle(s2);
  t('Kapı penceresi dışındaki (4.) yolcu binemez', s2.qi === 0 && s2.buses[0].boarded === 0);
}
{ // sarı + kırmızı yan yana: iki otobüs de aynı anda yolcu alır
  const s = mk([{ c: 2, l: 1, s: 2, d: 'R', x: 3, y: 0 }, { c: 1, l: 1, s: 2, d: 'R', x: 3, y: 1 }], [2, 1, 2, 1]);
  tap(s, 0); tap(s, 1); settle(s);
  t('Sarı ve kırmızı yan yana: iki otobüs de dolup kalkar (4 yolcu)', s.qi === 4 && s.buses[0].st === 'gone' && s.buses[1].st === 'gone');
}
{ // kapasite ve kalkış
  const s = mk([{ c: 0, l: 1, s: 2, d: 'R', x: 3, y: 0 }], [0, 0, 0]);
  tap(s, 0); const ev = settle(s);
  t('Dolan otobüs kalkar, park yeri boşalır (2 koltuk)', ev.length === 2 && ev[1].full && s.buses[0].st === 'gone' && s.slots.every((x) => x === null) && s.qi === 2);
}
{ // park yeri dolu
  const bs = []; for (let i = 0; i < 5; i++) bs.push({ c: 3 + (i % 3), l: 1, s: 2, d: 'R', x: 4, y: i });
  const s = mk(bs, [0, 0], { slotsOpen: 4 });
  for (let i = 0; i < 4; i++) tap(s, i);
  const r = tap(s, 4); t('Tüm açık park yerleri doluyken otobüs çıkamaz (noslot)', !r.ok && r.reason === 'noslot');
  t('Yer kalmayınca kayıp ilan edilir', evaluate(s).status === 'lost');
  unlockSlot(s); const r2 = tap(s, 4); t('Ek park yeri açılınca otobüs çıkabilir', r2.ok);
}
{ // VIP hakkı: seçilen otobüs VIP alanına gider, kendi rengini kuyruğun HER yerinden alır (önce öndekiler)
  const q = [0, 1, 2, 2, 1, 0, 2, 2, 0, 0, 1, 2, 2];                       // pencere 3: mavi otobüs ilk 3'te mavi görmez ama kuyruğun derininde var
  const s = mk([{ c: 2, l: 3, d: 'R', x: 0, y: 0 }, { c: 0, l: 1, s: 4, d: 'R', x: 2, y: 2 }, { c: 1, l: 2, d: 'R', x: 0, y: 3 }], q);
  const r = vipSend(s, 0);
  t('VIP hakkı: yolu kapalı olsa da otobüs VIP alanına gönderilir', r.ok && s.vipSlot === 0 && s.buses[0].st === 'parked' && s.buses[0].slot === 'V');
  const ev = settle(s);
  t('VIP otobüs sadece kendi rengini alır ve 6 koltuğu kuyruğun her yerinden doldurur', ev.length === 6 && ev.every((e) => e.color === 2) && s.buses[0].boarded === 6 && s.vipSlot === null);
  t('VIP boşalınca kalkar; kalan kuyruğun sırası korunur', s.queue.slice(s.qi).join('') === '0110001');
  const r2 = vipSend(s, 1); const r3 = vipSend(s, 2); t('VIP alanı doluyken ikinci VIP gönderilemez', r2.ok && !r3.ok && r3.reason === 'vipfull');
}
{ // VIP alanındaki otobüs rengi yoksa yolcu almaz (joker yok)
  const s = mk([{ c: 3, l: 2, d: 'R', x: 0, y: 0 }], [0, 1, 2]);
  vipSend(s, 0); const ev = settle(s); t('VIP alanındaki otobüs başka renkten yolcu almaz', ev.length === 0 && s.buses[0].boarded === 0);
}
{ // Karıştır: yerleşim sığar, çakışmaz, çözülebilirlik kontrolü
  const L = getLevel(12); const st = L.stages[0]; const s0 = makeState(st, { slotsOpen: L.slotsBase });
  const rng = makeRng(5); let okAny = false, overlap = false;
  for (let k = 0; k < 6; k++) {
    const lay = shuffleLayout(s0.buses.map((b) => ({ id: b.id, len: b.len })), s0.w, s0.h, rng);
    if (!lay) continue; okAny = true;
    const occ = new Set(); const tst = JSON.parse(JSON.stringify(s0));
    for (const p of lay) { const b = tst.buses[p.id]; b.x = b.x0 = p.x; b.y = b.y0 = p.y; b.dir = p.d; }
    for (const b of tst.buses) for (const [x, y] of M.cellsOf(b)) { const kk = x + ',' + y; if (occ.has(kk) || x < 0 || y < 0 || x >= tst.w || y >= tst.h) overlap = true; occ.add(kk); }
  }
  t('Karıştır: otobüsler çakışmadan ve tahta içinde yeniden dizilir', okAny && !overlap);
}
t('Paketler: her paketin fiyatı tek tek alım toplamından ucuz', PACKS.every((pk) => pk.price < Object.entries(pk.items).reduce((a, [k, n]) => a + n * ({ undo: 60, hint: 40, recall: 80, call: 120, vip: 100, shuffle: 90 }[k] || 0), 0)));
t('Çözümle bitince hiçbir otobüs boş/yarım bekleyemez: tüm otobüsler dolup gider (40 seviye)', (() => { for (let n = 1; n <= PREBUILT_COUNT; n++) { const L = getLevel(n); for (const st of L.stages) { const r = replay(st, { slotsOpen: st.slots ?? L.slotsBase }, st.solution); if (!r.ok || !r.state.buses.every((b) => b.st === 'gone' && b.boarded === b.seats)) return false; } } return true; })());
t('Hiçbir hazır seviyede VIP (joker) otobüs yok', (() => { for (let n = 1; n <= PREBUILT_COUNT; n++) for (const st of getLevel(n).stages) if (st.buses.some((b) => b.v)) return false; return true; })());
{ // geri çağır
  const s = mk([{ c: 0, l: 2, d: 'R', x: 2, y: 0 }], [1]); tap(s, 0); settle(s);
  const r = recall(s, 0); t('Geri çağır: otobüs başlangıç hücrelerine döner', r.ok && s.buses[0].st === 'board' && s.buses[0].x === 2 && s.slots.every((x) => x === null));
}
{ // dönüştür
  const s = mk([{ c: 0, l: 2, d: 'R', x: 2, y: 0 }], [1]); const seats = s.buses[0].seats; const r = convertColor(s, 0, 1);
  t('Renk dönüştürme kapasiteyi değiştirmez', r.ok && s.buses[0].color === 1 && s.buses[0].seats === seats);
}
{ // çağır
  const s = mk([{ c: 2, l: 1, s: 2, d: 'R', x: 3, y: 0 }, { c: 2, l: 1, s: 2, d: 'R', x: 3, y: 1 }], [2, 2]);
  const r = callMatching(s); settle(s); t('Çağır: baştaki yolcunun rengindeki otobüs park eder ve yolcu biner', r.ok && s.qi === 2);
}
{ // hamle limiti
  const s = mk([{ c: 0, l: 1, s: 2, d: 'R', x: 3, y: 0 }, { c: 0, l: 1, s: 2, d: 'R', x: 3, y: 1 }], [0, 0, 0, 0], { moveLimit: 1 });
  tap(s, 0); settle(s); const r = tap(s, 1); t('Hamle limiti dolunca hamle reddedilir ve oyun kaybedilir', !r.ok && r.reason === 'limit' && evaluate(s).status === 'lost');
}
t('Varsayılan: 4 açık, toplam 7 park yeri', SLOTS_BASE === 4 && SLOTS_TOTAL === 7);

console.log(JSON.stringify({ pass, fail }));
fs.rmSync(tmp, { recursive: true, force: true });
process.exit(fail ? 1 : 0);
