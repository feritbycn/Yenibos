// Oyun denetleyicisi: motor + sahne + arayüz + ekonomi + eğitim entegrasyonu.
import { GameScene } from './scene.js';
import * as E from './engine.js';
import { getLevel } from './levels.js';
import { solve } from './solver.js';
import { Save } from './save.js';
import { Sound } from './audio.js';
import { AdService } from './ads.js';
import { IapService } from './iap.js';
import { UI, diffLabel } from './ui.js';
import { Tutorial } from './tutorial.js';
import { ico } from './icons.js';
import { PRICES, COLORS, ADS, IAP, CONV_LIMIT } from './config.js';
import { SHOP, DAILY_REWARDS, POWER_INFO, ACHIEVEMENTS, ensureDailyQuests, questDef, dayKey, dayDiff } from './economy.js';

const $ = (s) => document.querySelector(s);
const POWER_BAR = [
  ['undo', 'Geri Al', 'undo'], ['hint', 'İpucu', 'hint'], ['recall', 'Geri Çağır', 'recall'], ['call', 'Çağır', 'call'], ['convert', 'Değiştir', 'convert'], ['vipcall', 'VIP', 'vip'],
];
const VIP_CALL_PRICE = 220;

export class Game {
  constructor(opts = {}) {
    this.save = new Save();
    this.sound = new Sound();
    this.ui = new UI(this);
    this.ads = new AdService(this.ui); this.iap = new IapService(this);
    const d = this.save.data;
    this.sound.setSound(d.settings.sound); this.sound.setVibe(d.settings.vibe);
    this.scene = new GameScene($('#stage'), { quality: d.settings.quality, preserve: !!opts.preserve });
    this.tut = new Tutorial(this);
    this.phase = 'menu'; this.paused = false; this.adOpen = false; this.mode = null;
    this.levelCache = new Map(); this.snapshots = []; this.hintTimer = null;
    ensureDailyQuests(this.save); this.save.save();
    this.bindScene(); this.bindHud();
    this.ui.bindMenu();
    this.goMenu(true);
  }

  peekLevel(n) { if (!this.levelCache.has(n)) this.levelCache.set(n, getLevel(n)); return this.levelCache.get(n); }

  bindScene() {
    const sc = this.scene;
    sc.sfx = (n) => this.sound.play(n);
    sc.onBusTap = (id) => this.handleTap(id);
    sc.onTapRejected = (id) => { this.ui.toast('Önce parmağın gösterdiği otobüsü sürükle.'); sc.shakeBus(id); this.sound.play('error'); };
    sc.onSlotTap = (i) => this.handleSlotTap(i);
    sc.onIdle = () => this.onIdle();
    sc.onBoarded = (color, bus) => { const s = this.save.data.stats; s.passengers++; this.emit('passenger', 1, false); this.refreshProgress(); void bus; };
    sc.onBusDepart = () => { this.save.data.stats.buses++; this.emit('busFull', 1, false); };
    sc.onBusArrive = (b) => { if (b.vip && !this.vipCounted) { this.vipCounted = true; this.save.data.stats.vip++; this.emit('vip', 1); this.ui.toast('VIP otobüs yolcuları her renkten alır!', 'good'); } };
  }

  // ---------------------------------------------------------------- HUD
  bindHud() {
    $('#btnPause').innerHTML = ico('pause', 26);
    $('#btnPause').addEventListener('click', () => { if (this.phase !== 'play') return; this.sound.play('click'); this.pause(); });
    $('#hudCoins').addEventListener('click', () => { if (this.phase === 'play') { this.sound.play('click'); this.ui.shop('power'); } });
    $('#chipMoves').addEventListener('click', () => this.offerMoves());
    $('#chipTime').addEventListener('click', () => this.offerTime());
    $('#powerBar').addEventListener('click', (e) => { const b = e.target.closest('[data-p]'); if (b) this.onPower(b.dataset.p); });
    $('#modeBanner').addEventListener('click', (e) => { if (e.target.closest('[data-cancel]')) this.setMode(null); });
  }

  renderPowerBar() {
    const d = this.save.data;
    $('#powerBar').innerHTML = POWER_BAR.map(([k, name, ic]) => {
      let cnt = '';
      if (['undo', 'hint', 'recall', 'call'].includes(k)) { const n = d.powerups[k]; cnt = `<span class="cnt ${n ? '' : 'zero'}">${n || '+'}</span>`; }
      else cnt = `<span class="cnt ad">${ico('ad', 12)}</span>`;
      return `<button class="pw ${k}" data-p="${k}" aria-label="${name}"><span class="btn">${ico(ic, 28)}</span>${cnt}<span>${name}</span></button>`;
    }).join('');
  }

