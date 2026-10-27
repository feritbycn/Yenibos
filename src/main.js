import { Game } from './game.js';

const params = new URLSearchParams(location.search);
const game = new Game({ preserve: params.has('shot') });
window.__game = game;
let last = performance.now();
function loop(t) {
  const dt = Math.min(0.1, (t - last) / 1000); last = t;
  try { game.frame(dt); } catch (e) { console.error('frame error', e); }
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
setTimeout(() => document.getElementById('loading')?.classList.add('gone'), 400);
document.addEventListener('visibilitychange', () => { if (document.hidden && game.phase === 'play' && !game.paused && !game.ui.hasModal) game.pause(); });
document.addEventListener('contextmenu', (e) => e.preventDefault());
// Android geri tuşu (Capacitor)
document.addEventListener('backbutton', () => {
  if (game.ui.hasModal) { game.ui.modals[game.ui.modals.length - 1].close(); return; }
  if (game.phase === 'play') game.pause(); else if (game.phase !== 'menu') game.goMenu();
});

// test/ekran görüntüsü için: ?start=N seviyeyi doğrudan başlatır (eğitim bayrakları açık sayılır)
const st = params.get('start');
if (st) setTimeout(() => { const t = game.save.data.tutorial; t.l1 = t.l2 = true; game.ui.closeAll(); game.startLevel(+st); }, 700);
