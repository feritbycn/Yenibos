// Saf bulmaca motoru (render'dan bağımsız). Hem oyun hem çözücü/test aynı kuralları kullanır.
import { SEATS_PER_CELL, VIP_COLOR, VIP_LEN, VIP_SEATS, SLOTS_TOTAL, SLOTS_BASE } from './config.js';

export const DIRS = {
  U: { x: 0, y: -1, horiz: false },
  D: { x: 0, y: 1, horiz: false },
  L: { x: -1, y: 0, horiz: true },
  R: { x: 1, y: 0, horiz: true },
};

export function seatsOf(len, vip) { return vip ? VIP_SEATS : len * SEATS_PER_CELL; }

/** Aşama verisinden (level stage) oyun durumu üretir. */
export function makeState(stage, opts = {}) {
  const buses = stage.buses.map((b, i) => ({
    id: i, color: b.v ? VIP_COLOR : b.c, len: b.l, dir: b.d, x: b.x, y: b.y, x0: b.x, y0: b.y,
    vip: !!b.v, seats: seatsOf(b.l, b.v), boarded: 0, st: 'board', slot: -1, arrived: false,
  }));
  const open = opts.slotsOpen ?? SLOTS_BASE;
  const slotOpen = [];
  for (let i = 0; i < SLOTS_TOTAL; i++) slotOpen.push(i < open);
  return {
    w: stage.w, h: stage.h, buses,
    queue: stage.queue.slice(), qi: 0,
    slotOpen, slots: new Array(SLOTS_TOTAL).fill(null), vipSlot: null,
    moves: 0, moveLimit: opts.moveLimit ?? null,
    boardedTotal: 0,
  };
}

export const clone = (s) => JSON.parse(JSON.stringify(s));

export function cellsOf(b) {
  const out = [];
  const hz = DIRS[b.dir].horiz;
  for (let i = 0; i < b.len; i++) out.push(hz ? [b.x + i, b.y] : [b.x, b.y + i]);
  return out;
}

function leadCell(b) {
  switch (b.dir) {
    case 'R': return [b.x + b.len - 1, b.y];
    case 'L': return [b.x, b.y];
    case 'D': return [b.x, b.y + b.len - 1];
    default: return [b.x, b.y];
  }
}

/** Aracın çıkış yolundaki hücreler (araç dışı, sahne sınırına kadar). */
export function pathCells(s, b) {
  const d = DIRS[b.dir];
  let [cx, cy] = leadCell(b);
  const out = [];
  for (;;) {
    cx += d.x; cy += d.y;
    if (cx < 0 || cy < 0 || cx >= s.w || cy >= s.h) break;
    out.push([cx, cy]);
  }
  return out;
}

export function occupancy(s, exceptId = -1) {
  const m = new Map();
  for (const b of s.buses) {
    if (b.st !== 'board' || b.id === exceptId) continue;
    for (const [x, y] of cellsOf(b)) m.set(x + ',' + y, b.id);
  }
  return m;
}

/** Yolu açık mı? Engelleyen araçların id listesini döndürür. */
export function blockers(s, b) {
  const occ = occupancy(s, b.id);
  const set = new Set();
  for (const [x, y] of pathCells(s, b)) {
    const o = occ.get(x + ',' + y);
    if (o !== undefined) set.add(o);
  }
  return [...set];
}

export function isFree(s, b) { return b.st === 'board' && blockers(s, b).length === 0; }

export function slotFor(s, b) {
  if (b.vip) return s.vipSlot === null ? 'V' : -1;
  for (let i = 0; i < SLOTS_TOTAL; i++) if (s.slotOpen[i] && s.slots[i] === null) return i;
  return -1;
}

export function freeSlotCount(s) {
  let n = 0;
  for (let i = 0; i < SLOTS_TOTAL; i++) if (s.slotOpen[i] && s.slots[i] === null) n++;
  return n;
}

