// Eğitim durum makinesi: yalnızca 1. seviye (hareket + eşleştirme).
// Parmak, gerçek oyun nesnesinin ekran konumunu her karede izler (kamera hareket etse de doğru yerde kalır).
import { ico } from './icons.js';
import * as E from './engine.js';

const $ = (s) => document.querySelector(s);

export class Tutorial {
  constructor(G) {
    this.G = G; this.el = $('#tut'); this.active = false; this.steps = []; this.i = -1; this.cur = null; this.t = 0; this.level = 0;
  }

  start(n) {
    const G = this.G; this.stop(); this.level = n; const st = G.state;
    const sol = G.lvl.stages[0].solution || [];
    if (n === 1) {
      this.steps = [
        { kind: 'say', pos: 'mid', text: 'Hoş geldin! Otobüsleri doğru sırayla çıkararak renkli yolcuları taşıyacaksın.', ok: 'Başla' },
        { kind: 'tap', bus: 0, text: 'Otobüsü hareket ettirmek için parmağınla sürükle. Önce çıkış yolunu aç!' },
        { kind: 'wait', ms: 2600, text: 'Yolcuların rengini kontrol et. Kırmızı yolcular kırmızı otobüse biner.', focus: 'queue' },
        { kind: 'idle', text: 'Harika! Yolcular otobüse biniyor.' },
        { kind: 'tap', bus: 1, text: 'Şimdi mavi otobüsün yolu açık. Sürükle!' },
        { kind: 'idle', text: 'Yolcular yürüyerek biniyor…' },
        { kind: 'tap', bus: 2, text: 'Son otobüs! Hepsini taşı.' },
        { kind: 'end' },
      ];
    }
    this.active = true; this.i = -1; this.G.scene.tapFilter = (id) => this.allow(id); this.next();
  }

  stop() {
    this.active = false; this.cur = null; this.el.hidden = true; this.el.innerHTML = '';
    if (this.G.scene) { this.G.scene.tapFilter = null; this.G.scene.clearGlows?.(); }
  }

  allow(id) { return !this.active ? true : this.cur?.kind === 'tap' ? id === this.cur.bus : false; }

  next() {
    this.i++; const s = this.steps[this.i]; this.cur = s; this.t = 0; this.G.scene.clearGlows();
    if (!s || s.kind === 'end') { this.finish(); return; }
    this.render(s);
    if (s.kind === 'tap') this.G.scene.setGlow(s.bus, 0xffe066);
    if (s.kind === 'wait') this.timer = setTimeout(() => this.next(), s.ms);
    if (s.kind === 'vip') {
      if (s.bus !== undefined) this.G.scene.setGlow(s.bus, 0xffd45a);
      this.el.hidden = true;
      this.G.ui.vipPreview(() => { this.G.ui.toast('Altın VIP otobüse dokunarak deneyebilirsin (isteğe bağlı).', 'good'); this.next(); });
    }
    if (s.kind === 'idle' && this.G.scene.isBusy() === false && !this.G.scene.isTraveling() && this.G.scene.idleFired) { /* zaten boşta */ this.t = -1; }
  }

  render(s) {
    this.el.hidden = false;
    const text = s.text ? `<div class="tut-bubble ${s.pos || 'top'}">${s.text}${s.kind === 'say' ? `<button class="btn green" data-t="ok">${s.ok || 'Tamam'}</button>` : ''}${s.kind === 'slot' ? `<div class="row"><button class="btn gray" data-t="skip">Atla</button><button class="btn gold" data-t="show">${ico('ad', 20)} Göster</button></div>` : ''}</div>` : '';
    this.el.innerHTML = `${text}<div class="tut-ring" hidden><i></i></div><div class="tut-finger" hidden>${ico('finger', 54)}</div>`;
    this.ring = this.el.querySelector('.tut-ring'); this.fing = this.el.querySelector('.tut-finger');
    this.el.querySelectorAll('[data-t]').forEach((b) => b.addEventListener('click', () => {
      this.G.sound.play('click');
      if (b.dataset.t === 'show') { this.G.ui.slotOffer(() => this.next()); this.el.hidden = true; } else this.next();
    }));
  }

  // oyun olayları
  onMove(id) { if (this.active && this.cur?.kind === 'tap' && id === this.cur.bus) { this.G.scene.setGlow(id, null); this.next(); } }
  onIdle() { if (this.active && this.cur?.kind === 'idle') this.next(); }

  finish() {
    const G = this.G; this.stop();
    if (G.state && this.level === 2) G.ui.toast('Eğitim tamamlandı! Seviyeyi bitirmek için devam et.', 'good');
  }

  update(dt) {
    if (!this.active || !this.cur) return;
    this.t += dt; const s = this.cur; const sc = this.G.scene;
    if (s.kind === 'idle' && this.t > 0.4 && sc.idleFired && !sc.isBusy()) { this.next(); return; }
    let target = null, dir = null;
    if (s.kind === 'tap') {
      const p0 = sc.busScreenPos(s.bus); const b = this.G.state.buses[s.bus];
      if (p0 && b && b.st === 'board') {
        const d = E.DIRS[b.dir]; const vis = sc.busVis.get(s.bus).g.position;
        const p1 = sc.project(vis.x + d.x * 2.2, 0.6, vis.z + d.y * 2.2);
        const k = (this.t % 1.5) / 1.5; const e = k < 0.2 ? 0 : (k - 0.2) / 0.8;
        target = { x: p0.x + (p1.x - p0.x) * Math.min(1, e) * 0.45, y: p0.y + (p1.y - p0.y) * Math.min(1, e) * 0.45, a: k < 0.12 ? k / 0.12 : e > 0.85 ? (1 - e) / 0.15 : 1, ring: p0 };
      }
    } else if (s.kind === 'slot') {
      const i = this.G.state.slotOpen.findIndex((o) => !o);
      if (i >= 0) { const p = sc.slotScreenPos(i); const bob = Math.sin(this.t * 6) * 6; target = { x: p.x, y: p.y + bob, a: 1, ring: p }; }
    } else if (s.focus === 'slots') {
      const p = sc.slotScreenPos(2); target = { x: p.x, y: p.y + Math.sin(this.t * 6) * 6, a: 1, ring: p };
    } else if (s.focus === 'queue') {
      const p = sc.queueScreenPos(); target = { x: p.x, y: p.y + Math.sin(this.t * 6) * 6, a: 1, ring: p };
    }
    const rect = $('#stage').getBoundingClientRect();
    if (target && this.fing) {
      this.fing.hidden = false; this.fing.style.opacity = target.a; this.fing.style.transform = `translate(${rect.left + target.x}px,${rect.top + target.y}px)`;
      this.ring.hidden = false; this.ring.style.transform = `translate(${rect.left + target.ring.x}px,${rect.top + target.ring.y}px)`;
    } else if (this.fing) { this.fing.hidden = true; this.ring.hidden = true; }
  }
}
