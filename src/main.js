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
// Açılış ekranı: en az MIN_SPLASH ms görünür (animasyon oynasın); gerçek yükleme bitince çubuk dolar.
const MIN_SPLASH = params.has('splash') ? +params.get('splash') : (params.has('start') || params.has('fast') || params.has('shot')) ? 0 : 3000;
const T0 = 0;   // sayaç sayfa açılışından (navigationStart) başlar; oyun yüklemesi uzarsa ek bekleme olmaz
const TIPS = ['Otobüsler hazırlanıyor…', 'Yolcular toplanıyor…', 'Park yerleri açılıyor…', 'Yollar süpürülüyor…', 'Hazır!'];
const bar = document.getElementById('spBar'), txt = document.getElementById('spTxt'), pct = document.getElementById('spPct');
function splashTick() {
  const k = Math.min(1, (performance.now() - T0) / Math.max(1, MIN_SPLASH));
  const e = 1 - Math.pow(1 - k, 2);
  if (bar) bar.style.width = (e * 100).toFixed(0) + '%'; if (pct) pct.textContent = Math.round(e * 100) + '%';
  if (txt) txt.textContent = TIPS[Math.min(TIPS.length - 1, Math.floor(e * (TIPS.length - 0.01)))];
  if (k < 1) requestAnimationFrame(splashTick);
  else setTimeout(() => document.getElementById('loading')?.classList.add('gone'), MIN_SPLASH ? 250 : 0);
}
if (MIN_SPLASH) splashTick(); else { if (bar) bar.style.width = '100%'; setTimeout(() => document.getElementById('loading')?.classList.add('gone'), 400); }
document.addEventListener('visibilitychange', () => { if (document.hidden) game.notifier.reschedule(); });
document.addEventListener('visibilitychange', () => { if (document.hidden && game.phase === 'play' && !game.paused && !game.ui.hasModal) game.pause(); });
document.addEventListener('contextmenu', (e) => e.preventDefault());
// Android geri tuşu (Capacitor)
document.addEventListener('backbutton', () => {
  if (game.ui.hasModal) { game.ui.modals[game.ui.modals.length - 1].close(); return; }
  if (game.phase === 'play') game.pause(); else if (game.phase !== 'menu') game.goMenu();
});

// test/ekran görüntüsü için: ?start=N seviyeyi doğrudan başlatır (eğitim bayrakları açık sayılır)
const st = params.get('start');
if (st) setTimeout(() => { const t = game.save.data.tutorial; t.l1 = t.l2 = t.vip = true; game.ui.closeAll(); game.startLevel(+st); }, 700);
