// Prosedürel 3D modeller: otobüsler, yolcular, çevre parçaları. Tüm geometri/materyal önbelleklidir.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { COLORS, VIP_COLOR } from './config.js';

const gcache = new Map();
function rbox(w, h, l, r, seg = 3) {
  const k = `rb${w}|${h}|${l}|${r}`;
  if (!gcache.has(k)) gcache.set(k, new RoundedBoxGeometry(w, h, l, seg, r));
  return gcache.get(k);
}
function cached(key, make) { if (!gcache.has(key)) gcache.set(key, make()); return gcache.get(key); }

const mcache = new Map();
function mat(key, make) { if (!mcache.has(key)) mcache.set(key, make()); return mcache.get(key); }

export const PALETTES = {
  vivid:  COLORS.map((c) => c.hex),
  pastel: [0x7fb0ff, 0xff8f98, 0xffdf7a, 0x7fe39a, 0xc59bff, 0x82e8f2, 0xffa3d5],
  neon:   [0x1f6bff, 0xff1f3d, 0xffee00, 0x00ff55, 0xb100ff, 0x00f0ff, 0xff2fb0],
  retro:  [0x3d6fb4, 0xc4473b, 0xe0a82e, 0x4a9a5c, 0x7d5aa6, 0x3fa7a3, 0xd9779d],
};
export const RIMS = {
  steel:  { color: 0xcfd6de, metal: 0.9, rough: 0.25 },
  gold:   { color: 0xffc83a, metal: 1.0, rough: 0.2 },
  neon:   { color: 0x35f0ff, metal: 0.4, rough: 0.3, emissive: 0x0a9fb0 },
  chrome: { color: 0xf5f8ff, metal: 1.0, rough: 0.08 },
};
export const VIP_SKINS = {
  gold:     { body: 0xf5b72a, trim: 0xfff0b0, glow: 0xffd45a, label: 'Altın' },
  platinum: { body: 0xd9e1ec, trim: 0xffffff, glow: 0xbfe6ff, label: 'Platin' },
  royal:    { body: 0x6a2cff, trim: 0xffd65a, glow: 0xb58bff, label: 'Kraliyet' },
};

export function paint(hex) {
  return mat('paint' + hex, () => new THREE.MeshPhysicalMaterial({ color: hex, roughness: 0.42, metalness: 0.0, clearcoat: 0.35, clearcoatRoughness: 0.3 }));
}
function paintLux(hex) {
  return mat('paintlux' + hex, () => new THREE.MeshPhysicalMaterial({ color: hex, roughness: 0.2, metalness: 0.4, clearcoat: 1, clearcoatRoughness: 0.08 }));
}
const lighten = (hex, a) => new THREE.Color(hex).lerp(new THREE.Color(0xffffff), a).getHex();
const darken = (hex, a) => new THREE.Color(hex).lerp(new THREE.Color(0x000000), a).getHex();

const M = {
  glassDark: () => mat('glassdark', () => new THREE.MeshStandardMaterial({ color: 0x14202e, roughness: 0.04, metalness: 0.5, transparent: true, opacity: 0.72, depthWrite: false })),
  chrome: () => mat('chromeb', () => new THREE.MeshStandardMaterial({ color: 0xf2f5fb, metalness: 1, roughness: 0.1 })),
  led: () => mat('ledbar', () => new THREE.MeshStandardMaterial({ color: 0x9ff8ff, emissive: 0x35e6ff, emissiveIntensity: 1.4, roughness: 0.2 })),
  glass: () => mat('glass', () => new THREE.MeshStandardMaterial({ color: 0x3a5f86, roughness: 0.05, metalness: 0.3, transparent: true, opacity: 0.42, depthWrite: false })),
  interior: () => mat('interior', () => new THREE.MeshStandardMaterial({ color: 0x9fb4cc, roughness: 0.9, side: THREE.BackSide })),
  tire: () => mat('tire', () => new THREE.MeshStandardMaterial({ color: 0x1a1c22, roughness: 0.85 })),
  bumper: () => mat('bumper', () => new THREE.MeshStandardMaterial({ color: 0x3b4252, roughness: 0.5, metalness: 0.2 })),
  head: () => mat('headlight', () => new THREE.MeshStandardMaterial({ color: 0xfff6c8, emissive: 0xffe9a0, emissiveIntensity: 0.9, roughness: 0.2 })),
  tail: () => mat('taillight', () => new THREE.MeshStandardMaterial({ color: 0xff3040, emissive: 0xff1020, emissiveIntensity: 0.7, roughness: 0.3 })),
  white: () => mat('white', () => new THREE.MeshStandardMaterial({ color: 0xf4f6fa, roughness: 0.5 })),
  dark: () => mat('darkpl', () => new THREE.MeshStandardMaterial({ color: 0x2a2f3a, roughness: 0.7 })),
};

export function rimMaterial(name) {
  const r = RIMS[name] || RIMS.steel;
  return mat('rim' + name, () => new THREE.MeshStandardMaterial({ color: r.color, metalness: r.metal, roughness: r.rough, emissive: r.emissive || 0x000000, emissiveIntensity: r.emissive ? 0.6 : 0 }));
}
function goldMat() { return mat('gold', () => new THREE.MeshStandardMaterial({ color: 0xffc83a, metalness: 1, roughness: 0.22, emissive: 0x3a2400, emissiveIntensity: 0.4 })); }

