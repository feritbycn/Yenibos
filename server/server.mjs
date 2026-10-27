// Referans sunucu (bağımlılıksız Node 18+). Oyunun src/backend.js HttpBackend istemcisinin konuştuğu API'yi uygular.
//   Çalıştır:  ADMIN_KEY=gizli-bir-anahtar PORT=8787 node server/server.mjs
//   Veri:      DATA_FILE (varsayılan server/data.json) — tek dosya JSON, atomik yazılır. Küçük/orta ölçek içindir;
//              büyürse aynı fonksiyonları PostgreSQL/Redis gibi bir veritabanına taşıyın.
// Güvenlik özeti: jeton (token) yalnızca özeti saklanır; skorlar istemciden değil hamle verisinden yeniden hesaplanır;
// günlük ödül/hafta sınırı SUNUCU saatine göre belirlenir (cihaz saati yok sayılır); yönetici uçları ADMIN_KEY ister.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { dayKeyOf, weekKeyOf, weekEndsAt, dayDiffKeys, levelScore, starsForMoves } from '../src/clockmath.js';

const HERE = path.dirname(fileURLToPath(import.meta.url));
export const CFG = {
  port: +(process.env.PORT || 8787),
  dataFile: process.env.DATA_FILE || path.join(HERE, 'data.json'),
  adminKey: process.env.ADMIN_KEY || '',
  dayOffsetMin: +(process.env.DAY_OFFSET_MIN || 180),
  weeklyRewards: (process.env.WEEKLY_REWARDS || '500,300,150').split(',').map(Number),
  now: () => Date.now(),          // testte değiştirilebilir
};

// ------------------------------------------------------------ veri
let db = { users: {}, scores: {}, inbox: {}, closedWeeks: {}, tokens: {} };
function load() { try { db = { ...db, ...JSON.parse(fs.readFileSync(CFG.dataFile, 'utf8')) }; } catch { /* yeni dosya */ } }
let saveT = null;
function persist(now = false) {
  const run = () => { try { const tmp = CFG.dataFile + '.tmp'; fs.writeFileSync(tmp, JSON.stringify(db)); fs.renameSync(tmp, CFG.dataFile); } catch (e) { console.error('kayıt hatası', e.message); } };
  if (now) { clearTimeout(saveT); run(); return; }
  clearTimeout(saveT); saveT = setTimeout(run, 300);
}
const sha = (s) => crypto.createHash('sha256').update(s).digest('hex');
const rid = (n = 12) => crypto.randomBytes(n).toString('hex');
const clampInt = (v, lo, hi, d = 0) => (Number.isFinite(v) ? Math.min(hi, Math.max(lo, Math.floor(v))) : d);
const today = () => dayKeyOf(CFG.now(), CFG.dayOffsetMin);
const thisWeek = () => weekKeyOf(CFG.now(), CFG.dayOffsetMin);

// ------------------------------------------------------------ yardımcılar
const hits = new Map();
function limited(key, max = 120) {
  const t = Math.floor(Date.now() / 60000); const k = key + ':' + t; const n = (hits.get(k) || 0) + 1; hits.set(k, n);
  if (hits.size > 5000) for (const kk of hits.keys()) if (!kk.endsWith(':' + t)) hits.delete(kk);
  return n > max;
}
function send(res, code, obj, extra = {}) {
  const body = JSON.stringify({ serverNow: CFG.now(), ...obj });
  res.writeHead(code, { 'content-type': 'application/json; charset=utf-8', 'access-control-allow-origin': '*', 'access-control-allow-headers': 'content-type, authorization, x-admin-key', 'access-control-allow-methods': 'GET,POST,PUT,OPTIONS', ...extra });
  res.end(body);
}
function readBody(req) {
  return new Promise((resolve, reject) => {
    let n = 0; const ch = [];
    req.on('data', (c) => { n += c.length; if (n > 65536) { reject(Object.assign(new Error('too large'), { code: 413 })); req.destroy(); } else ch.push(c); });
    req.on('end', () => { try { resolve(ch.length ? JSON.parse(Buffer.concat(ch).toString('utf8')) : {}); } catch { reject(Object.assign(new Error('bad json'), { code: 400 })); } });
    req.on('error', reject);
  });
}
function authUser(req) {
  const h = req.headers.authorization || ''; const m = /^Bearer (.+)$/.exec(h); if (!m) return null;
  const uid = db.tokens[sha(m[1])]; return uid && db.users[uid] ? db.users[uid] : null;
}
const adminOk = (req) => CFG.adminKey && req.headers['x-admin-key'] && crypto.timingSafeEqual(Buffer.from(sha(String(req.headers['x-admin-key']))), Buffer.from(sha(CFG.adminKey)));
const cleanName = (s) => String(s || '').replace(/[^\p{L}\p{N} _.\-]/gu, '').trim().slice(0, 20);

