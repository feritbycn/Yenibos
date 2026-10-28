// Kayıt sistemi: otomatik, doğrulamalı (bozuk veriye karşı güvenli), geçici/kalıcı ayrımlı.
import { SAVE_KEY } from './config.js';

export const defaults = () => ({
  v: 1,
  level: 1, completed: {}, coins: 60,
  owned: { style: ['city'], rim: ['steel'], palette: ['vivid'], trail: ['dust'], vipSkin: ['gold'], emblem: ['none'] },
  equipped: { style: 'city', rim: 'steel', palette: 'vivid', trail: 'dust', vipSkin: 'gold', emblem: 'none' },
  perm: { slots: 0 },
  powerups: { undo: 2, hint: 2, recall: 1, call: 1, convert: 1, extraSlot: 1, moves: 1, time: 1, vip: 1, shuffle: 1 },
  temp: { level: 0, slots: [], conv: 0, vipCalls: 0 },
  tutorial: { l1: false, l2: false, vip: false, intro: {}, enabled: true },
  settings: { sound: true, vibe: true, quality: 'high' },
  daily: { lastClaim: '', streak: 0 },
  quests: { date: '', list: [], progress: {}, claimed: {} },
  ach: { unlocked: {}, claimed: {} },
  iap: { tx: [] },
  time: { lastSeen: 0 },
  weekly: { week: '', days: [], claimed: false },
  account: { uid: '', token: '', name: '', botSeed: 0 },
  best: {},
  lb: { week: '', levels: {} },
  inboxDone: [],
  ads: { since: 0, nextAt: 4, last: 0, removed: false, offers: 0, offerDay: '', offerLevel: 0 },
  notif: { enabled: false, asked: false },
  supply: { day: '', claimed: {}, nextAt: 0 },
  wheel: { day: '', free: 0, ad: 0, last: '' },
  offers: { day: '', count: 0, lastAt: 0, done: {} },
  premium: { owned: {} },
  cur: { level: 0, fails: 0, rescues: 0, startedAt: 0 },
  stats: { passengers: 0, levels: 0, vip: 0, coinsEarned: 0, buses: 0, slots: 0, threeStars: 0, ads: 0 },
});

const num = (v, d, min = 0, max = 1e9) => (Number.isFinite(v) ? Math.min(max, Math.max(min, Math.floor(v))) : d);
const str = (v, d) => (typeof v === 'string' ? v : d);
const obj = (v) => (v && typeof v === 'object' && !Array.isArray(v) ? v : {});