// ---------- Dokular ----------
let _arrowTex = null;
export function arrowTexture() {
  if (_arrowTex) return _arrowTex;
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  g.translate(64, 64);
  g.lineJoin = 'round';
  const draw = () => { g.beginPath(); g.moveTo(0, -46); g.lineTo(34, -6); g.lineTo(13, -6); g.lineTo(13, 42); g.lineTo(-13, 42); g.lineTo(-13, -6); g.lineTo(-34, -6); g.closePath(); };
  draw(); g.lineWidth = 14; g.strokeStyle = 'rgba(20,30,50,.55)'; g.stroke();
  draw(); g.fillStyle = '#ffffff'; g.fill();
  _arrowTex = new THREE.CanvasTexture(c); _arrowTex.anisotropy = 4; _arrowTex.colorSpace = THREE.SRGBColorSpace;
  return _arrowTex;
}
function plateTexture(text, fg, bg) {
  return cached('plate' + text + fg + bg, () => {
    const c = document.createElement('canvas'); c.width = 256; c.height = 128;
    const g = c.getContext('2d');
    g.fillStyle = bg; g.fillRect(0, 0, 256, 128);
    g.fillStyle = fg; g.font = '900 78px system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText(text, 128, 70);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  });
}

// ---------- Otobüs ----------
export const BUS_STYLES = {
  city:   { label: 'Şehir Otobüsü', price: 0 },
  mini:   { label: 'Minibüs', price: 250 },
  modern: { label: 'Modern Otobüs', price: 1200 },
  luxury: { label: 'Lüks Otobüs', price: 2500 },
  school: { label: 'Okul Servisi', price: 450 },
  coach:  { label: 'Konfor Otobüsü', price: 800 },
  express: { label: 'Ekspres', price: 1500 },
  tourist: { label: 'Panoramik Turist', price: 1800 },
  sport:  { label: 'Yarış Otobüsü', price: 2000 },
};

export function busLength(len) { return len * 1.0 - 0.12; }
export const BUS_WIDTH = 0.76;
export const PARK_SCALE = { 1: 0.85, 2: 0.8, 3: 0.75, 4: 0.72 };


// ---------- Taksi (1 hücrelik küçük araç, 4 kişilik) ----------
function checkerTexture() {
  return cached('checker', () => {
    const c = document.createElement('canvas'); c.width = 256; c.height = 32; const g = c.getContext('2d');
    for (let i = 0; i < 16; i++) for (let j = 0; j < 2; j++) { g.fillStyle = (i + j) % 2 ? '#14171f' : '#ffffff'; g.fillRect(i * 16, j * 16, 16, 16); }
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  });
}
function buildTaxi(o) {
  const Lz = busLength(1), W = BUS_WIDTH;
  const g = new THREE.Group();
  const bodyMat = paint(o.hex), roofMat = paint(lighten(o.hex, 0.12));
  const parts = { wheels: [], seatMarks: [], body: [], bodyMat, style: 'taxi' };
  const y0 = 0.1;
  const low = new THREE.Mesh(rbox(W - 0.02, 0.27, Lz, 0.12), bodyMat); low.position.y = y0 + 0.135; low.castShadow = true; g.add(low); parts.body.push(low);
  // kabin (arka tarafa kaydırılmış, kısa)
  const cabL = Lz * 0.62, cabH = 0.25, cabY = y0 + 0.27, cz = Lz * 0.08;
  const interior = new THREE.Mesh(rbox(W - 0.16, cabH, cabL - 0.04, 0.03), M.interior()); interior.position.set(0, cabY + cabH / 2, cz); g.add(interior);
  const roof = new THREE.Mesh(rbox(W - 0.1, 0.07, cabL + 0.04, 0.04), roofMat); roof.position.set(0, cabY + cabH + 0.03, cz); roof.castShadow = true; g.add(roof); parts.body.push(roof);
  const roofTop = cabY + cabH + 0.065;
  for (let side = -1; side <= 1; side += 2) {
    const gl = new THREE.Mesh(rbox(0.03, cabH - 0.04, cabL - 0.1, 0.012, 2), M.glass()); gl.position.set(side * (W / 2 - 0.09), cabY + cabH / 2, cz); g.add(gl);
  }
  const ws = new THREE.Mesh(rbox(W - 0.2, cabH - 0.04, 0.03, 0.012, 2), M.glass()); ws.position.set(0, cabY + cabH / 2, cz - cabL / 2 + 0.01); ws.rotation.x = -0.25; g.add(ws);
  const rw = ws.clone(); rw.position.z = cz + cabL / 2 - 0.01; rw.rotation.x = 0.25; g.add(rw);
  // damalı şerit (her iki yan)
  for (let side = -1; side <= 1; side += 2) {
    const st = new THREE.Mesh(new THREE.PlaneGeometry(Lz - 0.14, 0.07), new THREE.MeshBasicMaterial({ map: checkerTexture() }));
    st.rotation.y = side * Math.PI / 2; st.position.set(side * (W / 2 - 0.009), y0 + 0.15, 0); g.add(st);
  }
  // çatı TAXI tabelası (yanan)
  const signTex = plateTexture('TAXI', '#2a1a00', '#ffd23f');
  const signM = [mat('taxiside', () => new THREE.MeshStandardMaterial({ color: 0xffd23f, emissive: 0xffb800, emissiveIntensity: 0.7 })), new THREE.MeshStandardMaterial({ map: signTex, emissive: 0xffc400, emissiveMap: signTex, emissiveIntensity: 0.6 })];
  const sign = new THREE.Mesh(rbox(0.3, 0.09, 0.14, 0.02, 2), signM[0]); sign.position.set(0, roofTop + 0.045, cz); g.add(sign);
  for (const sd of [-1, 1]) { const f = new THREE.Mesh(new THREE.PlaneGeometry(0.26, 0.075), signM[1]); f.position.set(0, roofTop + 0.045, cz + sd * 0.0715); f.rotation.y = sd > 0 ? 0 : Math.PI; g.add(f); }
  // tampon, farlar, stoplar, ızgara
  const fb = new THREE.Mesh(rbox(W - 0.06, 0.07, 0.07, 0.03, 2), M.bumper()); fb.position.set(0, y0 + 0.06, -Lz / 2 + 0.01); g.add(fb);
  const rb = fb.clone(); rb.position.z = Lz / 2 - 0.01; g.add(rb);
  for (let side = -1; side <= 1; side += 2) {
    const hl = new THREE.Mesh(cached('hl', () => new THREE.SphereGeometry(0.058, 12, 8)), M.head()); hl.scale.set(1, 0.8, 0.5); hl.position.set(side * 0.22, y0 + 0.2, -Lz / 2 + 0.01); g.add(hl);
    const tl = new THREE.Mesh(cached('tl', () => new THREE.BoxGeometry(0.1, 0.045, 0.03)), M.tail()); tl.position.set(side * 0.24, y0 + 0.22, Lz / 2 - 0.005); g.add(tl);
  }
  const grill = new THREE.Mesh(rbox(0.22, 0.06, 0.03, 0.015, 2), M.dark()); grill.position.set(0, y0 + 0.17, -Lz / 2 + 0.008); g.add(grill);
  // tekerlekler
  const rimM = rimMaterial(o.rim || 'steel');
  for (const z of [-Lz / 2 + 0.22, Lz / 2 - 0.22]) for (let side = -1; side <= 1; side += 2) {
    const arch = new THREE.Mesh(cached('arch', () => new THREE.CircleGeometry(0.2, 20)), mat('archm', () => new THREE.MeshStandardMaterial({ color: 0x1a1e28, roughness: 0.9 })));
    arch.rotation.y = side * Math.PI / 2; arch.position.set(side * (W / 2 - 0.004), 0.17, z); g.add(arch);
    const wh = new THREE.Group();
    const tire = new THREE.Mesh(cached('tire', () => new THREE.CylinderGeometry(0.15, 0.15, 0.12, 20)), M.tire()); tire.rotation.z = Math.PI / 2; tire.castShadow = true;
    const hub = new THREE.Mesh(cached('hub', () => new THREE.CylinderGeometry(0.085, 0.085, 0.125, 16)), rimM); hub.rotation.z = Math.PI / 2;
    const sp = new THREE.Mesh(cached('spoke', () => new THREE.BoxGeometry(0.13, 0.15, 0.02)), M.dark()); sp.position.x = side * 0.05; sp.scale.set(1, 0.7, 1);
    const sp2 = sp.clone(); sp2.rotation.x = Math.PI / 2;
    wh.add(tire, hub, sp, sp2); wh.position.set(side * (W / 2 - 0.04), 0.15, z); g.add(wh); parts.wheels.push(wh);
  }
  // 4 koltuk (2x2)
  const seatN = o.seats || 4;
  for (let i = 0; i < seatN; i++) {
    const r = Math.floor(i / 2), cI = i % 2;
    const m = new THREE.Mesh(cached('seathead', () => new THREE.SphereGeometry(0.075, 12, 10)), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 }));
    m.position.set((cI === 0 ? -1 : 1) * 0.15, cabY + cabH * 0.55, cz + (r === 0 ? -0.1 : 0.1)); m.scale.setScalar(0.92);
    const body = new THREE.Mesh(cached('seatbody', () => new THREE.CapsuleGeometry(0.07, 0.05, 4, 8)), m.material); body.position.set(0, -0.1, 0); m.add(body);
    m.visible = false; g.add(m); parts.seatMarks.push(m);
  }
  if (!o.noArrow) {
    const arrow = new THREE.Mesh(cached('arrowplane', () => new THREE.PlaneGeometry(1, 1)), new THREE.MeshBasicMaterial({ map: arrowTexture(), transparent: true, depthWrite: false }));
    arrow.rotation.x = -Math.PI / 2; arrow.scale.set(0.42, 0.42, 1); arrow.position.set(0, roofTop + 0.105, -Lz * 0.2 + cz * 0.5); arrow.renderOrder = 3; g.add(arrow); parts.arrow = arrow;
  }
  g.userData.parts = parts; g.userData.dims = { Lz, W, roofTop: roofTop + 0.09 };
  return g;
}