  refreshHud() {
    const lvl = this.lvl; if (!lvl) return;
    $('#lvlName').textContent = 'SEVİYE ' + this.levelN;
    $('#lvlDiff').textContent = diffLabel(lvl.difficulty) + (lvl.stages.length > 1 ? ` · AŞAMA ${this.stageIdx + 1}/${lvl.stages.length}` : '');
    this.ui.setCoins(this.save.data.coins);
    this.renderPowerBar(); this.refreshProgress(); this.refreshChips();
  }

  refreshProgress() {
    if (!this.lvl || !this.state) return;
    const total = this.lvl.stages.reduce((a, s) => a + s.queue.length, 0);
    const done = this.prevPassengers + this.state.qi;
    $('#progBar').style.width = (total ? (done / total) * 100 : 0) + '%';
    $('#progTxt').textContent = `${done}/${total} yolcu`;
  }

  refreshChips() {
    const mv = $('#chipMoves'), tm = $('#chipTime');
    if (this.state && this.state.moveLimit !== null) {
      mv.hidden = false; const left = this.state.moveLimit - this.state.moves;
      mv.innerHTML = `${ico('play', 14)} Hamle ${this.state.moves}/${this.state.moveLimit}`; mv.classList.toggle('warn', left <= 2);
    } else mv.hidden = true;
    if (this.timeLeft !== null) { tm.hidden = false; const t = Math.max(0, Math.ceil(this.timeLeft)); tm.innerHTML = `${ico('clock', 14)} ${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`; tm.classList.toggle('warn', t <= 15); } else tm.hidden = true;
  }

  setMode(m, text) {
    this.mode = m; const b = $('#modeBanner');
    this.scene.clearGlows();
    if (!m) { b.hidden = true; return; }
    b.hidden = false; b.innerHTML = `<span>${text}</span><button data-cancel>İptal</button>`;
    if (m === 'recall') for (const bus of this.state.buses) if (bus.st === 'parked' && bus.arrived) this.scene.setGlow(bus.id, 0x7dffc0);
    if (m === 'convert') for (const bus of this.state.buses) if (bus.st === 'board' && !bus.vip) this.scene.setGlow(bus.id, 0xc9a7ff);
  }

  // ---------------------------------------------------------------- akış
  goMenu(first = false) {
    this.tut.stop(); this.ui.closeAll(); this.setMode(null);
    this.phase = 'menu'; this.paused = false;
    $('#hud').hidden = true; $('#app').classList.add('menu-mode'); $('#menu').hidden = false;
    this.cosApply();
    const n = this.save.data.level; const lvl = this.peekLevel(n);
    this.state = E.makeState(lvl.stages[0], { slotsOpen: Math.min(7, (lvl.slotsBase || 4) + this.save.data.perm.slots) });
    this.scene.loadStage(this.state); this.lvl = null;
    this.ui.renderMenu();
    if (first) setTimeout(() => { if (this.phase === 'menu' && this.canClaimDaily() && !this.ui.hasModal) this.ui.daily(); }, 900);
  }

  cosApply() { this.scene.setCosmetics(this.save.data.equipped); }

  startLevel(n) {
    this.ui.closeAll(); this.sound.unlock(); this.setMode(null);
    const d = this.save.data;
    this.levelN = n; this.lvl = this.peekLevel(n); this.stageIdx = 0; this.assists = 0; this.prevPassengers = 0; this.vipCounted = false; this.paused = false;
    if (d.temp.level !== n) d.temp = { level: n, slots: [], conv: 0, vipCalls: 0 };
    this.extraMoves = 0; this.timeLeft = this.lvl.timeLimit ?? null;
    this.cosApply();
    this.beginStage(0, null);
    this.phase = 'play';
    $('#menu').hidden = true; $('#hud').hidden = false; $('#app').classList.remove('menu-mode');
    this.refreshHud();
    const tutOn = d.tutorial.enabled;
    if (n === 1 && tutOn && !d.tutorial.l1) this.tut.start(1);
    else if (n === 2 && tutOn && !d.tutorial.l2) this.tut.start(2);
    else this.tut.stop();
    this.save.save();
  }

  beginStage(i, prevOpen) {
    this.finalPending = false; this.pendingTaps = [];
    const lvl = this.lvl; const stage = lvl.stages[i]; const d = this.save.data;
    const base = stage.slots ?? lvl.slotsBase ?? 4;
    const state = E.makeState(stage, { slotsOpen: Math.min(7, base + d.perm.slots), moveLimit: lvl.moveLimit ? lvl.moveLimit + this.extraMoves : null });
    if (prevOpen) prevOpen.forEach((o, k) => { if (o) state.slotOpen[k] = true; });
    for (const k of d.temp.slots) state.slotOpen[k] = true;
    this.state = state; this.snapshots = []; this.stageIdx = i;
    this.scene.forceDepart = false;
    this.scene.loadStage(state, d.temp.slots);
    this.refreshHud();
  }