// ------------------------------------------------------------ iş mantığı
export function closeWeeks() {
  const cur = thisWeek(); let changed = false;
  for (const wk of Object.keys(db.scores)) {
    if (wk >= cur || db.closedWeeks[wk]) continue;
    const totals = Object.entries(db.scores[wk]).map(([uid, lv]) => [uid, Object.values(lv).reduce((a, b) => a + b, 0)]).sort((a, b) => b[1] - a[1]).slice(0, CFG.weeklyRewards.length);
    totals.forEach(([uid, score], i) => {
      (db.inbox[uid] ||= []).push({ id: `weekly-${wk}-r${i + 1}`, coins: CFG.weeklyRewards[i], note: `Haftalık sıralama ${i + 1}. oldun (${wk}) — ${score} puan`, created: CFG.now(), claimed: false });
    });
    db.closedWeeks[wk] = { closedAt: CFG.now(), winners: totals.map(([uid, score]) => ({ uid, score })) };
    changed = true;
  }
  if (changed) persist();
  return changed;
}
const weekTotals = (wk) => Object.entries(db.scores[wk] || {}).map(([uid, lv]) => ({ uid, score: Object.values(lv).reduce((a, b) => a + b, 0) })).sort((a, b) => b.score - a.score);

const PROFILE_KEYS = { coins: [0, 1e9], level: [1, 1e5] };
function sanitizeProfile(p) {
  const out = {};
  for (const [k, [lo, hi]] of Object.entries(PROFILE_KEYS)) out[k] = clampInt(+p?.[k], lo, hi, lo);
  out.perm = clampInt(+p?.perm, 0, 3);
  const obj = (v) => (v && typeof v === 'object' && !Array.isArray(v) ? v : {});
  out.powerups = {}; for (const [k, v] of Object.entries(obj(p?.powerups))) if (/^[a-zA-Z]{2,12}$/.test(k)) out.powerups[k] = clampInt(+v, 0, 999);
  out.owned = {}; for (const [k, v] of Object.entries(obj(p?.owned))) if (/^[a-zA-Z]{2,12}$/.test(k) && Array.isArray(v)) out.owned[k] = v.filter((x) => typeof x === 'string' && x.length < 24).slice(0, 40);
  out.stats = {}; for (const [k, v] of Object.entries(obj(p?.stats))) if (/^[a-zA-Z]{2,16}$/.test(k)) out.stats[k] = clampInt(+v, 0, 1e9);
  out.stars = clampInt(+p?.stars, 0, 1e6);
  return out;
}

