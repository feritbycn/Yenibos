import data from './levels.json';
import { genStage, levelParams, difficultyOf } from './levelgen.js';
import { MOVE_SPARE } from './config.js';
import { replay } from './solver.js';

/** Seviye verisini döndürür: 1..N hazır (doğrulanmış), sonrası aynı üreticiyle (tanıtım sırası doğrulanarak) üretilir. */
export function getLevel(n) {
  const pre = data.find((l) => l.n === n);
  if (pre) return { ...pre, difficulty: difficultyOf(n) };
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
  void total; void extra;
  return lvl;
}
export const PREBUILT_COUNT = data.length;

/** Seviyedeki hamle payı (kademeye göre). */
export const moveSpareOf = (n) => MOVE_SPARE.find(([max]) => n <= max)[1];
/** Her aşamanın hamle sınırı = o aşamadaki (VIP olmayan) otobüs sayısı + kademe payı. Süre sınırı yoktur (timeLimit alanı yok sayılır). */
export function moveLimitFor(lvl, stageIdx) {
  const st = lvl.stages[stageIdx]; const need = st.buses.filter((b) => !b.v).length;
  return need + moveSpareOf(lvl.n);
}
