// Sunucu bağlı değilken sıralamayı dolduran SİMÜLE oyuncular (gerçek kullanıcı değildir).
// Her hafta için deterministiktir (aynı hafta aynı liste), skorlar hafta ilerledikçe artar.
// Adlar cihaz diline göre seçilir: Türkçe cihazda çoğunlukla Türk adları, arada yabancı; diğer dillerde o dile uygun adlar.
import { makeRng } from './rng.js';

const POOL = {
  tr: { first: ['Mehmet', 'Ahmet', 'Mustafa', 'Ali', 'Hasan', 'Emre', 'Burak', 'Can', 'Cem', 'Kaan', 'Efe', 'Arda', 'Yusuf', 'Ömer', 'Eren', 'Berk', 'Ayşe', 'Fatma', 'Zeynep', 'Elif', 'Merve', 'Esra', 'Selin', 'Büşra', 'Derya', 'Ece', 'Deniz', 'Gizem', 'İrem', 'Sena'], last: ['Yılmaz', 'Kaya', 'Demir', 'Şahin', 'Çelik', 'Aydın', 'Öztürk', 'Arslan', 'Doğan', 'Kılıç', 'Aslan', 'Çetin', 'Koç', 'Kurt', 'Özdemir', 'Polat', 'Yıldız', 'Tekin'] },
  en: { first: ['James', 'Liam', 'Noah', 'Oliver', 'Jack', 'Ethan', 'Mason', 'Lucas', 'Henry', 'Leo', 'Emma', 'Olivia', 'Ava', 'Mia', 'Sophie', 'Grace', 'Chloe', 'Ella', 'Lily', 'Zoe'], last: ['Smith', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Walker', 'Hall', 'Wright', 'Green', 'Baker', 'Clark', 'Turner', 'Hill'] },
  de: { first: ['Lukas', 'Jonas', 'Leon', 'Finn', 'Paul', 'Felix', 'Max', 'Tim', 'Anna', 'Lena', 'Marie', 'Laura', 'Julia', 'Lea', 'Sophie', 'Emma'], last: ['Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Hoffmann', 'Koch'] },
  es: { first: ['Santiago', 'Mateo', 'Diego', 'Javier', 'Carlos', 'Pablo', 'Sergio', 'Alejandro', 'María', 'Lucía', 'Carmen', 'Paula', 'Sofía', 'Elena', 'Marta'], last: ['García', 'Rodríguez', 'López', 'Martínez', 'Sánchez', 'Pérez', 'Gómez', 'Fernández', 'Ruiz', 'Díaz'] },
  fr: { first: ['Lucas', 'Hugo', 'Louis', 'Jules', 'Gabriel', 'Théo', 'Nathan', 'Emma', 'Léa', 'Chloé', 'Camille', 'Manon', 'Inès', 'Louise'], last: ['Martin', 'Bernard', 'Dubois', 'Thomas', 'Robert', 'Richard', 'Petit', 'Durand', 'Leroy', 'Moreau'] },
  pt: { first: ['João', 'Pedro', 'Lucas', 'Gabriel', 'Rafael', 'Tiago', 'Maria', 'Ana', 'Beatriz', 'Julia', 'Larissa', 'Mariana'], last: ['Silva', 'Santos', 'Oliveira', 'Souza', 'Costa', 'Pereira', 'Almeida', 'Ferreira'] },
  ru: { first: ['Aleksandr', 'Dmitri', 'Ivan', 'Maksim', 'Nikita', 'Artem', 'Sergey', 'Anna', 'Maria', 'Olga', 'Elena', 'Natasha', 'Katya', 'Irina'], last: ['Ivanov', 'Smirnov', 'Kuznetsov', 'Popov', 'Sokolov', 'Lebedev', 'Kozlov', 'Novikov'] },
  ar: { first: ['Omar', 'Ahmed', 'Khaled', 'Youssef', 'Hassan', 'Ali', 'Karim', 'Sara', 'Laila', 'Nour', 'Mariam', 'Hana', 'Yasmin'], last: ['Haddad', 'Nasser', 'Farouk', 'Mansour', 'Saleh', 'Khoury'] },
};
const ASCII = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ı/g, 'i').replace(/İ/g, 'I').replace(/ş/g, 's').replace(/Ş/g, 'S').replace(/ğ/g, 'g').replace(/Ğ/g, 'G');
const HANDLES = ['', 'xx', 'pro', 'oyun', 'gamer', 'king', 'star', 'cool'];

export function langOf(nav) { const l = String(nav || 'en').toLowerCase().slice(0, 2); return POOL[l] ? l : 'en'; }

function makeName(rng, lang) {
  // Türkçe cihazda ~%80 Türk adı, %20 rastgele yabancı; yabancı dilde ~%85 o dilin adı, %15 rastgele (arada Türk adı da olabilir)
  const own = rng() < (lang === 'tr' ? 0.8 : 0.85);
  const keys = Object.keys(POOL); const L = own ? lang : keys[rng.int(keys.length)];
  const P = POOL[L]; const f = P.first[rng.int(P.first.length)], l = P.last[rng.int(P.last.length)];
  const fa = ASCII(f), la = ASCII(l), yy = String(rng.range(70, 99)), n2 = String(rng.range(1, 99));
  const styles = [() => `${f} ${l[0]}.`, () => `${f}`, () => `${fa}${la}`, () => `${fa}_${la[0]}`, () => `${fa.toLowerCase()}${yy}`, () => `${fa.toLowerCase()}.${la.toLowerCase()}`, () => `${fa}${n2}`, () => `${fa[0]}${la}`.toLowerCase() + n2, () => `${f} ${l}`, () => `${fa}_${HANDLES[1 + rng.int(HANDLES.length - 1)]}`];
  return styles[rng.int(styles.length)]().slice(0, 20);
}

/** @returns {{name:string, score:number}[]} puana göre azalan */
export function botEntries({ weekKey, now, weekStart, weekEnd, lang = 'en', count = 30, seedBase = 0 }) {
  let seed = (7 + Math.imul(seedBase >>> 0, 2654435761)) >>> 0; for (const ch of String(weekKey)) seed = (Math.imul(seed, 31) + ch.charCodeAt(0)) >>> 0;
  const rng = makeRng(seed); const prog = Math.min(1, Math.max(0.08, (now - weekStart) / (weekEnd - weekStart)));
  const seen = new Set(); const out = [];
  while (out.length < count) {
    const name = makeName(rng, lang); if (seen.has(name)) continue; seen.add(name);
    const k = out.length / count;                        // 0 = en iyi
    const full = Math.round(3600 * Math.pow(1 - k, 1.7) + 150 + rng.int(160));   // hafta sonu tahmini puan
    out.push({ name, score: Math.round(full * prog) });
  }
  return out.sort((a, b) => b.score - a.score);
}
