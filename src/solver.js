// Çözücü: park alanı kısıtlı, katı yolcu sırası ve VIP kurallarıyla tam arama (DFS + hafıza).
import { cellsOf, pathCells, makeState, clone, tap, settle, movableBuses, evaluate } from './engine.js';
import { SLOTS_TOTAL } from './config.js';

/**
 * @returns {{solved:boolean, order:number[], nodes:number, aborted:boolean}}
 * order: bus id sırası (hamleler). useVip=false ise VIP araçlar yalnızca engel olarak kalır.
 */
export function solve(state, { useVip = false, maxNodes = 400000 } = {}) {
  const s = clone(state);
  const cands = s.buses.filter((b) => b.st === 'board' && (useVip || !b.vip));
  const idx = new Map(cands.map((b, i) => [b.id, i]));
  const n = cands.length;
  const occCell = new Map();
  for (const b of s.buses) if (b.st === 'board') for (const [x, y] of cellsOf(b)) occCell.set(x + ',' + y, b.id);
  const blockMask = new Array(n).fill(0);
  const dead = new Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    const b = cands[i];
    for (const [x, y] of pathCells(s, b)) {
      const o = occCell.get(x + ',' + y);
      if (o === undefined || o === b.id) continue;
      if (idx.has(o)) blockMask[i] |= (1 << idx.get(o)); else dead[i] = true;
    }
  }
  const open = s.slotOpen.slice();
  const slotsInit = s.slots.map((id) => (id === null ? null : { c: s.buses[id].color, b: s.buses[id].boarded, s: s.buses[id].seats }));
  const vipInit = s.vipSlot === null ? null : { c: 99, b: s.buses[s.vipSlot].boarded, s: s.buses[s.vipSlot].seats };
  const queue = s.queue;
  const failed = new Set();
  let nodes = 0, aborted = false;
  const order = [];

  function key(mask, qi, slots, vip) {
    let k = mask + '|' + qi + '|';
    for (let i = 0; i < SLOTS_TOTAL; i++) k += slots[i] ? slots[i].c * 20 + slots[i].b + ',' : '-,';
    if (vip) k += 'v' + vip.b;
    return k;
  }
  function settleSim(qi, slots, vip) {
    for (;;) {
      if (qi >= queue.length) return { qi, vip };
      const c = queue[qi];
      let done = false;
      for (let i = 0; i < SLOTS_TOTAL; i++) {
        const sl = slots[i];
        if (sl && sl.c === c && sl.b < sl.s) {
          sl.b++; qi++; done = true;
          if (sl.b >= sl.s) slots[i] = null;
          break;
        }
      }
      if (done) continue;
      if (vip && vip.b < vip.s) { vip.b++; qi++; if (vip.b >= vip.s) vip = null; continue; }
      return { qi, vip };
    }
  }
  function rec(mask, qi, slots, vip) {
    if (qi >= queue.length) return true;
    if (++nodes > maxNodes) { aborted = true; return false; }
    const k = key(mask, qi, slots, vip);
    if (failed.has(k)) return false;
    const head = queue[qi];
    const moves = [];
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i) || dead[i]) continue;
      if (blockMask[i] & ~mask) continue;
      const b = cands[i];
      if (b.vip) { if (vip) continue; } else if (!slots.some((sl, j) => open[j] && sl === null)) continue;
      moves.push(i);
    }
    moves.sort((a, b2) => (cands[a].color === head ? 0 : 1) - (cands[b2].color === head ? 0 : 1) || cands[b2].len - cands[a].len);
    for (const i of moves) {
      const b = cands[i];
      const ns = slots.map((x) => (x ? { ...x } : null));
      let nv = vip ? { ...vip } : null;
      if (b.vip) nv = { c: 99, b: 0, s: b.seats };
      else { const j = ns.findIndex((sl, jj) => open[jj] && sl === null); ns[j] = { c: b.color, b: 0, s: b.seats }; }
      const r = settleSim(qi, ns, nv);
      order.push(b.id);
      if (rec(mask | (1 << i), r.qi, ns, r.vip)) return true;
      order.pop();
      if (aborted) return false;
    }
    failed.add(k);
    return false;
  }
  const slots0 = slotsInit.map((x) => (x ? { ...x } : null));
  const r0 = settleSim(s.qi, slots0, vipInit ? { ...vipInit } : null);
  const ok = rec(0, r0.qi, slots0, r0.vip);
  return { solved: ok, order: ok ? order.slice() : [], nodes, aborted };
}

/** Rastgele (akıllı olmayan) oyuncu simülasyonu: kazanma oranı = zorluk ölçüsü. */
export function randomWinRate(stage, opts, rng, runs = 200) {
  let wins = 0;
  for (let r = 0; r < runs; r++) {
    const s = makeState(stage, opts);
    settle(s);
    for (;;) {
      const ev = evaluate(s);
      if (ev.status === 'won') { wins++; break; }
      if (ev.status === 'lost') break;
      const mv = movableBuses(s).filter((b) => !b.vip);
      if (!mv.length) break;
      const b = mv[rng.int(mv.length)];
      tap(s, b.id);
      settle(s);
    }
  }
  return wins / runs;
}

/** Yardımcı: verilen sırayı motorda gerçekten oynatıp kazanıp kazanmadığını döndürür. */
export function replay(stage, opts, order) {
  const s = makeState(stage, opts);
  settle(s);
  for (const id of order) {
    const r = tap(s, id);
    if (!r.ok) return { ok: false, at: id, reason: r.reason };
    settle(s);
  }
  return { ok: evaluate(s).status === 'won', state: s };
}