// ------------------------------------------------------------ yönlendirme
async function handle(req, res) {
  const url = new URL(req.url, 'http://x'); const p = url.pathname; const m = req.method;
  if (m === 'OPTIONS') return send(res, 204, {});
  const ip = req.socket.remoteAddress || '?';
  if (limited(ip, 240)) return send(res, 429, { ok: false, reason: 'rate' });
  if (p === '/health') return send(res, 200, { ok: true });
  if (p === '/v1/time' && m === 'GET') return send(res, 200, { ok: true });

  if (p === '/admin' && m === 'GET') { res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' }); return res.end(fs.readFileSync(path.join(HERE, 'admin.html'))); }
  if (p.startsWith('/admin/api/')) return admin(req, res, p, m);

  if (p === '/v1/auth/guest' && m === 'POST') {
    if (limited('reg:' + ip, 20)) return send(res, 429, { ok: false, reason: 'rate' });
    const b = await readBody(req); const uid = 'u_' + rid(6); const token = rid(24);
    const name = cleanName(b.name) || 'Oyuncu' + Math.floor(1000 + Math.random() * 9000);
    db.users[uid] = { uid, name, created: CFG.now(), lastSeen: CFG.now(), daily: { last: '', streak: 0 }, profile: sanitizeProfile({}), banned: false };
    db.tokens[sha(token)] = uid; persist();
    return send(res, 200, { ok: true, uid, token, name });
  }

  const u = authUser(req);
  if (!u) return send(res, 401, { ok: false, reason: 'auth' });
  if (u.banned) return send(res, 403, { ok: false, reason: 'banned' });
  if (limited(u.uid, 120)) return send(res, 429, { ok: false, reason: 'rate' });
  u.lastSeen = CFG.now(); closeWeeks();

  if (p === '/v1/me' && m === 'GET') return send(res, 200, { ok: true, uid: u.uid, name: u.name, profile: u.profile, daily: u.daily });
  if (p === '/v1/me' && m === 'PUT') { u.profile = { ...sanitizeProfile(await readBody(req)), syncedAt: CFG.now() }; persist(); return send(res, 200, { ok: true }); }
  if (p === '/v1/me/name' && m === 'POST') { const n = cleanName((await readBody(req)).name); if (n.length < 2) return send(res, 400, { ok: false, reason: 'name' }); u.name = n; persist(); return send(res, 200, { ok: true, name: n }); }

  if (p === '/v1/daily/claim' && m === 'POST') {
    const t = today();
    if (u.daily.last === t) return send(res, 200, { ok: false, reason: 'already', day: t });
    const gap = u.daily.last ? dayDiffKeys(u.daily.last, t) : 99;
    if (gap < 0) return send(res, 200, { ok: false, reason: 'clock' });
    const streak = gap === 1 ? (u.daily.streak % 7) + 1 : 1;
    u.daily = { last: t, streak }; persist();
    return send(res, 200, { ok: true, day: t, streak, index: streak - 1 });
  }

  if (p === '/v1/scores' && m === 'POST') {
    const b = await readBody(req);
    const level = clampInt(+b.level, 1, 1e5, 0), needed = clampInt(+b.needed, 1, 400, 0), moves = clampInt(+b.moves, 0, 5000, -1);
    if (!level || !needed || moves < needed) return send(res, 400, { ok: false, reason: 'invalid' });     // gereken otobüsten az hamleyle bitirmek imkânsız
    const { stars, extra } = starsForMoves(moves, needed);
    const score = levelScore({ stars, extra }); const wk = thisWeek();
    const lv = ((db.scores[wk] ||= {})[u.uid] ||= {});
    if (score > (lv[level] || 0)) lv[level] = score;           // aynı seviyeyi tekrar oynayarak puan şişirilemez: en iyisi sayılır
    if (!Array.isArray(u.log)) u.log = [];
    if (Array.isArray(b.log)) { u.log.push({ t: CFG.now(), level, moves, log: b.log.slice(0, 400).map((x) => clampInt(+x, 0, 999)) }); u.log = u.log.slice(-20); }
    persist();
    const tot = weekTotals(wk); const rank = tot.findIndex((e) => e.uid === u.uid) + 1;
    return send(res, 200, { ok: true, score, stars, week: wk, weekScore: tot[rank - 1]?.score || 0, rank });
  }

  if (p === '/v1/leaderboard/weekly' && m === 'GET') {
    const wk = thisWeek(); const tot = weekTotals(wk);
    const entries = tot.slice(0, 50).map((e, i) => ({ rank: i + 1, name: db.users[e.uid]?.name || '?', score: e.score, you: e.uid === u.uid }));
    const my = tot.findIndex((e) => e.uid === u.uid);
    return send(res, 200, { ok: true, week: wk, endsAt: weekEndsAt(CFG.now(), CFG.dayOffsetMin), rewards: CFG.weeklyRewards, entries, me: { rank: my >= 0 ? my + 1 : null, score: my >= 0 ? tot[my].score : 0 } });
  }

  if (p === '/v1/inbox' && m === 'GET') return send(res, 200, { ok: true, items: (db.inbox[u.uid] || []).filter((x) => !x.claimed) });
  { const mm = /^\/v1\/inbox\/([^/]+)\/claim$/.exec(p);
    if (mm && m === 'POST') {
      const it = (db.inbox[u.uid] || []).find((x) => x.id === decodeURIComponent(mm[1]));
      if (!it) return send(res, 404, { ok: false, reason: 'none' });
      if (it.claimed) return send(res, 200, { ok: false, reason: 'already' });
      it.claimed = true; it.claimedAt = CFG.now(); persist(); return send(res, 200, { ok: true });
    } }
  return send(res, 404, { ok: false, reason: 'route' });
}

async function admin(req, res, p, m) {
  if (!adminOk(req)) return send(res, 401, { ok: false, reason: 'admin' });
  if (p === '/admin/api/users' && m === 'GET') {
    const users = Object.values(db.users).map((u) => ({ uid: u.uid, name: u.name, coins: u.profile.coins, level: u.profile.level, lastSeen: u.lastSeen, created: u.created, banned: u.banned, pending: (db.inbox[u.uid] || []).filter((x) => !x.claimed).length }));
    users.sort((a, b) => b.lastSeen - a.lastSeen); return send(res, 200, { ok: true, users, week: thisWeek() });
  }
  const mu = /^\/admin\/api\/users\/([^/]+)(?:\/(grant|ban))?$/.exec(p);
  if (mu) {
    const u = db.users[mu[1]]; if (!u) return send(res, 404, { ok: false, reason: 'none' });
    if (!mu[2] && m === 'GET') return send(res, 200, { ok: true, user: { ...u, tokenless: true }, inbox: db.inbox[u.uid] || [], weekScore: weekTotals(thisWeek()).find((e) => e.uid === u.uid)?.score || 0 });
    if (mu[2] === 'grant' && m === 'POST') {
      const b = await readBody(req); const it = { id: 'gift-' + rid(5), note: String(b.note || 'Yönetici hediyesi').slice(0, 80), created: CFG.now(), claimed: false };
      if (b.coins) it.coins = clampInt(+b.coins, 1, 1e7);
      if (b.powerups && typeof b.powerups === 'object') { it.powerups = {}; for (const [k, v] of Object.entries(b.powerups)) if (/^[a-zA-Z]{2,12}$/.test(k)) it.powerups[k] = clampInt(+v, 1, 999); }
      if (b.items && typeof b.items === 'object') { it.items = {}; for (const [k, v] of Object.entries(b.items)) if (/^[a-zA-Z]{2,12}$/.test(k) && Array.isArray(v)) it.items[k] = v.filter((x) => typeof x === 'string' && x.length < 24).slice(0, 20); }
      if (!it.coins && !it.powerups && !it.items) return send(res, 400, { ok: false, reason: 'empty' });
      (db.inbox[u.uid] ||= []).push(it); persist(true); return send(res, 200, { ok: true, id: it.id });
    }
    if (mu[2] === 'ban' && m === 'POST') { u.banned = !!(await readBody(req)).banned; persist(true); return send(res, 200, { ok: true, banned: u.banned }); }
  }
  if (p === '/admin/api/weekly/close' && m === 'POST') return send(res, 200, { ok: true, changed: closeWeeks(), closed: Object.keys(db.closedWeeks) });
  if (p === '/admin/api/weekly' && m === 'GET') { const wk = thisWeek(); return send(res, 200, { ok: true, week: wk, top: weekTotals(wk).slice(0, 20).map((e) => ({ ...e, name: db.users[e.uid]?.name })), closed: db.closedWeeks }); }
  return send(res, 404, { ok: false, reason: 'route' });
}

export function start() {
  load();
  const srv = http.createServer((req, res) => { handle(req, res).catch((e) => send(res, e.code === 413 || e.code === 400 ? e.code : 500, { ok: false, reason: 'error' })); });
  return new Promise((r) => srv.listen(CFG.port, () => r(srv)));
}
export const _db = () => db;
export const _reset = () => { db = { users: {}, scores: {}, inbox: {}, closedWeeks: {}, tokens: {} }; };

if (import.meta.url === `file://${process.argv[1]}`) {
  if (!CFG.adminKey) console.warn('UYARI: ADMIN_KEY ayarlanmadı; yönetici uçları kapalı.');
  start().then(() => console.log(`Sunucu hazır: http://localhost:${CFG.port}  (yönetici paneli: /admin)`));
}
