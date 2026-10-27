import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { buildBus, buildPassenger, hexFor, setBusPassengers } from './models.js';
const r = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
r.setPixelRatio(1.5); r.setSize(innerWidth, innerHeight); r.toneMapping = THREE.NeutralToneMapping; r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(r.domElement);
const sc = new THREE.Scene(); sc.background = new THREE.Color(0xc9d6e6);
sc.environment = new THREE.PMREMGenerator(r).fromScene(new RoomEnvironment(), 0.04).texture; sc.environmentIntensity = 0.32;
sc.add(new THREE.HemisphereLight(0xeef5ff, 0x9fb0cc, 0.55));
const d = new THREE.DirectionalLight(0xfff3dc, 1.7); d.position.set(-4, 8, 6); d.castShadow = true; d.shadow.mapSize.set(2048, 2048); const c = d.shadow.camera; c.left = -8; c.right = 8; c.top = 8; c.bottom = -8; sc.add(d);
const floor = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.MeshStandardMaterial({ color: 0xd5dff0 })); floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; sc.add(floor);
const hex = hexFor('vivid');
const styles = ['city', 'mini', 'school', 'coach'];
const lens = [3, 2, 3, 4];
styles.forEach((st, i) => {
  const g = buildBus({ len: lens[i], hex: hex(i), style: st, seats: lens[i] * 2, rim: i === 3 ? 'gold' : 'steel' });
  g.rotation.y = -Math.PI / 2 + 0.0; g.position.set(0, 0, -3.6 + i * 1.6); g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  setBusPassengers(g, [0, 1, 2, 3, 4], hex);
  sc.add(g);
});
const vip = buildBus({ len: 3, hex: 0, vip: true, seats: 8 }); vip.rotation.y = -Math.PI / 2; vip.position.set(0, 0, 3.2); vip.traverse((o) => { if (o.isMesh) o.castShadow = true; }); setBusPassengers(vip, [0, 1, 2], hex); sc.add(vip);
for (let i = 0; i < 7; i++) { const p = buildPassenger(i, hex, i); p.position.set(-4.2 + i * 0.6, 0, 5); p.rotation.y = 0.3; p.traverse((o) => { if (o.isMesh) o.castShadow = true; }); sc.add(p); }
const cam = new THREE.PerspectiveCamera(34, innerWidth / innerHeight, 0.1, 100);
const q = new URLSearchParams(location.search);
cam.position.set(+(q.get('x') || 7), +(q.get('y') || 5), +(q.get('z') || 6)); cam.lookAt(0, 0.3, +(q.get('lz') || 0));
r.render(sc, cam); window.done = true;
