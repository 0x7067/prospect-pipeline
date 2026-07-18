# Build report — Contabilidade Curitiba

Status: **PASS — reviewed locally, not deployed.**

## Deliverables

- `index.html` — production homepage, with no proposal link or pitch/audit language.
- `proposal.html` — separate independent sales proposal, marked `noindex,nofollow`.
- `styles.css` — shared responsive visual system.
- `script.js` — accessible mobile navigation and dynamic year.
- `assets/` — locally stored official assets.
- `SOURCE_MANIFEST.md` — provenance, brand brief, fact boundaries and concept thesis.
- `screenshots/` — original and built desktop/mobile viewport and full-page evidence.
- `research/` — official source captures and verification scripts.

## Factual controls

Only claims published on the official domain are retained. “Mais de 30 anos” and CRC-PR registration are explicitly attributed to the office’s own statement. No registration number, named professional, testimonial, customer, tax saving, performance figure, award or result was added. Contact uses direct channels so the static homepage does not collect form data.

## Visual-gate self review

| Dimension | Score / 5 | Rationale |
|---|---:|---|
| Brand fidelity | 4.5 | Official mark, blue, imagery, experience and precise-service language retained. |
| Distinctiveness | 4.3 | Ledger rules, numbered entries and architectural/desk gesture create a prospect-specific system. |
| Hero impact | 4.4 | Strong official panorama, art-directed line breaks and immediate contact path. |
| Below-fold art direction | 4.3 | Tenure composition, service ledger, image strip/method and resolved contact vary rhythm. |
| Typography | 4.2 | Direct sans voice with restrained script-referencing Georgia italics. |
| Image quality/treatment | 4.0 | Native hero size; small images never become standalone large focal images. |
| Mobile intentionality | 4.4 | Split text/image hero, edge-to-edge strip, compact service ledger and 44px targets. |
| Credibility/proof | 3.8 | Source-bounded history, registration statement and full verified contacts; no invented proof. |
| Conversion clarity | 4.6 | WhatsApp first, with phone/e-mail/address alternatives and service-level paths. |
| Proposal persuasiveness | 4.4 | Outcome-first, visual comparison, paired priorities, scope, dependencies and next step. |
| **Average** | **4.29** | Meets ≥4.0 condition with no dimension below 3. |

## Adversarial reads

- Brand strategist: the ledger/work-surface rhythm, official architectural mark, 30+ year story and Ahú location make the direction more specific than a blue accounting template.
- Art director: risk of generic stock imagery is contained by using the panoramic official hero once and treating low-resolution details as a subordinate strip; visual strength continues through varied section structures.
- Mobile/conversion reviewer: hero CTA remains above the first fold; service actions remain compact; the mobile menu exposes state and Escape close behavior; direct contact avoids an excessively tall form.
- Shared high-severity issue identified by two reviewers: none after the compact mobile treatment and small-image constraint.

## Verification record

Automated browser verification was run against a local HTTP server with Playwright/Chromium at exactly 1440×900 and 390×844. Results are stored in `research/verification-results.json`.

- Production desktop: HTTP 200; document 1440/1440 px; 3,801 px full height; zero console/page errors; zero failed requests; all six images loaded.
- Production mobile: HTTP 200; document 390/390 px; 5,102 px full height; zero console/page errors; zero failed requests; all six images loaded.
- Proposal desktop: HTTP 200; document 1440/1440 px; 3,619 px full height; zero console/page errors; zero failed requests.
- Proposal mobile: HTTP 200; document 390/390 px; 5,062 px full height; zero console/page errors; zero failed requests.
- Mobile menu: opened by keyboard; `aria-expanded` changed to `true`; menu became visible; Escape closed it and returned focus to the trigger.
- Anchor integrity: every production anchor resolved; proposal has no local navigation links.
- Semantics: both pages declare `lang="pt-BR"`; neither has an empty H1.
- Production-language scan: no proposal, redesign, prototype, diagnosis, evidence, disclosure, pitch, concept, speculative, independent or audit terms found in `index.html`.
- Contrast spot checks (WCAG relative-luminance formula): white/source blue 6.91:1; white/deep navy 14.19:1; pale blue/deep navy 8.31:1; body ink/warm paper 13.76:1; muted body/mineral 5.38:1.
- Official privacy routes checked: `/politica-de-privacidade.html` and `/politica-de-privacidade/` both returned HTTP 404.

Reviewed screenshots:

- `screenshots/built-desktop-viewport.png` and `built-desktop-full.png`
- `screenshots/built-mobile-viewport.png` and `built-mobile-full.png`
- `screenshots/built-mobile-menu-open.png`
- `screenshots/proposal-desktop-viewport.png` and `proposal-desktop-full.png`
- `screenshots/proposal-mobile-viewport.png` and `proposal-mobile-full.png`

Visual review found no clipping, horizontal overflow, unusable crop, broken hierarchy or unresolved final-contact area. On mobile, the primary message and CTA precede an intentional edge-to-edge hero crop; the detail strip remains native-scale/subordinate. The proposal keeps independent sender framing visible and places the current-versus-direction comparison immediately after the opportunity section.

## Publication integrity

No deployment or prospect contact was performed, per instruction. Therefore a published-file hash comparison is not applicable. `CHECKSUMS.sha256` records the reviewed local release files and screenshots for any later controlled publication check.