/**
 * @param {{len:number, hex:number, style?:string, vip?:boolean, rim?:string, vipSkin?:string, seats:number, noArrow?:boolean}} o
 * Yerel eksen: uzunluk Z, ön = -Z, yukarı = +Y.
 */
export function buildBus(o) {
  if (o.len === 1 && !o.vip) return buildTaxi(o);
  const style = o.vip ? 'coach' : (o.style || 'city');
  const Lz = busLength(o.len);
  const W = BUS_WIDTH;
  const skin = VIP_SKINS[o.vipSkin || 'gold'];
  const bodyHex = o.vip ? skin.body : o.hex;
  const g = new THREE.Group();
  const lux = style === 'luxury', modern = style === 'modern';
  
  const bodyMat = lux ? paintLux(bodyHex) : paint(bodyHex);
  const roofMat = o.vip ? paint(skin.trim) : style === 'express' ? paint(0xf4f7fb) : style === 'sport' ? paint(0x20232c) : style === 'tourist' ? paint(darken(bodyHex, 0.05)) : lux ? paintLux(lighten(bodyHex, 0.06)) : modern ? paint(darken(bodyHex, 0.08)) : paint(lighten(bodyHex, 0.12));
  const parts = { wheels: [], seatMarks: [], body: [], bodyMat, style };

  const lowH = style === 'mini' ? 0.44 : modern ? 0.32 : lux ? 0.36 : 0.38;
  const cabH = style === 'school' ? 0.38 : style === 'mini' ? 0.24 : modern ? 0.35 : lux ? 0.31 : 0.3;
  const y0 = 0.12;
  // alt gövde
  const low = new THREE.Mesh(rbox(W, lowH, Lz, style === 'mini' ? 0.16 : modern ? 0.15 : 0.11), bodyMat);
  low.position.y = y0 + lowH / 2; low.castShadow = true; g.add(low); parts.body.push(low);
  // kabin: iç mekân + camlar + direkler + tavan
  const cabW = W - 0.06, cabL = Lz - (style === 'mini' ? 0.2 : 0.14);
  const cabY = y0 + lowH;
  const interior = new THREE.Mesh(rbox(cabW - 0.06, cabH, cabL - 0.06, 0.03), M.interior());
  interior.position.y = cabY + cabH / 2; g.add(interior);
  const roof = new THREE.Mesh(rbox(W - 0.02, 0.09, cabL + 0.06, 0.04), roofMat);
  roof.position.y = cabY + cabH + 0.04; roof.castShadow = true; g.add(roof); parts.body.push(roof);
  const roofTop = cabY + cabH + 0.085;
  // yan camlar + direkler
  const panes = style === 'coach' || modern ? 1 : Math.max(1, Math.round((cabL - 0.2) / 0.42));
  const paneGap = style === 'coach' || modern ? 0 : 0.07;
  const usable = cabL - 0.22;
  const paneL = (usable - paneGap * (panes - 1)) / panes;
  for (let side = -1; side <= 1; side += 2) {
    for (let i = 0; i < panes; i++) {
      const z = -usable / 2 + paneL / 2 + i * (paneL + paneGap);
      const gl = new THREE.Mesh(rbox(0.03, cabH - 0.06, paneL, 0.012, 2), lux ? M.glassDark() : M.glass());
      gl.position.set(side * (cabW / 2 - 0.005), cabY + cabH / 2, z);
      g.add(gl);
    }
    // direk şeridi (gövde rengi, kabin çevresi)
    const pil = new THREE.Mesh(rbox(0.04, cabH, cabL, 0.015, 2), bodyMat);
    pil.position.set(side * (cabW / 2 - 0.03), cabY + cabH / 2, 0); pil.scale.set(0.6, 0.12, 1);
    pil.position.y = cabY + 0.01; g.add(pil);
  }
  // ön / arka cam
  const wsh = new THREE.Mesh(rbox(cabW - 0.1, cabH - 0.06, 0.03, 0.012, 2), M.glass());
  wsh.position.set(0, cabY + cabH / 2, -cabL / 2 + 0.008); g.add(wsh);
  const rear = wsh.clone(); rear.position.z = cabL / 2 - 0.008; rear.scale.set(0.85, 0.8, 1); g.add(rear);
  // tampon, farlar, stop lambaları
  const fb = new THREE.Mesh(rbox(W - 0.04, 0.08, 0.07, 0.03, 2), o.vip ? goldMat() : M.bumper());
  fb.position.set(0, y0 + 0.07, -Lz / 2 + 0.01); g.add(fb);
  const rb = fb.clone(); rb.position.z = Lz / 2 - 0.01; g.add(rb);
  for (let side = -1; side <= 1; side += 2) {
    const hl = new THREE.Mesh(cached('hl', () => new THREE.SphereGeometry(0.058, 12, 8)), M.head());
    hl.scale.set(1, 0.8, 0.5); hl.position.set(side * 0.24, y0 + 0.24, -Lz / 2 + 0.01); g.add(hl);
    const tl = new THREE.Mesh(cached('tl', () => new THREE.BoxGeometry(0.1, 0.045, 0.03)), M.tail());
    tl.position.set(side * 0.26, y0 + 0.26, Lz / 2 - 0.005); g.add(tl);
  }
  // grill / plaka
  const grill = new THREE.Mesh(rbox(0.26, 0.07, 0.03, 0.015, 2), M.dark());
  grill.position.set(0, y0 + 0.2, -Lz / 2 + 0.008); g.add(grill);
  // tekerlek yuvaları (iki yanda)
  // (konumlar tekerleklerle aynı eksenlere yerleştirilir; aşağıda axleZ hesaplandıktan sonra eklenir)
  // stile özel parçalar
  if (style === 'school') {
    const band = new THREE.Mesh(rbox(W + 0.012, 0.05, Lz - 0.06, 0.012, 2), M.dark());
    band.position.y = y0 + 0.2; g.add(band);
    const stop = new THREE.Mesh(cached('stopsign', () => new THREE.CylinderGeometry(0.075, 0.075, 0.015, 8)), mat('stop', () => new THREE.MeshStandardMaterial({ color: 0xe02a2a, roughness: 0.4 })));
    stop.rotation.z = Math.PI / 2; stop.position.set(-W / 2 - 0.03, y0 + lowH - 0.02, -Lz / 2 + 0.3); g.add(stop);
  }
  if (style === 'coach') {
    const ac = new THREE.Mesh(rbox(0.26, 0.05, Math.min(0.6, cabL * 0.35), 0.025, 2), mat('acunit', () => new THREE.MeshStandardMaterial({ color: 0xdfe5ee, roughness: 0.6 })));
    ac.position.set(0, roofTop + 0.02, Lz * 0.12); g.add(ac);
    const skirt = new THREE.Mesh(rbox(W + 0.012, 0.07, Lz - 0.2, 0.02, 2), mat('skirt', () => new THREE.MeshStandardMaterial({ color: 0xaab4c2, metalness: 0.7, roughness: 0.3 })));
    skirt.position.y = y0 + 0.06; g.add(skirt);
  }
  if (style === 'mini') {
    const rack = new THREE.Mesh(rbox(0.4, 0.04, cabL * 0.5, 0.015, 2), M.dark());
    rack.position.set(0, roofTop + 0.015, Lz * 0.08); g.add(rack);
  }
  if (modern) {
    const led = new THREE.Mesh(rbox(W - 0.14, 0.022, 0.03, 0.01, 2), M.led()); led.position.set(0, y0 + 0.3, -Lz / 2 + 0.006); g.add(led);
    const stripe = new THREE.Mesh(rbox(W + 0.012, 0.035, Lz - 0.14, 0.012, 2), M.white()); stripe.position.y = y0 + 0.17; g.add(stripe);
    const fin = new THREE.Mesh(rbox(0.12, 0.03, Math.min(0.45, cabL * 0.3), 0.012, 2), M.dark()); fin.position.set(0, roofTop + 0.01, Lz * 0.3); g.add(fin);
    const skirtM = new THREE.Mesh(rbox(W + 0.012, 0.06, Lz - 0.18, 0.02, 2), M.dark()); skirtM.position.y = y0 + 0.05; g.add(skirtM);
  }
  if (lux) {
    const belt = new THREE.Mesh(rbox(W + 0.014, 0.022, Lz - 0.08, 0.01, 2), M.chrome()); belt.position.y = y0 + lowH - 0.02; g.add(belt);
    const skirtL = new THREE.Mesh(rbox(W + 0.014, 0.07, Lz - 0.16, 0.02, 2), M.chrome()); skirtL.position.y = y0 + 0.055; g.add(skirtL);
    const grillC = new THREE.Mesh(rbox(0.32, 0.085, 0.034, 0.015, 2), M.chrome()); grillC.position.set(0, y0 + 0.2, -Lz / 2 + 0.014); g.add(grillC);
    for (const z of [-Lz * 0.3, Lz * 0.3]) { const rail = new THREE.Mesh(rbox(W + 0.02, 0.02, 0.035, 0.01, 2), M.chrome()); rail.position.set(0, y0 + lowH + cabH * 0.5, z); g.add(rail); }
    const emblem = new THREE.Mesh(cached('emblem', () => new THREE.SphereGeometry(0.035, 12, 8)), goldMat()); emblem.position.set(0, y0 + 0.3, -Lz / 2 - 0.01); g.add(emblem);
  }
  if (style === 'express') {
    for (const x of [-0.17, 0.17]) { const st = new THREE.Mesh(new THREE.PlaneGeometry(0.1, cabL - 0.1), paint(bodyHex)); st.rotation.x = -Math.PI / 2; st.position.set(x, roofTop + 0.004, 0); g.add(st); }
    const led = new THREE.Mesh(rbox(W - 0.18, 0.04, 0.03, 0.01, 2), M.led()); led.position.set(0, y0 + lowH + cabH - 0.03, -Lz / 2 + 0.006); g.add(led);
    const band = new THREE.Mesh(rbox(W + 0.012, 0.045, Lz - 0.1, 0.012, 2), M.white()); band.position.y = y0 + 0.19; g.add(band);
    const ac2 = new THREE.Mesh(rbox(0.3, 0.05, Math.min(0.55, cabL * 0.3), 0.025, 2), M.white()); ac2.position.set(0, roofTop + 0.02, Lz * 0.28); g.add(ac2);
  }
  if (style === 'tourist') {
    const pano = new THREE.Mesh(rbox(W - 0.22, 0.03, cabL - 0.3, 0.02, 2), M.glass()); pano.position.set(0, roofTop + 0.005, 0); g.add(pano);
    const lights = mat('tlights', () => new THREE.MeshStandardMaterial({ color: 0xffe27a, emissive: 0xffc414, emissiveIntensity: 1.1 }));
    for (const side of [-1, 1]) { const ln = new THREE.Mesh(rbox(0.035, 0.03, cabL - 0.2, 0.012, 2), lights); ln.position.set(side * (W / 2 - 0.04), roofTop + 0.01, 0); g.add(ln); }
    const stripeT = new THREE.Mesh(rbox(W + 0.012, 0.05, Lz - 0.1, 0.012, 2), mat('tstripe', () => new THREE.MeshStandardMaterial({ color: 0xffc414, roughness: 0.4 }))); stripeT.position.y = y0 + 0.19; g.add(stripeT);
  }
  if (style === 'sport') {
    for (const x of [-0.1, 0.1]) { const st = new THREE.Mesh(new THREE.PlaneGeometry(0.09, cabL - 0.05), M.white()); st.rotation.x = -Math.PI / 2; st.position.set(x, roofTop + 0.004, 0); g.add(st); }
    const sp2 = new THREE.Mesh(rbox(W - 0.1, 0.04, 0.1, 0.012, 2), M.dark()); sp2.position.set(0, roofTop + 0.07, Lz / 2 - 0.12); g.add(sp2);
    for (const side of [-1, 1]) { const post = new THREE.Mesh(rbox(0.03, 0.08, 0.04, 0.01, 2), M.dark()); post.position.set(side * 0.28, roofTop + 0.03, Lz / 2 - 0.12); g.add(post); }
    const fl = new THREE.Mesh(rbox(W + 0.012, 0.04, Lz - 0.1, 0.012, 2), M.white()); fl.position.y = y0 + 0.2; g.add(fl);
    const skirtS = new THREE.Mesh(rbox(W + 0.012, 0.06, Lz - 0.18, 0.02, 2), M.dark()); skirtS.position.y = y0 + 0.05; g.add(skirtS);
  }
  // tekerlekler
  const rimM = o.vip ? goldMat() : rimMaterial(o.rim || 'steel');
  const axleZ = [];
  const front = -Lz / 2 + 0.26, back = Lz / 2 - 0.26;
  axleZ.push(front, back);
  if (o.len >= 3) axleZ.splice(1, 0, (front + back) / 2 + (o.len >= 4 ? -0.35 : 0)), o.len >= 4 && axleZ.push((front + back) / 2 + 0.35);
  for (const z of axleZ) {
    for (let side = -1; side <= 1; side += 2) {
      const arch = new THREE.Mesh(cached('arch', () => new THREE.CircleGeometry(0.2, 20)), mat('archm', () => new THREE.MeshStandardMaterial({ color: 0x1a1e28, roughness: 0.9 })));
      arch.rotation.y = side * Math.PI / 2; arch.position.set(side * (W / 2 + 0.004), 0.17, z); g.add(arch);
      const wh = new THREE.Group();
      const tire = new THREE.Mesh(cached('tire', () => new THREE.CylinderGeometry(0.15, 0.15, 0.12, 20)), M.tire());
      tire.rotation.z = Math.PI / 2; tire.castShadow = true;
      const hub = new THREE.Mesh(cached('hub', () => new THREE.CylinderGeometry(0.085, 0.085, 0.125, 16)), rimM);
      hub.rotation.z = Math.PI / 2;
      const spokeG = cached('spoke', () => new THREE.BoxGeometry(0.13, 0.15, 0.02));
      const sp = new THREE.Mesh(spokeG, M.dark()); sp.position.x = side * 0.05; sp.scale.set(1, 0.7, 1);
      const sp2 = sp.clone(); sp2.rotation.x = Math.PI / 2;
      wh.add(tire, hub, sp, sp2);
      wh.position.set(side * (W / 2 - 0.02), 0.15, z);
      g.add(wh); parts.wheels.push(wh);
    }
  }
  // koltuk/yolcu siluetleri (cam arkasında)
  const seatN = o.seats;
  const cols = 2;
  const rows = Math.ceil(seatN / cols);
  for (let i = 0; i < seatN; i++) {
    const r = Math.floor(i / cols), cI = i % cols;
    const z = rows === 1 ? 0 : -usable / 2 + 0.16 + (usable - 0.32) * (r / (rows - 1));
    const m = new THREE.Mesh(cached('seathead', () => new THREE.SphereGeometry(0.075, 12, 10)), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 }));
    m.position.set((cI === 0 ? -1 : 1) * 0.16, cabY + cabH * 0.55, z);
    const body = new THREE.Mesh(cached('seatbody', () => new THREE.CapsuleGeometry(0.07, 0.05, 4, 8)), m.material);
    body.position.set(0, -0.1, 0); m.add(body);
    m.visible = false; g.add(m); parts.seatMarks.push(m);
  }
  // çatı oku
  if (!o.noArrow) {
    const arrow = new THREE.Mesh(cached('arrowplane', () => new THREE.PlaneGeometry(1, 1)), new THREE.MeshBasicMaterial({ map: arrowTexture(), transparent: true, depthWrite: false }));
    arrow.rotation.x = -Math.PI / 2;
    const s = Math.min(0.52, Lz * 0.55);
    arrow.scale.set(s, s, 1);
    arrow.position.set(0, roofTop + (style === 'coach' || style === 'mini' || modern || lux || style === 'express' || style === 'tourist' || style === 'sport' ? 0.056 : 0.006), style === 'coach' ? -Lz * 0.22 : (o.len >= 2 ? -Lz * 0.08 : 0));
    arrow.renderOrder = 3; g.add(arrow); parts.arrow = arrow;
  }
  // VIP süsleri
  if (o.vip) {
    const plate = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.25), new THREE.MeshStandardMaterial({ map: plateTexture('VIP', '#3a2400', '#ffd45a'), roughness: 0.3, metalness: 0.5 }));
    plate.rotation.x = -Math.PI / 2; plate.position.set(0, roofTop + 0.012, Lz * 0.3); g.add(plate);
    for (const z of [-Lz * 0.3, Lz * 0.3]) {
      const trim = new THREE.Mesh(rbox(W + 0.02, 0.025, 0.04, 0.01, 2), goldMat());
      trim.position.set(0, y0 + lowH - 0.03, z); g.add(trim);
    }
    const line = new THREE.Mesh(rbox(W + 0.016, 0.022, Lz - 0.1, 0.01, 2), goldMat());
    line.position.y = y0 + 0.2; g.add(line);
    const glow = new THREE.Mesh(cached('vipglow', () => new THREE.PlaneGeometry(1, 1)), new THREE.MeshBasicMaterial({ map: glowTexture(), color: skin.glow, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.85 }));
    glow.rotation.x = -Math.PI / 2; glow.scale.set(W + 1.2, Lz + 1.2, 1); glow.position.y = 0.02; glow.renderOrder = 1;
    g.add(glow); parts.glow = glow;
  }
  g.userData.parts = parts;
  g.userData.dims = { Lz, W, roofTop };
  return g;
}