  restart() { this.ui.closeAll(); const d = this.save.data; d.temp = { level: this.levelN, slots: [], conv: 0, vipCalls: 0 }; this.startLevel(this.levelN); }
  nextLevel() { this.startLevel(this.levelN + 1); }
  pause() { this.paused = true; this.ui.pause(); }
  resume() { this.paused = false; }

  frame(dt) {
    this.scene.inputLocked = this.phase !== 'play' || this.ui.hasModal || this.paused;
    this.scene.update(this.paused ? 0 : dt);
    if (this.phase === 'play' && !this.paused && !this.adOpen && !this.ui.hasModal && this.timeLeft !== null) {
      this.timeLeft -= dt; this.refreshChipsThrottled(dt);
      if (this.timeLeft <= 0) { this.timeLeft = 0; this.refreshChips(); this.fail('time'); }
    }
    if (this.phase === 'play') this.tut.update(dt);
    if (this.pendingTaps?.length && this.phase === 'play' && !this.paused && !this.mode && !this.ui.hasModal && !this.scene.isBusy()) this.handleTap(this.pendingTaps.shift());
    else if (this.pendingTaps?.length && this.phase !== 'play') this.pendingTaps.length = 0;
  }
  refreshChipsThrottled(dt) { this._ct = (this._ct || 0) + dt; if (this._ct > 0.25) { this._ct = 0; this.refreshChips(); } }

  // ---------------------------------------------------------------- hamleler
  handleTap(id) {
    if (this.phase !== 'play' || this.paused) return;
    if (this.mode === 'convert') { this.openConvert(id); return; }
    if (this.mode === 'call') { this.openCall(id); return; }
    if (this.mode === 'recall') return;
    if (this.scene.isTraveling()) { this.queueTap(id); return; }
    const s = this.state; const snap = E.clone(s);
    const r = E.tap(s, id);
    this.scene.clearGlows();
    if (r.ok) {
      this.snapshots.push(snap); if (this.snapshots.length > 40) this.snapshots.shift();
      this.scene.startDriveToSlot(id, r.slot);
      this.tut.onMove(id); this.refreshChips();
      if (s.buses[id].vip) this.ui.toast('VIP otobüs yola çıktı!', 'good');
    } else if (r.reason === 'blocked') {
      this.scene.bump(id, r.blockers); for (const b of r.blockers) this.scene.flashBus(b, 0xff4d4d, 0.7); this.refreshChips();
      if (s.moveLimit !== null) this.scene.idleFired = false;
    } else if (r.reason === 'noslot') {
      if (this.scene.isBusy()) { this.queueTap(id); return; }   // yolcular biniyor / otobüs yoldaysa yer açılabilir: sıraya al
      this.sound.play('error'); this.ui.toast('Park yerleri dolu! + alanlardan ek yer açabilirsin.', 'bad'); this.scene.shakeBus(id);
    } else if (r.reason === 'vipfull') { this.sound.play('error'); this.ui.toast('VIP alanı dolu.', 'bad'); } else if (r.reason === 'limit') { this.scene.idleFired = false; }
  }

  /** Sahne meşgulken verilen dokunuşu sıraya alır; sahne boşalınca uygulanır (park yeri boşalıyorsa otobüs çıkar). */
  queueTap(id) {
    const b = this.state.buses[id]; this.pendingTaps ||= [];
    if (!b || b.st !== 'board' || this.pendingTaps.includes(id) || this.pendingTaps.length >= 3) return;
    this.pendingTaps.push(id); this.scene.flashBus(id, 0x7be26b, 0.35);
  }

  handleSlotTap(i) {
    if (this.phase !== 'play' || this.paused) return;
    const s = this.state;
    if (this.mode === 'recall') {
      const id = i === 'V' ? s.vipSlot : s.slots[i];
      if (id === null || id === undefined) { this.ui.toast('Bu alanda otobüs yok.'); return; }
      this.doRecall(id); return;
    }
    if (i === 'V') { this.ui.toast('VIP alanı: altın VIP otobüsler buraya park eder.'); return; }
    if (!s.slotOpen[i]) { if (this.tut.active && this.tut.cur?.kind !== 'slot') return; this.sound.play('click'); this.ui.slotOffer(); }
  }

  onIdle() {
    if (this.phase === 'transition') { if (!this.state.buses.some((b) => b.st === 'parked')) { if (this.finalPending) { this.finalPending = false; this.levelComplete(); } else this.nextStage(); } return; }
    if (this.phase !== 'play') return;
    this.tut.onIdle();
    const ev = E.evaluate(this.state);
    if (ev.status === 'won') this.stageDone();
    else if (ev.status === 'lost') this.fail(ev.reason);
  }

