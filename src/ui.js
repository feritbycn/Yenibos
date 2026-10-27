// DOM arayüzü: menü, modallar, mağaza, koleksiyon, görevler, ayarlar, sonuç ekranları.
import { ico } from './icons.js';
import { SHOP, SHOP_TABS, POWER_INFO, DAILY_REWARDS, QUEST_POOL, ACHIEVEMENTS, questDef, dayKey } from './economy.js';
const STYLE_IMG = { express: 'img/bus_express.jpg', tourist: 'img/bus_tourist.jpg', sport: 'img/bus_sport.jpg' };
import { PALETTES, BUS_STYLES, VIP_SKINS } from './models.js';
import { PRICES, ADS, COLORS, VIP_COLOR, IAP, VIP_CALL_PRICE, MAX_REVIVES, BACKEND, WEEKLY_CHEST, PACKS } from './config.js';
import { Clock } from './time.js';
import { Preview } from './preview.js';

const $ = (s, r = document) => r.querySelector(s);
const hex6 = (n) => '#' + n.toString(16).padStart(6, '0');
const DIFF = { easy: 'KOLAY', normal: 'NORMAL', hard: 'ZOR', super: 'ÇOK ZOR' };
export const diffLabel = (d) => DIFF[d] || '';

export class UI {
  constructor(game) {
    this.G = game;
    this.host = $('#modalHost'); this.menuEl = $('#menu'); this.toastEl = $('#toasts'); this.floatEl = $('#floaters');
    this.modals = [];
  }

  // ---------------------------------------------------------------- temel
  toast(text, kind = '') {
    const t = document.createElement('div'); t.className = 'toast ' + kind; t.textContent = text;
    this.toastEl.appendChild(t); setTimeout(() => t.remove(), 2500);
    while (this.toastEl.children.length > 3) this.toastEl.firstChild.remove();
  }
  floatText(text, x, y, icon = '') {
    const f = document.createElement('div'); f.className = 'floater'; f.style.left = x + 'px'; f.style.top = y + 'px';
    f.innerHTML = (icon ? ico(icon, 24) : '') + text; this.floatEl.appendChild(f); setTimeout(() => f.remove(), 1300);
  }
  modal({ title, head = '', body = '', foot = '', closable = true, onClose = null, cls = '' }) {
    const bg = document.createElement('div'); bg.className = 'modal-bg';
    bg.innerHTML = `<div class="sheet ${cls}"><div class="sheet-head ${head}">${title}${closable ? `<button class="sheet-x" data-x aria-label="Kapat">${ico('x', 20)}</button>` : ''}</div><div class="sheet-body">${body}</div>${foot ? `<div class="sheet-foot">${foot}</div>` : ''}</div>`;
    this.host.appendChild(bg);
    const ctl = {
      el: bg, closed: false,
      q: (s) => bg.querySelector(s),
      setBody: (h) => { bg.querySelector('.sheet-body').innerHTML = h; },
      setFoot: (h) => { let f = bg.querySelector('.sheet-foot'); if (!f) { f = document.createElement('div'); f.className = 'sheet-foot'; bg.querySelector('.sheet').appendChild(f); } f.innerHTML = h; },
      close: () => { if (ctl.closed) return; ctl.closed = true; bg.remove(); this.modals = this.modals.filter((m) => m !== ctl); ctl.preview?.dispose(); onClose?.(); },
    };
    bg.addEventListener('click', (e) => { if (e.target.closest('[data-x]')) { this.G.sound.play('click'); ctl.close(); } });
    this.modals.push(ctl); return ctl;
  }
  closeAll() { [...this.modals].forEach((m) => m.close()); }
  get hasModal() { return this.modals.length > 0; }
  onAct(ctl, handlers) {
    ctl.el.addEventListener('click', (e) => {
      const b = e.target.closest('[data-act]'); if (!b || b.disabled) return;
      const fn = handlers[b.dataset.act]; if (fn) { this.G.sound.play('click'); fn(b.dataset, b, e); }
    });
  }
  confirm({ title, text, yes = 'Evet', no = 'Vazgeç', danger = false }) {
    return new Promise((res) => {
      let done = false; const fin = (v) => { if (!done) { done = true; c.close(); res(v); } };
      const c = this.modal({ title, head: danger ? 'red' : '', body: `<p>${text}</p>`, foot: `<div class="row"><button class="btn gray" data-act="no">${no}</button><button class="btn ${danger ? 'red' : 'green'}" data-act="yes">${yes}</button></div>`, closable: false, onClose: () => fin(false) });
      this.onAct(c, { yes: () => fin(true), no: () => fin(false) });
    });
  }
  setCoins(n, pulse = false) {
    const v = n.toLocaleString('tr-TR');
    for (const el of [$('#hudCoins'), $('#menuCoins')]) if (el) { el.innerHTML = `${ico('coin', 26)}<span>${v}</span>`; if (pulse) { el.classList.remove('pulse'); void el.offsetWidth; el.classList.add('pulse'); } }
  }
  coinPos() { const r = ($('#hudCoins') || $('#menuCoins'))?.getBoundingClientRect(); return r ? { x: r.left + r.width / 2, y: r.bottom + 6 } : { x: 200, y: 80 }; }

  // ---------------------------------------------------------------- reklam
  testAd(ms, placement, opt = {}) {
    return new Promise((res) => {
      let done = false, ok = false;
      const c = this.modal({
        title: opt.interstitial ? 'Reklam' : 'Ödüllü Reklam', head: 'purple', closable: !!opt.interstitial ? false : true,
        body: `<div class="adbox"><span class="testtag">TEST REKLAMI</span><div class="bigad">Örnek Reklam<small>Geliştirme modu: gerçek reklam değildir. Yayın sürümünde AdMob kullanılır.</small></div><div class="pb"><i></i></div><p class="adt">${opt.interstitial ? 'Reklam bitince devam edebilirsin' : 'Ödül için bekle'}: <b class="sec">${Math.ceil(ms / 1000)}</b> sn</p></div>`,
        foot: `<button class="btn green" data-act="claim" disabled>${ico('check', 22)} ${opt.interstitial ? 'Devam Et' : 'Ödülü Al'}</button>`,
        onClose: () => { if (!done) { done = true; res(ok); } },
      });
      const bar = c.q('.pb i'), sec = c.q('.sec'); const t0 = performance.now();
      const iv = setInterval(() => {
        const k = Math.min(1, (performance.now() - t0) / ms); bar.style.width = (k * 100) + '%'; sec.textContent = Math.max(0, Math.ceil((ms - (performance.now() - t0)) / 1000));
        if (k >= 1) { clearInterval(iv); ok = true; c.q('[data-act=claim]').disabled = false; c.q('.adt').textContent = 'Reklam tamamlandı!'; }
      }, 80);
      this.onAct(c, { claim: () => { if (ok) { clearInterval(iv); done = true; c.close(); res(true); } } });
      const origClose = c.close; c.close = () => { clearInterval(iv); origClose(); };
      void placement;
    });
  }

