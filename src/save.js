// Kayıt sistemi: otomatik, doğrulamalı (bozuk veriye karşı güvenli), geçici/kalıcı ayrımlı.
import { SAVE_KEY } from './config.js';

export const defaults = () => ({
  v: 1,
  level: 1, completed: {}, coins: 60,
  owned: { style: ['city'], rim: ['steel'], palette: ['vivid'], trail: ['dust'], vipSkin: ['gold'] },
  equipped: { style: 'city', rim: 'steel', palette: 'vivid', trail: 'dust', vipSkin: 'gold' },
  perm: { slots: 0 },
  powerups: { undo: 2, hint: 2, recall: 1, call: 1, extraSlot: 1, moves: 1, time: 1 },
  temp: { level: 0, slots: [], conv: 0, vipCalls: 0 },
  tutorial: { l1: false, l2: false, enabled: true },
  settings: { sound: true, vibe: true, quality: 'high' },
  daily: { lastClaim: '', streak: 0 },
  quests: { date: '', list: [], progress: {}, claimed: {} },
  ach: { unlocked: {}, claimed: {} },
  iap: { tx: [] },
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
  const tu = obj(r.tutorial); out.tutorial = { l1: !!tu.l1, l2: !!tu.l2, enabled: tu.enabled !== false };
  const se = obj(r.settings); out.settings = { sound: se.sound !== false, vibe: se.vibe !== false, quality: ['low', 'medium', 'high'].includes(se.quality) ? se.quality : 'high' };
  const da = obj(r.daily); out.daily = { lastClaim: str(da.lastClaim, ''), streak: num(da.streak, 0, 0, 7) };
  const qu = obj(r.quests); out.quests = { date: str(qu.date, ''), list: Array.isArray(qu.list) ? qu.list.filter((q) => q && typeof q.id === 'string').slice(0, 6) : [], progress: obj(qu.progress), claimed: obj(qu.claimed) };
  const ac = obj(r.ach); out.ach = { unlocked: obj(ac.unlocked), claimed: obj(ac.claimed) };
  out.iap = { tx: Array.isArray(obj(r.iap).tx) ? obj(r.iap).tx.filter((x) => typeof x === 'string').slice(-300) : [] };
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