let _glowTex = null;
export function glowTexture() {
  if (_glowTex) return _glowTex;
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(64, 64, 4, 64, 64, 62);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.5, 'rgba(255,255,255,0.35)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  _glowTex = new THREE.CanvasTexture(c); return _glowTex;
}

export function setBusPassengers(group, colorsList, hexOf) {
  const p = group.userData.parts;
  p.seatMarks.forEach((m, i) => {
    if (i < colorsList.length) { m.visible = true; m.material.color.setHex(hexOf(colorsList[i])); } else m.visible = false;
  });
}
export function recolorBus(group, hex) {
  const p = group.userData.parts;
  const m = p.style === 'luxury' ? paintLux(hex) : paint(hex);
  for (const mesh of p.body) mesh.material = m;
  // tavan: stile göre
  if (p.style === 'taxi') p.body[1].material = paint(lighten(hex, 0.12));
  else if (p.style === 'luxury') p.body[1].material = paintLux(lighten(hex, 0.06));
  else if (p.style === 'express') p.body[1].material = paint(0xf4f7fb);
  else if (p.style === 'sport') p.body[1].material = paint(0x20232c);
  else p.body[1].material = p.style === 'modern' ? paint(darken(hex, 0.08)) : paint(lighten(hex, 0.12));
  p.bodyMat = m;
}

