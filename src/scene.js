// 3D sahne: ortam, kamera, otobüs/yolcu animasyonları, giriş (dokun/sürükle) ve sahne yönetmeni.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { buildBus, buildPassenger, buildLamp, buildTree, buildBush, buildBench, setBusPassengers, recolorBus, hexFor, PARK_SCALE, busLength, glowTexture } from './models.js';
import * as E from './engine.js';
import { FX } from './fx.js';
import { SLOTS_TOTAL, VIP_COLOR } from './config.js';

// ---- Yerleşim sabitleri (dünya birimi) ----
const SLOT_SP = 1.05, SLOT_Z = -5.2, SLOT_L = 3.35, SLOT_W = 0.92;
const NOSE_Z = SLOT_Z - SLOT_L / 2;
const STRIP_Z = NOSE_Z - 1.0;
const ROAD_Z = SLOT_Z + SLOT_L / 2 + 0.85;
const BOARD_Z0 = ROAD_Z + 1.2;
const QZ0 = -9.35, COLS = 9, SPC = 0.66, ROWSP = 0.64, ROWS = 5;
const VIS_MAX = COLS * ROWS;
const slotX = (k) => (k - 3.5) * SLOT_SP;               // k=0 VIP, k=i+1 normal
const YAW = { U: 0, D: Math.PI, L: Math.PI / 2, R: -Math.PI / 2 };
const ease = { out: (k) => 1 - Math.pow(1 - k, 3), inOut: (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2), back: (k) => { const c = 1.70158; return 1 + (c + 1) * Math.pow(k - 1, 3) + c * Math.pow(k - 1, 2); } };

function angDiff(a, b) { let d = b - a; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2; return d; }

/** Köşeleri yuvarlatılmış yol (Vector2 listesi: x,z). */
function roundedPath(pts, radius) {
  const out = [pts[0].clone()];
  for (let i = 1; i < pts.length - 1; i++) {
    const A = pts[i - 1], P = pts[i], B = pts[i + 1];
    const d1 = A.clone().sub(P), d2 = B.clone().sub(P);
    const l1 = d1.length(), l2 = d2.length();
    if (l1 < 1e-4 || l2 < 1e-4) { out.push(P.clone()); continue; }
    d1.normalize(); d2.normalize();
    const r = Math.min(radius, l1 * 0.5, l2 * 0.5);
    const T1 = P.clone().addScaledVector(d1, r), T2 = P.clone().addScaledVector(d2, r);
    out.push(T1);
    for (let k = 1; k < 10; k++) {
      const t = k / 10, a = 1 - t;
      out.push(new THREE.Vector2(a * a * T1.x + 2 * a * t * P.x + t * t * T2.x, a * a * T1.y + 2 * a * t * P.y + t * t * T2.y));
    }
    out.push(T2);
  }
  out.push(pts[pts.length - 1].clone());
  return out;
}
function pathLengths(poly) { const L = [0]; for (let i = 1; i < poly.length; i++) L.push(L[i - 1] + poly[i].distanceTo(poly[i - 1])); return L; }
function samplePath(poly, L, s) {
  s = Math.max(0, Math.min(L[L.length - 1], s));
  let i = 1; while (i < L.length - 1 && L[i] < s) i++;
  const seg = Math.max(1e-6, L[i] - L[i - 1]); const t = (s - L[i - 1]) / seg;
  const a = poly[i - 1], b = poly[i];
  return { x: a.x + (b.x - a.x) * t, z: a.y + (b.y - a.y) * t, dx: b.x - a.x, dz: b.y - a.y };
}

function canvasTex(w, h, draw) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}
function roundRect(g, x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }

