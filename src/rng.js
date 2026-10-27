// Tohumlu rastgele sayı üreteci (mulberry32)
export function makeRng(seed) {
  let a = seed >>> 0;
  const rnd = () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  rnd.int = (n) => Math.floor(rnd() * n);
  rnd.range = (a2, b2) => a2 + rnd.int(b2 - a2 + 1);
  rnd.pick = (arr) => arr[rnd.int(arr.length)];
  rnd.shuffle = (arr) => { for (let i = arr.length - 1; i > 0; i--) { const j = rnd.int(i + 1); [arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; };
  rnd.weighted = (obj) => {
    const keys = Object.keys(obj); let tot = 0; for (const k of keys) tot += obj[k];
    let r = rnd() * tot;
    for (const k of keys) { r -= obj[k]; if (r <= 0) return +k; }
    return +keys[keys.length - 1];
  };
  return rnd;
}