  /** Seyrek gösterilen reklamsız teklifi (yalnızca gerçek satın alma hazırsa çağrılır). */
  removeAdsOffer() {
    return new Promise((res) => {
      const c = this.modal({
        title: 'Reklamsız Oyna', head: 'blue', closable: true, onClose: () => res(),
        body: `<p style="text-align:center">Seviye aralarındaki zorunlu reklamları tek seferlik satın almayla kaldır. İsteğe bağlı ödüllü videolar yine açık kalır.</p>`,
        foot: `<button class="btn green" data-act="buy">Reklamları Kaldır</button><button class="btn gray" data-act="later">Şimdi değil</button>`,
      });
      this.onAct(c, { buy: async () => { if (await this.G.buyRemoveAds()) c.close(); }, later: () => c.close() });
    });
  }

  // ---------------------------------------------------------------- ana menü
  renderMenu() {
    const G = this.G, d = G.save.data, lvl = G.peekLevel(d.level);
    const claim = G.canClaimDaily() || G.canClaimWeekly(), qc = G.hasClaimableQuest();
    this.menuEl.innerHTML = `
      <div class="menu-top">
        <div class="lvl-badge">Seviye ${d.level}</div>
        <button class="coin-chip" id="menuCoins" data-act="shop"></button>
        <button class="small-btn" data-act="settings" aria-label="Ayarlar">${ico('gear', 26)}</button>
      </div>
      <div class="logo"><b>BUS PUZZLE</b><i>DELUXE</i><br><small>3D</small></div>
      <div class="menu-mid"><button class="play-btn" data-act="play"><b>OYNA</b><small>Seviye ${d.level} · ${diffLabel(lvl.difficulty)}</small></button></div>
      <div class="menu-nav">
        <button class="nav-btn shop" data-act="shop">${ico('shop', 28)}Mağaza</button>
        <button class="nav-btn coll" data-act="collection">${ico('bus', 28)}Koleksiyon</button>
        <button class="nav-btn rank" data-act="rank">${ico('trophy', 28)}Sıralama</button>
        <button class="nav-btn quest" data-act="quests">${ico('list', 28)}Görevler${qc ? '<i class="dot"></i>' : ''}</button>
        <button class="nav-btn gift" data-act="daily">${ico('gift', 28)}Günlük${claim ? '<i class="dot"></i>' : ''}</button>
        <button class="nav-btn vip" data-act="vip">${ico('vip', 28)}VIP</button>
      </div>`;
    this.setCoins(d.coins);
  }
  bindMenu() {
    this.menuEl.addEventListener('click', (e) => {
      const b = e.target.closest('[data-act]'); if (!b) return;
      this.G.sound.unlock(); this.G.sound.play('click');
      ({ play: () => this.G.startLevel(this.G.save.data.level), shop: () => this.shop(), collection: () => this.collection(), quests: () => this.quests(), daily: () => this.daily(), rank: () => this.leaderboard(), vip: () => this.vipPanel(), settings: () => this.settings(false) })[b.dataset.act]?.();
    });
  }

