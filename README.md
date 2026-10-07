<div align="center">

# ⚡ Urban Mixo — Client-Side Web Tools Engine

**A curated, zero-dependency suite of high-performance developer utilities, computational math calculators, text processors, and cryptographic tools.**

[![Website](https://img.shields.io/badge/Live_Suite-urbanmixo.online-2563eb?style=for-the-badge&logo=googlechrome&logoColor=white)](https://www.urbanmixo.online/)
[![License: MIT](https://img.shields.io/badge/License-MIT-16a34a?style=for-the-badge)](LICENSE)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-0-0f172a?style=for-the-badge)](package.json)
[![Privacy First](https://img.shields.io/badge/Privacy-100%25_Client--Side-7c3aed?style=for-the-badge)](#-privacy--security-architecture)
[![Code Size](https://img.shields.io/github/languages/code-size/UrbanMixo/client-side-web-tools?style=for-the-badge&color=blue)](#)

[Explore Live Web App](https://www.urbanmixo.online/) • [Technical Documentation](https://www.urbanmixo.online/search/label/Blog) • [Report Issue](https://github.com/UrbanMixo/client-side-web-tools/issues) • [Request a Tool](https://github.com/UrbanMixo/client-side-web-tools/issues)

</div>

---

## 📖 Overview

**Urban Mixo** is an open-source web utility suite built for developers, designers, writers, and researchers. Unlike traditional online tools that upload sensitive data to remote backend servers, every algorithm in this repository executes **100% locally inside the client browser's JavaScript runtime**.

* 🚀 **Zero Network Latency:** Instant computation powered by native Web APIs (`crypto.subtle`, `Intl`, `TextEncoder`, `DOMParser`).
* 🔒 **Zero Telemetry / Absolute Privacy:** No server-side logging, no remote API calls, no database persistence. Your data never leaves your device.
* 📦 **Zero External Dependencies:** Lightweight, vanilla ES6+ code with zero framework overhead.

---

## 🛠️ Complete Tool Directory & Live Links

### 🔐 1. Cryptography, Hashing & Encoders
| Tool Name | Description | Live App | Deep Dive Guide |
|---|---|---|---|
| **UUIDv7 Generator** | IETF RFC 9562 millisecond time-ordered UUIDs with B-Tree index optimization | [Launch Tool](https://www.urbanmixo.online/p/uuidv7-generator.html) | [RFC 9562 Guide](https://www.urbanmixo.online/2026/09/uuid-rfc-9562-standard-uuidv6-uuidv7-uuidv8-guide.html) |
| **UUIDv4 Generator** | Standard 128-bit cryptographically random RFC 4122 GUID generator | [Launch Tool](https://www.urbanmixo.online/p/uuid-generator.html) | [NanoID vs UUID](https://www.urbanmixo.online/2026/09/nanoid-vs-uuid-collision-probability-url-safety.html) |
| **SHA-256 Generator** | Dedicated 256-bit cryptographic checksum tool with salt support | [Launch Tool](https://www.urbanmixo.online/p/sha256-hash-generator.html) | [Hash vs Encrypt](https://www.urbanmixo.online/2026/09/hashing-vs-encryption-vs-encoding.html) |
| **SHA-512 Generator** | 512-bit high-throughput checksum generator optimized for 64-bit CPUs | [Launch Tool](https://www.urbanmixo.online/p/sha512-hash-generator.html) | [SHA-2 Standards](https://www.urbanmixo.online/2026/09/sha-256-vs-sha-512-vs-sha-1-cryptographic-hash-guide.html) |
| **MD5 Hash Generator** | 128-bit checksum generator for S3 ETags, Gravatars, and legacy APIs | [Launch Tool](https://www.urbanmixo.online/p/md5-hash-generator.html) | [Argon2id vs Bcrypt](https://www.urbanmixo.online/2026/09/argon2id-vs-bcrypt-vs-pbkdf2-password-hashing.html) |
| **Base64 to Text** | UTF-8 safe Base64/Data URI decoder preventing Mojibake corruption | [Launch Tool](https://www.urbanmixo.online/p/base64-to-text-decoder.html) | [Base64 Math](https://www.urbanmixo.online/2026/09/how-base64-encoding-works-math.html) |
| **Base64 to Image** | Decode Base64 and Data URIs into downloadable PNG, JPG, and WebP files | [Launch Tool](https://www.urbanmixo.online/p/base64-to-image-converter.html) | [Binary in APIs](https://www.urbanmixo.online/2026/09/how-to-transmit-binary-data-rest-apis.html) |
| **Text to Binary** | Translate ASCII/UTF-8 strings into 8-bit binary bytes | [Launch Tool](https://www.urbanmixo.online/p/text-to-binary-converter.html) | [Base64 vs Hex](https://www.urbanmixo.online/2026/09/base64-vs-hexadecimal-base16-data.html) |
| **Binary to Text** | Decode 8-bit binary code into plain English ASCII/UTF-8 text | [Launch Tool](https://www.urbanmixo.online/p/binary-to-text-decoder.html) | [Binary in APIs](https://www.urbanmixo.online/2026/09/how-to-transmit-binary-data-rest-apis.html) |
| **Binary to Hex** | Group binary bits into 4-bit nibbles with 0x prefix notation | [Launch Tool](https://www.urbanmixo.online/p/binary-to-hex-converter.html) | [Base64 vs Hex](https://www.urbanmixo.online/2026/09/base64-vs-hexadecimal-base16-data.html) |

---

### 💻 2. Developer Naming & Syntax Tools
| Tool Name | Description | Live App | Deep Dive Guide |
|---|---|---|---|
| **JSON Validator** | RFC 8259 JSON linter with line/column coordinates and auto-fix | [Launch Tool](https://www.urbanmixo.online/p/json-validator-online.html) | [JSON Syntax Rules](https://www.urbanmixo.online/2026/09/json-syntax-rules-rfc-8259-escaping-guide.html) |
| **JSON to One Line** | Compress multi-line JSON with cURL quote-escaping (`\"`) | [Launch Tool](https://www.urbanmixo.online/p/json-to-one-line.html) | [JSON Syntax Rules](https://www.urbanmixo.online/2026/09/json-syntax-rules-rfc-8259-escaping-guide.html) |
| **PascalCase Converter** | Format React components, TypeScript classes, and C# models | [Launch Tool](https://www.urbanmixo.online/p/pascalcase-converter.html) | [Naming Conventions](https://www.urbanmixo.online/2026/09/programming-naming-conventions-camelcase-snake-case.html) |
| **SCREAMING_SNAKE** | Format `.env` variables, Docker configs, and C macros | [Launch Tool](https://www.urbanmixo.online/p/screaming-snake-case-converter.html) | [Naming Conventions](https://www.urbanmixo.online/2026/09/programming-naming-conventions-camelcase-snake-case.html) |
| **CamelCase to Snake** | Convert TypeScript variables to PEP 8 and SQL database columns | [Launch Tool](https://www.urbanmixo.online/p/camelcase-to-snake-case.html) | [Naming Conventions](https://www.urbanmixo.online/2026/09/programming-naming-conventions-camelcase-snake-case.html) |
| **Snake to CamelCase** | Map SQL columns to JavaScript objects and GraphQL schemas | [Launch Tool](https://www.urbanmixo.online/p/snake-case-to-camelcase.html) | [Naming Conventions](https://www.urbanmixo.online/2026/09/programming-naming-conventions-camelcase-snake-case.html) |
| **Kebab to CamelCase** | Transform CSS properties into React/JSX inline style objects | [Launch Tool](https://www.urbanmixo.online/p/kebab-case-to-camelcase.html) | [Naming Conventions](https://www.urbanmixo.online/2026/09/programming-naming-conventions-camelcase-snake-case.html) |
| **URL Percent-Encoder** | RFC 3986 parameter encoder with `encodeURIComponent` toggles | [Launch Tool](https://www.urbanmixo.online/p/url-percent-encode-online.html) | [HTML vs URL Encoding](https://www.urbanmixo.online/2026/09/html-entities-vs-url-encoding-unicode.html) |
| **URL Decoder** | Decode percent-encoded URLs and inspect query parameter tables | [Launch Tool](https://www.urbanmixo.online/p/url-decode-online.html) | [HTML vs URL Encoding](https://www.urbanmixo.online/2026/09/html-entities-vs-url-encoding-unicode.html) |
| **HTML Escape** | Escape `<`, `>`, `&`, and quotes to prevent Cross-Site Scripting (XSS) | [Launch Tool](https://www.urbanmixo.online/p/html-escape-online.html) | [XSS Defense Guide](https://www.urbanmixo.online/2026/09/html-entity-encoding-xss-defense.html) |
| **HTML Unescape** | Decode named, decimal, and hex entities with recursive multi-pass | [Launch Tool](https://www.urbanmixo.online/p/html-unescape-online.html) | [XSS Defense Guide](https://www.urbanmixo.online/2026/09/html-entity-encoding-xss-defense.html) |

---

### 🎨 3. CSS Color Space Matrix (100% Two-Way Closed Loop)
| Conversion Pair | Description | Live Tool | Color Architecture Guide |
|---|---|---|---|
| **HEX ⇄ RGB** | Bidirectional 3/6/8-digit hex to decimal `rgb()` / `rgba()` | [HEX &rarr; RGB](https://www.urbanmixo.online/p/hex-to-rgb-converter.html) • [RGB &rarr; HEX](https://www.urbanmixo.online/p/rgb-to-hex-converter.html) | [OKLCH vs HSL Guide](https://www.urbanmixo.online/2026/09/oklch-vs-hsl-color-space-css-design-tokens.html) |
| **HEX ⇄ HSL** | Translate base-16 strings to cylindrical design tokens | [HEX &rarr; HSL](https://www.urbanmixo.online/p/hex-to-hsl-converter.html) • [HSL &rarr; HEX](https://www.urbanmixo.online/p/hsl-to-hex-converter.html) | [OKLCH vs HSL Guide](https://www.urbanmixo.online/2026/09/oklch-vs-hsl-color-space-css-design-tokens.html) |
| **RGB ⇄ HSL** | Convert hardware RGB light values to HSL coordinates | [RGB &rarr; HSL](https://www.urbanmixo.online/p/rgb-to-hsl-converter.html) • [HSL &rarr; RGB](https://www.urbanmixo.online/p/hsl-to-rgb-converter.html) | [OKLCH vs HSL Guide](https://www.urbanmixo.online/2026/09/oklch-vs-hsl-color-space-css-design-tokens.html) |

---

### ✍️ 4. Text, Publishing & Social Limit Tools
| Tool Name | Constraint / Function | Live Tool | Publishing Guide |
|---|---|---|---|
| **Word Counter** | Real-time words, characters, sentences, and reading duration | [Launch Tool](https://www.urbanmixo.online/p/word-counter.html) | [Unicode Counting Guide](https://www.urbanmixo.online/2026/09/how-to-count-unicode-characters-words-emojis-cjk.html) |
| **Character Counter** | Track social media character limits with/without spaces | [Launch Tool](https://www.urbanmixo.online/p/character-counter.html) | [Social Limits Guide](https://www.urbanmixo.online/2026/09/character-limits-guide-seo-social-media.html) |
| **Twitter Counter** | 280-character limit tracker with 23-char link weighting | [Launch Tool](https://www.urbanmixo.online/p/twitter-character-counter.html) | [Social Limits Guide](https://www.urbanmixo.online/2026/09/character-limits-guide-seo-social-media.html) |
| **Meta Description** | 160-char & 960px Google SERP snippet truncation tester | [Launch Tool](https://www.urbanmixo.online/p/seo-meta-description-counter.html) | [SEO Permalinks Guide](https://www.urbanmixo.online/2026/09/what-is-a-url-slug-seo-permalinks-guide.html) |
| **LinkedIn Counter** | 3,000-char post limit & 210-character "...see more" fold preview | [Launch Tool](https://www.urbanmixo.online/p/linkedin-post-character-counter.html) | [Social Limits Guide](https://www.urbanmixo.online/2026/09/character-limits-guide-seo-social-media.html) |
| **Instagram Bio** | 150-char strict limit with line break & font inspection | [Launch Tool](https://www.urbanmixo.online/p/instagram-bio-character-counter.html) | [Social Limits Guide](https://www.urbanmixo.online/2026/09/character-limits-guide-seo-social-media.html) |
| **SMS Counter** | 160 GSM-7 vs. 70 UCS-2 Unicode billable segment calculator | [Launch Tool](https://www.urbanmixo.online/p/sms-character-counter.html) | [Social Limits Guide](https://www.urbanmixo.online/2026/09/character-limits-guide-seo-social-media.html) |
| **Title Case Converter** | Capitalize headlines for AP, Chicago, APA, and MLA styles | [Launch Tool](https://www.urbanmixo.online/p/title-case-converter.html) | [SEO Permalinks Guide](https://www.urbanmixo.online/2026/09/what-is-a-url-slug-seo-permalinks-guide.html) |
| **Sentence Case** | Auto-capitalize sentences and un-shout accidental Caps Lock text | [Launch Tool](https://www.urbanmixo.online/p/sentence-case-converter.html) | [Sanitizing Text Guide](https://www.urbanmixo.online/2026/09/how-to-clean-and-sanitize-text-data.html) |
| **Reading Time** | Estimate silent reading minutes and speech presentation durations | [Launch Tool](https://www.urbanmixo.online/p/reading-time-calculator.html) | [Unicode Counting Guide](https://www.urbanmixo.online/2026/09/how-to-count-unicode-characters-words-emojis-cjk.html) |
| **Clean Slug Maker** | Convert titles to SEO slugs with stop-word stripping | [Launch Tool](https://www.urbanmixo.online/p/clean-url-slug-generator.html) | [SEO Permalinks Guide](https://www.urbanmixo.online/2026/09/what-is-a-url-slug-seo-permalinks-guide.html) |
| **Remove Empty Lines**| Strip blank lines and normalize CRLF vs. LF line breaks | [Launch Tool](https://www.urbanmixo.online/p/remove-empty-lines.html) | [Sanitizing Text Guide](https://www.urbanmixo.online/2026/09/how-to-clean-and-sanitize-text-data.html) |
| **Alphabetize List** | A–Z and Z–A sorting with natural numeric collation | [Launch Tool](https://www.urbanmixo.online/p/alphabetize-list-online.html) | [Sanitizing Text Guide](https://www.urbanmixo.online/2026/09/how-to-clean-and-sanitize-text-data.html) |
| **Remove Dupes** | Remove duplicate lines and repeated adjacent words | [Launch Tool](https://www.urbanmixo.online/p/remove-duplicate-words.html) | [Sanitizing Text Guide](https://www.urbanmixo.online/2026/09/how-to-clean-and-sanitize-text-data.html) |
| **Lorem Ipsum** | Custom dummy paragraphs with HTML `<p>` tag wrapping | [Launch Tool](https://www.urbanmixo.online/p/lorem-ipsum-paragraph-generator.html) | [Sanitizing Text Guide](https://www.urbanmixo.online/2026/09/how-to-clean-and-sanitize-text-data.html) |

---

### 📊 5. Math, Financial & Statistical Calculators
| Calculator Name | Formula / Utility | Live Tool | Mathematical Guide |
|---|---|---|---|
| **15% Off Calculator** | 15% retail sale savings & restaurant tip / bill split | [Launch Tool](https://www.urbanmixo.online/p/15-percent-off-calculator.html) | [Reverse % Proof](https://www.urbanmixo.online/2026/09/reverse-percentage-formula-calculate-original-price-before-discount.html) |
| **20% Off Calculator** | Fast 20% discount math with $5 to $500 lookup matrix | [Launch Tool](https://www.urbanmixo.online/p/20-percent-off-calculator.html) | [Margin vs. Markup](https://www.urbanmixo.online/2026/09/margin-vs-markup-profitability-formulas.html) |
| **30% Off Calculator** | Sequential stacked coupon compounding calculations | [Launch Tool](https://www.urbanmixo.online/p/30-percent-off-calculator.html) | [Reverse % Proof](https://www.urbanmixo.online/2026/09/reverse-percentage-formula-calculate-original-price-before-discount.html) |
| **50% Off Calculator** | Half-price clearance and liquidation math ($5 to $1,000) | [Launch Tool](https://www.urbanmixo.online/p/50-percent-off-calculator.html) | [Margin vs. Markup](https://www.urbanmixo.online/2026/09/margin-vs-markup-profitability-formulas.html) |
| **Percentage Increase**| Relative growth rate and price inflation between two numbers | [Launch Tool](https://www.urbanmixo.online/p/percentage-increase-calculator.html) | [Margin vs. Markup](https://www.urbanmixo.online/2026/09/margin-vs-markup-profitability-formulas.html) |
| **Percentage Decrease**| Relative percentage drop and break-even recovery math | [Launch Tool](https://www.urbanmixo.online/p/percentage-decrease-calculator.html) | [Reverse % Proof](https://www.urbanmixo.online/2026/09/reverse-percentage-formula-calculate-original-price-before-discount.html) |
| **Percentage Diff** | Symmetrical relative difference between two measurements | [Launch Tool](https://www.urbanmixo.online/p/percentage-difference-calculator.html) | [Margin vs. Markup](https://www.urbanmixo.online/2026/09/margin-vs-markup-profitability-formulas.html) |
| **Median Calculator** | Outlier-resistant median for odd/even datasets with sorting | [Launch Tool](https://www.urbanmixo.online/p/median-calculator.html) | [Mean vs Median Guide](https://www.urbanmixo.online/2026/09/mean-vs-median-vs-mode-statistical-outliers.html) |
| **Mode Calculator** | Unimodal/bimodal analysis with frequency distribution tables | [Launch Tool](https://www.urbanmixo.online/p/mode-calculator.html) | [Mean vs Median Guide](https://www.urbanmixo.online/2026/09/mean-vs-median-vs-mode-statistical-outliers.html) |
| **Range & IQR** | Statistical range & Tukey's 1.5× IQR outlier detection | [Launch Tool](https://www.urbanmixo.online/p/range-calculator.html) | [Mean vs Median Guide](https://www.urbanmixo.online/2026/09/mean-vs-median-vs-mode-statistical-outliers.html) |
| **Standard Deviation** | Sample ($s$) and population ($\sigma$) standard deviation | [Launch Tool](https://www.urbanmixo.online/p/standard-deviation-calculator.html) | [Mean vs Median Guide](https://www.urbanmixo.online/2026/09/mean-vs-median-vs-mode-statistical-outliers.html) |

---

### 🏥 6. Health, Metabolic & Date Calculators
| Tool Name | Clinical Method / Standard | Live Tool | Clinical Reference |
|---|---|---|---|
| **Ideal Body Weight** | Devine (1974), Robinson, Miller, and Hamwi equations | [Launch Tool](https://www.urbanmixo.online/p/ideal-weight-calculator.html) | [BMI Limits Guide](https://www.urbanmixo.online/2026/09/bmi-formulas-history-clinical-limitations.html) |
| **Body Fat Percentage**| U.S. Navy circumference method & ACE fitness categories | [Launch Tool](https://www.urbanmixo.online/p/body-fat-percentage-calculator.html) | [BMI Limits Guide](https://www.urbanmixo.online/2026/09/bmi-formulas-history-clinical-limitations.html) |
| **BMR Calculator** | Mifflin-St Jeor & Revised Harris-Benedict TDEE schedules | [Launch Tool](https://www.urbanmixo.online/p/bmr-calculator.html) | [BMI Limits Guide](https://www.urbanmixo.online/2026/09/bmi-formulas-history-clinical-limitations.html) |
| **Calorie Deficit** | Custom weekly loss rates with 1,200/1,500 kcal safety floors | [Launch Tool](https://www.urbanmixo.online/p/calorie-deficit-calculator.html) | [BMI Limits Guide](https://www.urbanmixo.online/2026/09/bmi-formulas-history-clinical-limitations.html) |
| **Macro Split Tool** | Atwater system daily protein, carb, and fat distributions | [Launch Tool](https://www.urbanmixo.online/p/macro-calculator.html) | [BMI Limits Guide](https://www.urbanmixo.online/2026/09/bmi-formulas-history-clinical-limitations.html) |
| **Days Between Dates** | Total calendar days and business days with leap year math | [Launch Tool](https://www.urbanmixo.online/p/days-between-dates-calculator.html) | [Age & Leap Years](https://www.urbanmixo.online/2026/09/mathematics-of-chronological-age-leap-years.html) |
| **Months Between** | Exact calendar months, decimal fractions, and billing quarters | [Launch Tool](https://www.urbanmixo.online/p/months-between-dates-calculator.html) | [Age & Leap Years](https://www.urbanmixo.online/2026/09/mathematics-of-chronological-age-leap-years.html) |
| **Age Difference** | Chronological age gap between two people and milestones | [Launch Tool](https://www.urbanmixo.online/p/age-difference-calculator.html) | [Age & Leap Years](https://www.urbanmixo.online/2026/09/mathematics-of-chronological-age-leap-years.html) |
| **Timestamp to ISO** | Epoch seconds/ms to standardized RFC 3339 UTC strings | [Launch Tool](https://www.urbanmixo.online/p/timestamp-to-iso-8601.html) | [ISO 8601 vs Unix](https://www.urbanmixo.online/2026/09/iso-8601-vs-unix-timestamps-date-formats-guide.html) |
| **Epoch to Human** | Convert Unix epoch timestamps to relative time ("X ago") | [Launch Tool](https://www.urbanmixo.online/p/epoch-to-human-date.html) | [Year 2038 Bug](https://www.urbanmixo.online/2026/09/year-2038-problem-why-32-bit-unix-timestamps-fail.html) |
| **Timezone Diff** | Localized IANA timezone hour differences and meeting planner | [Launch Tool](https://www.urbanmixo.online/p/timezone-difference-calculator.html) | [ISO 8601 vs Unix](https://www.urbanmixo.online/2026/09/iso-8601-vs-unix-timestamps-date-formats-guide.html) |

---

## 💻 Code Recipes (Copy & Paste for Projects)

### 1. Generating RFC 9562 UUIDv7 in JavaScript
```javascript
export function generateUUIDv7() {
  const bytes = new Uint8Array(16);
  window.crypto.getRandomValues(bytes);
  const ts = Date.now();

  // 48-bit Big-Endian Unix Millisecond Timestamp
  bytes[0] = (ts / 0x10000000000) & 0xff;
  bytes[1] = (ts / 0x100000000) & 0xff;
  bytes[2] = (ts / 0x1000000) & 0xff;
  bytes[3] = (ts / 0x10000) & 0xff;
  bytes[4] = (ts / 0x100) & 0xff;
  bytes[5] = ts & 0xff;

  // Version 7 (0111) & Variant 10 (RFC 9562)
  bytes[6] = (bytes[6] & 0x0f) | 0x70;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;

  const hex = Array.from(bytes, b => b.toString(16).padStart(2, '0'));
  return `${hex.slice(0, 4).join('')}-${hex.slice(4, 6).join('')}-${hex.slice(6, 8).join('')}-${hex.slice(8, 10).join('')}-${hex.slice(10, 16).join('')}`;
}
