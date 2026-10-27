// Özgün hayvan armaları (hiçbir kulübün resmi logosu değildir). Canvas ile çizilir, doku olarak otobüs tavanına / park yerine basılır.
// Her arma: ana renk (c1), ikinci renk (c2), hayvan silueti.
export const EMBLEMS = [
  { id: 'lion', name: 'Aslan', c1: '#c8102e', c2: '#ffc20e', ink: '#ffc20e' },
  { id: 'canary', name: 'Kanarya', c1: '#14275e', c2: '#ffd800', ink: '#ffd800' },
  { id: 'eagle', name: 'Kartal', c1: '#15151a', c2: '#ffffff', ink: '#ffffff' },
  { id: 'bull', name: 'Boğa', c1: '#12803f', c2: '#e8313a', ink: '#ffffff' },
  { id: 'wolf', name: 'Kurt', c1: '#6d1431', c2: '#6cc2f0', ink: '#e9f6ff' },
];
const TAU = Math.PI * 2;
const poly = (g, pts) => { g.beginPath(); pts.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y))); g.closePath(); };
const circ = (g, x, y, r) => { g.beginPath(); g.arc(x, y, r, 0, TAU); g.closePath(); };

function lion(g, ink, bg) {
  g.fillStyle = ink;
  for (let i = 0; i < 14; i++) { const a = (i / 14) * TAU; circ(g, Math.cos(a) * 62, Math.sin(a) * 62, 22); g.fill(); }   // yele
  circ(g, 0, 0, 62); g.fill();
  g.fillStyle = bg; circ(g, 0, 6, 44); g.fill();                                                                         // yüz
  g.fillStyle = ink; circ(g, -40, -40, 13); g.fill(); circ(g, 40, -40, 13); g.fill();                                    // kulaklar
  g.fillStyle = bg; circ(g, -40, -40, 6); g.fill(); circ(g, 40, -40, 6); g.fill();
  g.fillStyle = ink; poly(g, [[-26, -6], [-10, -2], [-12, 6], [-28, 4]]); g.fill(); poly(g, [[26, -6], [10, -2], [12, 6], [28, 4]]); g.fill();  // gözler
  poly(g, [[-12, 14], [12, 14], [0, 28]]); g.fill();                                                                     // burun
  g.strokeStyle = ink; g.lineWidth = 5; g.lineCap = 'round'; g.beginPath(); g.moveTo(0, 28); g.lineTo(0, 36); g.moveTo(-18, 40); g.quadraticCurveTo(-8, 44, 0, 36); g.quadraticCurveTo(8, 44, 18, 40); g.stroke();
}
function canary(g, ink, bg) {
  g.fillStyle = ink;
  poly(g, [[-52, 18], [-96, 36], [-92, 50], [-44, 36]]); g.fill();                                 // kuyruk
  g.beginPath(); g.ellipse(-4, 20, 56, 42, -0.12, 0, TAU); g.fill();                               // gövde
  circ(g, 44, -22, 30); g.fill();                                                                  // baş
  poly(g, [[70, -30], [100, -18], [70, -8]]); g.fill();                                            // gaga
  g.fillStyle = bg; circ(g, 52, -28, 6); g.fill();                                                 // göz
  g.beginPath(); g.ellipse(-12, 20, 34, 20, -0.5, 0, TAU); g.fill();                               // kanat (zemin renginde)
  g.strokeStyle = ink; g.lineWidth = 5; g.lineCap = 'round';
  g.beginPath(); g.moveTo(-8, 60); g.lineTo(-8, 84); g.moveTo(14, 60); g.lineTo(14, 84); g.moveTo(-18, 86); g.lineTo(4, 86); g.moveTo(6, 86); g.lineTo(26, 86); g.stroke();
  g.fillStyle = ink; poly(g, [[-2, -42], [8, -62], [16, -40]]); g.fill();                         // tepelik
}
function eagle(g, ink, bg) {
  g.fillStyle = ink;
  g.beginPath(); g.moveTo(-66, 88); g.quadraticCurveTo(-76, 20, -44, -32); g.quadraticCurveTo(-16, -72, 30, -68); g.quadraticCurveTo(66, -62, 72, -32);
  g.quadraticCurveTo(104, -26, 108, 4); g.quadraticCurveTo(108, 24, 92, 30); g.quadraticCurveTo(94, 14, 74, 8);          // kancalı gaga
  g.quadraticCurveTo(56, 12, 42, 26); g.quadraticCurveTo(30, 52, 44, 88); g.closePath(); g.fill();
  g.strokeStyle = bg; g.lineWidth = 5; g.lineCap = 'round';
  g.beginPath(); g.moveTo(10, -50); g.lineTo(54, -40); g.stroke();                                                       // kaş
  g.fillStyle = bg; circ(g, 38, -30, 7); g.fill(); g.fillStyle = ink; circ(g, 39, -30, 3.2); g.fill();                   // göz
  g.strokeStyle = bg; g.lineWidth = 4;
  for (const [x, y] of [[-36, 14], [-20, 36], [-4, 58], [-46, 48]]) { g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + 14, y + 4, x + 22, y + 22); g.stroke(); }   // tüy çizgileri
}
function bull(g, ink, bg) {
  g.fillStyle = ink;
  g.beginPath(); g.moveTo(-34, -40); g.quadraticCurveTo(-96, -30, -84, -88); g.quadraticCurveTo(-70, -52, -34, -52); g.closePath(); g.fill();   // boynuzlar
  g.beginPath(); g.moveTo(34, -40); g.quadraticCurveTo(96, -30, 84, -88); g.quadraticCurveTo(70, -52, 34, -52); g.closePath(); g.fill();
  poly(g, [[-30, -46], [30, -46], [38, 10], [22, 54], [-22, 54], [-38, 10]]); g.fill();             // yüz
  poly(g, [[-34, -30], [-70, -22], [-40, -10]]); g.fill(); poly(g, [[34, -30], [70, -22], [40, -10]]); g.fill();   // kulaklar
  g.fillStyle = bg; circ(g, -16, -8, 5.5); g.fill(); circ(g, 16, -8, 5.5); g.fill();                // gözler
  g.beginPath(); g.ellipse(0, 42, 24, 16, 0, 0, TAU); g.fill();                                     // burun
  g.fillStyle = ink; circ(g, -9, 42, 4); g.fill(); circ(g, 9, 42, 4); g.fill();
  g.strokeStyle = bg; g.lineWidth = 4; g.beginPath(); g.arc(0, 56, 12, 0.1 * Math.PI, 0.9 * Math.PI); g.stroke();                         // halka
}
function wolf(g, ink, bg) {
  g.fillStyle = ink;
  poly(g, [[-58, -86], [-18, -42], [-56, -30]]); g.fill(); poly(g, [[58, -86], [18, -42], [56, -30]]); g.fill();                       // kulaklar
  poly(g, [[-56, -34], [56, -34], [64, 6], [30, 52], [0, 86], [-30, 52], [-64, 6]]); g.fill();                                        // kafa + burun
  g.fillStyle = bg;
  poly(g, [[-44, -10], [-14, -2], [-18, 8], [-46, 2]]); g.fill(); poly(g, [[44, -10], [14, -2], [18, 8], [46, 2]]); g.fill();         // gözler
  poly(g, [[-12, 58], [12, 58], [0, 72]]); g.fill();                                                                                    // burun ucu
  g.strokeStyle = bg; g.lineWidth = 4; g.lineCap = 'round'; g.beginPath(); g.moveTo(0, 20); g.lineTo(0, 56); g.stroke();
  poly(g, [[-20, 18], [0, 30], [20, 18], [0, 24]]); g.fill();
}
const DRAW = { lion, canary, eagle, bull, wolf };

