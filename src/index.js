/**
 * Urban Mixo — Client-Side Web Tools Engine (Core Library)
 * https://www.urbanmixo.online/
 * MIT License
 */

// 1. Cryptography & Identifiers
export function generateUUIDv7() {
  const bytes = new Uint8Array(16);
  window.crypto.getRandomValues(bytes);
  const ts = Date.now();
  bytes[0] = (ts / 0x10000000000) & 0xff;
  bytes[1] = (ts / 0x100000000) & 0xff;
  bytes[2] = (ts / 0x1000000) & 0xff;
  bytes[3] = (ts / 0x10000) & 0xff;
  bytes[4] = (ts / 0x100) & 0xff;
  bytes[5] = ts & 0xff;
  bytes[6] = (bytes[6] & 0x0f) | 0x70;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = Array.from(bytes, b => b.toString(16).padStart(2, '0'));
  return `${hex.slice(0, 4).join('')}-${hex.slice(4, 6).join('')}-${hex.slice(6, 8).join('')}-${hex.slice(8, 10).join('')}-${hex.slice(10, 16).join('')}`;
}

export async function computeSHA256(text) {
  const buffer = new TextEncoder().encode(text);
  const hashBuf = await window.crypto.subtle.digest('SHA-256', buffer);
  return Array.from(new Uint8Array(hashBuf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

// 2. Developer Naming Converters
export function toPascalCase(str) {
  return str
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
    .replace(/([a-z\d])([A-Z])/g, '$1_$2')
    .replace(/[-_\s.]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
    .replace(/^(.)/, c => c.toUpperCase());
}

export function toScreamingSnake(str) {
  return str
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
    .replace(/([a-z\d])([A-Z])/g, '$1_$2')
    .replace(/[-\s.]+/g, '_')
    .replace(/_+/g, '_')
    .toUpperCase();
}

// 3. Color Space Math
export function hexToRgb(hex) {
  let h = hex.replace(/^#/, '');
  if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  const num = parseInt(h, 16);
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

export function rgbToHex(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

// 4. Clinical Health & BMR Math
export function calculateMifflinBMR(weightKg, heightCm, ageYears, isMale = true) {
  return isMale
    ? (10 * weightKg) + (6.25 * heightCm) - (5 * ageYears) + 5
    : (10 * weightKg) + (6.25 * heightCm) - (5 * ageYears) - 161;
}
