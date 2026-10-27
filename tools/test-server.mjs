// Referans sunucu + HttpBackend istemcisi testi (gerçek HTTP, yerel port). Çalıştır: node tools/test-server.mjs
import fs from 'node:fs'; import os from 'node:os'; import path from 'node:path';
process.env.DATA_FILE = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'bpd-srv-')), 'data.json');
process.env.ADMIN_KEY = 'test-admin-key'; process.env.PORT = '8799';
const S = await import('../server/server.mjs');
const { HttpBackend } = await import('../src/backend.js');
const { Clock } = await import('../src/time.js');
const { defaults } = await import('../src/save.js');
let pass = 0, fail = 0; const t = (n, ok, x = '') => { ok ? pass++ : fail++; console.log((ok ? 'PASS ' : 'FAIL ') + n + (x ? ' — ' + x : '')); };
let NOW = Date.parse('2026-10-27T10:00:00Z'); S.CFG.now = () => NOW;
const srv = await S.start(); const base = 'http://localhost:8799';
const call = async (m, p, body, h = {}) => { const r = await fetch(base + p, { method: m, headers: { 'content-type': 'application/json', ...h }, body: body ? JSON.stringify(body) : undefined }); return { status: r.status, ...(await r.json()) }; };
const reg = async (name) => { const r = await call('POST', '/v1/auth/guest', { name }); return { ...r, h: { authorization: 'Bearer ' + r.token } }; };
const ADM = { 'x-admin-key': 'test-admin-key' };

// --- hesap/kimlik
const A = await reg('Ayse'), B = await reg('Mehmet'), C = await reg('Can'), D = await reg('Deniz');
t('Misafir hesap açılır, jeton verilir', A.ok && A.uid.startsWith('u_') && A.token.length >= 40);
t('Kimliksiz istek reddedilir (401)', (await call('GET', '/v1/me')).status === 401);
t('Sahte jeton reddedilir', (await call('GET', '/v1/me', null, { authorization: 'Bearer abc' })).status === 401);
t('Sunucu saati döner', (await call('GET', '/v1/time')).serverNow === NOW);
t('Jeton sunucuda düz yazı olarak saklanmaz (yalnızca özeti)', !JSON.stringify(S._db()).includes(A.token));

// --- günlük ödül (sunucu günü belirler)
let r = await call('POST', '/v1/daily/claim', null, A.h); t('Günlük ödül: ilk gün (index 0)', r.ok && r.index === 0 && r.streak === 1);
r = await call('POST', '/v1/daily/claim', null, A.h); t('Günlük ödül: aynı gün ikinci kez verilmez', !r.ok && r.reason === 'already');
NOW += 3600e3; r = await call('POST', '/v1/daily/claim', null, A.h); t('Aynı gün içinde sunucu saati ilerlese de verilmez', !r.ok);
NOW = Date.parse('2026-10-28T10:00:00Z'); r = await call('POST', '/v1/daily/claim', null, A.h); t('Ertesi gün: seri 2 (index 1)', r.ok && r.index === 1 && r.streak === 2);
NOW = Date.parse('2026-10-31T10:00:00Z'); r = await call('POST', '/v1/daily/claim', null, A.h); t('Gün kaçırılınca seri sıfırlanır (index 0)', r.ok && r.index === 0 && r.streak === 1);
NOW = Date.parse('2026-10-27T10:00:00Z');

// --- skorlar
t('Hatalı skor (hamle < gereken otobüs) reddedilir', (await call('POST', '/v1/scores', { level: 3, moves: 3, needed: 8 }, A.h)).status === 400);
r = await call('POST', '/v1/scores', { level: 3, moves: 8, needed: 8, stars: 3 }, A.h); t('Skor kabul edilir ve puan sunucuda hesaplanır', r.ok && r.score === 100 + 180 + 40 && r.stars === 3, JSON.stringify(r));
r = await call('POST', '/v1/scores', { level: 3, moves: 8, needed: 8, stars: 3, score: 999999 }, B.h); t('İstemcinin gönderdiği puan/yıldız yok sayılır', r.score === 320);
r = await call('POST', '/v1/scores', { level: 3, moves: 20, needed: 8 }, A.h); const lb0 = await call('GET', '/v1/leaderboard/weekly', null, A.h);
t('Aynı seviyeyi kötü oynamak puanı düşürmez / şişirmez (en iyisi)', lb0.entries.find((e) => e.you).score === 320);
await call('POST', '/v1/scores', { level: 4, moves: 10, needed: 9, stars: 3 }, A.h);           // A: 320 + 320
await call('POST', '/v1/scores', { level: 3, moves: 10, needed: 8 }, C.h);                      // C: 2 yıldız
await call('POST', '/v1/scores', { level: 3, moves: 8, needed: 8 }, D.h);                       // D: 320 -> B ile eşit
const lb = await call('GET', '/v1/leaderboard/weekly', null, C.h);
t('Haftalık sıralama puana göre sıralı, kendi satırın işaretli', lb.ok && lb.entries[0].name === 'Ayse' && lb.entries[0].score === 632 && lb.entries.find((e) => e.you).name === 'Can' && lb.week === '2026-10-26' && lb.rewards.join() === '500,300,150');
t('Hafta bitişi bir sonraki Pazartesi 00:00 (TR)', lb.endsAt === Date.parse('2026-11-01T21:00:00Z'));

