// Mağaza kataloğu, günlük ödüller, görevler ve başarılar.
import { PRICES } from './config.js';
import { makeRng } from './rng.js';

export const SHOP = {
  style: [
    { id: 'city', name: 'Şehir Otobüsü', price: 0, desc: 'Klasik yuvarlak hatlı şehir otobüsü.' },
    { id: 'mini', name: 'Minibüs', price: 250, desc: 'Küçük, tombul ve sevimli.' },
    { id: 'school', name: 'Okul Servisi', price: 450, desc: 'Siyah şeritli, dur levhalı servis.' },
    { id: 'coach', name: 'Konfor Otobüsü', price: 800, desc: 'Uzun camlı, gümüş etekli yolcu otobüsü.' },
    { id: 'modern', name: 'Modern Otobüs', price: 1200, desc: 'Alçak, aerodinamik, panoramik camlı; LED ışık şeritli.' },
    { id: 'luxury', name: 'Lüks Otobüs', price: 2500, desc: 'Metalik boya, krom detaylar, koyu camlı VIP yolcu otobüsü.' },
  ],
  palette: [
    { id: 'vivid', name: 'Canlı', price: 0, desc: 'Varsayılan doygun renkler.' },
    { id: 'pastel', name: 'Pastel', price: 300, desc: 'Yumuşak şeker tonları.' },
    { id: 'neon', name: 'Neon', price: 500, desc: 'Parlak neon renkler.' },
    { id: 'retro', name: 'Retro', price: 350, desc: 'Mat nostaljik tonlar.' },
  ],
  rim: [
    { id: 'steel', name: 'Çelik Jant', price: 0, desc: 'Standart çelik.' },
    { id: 'gold', name: 'Altın Jant', price: 200, desc: 'Parlak altın kaplama.' },
    { id: 'neon', name: 'Neon Jant', price: 300, desc: 'Turkuaz parlayan jantlar.' },
    { id: 'chrome', name: 'Krom Jant', price: 450, desc: 'Ayna gibi krom.' },
  ],
  trail: [
    { id: 'dust', name: 'Toz İzi', price: 0, desc: 'Hafif toz bulutu.' },
    { id: 'sparkle', name: 'Parıltı İzi', price: 250, desc: 'Altın parıltılar.' },
    { id: 'stars', name: 'Yıldız İzi', price: 400, desc: 'Renkli yıldızlar saçar.' },
    { id: 'bubbles', name: 'Baloncuk İzi', price: 300, desc: 'Sabun köpüğü baloncukları.' },
  ],
  vipSkin: [
    { id: 'gold', name: 'Altın VIP', price: 0, desc: 'Altın detaylı klasik VIP.' },
    { id: 'platinum', name: 'Platin VIP', price: 600, desc: 'Gümüş-beyaz lüks.' },
    { id: 'royal', name: 'Kraliyet VIP', price: 900, desc: 'Mor gövde, altın süsler.' },
  ],
};
export const SHOP_TABS = [
  ['coins', 'Jeton'], ['style', 'Otobüs'], ['palette', 'Renkler'], ['rim', 'Jantlar'], ['trail', 'Efekt'], ['vipSkin', 'VIP'], ['power', 'Güç'], ['slot', 'Premium'],
];
export const POWER_INFO = {
  undo: { name: 'Geri Al', desc: 'Son hamleyi geri alır.', price: PRICES.undo },
  hint: { name: 'İpucu', desc: 'Bir sonraki doğru otobüsü gösterir.', price: PRICES.hint },
  recall: { name: 'Geri Çağır', desc: 'Park eden otobüsü başlangıç yerine döndürür.', price: PRICES.recall },
  call: { name: 'Otobüs Çağır', desc: 'İstediğin bir otobüsü, yolu kapalı olsa bile park alanına çağırır.', price: PRICES.call },
  extraSlot: { name: 'Ek Park Yeri', desc: 'Bu seviye için bir park yeri açar.', price: PRICES.extraSlot },
  moves: { name: 'Ek Hamle', desc: 'Hamle sınırlı seviyelerde +4 hamle.', price: PRICES.moves },
  time: { name: 'Ek Süre', desc: 'Süreli seviyelerde +30 saniye.', price: PRICES.time },
};