export function sanitize(raw) {
  const d = defaults(); const r = obj(raw);
  const out = defaults();
  out.level = num(r.level, 1, 1, 100000);
  out.coins = num(r.coins, d.coins, 0, 99999999);
  const comp = obj(r.completed); out.completed = {};
  for (const k of Object.keys(comp)) { const n = +k; if (Number.isInteger(n) && n > 0) out.completed[n] = num(comp[k], 1, 1, 3); }
  for (const k of Object.keys(d.owned)) {
    const arr = Array.isArray(obj(r.owned)[k]) ? obj(r.owned)[k].filter((x) => typeof x === 'string') : [];
    out.owned[k] = [...new Set([...d.owned[k], ...arr])];
  }
  for (const k of Object.keys(d.equipped)) { const v = str(obj(r.equipped)[k], d.equipped[k]); out.equipped[k] = out.owned[k].includes(v) ? v : d.equipped[k]; }
  out.perm.slots = num(obj(r.perm).slots, 0, 0, 3);
  const pu = obj(r.powerups); out.powerups = {};
  for (const k of Object.keys(d.powerups)) out.powerups[k] = num(pu[k], d.powerups[k], 0, 999);
  const t = obj(r.temp); out.temp = { level: num(t.level, 0), slots: Array.isArray(t.slots) ? t.slots.filter((x) => Number.isInteger(x) && x >= 0 && x < 7) : [], conv: num(t.conv, 0, 0, 99), vipCalls: num(t.vipCalls, 0, 0, 99) };
  const tu = obj(r.tutorial); out.tutorial = { l1: !!tu.l1, l2: !!tu.l2, vip: !!tu.vip, intro: { call: !!obj(tu.intro).call, vipcall: !!obj(tu.intro).vipcall, shuffle: !!obj(tu.intro).shuffle }, enabled: tu.enabled !== false };
  const se = obj(r.settings); out.settings = { sound: se.sound !== false, vibe: se.vibe !== false, quality: ['low', 'medium', 'high'].includes(se.quality) ? se.quality : 'high' };
  const da = obj(r.daily); out.daily = { lastClaim: str(da.lastClaim, ''), streak: num(da.streak, 0, 0, 7) };
  const qu = obj(r.quests); out.quests = { date: str(qu.date, ''), list: Array.isArray(qu.list) ? qu.list.filter((q) => q && typeof q.id === 'string').slice(0, 6) : [], progress: obj(qu.progress), claimed: obj(qu.claimed) };
  const ac = obj(r.ach); out.ach = { unlocked: obj(ac.unlocked), claimed: obj(ac.claimed) };
  out.iap = { tx: Array.isArray(obj(r.iap).tx) ? obj(r.iap).tx.filter((x) => typeof x === 'string').slice(-300) : [] };
  out.time = { lastSeen: num(obj(r.time).lastSeen, 0, 0, 4e12) };
  const wk = obj(r.weekly); out.weekly = { week: str(wk.week, ''), days: Array.isArray(wk.days) ? wk.days.filter((x) => Number.isInteger(x) && x >= 0 && x < 7) : [], claimed: !!wk.claimed };
  const ac2 = obj(r.account); out.account = { uid: str(ac2.uid, ''), token: str(ac2.token, ''), name: str(ac2.name, '').slice(0, 20), botSeed: num(ac2.botSeed, 0, 0, 4294967295) };
  out.best = {}; for (const k of Object.keys(obj(r.best))) { const n = +k; if (Number.isInteger(n) && n > 0) out.best[n] = num(r.best[k], 0, 0, 99999); }
  const lbv = obj(r.lb); out.lb = { week: str(lbv.week, ''), levels: {} }; for (const k of Object.keys(obj(lbv.levels))) out.lb.levels[k] = num(lbv.levels[k], 0, 0, 99999);
  const su = obj(r.supply); out.supply = { day: str(su.day, ''), claimed: obj(su.claimed), nextAt: num(su.nextAt, 0, 0, 4e12) };
  const wh = obj(r.wheel); out.wheel = { day: str(wh.day, ''), free: num(wh.free, 0, 0, 99), ad: num(wh.ad, 0, 0, 99), last: str(wh.last, '') };
  const of = obj(r.offers); out.offers = { day: str(of.day, ''), count: num(of.count, 0, 0, 99), lastAt: num(of.lastAt, 0, 0, 4e12), done: obj(of.done) };
  out.premium = { owned: obj(obj(r.premium).owned) };
  const cu = obj(r.cur); out.cur = { level: num(cu.level, 0), fails: num(cu.fails, 0, 0, 999), rescues: num(cu.rescues, 0, 0, 999), startedAt: num(cu.startedAt, 0, 0, 4e12) };
  out.inboxDone = Array.isArray(r.inboxDone) ? r.inboxDone.filter((x) => typeof x === 'string').slice(-200) : [];
  const ad = obj(r.ads); out.ads = { since: num(ad.since, 0, 0, 999), nextAt: num(ad.nextAt, 4, 3, 9), last: num(ad.last, 0, 0, 4e12), removed: ad.removed === true, offers: num(ad.offers, 0, 0, 99), offerDay: str(ad.offerDay, ''), offerLevel: num(ad.offerLevel, 0, 0, 1e6) };
  const nf = obj(r.notif); out.notif = { enabled: nf.enabled === true, asked: nf.asked === true };
  const st = obj(r.stats); out.stats = {}; for (const k of Object.keys(d.stats)) out.stats[k] = num(st[k], 0);
  return out;
}

export class Save {
  constructor() { this.data = this.load(); this._t = null; }
  load() {
    try { const s = localStorage.getItem(SAVE_KEY); if (s) return sanitize(JSON.parse(s)); } catch { /* bozuk veri → varsayılan */ }
    return defaults();
  }
  write() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(this.data)); } catch { /* kota */ } }
  /** Sık çağrılan değişiklikler için küçük gecikmeyle otomatik kaydet. */
  save(now = false) {
    if (now) { clearTimeout(this._t); this.write(); return; }
    clearTimeout(this._t); this._t = setTimeout(() => this.write(), 250);
  }
  reset() { this.data = defaults(); this.write(); }
}