/** Rozet çizimi: dış halka c2, zemin c1, hayvan ink renginde. size = piksel. */
export function drawEmblem(g, id, size) {
  const e = EMBLEMS.find((x) => x.id === id); if (!e) return;
  const s = size / 2;
  g.save(); g.translate(s, s); g.scale(s / 128, s / 128);
  g.fillStyle = e.c2; circ(g, 0, 0, 126); g.fill();
  g.fillStyle = e.c1; circ(g, 0, 0, 112); g.fill();
  g.strokeStyle = e.c2; g.lineWidth = 3; circ(g, 0, 0, 100); g.stroke();
  g.save(); g.translate(0, 4); g.scale(0.86, 0.86); DRAW[id](g, e.ink, e.c1); g.restore();
  g.restore();
}

/** Park yeri dokusu (128x340): boşken takım renkli çerçeve + soluk arma. */
export function drawTeamSlot(g, id, w, h) {
  const e = EMBLEMS.find((x) => x.id === id); if (!e) return;
  const rr = (x, y, ww, hh, r) => { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + ww, y, x + ww, y + hh, r); g.arcTo(x + ww, y + hh, x, y + hh, r); g.arcTo(x, y + hh, x, y, r); g.arcTo(x, y, x + ww, y, r); g.closePath(); };
  g.clearRect(0, 0, w, h);
  g.fillStyle = 'rgba(15,22,38,.26)'; rr(5, 5, w - 10, h - 10, 22); g.fill();
  g.strokeStyle = e.c2; g.lineWidth = 6; rr(5, 5, w - 10, h - 10, 22); g.stroke();
  g.strokeStyle = e.c1; g.lineWidth = 4; rr(13, 13, w - 26, h - 26, 16); g.stroke();
  g.save(); g.globalAlpha = 0.9; g.translate((w - 96) / 2, (h - 96) / 2); drawEmblem(g, id, 96); g.restore();
}
