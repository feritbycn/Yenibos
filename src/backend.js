// Sunucu altyapısı istemcisi. Oyun yalnızca bu arayüzü bilir; sunucu yoksa LocalBackend çalışır.
//   mode 'local' : sunucu yok. Sıralama yalnızca bu cihazı gösterir, gelen kutusu boştur.
//   mode 'http'  : server/ klasöründeki referans sunucu (ya da aynı API'yi uygulayan kendi sunucun).
// Tüm ağ çağrıları zaman aşımlıdır; hata olursa oyun çevrimdışı devam eder, ilerleme kaybolmaz.
import { BACKEND } from './config.js';
import { Clock } from './time.js';
import { levelScore, weekEndsAt } from './clockmath.js';
import { botEntries, langOf } from './bots.js';

export class LocalBackend {
  constructor(save) { this.save = save; this.mode = 'local'; }
  get online() { return false; }
  async init() { return { ok: true }; }
  async claimDaily() { return { ok: true, local: true }; }
  async submitScore({ level, stars, extra }) {
    const d = this.save.data, wk = Clock.weekKey();
    if (d.lb.week !== wk) d.lb = { week: wk, levels: {} };
    const sc = levelScore({ stars, extra });
    if (sc > (d.lb.levels[level] || 0)) d.lb.levels[level] = sc;
    this.save.save();
    return { ok: true };
  }
  weeklyTotal() { const d = this.save.data; return d.lb.week === Clock.weekKey() ? Object.values(d.lb.levels).reduce((a, b) => a + b, 0) : 0; }
  async leaderboard() {
    const total = this.weeklyTotal(); const name = this.save.data.account.name || 'Sen';
    // Sunucu yokken liste SİMÜLE oyuncularla doldurulur (arayüzde belirtilir); ödül verilmez.
    const now = Clock.now(), endsAt = weekEndsAt(now, BACKEND.dayOffsetMin);
    const acc = this.save.data.account;
    if (!acc.botSeed) { acc.botSeed = (crypto.getRandomValues(new Uint32Array(1))[0] || 1); this.save.save(true); }   // cihaza/kuruluma özel: veri silince değişir
    const bots = botEntries({ seedBase: acc.botSeed, weekKey: Clock.weekKey(), now, weekStart: endsAt - 7 * 86400000, weekEnd: endsAt, lang: langOf(globalThis.navigator?.language) });
    const all = bots.map((b) => ({ name: b.name, score: b.score }));
    if (total) all.push({ name, score: total, you: true });
    all.sort((a, b) => b.score - a.score || (a.you ? -1 : 1));
    const ranked = all.map((e, i) => ({ ...e, rank: i + 1 }));
    const me = ranked.find((e) => e.you);
    const top = ranked.slice(0, 20); if (me && me.rank > 20) top.push(me);
    return { ok: true, local: true, simulated: true, week: Clock.weekKey(), endsAt, rewards: BACKEND.weeklyRewards, entries: top, me: { rank: me ? me.rank : null, score: total } };
  }
  async sync() { return { ok: true, local: true }; }
  async inbox() { return { ok: true, items: [] }; }
  async claimInbox() { return { ok: true }; }
  async setName(name) { this.save.data.account.name = String(name || '').slice(0, 20); this.save.save(); return { ok: true, name: this.save.data.account.name }; }
}

export class HttpBackend {
  constructor(save, opts = {}) { this.save = save; this.mode = 'http'; this.base = (opts.baseUrl || BACKEND.baseUrl).replace(/\/$/, ''); this.fetch = opts.fetch || ((...a) => globalThis.fetch(...a)); this._online = false; }
  get online() { return this._online; }
  async req(method, path, body, auth = true) {
    const ctl = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const to = setTimeout(() => ctl?.abort(), BACKEND.timeoutMs);
    try {
      const h = { 'content-type': 'application/json' };
      if (auth && this.save.data.account.token) h.authorization = 'Bearer ' + this.save.data.account.token;
      const t0 = performance.now();
      const res = await this.fetch(this.base + path, { method, headers: h, body: body ? JSON.stringify(body) : undefined, signal: ctl?.signal });
      const j = await res.json().catch(() => ({}));
      if (typeof j.serverNow === 'number') Clock.setServerTime(j.serverNow + (performance.now() - t0) / 2);   // gidiş-dönüşün yarısı kadar telafi
      this._online = true;
      return { status: res.status, ...j, ok: res.ok && j.ok !== false };
    } catch (e) { this._online = false; return { ok: false, reason: 'network', error: String(e?.message || e) }; } finally { clearTimeout(to); }
  }
  /** Misafir hesap aç (ilk çalıştırma) ve sunucu saatini al. */
  async init() {
    const a = this.save.data.account;
    if (!a.uid || !a.token) {
      const r = await this.req('POST', '/v1/auth/guest', { name: a.name || undefined }, false);
      if (!r.ok) return r;
      a.uid = r.uid; a.token = r.token; a.name = r.name || a.name; this.save.save(true);
    } else {
      const r = await this.req('GET', '/v1/time', null, false);
      if (!r.ok) return r;
    }
    return { ok: true };
  }
  async claimDaily() { return this.req('POST', '/v1/daily/claim'); }
  async submitScore(entry) { return this.req('POST', '/v1/scores', entry); }
  async leaderboard() { return this.req('GET', '/v1/leaderboard/weekly'); }
  async sync(profile) { return this.req('PUT', '/v1/me', profile); }
  async inbox() { return this.req('GET', '/v1/inbox'); }
  async claimInbox(id) { return this.req('POST', '/v1/inbox/' + encodeURIComponent(id) + '/claim'); }
  async setName(name) { const r = await this.req('POST', '/v1/me/name', { name }); if (r.ok) { this.save.data.account.name = r.name; this.save.save(); } return r; }
}

export function createBackend(save, opts) {
  if (BACKEND.mode === 'http') return new HttpBackend(save, opts);
  return new LocalBackend(save);
}
