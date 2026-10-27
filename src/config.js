// Genel sabitler ve yapılandırma
export const COLORS = [
  { id: 0, name: 'Mavi',    hex: 0x2f7bff },
  { id: 1, name: 'Kırmızı', hex: 0xf23a4a },
  { id: 2, name: 'Sarı',    hex: 0xffc414 },
  { id: 3, name: 'Yeşil',   hex: 0x2fcf4f },
  { id: 4, name: 'Mor',     hex: 0x9a4dff },
  { id: 5, name: 'Turkuaz', hex: 0x18d4e6 },
  { id: 6, name: 'Pembe',   hex: 0xff5cb8 },
];
export const VIP_COLOR = 99;
export const SEATS_PER_CELL = 2;      // otobüs kapasitesi = uzunluk * 2
export const TAXI_SEATS = 4;         // 1 hücrelik küçük araç (taksi)
export const VIP_LEN = 3;
export const VIP_SEATS = 8;
export const SLOTS_TOTAL = 7;         // 4 açık + 3 kilitli
export const SLOTS_BASE = 4;
export const MAX_PERM_SLOTS = 3;
export const SAVE_KEY = 'busPuzzleDeluxe.save.v1';

// Reklam: 'test' = açıkça etiketli test reklamı (geliştirme), 'admob' = gerçek AdMob, 'off' = reklam yok
// Yayın sürümünde 'admob' yapıp kimlikleri doldurun (README -> Reklam entegrasyonu).
export const ADS = {
  mode: 'test',
  admob: {
    // Google'ın herkese açık TEST kimlikleri. Yayın öncesi kendi kimliklerinizle değiştirin.
    appIdAndroid: 'ca-app-pub-3940256099942544~3347511713',
    rewardedUnitAndroid: 'ca-app-pub-3940256099942544/5224354917',
    interstitialUnitAndroid: 'ca-app-pub-3940256099942544/1033173712',   // Google test kimliği; yayında kendininkiyle değiştir
  },
  testDurationMs: 3000,
};

/** Zorunlu (ödülsüz) geçiş reklamı: her 4-5 seviyede bir, seviye sonunda. İlk seviyelerde ve reklamsız satın alınınca yok. */
export const INTERSTITIAL = { startAfterLevel: 3, every: [4, 5], minGapMs: 120000 };
/** Reklamsız satın alma teklifi: seyrek (her N seviyede bir, en çok M kez, aynı gün tekrar yok). Yalnızca Play Faturalandırma gerçekten hazırsa gösterilir. */
export const REMOVE_ADS = { productId: 'remove_ads', everyLevels: 10, firstAfterLevel: 8, maxOffers: 5 };
/** Yerel bildirimler (cihaz saatiyle). */
export const NOTIFY = { dailyHour: 19, dailyMinute: 30, comebackDays: [3, 7, 14], comebackHour: 12, smallIcon: 'ic_stat_bus' };

export const PRICES = {
  undo: 60, hint: 40, recall: 80, call: 120, moves: 60, time: 70, extraSlot: 150, vip: 100, shuffle: 90,
  permSlot: [400, 800, 1500],
  convert: 100, seat: 60,
};
export const CONV_LIMIT = 3;   // seviye başına otobüs değiştirme/koltuk ekleme hakkı
/** Oyun içi güçlendirmelerin açılma seviyesi (bu seviyeye gelince açılır ve tanıtılır). Listede olmayan = baştan açık. */
export const UNLOCKS = { call: 3, vipcall: 6, shuffle: 8 };
export const POWERUPS = ['extraSlot', 'undo', 'hint', 'recall', 'call', 'convert', 'moves', 'time', 'vip', 'shuffle'];
/** Jetonla alınan paketler (gerçek para değil). */
export const PACKS = [
  { id: 'starter', name: 'Başlangıç Paketi', price: 420, items: { hint: 3, call: 2, shuffle: 2, vip: 2 }, tag: 'Popüler' },
  { id: 'vip5', name: 'VIP Paketi', price: 400, items: { vip: 5 }, tag: '%20 indirim' },
  { id: 'shuffle5', name: 'Karıştır Paketi', price: 360, items: { shuffle: 5 }, tag: '%20 indirim' },
  { id: 'master', name: 'Usta Paketi', price: 1100, items: { hint: 5, call: 5, shuffle: 4, vip: 5 }, tag: 'En avantajlı' },
];

// Gerçek para ile jeton paketleri. mode 'off' iken satın alma çalışmaz ve jeton verilmez (README).
export const IAP = {
  mode: 'off',
  packs: [
    { id: 'c500', productId: 'coins_500', coins: 500, label: 'Avuç Dolusu' },
    { id: 'c1300', productId: 'coins_1300', coins: 1300, label: 'Kese' },
    { id: 'c3500', productId: 'coins_3500', coins: 3500, label: 'Sandık' },
    { id: 'c9000', productId: 'coins_9000', coins: 9000, label: 'Hazine' },
  ],
};

/** Ön sıra penceresi: kuyruğun ilk N yolcusu (kapıdakiler) uygun renkte park etmiş otobüse aynı anda binebilir. */
export const QUEUE_WINDOW = 3;

/** VIP hakkı bedeli (jeton). İlk hak bedava; sonrası reklamla ya da bu bedelle. */
export const VIP_CALL_PRICE = 100;
/** Oyun bitince (kayıp ekranı) reklamla yapılabilecek en fazla geri alma/devam hakkı (seviye başına). */
/** Hamle payı (çözüm için gereken otobüs sayısına eklenir). Hatalı (engele çarpan) dokunuşlar da hamle yer; pay bu yüzden vardır.
 *  Kademe: öğretici 1-5, kolay 6-15, orta 16-30, zor 31-50, uzman 51-75, usta 76-100, 101+ sonsuz. */
export const MOVE_SPARE = [[5, 12], [15, 8], [30, 5], [50, 4], [75, 3], [100, 3], [Infinity, 3]];
export const EXTRA_MOVE_PRICE = 60;
export const MAX_REVIVES = 3;

/**
 * Sunucu altyapısı. mode: 'local' (sunucu yok; sıralama yalnızca bu cihazda) | 'http' (aşağıdaki baseUrl'deki sunucu) | 'off'.
 * Sunucu kurulumu: README -> "Sunucu altyapısı". Gün sınırı sabit bir saat dilimine (varsayılan Türkiye UTC+3) bağlıdır;
 * cihaz saat dilimini değiştirerek fazladan gün kazanmak mümkün değildir.
 */
export const BACKEND = {
  mode: 'local',
  baseUrl: 'https://SUNUCU-ADRESINIZ',
  dayOffsetMin: 180,
  weeklyRewards: [500, 300, 150],      // haftalık sıralamada 1., 2., 3. olana altın
  timeoutMs: 7000,
};

/** Haftalık giriş sandığı: bir haftada (Pzt-Paz) en az `need` farklı gün girersen açılır. */
export const WEEKLY_CHEST = { need: 5, coins: 150, power: ['hint', 2] };
