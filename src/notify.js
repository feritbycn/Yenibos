// Yerel bildirimler (Capacitor LocalNotifications). Eklenti yoksa (tarayıcı/test) hiçbir şey yapmaz.
// Her uygulama kapanışında/arka plana gidişte plan yeniden kurulur: oyuna girilince eski hatırlatmalar silinir.
import { NOTIFY } from './config.js';
import { planNotifications, NOTIFY_IDS } from './notifyplan.js';

export class Notifier {
  constructor(G) { this.G = G; }
  get plugin() { return window.Capacitor?.Plugins?.LocalNotifications; }
  available() { return !!this.plugin; }
  async granted() { try { return (await this.plugin.checkPermissions()).display === 'granted'; } catch { return false; } }
  async request() { try { return (await this.plugin.requestPermissions()).display === 'granted'; } catch { return false; } }
  /** Açık değilse ya da izin yoksa mevcut hatırlatmaları siler; açıksa yeniden planlar. */
  async reschedule() {
    if (!this.available()) return false;
    const d = this.G.save.data;
    try {
      await this.plugin.cancel({ notifications: NOTIFY_IDS.map((id) => ({ id })) });
      if (!d.notif.enabled || !(await this.granted())) return false;
      const plan = planNotifications({ now: new Date(), claimedToday: !this.G.canClaimDaily(), seed: Math.floor(Date.now() / 86400000) });
      await this.plugin.schedule({ notifications: plan.map((n) => ({ id: n.id, title: n.title, body: n.body, smallIcon: NOTIFY.smallIcon, schedule: { at: n.at, allowWhileIdle: true } })) });
      return plan.length;
    } catch { return false; }
  }
  /** Kullanıcı kabul ederse izin ister ve açar. */
  async enable() {
    const d = this.G.save.data; d.notif.asked = true;
    if (!this.available()) { this.G.save.save(true); return false; }
    const ok = await this.request(); d.notif.enabled = ok; this.G.save.save(true);
    if (ok) await this.reschedule();
    return ok;
  }
  async disable() { const d = this.G.save.data; d.notif.enabled = false; this.G.save.save(true); await this.reschedule(); }
}