  // ---------------------------------------------------------------- mağaza
  shop(tab = 'style') {
    const G = this.G; const c = this.modal({ title: 'Mağaza', head: 'gold', cls: 'shopsheet', body: '' });
    const render = () => {
      const d = G.save.data;
      const tabs = `<div class="tabs">${SHOP_TABS.map(([id, nm]) => `<button class="tab ${id === tab ? 'on' : ''}" data-act="tab" data-id="${id}">${nm}</button>`).join('')}</div>`;
      let body = '';
      const coins = `<div style="display:flex;justify-content:flex-end;margin-bottom:8px"><span class="chip" style="border-color:#c98a00">${ico('coin', 18)} ${d.coins.toLocaleString('tr-TR')}</span></div>`;
      if (SHOP[tab]) {
        body = `<div class="grid">${SHOP[tab].map((it) => {
          const owned = d.owned[tab].includes(it.id), eq = d.equipped[tab] === it.id;
          let sw = '';
          if (tab === 'palette') sw = `<div class="swatch">${PALETTES[it.id].slice(0, 6).map((h) => `<i style="background:${hex6(h)}"></i>`).join('')}</div>`;
          else if (tab === 'style') sw = STYLE_IMG[it.id] ? `<img class="bimg" src="${STYLE_IMG[it.id]}" alt="">` : `<div style="color:#2f6bff">${ico('bus', 52)}</div>`;
          else if (tab === 'rim') sw = `<div class="swatch" style="width:48px;height:48px;border-radius:50%;background:radial-gradient(#222 45%,${it.id === 'gold' ? '#ffc83a' : it.id === 'neon' ? '#35f0ff' : it.id === 'chrome' ? '#f5f8ff' : '#cfd6de'} 48%)"></div>`;
          else if (tab === 'trail') sw = `<div style="font-size:34px;line-height:42px">${{ dust: '💨', sparkle: '✨', stars: '⭐', bubbles: '🫧' }[it.id]}</div>`;
          else sw = `<div style="color:${hex6(VIP_SKINS[it.id].body)}">${ico('vip', 48)}</div>`;
          const btn = eq ? `<button class="btn green" disabled>${ico('check', 16)} Kullanımda</button>` : owned ? `<button class="btn blue" data-act="equip" data-id="${it.id}">Kullan</button>` : `<button class="btn gold" data-act="buy" data-id="${it.id}">${ico('coin', 18)} ${it.price}</button>`;
          return `<div class="card ${eq ? 'eq' : ''}">${owned ? '' : `<span class="tag lock">${ico('lock', 10)}</span>`}${sw}<div class="nm">${it.name}</div><div class="ds">${it.desc}</div>${btn}</div>`;
        }).join('')}</div>`;
      } else if (tab === 'coins') {
        const ok = G.iap.available();
        body = `<p>${ok ? 'Jeton paketlerini Google Play ile satın alabilirsin.' : '<b>Gerçek parayla satın alma bu sürümde kapalı.</b> Google Play Faturalandırma kurulumu yapılmadan jeton satılmaz (README).'}</p><div class="list">${IAP.packs.map((pk) => `<div class="item"><div>${ico('coin', 34)}</div><div class="grow"><b>${pk.coins.toLocaleString('tr-TR')} jeton</b><small style="display:block;color:#58649a">${pk.label}</small></div><button class="btn gold" data-act="iap" data-id="${pk.id}" ${ok ? '' : 'disabled'}>Satın al</button></div>`).join('')}</div>`;
      } else if (tab === 'packs') {
        body = `<p>Jetonla alınan paketler: tek tek almaktan daha ucuz. (Gerçek para ödemesi yok.)</p><div class="list">${PACKS.map((pk) => `<div class="item"><div style="color:#7a4dff">${ico('gift', 34)}</div><div class="t"><b>${pk.name} <span style="color:#2fa84f;font-size:12px">${pk.tag}</span></b><small>${Object.entries(pk.items).map(([k, n]) => `${n}× ${POWER_INFO[k].name}`).join(' · ')}</small></div><button class="btn gold" data-act="buypack" data-id="${pk.id}">${ico('coin', 16)} ${pk.price}</button></div>`).join('')}</div>`;
      } else if (tab === 'power') {
        body = `<div class="list">${Object.entries(POWER_INFO).map(([k, p]) => `<div class="item"><div style="color:#2f6bff">${ico({ undo: 'undo', hint: 'hint', recall: 'recall', call: 'call', extraSlot: 'plus', moves: 'play', time: 'clock', vip: 'vip', shuffle: 'shuffle' }[k], 30)}</div><div class="t"><b>${p.name} <span style="color:#c98a00">×${d.powerups[k] || 0}</span></b><small>${p.desc}</small></div><div style="display:flex;flex-direction:column;gap:5px"><button class="btn gold" data-act="buypower" data-id="${k}">${ico('coin', 16)} ${p.price}</button>${ADS.mode !== 'off' ? `<button class="btn green" data-act="adpower" data-id="${k}">${ico('ad', 16)} +1</button>` : ''}</div></div>`).join('')}</div>`;
      } else {
        const n = d.perm.slots;
        body = `<p>Kalıcı park alanları tüm seviyelerde açık kalır. Reklamla açılan alanlar ise yalnızca o seviyede geçerlidir.</p><div class="list">${PRICES.permSlot.map((pr, i) => `<div class="item"><div style="color:${i < n ? '#2fd06a' : '#7a4dff'}">${ico(i < n ? 'check' : 'plus', 34)}</div><div class="t"><b>Kalıcı Park Yeri ${i + 1}/3</b><small>${i < n ? 'Açıldı' : i === n ? 'Sıradaki açılım' : 'Önceki alanı aç'}</small></div>${i < n ? '' : `<button class="btn gold" data-act="permslot" ${i === n ? '' : 'disabled'}>${ico('coin', 16)} ${pr}</button>`}</div>`).join('')}</div>`;
      }
      c.setBody(tabs + `<div style="height:10px"></div>` + coins + body);
    };
    render();
    this.onAct(c, {
      tab: (ds) => { tab = ds.id; render(); },
      buy: (ds) => { if (G.buyItem(tab, ds.id)) render(); },
      equip: (ds) => { G.equip(tab, ds.id); render(); },
      buypower: (ds) => { if (G.buyPower(ds.id)) render(); },
      buypack: (ds) => { if (G.buyPack(ds.id)) render(); },
      adpower: async (ds) => { if (await G.adPower(ds.id)) render(); },
      permslot: () => { if (G.buyPermSlot()) render(); },
      iap: async (ds) => { if (await G.buyCoinPack(ds.id)) render(); },
    });
    return c;
  }

  // ---------------------------------------------------------------- koleksiyon
  collection() {
    const G = this.G; const c = this.modal({ title: 'Otobüs Koleksiyonu', head: 'green', body: '' });
    const entries = () => {
      const d = G.save.data;
      return [
        ...SHOP.style.map((s) => ({ cat: 'style', ...s, owned: d.owned.style.includes(s.id), eq: d.equipped.style === s.id, color: '#2f6bff', kind: 'Otobüs' })),
        ...SHOP.vipSkin.map((s) => ({ cat: 'vipSkin', ...s, owned: d.owned.vipSkin.includes(s.id), eq: d.equipped.vipSkin === s.id, color: hex6(VIP_SKINS[s.id].body), kind: 'VIP' })),
      ];
    };
    const render = () => {
      const list = entries(); const got = list.filter((e) => e.owned).length;
      c.setBody(`<p style="text-align:center">Açılan: <b>${got}/${list.length}</b></p><div class="grid">${list.map((e) => `<button class="card ${e.eq ? 'eq' : ''}" data-act="open" data-cat="${e.cat}" data-id="${e.id}" style="${e.owned ? '' : 'filter:grayscale(.85)'}"><span class="tag ${e.owned ? '' : 'lock'}">${e.owned ? e.kind : ico('lock', 10)}</span>${e.cat === 'style' && STYLE_IMG[e.id] ? `<img class="bimg" src="${STYLE_IMG[e.id]}" alt="">` : `<div style="color:${e.color}">${ico(e.cat === 'vipSkin' ? 'vip' : 'bus', 56)}</div>`}<div class="nm">${e.owned ? e.name : '???'}</div><div class="ds">${e.owned ? e.desc : `${e.price} jetonla açılır`}</div></button>`).join('')}</div>`);
    };
    render();
    this.onAct(c, { open: (ds) => this.busDetail(ds.cat, ds.id, render) });
  }

