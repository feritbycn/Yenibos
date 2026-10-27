// Koleksiyon/VIP önizlemesi için küçük 3D döner model görüntüleyici (ayrı, hafif renderer).
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { buildBus, setBusPassengers, hexFor } from './models.js';

export class Preview {
  constructor(container) {
    this.container = container;
    const r = this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)); r.toneMapping = THREE.NeutralToneMapping;
    r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(r.domElement);
    const s = this.scene = new THREE.Scene();
    s.environment = new THREE.PMREMGenerator(r).fromScene(new RoomEnvironment(), 0.04).texture; s.environmentIntensity = 0.4;
    s.add(new THREE.HemisphereLight(0xeef5ff, 0x9fb0cc, 0.65));
    const d = new THREE.DirectionalLight(0xfff3dc, 1.8); d.position.set(-3, 6, 4); d.castShadow = true; d.shadow.mapSize.set(1024, 1024);
    const c = d.shadow.camera; c.left = -4; c.right = 4; c.top = 4; c.bottom = -4; s.add(d);
    const floor = new THREE.Mesh(new THREE.CircleGeometry(3.2, 48), new THREE.MeshStandardMaterial({ color: 0xe8eefb, roughness: 0.9 }));
    floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; s.add(floor);
    this.stand = new THREE.Group(); s.add(this.stand);
    this.cam = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
    this.yaw = 0.6; this.auto = true; this.t = 0; this.model = null; this.running = true;
    const el = r.domElement; let drag = null;
    el.addEventListener('pointerdown', (e) => { drag = { x: e.clientX, yaw: this.yaw }; this.auto = false; el.setPointerCapture(e.pointerId); });
    el.addEventListener('pointermove', (e) => { if (drag) this.yaw = drag.yaw + (e.clientX - drag.x) * 0.012; });
    el.addEventListener('pointerup', () => { drag = null; setTimeout(() => { this.auto = true; }, 1800); });
    this.ro = new ResizeObserver(() => this.resize()); this.ro.observe(container); this.resize();
    const loop = () => { if (!this.running) return; this.t += 0.016; if (this.auto) this.yaw += 0.012; if (this.model) { this.stand.rotation.y = this.yaw; this.model.position.y = 0.02 + Math.sin(this.t * 2) * 0.01; } this.renderer.render(this.scene, this.cam); this.raf = requestAnimationFrame(loop); };
    loop();
  }
  resize() {
    const w = this.container.clientWidth || 300, h = this.container.clientHeight || 220;
    this.renderer.setSize(w, h, false); this.cam.aspect = w / h; this.cam.updateProjectionMatrix();
    this.cam.position.set(0, 2.4, 4.6); this.cam.lookAt(0, 0.45, 0);
  }
  show({ style = 'city', vip = false, vipSkin = 'gold', rim = 'steel', palette = 'vivid', colorIndex = 0, len = 3 }) {
    if (this.model) this.stand.remove(this.model);
    const hex = hexFor(palette)(colorIndex);
    const m = buildBus({ len, hex, style, vip, rim, vipSkin, seats: len * 2, noArrow: true });
    m.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    const lz = m.userData.dims.Lz; m.scale.setScalar(Math.min(1.5, 3.1 / lz));
    setBusPassengers(m, [0, 1, 2, 3, 4, 5].slice(0, len * 2 - 1), hexFor(palette));
    this.model = m; this.stand.add(m);
  }
  dispose() {
    this.running = false; cancelAnimationFrame(this.raf); this.ro.disconnect();
    this.renderer.dispose(); this.renderer.forceContextLoss?.(); this.renderer.domElement.remove();
  }
}