export const DAILY_REWARDS = [
  { coins: 20 }, { coins: 25 }, { coins: 30, power: ['undo', 1] }, { coins: 35 }, { coins: 40, power: ['hint', 1] }, { coins: 50 }, { coins: 80, power: ['call', 1] },
];

export const dayKey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
export function dayDiff(a, b) { const pa = new Date(a + 'T00:00:00'), pb = new Date(b + 'T00:00:00'); return Math.round((pb - pa) / 86400000); }

export const QUEST_POOL = [
  { id: 'levels3', text: '3 seviye tamamla', ev: 'level', goal: 3, reward: 30 },
  { id: 'pass20', text: '20 yolcuyu otobüse bindir', ev: 'passenger', goal: 20, reward: 25 },
  { id: 'vip1', text: 'Bir VIP otobüs kullan', ev: 'vip', goal: 1, reward: 35 },
  { id: 'puz5', text: '5 bulmacayı başarıyla tamamla', ev: 'level', goal: 5, reward: 60 },
  { id: 'star3', text: 'Bir seviyeyi 3 yıldızla bitir', ev: 'threeStar', goal: 1, reward: 40 },
  { id: 'bus12', text: '12 otobüsü yolcu ile doldur', ev: 'busFull', goal: 12, reward: 30 },
  { id: 'slot1', text: 'Bir ek park yeri aç', ev: 'slot', goal: 1, reward: 25 },
  { id: 'pass50', text: '50 yolcuyu otobüse bindir', ev: 'passenger', goal: 50, reward: 50 },
];

export const ACHIEVEMENTS = [
  { id: 'first', name: 'İlk Yolculuk', text: 'İlk seviyeyi tamamla', stat: 'levels', goal: 1, reward: 25 },
  { id: 'lv10', name: 'Yol Arkadaşı', text: '10 seviye tamamla', stat: 'levels', goal: 10, reward: 60 },
  { id: 'lv30', name: 'Şehir Ustası', text: '30 seviye tamamla', stat: 'levels', goal: 30, reward: 150 },
  { id: 'pass100', name: 'Kalabalık Taşıyıcı', text: '100 yolcu taşı', stat: 'passengers', goal: 100, reward: 50 },
  { id: 'pass1000', name: 'Metropol Hattı', text: '1000 yolcu taşı', stat: 'passengers', goal: 1000, reward: 200 },
  { id: 'vip1', name: 'Kırmızı Halı', text: 'Bir VIP otobüs kullan', stat: 'vip', goal: 1, reward: 40 },
  { id: 'slot1', name: 'Genişleme', text: 'Bir ek park yeri aç', stat: 'slots', goal: 1, reward: 35 },
  { id: 'star10', name: 'Mükemmeliyetçi', text: '10 seviyede 3 yıldız al', stat: 'threeStars', goal: 10, reward: 120 },
];

export function ensureDailyQuests(save) {
  const d = save.data; const key = dayKey();
  if (d.quests.date === key && d.quests.list.length) return false;
  const rng = makeRng([...key].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7));
  const pool = QUEST_POOL.slice(); rng.shuffle(pool);
  // her gün şartnamedeki dört örnek görevden en az üçü yer alsın
  const core = ['levels3', 'pass20', 'vip1', 'puz5'];
  const pick = [...core.filter(() => rng() < 0.85)];
  for (const q of pool) if (pick.length < 4 && !pick.includes(q.id)) pick.push(q.id);
  const final = pick.slice(0, 4);
  d.quests = { date: key, list: final.map((id) => ({ id })), progress: {}, claimed: {} };
  return true;
}
export const questDef = (id) => QUEST_POOL.find((q) => q.id === id);