  busDetail(cat, id, onChange) {
    const G = this.G; const it = SHOP[cat].find((x) => x.id === id);
    const c = this.modal({ title: it.name, head: cat === 'vipSkin' ? 'gold' : 'blue', body: `<div class="preview"><span class="hintxt">Döndürmek için sürükle</span></div><p style="margin-top:10px;text-align:center">${it.desc}</p>`, foot: '' });
    const d = G.save.data;
    const pv = new Preview(c.q('.preview')); c.preview = pv;
    const showModel = () => {
      const eq = d.equipped;
      pv.show(cat === 'vipSkin' ? { vip: true, vipSkin: id, rim: eq.rim, len: 3 } : { style: id, rim: eq.rim, palette: eq.palette, colorIndex: 0, len: id === 'coach' || id === 'luxury' ? 4 : id === 'mini' ? 2 : 3 });
    };
    showModel();
    const foot = () => {
      const owned = d.owned[cat].includes(id), eq = d.equipped[cat] === id;
      c.setFoot(eq ? `<button class="btn green" disabled>${ico('check', 20)} Kullanımda</button>` : owned ? `<button class="btn blue" data-act="equip">Kullan</button>` : `<button class="btn gold" data-act="buy">${ico('coin', 20)} ${it.price} ile aç</button>`);
    };
    foot();
    this.onAct(c, { equip: () => { G.equip(cat, id); foot(); onChange?.(); }, buy: () => { if (G.buyItem(cat, id)) { foot(); onChange?.(); } } });
  }

  // ---------------------------------------------------------------- VIP / Premium
  vipPanel() {
    const G = this.G; const c = this.modal({ title: 'VIP & Premium', head: 'gold', body: '' });
    const render = () => {
      const d = G.save.data;
      c.setBody(`
        <div class="preview"><span class="hintxt">Döndürmek için sürükle</span></div>
        <p style="margin-top:10px"><b>VIP hakkı:</b> tahtadaki istediğin otobüse dokun; yolu kapalı olsa bile (kanatlanıp uçarak) <b>VIP alanına</b> gelir ve <b>kendi rengindeki yolcuları kuyruğun her yerinden</b> alır: önce öndekileri, dolmazsa arkadakileri. İlk hak hediye; sonrası reklamla ya da <b>${VIP_CALL_PRICE} jetonla</b>. Şu an <b>${d.powerups.vip}</b> hakkın var. <button class="btn gold" data-act="buyvip" style="margin-top:8px">${ico('vip', 18)} VIP hakkı al</button></p>
        <div class="opts">${Object.entries(VIP_SKINS).map(([k, s]) => { const own = d.owned.vipSkin.includes(k); return `<button class="opt ${d.equipped.vipSkin === k ? 'sel' : ''}" data-act="skin" data-id="${k}"><div class="dotc" style="background:${hex6(s.body)}"></div>${s.label}<small style="color:#58649a">${own ? (d.equipped.vipSkin === k ? 'Kullanımda' : 'Kullan') : SHOP.vipSkin.find((x) => x.id === k).price + ' 🪙'}</small></button>`; }).join('')}</div>
        <div class="item"><div style="color:#7a4dff">${ico('plus', 30)}</div><div class="t"><b>Kalıcı Premium park yerleri</b><small>${d.perm.slots}/3 açık · tüm seviyelerde geçerli</small></div>${d.perm.slots < 3 ? `<button class="btn gold" data-act="perm">${ico('coin', 16)} ${PRICES.permSlot[d.perm.slots]}</button>` : `<span style="color:#2fd06a">${ico('check', 28)}</span>`}</div>`);
      const pv = c.preview || (c.preview = new Preview(c.q('.preview')));
      pv.show({ vip: true, vipSkin: d.equipped.vipSkin, rim: d.equipped.rim, len: 3 });
      void pv;
    };
    render();
    this.onAct(c, {
      skin: (ds) => { const d = G.save.data; if (d.owned.vipSkin.includes(ds.id)) G.equip('vipSkin', ds.id); else if (!G.buyItem('vipSkin', ds.id)) return; c.preview?.dispose(); c.preview = null; render(); },
      perm: () => { if (G.buyPermSlot()) { c.preview?.dispose(); c.preview = null; render(); } },
      buyvip: () => { c.close(); this.powerBuy('vip'); },
    });
  }

  // eğitim: VIP önizleme (3D)
  vipPreview(onDone) {
    const G = this.G; const d = G.save.data;
    const c = this.modal({ title: 'VIP Hakkı', head: 'gold', closable: false, body: `<div class="preview"><span class="hintxt">Döndürmek için sürükle</span></div><p style="margin-top:10px;text-align:center"><b>VIP hakkı</b>: istediğin otobüsü seç, VIP alanına gelsin. Kendi rengindeki yolcuları <b>kuyruğun her yerinden</b> alır (önce öndekiler). Sana <b>1 VIP hakkı</b> hediye!</p>`, foot: `<button class="btn green" data-act="ok">Harika!</button>`, onClose: () => onDone?.() });
    const pv = new Preview(c.q('.preview')); c.preview = pv; pv.show({ vip: true, vipSkin: d.equipped.vipSkin, rim: d.equipped.rim, len: 3 });
    this.onAct(c, { ok: () => c.close() });
  }

