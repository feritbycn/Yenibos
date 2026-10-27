// Güvenilir zaman: sunucu saati varsa onu (monoton ölçümle), yoksa yerel saati geri alma korumasıyla kullanır.
import { BACKEND } from './config.js';
import { dayKeyOf, weekKeyOf, weekdayOf } from './clockmath.js';

const TOL = 2 * 60000;     // saat geri alma toleransı (2 dk)

export const Clock = {
  offset: null,            // sunucu zamanı - performance.now()
  save: null,
  tampered: false,
  init(save) { this.save = save; this.tick(); },
  /** Sunucu saatini al (ör. /v1/time cevabı). performance.now() uyku/saat değişikliğinden etkilenmez. */
  setServerTime(ms) { this.offset = ms - performance.now(); this.tick(); },
  get synced() { return this.offset !== null; },
  now() { return this.offset !== null ? performance.now() + this.offset : Date.now(); },
  /** Yerel saat modunda: kayıtlı "en son görülen zaman"dan geri gidildiyse saat oynanmış sayılır. */
  tick() {
    const d = this.save?.data; if (!d) return;
    const n = this.now();
    if (this.offset !== null) { this.tampered = false; d.time.lastSeen = Math.max(d.time.lastSeen, n); return; }
    if (n < d.time.lastSeen - TOL) this.tampered = true;
    else { this.tampered = false; if (n > d.time.lastSeen) d.time.lastSeen = n; }
  },
  /** Bugünün gün anahtarı (ör. 2026-10-27), sabit gün-sınırı ofsetiyle. */
  dayKey(ts = this.now()) { return dayKeyOf(ts, BACKEND.dayOffsetMin); },
  weekKey(ts = this.now()) { return weekKeyOf(ts, BACKEND.dayOffsetMin); },
  weekday(ts = this.now()) { return weekdayOf(ts, BACKEND.dayOffsetMin); },
  /** Günlük/haftalık ödüller için zamana güvenilebilir mi? */
  trusted() {
    this.tick();
    if (BACKEND.mode === 'http') return this.offset !== null;    // sunucu modunda yalnızca sunucu saatiyle
    return !this.tampered;
  },
  why() {
    if (BACKEND.mode === 'http' && this.offset === null) return 'Günlük ödül için internet bağlantısı gerekli.';
    if (this.tampered) return 'Cihaz saati geriye alınmış görünüyor. Saat düzelene kadar günlük ödül kapalı.';
    return '';
  },
};