  stageDone() {
    if (this.stageIdx + 1 < this.lvl.stages.length) {
      this.phase = 'transition'; this.scene.forceDepart = true; this.scene.idleFired = false; this.tut.stop();
      this.sound.play('coin'); this.ui.toast('Aşama tamamlandı!', 'good');
      if (!this.state.buses.some((b) => b.st === 'parked')) this.nextStage();
    } else if (this.state.buses.some((b) => b.st === 'parked')) {
      // Seviye bitti: park yerinde kalan (yarım) otobüsler de yolcularıyla ayrılsın, sonra sonuç ekranı
      this.phase = 'transition'; this.finalPending = true; this.scene.forceDepart = true; this.scene.idleFired = false; this.tut.stop();
    } else this.levelComplete();
  }

  nextStage() {
    const prevOpen = this.state.slotOpen.slice(); this.prevPassengers += this.state.queue.length;
    const b = $('#stageBanner'); b.hidden = false; b.textContent = `AŞAMA ${this.stageIdx + 2}/${this.lvl.stages.length}`; setTimeout(() => { b.hidden = true; }, 1800);
    this.beginStage(this.stageIdx + 1, prevOpen); this.phase = 'play'; this.scene.idleFired = true;
  }

  fail(reason) {
    if (this.phase !== 'play') return;
    this.pendingTaps = [];
    this.phase = 'ended'; this.tut.stop(); this.setMode(null); this.sound.play('lose');
    const s = this.state; const d = this.save.data;
    const canSlotAd = s.slotOpen.some((o) => !o) && ADS.mode !== 'off';
    setTimeout(() => { if (this.phase === 'ended') this.ui.fail({ reason, canSlotAd, canUndo: this.snapshots.length > 0, undoCount: d.powerups.undo }); }, 600);
  }
  reviveAfter() { this.phase = 'play'; this.scene.idleFired = false; this.refreshHud(); }

  levelComplete() {
    this.phase = 'ended'; this.tut.stop(); this.setMode(null);
    const d = this.save.data, n = this.levelN;
    this.scene.celebrate();
    const stars = this.assists === 0 ? 3 : this.assists <= 2 ? 2 : 1;
    const coins = 15 + stars * 5 + Math.min(15, Math.floor(n / 3));      // jeton zor kazanılır: ~25-45 / seviye
    d.completed[n] = Math.max(d.completed[n] || 0, stars);
    d.level = Math.max(d.level, n + 1);
    d.stats.levels++; if (stars === 3) d.stats.threeStars++;
    let rewardPower = null;
    if (n % 5 === 0) { rewardPower = ['undo', 'hint', 'recall', 'call', 'extraSlot'][(n / 5) % 5]; d.powerups[rewardPower]++; }
    if (n === 1) d.tutorial.l1 = true; if (n === 2) d.tutorial.l2 = true;
    this.emit('level', 1, false); if (stars === 3) this.emit('threeStar', 1, false);
    this.addCoins(coins, false);
    this.save.save(true);
    setTimeout(() => this.ui.result({ level: n, stars, coins, canDouble: ADS.mode !== 'off', rewardPower }), 1800);
  }

