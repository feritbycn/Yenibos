// Saf gün/hafta hesapları. Hem oyun istemcisi hem referans sunucu aynı fonksiyonları kullanır.
// Zaman damgası = UTC milisaniye. Gün sınırı sabit bir ofsetle (dakika) belirlenir.
const DAY = 86400000;
export const dayIndex = (ts, offMin = 180) => Math.floor((ts + offMin * 60000) / DAY);
const pad = (n) => String(n).padStart(2, '0');
export function dayKeyOfIndex(di) { const d = new Date(di * DAY); return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`; }
export const dayKeyOf = (ts, offMin = 180) => dayKeyOfIndex(dayIndex(ts, offMin));
export function indexOfKey(key) { const [y, m, d] = key.split('-').map(Number); return Math.floor(Date.UTC(y, m - 1, d) / DAY); }
/** Haftanın başlangıç günü (Pazartesi) anahtarı; hafta kimliği olarak kullanılır. */
export function weekKeyOf(ts, offMin = 180) { const di = dayIndex(ts, offMin); const mon = di - ((di + 3) % 7); return dayKeyOfIndex(mon); }
/** 0 = Pazartesi … 6 = Pazar */
export const weekdayOf = (ts, offMin = 180) => (dayIndex(ts, offMin) + 3) % 7;
/** Haftanın bitişi (bir sonraki Pazartesi 00:00) UTC ms. */
export function weekEndsAt(ts, offMin = 180) { const di = dayIndex(ts, offMin); const mon = di - ((di + 3) % 7); return (mon + 7) * DAY - offMin * 60000; }
export const dayDiffKeys = (a, b) => indexOfKey(b) - indexOfKey(a);

/** Seviye puanı: sunucu da aynı formülle yeniden hesaplar (istemciye güvenilmez). */
export function levelScore({ stars, extra }) { return 100 + 60 * stars + Math.max(0, 40 - 8 * extra); }
/** Hamle sayısına göre yıldız: extra = gereken otobüs sayısından fazla yapılan hamle (hatalı dokunuş, geri çağırma vb.). */
export function starsForMoves(moves, needed) { return starsForExtra(Math.max(0, moves - needed), needed); }
export function starsForExtra(extra, needed) {
  extra = Math.max(0, extra);
  const t3 = Math.max(1, Math.floor(needed * 0.12));
  const t2 = Math.max(3, Math.ceil(needed * 0.4));
  return { extra, stars: extra <= t3 ? 3 : extra <= t2 ? 2 : 1, t3, t2 };
}