export class GameScene {
  constructor(container, opts = {}) {
    this.container = container;
    this.quality = opts.quality || 'high';
    this.cos = { style: 'city', rim: 'steel', trail: 'dust', palette: 'vivid', vipSkin: 'gold' };
    this.hexOf = hexFor('vivid');
    this.state = null;
    this.tweens = []; this.busVis = new Map(); this.passengers = new Map(); this.walkers = new Set();
    this.glows = new Map(); this.labels = new Map();
    this.stripBusy = false; this.boardCd = 0; this.idleFired = true; this.celebrating = [];
    this.slotHold = new Array(SLOTS_TOTAL + 1).fill(false);
    this.sfx = () => {}; this.onBusTap = null; this.onSlotTap = null; this.onIdle = null; this.onBoarded = null; this.onBusDepart = null; this.onBusArrive = null;
    this.tapFilter = null; this.time = 0; this.slotMeshes = []; this.slotTexKinds = [];

    const r = this.renderer = new THREE.WebGLRenderer({ antialias: this.quality !== 'low', powerPreference: 'high-performance', preserveDrawingBuffer: !!opts.preserve });
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.toneMapping = THREE.NeutralToneMapping; r.toneMappingExposure = 1.0;
    r.shadowMap.enabled = this.quality !== 'low'; r.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(r.domElement); r.domElement.style.touchAction = 'none';
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xc9d6e6);
    this.camera = new THREE.PerspectiveCamera(36, 1, 0.5, 200);
    const pm = new THREE.PMREMGenerator(r);
    this.scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environmentIntensity = 0.32;
    this.setupLights();
    this.buildStatic();
    this.fx = new FX(this.scene, this.quality);
    this.labelLayer = document.createElement('div'); this.labelLayer.className = 'label-layer'; container.appendChild(this.labelLayer);
    this.raycaster = new THREE.Raycaster(); this.dragInfo = null;
    this.bindInput();
    this.ro = new ResizeObserver(() => this.resize()); this.ro.observe(container);
    this.resize();
  }

  setQuality(q) {
    this.quality = q;
    this.renderer.shadowMap.enabled = q !== 'low';
    this.dirLight.castShadow = q !== 'low';
    this.resize();
  }

  setCosmetics(c) { Object.assign(this.cos, c); this.hexOf = hexFor(this.cos.palette); }

  setupLights() {
    const hemi = new THREE.HemisphereLight(0xeef5ff, 0x9fb0cc, 0.55); this.scene.add(hemi);
    const d = this.dirLight = new THREE.DirectionalLight(0xfff3dc, 1.7);
    d.position.set(-6, 14, 5); d.target.position.set(0, 0, -1.5);
    d.castShadow = this.quality !== 'low';
    d.shadow.mapSize.set(this.quality === 'high' ? 2048 : 1024, this.quality === 'high' ? 2048 : 1024);
    const sc = d.shadow.camera; sc.left = -9; sc.right = 9; sc.top = 15; sc.bottom = -15; sc.near = 1; sc.far = 40;
    d.shadow.bias = -0.0004; d.shadow.normalBias = 0.03; d.shadow.radius = 3.5;
    this.scene.add(d, d.target);
    const fill = new THREE.DirectionalLight(0xcfe0ff, 0.3); fill.position.set(6, 6, 8); this.scene.add(fill);
  }

  buildStatic() {
    const s = this.scene;
    // zemin karoları
    const tileTex = canvasTex(256, 256, (g, w, h) => {
      g.fillStyle = '#c9d6e6'; g.fillRect(0, 0, w, h);
      g.fillStyle = '#d6e1ee'; g.fillRect(5, 5, w - 10, h - 10);
      g.strokeStyle = '#b6c6da'; g.lineWidth = 4; g.strokeRect(0, 0, w, h);
    });
    tileTex.wrapS = tileTex.wrapT = THREE.RepeatWrapping; tileTex.repeat.set(30, 30);
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.MeshStandardMaterial({ map: tileTex, roughness: 0.85 }));
    ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; s.add(ground);
    // asfalt: park alanı + geçiş şeridi
    const asphalt = new THREE.MeshStandardMaterial({ color: 0x6d7586, roughness: 0.92 });
    const park = new THREE.Mesh(this.roundedPlate(9.9, 7.0, 0.7), asphalt);
    park.position.set(0, 0.02, (-8.6 + -1.6) / 2); park.receiveShadow = true; s.add(park);
    const strip = new THREE.Mesh(this.roundedPlate(26, 1.55, 0.3), asphalt);
    strip.position.set(0, 0.021, STRIP_Z); strip.receiveShadow = true; s.add(strip);
    // şerit çizgisi
    const dash = new THREE.Mesh(new THREE.PlaneGeometry(26, 0.06), new THREE.MeshBasicMaterial({ color: 0xf3d46a, transparent: true, opacity: 0.8 }));
    dash.rotation.x = -Math.PI / 2; dash.position.set(0, 0.03, STRIP_Z); s.add(dash);
    // kaldırım kenarı
    const curb = new THREE.MeshStandardMaterial({ color: 0xf4f7fb, roughness: 0.5 });
    const cb = new THREE.Mesh(new THREE.BoxGeometry(9.9, 0.14, 0.14), curb); cb.position.set(0, 0.07, -1.55); cb.castShadow = true; s.add(cb);
    // yolcu bekleme alanı raylar
    const qW = COLS * SPC + 0.9, qZf = QZ0 + 0.55, qZb = QZ0 - (ROWS - 1) * ROWSP - 0.55;
    const railM = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 });
    const rail = (w, d, x, z) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, 0.3, d), railM); m.position.set(x, 0.15, z); m.castShadow = true; m.receiveShadow = true; s.add(m); };
    rail(0.18, qZf - qZb, -qW / 2, (qZf + qZb) / 2); rail(0.18, qZf - qZb, qW / 2, (qZf + qZb) / 2); rail(qW, 0.18, 0, qZb);
    rail(1.1, 0.18, -qW / 2 + 0.55, qZf); rail(1.1, 0.18, qW / 2 - 0.55, qZf);
    const qFloor = new THREE.Mesh(this.roundedPlate(qW - 0.1, qZf - qZb, 0.15), new THREE.MeshStandardMaterial({ color: 0xcfdbe9, roughness: 0.8 }));
    qFloor.position.set(0, 0.02, (qZf + qZb) / 2); qFloor.receiveShadow = true; s.add(qFloor);
    this.queueBack = qZb;
    // dekor
    for (const [x, z] of [[-6.2, -2.8], [6.2, -2.8]]) { const l = buildLamp(); l.position.set(x, 0, z); if (x > 0) l.scale.x = -1; s.add(l); }
    for (const [x, z] of [[-5.9, -6.0], [5.9, -6.0], [-6.6, -9.5], [6.6, -9.5]]) { const b = buildBush(); b.position.set(x, 0, z); s.add(b); }
    for (const [x, z] of [[-6.5, -11.2], [6.5, -11.2]]) { const t = buildTree(0x43c26a); t.position.set(x, 0, z); s.add(t); }
    const bench = buildBench(); bench.position.set(-5.3, 0, -12.1); s.add(bench);
    // park yeri çerçeveleri
    this.buildSlots();
    // tahta (board) grubu: aşamaya göre yeniden kurulur
    this.boardGroup = new THREE.Group(); s.add(this.boardGroup);
    this.busGroup = new THREE.Group(); s.add(this.busGroup);
    this.passGroup = new THREE.Group(); s.add(this.passGroup);
  }

  roundedPlate(w, h, r) {
    const sh = new THREE.Shape();
    const x = -w / 2, y = -h / 2;
    sh.moveTo(x + r, y); sh.lineTo(x + w - r, y); sh.quadraticCurveTo(x + w, y, x + w, y + r); sh.lineTo(x + w, y + h - r);
    sh.quadraticCurveTo(x + w, y + h, x + w - r, y + h); sh.lineTo(x + r, y + h); sh.quadraticCurveTo(x, y + h, x, y + h - r); sh.lineTo(x, y + r); sh.quadraticCurveTo(x, y, x + r, y);
    const g = new THREE.ShapeGeometry(sh, 6); g.rotateX(-Math.PI / 2); return g;
  }

  slotTexture(kind) {
    return canvasTex(128, 340, (g, w, h) => {
      g.clearRect(0, 0, w, h);
      if (kind === 'vip') {
        const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#ffe17a'); gr.addColorStop(1, '#d99a12');
        g.fillStyle = gr; roundRect(g, 5, 5, w - 10, h - 10, 22); g.fill();
        g.strokeStyle = '#fff3c4'; g.lineWidth = 4; roundRect(g, 5, 5, w - 10, h - 10, 22); g.stroke();
        g.save(); g.translate(w / 2, h / 2); g.rotate(-Math.PI / 2); g.fillStyle = '#7a4d00'; g.font = '900 64px system-ui,sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('VIP', 0, 4); g.restore();
        return;
      }
      g.fillStyle = kind === 'locked' ? 'rgba(20,28,45,.28)' : 'rgba(15,22,38,.22)';
      roundRect(g, 5, 5, w - 10, h - 10, 22); g.fill();
      g.lineWidth = 5; g.strokeStyle = kind === 'temp' ? '#7dffb0' : 'rgba(255,255,255,.85)';
      if (kind === 'locked') g.setLineDash([16, 12]);
      roundRect(g, 5, 5, w - 10, h - 10, 22); g.stroke(); g.setLineDash([]);
      if (kind === 'locked') {
        g.fillStyle = '#3fdc6a'; roundRect(g, w / 2 - 34, h / 2 - 34, 68, 68, 16); g.fill();
        g.fillStyle = '#fff'; g.fillRect(w / 2 - 22, h / 2 - 6, 44, 12); g.fillRect(w / 2 - 6, h / 2 - 22, 12, 44);
      }
    });
  }

  buildSlots() {
    this.slotTex = { open: this.slotTexture('open'), locked: this.slotTexture('locked'), vip: this.slotTexture('vip'), temp: this.slotTexture('temp') };
    for (let k = 0; k < SLOTS_TOTAL + 1; k++) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(SLOT_W, SLOT_L), new THREE.MeshBasicMaterial({ map: this.slotTex.open, transparent: true, depthWrite: false }));
      m.rotation.x = -Math.PI / 2; m.position.set(slotX(k), 0.04, SLOT_Z); m.renderOrder = 2; this.scene.add(m);
      m.userData.slotK = k; this.slotMeshes.push(m);
    }
    this.slotMeshes[0].material.map = this.slotTex.vip;
  }

  refreshSlots(state, tempSlots = []) {
    for (let i = 0; i < SLOTS_TOTAL; i++) {
      const m = this.slotMeshes[i + 1];
      m.material.map = state.slotOpen[i] ? (tempSlots.includes(i) ? this.slotTex.temp : this.slotTex.open) : this.slotTex.locked;
      m.material.needsUpdate = true;
    }
  }

  // ------------------------------------------------------------------ Kamera
  resize() {
    const w = this.container.clientWidth || 360, h = this.container.clientHeight || 640;
    const dpr = Math.min(window.devicePixelRatio || 1, this.quality === 'high' ? 2.5 : this.quality === 'medium' ? 1.75 : 1.25);
    this.renderer.setPixelRatio(dpr); this.renderer.setSize(w, h, false);
    this.renderer.domElement.style.width = w + 'px'; this.renderer.domElement.style.height = h + 'px';
    this.camera.aspect = w / h; this.fitCamera();
    this.fx?.setScale(h * dpr * 0.62);
  }

  fitCamera() {
    const cam = this.camera; const rows = this.state ? this.state.h : 7;
    const zTop = this.queueBack - 0.5, zBot = BOARD_Z0 + rows + 0.9;
    const pts = [];
    const hx = Math.max(4.75, (this.state ? this.state.w / 2 + 0.9 : 4.4));
    for (const x of [-hx, hx]) { pts.push(new THREE.Vector3(x, 1.0, zTop), new THREE.Vector3(x, 0, zBot), new THREE.Vector3(x, 0.4, zBot)); }
    const pitch = THREE.MathUtils.degToRad(this.camera.aspect < 0.7 ? 57 : 52);
    let zc = (zTop + zBot) / 2, d = 30;
    const place = (dist, z) => {
      cam.position.set(0, Math.sin(pitch) * dist, z + Math.cos(pitch) * dist);
      cam.lookAt(0, 0, z); cam.updateMatrixWorld(true); cam.updateProjectionMatrix();
    };
    const bbox = () => { let mx = 0, mnY = 9, mxY = -9; for (const p of pts) { const v = p.clone().project(cam); mx = Math.max(mx, Math.abs(v.x)); mnY = Math.min(mnY, v.y); mxY = Math.max(mxY, v.y); } return { mx, mnY, mxY }; };
    for (let it = 0; it < 7; it++) {
      let lo = 6, hi = 120;
      for (let k = 0; k < 22; k++) {
        const mid = (lo + hi) / 2; place(mid, zc); const b = bbox();
        if (b.mx <= 0.97 && b.mxY <= 0.97 && b.mnY >= -0.97) hi = mid; else lo = mid;
      }
      d = hi; place(d, zc); const b = bbox();
      zc -= ((b.mxY + b.mnY) / 2) * d * 0.55;
    }
    place(d, zc);
  }

  // ------------------------------------------------------------------ Aşama kurulumu
  clearStage() {
    for (const grp of [this.boardGroup, this.busGroup, this.passGroup]) while (grp.children.length) grp.remove(grp.children[0]);
    this.busVis.clear(); this.passengers.clear(); this.walkers.clear(); this.tweens.length = 0;
    this.glows.forEach((g) => this.scene.remove(g)); this.glows.clear();
    this.labels.forEach((l) => l.remove()); this.labels.clear();
    this.celebrating = []; this.stripBusy = false; this.boardCd = 0; this.slotHold.fill(false); this.forceDepart = false;
  }

  loadStage(state, tempSlots = []) {
    this.clearStage();
    this.state = state;
    const w = state.w, h = state.h;
    // tahta zemini
    const plate = new THREE.Mesh(this.roundedPlate(w + 3.6, h + 3.4, 0.9), new THREE.MeshStandardMaterial({ color: 0xa9b6d0, roughness: 0.85 }));
    plate.position.set(0, 0.015, BOARD_Z0 + h / 2 - 0.1); plate.receiveShadow = true; this.boardGroup.add(plate);
    const tex = canvasTex(64 * w, 64 * h, (g, cw, ch) => {
      g.fillStyle = '#d5dff0'; g.fillRect(0, 0, cw, ch);
      for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { g.fillStyle = (x + y) % 2 ? '#cdd8ec' : '#dbe4f4'; g.fillRect(x * 64 + 2, y * 64 + 2, 60, 60); }
    });
    const inner = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.9 }));
    inner.rotation.x = -Math.PI / 2; inner.position.set(0, 0.03, BOARD_Z0 + h / 2); inner.receiveShadow = true; this.boardGroup.add(inner);
    const edge = new THREE.Mesh(new THREE.PlaneGeometry(w + 0.16, h + 0.16), new THREE.MeshBasicMaterial({ color: 0x93a3c6 }));
    edge.rotation.x = -Math.PI / 2; edge.position.set(0, 0.025, BOARD_Z0 + h / 2); this.boardGroup.add(edge);
    // otobüsler
    for (const b of state.buses) this.makeBusVis(b);
    this.refreshSlots(state, tempSlots);
    this.fitCamera();
    this.ensureQueue(true);
    this.idleFired = false;
  }

  cellToWorld(x, y) { return { x: x - this.state.w / 2 + 0.5, z: BOARD_Z0 + y + 0.5 }; }
  busCenter(b) {
    const hz = E.DIRS[b.dir].horiz;
    const c = this.cellToWorld(b.x + (hz ? (b.len - 1) / 2 : 0), b.y + (hz ? 0 : (b.len - 1) / 2));
    return c;
  }

  makeBusVis(b) {
    const hex = b.vip ? 0 : this.hexOf(b.color);
    const g = buildBus({ len: b.len, hex, style: this.cos.style, vip: b.vip, rim: this.cos.rim, vipSkin: this.cos.vipSkin, seats: b.seats });
    const vis = { id: b.id, g, parts: g.userData.parts, vcount: 0, vcolors: [], traveling: false, departing: false, trailT: 0, dragOff: 0, bounce: 0, dims: g.userData.dims };
    g.traverse((o) => { if (o.isMesh) o.castShadow = o.castShadow || false; });
    this.busGroup.add(g); this.busVis.set(b.id, vis);
    if (b.st === 'board') {
      const c = this.busCenter(b); g.position.set(c.x, 0, c.z); g.rotation.y = YAW[b.dir];
      g.userData.baseX = c.x; g.userData.baseZ = c.z;
    } else if (b.st === 'parked') {
      const k = b.slot === 'V' ? 0 : b.slot + 1;
      g.position.set(slotX(k), 0, SLOT_Z); g.rotation.y = 0; g.scale.setScalar(PARK_SCALE[b.len] || 0.75);
      if (vis.parts.arrow) vis.parts.arrow.visible = false;
      vis.vcount = b.boarded; vis.vcolors = new Array(b.boarded).fill(b.color);
      setBusPassengers(g, vis.vcolors, (c) => (c === VIP_COLOR ? 0xffffff : this.hexOf(c)));
      vis.parked = true;
    } else g.visible = false;
    return vis;
  }

  // ------------------------------------------------------------------ Yolcu kuyruğu
  queuePos(i) {
    const row = Math.floor(i / COLS), c = i % COLS;
    const col = row % 2 === 0 ? c : COLS - 1 - c;
    return { x: (col - (COLS - 1) / 2) * SPC, z: QZ0 - row * ROWSP };
  }

  spawnPassenger(idx, instant) {
    const color = this.state.queue[idx];
    const g = buildPassenger(color, this.hexOf, (idx * 7 + (idx >> 2)) % 4);
    g.traverse((o) => { if (o.isMesh) o.castShadow = this.quality !== 'low'; });
    const rel = idx - this.state.qi; const p = this.queuePos(rel);
    g.position.set(p.x, 0, p.z); g.rotation.y = 0; g.userData.yaw = 0;
    g.scale.setScalar(instant ? 1 : 0.01);
    g.userData.spawn = instant ? 1 : 0; g.userData.idx = idx; g.userData.moving = false;
    this.passGroup.add(g); this.passengers.set(idx, g);
    return g;
  }

  ensureQueue(instant = false) {
    const s = this.state; if (!s) return;
    const vis = this.quality === 'low' ? COLS * 4 : VIS_MAX;
    for (let idx = s.qi; idx < Math.min(s.queue.length, s.qi + vis); idx++) if (!this.passengers.has(idx)) this.spawnPassenger(idx, instant);
  }

  // ------------------------------------------------------------------ Hareket yönetmeni
  startDriveToSlot(id, slot, { instantArrive = false } = {}) {
    const b = this.state.buses[id]; const vis = this.busVis.get(id);
    const k = slot === 'V' ? 0 : slot + 1; const sx = slotX(k);
    const g = vis.g; g.visible = true;
    const w = this.state.w, h = this.state.h;
    const c = { x: g.position.x, z: g.position.z };
    const V = (x, z) => new THREE.Vector2(x, z);
    const pts = [V(c.x, c.z)];
    const lane = (w / 2 + 1.15);
    const bottom = BOARD_Z0 + h + 1.0;
    if (b.summoned) { g.position.set(sx, 6, SLOT_Z + 4); }
    if (b.st === 'parked' && !vis.fromBoard) { /* varsayılan */ }
    switch (b.dir) {
      case 'U': pts.push(V(c.x, ROAD_Z)); break;
      case 'D': { const sd = c.x <= 0 ? -1 : 1; pts.push(V(c.x, bottom), V(sd * lane, bottom), V(sd * lane, ROAD_Z)); break; }
      case 'L': pts.push(V(-lane, c.z), V(-lane, ROAD_Z)); break;
      case 'R': pts.push(V(lane, c.z), V(lane, ROAD_Z)); break;
    }
    pts.push(V(sx, ROAD_Z), V(sx, SLOT_Z));
    const poly = roundedPath(pts, 0.95); const L = pathLengths(poly);
    vis.traveling = true; vis.travel = { poly, L, s: 0, v: 0, total: L[L.length - 1], slot: k, park: PARK_SCALE[b.len] || 0.75, final: L[L.length - 1] - (SLOT_Z - ROAD_Z) * -1, yawSm: g.rotation.y };
    vis.travel.finalStart = L[L.length - 1] - (SLOT_Z + 0 - ROAD_Z) * -1; // yaklaşma başlangıcı (ROAD_Z -> SLOT_Z)
    vis.travel.finalStart = L[L.length - 1] - Math.abs(SLOT_Z - ROAD_Z);
    vis.fromBoard = true;
    if (vis.parts.arrow) vis.parts.arrow.material.opacity = 1;
    this.sfx('engine');
  }

  updateTravel(vis, dt) {
    const t = vis.travel; const g = vis.g;
    const rem = t.total - t.s;
    const vmax = 9.5, acc = 22;
    let target = vmax;
    const hold = t.s > t.finalStart - 0.4 && this.slotHold[t.slot];
    if (hold) target = 0;
    target = Math.min(target, Math.sqrt(2 * 14 * Math.max(0, rem)) + 0.8);
    t.v += Math.sign(target - t.v) * Math.min(Math.abs(target - t.v), acc * dt);
    if (hold && t.s >= t.finalStart - 0.4 + 0.02) { t.v = 0; }
    const ds = t.v * dt; t.s = Math.min(t.total, t.s + ds);
    const sp = samplePath(t.poly, t.L, t.s);
    g.position.x = sp.x; g.position.z = sp.z;
    if (g.userData.summonY !== undefined) g.position.y = 0;
    const want = Math.atan2(-sp.dx, -sp.dz);
    g.rotation.y += angDiff(g.rotation.y, want) * Math.min(1, dt * 14);
    // ölçek: yaklaşma sırasında park ölçeğine
    const kf = Math.max(0, Math.min(1, (t.s - (t.finalStart - 2.2)) / 2.2));
    g.scale.setScalar(1 + (t.park - 1) * ease.out(kf));
    for (const w of vis.parts.wheels) w.rotation.x -= ds / 0.15;
    // iz efekti
    vis.trailT -= dt;
    if (vis.trailT <= 0 && t.v > 1.5) { vis.trailT = 0.07; this.emitTrail(g.position.x, g.position.z, g.rotation.y); }
    if (t.s >= t.total - 1e-3) this.finishArrive(vis);
  }

  emitTrail(x, z, yaw) {
    const bx = x + Math.sin(yaw) * 0.45, bz = z + Math.cos(yaw) * 0.45;
    const tr = this.cos.trail;
    if (tr === 'sparkle') this.fx.stars.emit(bx, 0.2, bz, (Math.random() - 0.5) * 0.6, 0.6, (Math.random() - 0.5) * 0.6, 0xffe28a, 0.7, 0.16, 0.0, 1, 0.5);
    else if (tr === 'stars') this.fx.stars.emit(bx, 0.25, bz, (Math.random() - 0.5) * 0.8, 0.7, (Math.random() - 0.5) * 0.8, [0x7dd3ff, 0xff7de0, 0xfff27d][Math.floor(Math.random() * 3)], 0.8, 0.2, 0.02, 1.5, 0.5);
    else if (tr === 'bubbles') this.fx.dots.emit(bx, 0.2, bz, (Math.random() - 0.5) * 0.4, 0.8, (Math.random() - 0.5) * 0.4, 0xbfeaff, 0.9, 0.1, 0.32, -0.8, 0.5);
    else this.fx.puff(bx, bz, 0xffffff, 1, 0.55);
  }

  finishArrive(vis) {
    vis.traveling = false; vis.parked = true; vis.travel = null;
    const g = vis.g; const b = this.state.buses[vis.id];
    const k = vis.id; void k;
    const slotK = b.slot === 'V' ? 0 : b.slot + 1;
    g.position.set(slotX(slotK), 0, SLOT_Z); g.rotation.y = 0; g.scale.setScalar(PARK_SCALE[b.len] || 0.75);
    if (vis.parts.arrow) vis.parts.arrow.visible = false;
    vis.bounce = 1; this.sfx('park');
    this.fx.puff(g.position.x, g.position.z + 1.0, 0xffffff, 4, 0.7);
    if (b.vip) { this.fx.burst(g.position.x, 0.6, g.position.z, 0xffd45a, 26, 3.2, true, 1.0); this.fx.ring(g.position.x, g.position.z, 0xffd45a, 0.4, 2.6, 0.9); this.sfx('vip'); }
    E.markArrived(this.state, vis.id);
    this.onBusArrive?.(b);
    this.idleFired = false;
  }

  startDeparture(vis) {
    const b = this.state.buses[vis.id];
    const slotK = b.slot === 'V' ? 0 : b.slot + 1;
    const g = vis.g; const sx = g.position.x;
    const side = sx <= 0 ? -1 : 1;
    const frontZ = SLOT_Z - (busLength(b.len) * (PARK_SCALE[b.len] || 0.75)) / 2;
    const pts = [new THREE.Vector2(sx, g.position.z), new THREE.Vector2(sx, STRIP_Z), new THREE.Vector2(side * 11.5, STRIP_Z)];
    void frontZ;
    const poly = roundedPath(pts, 1.0); const L = pathLengths(poly);
    vis.departing = true; vis.depart = { poly, L, s: 0, v: 0, total: L[L.length - 1], slotK, slotIdx: b.slot };
    this.stripBusy = true; this.slotHold[slotK] = true;
    E.depart(this.state, vis.id);
    this.removeLabel(vis.id);
    this.sfx('depart');
    this.onBusDepart?.(b);
  }

  updateDeparture(vis, dt) {
    const t = vis.depart; const g = vis.g;
    t.v = Math.min(8.5, t.v + 16 * dt);
    const ds = t.v * dt; t.s = Math.min(t.total, t.s + ds);
    const sp = samplePath(t.poly, t.L, t.s);
    g.position.x = sp.x; g.position.z = sp.z;
    const want = Math.atan2(-sp.dx, -sp.dz); g.rotation.y += angDiff(g.rotation.y, want) * Math.min(1, dt * 10);
    for (const w of vis.parts.wheels) w.rotation.x -= ds / 0.15;
    vis.trailT -= dt; if (vis.trailT <= 0) { vis.trailT = 0.08; this.fx.puff(g.position.x + Math.sin(g.rotation.y) * 0.4, g.position.z + Math.cos(g.rotation.y) * 0.4, 0xffffff, 1, 0.5); }
    if (t.s > 2.4 && this.slotHold[t.slotK]) this.slotHold[t.slotK] = false;
    if (t.s >= t.total - 0.01) {
      vis.departing = false; this.stripBusy = false; this.busGroup.remove(g); this.busVis.delete(vis.id); this.slotHold[t.slotK] = false;
      this.idleFired = false;
    }
  }

  // yolcu yürüyüşü: sıradaki yolcu hedef otobüse
  startBoardWalk(r) {
    const s = this.state; const idx = s.qi - 1;                 // boardStep qi'yi artırdı
    let p = this.passengers.get(idx);
    if (!p) p = this.spawnPassenger(idx, true);
    this.passengers.delete(idx);
    const vis = this.busVis.get(r.bus.id); const b = r.bus;
    const bx = vis.g.position.x;
    const frontZ = SLOT_Z - (busLength(b.len) * (PARK_SCALE[b.len] || 0.75)) / 2;
    const off = (Math.random() - 0.5) * 0.22;
    const doorZ = frontZ - 0.28;
    p.userData.walk = {
      pts: [new THREE.Vector2(p.position.x, p.position.z), new THREE.Vector2(bx + off, STRIP_Z + 0.1), new THREE.Vector2(bx + off * 0.5, doorZ)],
      seg: 0, t: 0, bus: vis, color: r.color, hop: 0,
    };
    p.userData.state = 'board';
    this.walkers.add(p);
    this.sfx('step');
  }

  updatePassengers(dt) {
    const s = this.state; if (!s) return;
    this.time += dt;
    // sıradakiler
    for (const [idx, p] of this.passengers) {
      const ud = p.userData;
      if (ud.spawn < 1) { ud.spawn = Math.min(1, ud.spawn + dt * 4); p.scale.setScalar(Math.max(0.01, ease.back(ud.spawn))); }
      const tgt = this.queuePos(idx - s.qi);
      const dx = tgt.x - p.position.x, dz = tgt.z - p.position.z; const dist = Math.hypot(dx, dz);
      if (dist > 0.02) {
        const step = Math.min(dist, 3.6 * dt);
        p.position.x += (dx / dist) * step; p.position.z += (dz / dist) * step;
        ud.moving = true; ud.targetYaw = Math.atan2(dx, dz);
      } else { ud.moving = false; ud.targetYaw = 0; }
      this.animatePassenger(p, dt, ud.moving ? 'walk' : 'idle');
    }
    // biniş yürüyüşü
    for (const p of [...this.walkers]) {
      const ud = p.userData, w = ud.walk;
      if (w.hop > 0) {                                        // otobüse atlama
        w.hop += dt * 4.5; const k = Math.min(1, w.hop - 1);
        const v = w.bus; const bz = v.g.position.z - 0.15;
        p.position.x += (v.g.position.x - p.position.x) * Math.min(1, dt * 12);
        p.position.z += (bz - p.position.z) * Math.min(1, dt * 12);
        p.position.y = Math.sin(k * Math.PI) * 0.5;
        p.scale.setScalar(Math.max(0.15, 1 - k * 0.85));
        this.animatePassenger(p, dt, 'board');
        if (k >= 1) this.finishBoard(p);
        continue;
      }
      const a = w.pts[w.seg], b2 = w.pts[w.seg + 1];
      const segLen = a.distanceTo(b2);
      const remain = Math.hypot(b2.x - p.position.x, b2.y - p.position.z);
      const lastSeg = w.seg === w.pts.length - 2;
      const speed = lastSeg ? Math.max(1.8, Math.min(4.8, remain * 3.2 + 1.2)) : 4.8;
      const dx = b2.x - p.position.x, dz = b2.y - p.position.z; const dist = Math.hypot(dx, dz);
      const step = Math.min(dist, speed * dt);
      if (dist > 1e-4) { p.position.x += (dx / dist) * step; p.position.z += (dz / dist) * step; ud.targetYaw = Math.atan2(dx, dz); }
      this.animatePassenger(p, dt, 'walk');
      if (dist - step < 0.03) { if (lastSeg) { w.hop = 1; } else w.seg++; }
      void segLen;
    }
    // sevinçli yolcular
    for (const p of this.celebrating) this.animatePassenger(p, dt, 'celebrate');
  }

  animatePassenger(p, dt, mode) {
    const ud = p.userData; ud.phase += dt * (mode === 'walk' ? 11 : mode === 'celebrate' ? 9 : 2.2);
    const ph = ud.phase;
    if (ud.targetYaw !== undefined) p.rotation.y += angDiff(p.rotation.y, ud.targetYaw) * Math.min(1, dt * 12);
    const [aL, aR] = ud.arms, [lL, lR] = ud.legs;
    if (mode === 'walk') {
      const sw = Math.sin(ph) * 0.9;
      lL.rotation.x = sw; lR.rotation.x = -sw; aL.rotation.x = -sw * 0.8; aR.rotation.x = sw * 0.8;
      ud.rig.position.y = Math.abs(Math.sin(ph)) * 0.05; ud.rig.rotation.z = Math.sin(ph) * 0.05; ud.head.rotation.z = Math.sin(ph) * 0.05;
    } else if (mode === 'celebrate') {
      aL.rotation.x = aR.rotation.x = -2.6 + Math.sin(ph) * 0.3; aL.rotation.z = 0.3; aR.rotation.z = -0.3;
      lL.rotation.x = lR.rotation.x = 0; p.position.y = Math.abs(Math.sin(ph * 0.9)) * 0.35; ud.rig.rotation.z = 0;
    } else if (mode === 'board') {
      lL.rotation.x = Math.sin(ph) * 0.6; lR.rotation.x = -Math.sin(ph) * 0.6; aL.rotation.x = aR.rotation.x = -1.2;
    } else {
      lL.rotation.x = lR.rotation.x = 0; aL.rotation.x = aR.rotation.x = 0; aL.rotation.z = 0.04; aR.rotation.z = -0.04;
      const br = Math.sin(ph + p.position.x) * 0.02; ud.rig.position.y = 0; ud.rig.scale.set(1 + br, 1 - br, 1 + br); ud.rig.rotation.z = Math.sin(ph * 0.5 + p.position.z) * 0.02;
      ud.head.rotation.z = Math.sin(ph * 0.5 + p.position.x * 2) * 0.05;
    }
  }

  finishBoard(p) {
    const w = p.userData.walk; const vis = w.bus;
    this.walkers.delete(p); this.passGroup.remove(p);
    vis.vcount++; vis.vcolors.push(w.color);
    setBusPassengers(vis.g, vis.vcolors, (c) => (c === VIP_COLOR ? 0xffffff : this.hexOf(c)));
    vis.bounce = Math.max(vis.bounce, 0.6);
    this.fx.burst(vis.g.position.x, 0.8, vis.g.position.z - 0.5, this.hexOf(w.color), 7, 2.2, true, 0.55);
    this.sfx('board');
    this.onBoarded?.(w.color, this.state.buses[vis.id]);
    this.idleFired = false;
  }

  // ------------------------------------------------------------------ Yönetmen (boarding/departure/idle)
  director(dt) {
    const s = this.state; if (!s) return;
    this.boardCd -= dt;
    // dolu ve tüm yolcuları binmiş otobüs → kalkış hazırlığı
    let ready = null;
    for (const vis of this.busVis.values()) {
      const b = s.buses[vis.id];
      if (b.st === 'parked' && b.arrived && !vis.departing && ((vis.vcount >= b.seats && b.boarded >= b.seats) || (this.forceDepart && vis.vcount >= b.boarded))) { ready = vis; break; }
    }
    if (ready && !this.stripBusy && this.walkers.size === 0) { this.startDeparture(ready); return; }
    if (!ready && !this.stripBusy && this.boardCd <= 0) {
      const tgt = E.boardTarget(s);
      if (tgt) {
        const r = E.boardStep(s);
        if (r) { this.startBoardWalk(r); this.boardCd = 0.16; this.ensureQueue(); }
      }
    }
    // boşta mı?
    if (!this.idleFired) {
      const traveling = [...this.busVis.values()].some((v) => v.traveling || v.departing);
      if (!traveling && this.walkers.size === 0 && !this.stripBusy && !E.boardTarget(s) && !ready) { this.idleFired = true; this.onIdle?.(); }
    }
  }

  isBusy() {
    if (!this.state) return false;
    return [...this.busVis.values()].some((v) => v.traveling) || this.walkers.size > 0 || this.stripBusy;
  }
  isTraveling() { return [...this.busVis.values()].some((v) => v.traveling); }

  // ------------------------------------------------------------------ Efektler / geri bildirim
  tween(dur, fn, done) { this.tweens.push({ t: 0, dur, fn, done }); }

  bump(id) {
    const vis = this.busVis.get(id); if (!vis) return;
    const b = this.state.buses[id]; const d = E.DIRS[b.dir]; const g = vis.g;
    const bx = g.userData.baseX, bz = g.userData.baseZ;
    this.tween(0.32, (k) => { const o = Math.sin(k * Math.PI) * 0.16; g.position.x = bx + d.x * o; g.position.z = bz + d.y * o; g.rotation.z = Math.sin(k * Math.PI * 4) * 0.04 * (1 - k); }, () => { g.position.set(bx, 0, bz); g.rotation.z = 0; });
    if (vis.parts.arrow) { vis.parts.arrow.material.color.set(0xff5a5a); setTimeout(() => vis.parts.arrow && vis.parts.arrow.material.color.set(0xffffff), 350); }
    this.sfx('error');
  }

  flashBus(id, color = 0xff4d4d, dur = 0.6) {
    const vis = this.busVis.get(id); if (!vis) return;
    const m = vis.parts.bodyMat; const orig = m.emissive.getHex(); const g = vis.g;
    this.tween(dur, (k) => { m.emissive.setHex(color); m.emissiveIntensity = Math.sin(k * Math.PI) * 0.55; }, () => { m.emissive.setHex(orig); m.emissiveIntensity = 0; });
    void g;
  }

  shakeBus(id) { const vis = this.busVis.get(id); if (!vis) return; const g = vis.g; const bx = g.position.x; this.tween(0.3, (k) => { g.position.x = bx + Math.sin(k * 28) * 0.07 * (1 - k); }, () => { g.position.x = bx; }); }

  setGlow(id, color = 0xffe066) {
    let gl = this.glows.get(id);
    if (color === null) { if (gl) { this.scene.remove(gl); this.glows.delete(id); } return; }
    const vis = this.busVis.get(id); if (!vis) return;
    if (!gl) {
      gl = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: glowTexture(), color, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
      gl.rotation.x = -Math.PI / 2; gl.renderOrder = 4; this.scene.add(gl); this.glows.set(id, gl);
    }
    gl.material.color.setHex(color);
    const b = this.state.buses[id]; const hz = E.DIRS[b.dir].horiz;
    gl.userData = { w: hz ? b.len + 1.0 : 1.9, l: hz ? 1.9 : b.len + 1.0 };
    gl.position.set(vis.g.position.x, 0.08, vis.g.position.z);
  }
  clearGlows() { for (const id of [...this.glows.keys()]) this.setGlow(id, null); }

  unlockSlotFx(i, temp = false) {
    const m = this.slotMeshes[i + 1];
    m.material.map = temp ? this.slotTex.temp : this.slotTex.open; m.material.needsUpdate = true;
    const x = slotX(i + 1);
    this.fx.ring(x, SLOT_Z, 0xfff0a0, 0.3, 2.4, 0.9); this.fx.ring(x, SLOT_Z, 0x8cffb4, 0.2, 1.6, 0.7);
    this.fx.burst(x, 0.3, SLOT_Z, 0xffe28a, 28, 3, true, 1.0);
    this.tween(0.5, (k) => { m.scale.set(1 + Math.sin(k * Math.PI) * 0.1, 1 + Math.sin(k * Math.PI) * 0.04, 1); }, () => m.scale.set(1, 1, 1));
    this.sfx('unlock');
  }

  // yeniden çağrılan/çağırılan otobüsleri görsel olarak güncelle
  animateRecall(id) {
    const vis = this.busVis.get(id); const b = this.state.buses[id]; if (!vis) return;
    const g = vis.g; const c = this.busCenter(b);
    const from = g.position.clone(); const fs = g.scale.x;
    vis.parked = false;
    this.removeLabel(id);
    this.tween(0.8, (k) => {
      const e = ease.inOut(k);
      g.position.x = from.x + (c.x - from.x) * e; g.position.z = from.z + (c.z - from.z) * e; g.position.y = Math.sin(k * Math.PI) * 1.6;
      g.scale.setScalar(fs + (1 - fs) * e); g.rotation.y += angDiff(g.rotation.y, YAW[b.dir]) * Math.min(1, k * 1.5);
    }, () => { g.position.set(c.x, 0, c.z); g.rotation.y = YAW[b.dir]; g.scale.setScalar(1); g.userData.baseX = c.x; g.userData.baseZ = c.z; if (vis.parts.arrow) vis.parts.arrow.visible = true; });
    this.fx.ring(from.x, from.z, 0x7dd3ff, 0.3, 1.8, 0.7);
  }

  // vinç ile çağırma (yol kapalı olsa da): havadan park alanına
  startCraneToSlot(id, slot) {
    const b = this.state.buses[id]; const vis = this.busVis.get(id); const g = vis.g;
    const k = slot === 'V' ? 0 : slot + 1; const from = g.position.clone(); const fs = g.scale.x; const park = PARK_SCALE[b.len] || 0.75;
    vis.traveling = true; vis.fromBoard = true;
    this.fx.ring(from.x, from.z, 0xb58bff, 0.3, 1.8, 0.7); this.sfx('whoosh');
    const to = { x: slotX(k), z: SLOT_Z };
    this.tween(0.95, (t) => {
      const e = ease.inOut(t);
      g.position.x = from.x + (to.x - from.x) * e; g.position.z = from.z + (to.z - from.z) * e; g.position.y = Math.sin(t * Math.PI) * 3.2;
      g.scale.setScalar(fs + (park - fs) * e); g.rotation.y += angDiff(g.rotation.y, 0) * Math.min(1, t * 2);
      if (Math.random() < 0.5) this.fx.stars.emit(g.position.x, g.position.y + 0.3, g.position.z, 0, 0, 0, 0xc9a7ff, 0.5, 0.2, 0.02, 0, 0);
    }, () => { g.position.y = 0; vis.traveling = false; this.finishArrive(vis); });
  }

  // VIP çağırma: gökten düşen VIP otobüs
  dropVip(bus) {
    const vis = this.makeBusVis(bus); const g = vis.g;
    g.visible = true; g.position.set(slotX(0), 8, SLOT_Z); g.rotation.y = 0; g.scale.setScalar(PARK_SCALE[bus.len]);
    if (vis.parts.arrow) vis.parts.arrow.visible = false;
    vis.traveling = true;
    this.fx.ring(slotX(0), SLOT_Z, 0xffd45a, 0.3, 2.6, 0.9);
    this.tween(0.8, (k) => { g.position.y = 8 * (1 - ease.out(k)); g.rotation.y = (1 - k) * Math.PI * 2; }, () => { g.position.y = 0; g.rotation.y = 0; vis.traveling = false; this.finishArrive(vis); });
  }

  convertFx(id, kind) {
    const vis = this.busVis.get(id); if (!vis) return; const g = vis.g; const b = this.state.buses[id];
    this.fx.ring(g.position.x, g.position.z, 0xc58bff, 0.3, 2.0, 0.7);
    this.fx.burst(g.position.x, 0.7, g.position.z, 0xc58bff, 22, 3, true, 0.9);
    this.tween(0.5, (k) => { const sc = 1 + Math.sin(k * Math.PI) * 0.22; g.scale.setScalar(sc); }, () => g.scale.setScalar(1));
    if (kind === 'color') { recolorBus(g, this.hexOf(b.color)); }
    this.sfx('convert');
  }

  rebuildBus(id) {
    const old = this.busVis.get(id); if (old) this.busGroup.remove(old.g);
    const vis = this.makeBusVis(this.state.buses[id]);
    this.convertFx(id, 'rebuild'); return vis;
  }

  celebrate() {
    this.fx.confetti(0, -4, 110); this.sfx('win');
    for (let i = 0; i < 12; i++) {
      const g = buildPassenger(i % 7, this.hexOf, i); g.traverse((o) => { if (o.isMesh) o.castShadow = false; });
      g.position.set(-4.4 + i * 0.8, 0, STRIP_Z + (i % 2) * 0.3); g.userData.targetYaw = 0; g.scale.setScalar(0.01);
      g.userData.pop = -i * 0.05; this.passGroup.add(g); this.celebrating.push(g);
    }
    // otobüsler sevinç zıplaması
    for (const v of this.busVis.values()) v.bounce = 1;
  }

  // ------------------------------------------------------------------ Giriş
  bindInput() {
    const el = this.renderer.domElement;
    const ndc = (e) => { const r = el.getBoundingClientRect(); return new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1); };
    const groundHit = (e, y) => { this.raycaster.setFromCamera(ndc(e), this.camera); const pl = new THREE.Plane(new THREE.Vector3(0, 1, 0), -y); const v = new THREE.Vector3(); return this.raycaster.ray.intersectPlane(pl, v) ? v : null; };
    this._groundHit = groundHit;
    const pickBus = (e) => {
      const hit = groundHit(e, 0.4); if (!hit || !this.state) return -1;
      const s = this.state;
      // hücre tabanlı + yakınlık
      let best = -1, bd = 1e9;
      for (const b of s.buses) {
        if (b.st !== 'board') continue;
        const c = this.busCenter(b); const hz = E.DIRS[b.dir].horiz;
        const hx = (hz ? b.len : 1) / 2 + 0.08, hzz = (hz ? 1 : b.len) / 2 + 0.08;
        const dx = Math.abs(hit.x - c.x), dz = Math.abs(hit.z - c.z);
        if (dx <= hx && dz <= hzz) { const d = dx / hx + dz / hzz; if (d < bd) { bd = d; best = b.id; } }
      }
      return best;
    };
    el.addEventListener('pointerdown', (e) => {
      if (this.inputLocked) return;
      const id = pickBus(e);
      if (id >= 0) { this.dragInfo = { id, start: groundHit(e, 0.4), moved: 0, e0: { x: e.clientX, y: e.clientY }, fired: false }; el.setPointerCapture(e.pointerId); return; }
      const hit = groundHit(e, 0.04);
      if (hit && Math.abs(hit.z - SLOT_Z) < SLOT_L / 2) {
        const k = Math.round(hit.x / SLOT_SP + 3.5);
        if (k >= 0 && k <= SLOTS_TOTAL && Math.abs(hit.x - slotX(k)) < SLOT_W / 2 + 0.05) this.onSlotTap?.(k === 0 ? 'V' : k - 1);
      }
    });
    el.addEventListener('pointermove', (e) => {
      const di = this.dragInfo; if (!di || di.fired) return;
      const hit = groundHit(e, 0.4); if (!hit || !di.start) return;
      const b = this.state.buses[di.id]; const d = E.DIRS[b.dir];
      const along = (hit.x - di.start.x) * d.x + (hit.z - di.start.z) * d.y;
      di.moved = Math.max(di.moved, Math.hypot(e.clientX - di.e0.x, e.clientY - di.e0.y));
      const vis = this.busVis.get(di.id); if (!vis) return;
      const free = this.freeGap(b);
      vis.dragOff = Math.max(0, Math.min(along, Math.min(0.55, free)));
      if (along > 0.55) { di.fired = true; vis.dragOff = 0; this.fireTap(di.id); }
    });
    const up = () => {
      const di = this.dragInfo; this.dragInfo = null; if (!di) return;
      const vis = this.busVis.get(di.id); if (vis) vis.dragOff = 0;
      if (!di.fired && di.moved < 14) this.fireTap(di.id);
    };
    el.addEventListener('pointerup', up); el.addEventListener('pointercancel', () => { const di = this.dragInfo; this.dragInfo = null; if (di) { const v = this.busVis.get(di.id); if (v) v.dragOff = 0; } });
  }

  freeGap(b) {
    // engelleyen en yakın aracın mesafesi (hücre); engel yoksa sonsuz
    const s = this.state; const d = E.DIRS[b.dir]; const occ = E.occupancy(s, b.id);
    let [cx, cy] = b.dir === 'R' ? [b.x + b.len - 1, b.y] : b.dir === 'D' ? [b.x, b.y + b.len - 1] : [b.x, b.y];
    let gap = 0;
    for (;;) { cx += d.x; cy += d.y; if (cx < 0 || cy < 0 || cx >= s.w || cy >= s.h) return 99; if (occ.has(cx + ',' + cy)) return gap; gap++; }
  }

  fireTap(id) { if (this.tapFilter && !this.tapFilter(id)) { this.onTapRejected?.(id); return; } this.onBusTap?.(id); }

  // ------------------------------------------------------------------ Etiketler (koltuk sayacı)
  removeLabel(id) { const l = this.labels.get(id); if (l) { l.remove(); this.labels.delete(id); } }
  updateLabels() {
    const s = this.state; if (!s) return;
    const rect = { w: this.container.clientWidth, h: this.container.clientHeight };
    for (const vis of this.busVis.values()) {
      const b = s.buses[vis.id];
      if (b.st !== 'parked' || !vis.parked || vis.departing) { this.removeLabel(vis.id); continue; }
      let el = this.labels.get(vis.id);
      if (!el) { el = document.createElement('div'); el.className = 'seat-badge'; this.labelLayer.appendChild(el); this.labels.set(vis.id, el); }
      const left = b.seats - vis.vcount;
      if (el._v !== left) { el.textContent = left; el._v = left; }
      el.style.background = b.vip ? 'linear-gradient(#ffe27a,#e0a020)' : '#' + this.hexOf(b.color).toString(16).padStart(6, '0');
      el.style.color = b.vip ? '#5a3a00' : '#fff';
      const v = new THREE.Vector3(vis.g.position.x, 0.05, vis.g.position.z + 1.75).project(this.camera);
      el.style.transform = `translate(${(v.x * 0.5 + 0.5) * rect.w}px, ${(-v.y * 0.5 + 0.5) * rect.h}px) translate(-50%,-50%)`;
    }
  }

  project(x, y, z) {
    const v = new THREE.Vector3(x, y, z).project(this.camera);
    return { x: (v.x * 0.5 + 0.5) * this.container.clientWidth, y: (-v.y * 0.5 + 0.5) * this.container.clientHeight };
  }
  busScreenPos(id) { const v = this.busVis.get(id); if (!v) return null; return this.project(v.g.position.x, 0.6, v.g.position.z); }
  slotScreenPos(i) { return this.project(slotX(i + 1), 0.1, SLOT_Z); }
  vipSlotScreenPos() { return this.project(slotX(0), 0.1, SLOT_Z); }
  queueScreenPos() { return this.project(0, 0.5, QZ0 - 1.5); }

  // ------------------------------------------------------------------ Döngü
  update(dt) {
    dt = Math.min(dt, 0.05);
    const s = this.state;
    for (let i = this.tweens.length - 1; i >= 0; i--) {
      const t = this.tweens[i]; t.t += dt; const k = Math.min(1, t.t / t.dur); t.fn(k);
      if (k >= 1) { this.tweens.splice(i, 1); t.done?.(); }
    }
    if (s) {
      for (const vis of this.busVis.values()) {
        if (vis.traveling && vis.travel) this.updateTravel(vis, dt);
        else if (vis.departing) this.updateDeparture(vis, dt);
        else if (vis.parked) {
          if (vis.bounce > 0) { vis.bounce = Math.max(0, vis.bounce - dt * 3.2); const k = vis.bounce; const sc = PARK_SCALE[s.buses[vis.id]?.len || 2] || 0.75; vis.g.scale.set(sc * (1 + Math.sin(k * 14) * 0.03 * k), sc * (1 - Math.sin(k * 14) * 0.04 * k), sc * (1 + Math.sin(k * 14) * 0.03 * k)); }
          if (vis.parts.glow) { vis.parts.glow.material.opacity = 0.6 + Math.sin(this.time * 3) * 0.2; if (Math.random() < 0.08) this.fx.sparkleAround(vis.g.position.x, vis.g.position.z, 0.8, 2, 0xffe28a, 1); }
        } else if (s.buses[vis.id].st === 'board') {
          // sürükleme önizlemesi
          const b = s.buses[vis.id]; const d = E.DIRS[b.dir]; const gx = vis.g.userData.baseX, gz = vis.g.userData.baseZ;
          if (gx !== undefined && !this.tweens.length) { vis.g.position.x += (gx + d.x * vis.dragOff - vis.g.position.x) * Math.min(1, dt * 18); vis.g.position.z += (gz + d.y * vis.dragOff - vis.g.position.z) * Math.min(1, dt * 18); }
          else if (gx !== undefined && vis.dragOff) { vis.g.position.x = gx + d.x * vis.dragOff; vis.g.position.z = gz + d.y * vis.dragOff; }
          if (vis.parts.glow) vis.parts.glow.material.opacity = 0.6 + Math.sin(this.time * 3) * 0.2;
        }
      }
      for (const [id, gl] of this.glows) {
        const vis = this.busVis.get(id); if (!vis) continue;
        const pulse = 1 + Math.sin(this.time * 5) * 0.12; gl.position.x = vis.g.position.x; gl.position.z = vis.g.position.z;
        gl.scale.set(gl.userData.w * pulse, gl.userData.l * pulse, 1); gl.material.opacity = 0.75 + Math.sin(this.time * 5) * 0.25;
      }
      this.updatePassengers(dt);
      for (const p of this.celebrating) { const u = p.userData; if (u.pop !== undefined) { u.pop += dt * 3; if (u.pop > 0) p.scale.setScalar(Math.min(1, ease.back(Math.min(1, u.pop)))); } }
      this.director(dt);
      this.updateLabels();
    }
    this.fx.update(dt);
    if (!this.noRender) this.renderer.render(this.scene, this.camera);
  }

  dispose() { this.ro.disconnect(); this.renderer.dispose(); this.renderer.domElement.remove(); this.labelLayer.remove(); }
}
