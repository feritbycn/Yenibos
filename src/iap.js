// Gerçek parayla jeton satın alma (Google Play Faturalandırma) için DÜRÜST adaptör.
//  mode 'off'  : satın alma kapalı; hiçbir koşulda jeton verilmez (varsayılan).
//  mode 'play' : Capacitor satın alma eklentisi (varsayılan beklenti: @capgo/native-purchases, window.Capacitor.Plugins.NativePurchases)
//                yüklüyse purchaseProduct çağrılır; yalnızca eklenti başarıyla döndürürse jeton verilir.
// UYARI: Bu yol gerçek cihazda/Play Console'da TEST EDİLMEDİ (README → "Gerçek parayla satın alma").
//        Yayında satın alımı sunucu tarafında doğrulamanız önerilir.
import { IAP, REMOVE_ADS } from './config.js';

export class IapService {
  constructor(G) { this.G = G; }
  get mode() { return IAP.mode; }
  available() { return IAP.mode === 'play' && !!window.Capacitor?.Plugins?.NativePurchases; }
  /** @returns {Promise<{ok:boolean, reason?:string}>} */
  async buy(pack) {
    if (!this.available()) return { ok: false, reason: 'unavailable' };
    try {
      const NP = window.Capacitor.Plugins.NativePurchases;
      const res = await NP.purchaseProduct({ productIdentifier: pack.productId, productType: 'inapp', quantity: 1 });
      const txId = String(res?.transactionId || res?.orderId || '');
      if (!txId) return { ok: false, reason: 'no-transaction' };
      const d = this.G.save.data; d.iap ||= { tx: [] };
      if (d.iap.tx.includes(txId)) return { ok: false, reason: 'duplicate' };
      d.iap.tx.push(txId); if (d.iap.tx.length > 300) d.iap.tx.shift();
      this.G.addCoins(pack.coins, false); this.G.save.save(true);
      return { ok: true };
    } catch (e) {
      return { ok: false, reason: 'cancelled', error: String(e?.message || e) };
    }
  }
  /** Reklamsız satın alma (tek seferlik). Yalnızca eklenti başarıyla döndürürse reklamlar kapanır. */
  async buyRemoveAds() {
    if (!this.available()) return { ok: false, reason: 'unavailable' };
    try {
      const NP = window.Capacitor.Plugins.NativePurchases;
      const res = await NP.purchaseProduct({ productIdentifier: REMOVE_ADS.productId, productType: 'inapp', quantity: 1 });
      const txId = String(res?.transactionId || res?.orderId || '');
      if (!txId) return { ok: false, reason: 'no-transaction' };
      const d = this.G.save.data; d.iap ||= { tx: [] };
      if (!d.iap.tx.includes(txId)) d.iap.tx.push(txId);
      d.ads.removed = true; this.G.save.save(true);
      return { ok: true };
    } catch (e) { return { ok: false, reason: 'cancelled', error: String(e?.message || e) }; }
  }
  /** Premium ürün (tek seferlik/tüketilebilir). İşlem kimliği tekrarsa ya da eklenti başarı döndürmezse hiçbir şey verilmez. */
  async buyProduct(p) {
    if (!this.available()) return { ok: false, reason: 'unavailable' };
    try {
      const NP = window.Capacitor.Plugins.NativePurchases;
      const res = await NP.purchaseProduct({ productIdentifier: p.productId, productType: 'inapp', quantity: 1 });
      const txId = String(res?.transactionId || res?.orderId || '');
      if (!txId) return { ok: false, reason: 'no-transaction' };
      const d = this.G.save.data; d.iap ||= { tx: [] };
      if (d.iap.tx.includes(txId)) return { ok: false, reason: 'duplicate' };
      d.iap.tx.push(txId); if (d.iap.tx.length > 300) d.iap.tx.shift(); this.G.save.save(true);
      return { ok: true };
    } catch (e) { return { ok: false, reason: 'cancelled', error: String(e?.message || e) }; }
  }
  /** Geri yükleme: mağazanın bildirdiği ürün kimlikleri. Eklenti yoksa/başarısızsa hiçbir şey verilmez. */
  async restore() {
    if (!this.available()) return { ok: false, reason: 'unavailable' };
    try {
      const NP = window.Capacitor.Plugins.NativePurchases;
      const res = await (NP.restorePurchases ? NP.restorePurchases() : NP.getPurchases?.());
      const list = res?.purchases || res?.transactions || [];
      return { ok: true, ids: list.map((x) => String(x.productIdentifier || x.productId || '')).filter(Boolean) };
    } catch (e) { return { ok: false, reason: 'error', error: String(e?.message || e) }; }
  }
}