  // ---------------------------------------------------------------- görevler
  quests(tab = 'daily') {
    const G = this.G; const c = this.modal({ title: 'Görevler', head: '', body: '' });
    const render = () => {
      const d = G.save.data;
      const tabs = `<div class="tabs" style="margin:-14px -14px 10px"><button class="tab ${tab === 'daily' ? 'on' : ''}" data-act="tab" data-id="daily">Günlük</button><button class="tab ${tab === 'ach' ? 'on' : ''}" data-act="tab" data-id="ach">Başarılar</button></div>`;
      let list = '';
      if (tab === 'daily') {
        list = `<div class="list">${d.quests.list.map((q) => {
          const def = questDef(q.id), pr = Math.min(def.goal, d.quests.progress[q.id] || 0), done = pr >= def.goal, cl = d.quests.claimed[q.id];
          return `<div class="item"><div style="color:#2f6bff">${ico('list', 30)}</div><div class="t"><b>${def.text}</b><small>${pr}/${def.goal} · Ödül: ${def.reward} 🪙</small><div class="bar"><i style="width:${(pr / def.goal) * 100}%"></i></div></div>${cl ? `<span style="color:#2fd06a">${ico('check', 28)}</span>` : `<button class="btn ${done ? 'green' : 'gray'}" data-act="claimq" data-id="${q.id}" ${done ? '' : 'disabled'}>Al</button>`}</div>`;
        }).join('')}</div><p style="text-align:center;margin-top:10px;color:#58649a;font-size:13px">Görevler her gün yenilenir.</p>`;
      } else {
        list = `<div class="list">${ACHIEVEMENTS.map((a) => {
          const pr = Math.min(a.goal, d.stats[a.stat] || 0), done = pr >= a.goal, cl = d.ach.claimed[a.id];
          return `<div class="item"><div style="color:#ff9a1f">${ico('star', 30)}</div><div class="t"><b>${a.name}</b><small>${a.text} · ${pr}/${a.goal} · ${a.reward} 🪙</small><div class="bar"><i style="width:${(pr / a.goal) * 100}%"></i></div></div>${cl ? `<span style="color:#2fd06a">${ico('check', 28)}</span>` : `<button class="btn ${done ? 'green' : 'gray'}" data-act="claima" data-id="${a.id}" ${done ? '' : 'disabled'}>Al</button>`}</div>`;
        }).join('')}</div>`;
      }
      c.setBody(tabs + list);
    };
    render();
    this.onAct(c, { tab: (ds) => { tab = ds.id; render(); }, claimq: (ds) => { G.claimQuest(ds.id); render(); }, claima: (ds) => { G.claimAch(ds.id); render(); } });
  }

  // ---------------------------------------------------------------- günlük ödül
  daily() {
    const G = this.G; const c = this.modal({ title: 'Günlük Ödül', head: 'orange', body: '' });
    c.el.querySelector('.sheet-head').style.background = 'linear-gradient(#ffb23f,#ff7a1f)';
    const DAYN = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
    const render = () => {
      const d = G.save.data; const trusted = Clock.trusted(); const can = G.canClaimDaily(); const next = G.nextDailyIndex(); const doneN = can ? next : d.daily.streak;
      const w = d.weekly; const wk = w.week === Clock.weekKey() ? w : { days: [], claimed: false }; const wd = Clock.weekday();
      const chest = `<div class="weekly"><div class="wk-h"><b>${ico('gift', 20)} Haftalık giriş sandığı</b><small>${wk.days.length}/${WEEKLY_CHEST.need} gün · ${WEEKLY_CHEST.coins} 🪙 + ${WEEKLY_CHEST.power[1]} ${POWER_INFO[WEEKLY_CHEST.power[0]].name}</small></div><div class="wk-d">${DAYN.map((n, i) => `<i class="${wk.days.includes(i) ? 'on' : ''} ${i === wd ? 'now' : ''}">${n}</i>`).join('')}</div>${wk.claimed ? '<button class="btn gray" disabled>Bu haftaki sandık alındı</button>' : `<button class="btn ${G.canClaimWeekly() ? 'gold' : 'gray'}" data-act="weekly" ${G.canClaimWeekly() ? '' : 'disabled'}>${ico('gift', 20)} Sandığı aç</button>`}</div>`;
      c.setBody(`<p style="text-align:center">Her gün gir, ödülünü al. Bir günü kaçırırsan seri sıfırlanır. Gün, sabit saate (Türkiye 00:00) göre değişir; cihaz saatini değiştirmek işe yaramaz.</p>${trusted ? '' : `<p style="text-align:center;color:#c0182b">${Clock.why()}</p>`}<div class="days">${DAILY_REWARDS.map((r, i) => `<div class="day ${i < doneN ? 'done' : ''} ${can && i === next ? 'today' : ''} ${i === 6 ? 'big' : ''}">Gün ${i + 1}<b>${r.coins} 🪙</b>${r.power ? `<small>+${r.power[1]} ${POWER_INFO[r.power[0]].name}</small>` : ''}${i < doneN ? `<div style="color:#2fd06a">${ico('check', 20)}</div>` : ''}</div>`).join('')}</div>${chest}`);
      c.setFoot(can ? `<button class="btn green" data-act="claim">${ico('gift', 22)} Ödülü Al</button>` : `<button class="btn gray" disabled>${trusted ? 'Bugünkü ödül alındı · yarın gel!' : 'Şu an alınamaz'}</button>`);
    };
    render();
    this.onAct(c, { claim: async () => { await G.claimDaily(); render(); }, weekly: () => { G.claimWeekly(); render(); } });
  }

