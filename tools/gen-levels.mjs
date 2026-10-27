// Seviyeleri üretir, çözücü ile doğrular ve src/levels.json dosyasına yazar.
import fs from 'node:fs';
import { genStage, levelParams, tutorialLevel1, difficultyOf } from '../src/levelgen.js';
import { solve, randomWinRate, replay } from '../src/solver.js';
import { makeState } from '../src/engine.js';
import { makeRng } from '../src/rng.js';

const MAX = +(process.argv[2] || 40);
const out = [];
const t0 = Date.now();
for (let n = 1; n <= MAX; n++) {
  let lvl;
  if (n === 1) {
    lvl = tutorialLevel1();
    lvl.stages[0].wr = 1;
    const r = replay(lvl.stages[0], { slotsOpen: 4 }, lvl.stages[0].par);
    if (!r.ok) throw new Error('L1 witness fail');
    const sv = solve(makeState(lvl.stages[0], { slotsOpen: 4 }));
    if (!sv.solved) throw new Error('L1 unsolvable');
    lvl.stages[0].solution = sv.order;
  } else {
    const { stages: ps, extra } = levelParams(n);
    const stages = [];
    ps.forEach((p, si) => {
      let best = null;
      for (let t = 0; t < 70; t++) {
        const seed = n * 1000003 + si * 7919 + t * 104729;
        const st = genStage(seed, p);
        if (st.buses.filter((b) => !b.v).length < p.count - 1) continue;
        const opts = { slotsOpen: p.slots };
        const rp = replay(st, opts, st.par);
        if (!rp.ok) continue;                                    // yapı gereği çözüm: motorda doğrulanmalı
        const sv = solve(makeState(st, opts), { maxNodes: 500000 });
        if (!sv.solved) continue;
        const wr = randomWinRate(st, opts, makeRng(seed ^ 0x9e3779b1), 250);
        if (wr === 0 && p.wr > 0.1 && t < 69) { /* çok sert; yine de aday */ }
        const score = Math.abs(wr - p.wr);
        if (!best || score < best.score) { best = { score, st, wr, sv }; }
        if (score < 0.05) break;
      }
      if (!best) throw new Error('Seviye üretilemedi: ' + n);
      const st = best.st; st.wr = +best.wr.toFixed(3); st.solution = best.sv.order; st.slots = p.slots;
      stages.push(st);
    });
    const normalTotal = stages.reduce((a, s) => a + s.buses.filter((b) => !b.v).length, 0);
    lvl = { stages, slotsBase: ps[0].slots };
    if (extra.moveSpare && stages.length === 1) lvl.moveLimit = normalTotal + extra.moveSpare;
    if (extra.timeSpare || stages.length > 1) lvl.timeLimit = Math.round(normalTotal * 4.5 + 40 + (extra.timeSpare || 0));
  }
  lvl.n = n; lvl.difficulty = difficultyOf(n);
  out.push(lvl);
  const s0 = lvl.stages.map((s) => `${s.buses.length}b/${s.queue.length}p wr=${s.wr}`).join(' | ');
  console.log(`L${String(n).padStart(2)} ${lvl.difficulty.padEnd(6)} ${s0}${lvl.moveLimit ? ' moveLimit=' + lvl.moveLimit : ''}${lvl.timeLimit ? ' time=' + lvl.timeLimit : ''}`);
}
fs.writeFileSync(new URL('../src/levels.json', import.meta.url), JSON.stringify(out));
console.log(`Bitti: ${out.length} seviye, ${((Date.now() - t0) / 1000).toFixed(1)}s`);
