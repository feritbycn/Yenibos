import { EMBLEMS, drawEmblem } from '../../src/emblems.js';
const c = document.createElement('canvas'); c.width = 5 * 260; c.height = 260; document.body.appendChild(c);
const g = c.getContext('2d');
EMBLEMS.forEach((e, i) => { g.save(); g.translate(i * 260 + 2, 2); drawEmblem(g, e.id, 256); g.restore(); });
window.done = true;