  // ---------------------------------------------------------------- haftalık sıralama
  leaderboard() {
    const G = this.G; const c = this.modal({ title: 'Haftalık Sıralama', head: 'gold', body: '<p style="text-align:center">Yükleniyor…</p>' });
    const medal = ['🥇', '🥈', '🥉'];
    const fmtLeft = (ms) => { const m = Math.max(0, Math.floor((ms - Clock.now()) / 60000)); const dd = Math.floor(m / 1440), hh = Math.floor((m % 1440) / 60); return dd ? `${dd} gün ${hh} sa` : `${hh} sa ${m % 60} dk`; };
    (async () => {
      const r = await G.backend.leaderboard();
      if (c.closed) return;
      if (!r.ok) { c.setBody(`<p style="text-align:center">Sıralama şu an yüklenemedi. İnternet bağlantını kontrol et.</p>`); return; }
      const name = G.save.data.account.name;
      const rew = (r.rewards || BACKEND.weeklyRewards).map((v, i) => `<div class="rw"><span>${medal[i] || i + 1 + '.'}</span><b>${v} 🪙</b></div>`).join('');
      const rows = r.entries.length ? r.entries.map((e) => `<div class="lbrow ${e.you ? 'you' : ''}"><span class="rk">${medal[e.rank - 1] || e.rank}</span><span class="nm">${e.name.replace(/[<>&]/g, '')}${e.you ? ' (sen)' : ''}</span><b>${e.score}</b></div>`).join('') : '<p style="text-align:center;color:#58649a">Bu hafta henüz puan yok. Bir seviye bitir!</p>';
      c.setBody(`<div class="lb-top"><div><small>Bu haftanın ödülleri</small><div class="rws">${rew}</div></div><div style="text-align:right"><small>Hafta bitimine</small><b>${fmtLeft(r.endsAt)}</b></div></div>
        ${r.local ? `<p class="lb-note">Sunucu bağlı değil: yalnızca bu cihazdaki puanın görünür. Online sıralama için sunucu bağlanmalı (README → Sunucu altyapısı).</p>` : ''}
        <div class="lb">${rows}</div>
        <p style="text-align:center;margin-top:8px;font-size:13px">Senin puanın: <b>${r.me?.score || 0}</b>${r.me?.rank ? ` · Sıran: <b>${r.me.rank}</b>` : ''}</p>
        <p style="font-size:12px;color:#58649a;text-align:center">Puan = seviye başına en iyi sonucun (az hamle = yüksek puan). Aynı seviyeyi tekrar oynayarak puan şişirilemez.</p>
        <div class="row" style="margin-top:6px"><input id="nick" maxlength="20" placeholder="Takma ad" value="${(name || '').replace(/"/g, '')}" class="nick"><button class="btn blue" style="flex:none;width:auto" data-act="setname">Kaydet</button></div>`);
    })();
    this.onAct(c, { setname: async () => { const v = c.q('#nick')?.value.trim(); if (!v || v.length < 2) { this.toast('Takma ad en az 2 karakter olmalı.', 'bad'); return; } const r = await G.backend.setName(v); this.toast(r.ok ? 'Takma ad kaydedildi.' : 'Kaydedilemedi.', r.ok ? 'good' : 'bad'); } });
  }

  // ---------------------------------------------------------------- ayarlar
  settings(inGame) {
    const G = this.G; const c = this.modal({ title: 'Ayarlar', head: '', body: '' });
    const render = () => {
      const s = G.save.data.settings;
      c.setBody(`
        <div class="switch"><span class="lab">${ico('sound', 24)} Ses efektleri</span><button class="tg ${s.sound ? 'on' : ''}" data-act="sound" aria-label="Ses"></button></div>
        <div class="switch"><span class="lab">${ico('vibe', 24)} Titreşim</span><button class="tg ${s.vibe ? 'on' : ''}" data-act="vibe" aria-label="Titreşim"></button></div>
        <div class="switch" style="display:block"><div class="lab" style="margin-bottom:8px">Grafik kalitesi</div><div class="seg">${[['low', 'Düşük'], ['medium', 'Orta'], ['high', 'Yüksek']].map(([k, n]) => `<button class="${s.quality === k ? 'on' : ''}" data-act="q" data-id="${k}">${n}</button>`).join('')}</div></div>
        <div class="switch"><span class="lab">${ico('bell', 24)} Bildirimler (günlük ödül hatırlatması)</span><button class="tg ${G.save.data.notif.enabled ? 'on' : ''}" data-act="notif" aria-label="Bildirimler"></button></div>
        <button class="btn blue" data-act="tut" style="margin-bottom:9px">Eğitimi tekrar göster</button>
        ${inGame ? '' : `<button class="btn red" data-act="reset">İlerlemeyi sıfırla</button>`}
        <p style="margin-top:12px;font-size:12px;color:#58649a;text-align:center">Reklam modu: <b>${ADS.mode === 'test' ? 'TEST (geliştirme)' : ADS.mode === 'admob' ? 'AdMob' : 'Kapalı'}</b><br>Tüm 3D modeller ve sesler kodla üretilmiştir (özgün).</p>`);
    };
    render();
    this.onAct(c, {
      sound: () => { G.save.data.settings.sound = !G.save.data.settings.sound; G.applySettings(); render(); },
      vibe: () => { G.save.data.settings.vibe = !G.save.data.settings.vibe; G.applySettings(); render(); },
      q: (ds) => { G.save.data.settings.quality = ds.id; G.applySettings(); render(); },
      notif: async () => {
        if (G.save.data.notif.enabled) { await G.notifier.disable(); }
        else if (!G.notifier.available()) { this.toast('Bildirimler yalnızca Android uygulamasında çalışır.', 'bad'); }
        else if (!(await G.notifier.enable())) this.toast('Bildirim izni verilmedi.', 'bad');
        render();
      },
      tut: () => { G.resetTutorial(); this.toast('Eğitim bir sonraki 1. ve 2. seviyede tekrar gösterilecek.', 'good'); },
      reset: async () => { if (await this.confirm({ title: 'Emin misin?', text: 'Tüm ilerleme, jetonlar ve açılan öğeler silinecek.', yes: 'Sıfırla', danger: true })) { G.resetProgress(); c.close(); } },
    });
    return c;
  }

  pause() {
    const G = this.G;
    const c = this.modal({
      title: 'Duraklatıldı', closable: false,
      body: `<div class="list" style="gap:10px"><button class="btn green" data-act="resume">${ico('play', 22)} Devam Et</button><button class="btn orange" data-act="restart">${ico('restart', 22)} Yeniden Başla</button><button class="btn blue" data-act="settings">${ico('gear', 22)} Ayarlar</button><button class="btn gray" data-act="menu">${ico('home', 22)} Ana Menü</button></div>`,
    });
    this.onAct(c, { resume: () => { c.close(); G.resume(); }, restart: () => { c.close(); G.restart(); }, settings: () => this.settings(true), menu: () => { c.close(); G.goMenu(); } });
  }

