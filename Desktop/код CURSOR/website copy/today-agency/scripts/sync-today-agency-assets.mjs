import fs from 'node:fs';
import path from 'node:path';

function getArg(name, fallback) {
  const argv = process.argv.slice(2);
  const idx = argv.indexOf(name);
  if (idx === -1) return fallback;
  return argv[idx + 1] ?? fallback;
}

const htmlPath = getArg('--html', '/Users/rostislavgolivetc/Desktop/код CURSOR/website copy/16b0979b-ca18-4597-b4d9-2568cd6bb54c.html');
const todayAgencyRoot = getArg('--root', '/Users/rostislavgolivetc/Desktop/код CURSOR/website copy/today-agency');
const baseUrl = getArg('--base', 'https://today-agency.ru');
const decodeBase64 = getArg('--decodeBase64', 'true') === 'true';
const decodeLimit = Number(getArg('--decodeLimit', '500'));

if (!fs.existsSync(htmlPath)) {
  console.error('HTML not found:', htmlPath);
  process.exit(1);
}

const publicDir = path.join(todayAgencyRoot, 'public');
const imagesDir = path.join(publicDir, 'images');
const videoDir = path.join(publicDir, 'video');

fs.mkdirSync(imagesDir, { recursive: true });
fs.mkdirSync(videoDir, { recursive: true });

const html = fs.readFileSync(htmlPath, 'utf8');

const uniqueInOrder = (arr) => {
  const seen = new Set();
  const out = [];
  for (const x of arr) {
    if (seen.has(x)) continue;
    seen.add(x);
    out.push(x);
  }
  return out;
};

async function downloadTo(url, outPath) {
  if (fs.existsSync(outPath) && fs.statSync(outPath).size > 0) return;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed: ${url} -> ${res.status} ${res.statusText}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(outPath, buf);
}

const imageRe = /images\/(tild[a-zA-Z0-9_-]+?\.(?:svg|png|jpg|jpeg|webp))/g;
const imageFiles = uniqueInOrder([...html.matchAll(imageRe)].map((m) => m[1]));

const webmRe = /files\/(a-zA-Z0-9_-]+\.webm)/g;
// NOTE: fix regex typo if needed by updating here

const webmRe2 = /files\/([a-zA-Z0-9_-]+\.webm)/g;
const webmFiles = uniqueInOrder([...html.matchAll(webmRe2)].map((m) => m[1]));

const mainHero = webmFiles.find((f) => f.toLowerCase().includes('main')) ?? webmFiles.find((f) => f.toLowerCase().includes('7s')) ?? webmFiles[0];

console.log('== Extraction ==');
console.log('images to download:', imageFiles.length);
console.log('webm to download:', webmFiles.length);
console.log('hero candidate:', mainHero);

console.log('== Download images ==');
await Promise.all(
  imageFiles.map(async (file) => {
    const url = `${baseUrl}/images/${file}`;
    const outPath = path.join(imagesDir, file);
    await downloadTo(url, outPath);
  })
);

console.log('== Download webm ==');
await Promise.all(
  webmFiles.map(async (file) => {
    const url = `${baseUrl}/files/${file}`;
    const outPath = path.join(videoDir, file);
    await downloadTo(url, outPath);
  })
);

if (decodeBase64) {
  console.log('== Decode base64 assets (preview only) ==');
  const base64Re = /data:image\/(png|jpe?g|webp|svg\+xml);base64,([A-Za-z0-9+/=]+)/g;
  const decodedDir = path.join(publicDir, 'decoded');
  fs.mkdirSync(decodedDir, { recursive: true });

  let i = 0;
  for (const m of html.matchAll(base64Re)) {
    i++;
    if (i > decodeLimit) break;

    const mime = m[1];
    const b64 = m[2];
    const ext = mime === 'svg+xml' ? 'svg' : mime === 'jpeg' ? 'jpg' : mime;
    const hash = Buffer.from(String(i)).toString('hex');

    // stable-ish name by hashing content is better, but this keeps script tiny
    const outPath = path.join(decodedDir, `${decodeLimit}-${i}.${ext}`);
    if (fs.existsSync(outPath)) continue;

    fs.writeFileSync(outPath, Buffer.from(b64, 'base64'));
  }

  console.log(`Decoded (capped to ${decodeLimit})`);
}

// Patch code: Hero.tsx + constants.ts
const constantsPath = path.join(todayAgencyRoot, 'src/lib/constants.ts');
const heroPath = path.join(todayAgencyRoot, 'src/components/sections/Hero.tsx');

let constants = fs.readFileSync(constantsPath, 'utf8');
let hero = fs.readFileSync(heroPath, 'utf8');

if (mainHero) {
  hero = hero.replace(/\/video\/["']([^"']+)["']/g, `/video/${mainHero}`);
  // If that regex didn't match, fall back to a broader replace
  hero = hero.replace(/\/video\/[^"']+/g, `/video/${mainHero}`);
}

// Case preview images - best-effort based on filename hints in HTML
const gorodaImg = imageFiles.find((f) => f.includes('image-preview-goroda'));
const btImg = imageFiles.find((f) => f.includes('image-preview-bt'));
const serpentImg = imageFiles.find((f) => f.includes('__image.jpg') && !f.includes('image-preview')) ?? imageFiles.find((f) => f.includes('__image.jpg'));

const patchCase = (placeholderFile, realFile) => {
  if (!realFile) return;
  constants = constants.replace(
    new RegExp(`/images/${placeholderFile.replaceAll('.', '\\.')}`,'g'),
    `/images/${realFile}`
  );
  constants = constants.replace(
    new RegExp(`"/images/${placeholderFile.replaceAll('.', '\\.')}"`,'g'),
    `"/images/${realFile}"`
  );
};

patchCase('case-goroda.jpg', gorodaImg);
patchCase('case-a.jpg', btImg);
patchCase('case-serpent.jpg', serpentImg);

// Client logos
const logoFile = (needle) =>
  imageFiles.find((f) => f.includes(`__${needle}`)) ?? imageFiles.find((f) => f.includes(needle));

const travel = logoFile('logo_ya_travel.svg');
const prak = logoFile('logo_ya_prak.svg');
const litebox = logoFile('logo_ya_litebox.svg');
const serpent = logoFile('logo_ya_serpent.svg');
const health = logoFile('logo_ya_health.svg');
const realcar = logoFile('logo_ya_realcar.svg');

const patchLogo = (placeholder, realFile) => {
  if (!realFile) return;
  constants = constants.replace(
    new RegExp(`/images/${placeholder.replaceAll('.', '\\.')}`,'g'),
    `/images/${realFile}`
  );
};

patchLogo('logo-ya-travel.svg', travel);
patchLogo('logo-ya-prak.svg', prak);
patchLogo('logo-ya-litebox.svg', litebox);
patchLogo('logo-ya-serpent.svg', serpent);
patchLogo('logo-ya-health.svg', health);
patchLogo('logo-ya-realcar.svg', realcar);

fs.writeFileSync(heroPath, hero);
fs.writeFileSync(constantsPath, constants);

console.log('== Patched ==');
console.log('Hero.tsx updated video path');
console.log('constants.ts updated case preview + client logos');

console.log('Done.');