/** Dokunma denemesi. Başarılıysa aracı park alanına atar (varış animasyonu sonrası arrived=true). */
export function tap(s, id) {
  const b = s.buses[id];
  if (!b || b.st !== 'board') return { ok: false, reason: 'invalid' };
  if (s.moveLimit !== null && s.moves >= s.moveLimit) return { ok: false, reason: 'limit' };
  const bl = blockers(s, b);
  if (bl.length) {
    if (s.moveLimit !== null) s.moves++;           // limitli seviyelerde hatalı dokunuş da hak yer
    return { ok: false, reason: 'blocked', blockers: bl };
  }
  const slot = slotFor(s, b);
  if (slot === -1) return { ok: false, reason: b.vip ? 'vipfull' : 'noslot' };
  b.st = 'parked'; b.slot = slot; b.arrived = false;
  if (slot === 'V') s.vipSlot = b.id; else s.slots[slot] = b.id;
  s.moves++;
  return { ok: true, slot };
}

export function markArrived(s, id) { const b = s.buses[id]; if (b) b.arrived = true; }

export function headColor(s) { return s.qi < s.queue.length ? s.queue[s.qi] : null; }

/** Sıradaki yolcunun binebileceği otobüsü bulur (varmış olmalı). */
export function boardTarget(s) {
  const c = headColor(s);
  if (c === null) return null;
  for (let i = 0; i < SLOTS_TOTAL; i++) {
    const id = s.slots[i];
    if (id === null) continue;
    const b = s.buses[id];
    if (b.arrived && b.color === c && b.boarded < b.seats) return b;
  }
  if (s.vipSlot !== null) {
    const b = s.buses[s.vipSlot];
    if (b.arrived && b.boarded < b.seats) return b;
  }
  return null;
}

/** Tek yolcuyu bindirir. {bus, color, full} döner ya da null. */
export function boardStep(s) {
  const b = boardTarget(s);
  if (!b) return null;
  const color = s.queue[s.qi];
  s.qi++; b.boarded++; s.boardedTotal++;
  return { bus: b, color, full: b.boarded >= b.seats };
}

export function depart(s, id) {
  const b = s.buses[id];
  if (!b || b.st !== 'parked') return;
  if (b.slot === 'V') s.vipSlot = null; else s.slots[b.slot] = null;
  b.st = 'gone'; b.slot = -1;
}

/** Anında yerleşim (çözücü/test). */
export function settle(s) {
  for (const b of s.buses) if (b.st === 'parked') b.arrived = true;
  const ev = [];
  for (;;) {
    const r = boardStep(s);
    if (!r) break;
    ev.push(r);
    if (r.full) depart(s, r.bus.id);
  }
  return ev;
}

export function movableBuses(s) {
  const out = [];
  for (const b of s.buses) if (b.st === 'board' && blockers(s, b).length === 0 && slotFor(s, b) !== -1) out.push(b);
  return out;
}

/** Oyun durumu: 'won' | 'lost' | 'playing'. Yalnızca sahne boştayken (animasyon yok) çağrılır. */
export function evaluate(s) {
  if (s.qi >= s.queue.length) return { status: 'won' };
  const mv = movableBuses(s);
  const limitHit = s.moveLimit !== null && s.moves >= s.moveLimit;
  if (limitHit) return { status: 'lost', reason: 'moves' };
  if (mv.length === 0) {
    const anyOnBoard = s.buses.some((b) => b.st === 'board');
    const freeBlocked = s.buses.some((b) => b.st === 'board' && blockers(s, b).length === 0);
    return { status: 'lost', reason: freeBlocked || !anyOnBoard ? 'noslot' : 'stuck' };
  }
  return { status: 'playing' };
}

// ---------- Güçlendirici / özel işlemler ----------

export function unlockSlot(s) {
  for (let i = 0; i < SLOTS_TOTAL; i++) if (!s.slotOpen[i]) { s.slotOpen[i] = true; return i; }
  return -1;
}

