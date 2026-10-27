import data from './levels.json';
import { genStage, levelParams, difficultyOf } from './levelgen.js';
import { replay } from './solver.js';

/** Seviye verisini döndürür: 1..N hazır (doğrulanmış), sonrası aynı üreticiyle (tanıtım sırası doğrulanarak) üretilir. */
export function getLevel(n) {
  const pre = data.find((l) => l.n === n);
  if (pre) return pre;
  const { stages: ps, extra } = levelParams(n);
  const stages = ps.map((p, si) => {
    for (let t = 0; t < 40; t++) {
      const st = genStage(n * 1000003 + si * 7919 + t * 104729, p);
      if (replay(st, { slotsOpen: p.slots }, st.par).ok) { st.slots = p.slots; return st; }
    }
    throw new Error('level gen failed');
  });
  const total = stages.reduce((a, s) => a + s.buses.filter((b) => !b.v).length, 0);
  const lvl = { n, stages, slotsBase: ps[0].slots, difficulty: difficultyOf(n) };
  if (extra.moveSpare && stages.length === 1) lvl.moveLimit = total + extra.moveSpare;
  if (extra.timeSpare || stages.length > 1) lvl.timeLimit = Math.round(total * 4.5 + 40 + (extra.timeSpare || 0));
  return lvl;
}
export const PREBUILT_COUNT = data.length;