// ---------- Yolcu ----------
let _faceTex = null;
function faceTexture() {
  if (_faceTex) return _faceTex;
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#1a1d27';
  for (const x of [40, 88]) { g.beginPath(); g.ellipse(x, 52, 7, 10, 0, 0, 7); g.fill(); g.fillStyle = '#fff'; g.beginPath(); g.arc(x - 2, 47, 3, 0, 7); g.fill(); g.fillStyle = '#1a1d27'; }
  g.fillStyle = 'rgba(255,110,140,.5)';
  for (const x of [24, 104]) { g.beginPath(); g.ellipse(x, 78, 10, 6, 0, 0, 7); g.fill(); }
  g.strokeStyle = '#1a1d27'; g.lineWidth = 5; g.lineCap = 'round';
  g.beginPath(); g.arc(64, 74, 14, 0.2 * Math.PI, 0.8 * Math.PI); g.stroke();
  _faceTex = new THREE.CanvasTexture(c); _faceTex.colorSpace = THREE.SRGBColorSpace; _faceTex.anisotropy = 4;
  return _faceTex;
}
export function buildPassenger(colorIndex, hexOf, variant = 0) {
  const hex = hexOf(colorIndex);
  const g = new THREE.Group();
  const bodyM = mat('pbody' + hex, () => new THREE.MeshStandardMaterial({ color: hex, roughness: 0.55 }));
  const headM = mat('phead' + hex, () => new THREE.MeshStandardMaterial({ color: lighten(hex, 0.22), roughness: 0.5 }));
  const pants = mat('ppants', () => new THREE.MeshStandardMaterial({ color: 0x2b3245, roughness: 0.7 }));
  const rig = new THREE.Group(); const wrap = new THREE.Group(); wrap.scale.setScalar(1.22); wrap.add(rig); g.add(wrap);
  const body = new THREE.Mesh(cached('pbodyg', () => new THREE.CapsuleGeometry(0.15, 0.16, 4, 10)), bodyM);
  body.position.y = 0.36; body.castShadow = true; rig.add(body);
  const head = new THREE.Group(); head.position.y = 0.66; rig.add(head);
  const skull = new THREE.Mesh(cached('pheadg', () => new THREE.SphereGeometry(0.16, 16, 12)), headM);
  skull.castShadow = true; head.add(skull);
  const face = new THREE.Mesh(cached('faceplane', () => new THREE.PlaneGeometry(0.2, 0.2)), mat('facemat', () => new THREE.MeshBasicMaterial({ map: faceTexture(), transparent: true, depthWrite: false })));
  face.position.set(0, 0.0, 0.153); face.renderOrder = 2; head.add(face);
  // aksesuar
  const acc = variant % 4;
  if (acc === 1) { // bere
    const cap = new THREE.Mesh(cached('beanie', () => new THREE.SphereGeometry(0.17, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.5)), mat('beanie' + hex, () => new THREE.MeshStandardMaterial({ color: darken(hex, 0.25), roughness: 0.8 })));
    cap.position.y = 0.04; cap.rotation.x = -0.15; head.add(cap);
    const pom = new THREE.Mesh(cached('pom', () => new THREE.SphereGeometry(0.04, 8, 6)), mat('pomw', () => new THREE.MeshStandardMaterial({ color: 0xffffff })));
    pom.position.y = 0.2; head.add(pom);
  } else if (acc === 2) { // şapka
    const cap = new THREE.Mesh(cached('capdome', () => new THREE.SphereGeometry(0.168, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.45)), mat('cap' + hex, () => new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6 })));
    cap.position.y = 0.03; head.add(cap);
    const brim = new THREE.Mesh(cached('brim', () => new THREE.CylinderGeometry(0.1, 0.1, 0.018, 12, 1, false, -Math.PI / 2, Math.PI)), cap.material);
    brim.position.set(0, 0.07, 0.12); brim.rotation.y = 0; brim.scale.set(1, 1, 1.0); head.add(brim);
  } else if (acc === 3) { // sırt çantası
    const bp = new THREE.Mesh(rbox(0.22, 0.26, 0.1, 0.04, 2), mat('bp', () => new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6 })));
    bp.position.set(0, 0.38, -0.17); rig.add(bp);
  }
  // kollar / bacaklar (pivotlu)
  const armG = cached('armg', () => new THREE.CapsuleGeometry(0.045, 0.1, 3, 6));
  const legG = cached('legg', () => new THREE.CapsuleGeometry(0.055, 0.06, 3, 6));
  const arms = [], legs = [];
  for (let s = -1; s <= 1; s += 2) {
    const ap = new THREE.Group(); ap.position.set(s * 0.19, 0.46, 0);
    const a = new THREE.Mesh(armG, bodyM); a.position.y = -0.09; a.castShadow = true; ap.add(a); rig.add(ap); arms.push(ap);
    const lp = new THREE.Group(); lp.position.set(s * 0.075, 0.18, 0);
    const l = new THREE.Mesh(legG, pants); l.position.y = -0.07; l.castShadow = true; lp.add(l); rig.add(lp); legs.push(lp);
  }
  g.userData = { rig, head, arms, legs, body, colorIndex, phase: Math.random() * 6.28, state: 'idle', yaw: 0 };
  return g;
}

