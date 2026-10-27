import { GameScene } from './scene.js';
import * as E from './engine.js';
import { getLevel } from './levels.js';
const n = +(new URLSearchParams(location.search).get('l') || 3);
const lvl = getLevel(n);
const stage = lvl.stages[0];
const state = E.makeState(stage, { slotsOpen: lvl.slotsBase });
const sc = new GameScene(document.getElementById('stage'), { preserve: true });
window.sc = sc; window.E = E; window.state = state;
sc.loadStage(state);
let last = performance.now();
function loop(t) { sc.update((t - last) / 1000); last = t; requestAnimationFrame(loop); }
requestAnimationFrame(loop);
sc.onBusTap = (id) => {
  const r = E.tap(state, id);
  if (r.ok) sc.startDriveToSlot(id, r.slot); else sc.bump(id);
};
