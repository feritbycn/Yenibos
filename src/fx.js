// Parçacık ve halka efektleri (tek draw call'lu Points sistemleri).
import * as THREE from 'three';

function dotTexture(kind) {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d');
  if (kind === 'star') {
    g.translate(32, 32); g.fillStyle = '#fff'; g.beginPath();
    for (let i = 0; i < 10; i++) { const r = i % 2 ? 11 : 28; const a = -Math.PI / 2 + i * Math.PI / 5; g.lineTo(Math.cos(a) * r, Math.sin(a) * r); }
    g.closePath(); g.fill();
  } else {
    const gr = g.createRadialGradient(32, 32, 2, 32, 32, 30);
    gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.6, 'rgba(255,255,255,.85)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

class Particles {
  constructor(scene, kind, max) {
    this.max = max; this.n = 0; this.next = 0;
    this.pos = new Float32Array(max * 3); this.col = new Float32Array(max * 3);
    this.size = new Float32Array(max); this.alpha = new Float32Array(max);
    this.vel = new Float32Array(max * 3); this.life = new Float32Array(max); this.maxLife = new Float32Array(max);
    this.s0 = new Float32Array(max); this.s1 = new Float32Array(max); this.grav = new Float32Array(max); this.drag = new Float32Array(max);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    geo.setAttribute('pcolor', new THREE.BufferAttribute(this.col, 3));
    geo.setAttribute('psize', new THREE.BufferAttribute(this.size, 1));
    geo.setAttribute('palpha', new THREE.BufferAttribute(this.alpha, 1));
    this.geo = geo;
    this.mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.NormalBlending,
      uniforms: { map: { value: dotTexture(kind) }, scale: { value: 600 } },
      vertexShader: `attribute vec3 pcolor; attribute float psize; attribute float palpha; varying vec3 vC; varying float vA; uniform float scale;
        void main(){ vC=pcolor; vA=palpha; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=psize*scale/-mv.z; gl_Position=projectionMatrix*mv; }`,
      fragmentShader: `uniform sampler2D map; varying vec3 vC; varying float vA;
        void main(){ vec4 t=texture2D(map,gl_PointCoord); gl_FragColor=vec4(vC*1.0,t.a*vA); if(gl_FragColor.a<0.01) discard; }`,
    });
    this.pts = new THREE.Points(geo, this.mat); this.pts.frustumCulled = false; this.pts.renderOrder = 10;
    scene.add(this.pts);
    for (let i = 0; i < max; i++) this.alpha[i] = 0;
  }
  emit(x, y, z, vx, vy, vz, color, life, s0, s1, grav = 0, drag = 0) {
    const i = this.next; this.next = (this.next + 1) % this.max;
    const c = new THREE.Color(color);
    this.pos.set([x, y, z], i * 3); this.vel.set([vx, vy, vz], i * 3); this.col.set([c.r, c.g, c.b], i * 3);
    this.life[i] = life; this.maxLife[i] = life; this.s0[i] = s0; this.s1[i] = s1; this.grav[i] = grav; this.drag[i] = drag; this.alpha[i] = 1;
  }
  update(dt) {
    for (let i = 0; i < this.max; i++) {
      if (this.life[i] <= 0) { if (this.alpha[i] !== 0) { this.alpha[i] = 0; this.size[i] = 0; } continue; }
      this.life[i] -= dt;
      const k = 1 - Math.max(0, this.life[i]) / this.maxLife[i];
      const p = i * 3;
      this.vel[p + 1] -= this.grav[i] * dt;
      const dr = Math.max(0, 1 - this.drag[i] * dt);
      this.vel[p] *= dr; this.vel[p + 1] *= dr; this.vel[p + 2] *= dr;
      this.pos[p] += this.vel[p] * dt; this.pos[p + 1] += this.vel[p + 1] * dt; this.pos[p + 2] += this.vel[p + 2] * dt;
      this.size[i] = this.s0[i] + (this.s1[i] - this.s0[i]) * k;
      this.alpha[i] = k < 0.15 ? k / 0.15 : 1 - (k - 0.15) / 0.85;
    }
    this.geo.attributes.position.needsUpdate = true; this.geo.attributes.pcolor.needsUpdate = true;
    this.geo.attributes.psize.needsUpdate = true; this.geo.attributes.palpha.needsUpdate = true;
  }
}