// ---------- Çevre parçaları ----------
export function buildLamp() {
  const g = new THREE.Group();
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 1.9, 8), mat('lamppole', () => new THREE.MeshStandardMaterial({ color: 0x59626f, metalness: 0.6, roughness: 0.4 })));
  pole.position.y = 0.95; pole.castShadow = true; g.add(pole);
  const arm = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.05, 0.05), pole.material); arm.position.set(0.28, 1.9, 0); g.add(arm);
  const lamp = new THREE.Mesh(rbox(0.28, 0.06, 0.14, 0.02, 2), mat('lampl', () => new THREE.MeshStandardMaterial({ color: 0xfff2c4, emissive: 0xffe39a, emissiveIntensity: 0.8 })));
  lamp.position.set(0.55, 1.87, 0); g.add(lamp);
  return g;
}
export function buildTree(hex = 0x38b35a) {
  const g = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 0.5, 8), mat('trunk', () => new THREE.MeshStandardMaterial({ color: 0x8a5a3a, roughness: 0.9 })));
  trunk.position.y = 0.25; trunk.castShadow = true; g.add(trunk);
  const fol = mat('fol' + hex, () => new THREE.MeshStandardMaterial({ color: hex, roughness: 0.75, flatShading: true }));
  for (let i = 0; i < 3; i++) {
    const s = new THREE.Mesh(new THREE.IcosahedronGeometry(0.34 - i * 0.07, 1), fol);
    s.position.y = 0.66 + i * 0.3; s.castShadow = true; g.add(s);
  }
  return g;
}
export function buildBush() {
  const g = new THREE.Group();
  const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.24, 0.2, 14), mat('pot', () => new THREE.MeshStandardMaterial({ color: 0xe8edf4, roughness: 0.5 })));
  pot.position.y = 0.1; pot.castShadow = true; g.add(pot);
  const b = new THREE.Mesh(new THREE.IcosahedronGeometry(0.27, 1), mat('bushm', () => new THREE.MeshStandardMaterial({ color: 0x6fd13a, roughness: 0.7, flatShading: true })));
  b.position.y = 0.36; b.castShadow = true; g.add(b);
  return g;
}
export function buildBench() {
  const g = new THREE.Group();
  const wood = mat('wood', () => new THREE.MeshStandardMaterial({ color: 0xc98b5a, roughness: 0.8 }));
  const seat = new THREE.Mesh(rbox(0.9, 0.07, 0.3, 0.02, 2), wood); seat.position.y = 0.32; seat.castShadow = true; g.add(seat);
  const back = new THREE.Mesh(rbox(0.9, 0.22, 0.05, 0.02, 2), wood); back.position.set(0, 0.5, -0.14); g.add(back);
  for (const x of [-0.38, 0.38]) { const l = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.3, 0.26), M.dark()); l.position.set(x, 0.15, 0); g.add(l); }
  return g;
}

export const hexFor = (palette) => (idx) => (idx === VIP_COLOR ? 0xf5b72a : (PALETTES[palette] || PALETTES.vivid)[idx]);
