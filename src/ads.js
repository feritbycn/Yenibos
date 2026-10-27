// Ödüllü reklam servisi. Ödül yalnızca reklam GERÇEKTEN tamamlandığında verilir.
//  mode 'test'  : açıkça "TEST REKLAMI" etiketli geliştirme reklamı (geri sayım bitince ödül)
//  mode 'admob' : @capacitor-community/admob eklentisi (README'de kurulum); eklenti yoksa ödül verilmez
//  mode 'off'   : reklam yok, ödül yok
import { ADS } from './config.js';

let tokenSeq = 0;
export class AdService {
  constructor(ui) { this.ui = ui; this.consumed = new Set(); this.inited = false; this.shown = 0; }
  get mode() { return ADS.mode; }
  available() {
    if (ADS.mode === 'test') return true;
    if (ADS.mode === 'admob') return !!window.Capacitor?.Plugins?.AdMob;
    return false;
  }
  /** @returns {Promise<{ok:boolean, token?:string, reason?:string}>} */
  async showRewarded(placement) {
    if (!this.available()) return { ok: false, reason: 'unavailable' };
    try {
      if (ADS.mode === 'test') {
        const done = await this.ui.testAd(ADS.testDurationMs, placement);
        if (!done) return { ok: false, reason: 'cancelled' };
        this.shown++; return { ok: true, token: `t${++tokenSeq}-${Date.now()}` };
      }
      const AdMob = window.Capacitor.Plugins.AdMob;
      if (!this.inited) { await AdMob.initialize({ initializeForTesting: false }); this.inited = true; }
      let rewarded = false;
      const sub = await AdMob.addListener('onRewardedVideoAdReward', () => { rewarded = true; });
      const dismissed = new Promise((res) => AdMob.addListener('onRewardedVideoAdDismissed', () => res()).catch(() => res()));
      await AdMob.prepareRewardVideoAd({ adId: ADS.admob.rewardedUnitAndroid });
      await AdMob.showRewardVideoAd();
      await dismissed; sub?.remove?.();
      if (!rewarded) return { ok: false, reason: 'cancelled' };
      this.shown++; return { ok: true, token: `a${++tokenSeq}-${Date.now()}` };
    } catch (e) {
      return { ok: false, reason: 'error', error: String(e?.message || e) };
    }
  }
  /** Zorunlu geçiş reklamı (ödül yok). Gerçek AdMob yoksa/hata olursa oyun devam eder. */
  async showInterstitial(placement) {
    if (!this.available()) return false;
    try {
      if (ADS.mode === 'test') { await this.ui.testAd(ADS.testDurationMs, placement, { interstitial: true }); this.shown++; return true; }
      const AdMob = window.Capacitor.Plugins.AdMob;
      if (!this.inited) { await AdMob.initialize({ initializeForTesting: false }); this.inited = true; }
      const dismissed = new Promise((res) => AdMob.addListener('onInterstitialAdDismissed', () => res()).catch(() => res()));
      await AdMob.prepareInterstitial({ adId: ADS.admob.interstitialUnitAndroid });
      await AdMob.showInterstitial();
      await dismissed; this.shown++; return true;
    } catch { return false; }
  }
  /** Bir ödül jetonunu yalnızca bir kez tüketir (çift ödül engeli). */
  consume(token) { if (!token || this.consumed.has(token)) return false; this.consumed.add(token); return true; }
}
