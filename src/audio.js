// Özgün, WebAudio ile sentezlenen ses efektleri (lisans sorunu yok, dosya boyutu yok). Ses ve titreşim ayrı kapatılabilir.
export class Sound {
  constructor() { this.ctx = null; this.sound = true; this.vibe = true; this.last = {}; }
  unlock() {
    if (!this.ctx) { const AC = window.AudioContext || window.webkitAudioContext; if (AC) { try { this.ctx = new AC(); } catch { /* yok */ } } }
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  }
  setSound(b) { this.sound = b; }
  setVibe(b) { this.vibe = b; }
  haptic(ms = 12) {
    if (!this.vibe) return;
    try {
      const h = window.Capacitor?.Plugins?.Haptics;
      if (h?.vibrate) { h.vibrate({ duration: ms }); return; }
      navigator.vibrate?.(ms);
    } catch { /* yok */ }
  }
  tone(freq, dur, { type = 'sine', vol = 0.18, slide = 0, delay = 0, attack = 0.005, lp = 0 } = {}) {
    const c = this.ctx; if (!c) return;
    const t0 = c.currentTime + delay;
    const o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t0);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq + slide), t0 + dur);
    g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(vol, t0 + attack); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    let node = o;
    if (lp) { const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = lp; o.connect(f); node = f; }
    node.connect(g); g.connect(c.destination); o.start(t0); o.stop(t0 + dur + 0.05);
  }
  noise(dur, { vol = 0.12, lp = 600, delay = 0, hp = 0 } = {}) {
    const c = this.ctx; if (!c) return;
    const n = Math.floor(c.sampleRate * dur), buf = c.createBuffer(1, n, c.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n);
    const s = c.createBufferSource(); s.buffer = buf;
    const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = lp;
    const g = c.createGain(); g.gain.value = vol; s.connect(f); let last = f;
    if (hp) { const h = c.createBiquadFilter(); h.type = 'highpass'; h.frequency.value = hp; f.connect(h); last = h; }
    last.connect(g); g.connect(c.destination); s.start(c.currentTime + delay);
  }
  throttled(name, ms) { const now = performance.now(); if (now - (this.last[name] || 0) < ms) return false; this.last[name] = now; return true; }
  play(name) {
    if (!this.sound) { if (name === 'error') this.haptic(40); return; }
    this.unlock(); if (!this.ctx) return;
    switch (name) {
      case 'click': this.tone(520, 0.07, { type: 'triangle', vol: 0.12, slide: 180 }); break;
      case 'engine': if (!this.throttled('engine', 150)) return; this.noise(0.45, { vol: 0.09, lp: 380 }); this.tone(70, 0.5, { type: 'sawtooth', vol: 0.05, slide: 60, lp: 300 }); this.haptic(10); break;
      case 'depart': this.noise(0.6, { vol: 0.08, lp: 500 }); this.tone(90, 0.7, { type: 'sawtooth', vol: 0.05, slide: 90, lp: 320 }); this.tone(520, 0.12, { type: 'square', vol: 0.05, delay: 0.05 }); this.tone(520, 0.12, { type: 'square', vol: 0.05, delay: 0.2 }); break;
      case 'park': this.tone(140, 0.16, { type: 'sine', vol: 0.22, slide: -80 }); this.noise(0.1, { vol: 0.1, lp: 900 }); this.haptic(18); break;
      case 'board': if (!this.throttled('board', 55)) return; this.tone(640 + Math.random() * 160, 0.09, { type: 'sine', vol: 0.12, slide: 420 }); break;
      case 'step': if (!this.throttled('step', 90)) return; this.noise(0.03, { vol: 0.03, lp: 2500 }); break;
      case 'bump': this.tone(120, 0.16, { type: 'square', vol: 0.15, slide: -70, lp: 600 }); this.tone(55, 0.28, { type: 'sine', vol: 0.22, slide: -15 }); this.haptic(70); break;
      case 'error': this.tone(150, 0.2, { type: 'sawtooth', vol: 0.12, slide: -40, lp: 700 }); this.haptic(45); break;
      case 'coin': this.tone(990, 0.08, { type: 'square', vol: 0.07 }); this.tone(1480, 0.18, { type: 'square', vol: 0.07, delay: 0.07 }); break;
      case 'vip': [523, 659, 784, 1047, 1319].forEach((f, i) => this.tone(f, 0.28, { type: 'triangle', vol: 0.11, delay: i * 0.06 })); this.haptic(30); break;
      case 'unlock': this.tone(300, 0.4, { type: 'sine', vol: 0.14, slide: 900 }); [1200, 1600, 2000].forEach((f, i) => this.tone(f, 0.2, { type: 'triangle', vol: 0.06, delay: 0.2 + i * 0.07 })); this.haptic(30); break;
      case 'convert': case 'whoosh': this.noise(0.4, { vol: 0.07, lp: 1800, hp: 300 }); this.tone(400, 0.4, { type: 'sine', vol: 0.09, slide: 600 }); break;
      case 'win': [523, 659, 784, 1047, 784, 1047, 1319].forEach((f, i) => this.tone(f, 0.3, { type: 'triangle', vol: 0.13, delay: i * 0.1 })); this.haptic(60); break;
      case 'alarm': if (!this.throttled('alarm', 2500)) return; [0, 0.18, 0.36].forEach((d) => { this.tone(880, 0.12, { type: 'square', vol: 0.08, delay: d, lp: 2400 }); this.tone(660, 0.12, { type: 'square', vol: 0.06, delay: d + 0.09, lp: 2400 }); }); this.haptic(60); break;
      case 'full': if (!this.throttled('full', 120)) return; [784, 988, 1319].forEach((f, i) => this.tone(f, 0.16, { type: 'triangle', vol: 0.1, delay: i * 0.05 })); this.haptic(20); break;
      case 'lose': [392, 330, 262, 196].forEach((f, i) => this.tone(f, 0.3, { type: 'sine', vol: 0.13, delay: i * 0.14 })); this.haptic(80); break;
      default: break;
    }
  }
}
