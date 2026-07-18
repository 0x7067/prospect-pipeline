# Source manifest

Evidence boundary: `prospect.json`, `PRODUCT.md`, and `BRAND_SOURCE.md`, captured for the 2026-07-18 run. No business-specific fact is intended to come from outside those supplied records.

## Facts used

| Site content | Supplied source |
|---|---|
| Business name, Seminário address, phones, email | `prospect.json` → `brand_source.locations` and `contacts`; duplicated in `BRAND_SOURCE.md` |
| Oralclin blue `#0B6E8A`, clinic teal `#4AA6A0`, warm clinical white | `prospect.json` → `brand_source.colors`; duplicated in `BRAND_SOURCE.md` |
| Human care, modern equipment, child-friendly language | `prospect.json` → `brand_source.strongest_public_language` |
| Odontologia integrada, treatments for older patients, child care, personalized treatments, private/insurance care | `prospect.json` → `brand_source.services` |
| Published 4.9/5.0 review proof and new consultório | `prospect.json` → `active_evidence` and `equity_to_preserve` |
| Weekday availability, without exact hours | `prospect.json` → `active_evidence` |
| Official homepage, contact and treatment routes | `PRODUCT.md` → Evidence boundary |

## Local assets

| File | Provenance |
|---|---|
| `assets/logo-oralclin.png` | Local copy of official logo source listed in `BRAND_SOURCE.md`: `https://oralclin.com.br/wp-content/uploads/2023/04/marca-oralclin.png` |
| `assets/espaco-1.webp` | Local copy of official `OralClin-nosso-espaco.webp` listed in `BRAND_SOURCE.md` |
| `assets/espaco-2.webp` | Local copy of official `OralClin-nosso-espaco-2.webp` listed in `BRAND_SOURCE.md` |
| `assets/fachada.webp` | Local copy of official `Fachada-Oralclin.webp` listed in `BRAND_SOURCE.md` |
| `assets/fonts/figtree-latin-400-700.woff2` | Self-hosted UI font; no claim that it is an Oralclin brand font |
| `assets/fonts/source-serif-4-latin-400-600.woff2` | Self-hosted reassurance display font; no claim that it is an Oralclin brand font |
| `original-captures/*` | Supplied captures of the active official site |
| `review-captures/*` | Local QA output generated from this build |

## Deliberately excluded

No invented awards, practitioner biographies, procedure inventory, prices, outcomes, before/after imagery, exact opening hours, or unsupported testimonial quotations. The page does not submit data or claim affiliation, endorsement, approval, publication, or measured performance.
