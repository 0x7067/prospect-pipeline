# Product brief

- Business: Centro Médico Trinità
- Surface: unsolicited static redesign concept (hybrid brand + conversion candidate; single canonical build, no variants)
- Audience: infer only from supplied evidence; do not invent segments
- Register: brand (a visitor's first impression of clinical credibility and specialty fit IS the product; the design must also resolve one clear scheduling action)
- Production voice: clear, credible, useful, and indistinguishable from a real publishable clinic homepage
- Proposal voice: independent, persuasive, evidence-led, and explicitly non-affiliated
- Anti-references: generic blue medical templates, unsupported claims, copied branding, fabricated proof, stock "doctor with stethoscope" clichés

## Evidence boundary

Only the following supplied and independently re-verified evidence may support business-specific claims:

- `prospect.json` in this directory (business name, category, address, opportunity notes, documented problems, evidence links).
- Official homepage: https://trinitacuritiba.com.br/ (re-fetched 2026-07-18; HTTP 200).
- Physician portfolio pages (11 pages, re-fetched 2026-07-18, all HTTP 200) — see BRAND_SOURCE.md for the full list and CRM/RQE numbers.
- Privacy policy: https://trinitacuritiba.com.br/politica-de-privacidade/ (re-fetched 2026-07-18; confirms old address discrepancy still present).
- WhatsApp: https://wa.me/41992094863 (re-checked, resolves).
- Instagram: https://www.instagram.com/clinica.trinita/ (re-checked, resolves).
- Doctoralia clinic profile: https://www.doctoralia.com.br/clinicas/centro-medico-trinita?saasonly=true (re-fetched 2026-07-18; cross-check for address/specialties/convênio naming).

## Register

brand

## Design Principles

1. **Symptom/specialty-to-physician wayfinding is the spine of the page**, not an afterthought below a generic hero — this uses the clinic's 11 currently presented specialist profiles across 15 documented areas and directly answers the rebuild angle.
2. **Clinical calm over medical cliché.** No stethoscope stock photography, no saturated "trustworthy blue" gradient. Identity comes from the clinic's own verified logo, green/sand palette, real interior photography, and published language; accessible concept typography may evolve beyond the source theme.
3. **One dominant scheduling path**, reachable without passing through a blocking modal or a cookie barrier — directly resolving the documented "two barriers before scheduling" problem.
4. **Every claim is a literal, re-countable fact** (11 profiles currently presented in the visible grid, 15 areas, 2 convênios highlighted in official-site artwork) — never a performance metric, because the source site's own counters are unpopulated and no verifiable outcome number exists anywhere in evidence.
5. **Accessibility is not decorative here** — the source site's `user-scalable=no` is a documented, named problem; the rebuild allows pinch-zoom and records tested focus/target behavior, because the stated audience includes geriatric patients.

## Anti-references

- The current live site itself: WordPress demo-theme filler ("A futuristic future ahead of you", "Premium Build", "Great Audio"), a blocking "novo endereço" modal stacked on a cookie bar, an empty layout gap before the specialties section, unpopulated "+"/"%" counters, and a stale privacy-policy address.
- Generic blue/teal "medical SaaS" templates.
- Any invented patient count, satisfaction percentage, award, or outcome claim.