  // ---------------------------------------------------------------- sonuç
  result({ level, stars, coins, canDouble, rewardPower, final, moves, needed, extra, t3, t2, best, score }) {
    const G = this.G;
    const c = this.modal({
      title: 'SEVİYE TAMAMLANDI!', head: 'green', closable: false,
      body: `<div class="stars">${[1, 2, 3].map((i) => ico('star', 58, i <= stars ? 'on' : '')).join('')}</div><div class="reward">${ico('coin', 40)}<span id="rcount">+0</span></div>${rewardPower ? `<p style="text-align:center;color:#2f6bff">Bonus: +1 ${POWER_INFO[rewardPower].name}!</p>` : ''}<p style="text-align:center;color:#58649a;margin-bottom:4px">Seviye ${level} geçildi · <b>${moves}</b> hamle (en az ${needed} gerekir${best && best < moves ? `, rekorun ${best}` : ''})</p><p style="text-align:center;font-size:12.5px;color:#58649a">${stars === 3 ? 'Mükemmel! Neredeyse hatasız.' : stars === 2 ? `3 yıldız için en fazla ${t3} fazla hamle yapmalıydın (sen ${extra}).` : `2 yıldız için en fazla ${t2} fazla hamle gerekir (sen ${extra}).`} Haftalık puan: +${score}</p>`,
      foot: `${canDouble ? `<button class="btn gold dbl" data-act="double">${ico('ad', 22)} Video izle: 2x kazan <small>(+${coins} → +${coins * 2})</small></button>` : ''}<button class="btn ${canDouble ? 'blue' : 'green'}" data-act="next">${ico('play', 22)} Sonraki Seviye</button><button class="btn gray" data-act="menu">${ico('home', 20)} Ana Menü</button>`,
    });
    c.el.querySelectorAll('.stars .ico').forEach((e, i) => { e.style.animationDelay = (i * 0.25) + 's'; });
    const el = c.q('#rcount'); const t0 = performance.now(); let shown = 0;
    const tick = () => { const k = Math.min(1, (performance.now() - t0) / 900); shown = Math.round(coins * k); el.textContent = '+' + shown; if (k < 1 && !c.closed) requestAnimationFrame(tick); else if (k >= 1) G.sound.play('coin'); };
    requestAnimationFrame(tick);
    this.onAct(c, {
      next: () => { c.close(); G.nextLevel(); },
      menu: () => { c.close(); G.goMenu(); },
      double: async (ds, btn) => { if (await G.doubleReward(coins)) { btn.remove(); el.textContent = '+' + (coins * 2); this.toast(`2x ödül alındı: +${coins} jeton daha`, 'good'); } },
    });
  }

  fail({ reason, canSlotAd, canUndo, revivesLeft, adOk, canVip }) {
    const G = this.G;
    const msg = { noslot: 'Park yerlerin doldu ve çıkabilecek otobüs kalmadı!', stuck: 'Hiçbir otobüs hareket edemiyor!', moves: 'Hamle hakkın bitti!', time: 'Süre doldu!' }[reason] || 'Seviye başarısız.';
    const opts = [];
    const can = revivesLeft > 0 && adOk;
    if (can) {
      if (reason === 'moves') opts.push(`<button class="btn gold" data-act="moveAd">${ico('ad', 22)} Reklam izle: +4 hamle</button>`, `<button class="btn orange" data-act="moveCoin">${ico('coin', 22)} ${PRICES.moves} jeton: +4 hamle</button>`);
      else if (reason === 'time') opts.push(`<button class="btn gold" data-act="timeAd">${ico('ad', 22)} Reklam izle: +30 sn</button>`, `<button class="btn orange" data-act="timeCoin">${ico('coin', 22)} ${PRICES.time} jeton: +30 sn</button>`);
      else {
        if (canUndo) opts.push(`<button class="btn blue" data-act="undo">${ico('undo', 22)} Reklam izle: hamleyi geri al</button>`);
        if (canSlotAd) opts.push(`<button class="btn gold" data-act="slotAd">${ico('ad', 22)} Reklam izle: ek park yeri aç<small>(bu seviye)</small></button>`);
      }
    }
    if (canVip && reason !== 'moves' && reason !== 'time') opts.unshift(`<button class="btn purple" data-act="vip">${ico('vip', 22)} VIP ile kurtar <small>(${G.save.data.powerups.vip} hak${G.save.data.powerups.vip ? '' : ' · reklam/jeton'})</small></button>`);
    const pips = Array.from({ length: MAX_REVIVES }, (_, i) => `<i class="${i < MAX_REVIVES - revivesLeft ? 'used' : ''}"></i>`).join('');
    const note = revivesLeft > 0
      ? `<div class="revive-pips">${pips}</div><p style="text-align:center;color:#58649a;font-size:13px">Bu seviyede kalan geri alma/devam hakkı: <b>${revivesLeft}/${MAX_REVIVES}</b>. Reklam izlemek isteğe bağlıdır.</p>`
      : `<div class="revive-pips">${pips}</div><p style="text-align:center;color:#b0182b;font-weight:900">Geri alma hakların bitti (${MAX_REVIVES}/${MAX_REVIVES}). Seviyeyi yeniden başlatmalısın.</p>`;
    const c = this.modal({ title: 'Olmadı!', head: 'red', closable: false, body: `<p style="text-align:center;font-size:17px">${msg}</p>${note}`, foot: `${opts.join('')}<div class="row"><button class="btn green" data-act="restart">${ico('restart', 20)} Yeniden</button><button class="btn gray" data-act="menu">${ico('home', 20)} Menü</button></div>` });
    this.onAct(c, {
      restart: () => { c.close(); G.restart(); }, menu: () => { c.close(); G.goMenu(); },
      vip: () => { c.close(); G.vipRescue(); },
      slotAd: async () => { if (await G.unlockSlot('ad')) { c.close(); G.reviveAfter(); } },
      undo: async () => { if (await G.reviveUndo()) { c.close(); G.reviveAfter(); } },
      moveAd: async () => { if (await G.addMoves('ad')) { c.close(); G.reviveAfter(); } },
      moveCoin: async () => { if (await G.addMoves('coin')) { c.close(); G.reviveAfter(); } },
      timeAd: async () => { if (await G.addTime('ad')) { c.close(); G.reviveAfter(); } },
      timeCoin: async () => { if (await G.addTime('coin')) { c.close(); G.reviveAfter(); } },
    });
  }

