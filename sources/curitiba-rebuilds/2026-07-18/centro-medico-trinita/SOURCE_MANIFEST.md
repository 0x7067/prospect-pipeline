# Source manifest

Every business-specific claim, name, number, image, and contact channel used in this build is traceable to one of the sources below. Nothing outside this manifest was used to support a claim about Centro Médico Trinità.

## Primary evidence file

- `prospect.json` (this directory) — business name, category, address, opportunity score, documented problems, evidence links, `source_audit` pointer.

## Independently re-verified sources (re-fetched 2026-07-18, all HTTP 200 unless noted)

| # | Source | What it verified |
|---|---|---|
| 1 | `https://trinitacuritiba.com.br/` (official homepage) | Business name, tagline language ("especialistas em diversas áreas... ortopedia, cirurgia da mão, geriatria, medicina da dor..."), address (Rua Padre Anchieta, 2540, salas 1003 e 1004, Bigorrilho, CEP 80730-001), phone/WhatsApp footer number, email, Montserrat font-family in rendered CSS, brand colors `#3C5750` / `#D3D0BF` / `#F8F8F5`, `user-scalable=no` viewport lock, unpopulated `+`/`%` counters (`data-number="2500"` with no disclosed source), WordPress demo-theme filler strings in DOM, hidden legacy physician block (`tatsu-hide-*` classes), "novo endereço" modal + cookie bar stacking on first load |
| 2 | 11 physician portfolio pages, `https://trinitacuritiba.com.br/portfolio/<slug>/` | Each physician's full name, CRM/RQE number, and specialty tags (see roster table in `BRAND_SOURCE.md`) |
| 3 | `https://trinitacuritiba.com.br/politica-de-privacidade/` | Confirmed the privacy policy still cites the old address (Rua Padre Anchieta, 1691, sala 1906) vs. the homepage's 2540 — the address-discrepancy problem cited in `prospect.json` |
| 4 | `https://wa.me/41992094863` | WhatsApp contact channel resolves; used as-is, no new number invented |
| 5 | `https://www.instagram.com/clinica.trinita/` | Instagram handle resolves; used as footer social link only |
| 6 | `https://www.doctoralia.com.br/clinicas/centro-medico-trinita?saasonly=true` | Cross-checked specialties/convênio naming; used as the scheduling CTA destination (clinic's own existing scheduling integration, not a new booking system) |

## Facts NOT used (explicitly excluded per no-fabrication mandate)

- Doctoralia widget's "13 especialistas" figure (`prospect.json`) — could not be independently re-confirmed as an on-page literal count; the build uses **11 profiles currently presented in the visible portfolio grid** instead, without claiming that this is an exhaustive current total.
- The hidden legacy physician roster (5 additional names in `tatsu-hide-*` DOM classes) — excluded as stale/non-current content, per `BRAND_SOURCE.md`'s documented decision.
- Any patient count, satisfaction percentage, award, testimonial, or outcome statistic — the source site's own counters are unpopulated and no verifiable number exists anywhere in evidence.
- CNPJ — not published anywhere on the official site; not stated in this build.
- Structured business hours — not published in structured form on the official site; the build states only "consultas com horário mediante agendamento," matching the source's own scheduling-widget framing.

## Convênio naming note

The downloaded asset file name reads "jucimed" but the rendered artwork and the Doctoralia listing both read "Judicemed." This build's copy and image alt text use "Judicemed" to match the actually rendered brand name (see `BRAND_SOURCE.md`).

## Visual assets

All photography, logo files, and convênio artwork under `assets/` are sourced from the official site's own `wp-content/uploads/` paths, listed in full in `BRAND_SOURCE.md` under `visual_assets` and `logo_sources`. No stock photography and no generated imagery were used.

## Full detail

See `BRAND_SOURCE.md` in this directory for the complete verification log, physician roster table with per-physician CRM/RQE and photo source, and the itemized list of source-site weaknesses this build deliberately does not copy.
