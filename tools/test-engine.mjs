// Motor + seviye testleri (tarayıcısız). Çalıştır: npm test
import esbuild from 'esbuild'; import os from 'node:os'; import path from 'node:path'; import fs from 'node:fs';
const entry = `export * from './src/engine.js'; export * from './src/solver.js'; export * from './src/levels.js'; export * from './src/config.js';`;
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'bpd-')); const out = path.join(tmp, 'bundle.mjs');
await esbuild.build({ stdin: { contents: entry, resolveDir: process.cwd(), loader: 'js' }, bundle: true, platform: 'node', format: 'esm', outfile: out, logLevel: 'silent', loader: { '.json': 'json' } });
const M = await import(out);
const { makeState, tap, settle, evaluate, solve, replay, getLevel, PREBUILT_COUNT, blockers, recall, convertColor, spawnVip, callMatching, unlockSlot, SLOTS_BASE, SLOTS_TOTAL, boardStep, depart } = M;
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

// ---- Motor birim testleri
const mk = (buses, queue, o = {}) => makeState({ w: 5, h: 5, buses, queue }, o);
{ // engel
  const s = mk([{ c: 0, l: 2, d: 'R', x: 0, y: 0 }, { c: 1, l: 2, d: 'R', x: 3, y: 0 }], [0, 0, 0, 0, 1, 1, 1, 1]);
  const r = tap(s, 0); t('Engelli otobüs hareket etmez (blocked)', !r.ok && r.reason === 'blocked' && r.blockers.includes(1));
  const r2 = tap(s, 1); t('Yolu açık otobüs park alanına gider', r2.ok && s.buses[1].st === 'parked');
}
{ // katı renk eşleşmesi + sıra
  const s = mk([{ c: 0, l: 1, d: 'R', x: 3, y: 0 }], [1, 0, 0]);
  tap(s, 0); settle(s);
  t('Yanlış renkli baştaki yolcu binmez (katı sıra)', s.qi === 0 && s.buses[0].boarded === 0);
}
{ // kapasite ve kalkış
  const s = mk([{ c: 0, l: 1, d: 'R', x: 3, y: 0 }], [0, 0, 0]);
  tap(s, 0); const ev = settle(s);
  t('Dolan otobüs kalkar, park yeri boşalır (2 koltuk)', ev.length === 2 && ev[1].full && s.buses[0].st === 'gone' && s.slots.every((x) => x === null) && s.qi === 2);
}
{ // park yeri dolu
  const bs = []; for (let i = 0; i < 5; i++) bs.push({ c: 3 + (i % 3), l: 1, d: 'R', x: 4, y: i });
  const s = mk(bs, [0, 0], { slotsOpen: 4 });
  for (let i = 0; i < 4; i++) tap(s, i);
  const r = tap(s, 4); t('Tüm açık park yerleri doluyken otobüs çıkamaz (noslot)', !r.ok && r.reason === 'noslot');
  t('Yer kalmayınca kayıp ilan edilir', evaluate(s).status === 'lost');
  unlockSlot(s); const r2 = tap(s, 4); t('Ek park yeri açılınca otobüs çıkabilir', r2.ok);
}
{ // VIP joker
  const s = mk([{ v: 1, l: 3, d: 'R', x: 2, y: 0 }], [0, 1, 2, 3]);
  tap(s, 0); const ev = settle(s);
  t('VIP otobüs her renkten yolcu alır (joker)', ev.length === 4 && ev.map((e) => e.color).join() === '0,1,2,3');
  t('VIP 8 koltuk, 3 uzunluk', s.buses[0].seats === 8);
}
{ // VIP alanı dolu
  const s = mk([{ v: 1, l: 3, d: 'R', x: 2, y: 0 }, { v: 1, l: 3, d: 'R', x: 2, y: 2 }], [0]);
  tap(s, 0); const r = tap(s, 1); t('VIP alanı doluyken ikinci VIP çıkamaz', !r.ok && r.reason === 'vipfull');
}
{ // geri çağır
  const s = mk([{ c: 0, l: 2, d: 'R', x: 2, y: 0 }], [1]); tap(s, 0); settle(s);
  const r = recall(s, 0); t('Geri çağır: otobüs başlangıç hücrelerine döner', r.ok && s.buses[0].st === 'board' && s.buses[0].x === 2 && s.slots.every((x) => x === null));
}
{ // dönüştür
  const s = mk([{ c: 0, l: 2, d: 'R', x: 2, y: 0 }], [1]); const seats = s.buses[0].seats; const r = convertColor(s, 0, 1);
  t('Renk dönüştürme kapasiteyi değiştirmez', r.ok && s.buses[0].color === 1 && s.buses[0].seats === seats);
}
{ // çağır
  const s = mk([{ c: 2, l: 1, d: 'R', x: 3, y: 0 }, { c: 2, l: 1, d: 'R', x: 3, y: 1 }], [2, 2]);
  const r = callMatching(s); settle(s); t('Çağır: baştaki yolcunun rengindeki otobüs park eder ve yolcu biner', r.ok && s.qi === 2);
}
{ // hamle limiti
  const s = mk([{ c: 0, l: 1, d: 'R', x: 3, y: 0 }, { c: 0, l: 1, d: 'R', x: 3, y: 1 }], [0, 0, 0, 0], { moveLimit: 1 });
  tap(s, 0); settle(s); const r = tap(s, 1); t('Hamle limiti dolunca hamle reddedilir ve oyun kaybedilir', !r.ok && r.reason === 'limit' && evaluate(s).status === 'lost');
}
t('Varsayılan: 4 açık, toplam 7 park yeri', SLOTS_BASE === 4 && SLOTS_TOTAL === 7);

console.log(JSON.stringify({ pass, fail }));
fs.rmSync(tmp, { recursive: true, force: true });
process.exit(fail ? 1 : 0);