  // ---------------------------------------------------------------- ekonomi
  addCoins(n, fx = true) {
    const d = this.save.data; d.coins += n; d.stats.coinsEarned += n; this.ui.setCoins(d.coins, true); this.save.save();
    if (fx) { const p = this.ui.coinPos(); this.ui.floatText('+' + n, p.x, p.y + 20, 'coin'); this.sound.play('coin'); }
  }
  spendCoins(n) {
    const d = this.save.data;
    if (d.coins < n) { this.ui.toast('Yeterli jetonun yok!', 'bad'); this.sound.play('error'); return false; }
    d.coins -= n; this.ui.setCoins(d.coins, true); this.save.save(); return true;
  }
  buyItem(cat, id) {
    const it = SHOP[cat].find((x) => x.id === id); const d = this.save.data;
    if (!it || d.owned[cat].includes(id)) return false;
    if (!this.spendCoins(it.price)) return false;
    d.owned[cat].push(id); d.equipped[cat] = id; this.cosApply(); this.save.save(true);
    this.ui.toast(`${it.name} satın alındı ve kullanıma alındı!`, 'good'); this.sound.play('unlock'); return true;
  }
  equip(cat, id) { const d = this.save.data; if (!d.owned[cat].includes(id)) return; d.equipped[cat] = id; this.cosApply(); this.save.save(true); if (this.phase === 'menu') { this.scene.loadStage(this.state); } }
  buyPower(kind) { const p = POWER_INFO[kind]; if (!this.spendCoins(p.price)) return false; this.save.data.powerups[kind]++; this.save.save(); this.renderPowerBar(); this.ui.toast(`+1 ${p.name}`, 'good'); return true; }
  async adPower(kind) { if (!(await this.requestAd('power-' + kind))) return false; this.save.data.powerups[kind]++; this.save.save(); this.renderPowerBar(); this.ui.toast(`+1 ${POWER_INFO[kind].name}`, 'good'); return true; }
  buyPermSlot(applyNow = false) {
    const d = this.save.data; const n = d.perm.slots; if (n >= 3) return false;
    if (!this.spendCoins(PRICES.permSlot[n])) return false;
    d.perm.slots++; d.stats.slots++; this.emit('slot', 1, false);
    if (this.phase === 'play' && this.state) { const idx = E.unlockSlot(this.state); if (idx >= 0) this.scene.unlockSlotFx(idx, false); }
    this.save.save(true); this.ui.toast('Kalıcı Premium park yeri açıldı!', 'good'); void applyNow; return true;
  }
  async requestAd(placement) {
    if (!this.ads.available()) { this.ui.toast('Reklam servisi hazır değil. Ödül verilmedi.', 'bad'); return false; }
    this.adOpen = true; const r = await this.ads.showRewarded(placement); this.adOpen = false;
    if (!r.ok) { this.ui.toast(r.reason === 'cancelled' ? 'Reklam tamamlanmadı, ödül verilmedi.' : 'Reklam yüklenemedi. Daha sonra tekrar dene.', 'bad'); return false; }
    if (!this.ads.consume(r.token)) return false;
    this.save.data.stats.ads++; this.save.save(); return true;
  }
  async buyCoinPack(id) {
    const pk = IAP.packs.find((x) => x.id === id); if (!pk) return false;
    const r = await this.iap.buy(pk);
    if (r.ok) { this.ui.setCoins(this.save.data.coins, true); this.sound.play('coin'); this.ui.toast(`+${pk.coins} jeton!`, 'good'); return true; }
    this.ui.toast(r.reason === 'unavailable' ? 'Gerçek parayla satın alma bu sürümde kapalı.' : 'Satın alma tamamlanmadı, jeton verilmedi.', 'bad'); return false;
  }
  async doubleReward(coins) { if (!(await this.requestAd('double-reward'))) return false; this.addCoins(coins, false); this.sound.play('coin'); return true; }

  // günlük / görev / başarı
  canClaimDaily() { return this.save.data.daily.lastClaim !== dayKey(); }
  nextDailyIndex() { const dl = this.save.data.daily; if (!dl.lastClaim) return 0; return dayDiff(dl.lastClaim, dayKey()) === 1 ? dl.streak % 7 : 0; }
  claimDaily() {
    if (!this.canClaimDaily()) return; const d = this.save.data; const idx = this.nextDailyIndex(); const r = DAILY_REWARDS[idx];
    d.daily.streak = idx + 1; d.daily.lastClaim = dayKey();
    this.addCoins(r.coins, false); if (r.power) d.powerups[r.power[0]] += r.power[1];
    this.save.save(true); this.sound.play('coin'); this.ui.toast(`+${r.coins} jeton${r.power ? ` ve +${r.power[1]} ${POWER_INFO[r.power[0]].name}` : ''}!`, 'good'); this.ui.renderMenu();
  }
  emit(ev, n = 1, doSave = true) {
    const q = this.save.data.quests; ensureDailyQuests(this.save);
    for (const it of q.list) { const def = questDef(it.id); if (def && def.ev === ev) q.progress[it.id] = (q.progress[it.id] || 0) + n; }
    if (doSave) this.save.save();
  }
  hasClaimableQuest() {
    const d = this.save.data;
    return d.quests.list.some((q) => { const def = questDef(q.id); return (d.quests.progress[q.id] || 0) >= def.goal && !d.quests.claimed[q.id]; })
      || ACHIEVEMENTS.some((a) => (d.stats[a.stat] || 0) >= a.goal && !d.ach.claimed[a.id]);
  }
  claimQuest(id) { const d = this.save.data; const def = questDef(id); if (!def || d.quests.claimed[id] || (d.quests.progress[id] || 0) < def.goal) return; d.quests.claimed[id] = true; this.addCoins(def.reward, false); this.sound.play('coin'); this.save.save(true); this.ui.renderMenu(); }
  claimAch(id) { const d = this.save.data; const a = ACHIEVEMENTS.find((x) => x.id === id); if (!a || d.ach.claimed[id] || (d.stats[a.stat] || 0) < a.goal) return; d.ach.claimed[id] = true; this.addCoins(a.reward, false); this.sound.play('coin'); this.save.save(true); this.ui.renderMenu(); }

