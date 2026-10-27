// Uygulama ikonunu (özgün çizim, SVG) ve Android açılış görsellerini üretir. Çalıştır: node tools/make-icon.mjs
import { createRequire } from 'node:module'; import fs from 'node:fs'; import path from 'node:path';
const require = createRequire(import.meta.url); const { chromium } = require('playwright');
const RES = new URL('../android/app/src/main/res/', import.meta.url).pathname;

const bus = (s = 1) => `
<g transform="translate(256 262) scale(${s}) translate(-256 -262)">
  <ellipse cx="256" cy="432" rx="190" ry="20" fill="rgba(10,20,70,.35)"/>
  <rect x="92" y="372" width="48" height="62" rx="12" fill="#15171e"/><rect x="372" y="372" width="48" height="62" rx="12" fill="#15171e"/>
  <rect x="84" y="112" width="344" height="296" rx="54" fill="#ffc414" stroke="#c98a00" stroke-width="8"/>
  <rect x="84" y="112" width="344" height="52" rx="40" fill="#ffd95a"/>
  <rect x="180" y="124" width="152" height="32" rx="12" fill="#1d2740"/>
  <circle cx="214" cy="140" r="6" fill="#ffd23f"/><circle cx="238" cy="140" r="6" fill="#ffd23f"/><circle cx="262" cy="140" r="6" fill="#ffd23f"/><circle cx="286" cy="140" r="6" fill="#ffd23f"/><circle cx="310" cy="140" r="6" fill="#ffd23f" opacity=".5"/>
  <clipPath id="ws"><rect x="112" y="178" width="288" height="126" rx="30"/></clipPath>
  <rect x="112" y="178" width="288" height="126" rx="30" fill="#8fd0ff" stroke="#2b3b7a" stroke-width="9"/>
  <g clip-path="url(#ws)">
    <polygon points="140,178 200,178 150,304 112,304" fill="#fff" opacity=".35"/><polygon points="236,178 262,178 212,304 186,304" fill="#fff" opacity=".22"/>
    <g><circle cx="176" cy="268" r="21" fill="#ffe3c4" stroke="#2b3b7a" stroke-width="4"/><path d="M146 304a30 36 0 0 1 60 0z" fill="#f23a4a"/><circle cx="168" cy="266" r="3.4" fill="#222"/><circle cx="184" cy="266" r="3.4" fill="#222"/></g>
    <g><circle cx="256" cy="262" r="23" fill="#ffe3c4" stroke="#2b3b7a" stroke-width="4"/><path d="M224 304a32 40 0 0 1 64 0z" fill="#2f7bff"/><circle cx="247" cy="260" r="3.6" fill="#222"/><circle cx="265" cy="260" r="3.6" fill="#222"/><path d="M248 272q8 7 16 0" fill="none" stroke="#222" stroke-width="3.4" stroke-linecap="round"/></g>
    <g><circle cx="338" cy="268" r="21" fill="#ffe3c4" stroke="#2b3b7a" stroke-width="4"/><path d="M308 304a30 36 0 0 1 60 0z" fill="#2fcf4f"/><circle cx="330" cy="266" r="3.4" fill="#222"/><circle cx="346" cy="266" r="3.4" fill="#222"/></g>
  </g>
  <rect x="136" y="330" width="240" height="52" rx="16" fill="#e8a500"/>
  <rect x="204" y="338" width="104" height="34" rx="10" fill="#262b38"/>
  <rect x="216" y="346" width="80" height="4" rx="2" fill="#5b6478"/><rect x="216" y="358" width="80" height="4" rx="2" fill="#5b6478"/>
  <circle cx="160" cy="352" r="22" fill="#fff6c8" stroke="#c98a00" stroke-width="6"/><circle cx="352" cy="352" r="22" fill="#fff6c8" stroke="#c98a00" stroke-width="6"/>
  <rect x="106" y="394" width="300" height="22" rx="11" fill="#2b3b7a"/>
</g>`;
const sparkle = (x, y, r, o = 1) => `<path d="M${x} ${y - r}Q${x} ${y} ${x + r} ${y}Q${x} ${y} ${x} ${y + r}Q${x} ${y} ${x - r} ${y}Q${x} ${y} ${x} ${y - r}z" fill="#fff" opacity="${o}"/>`;
const svg = (mode) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5a8bff"/><stop offset="1" stop-color="#6a3df0"/></linearGradient><radialGradient id="gl" cx=".5" cy=".42" r=".6"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>
${mode === 'fg' ? '' : '<rect width="512" height="512" fill="url(#bg)"/><rect width="512" height="512" fill="url(#gl)"/>'}
${mode === 'fg' ? '' : sparkle(88, 96, 26, .9) + sparkle(430, 130, 18, .8) + sparkle(420, 430, 22, .7)}
${bus(mode === 'fg' ? 0.62 : 0.9)}
</svg>`;
const page = (inner, size, round) => `<html><body style="margin:0;background:transparent"><div style="width:${size}px;height:${size}px;${round ? 'border-radius:50%;overflow:hidden;' : ''}">${inner}</div></body></html>`;

const browser = await chromium.launch(); const ctx = await browser.newContext({ deviceScaleFactor: 1 }); const pg = await ctx.newPage();
async function render(inner, size, file, { round = false, bgless = true } = {}) {
  await pg.setViewportSize({ width: size, height: size }); await pg.setContent(page(inner, size, round));
  fs.mkdirSync(path.dirname(file), { recursive: true });
  await pg.screenshot({ path: file, omitBackground: bgless, clip: { x: 0, y: 0, width: size, height: size } });
}
const dens = { mdpi: [48, 108], hdpi: [72, 162], xhdpi: [96, 216], xxhdpi: [144, 324], xxxhdpi: [192, 432] };
for (const [d, [ic, fg]] of Object.entries(dens)) {
  await render(svg('full'), ic, `${RES}mipmap-${d}/ic_launcher.png`);
  await render(svg('full'), ic, `${RES}mipmap-${d}/ic_launcher_round.png`, { round: true });
  await render(svg('fg'), fg, `${RES}mipmap-${d}/ic_launcher_foreground.png`);
}
fs.writeFileSync(`${RES}values/ic_launcher_background.xml`, '<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">#4F5FF0</color>\n</resources>\n');
const OUT = new URL('../www/', import.meta.url).pathname;
await render(svg('full'), 192, OUT + 'icon.png', { bgless: true });
await render(svg('full'), 512, new URL('../store/icon-512.png', import.meta.url).pathname, { bgless: false });
// Android açılış (splash) görselleri
const splash = (w, h) => `<html><body style="margin:0"><div style="width:${w}px;height:${h}px;background:linear-gradient(#4a7dff,#7fb6ff 55%,#cfe6ff);position:relative;overflow:hidden;font-family:Trebuchet MS,Segoe UI,sans-serif"><div style="position:absolute;left:50%;top:50%;width:${Math.min(w, h) * 0.46}px;height:${Math.min(w, h) * 0.46}px;transform:translate(-50%,-62%)">${svg('full')}</div><div style="position:absolute;left:0;right:0;top:${h * 0.5 + Math.min(w, h) * 0.2}px;text-align:center;color:#ffd23f;font-weight:900;font-size:${Math.min(w, h) * 0.085}px;-webkit-text-stroke:${Math.min(w, h) * 0.014}px #2b3b7a;paint-order:stroke fill">BUS PUZZLE<br><span style="color:#fff;font-size:.7em">DELUXE</span></div></div></body></html>`;
const sizes = fs.readdirSync(RES).filter((d) => d.startsWith('drawable')).map((d) => [d, `${RES}${d}/splash.png`]).filter(([, f]) => fs.existsSync(f));
const { execSync } = require('node:child_process');
for (const [, f] of sizes) {
  const [w, h] = execSync(`python3 -c "from PIL import Image;im=Image.open('${f}');print(im.size[0],im.size[1])"`).toString().trim().split(' ').map(Number);
  await pg.setViewportSize({ width: w, height: h }); await pg.setContent(splash(w, h)); await pg.screenshot({ path: f, clip: { x: 0, y: 0, width: w, height: h } });
}
await browser.close(); console.log('ikonlar üretildi');
