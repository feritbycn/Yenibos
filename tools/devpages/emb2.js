import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { buildBus, hexFor, setBusPassengers } from '../../src/models.js';
import { EMBLEMS, drawTeamSlot } from '../../src/emblems.js';
const W = 1000, RH = 330, H = RH * EMBLEMS.length;
const r = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
r.setPixelRatio(1); r.setSize(W, H); r.toneMapping = THREE.NeutralToneMapping; r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFSoftShadowMap; r.setScissorTest(true);
document.body.appendChild(r.domElement);
const hex = hexFor('vivid');
function mkScene() {
  const sc = new THREE.Scene(); sc.background = new THREE.Color(0xaab4c8);
  sc.environment = new THREE.PMREMGenerator(r).fromScene(new RoomEnvironment(), 0.04).texture; sc.environmentIntensity = 0.32;
  sc.add(new THREE.HemisphereLight(0xeef5ff, 0x9fb0cc, 0.6));
  const d = new THREE.DirectionalLight(0xfff3dc, 1.7); d.position.set(-4, 8, 6); d.castShadow = true; d.shadow.mapSize.set(1024, 1024); const c = d.shadow.camera; c.left = -6; c.right = 6; c.top = 6; c.bottom = -6; sc.add(d);
  const fl = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.MeshStandardMaterial({ color: 0x5a6173, roughness: 0.95 })); fl.rotation.x = -Math.PI / 2; fl.receiveShadow = true; sc.add(fl);
  return sc;
}
function slotMesh(id, x, z) {
  const c = document.createElement('canvas'); c.width = 128; c.height = 340; drawTeamSlot(c.getContext('2d'), id, 128, 340);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const m = new THREE.Mesh(new THREE.PlaneGeometry(0.92, 3.35), new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false }));
  m.rotation.x = -Math.PI / 2; m.position.set(x, 0.02, z); return m;
}
EMBLEMS.forEach((e, row) => {
  // sol: 3/4 görünüm, parkta otobüs (gövde rengi yolcu rengi: mavi)
  const sc = mkScene();
  const bus = buildBus({ len: 3, hex: hex(row % 2 ? 3 : 5), style: 'city', seats: 6, emblem: e.id, noArrow: true });
  bus.rotation.y = -Math.PI / 2 + 0.25; bus.traverse((o) => { if (o.isMesh) o.castShadow = true; }); setBusPassengers(bus, [0, 1, 2, 3, 4], hex); sc.add(bus);
  const cam = new THREE.PerspectiveCamera(32, 620 / RH, 0.1, 100); cam.position.set(-1.9, 3.6, 3.6); cam.lookAt(0, 0.3, 0);
  const y = H - (row + 1) * RH;
  r.setViewport(0, y, 620, RH); r.setScissor(0, y, 620, RH); r.render(sc, cam);
  // sağ: yukarıdan oyun görünümü: boş park yeri + dolu park yeri
  const s2 = mkScene();
  s2.add(slotMesh(e.id, -0.9, 0)); s2.add(slotMesh(e.id, 0.9, 0));
  const b2 = buildBus({ len: 3, hex: hex(row % 2 ? 3 : 5), style: 'city', seats: 6, emblem: e.id, noArrow: true }); b2.rotation.y = 0; b2.position.set(0.9, 0, 0.0); b2.scale.setScalar(0.8); b2.traverse((o) => { if (o.isMesh) o.castShadow = true; }); setBusPassengers(b2, [0, 1, 2, 3, 4], hex); s2.add(b2);
  const c2 = new THREE.PerspectiveCamera(32, 380 / RH, 0.1, 100); c2.position.set(0, 7.2, 3.2); c2.lookAt(0, 0, 0.1);
  r.setViewport(620, y, 380, RH); r.setScissor(620, y, 380, RH); r.render(s2, c2);
});
window.done = true;