  applySettings() { const s = this.save.data.settings; this.sound.setSound(s.sound); this.sound.setVibe(s.vibe); this.scene.setQuality(s.quality); this.save.save(true); }
  resetTutorial() { const t = this.save.data.tutorial; t.l1 = false; t.l2 = false; t.enabled = true; this.save.save(true); }
  resetProgress() { this.save.reset(); this.sound.setSound(true); this.goMenu(); this.ui.toast('İlerleme sıfırlandı.'); }

  // ---------------------------------------------------------------- güçlendiriciler
  onPower(kind) {
    if (this.phase !== 'play' || this.paused) return;
    if (this.tut.active) { this.ui.toast('Önce eğitimi tamamla.'); return; }
    this.sound.play('click');
    if (this.mode) this.setMode(null);
    const d = this.save.data;
    if (['undo', 'hint', 'recall'].includes(kind) && d.powerups[kind] <= 0) { this.ui.powerBuy(kind); return; }
    if (this.scene.isBusy() && kind !== 'hint') { this.ui.toast('Animasyon bitsin, sonra dene.'); return; }
    switch (kind) {
      case 'undo': if (this.doUndo()) this.usePower('undo'); break;
      case 'hint': if (this.doHint()) this.usePower('hint'); break;
      case 'recall': this.setMode('recall', 'Geri çağırmak istediğin park eden otobüse dokun'); break;
      case 'call': this.setMode('call', 'Çağıracağın otobüse dokun'); this.suggestCall(); break;
      case 'convert': this.startConvertMode(); break;
      case 'vipcall': this.offerVipCall(); break;
      default: break;
    }
  }
  usePower(kind) { const d = this.save.data; if (d.powerups[kind] > 0) d.powerups[kind]--; this.assists++; this.save.save(); this.renderPowerBar(); }

