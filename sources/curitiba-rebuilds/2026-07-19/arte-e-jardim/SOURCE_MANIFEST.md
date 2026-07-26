# SOURCE_MANIFEST.md

## Evidence sources

### Business facts (all from prospect.json / PRODUCT.md / BRAND_SOURCE.md)

| Fact | Source | Verified |
|---|---|---|
| Business name: Arte & Jardim | prospect.json.business_name | Yes |
| Official URL: arteejardim.com.br | prospect.json.official_url | Yes |
| 36 years of dedication | prospect.json.brand_source.strongest_public_language | Yes |
| Founder: João E. Wolfart | prospect.json.active_evidence | Yes |
| Curitiba origin, arrived 1984 | Live site sobre page (observed 2026-07-19) | Yes |
| Services: criação, implantação, manutenção, assessoria | prospect.json.brand_source.services | Yes |
| Phone: (41) 3252-8332, 99102-5129, 98422-6251 | prospect.json.brand_source.contacts | Yes |
| Address: Rua Ary Barroso, 1160, Boa Vista, Curitiba/PR, 82560-370 | prospect.json.brand_source.locations | Yes |
| Email: contato@arteejardim.com.br | Live site contato page | Yes |

### Design decisions

| Decision | Rationale | Source |
|---|---|---|
| Single-family Source Serif 4 | Botanical field journal reference; avoids reflex-reject fonts | Impeccable brand.md |
| Oxidized teal primary (oklch 180°) | Palette seed from impeccable palette.mjs; nature-led site observation | palette.mjs seed-160 |
| Amber accent (oklch 55°) | Warm contrast against cool teal; derived from original site's orange CTAs | Live site observation |
| Committed color strategy | Brand surface with personality; hero and portfolio in dark teal | Impeccable SKILL.md |
| "36" as typographic sculpture | Evidence-based: 36 years is the strongest proof signal | prospect.json |
| Vertical timeline for stages | Four documented services have natural sequence | prospect.json.services |
| Portfolio grid on homepage | Solves problem #1: portfolio hidden behind generic prompt | prospect.json.problems[0] |
| Guided intake form | Solves problem #4: unguided file-upload lead form | prospect.json.problems[3] |
| No blog section | Solves problem #2: empty blog section creates scroll noise | prospect.json.problems[1] |

### Imagery sources

| Image | URL | Purpose | License |
|---|---|---|---|
| Hero background | Unsplash photo-1600607687939-ce8a6c4268c4 | Tropical garden hero | Unsplash License |
| Founder section | Unsplash photo-1591857177580-dc82b9ac4e1e | Garden detail | Unsplash License |
| Portfolio large | Unsplash photo-1600566753086-00f18fb6b3ea | Residential garden | Unsplash License |
| Portfolio left | Unsplash photo-1558618666-fcd25c85f82e | Garden pathway | Unsplash License |
| Portfolio right | Unsplash photo-1416879595882-3373a0480b5b | Green area with water | Unsplash License |

### External resources

- Google Fonts: Source Serif 4 (variable, opsized)
- Font loading: display=swap via Google Fonts CSS

### Files produced

| File | Purpose | Size |
|---|---|---|
| index.html | Production homepage | ~17KB |
| proposal.html | Independent sales document | ~9KB |
| rationale.html | Redirect to proposal | ~0.3KB |
| styles.css | Complete design system | ~22KB |
| script.js | Navigation, scroll, reveals | ~2.5KB |
| README.md | Project documentation | ~2KB |
| SITE_REVIEW.md | Quality review and test results | ~5KB |
| SOURCE_MANIFEST.md | This file | ~2KB |
| .impeccable-craft-receipt.json | Craft completion receipt | ~0.5KB |

### Not fabricated

- No invented project names, client names, or testimonials
- No fabricated awards, rankings, or performance claims
- No placeholder business data
- No copied proprietary text beyond verified public language
- No watermarked or social media screenshots used as production imagery


## Assets added in the 2026-07-26 branding pass

Logo, founder portrait and one project photo from the company's own site.

| File | Origin | Date added |
|---|---|---|
| `assets/founder.jpg` | https://arteejardim.com.br/ | 2026-07-26 |
| `assets/logo.png` | https://arteejardim.com.br/ | 2026-07-26 |
| `assets/portfolio-implantacao.jpg` | https://arteejardim.com.br/ | 2026-07-26 |
