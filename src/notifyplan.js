// Bildirim planı (saf fonksiyon, test edilebilir). Zamanlar CİHAZ yerel saatidir.
import { NOTIFY } from './config.js';

const DAILY = [
  ['Günlük ödülün hazır! 🎁', 'Bugünkü jetonunu al, serini bozma.'],
  ['Otobüsler seni bekliyor 🚌', 'Günlük giriş ödülünü almayı unutma!'],
  ['Yolcular durakta bekliyor', 'Gir, günlük ödülünü topla ve bir seviye geç.'],
];
const COMEBACK = [
  ['Otobüsler seni özledi 🚌', 'Yolcular bekliyor, yeni seviyeler hazır!'],
  ['Durak kalabalık!', 'Birkaç dakikanı ayır, bir bulmaca çöz.'],
  ['Uzun zamandır yoksun', 'Günlük ödüllerin ve yeni seviyeler seni bekliyor.'],
];

const at = (base, addDays, h, m) => { const d = new Date(base.getFullYear(), base.getMonth(), base.getDate() + addDays, h, m, 0, 0); return d; };

/**
 * @param {{now:Date, claimedToday:boolean, seed?:number}} o
 * @returns {{id:number, at:Date, title:string, body:string}[]}
 */
export function planNotifications({ now, claimedToday, seed = 0 }) {
  const out = []; const pick = (arr, k) => arr[(seed + k) % arr.length];
  const todayAt = at(now, 0, NOTIFY.dailyHour, NOTIFY.dailyMinute);
  const dailyAt = !claimedToday && todayAt.getTime() > now.getTime() + 60000 ? todayAt : at(now, 1, NOTIFY.dailyHour, NOTIFY.dailyMinute);
  const [t0, b0] = pick(DAILY, 0); out.push({ id: 1001, at: dailyAt, title: t0, body: b0 });
  NOTIFY.comebackDays.forEach((days, i) => { const [t, b] = pick(COMEBACK, i); out.push({ id: 1002 + i, at: at(now, days, NOTIFY.comebackHour, 0), title: t, body: b }); });
  return out.filter((n) => n.at.getTime() > now.getTime());
}
export const NOTIFY_IDS = [1001, 1002, 1003, 1004];
