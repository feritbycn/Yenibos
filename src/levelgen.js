// Çözülebilirliği yapı gereği garanti eden seviye üretici + parametre tablosu.
import { DIRS, cellsOf, pathCells, seatsOf } from './engine.js';
import { makeRng } from './rng.js';
import { VIP_LEN } from './config.js';

function leadOf(b) {
  switch (b.d) { case 'R': return [b.x + b.l - 1, b.y]; case 'L': return [b.x, b.y]; case 'D': return [b.x, b.y + b.l - 1]; default: return [b.x, b.y]; }
}
const asEng = (b, w, h) => ({ len: b.l, dir: b.d, x: b.x, y: b.y, w, h });
function cells(b) { return cellsOf({ len: b.l, dir: b.d, x: b.x, y: b.y }); }
function path(b, w, h) { return pathCells({ w, h }, { len: b.l, dir: b.d, x: b.x, y: b.y }); }
void asEng; void leadOf; void DIRS;

/** Tek aşamanın araç yerleşimini üretir. Dönüş: kaldırma sırasıyla (ilk = ilk çıkacak) araç listesi. */
function genBuses(rng, p) {
  const { w, h } = p;
  const placed = [];                    // ters sırada: ilk yerleşen en son çıkar
  const occ = new Set();
  const reserved = new Set();
  const keyOf = (x, y) => x + ',' + y;

  const tryPlace = (len, vip, wantEdgeVip) => {
    let best = null, bestScore = -1e9;
    for (let t = 0; t < 90; t++) {
      const d = rng.pick(['U', 'D', 'L', 'R']);
      const horiz = DIRS[d].horiz;
      const x = rng.int(w - (horiz ? len - 1 : 0));
      const y = rng.int(h - (horiz ? 0 : len - 1));
      const cand = { l: len, d, x, y };
      const cs = cells(cand);
      if (cs.some(([cx, cy]) => occ.has(keyOf(cx, cy)) || reserved.has(keyOf(cx, cy)))) continue;
      const pc = path(cand, w, h);
      if (pc.some(([cx, cy]) => occ.has(keyOf(cx, cy)))) continue;     // sonra çıkacak araçlar yolu kapatmamalı
      if (wantEdgeVip && pc.length > 0) continue;                        // VIP: doğrudan kenarda ve açık
      // Puan: daha önce yerleşenlerin yolunu kapatma sayısı (bağımlılık derinliği) + komşuluk
      let blocks = 0;
      const mine = new Set(cs.map(([cx, cy]) => keyOf(cx, cy)));
      for (const o of placed) {
        if (o.v) continue;
        for (const [px, py] of path(o, w, h)) if (mine.has(keyOf(px, py))) { blocks++; break; }
      }
      let adj = 0;
      for (const [cx, cy] of cs) for (const dd of Object.values(DIRS)) if (occ.has(keyOf(cx + dd.x, cy + dd.y))) adj++;
      const score = blocks * 3 + adj * 0.6 + rng() * 2 + (pc.length > 0 ? 0.5 : 0);
      if (score > bestScore) { bestScore = score; best = cand; }
    }
    if (!best) return false;
    best.v = vip;
    placed.push(best);
    for (const [cx, cy] of cells(best)) occ.add(keyOf(cx, cy));
    if (vip) for (const [px, py] of path(best, w, h)) reserved.add(keyOf(px, py));
    return true;
  };

  if (p.vip) {
    for (let k = 0; k < p.vip; k++) tryPlace(VIP_LEN, true, true);
  }
  let guard = 0;
  while (placed.filter((b) => !b.v).length < p.count && guard++ < 400) {
    tryPlace(rng.weighted(p.lens), false, false);
  }
  const vips = placed.filter((b) => b.v);
  const normal = placed.filter((b) => !b.v).reverse();   // ilk çıkacak = en son yerleşen
  return { normal, vips };
}

function buildQueue(rng, normal, p) {
  const n = normal.length;
  // renk atama
  const colors = [];
  const pool = [];
  for (let c = 0; c < p.colors; c++) pool.push(c);
  rng.shuffle(pool);
  for (let i = 0; i < n; i++) {
    let c = i < pool.length ? pool[i] : rng.pick(pool);
    if (i > 0 && c === colors[i - 1] && p.colors > 1 && rng() < 0.7) c = (c + 1 + rng.int(p.colors - 1)) % p.colors;
    colors.push(c);
  }
  rng.shuffle(colors);
  normal.forEach((b, i) => { b.c = colors[i]; });
  const queue = [];
  let i = 0;
  while (i < n) {
    const w = Math.min(n - i, rng.range(1, p.window));
    if (w === 1) {
      const b = normal[i]; for (let k = 0; k < seatsOf(b.l, false); k++) queue.push(b.c);
    } else {
      const chunkLists = [];
      for (let j = 0; j < w; j++) {
        const b = normal[i + j]; let left = seatsOf(b.l, false); const chunks = [];
        while (left > 0) { const cs = Math.min(left, rng.range(1, Math.max(1, left - (chunks.length === 0 ? 1 : 0)))); chunks.push([b.c, cs]); left -= cs; }
        chunkLists.push(chunks);
      }
      let any = true;
      while (any) {
        any = false;
        for (const cl of chunkLists) if (cl.length) { const [c, cs] = cl.shift(); for (let k = 0; k < cs; k++) queue.push(c); any = true; }
      }
    }
    i += w;
  }
  return queue;
}

