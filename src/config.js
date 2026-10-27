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
  },
  testDurationMs: 3000,
};

export const PRICES = {
  undo: 60, hint: 40, recall: 80, call: 120, moves: 70, time: 70, extraSlot: 150,
  permSlot: [400, 800, 1500],
  convert: 100,
};
export const POWERUPS = ['extraSlot', 'undo', 'hint', 'recall', 'call', 'moves', 'time'];