  doUndo() {
    if (!this.snapshots.length) { this.ui.toast('Geri alınacak hamle yok.'); return false; }
    const snap = this.snapshots.pop(); const d = this.save.data;
    for (const k of d.temp.slots) snap.slotOpen[k] = true;
    this.state = snap; this.scene.loadStage(snap, d.temp.slots); this.refreshHud(); this.sound.play('whoosh');
    this.scene.fx.ring(0, -5.2, 0x7dd3ff, 0.5, 5, 0.8);
    return true;
  }
  /** Başarısızlık ekranından: stoktan veya jetonla geri al. */
  useUndo(fromFail) {
    const d = this.save.data;
    if (!this.snapshots.length) { this.ui.toast('Geri alınacak hamle yok.'); return false; }
    if (d.powerups.undo > 0) { if (!this.doUndo()) return false; d.powerups.undo--; this.assists++; this.save.save(); return true; }
    if (!this.spendCoins(PRICES.undo)) return false;
    this.assists++; void fromFail; return this.doUndo();
  }
  doHint() {
    const r = solve(this.state, { useVip: false, maxNodes: 250000 });
    if (!r.solved || !r.order.length) { this.ui.toast('Bu durumda çözüm yok. Geri al ya da yeniden başla!', 'bad'); return false; }
    this.scene.clearGlows(); this.scene.setGlow(r.order[0], 0xffe066); this.sound.play('unlock');
    clearTimeout(this.hintTimer); this.hintTimer = setTimeout(() => this.scene.clearGlows(), 5000);
    this.ui.toast('Parlayan otobüsü çıkar!', 'good'); return true;
  }
  doRecall(id) {
    const snap = E.clone(this.state);
    const r = E.recall(this.state, id);
    if (!r.ok) { this.ui.toast(r.reason === 'occupied' ? 'Başlangıç yeri dolu, geri çağrılamaz.' : 'Bu otobüs geri çağrılamaz.', 'bad'); this.sound.play('error'); return; }
    this.snapshots.push(snap); this.scene.animateRecall(id); this.setMode(null); this.usePower('recall'); this.scene.idleFired = false;
  }
  /** Sıradaki yolcunun renginde, en az engelli otobüsü parlatarak önerir. */
  suggestCall() {
    const s = this.state; const c = E.headColor(s); if (c === null) return;
    let best = null, sc = 1e9;
    for (const b of s.buses) { if (b.st !== 'board' || b.vip || b.color !== c) continue; const n = E.blockers(s, b).length; if (n < sc) { sc = n; best = b; } }
    if (best) this.scene.setGlow(best.id, 0xffe066);
  }
  /** Çağır modunda bir otobüse dokunuldu: ödeme seçeneklerini göster. */
  openCall(id) {
    const s = this.state; const b = s.buses[id]; const d = this.save.data;
    if (!b || b.st !== 'board') return;
    if (b.vip) { this.ui.toast('VIP otobüsler çağrılamaz; VIP için VIP Çağır\'ı kullan.'); return; }
    if (E.slotFor(s, b) === -1) { this.ui.toast('Park yeri yok! Önce yer aç.', 'bad'); this.sound.play('error'); return; }
    if (this.scene.isBusy()) { this.ui.toast('Animasyon bitsin, sonra dene.'); return; }
    const cname = COLORS[b.color]?.name || '';
    const c = this.ui.modal({
      title: 'Otobüs Çağır', head: 'purple', onClose: () => { if (this.mode === 'call') this.setMode(null); },
      body: `<p>Seçtiğin <b>${cname}</b> otobüs (${b.seats} koltuk), önündeki engellere takılmadan park alanına gelir.</p>`,
      foot: `${d.powerups.call > 0 ? `<button class="btn blue" data-act="item">${ico('call', 22)} Envanterden kullan (${d.powerups.call})</button>` : ''}${ADS.mode !== 'off' ? `<button class="btn gold" data-act="ad">${ico('ad', 22)} Reklam izle</button>` : ''}<button class="btn orange" data-act="coin">${ico('coin', 22)} ${PRICES.call} jeton</button>`,
    });
    this.ui.onAct(c, { item: async () => { if (await this.callPick(id, 'item')) c.close(); }, ad: async () => { if (await this.callPick(id, 'ad')) c.close(); }, coin: async () => { if (await this.callPick(id, 'coin')) c.close(); } });
  }
  async callPick(id, pay) {
    const s = this.state; const d = this.save.data; const b = s.buses[id];
    if (!b || b.st !== 'board' || b.vip || E.slotFor(s, b) === -1) { this.ui.toast('Bu otobüs şu an çağrılamaz.', 'bad'); return false; }
    if (pay === 'item') { if (d.powerups.call <= 0) return false; }
    else if (pay === 'ad') { if (!(await this.requestAd('call-pick'))) return false; }
    else if (!this.spendCoins(PRICES.call)) return false;
    const snap = E.clone(s); const r = E.callBus(s, id);
    if (!r.ok) { this.ui.toast('Çağrılamadı.', 'bad'); return false; }
    if (pay === 'item') d.powerups.call--;
    this.snapshots.push(snap); this.setMode(null); this.scene.startCraneToSlot(r.id, r.slot); this.assists++; this.scene.idleFired = false; this.refreshChips(); this.renderPowerBar(); this.save.save();
    return true;
  }
  doCall() {
    const snap = E.clone(this.state);
    const r = E.callMatching(this.state);
    if (!r.ok) { this.ui.toast(r.reason === 'noslot' ? 'Park yeri yok!' : 'Sıradaki yolcunun renginde otobüs kalmadı.', 'bad'); this.sound.play('error'); return false; }
    this.snapshots.push(snap); this.scene.startCraneToSlot(r.id, r.slot); this.refreshChips(); return true;
  }
  startConvertMode() {
    const d = this.save.data;
    if (d.temp.conv >= CONV_LIMIT) { this.ui.toast('Bu seviyede dönüştürme hakkın bitti.', 'bad'); return; }
    this.setMode('convert', 'Dönüştürmek istediğin otobüse dokun');
  }
  openConvert(id) {
    const s = this.state; const b = s.buses[id]; const d = this.save.data;
    if (!b || b.st !== 'board') return;
    if (b.vip) { this.ui.toast('VIP otobüsler dönüştürülemez.'); return; }
    const colors = [...new Set(s.queue.slice(s.qi))].filter((c) => c !== b.color);
    this.ui.convertDialog({ id, colors, seats: b.seats, canGrow: !!E.canGrow(s, id), canSeat: E.canAddSeat(s, id), maxSeats: b.len * 2, left: CONV_LIMIT - d.temp.conv });
  }
  async applyConvert(id, sel, pay) {
    if (!sel) return false;
    const s = this.state; const d = this.save.data;
    // çözülebilirlik güvencesi: dönüşümü kopya üzerinde dene
    const test = E.clone(s);
    if (sel.type === 'color') E.convertColor(test, id, sel.v); else if (sel.type === 'seat') E.addSeat(test, id); else E.grow(test, id);
    const chk = solve(test, { useVip: false, maxNodes: 150000 });
    if (!chk.solved && !chk.aborted) { this.ui.toast('Bu dönüşüm seviyeyi çözümsüz yapar, başka seçenek dene.', 'bad'); return false; }
    if (pay === 'ad') { if (!(await this.requestAd('convert'))) return false; } else if (!this.spendCoins(sel.type === 'seat' ? PRICES.seat : PRICES.convert)) return false;
    const snap = E.clone(s);
    const r = sel.type === 'color' ? E.convertColor(s, id, sel.v) : sel.type === 'seat' ? E.addSeat(s, id) : E.grow(s, id);
    if (!r.ok) { this.ui.toast('Dönüştürme uygulanamadı.', 'bad'); return false; }
    this.snapshots.push(snap);
    if (sel.type === 'color') this.scene.convertFx(id, 'color'); else this.scene.rebuildBus(id);
    d.temp.conv++; this.assists++; this.save.save(); this.setMode(null); this.ui.toast(sel.type === 'seat' ? 'Koltuk eklendi!' : 'Otobüs dönüştürüldü!', 'good'); return true;
  }
  offerVipCall() {
    const s = this.state; const d = this.save.data;
    if (s.vipSlot !== null) { this.ui.toast('VIP alanı zaten dolu.'); return; }
    if (d.temp.vipCalls >= 2) { this.ui.toast('Bu seviyede VIP çağırma hakkın bitti.'); return; }
    const c = this.ui.modal({ title: 'VIP Çağır', head: 'gold', body: '<p>Altın VIP otobüs gelip VIP alanına park eder ve <b>her renkten yolcu</b> alır (8 koltuk). Bu seviye için geçerlidir.</p>', foot: `<button class="btn gold" data-act="ad">${ico('ad', 22)} Reklam izle</button><button class="btn orange" data-act="coin">${ico('coin', 22)} ${VIP_CALL_PRICE} jeton</button>` });
    this.ui.onAct(c, { ad: async () => { if (await this.callVip('ad')) c.close(); }, coin: async () => { if (await this.callVip('coin')) c.close(); } });
  }
  async callVip(mode) {
    const s = this.state; if (s.vipSlot !== null) return false;
    if (mode === 'ad') { if (!(await this.requestAd('vip-call'))) return false; } else if (!this.spendCoins(VIP_CALL_PRICE)) return false;
    const snap = E.clone(s); const r = E.spawnVip(s);
    if (!r.ok) return false;
    this.snapshots.push(snap); this.scene.dropVip(s.buses[r.id]); this.save.data.temp.vipCalls++; this.assists++; this.save.save(); return true;
  }
  async unlockSlot(mode) {
    const s = this.state; const d = this.save.data;
    if (!s.slotOpen.some((o) => !o)) { this.ui.toast('Tüm park yerleri zaten açık.'); return false; }
    if (mode === 'ad') { if (!(await this.requestAd('extra-slot'))) return false; }
    else if (mode === 'coin') { if (!this.spendCoins(PRICES.extraSlot)) return false; }
    else if (mode === 'item') { if (d.powerups.extraSlot <= 0) return false; d.powerups.extraSlot--; }
    const idx = E.unlockSlot(s); if (idx < 0) return false;
    d.temp.slots.push(idx); d.stats.slots++; this.emit('slot', 1, false); this.assists++;
    this.scene.unlockSlotFx(idx, true); this.save.save(true); this.ui.toast('Ek park yeri açıldı! (sadece bu seviye)', 'good'); this.renderPowerBar();
    return true;
  }
  async addMoves(mode) {
    if (mode === 'ad') { if (!(await this.requestAd('extra-moves'))) return false; } else if (!this.spendCoins(PRICES.moves)) return false;
    this.extraMoves += 4; this.state.moveLimit += 4; this.assists++; this.refreshChips(); return true;
  }
  async addTime(mode) {
    if (mode === 'ad') { if (!(await this.requestAd('extra-time'))) return false; } else if (!this.spendCoins(PRICES.time)) return false;
    this.timeLeft = (this.timeLeft || 0) + 30; this.assists++; this.refreshChips(); return true;
  }
  offerMoves() { if (this.phase !== 'play' || this.state.moveLimit === null) return; const d = this.save.data; if (d.powerups.moves > 0) { d.powerups.moves--; this.extraMoves += 4; this.state.moveLimit += 4; this.assists++; this.refreshChips(); this.ui.toast('+4 hamle', 'good'); this.save.save(); } else this.ui.toast(`Hamle bitince reklam veya ${PRICES.moves} jetonla +4 hamle alabilirsin.`); }
  offerTime() { if (this.phase !== 'play' || this.timeLeft === null) return; const d = this.save.data; if (d.powerups.time > 0) { d.powerups.time--; this.timeLeft += 30; this.assists++; this.refreshChips(); this.ui.toast('+30 saniye', 'good'); this.save.save(); } else this.ui.toast(`Süre bitince reklam veya ${PRICES.time} jetonla +30 sn alabilirsin.`); }
}
void COLORS;