/** Park edilmiş (varmış) aracı orijinal konumuna geri gönderir. */
export function recall(s, id) {
  const b = s.buses[id];
  if (!b || b.st !== 'parked' || !b.arrived) return { ok: false, reason: 'invalid' };
  const probe = { ...b, x: b.x0, y: b.y0, st: 'board' };
  const occ = occupancy(s, id);
  for (const [x, y] of cellsOf(probe)) if (occ.has(x + ',' + y)) return { ok: false, reason: 'occupied' };
  if (b.slot === 'V') s.vipSlot = null; else s.slots[b.slot] = null;
  b.st = 'board'; b.slot = -1; b.x = b.x0; b.y = b.y0; b.arrived = false;
  return { ok: true };
}

/** Sıradaki yolcunun rengindeki bir otobüsü (yol açık olmasa da) park alanına çağırır. */
export function callMatching(s) {
  const c = headColor(s);
  if (c === null) return { ok: false, reason: 'empty' };
  let best = null, bestScore = 1e9;
  for (const b of s.buses) {
    if (b.st !== 'board' || b.vip || b.color !== c) continue;
    const score = blockers(s, b).length;
    if (score < bestScore) { bestScore = score; best = b; }
  }
  if (!best) return { ok: false, reason: 'none' };
  const slot = slotFor(s, best);
  if (slot === -1) return { ok: false, reason: 'noslot' };
  best.st = 'parked'; best.slot = slot; best.arrived = false;
  s.slots[slot] = best.id;
  s.moves++;
  return { ok: true, id: best.id, slot };
}

/** VIP otobüsü doğrudan VIP alanına çağırır (yeni araç oluşturur). */
export function spawnVip(s) {
  if (s.vipSlot !== null) return { ok: false, reason: 'vipfull' };
  const id = s.buses.length;
  s.buses.push({ id, color: VIP_COLOR, len: VIP_LEN, dir: 'U', x: 0, y: 0, x0: 0, y0: 0, vip: true, seats: VIP_SEATS, boarded: 0, st: 'parked', slot: 'V', arrived: false, summoned: true });
  s.vipSlot = id;
  return { ok: true, id };
}

/** Otobüs dönüştürme: renk değiştir. Kapasite değişmez. */
export function convertColor(s, id, color) {
  const b = s.buses[id];
  if (!b || b.st !== 'board' || b.vip) return { ok: false, reason: 'invalid' };
  if (b.color === color) return { ok: false, reason: 'same' };
  b.color = color;
  return { ok: true };
}

/** Otobüs dönüştürme: kuyruk tarafına 1 hücre uzat (yer varsa). Kapasite/boyut güncellenir. */
export function canGrow(s, id) {
  const b = s.buses[id];
  if (!b || b.st !== 'board' || b.vip || b.len >= 4) return null;
  const d = DIRS[b.dir];
  const occ = occupancy(s, id);
  // kuyruk hücresi: hareket yönünün tersi
  let tx, ty, nx = b.x, ny = b.y;
  if (b.dir === 'R') { tx = b.x - 1; ty = b.y; nx = tx; }
  else if (b.dir === 'L') { tx = b.x + b.len; ty = b.y; }
  else if (b.dir === 'D') { tx = b.x; ty = b.y - 1; ny = ty; }
  else { tx = b.x; ty = b.y + b.len; }
  if (tx < 0 || ty < 0 || tx >= s.w || ty >= s.h) return null;
  if (occ.has(tx + ',' + ty)) return null;
  void d;
  return { nx, ny };
}
export function grow(s, id) {
  const g = canGrow(s, id);
  if (!g) return { ok: false, reason: 'nospace' };
  const b = s.buses[id];
  b.x = g.nx; b.y = g.ny; b.x0 = b.x; b.y0 = b.y; b.len++; b.seats = seatsOf(b.len, false);
  return { ok: true };
}

export function passengersLeft(s) { return s.queue.length - s.qi; }
