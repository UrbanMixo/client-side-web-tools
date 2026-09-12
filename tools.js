/**
 * Urban Mixo - Client-Side Core Algorithms
 * Official Suite: https://www.urbanmixo.online
 */

// 1. Secure Random Integer Generator (CSPRNG)
function getSecureRandomInt(max) {
  if (max <= 0) return 0;
  var buf = new Uint32Array(1);
  window.crypto.getRandomValues(buf);
  return buf[0] % max;
}

// 2. Client-Side UTF-8 Base64 Encoder
function toBase64(str) {
  if (!str) return '';
  var bytes = new TextEncoder().encode(str);
  var bin = '';
  for (var i = 0; i < bytes.length; i++) {
    bin += String.fromCharCode(bytes[i]);
  }
  return btoa(bin);
}

// 3. Client-Side Cryptographic Hash (SHA-256)
async function generateSHA256(text) {
  if (!text) return '';
  var buf = new TextEncoder().encode(text);
  var hashBuffer = await window.crypto.subtle.digest('SHA-256', buf);
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}