// --- haftalık ödül (hafta bitince 1-2-3. gelen kutusuna altın düşer, bir kez)
r = await call('GET', '/v1/inbox', null, A.h); t('Hafta bitmeden ödül yok', r.items.length === 0);
NOW = Date.parse('2026-11-02T08:00:00Z');
r = await call('GET', '/v1/inbox', null, A.h);
const ia = r.items.find((x) => x.id.startsWith('weekly-2026-10-26')); t('Haftalık 1.: 500 altın gelen kutusunda', ia && ia.coins === 500, JSON.stringify(r.items));
r = await call('GET', '/v1/inbox', null, C.h); const ic = r.items[0]; t('Haftalık 3. (C: 3. sıra olabilir): en çok 1 ödül', r.items.length <= 1);
const inbA = await call('GET', '/v1/inbox', null, A.h);
let cl = await call('POST', '/v1/inbox/' + inbA.items[0].id + '/claim', null, A.h); t('Ödül teslim alınır', cl.ok);
cl = await call('POST', '/v1/inbox/' + inbA.items[0].id + '/claim', null, A.h); t('Aynı ödül ikinci kez alınamaz', !cl.ok && cl.reason === 'already');
const before = JSON.stringify(S._db().inbox); await call('GET', '/v1/inbox', null, A.h); t('Hafta kapatma tekrarlanmaz (çift ödül yok)', before === JSON.stringify(S._db().inbox));
t('Toplam 3 kişiye (en çok) ödül dağıtıldı: 500/300/150', (() => { const all = Object.values(S._db().inbox).flat().filter((x) => x.id.startsWith('weekly-')); return all.length === 3 && all.map((x) => x.coins).sort((a, b) => b - a).join() === '500,300,150'; })());

// --- yönetici
t('Yönetici anahtarsız erişemez', (await call('GET', '/admin/api/users')).status === 401);
t('Yanlış yönetici anahtarı reddedilir', (await call('GET', '/admin/api/users', null, { 'x-admin-key': 'x' })).status === 401);
await call('PUT', '/v1/me', { coins: 1234, level: 17, powerups: { undo: 3 }, owned: { style: ['city', 'mini'] }, stats: { levels: 16 }, junk: '<script>' }, A.h);
const us = await call('GET', '/admin/api/users', null, ADM); const ua = us.users.find((u) => u.uid === A.uid);
t('Yönetici oyuncunun altınını/seviyesini görür', us.ok && ua.coins === 1234 && ua.level === 17);
const det = await call('GET', '/admin/api/users/' + A.uid, null, ADM); t('Yönetici oyuncunun açtığı öğeleri görür', det.user.profile.owned.style.includes('mini') && !JSON.stringify(det).includes(A.token));
let g = await call('POST', '/admin/api/users/' + A.uid + '/grant', { coins: 250, powerups: { hint: 2 }, items: { style: ['luxury'] }, note: 'Test hediyesi' }, ADM);
t('Yönetici hediye (altın + güç + öğe) ekler', g.ok);
const inb2 = await call('GET', '/v1/inbox', null, A.h); const gift = inb2.items.find((x) => x.id === g.id);
t('Hediye oyuncunun gelen kutusuna düşer', gift && gift.coins === 250 && gift.powerups.hint === 2 && gift.items.style[0] === 'luxury');
t('Boş hediye reddedilir', (await call('POST', '/admin/api/users/' + A.uid + '/grant', {}, ADM)).status === 400);
await call('POST', '/admin/api/users/' + B.uid + '/ban', { banned: true }, ADM); t('Yasaklı oyuncu erişemez (403)', (await call('GET', '/v1/me', null, B.h)).status === 403);
t('Yönetici paneli HTML sunulur', (await fetch(base + '/admin')).status === 200);
t('Çok büyük istek gövdesi reddedilir', await (async () => { try { const r2 = await fetch(base + '/v1/me', { method: 'PUT', headers: { 'content-type': 'application/json', ...A.h }, body: JSON.stringify({ pad: 'x'.repeat(100000) }) }); return r2.status === 413; } catch { return true; } })());

// --- HttpBackend istemcisi (gerçek ağ)
{
  const save = { data: defaults(), save() {} }; Clock.offset = null; Clock.init(save);
  const hb = new HttpBackend(save, { baseUrl: base });
  const i1 = await hb.init(); t('İstemci: hesap açar ve sunucu saatini alır', i1.ok && save.data.account.uid && Clock.synced && Math.abs(Clock.now() - NOW) < 2000);
  const dc = await hb.claimDaily(); t('İstemci: günlük ödül sunucudan', dc.ok && dc.index === 0);
  const sc = await hb.submitScore({ level: 1, moves: 3, needed: 3, stars: 3 }); t('İstemci: skor gönderir', sc.ok && sc.score === 320);
  const lbc = await hb.leaderboard(); t('İstemci: sıralamayı okur', lbc.ok && lbc.entries.some((e) => e.you));
  const sy = await hb.sync({ coins: 5, level: 2 }); t('İstemci: profil senkronu', sy.ok);
  const nm = await hb.setName('Yeni Ad'); t('İstemci: takma ad', nm.ok && save.data.account.name === 'Yeni Ad');
  const bad = new HttpBackend(save, { baseUrl: 'http://localhost:1' }); const rb = await bad.leaderboard(); t('İstemci: sunucu yoksa hata döner, oyun çökmez', !rb.ok && rb.reason === 'network' && bad.online === false);
}
await new Promise((r) => setTimeout(r, 700)); t('Veri diskte kalıcı (atomik JSON) ve jeton düz yazı içermez', fs.existsSync(process.env.DATA_FILE) && !fs.readFileSync(process.env.DATA_FILE, 'utf8').includes(A.token) && JSON.parse(fs.readFileSync(process.env.DATA_FILE, 'utf8')).users[A.uid].name === 'Ayse');
srv.close(); fs.rmSync(path.dirname(process.env.DATA_FILE), { recursive: true, force: true });
console.log(JSON.stringify({ pass, fail })); process.exit(fail ? 1 : 0);
