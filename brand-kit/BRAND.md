# Liminal — Brand & Logo Handoff

Identity for **Liminal**, an identity & transitions coaching practice for adults authoring a new chapter. Concept: *liminal space* — the threshold between who you were and who you're becoming. The mark is three bars (full · short · full): two edges with the shorter middle marking the space you cross.

Font: **Hanken Grotesk** (Google Fonts). Everything below is production-ready.

---

## Color palette — "Palette A"

Warm, momentum-forward system. A tuned slate anchors the type; **apricot** is the single energy accent; citrus and blueberry are supporting notes; apple-core sand and warm paper set the ground.

| Token | Hex | Role |
|---|---|---|
| Slate (Ink) | `#26303B` | Primary text, logo, headings, dark backgrounds |
| Slate Soft | `#55606B` | Body text on light |
| Blueberry | `#6B7A8F` | Muted text, captions, taglines, nav links |
| Apricot | `#F7882F` | Primary accent — buttons, links, mark center, accent lines |
| Apricot Bright | `#F97C3D` | Accent on dark backgrounds, hover |
| Citrus | `#F7C331` | Secondary accent — highlights, sparingly |
| Apple Core | `#DCC7AA` | Sand — soft fills, borders on cream, dividers |
| Line | `#E7DCCB` | Borders, hairlines on paper |
| Paper Warm | `#F3EADB` | Section / alternate background |
| Paper | `#FBF7F0` | Base page background, reversed text on dark |

One hue leads (apricot). Use it for a single accent moment per view; citrus is a spark, not a co-lead.

### CSS custom properties

```css
:root {
  --ink: #26303B;
  --ink-soft: #55606B;
  --blueberry: #6B7A8F;
  --apricot: #F7882F;
  --apricot-bright: #F97C3D;
  --citrus: #F7C331;
  --sand: #DCC7AA;
  --line: #E7DCCB;
  --paper-warm: #F3EADB;
  --paper: #FBF7F0;
}
```

Dark sections: background `--ink`, text `--paper`, accent `--apricot-bright`, muted text `#9AA6B2`.

---

## Typography

- **Family:** Hanken Grotesk — Google Fonts. Weights used: 400, 500, 600.
- **Logotype:** weight 500, UPPERCASE, letter-spacing `0.32em`–`0.34em`.
- **Taglines / eyebrows:** 500–600, UPPERCASE, letter-spacing `0.30em`–`0.42em`, color `--apricot` (eyebrow) or `--blueberry` (tagline).
- **Headings:** 500, color `--ink`, tight tracking (`-0.01em`) at large sizes.
- **Body:** 400, color `--ink-soft`, line-height ~1.6.

```html
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600&display=swap" rel="stylesheet">
```

---

## Logo files (`/assets`)

| File | Use |
|---|---|
| `logo-stacked.svg` / `.png` | **Primary.** Square-ish spaces: hero, footer, cards |
| `logo-horizontal.svg` / `.png` | Nav bar, email signature, wide headers |
| `mark.svg` / `.png` | Icon-only on light (favicon source, bullets, loaders) |
| `mark-reversed.svg` / `.png` | Icon-only on dark backgrounds |
| `favicon.svg` / `.png` | Rounded slate tile — favicon / app icon / avatar |

**SVG notes:** mark/favicon SVGs are pure geometry (no font dependency) — use freely. The lockup SVGs (`logo-stacked`, `logo-horizontal`) use live `<text>` in Hanken Grotesk, so they render correctly only where that font is loaded (it is, on the site). For contexts without the font, use the PNGs — type is baked in. PNGs have transparent backgrounds.

### Usage rules
- **Clear space:** keep padding ≥ the height of the mark's middle bar on all sides.
- **Min size:** mark ≥ 20px; stacked lockup ≥ 90px wide; horizontal lockup ≥ 150px wide.
- **Color:** slate + apricot on light; paper + apricot-bright on dark. Don't recolor the mark outside these pairs.
- **Don't:** stretch, rotate, add shadows/gradients, change the bar spacing, or set the wordmark in another font/weight.

---

## Favicon

Use `favicon.svg` (rounded slate tile, paper bars, apricot center). Ship `favicon.svg` + a 32/180px `favicon.png` fallback and `apple-touch-icon`.