export class FX {
  constructor(scene, quality = 'high') {
    this.scene = scene;
    const mult = quality === 'low' ? 0.5 : 1;
    this.dots = new Particles(scene, 'dot', Math.floor(500 * mult));
    this.stars = new Particles(scene, 'star', Math.floor(300 * mult));
    this.rings = [];
    this.mult = mult;
  }
  setScale(s) { this.dots.mat.uniforms.scale.value = s; this.stars.mat.uniforms.scale.value = s; }
  puff(x, z, color = 0xffffff, n = 1, big = 0.5) {
    for (let i = 0; i < n; i++) this.dots.emit(x + (Math.random() - 0.5) * 0.2, 0.12, z + (Math.random() - 0.5) * 0.2, (Math.random() - 0.5) * 0.5, 0.4 + Math.random() * 0.3, (Math.random() - 0.5) * 0.5, color, 0.55 + Math.random() * 0.3, 0.2, big, -0.2, 2.5);
  }
  burst(x, y, z, color, n = 14, speed = 3, star = true, life = 0.7) {
    n = Math.ceil(n * this.mult);
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, e = Math.random() * 0.9 + 0.2;
      const sp = speed * (0.5 + Math.random() * 0.7);
      (star ? this.stars : this.dots).emit(x, y, z, Math.cos(a) * sp * e, sp * (0.5 + Math.random() * 0.8), Math.sin(a) * sp * e, color, life * (0.7 + Math.random() * 0.6), 0.22, 0.04, 6, 1.5);
    }
  }
  sparkleAround(x, z, w, l, color = 0xffe28a, n = 3) {
    for (let i = 0; i < n; i++) this.stars.emit(x + (Math.random() - 0.5) * w, 0.2 + Math.random() * 0.9, z + (Math.random() - 0.5) * l, 0, 0.5, 0, color, 0.9, 0.0, 0.24, -0.2, 0);
  }
  ring(x, z, color = 0xffe28a, r0 = 0.3, r1 = 2.2, dur = 0.8) {
    const m = new THREE.Mesh(new THREE.RingGeometry(0.85, 1, 48), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    m.rotation.x = -Math.PI / 2; m.position.set(x, 0.06, z); m.scale.setScalar(r0); m.renderOrder = 5;
    this.scene.add(m); this.rings.push({ m, t: 0, dur, r0, r1 });
  }
  confetti(cx, cz, n = 90) {
    n = Math.ceil(n * this.mult);
    const cols = [0xff4d6d, 0xffc93c, 0x4dd0ff, 0x7bff6a, 0xc58bff, 0xffffff];
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, sp = 2 + Math.random() * 5;
      this.stars.emit(cx + (Math.random() - 0.5) * 6, 3 + Math.random() * 2, cz + (Math.random() - 0.5) * 8, Math.cos(a) * sp * 0.4, 1 + Math.random() * 3, Math.sin(a) * sp * 0.4, cols[i % cols.length], 1.8 + Math.random() * 1.2, 0.2, 0.16, 5, 0.6);
    }
  }
  update(dt) {
    this.dots.update(dt); this.stars.update(dt);
    for (let i = this.rings.length - 1; i >= 0; i--) {
      const r = this.rings[i]; r.t += dt; const k = Math.min(1, r.t / r.dur);
      r.m.scale.setScalar(r.r0 + (r.r1 - r.r0) * (1 - Math.pow(1 - k, 3)));
      r.m.material.opacity = 0.9 * (1 - k);
      if (k >= 1) { this.scene.remove(r.m); r.m.geometry.dispose(); r.m.material.dispose(); this.rings.splice(i, 1); }
    }
  }
}
