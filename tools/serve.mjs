// Yerel geliştirme sunucusu: www/ klasörünü sunar. Kullanım: npm run build && npm run serve  → http://localhost:8080
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const root = path.resolve('www'); const port = +process.env.PORT || 8080;
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml' };
http.createServer((q, r) => {
  let p = path.join(root, decodeURIComponent(q.url.split('?')[0])); if (!p.startsWith(root)) { r.writeHead(403); return r.end(); }
  if (p.endsWith(path.sep)) p += 'index.html';
  fs.readFile(p, (e, d) => { if (e) { r.writeHead(404); r.end('404'); } else { r.writeHead(200, { 'content-type': mime[path.extname(p)] || 'application/octet-stream' }); r.end(d); } });
}).listen(port, () => console.log(`http://localhost:${port}`));