  // ---------------------------------------------------------------- oyun içi teklifler
  slotOffer(onDone) {
    const G = this.G; const d = G.save.data; const permN = d.perm.slots; const adOk = ADS.mode !== 'off';
    const c = this.modal({
      title: 'Ekstra Park Yeri', head: 'blue', onClose: onDone,
      body: `<div style="display:flex;justify-content:center;align-items:center;gap:14px;margin:4px 0 10px"><div style="width:44px;height:44px;border-radius:12px;background:#2f6bff;color:#fff;font:900 28px/44px inherit;text-align:center;box-shadow:0 3px 0 rgba(0,0,0,.25)">P</div><div style="width:46px;height:84px;border-radius:12px;border:4px dashed #8b97b8;background:#aab4cc"></div><b style="font-size:38px;color:#ffb800;text-shadow:0 2px 0 rgba(0,0,0,.2)">+1</b></div><p style="text-align:center;font-weight:900;margin:0">Oynamaya devam etmek için +1 park yeri al!<br><small style="color:#58649a">Sadece bu seviye için geçerli</small></p>`,
      foot: `<div style="display:flex;gap:10px;width:100%"><button class="btn orange" style="flex:1" data-act="coin">${ico('coin', 24)} ${PRICES.extraSlot}</button>${adOk ? `<button class="btn green" style="flex:1" data-act="ad">${ico('ad', 24)} ÜCRETSİZ</button>` : ''}</div>
        ${d.powerups.extraSlot > 0 ? `<button class="btn blue" data-act="item">${ico('plus', 20)} Envanterden kullan (${d.powerups.extraSlot})</button>` : ''}
        ${permN < 3 ? `<button class="btn purple" data-act="perm">${ico('vip', 20)} Kalıcı Premium alan · ${PRICES.permSlot[permN]} <small>(${permN + 1}/3)</small></button>` : ''}`,
    });
    this.onAct(c, {
      ad: async () => { if (await G.unlockSlot('ad')) c.close(); }, coin: async () => { if (await G.unlockSlot('coin')) c.close(); },
      item: async () => { if (await G.unlockSlot('item')) c.close(); }, perm: () => { if (G.buyPermSlot(true)) c.close(); },
    });
  }

  powerBuy(kind) {
    const G = this.G; const p = POWER_INFO[kind];
    const c = this.modal({
      title: p.name, head: 'blue', body: `<p>${p.desc}</p><p style="color:#c98a00;font-weight:900">Elinde kalmadı.</p>${kind === 'vip' ? `<p style="font-size:13px;color:#58649a">Satın alınca VIP hakkı envanterine eklenir; sonra VIP düğmesine dokunup otobüsü seçersin.</p>` : ''}`,
      foot: `${G.save.data.coins >= p.price ? `<button class="btn gold" data-act="buy">${ico('coin', 22)} Satın al · ${p.price} jeton</button>` : `<button class="btn orange" data-act="needcoins">${ico('coin', 22)} Jeton yetmiyor · Jeton al</button>`}${ADS.mode !== 'off' ? `<button class="btn green" data-act="ad">${ico('ad', 22)} Reklam izle: +1 hak</button>` : ''}`,
    });
    this.onAct(c, { buy: () => { if (G.buyPower(kind)) c.close(); }, needcoins: () => { c.close(); this.shop('coins'); }, ad: async () => { if (await G.adPower(kind)) c.close(); } });
  }

  convertDialog(busInfo) {
    const G = this.G;
    let sel = null;
    const c = this.modal({ title: 'Otobüsü Değiştir', head: 'purple', body: '', foot: '' });
    const render = () => {
      const colors = busInfo.colors.map((ci) => `<button class="opt ${sel?.type === 'color' && sel.v === ci ? 'sel' : ''}" data-act="pickc" data-v="${ci}"><div class="dotc" style="background:${hex6(PALETTES[G.save.data.equipped.palette][ci])}"></div>${COLORS[ci].name}</button>`).join('');
      const sizeOpts = [];
      if (busInfo.canSeat) sizeOpts.push(`<button class="opt ${sel?.type === 'seat' ? 'sel' : ''}" data-act="picks"><div style="color:#2fb36a">${ico('people', 34)}</div>Koltuk ekle<small style="color:#58649a">${busInfo.seats} → ${busInfo.seats + 1} koltuk</small></button>`);
      if (busInfo.canGrow) sizeOpts.push(`<button class="opt ${sel?.type === 'grow' ? 'sel' : ''}" data-act="pickg"><div style="color:#7a4dff">${ico('bus', 34)}</div>Uzat<small style="color:#58649a">${busInfo.seats} → ${busInfo.seats + 2} koltuk</small></button>`);
      c.setBody(`<p>Seçili otobüsün rengini değiştir ya da kapasitesini artır. Daha çok koltuk, o renkten daha çok yolcuyu taşır; bulmaca bozulmaz.</p>
        ${busInfo.colors.length ? `<b>Renk (kapasite ${busInfo.seats} sabit)</b><div class="opts" style="margin-top:6px">${colors}</div>` : '<p style="color:#58649a">Kalan yolcu renkleri için başka renk yok.</p>'}
        ${sizeOpts.length ? `<b>Kapasite</b><div class="opts" style="margin-top:6px">${sizeOpts.join('')}</div>` : ''}
        <p style="font-size:12px;color:#58649a">Bu seviyede kalan hak: <b>${busInfo.left}</b></p>`);
      const price = sel?.type === 'seat' ? PRICES.seat : PRICES.convert;
      c.setFoot(sel ? `<button class="btn gold" data-act="ad">${ico('ad', 22)} Reklam izle ve uygula</button><button class="btn orange" data-act="coin">${ico('coin', 22)} ${price} jeton ile uygula</button>` : `<button class="btn gray" disabled>Bir seçenek seç</button>`);
    };
    render();
    this.onAct(c, {
      pickc: (ds) => { sel = { type: 'color', v: +ds.v }; render(); }, pickg: () => { sel = { type: 'grow' }; render(); }, picks: () => { sel = { type: 'seat' }; render(); },
      ad: async () => { if (await G.applyConvert(busInfo.id, sel, 'ad')) c.close(); }, coin: async () => { if (await G.applyConvert(busInfo.id, sel, 'coin')) c.close(); },
    });
  }
}
void VIP_COLOR; void dayKey; void QUEST_POOL; void BUS_STYLES;