export function genStage(seed, p) {
  const rng = makeRng(seed);
  const { normal, vips } = genBuses(rng, p);
  const queue = buildQueue(rng, normal, p);
  const buses = [...normal, ...vips];
  // id'leri karıştır (çözüm sırası ipucu vermesin); par = çözüm sırası (id listesi)
  const idxs = buses.map((_, i) => i);
  rng.shuffle(idxs);
  const outBuses = idxs.map((orig) => ({ ...buses[orig] }));
  const par = normal.map((_, i) => idxs.indexOf(i));
  const clean = outBuses.map((b) => (b.v ? { v: 1, l: b.l, d: b.d, x: b.x, y: b.y } : { c: b.c, l: b.l, d: b.d, x: b.x, y: b.y }));
  return { w: p.w, h: p.h, buses: clean, queue, par };
}

// ------------------------ Seviye tablosu ------------------------
export function levelParams(n) {
  const L = (o) => ({ vip: 0, window: 2, wr: 0.5, slots: 4, ...o });
  let stages, extra = {};
  if (n === 2) stages = [L({ w: 5, h: 5, count: 6, lens: { 2: 3, 3: 2 }, colors: 3, vip: 1, window: 2, wr: 0.7, slots: 3 })];
  else if (n <= 5) stages = [L({ w: 5, h: 5, count: 5 + (n - 3), lens: { 2: 3, 3: 2 }, colors: 3, window: 2, wr: 0.7 })];
  else if (n <= 10) stages = [L({ w: 6, h: 6, count: 8 + Math.floor((n - 6) * 0.8), lens: { 1: 1, 2: 3, 3: 3, 4: 1 }, colors: 4, window: 2, wr: 0.55 })];
  else if (n <= 15) stages = [L({ w: 6, h: 7, count: 12 + (n - 11), lens: { 1: 1, 2: 3, 3: 3, 4: 1 }, colors: 5, window: 3, wr: 0.4 })];
  else if (n <= 20) stages = [L({ w: 7, h: 7, count: 14 + (n - 16), lens: { 1: 1, 2: 3, 3: 3, 4: 2 }, colors: n < 18 ? 5 : 6, window: 3, vip: 1, wr: 0.32 })];
  else if (n <= 25) {
    stages = [L({ w: 7, h: 8, count: 16 + (n - 21), lens: { 1: 1, 2: 3, 3: 3, 4: 2 }, colors: 6, window: 3, vip: n % 2, wr: 0.22 })];
    if (n === 22 || n === 25) extra.moveSpare = 3;
  } else if (n <= 30) {
    const base = 9 + (n - 26);
    stages = [
      L({ w: 7, h: 7, count: base, lens: { 1: 1, 2: 3, 3: 3, 4: 2 }, colors: 5, window: 3, vip: 0, wr: 0.3 }),
      L({ w: 7, h: 7, count: base + 3, lens: { 1: 1, 2: 3, 3: 3, 4: 2 }, colors: 6, window: 3, vip: 1, wr: 0.22 }),
    ];
    extra.timeSpare = 25;
  } else {
    const k = Math.min(10, n - 30);
    stages = [L({ w: 7, h: 8, count: 17 + Math.min(6, k), lens: { 1: 1, 2: 3, 3: 3, 4: 2 }, colors: 6 + (k > 3 ? 1 : 0), window: 3, vip: n % 2, wr: 0.18 })];
    if (n % 5 === 0) { const second = { ...stages[0], count: stages[0].count - 4, vip: 0 }; stages.push(second); extra.timeSpare = 30; }
    if (n % 7 === 0) extra.moveSpare = 3;
  }
  return { stages, extra };
}

export const difficultyOf = (n) => (n <= 2 ? 'easy' : n <= 10 ? 'normal' : n <= 20 ? 'hard' : 'super');

/** Elle tasarlanan eğitim seviyesi 1 */
export function tutorialLevel1() {
  const stage = {
    w: 4, h: 4,
    buses: [
      { c: 1, l: 2, d: 'L', x: 0, y: 0 },   // kırmızı: yolu açık
      { c: 0, l: 3, d: 'U', x: 1, y: 1 },   // mavi: kırmızı engelliyor
      { c: 3, l: 2, d: 'R', x: 2, y: 3 },   // yeşil: yolu açık
    ],
    queue: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3],
  };
  stage.par = [0, 1, 2];
  return { stages: [stage], slotsBase: 4 };
}
