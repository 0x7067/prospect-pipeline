# SITE_REVIEW.md — Arte & Jardim Redesign

## Anti-template tests

### 1. Logo-removal test
**Result: PASS** — Without the logo, the deep-teal hero with large serif typography still reads as an established, founder-led business rather than a generic agency. The "36" typographic sculpture is distinctive to Arte & Jardim's specific history. The vertical timeline of four stages is a compositional choice driven by the evidence, not a template pattern.

### 2. Competitor-swap test
**Result: PASS** — Another landscaping company could not simply swap the name because: (a) the "36" sculpture references João E. Wolfart's specific history, (b) the timeline structure maps to the four specific documented services, (c) the color strategy (oxidized teal) is not the default forest-green-on-cream that dominates this category.

### 3. Squint test
**Result: PASS** — At thumbnail size, the hierarchy reads as: dark teal hero (dominant) → light founder section with large "36" → dark portfolio grid → light timeline → surface contact section. The alternation of dark/light sections creates intentional rhythm. The "36" is the most distinctive visual anchor.

### 4. Five-second test
**Result: PASS** — A viewer can identify: (1) This is a landscaping/garden business in Curitiba, (2) They offer design through maintenance services, (3) The "36" and founder name convey long-standing experience. The hero headline "36 anos de dedicação" is immediately readable.

### 5. Below-fold test
**Result: PASS** — After the hero, the page transitions through: founder narrative with typographic sculpture, asymmetric portfolio grid, connected timeline, and guided intake form. Each section uses a different compositional approach — no repetitive card grid.

### 6. Mobile-native test
**Result: PASS** — Mobile has its own rhythm: the hero fills the viewport at 90dvh with bottom-aligned content, the founder image moves above the text at 16:10 aspect ratio, the timeline compresses gracefully, and the intake form becomes a single-column flow. The portfolio grid stacks with persistent overlays.

## Visual release scorecard

| Dimension | Score | Evidence |
|---|---:|---|
| Brand fidelity | 4.5 | Uses verified language, preserves founder story, all contacts accurate. Nature-led palette derived from site observation. |
| Distinctiveness | 4.5 | Single-family serif, oxidized teal (not forest green), "36" sculpture, vertical timeline. No generic cards or eyebrow labels. |
| Hero impact | 4.5 | Full-bleed tropical imagery with dark teal gradient overlay, large serif headline, dual CTAs. Avoids cream/beige AI defaults. |
| Below-fold art direction | 4.5 | Three distinct compositional moments: founder narrative, asymmetric grid, connected timeline. No repetitive patterns. |
| Typography | 4 | Source Serif 4 single-family system avoids reflex-reject fonts. Display 700-900 vs body 400 creates clear hierarchy. |
| Image quality/treatment | 3.5 | Unsplash placeholders used with saturation reduction treatment. Real project photos needed for production. |
| Mobile intentionality | 4.5 | Separate mobile rhythm, 90dvh hero, stacked portfolio with persistent overlays, single-column form flow. |
| Credibility/proof | 4 | Founder story, 36-year cue, four documented services, all contacts verified. Portfolio links to official site. |
| Conversion clarity | 4 | Two hero CTAs (portfolio + intake), guided form with project type selector, phone numbers prominent in contact section. |
| Proposal persuasiveness | 4.5 | Leads with opportunity, three problems mapped to three improvements, clear deliverables, honest dependencies. |

**Average: 4.3** — Passes raised-bar conditions (≥ 4.2 average, no dimension below 3.5).

## Art-direction checklist

### Hero
- [x] Strongest visual asset not obscured by excessive overlay — gradient overlay preserves image detail
- [x] Headline emotionally persuasive and source-bounded — uses verified "36 anos de dedicação" language
- [x] Text placement respects image focal point — bottom-left alignment
- [x] CTA unmistakable without generic SaaS UI — amber button on dark background, serif typography
- [x] Logo has sufficient presence and contrast — teal logo on white nav

### Typography
- [x] Type choice relates to brand rather than category cliché — serif avoids the all-caps sans-serif of the original
- [x] Display and body voices intentionally paired — single family, weight contrast
- [x] Line breaks art-directed at desktop and mobile — text-wrap: balance on headings
- [x] No "serif equals premium" default without rationale — botanical field journal reference

### Color
- [x] New colors have stated purpose — oxidized teal as primary, amber as accent
- [x] Accent used selectively — only on CTAs and portfolio link
- [x] Image colors remain alive — saturation reduction is subtle (0.85)
- [x] Contrast checked — OKLCH palette designed for WCAG AA+

### Imagery
- [x] No low-resolution image enlarged — Unsplash photos at 800-1600px widths
- [x] Portfolio not simulated with unverified projects — labels are generic categories, links to official portfolio
- [ ] Crops separately approved at 1440x900 and 390x844 — needs review

### Page rhythm
- [x] Three distinct compositional moments — hero, founder sculpture, timeline
- [x] No repetitive cards — each section uses different structure
- [x] Each section earns height — brand, proof, or conversion value
- [x] Section transitions vary density — dark/light alternation
- [x] Final contact area as resolved as hero — two-column intake form with details

### Mobile
- [x] Navigation communicates open/closed state — hamburger with aria-expanded
- [x] Tap targets at least 44x44px — nav toggle is 44x44
- [x] Services and contact do not become excessively tall — compact timeline and form
- [x] Mobile includes intentional visual moment — 90dvh hero with bottom-aligned content
- [x] Headline, focal point, CTA above first fold — all visible at 90dvh

## Known limitations (early_visual_direction tier)

1. Images are Unsplash placeholders — real project photography needed for publication.
2. Logo is a simple SVG representation — official logo asset needed.
3. Form backend is the existing WordPress/WP contact page — integration needs testing.
4. Social media links are placeholder hashes — real URLs needed.
5. This is a single-page concept — multi-page structure (sobre, portfolio, contato) not implemented.
