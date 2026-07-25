# Curitiba Palace Hotel — static redesign concept

Evidence-bounded static site for a speculative redesign prospect. Built 2026-07-19.
Deliverable tier: **early visual direction** — not production-complete, not approved
for publication. No publication, outreach, or form submission was performed.

## Files

| File | Role |
|---|---|
| index.html | Production-realistic homepage concept (pt-BR). No proposal/redesign/disclosure language. |
| proposal.html | Independent persuasive sales document, explicitly non-affiliated. |
| rationale.html | Compatibility redirect to proposal.html only. |
| styles.css | Full visual system (OKLCH palette, Cormorant Garamond + Manrope, responsive). |
| script.js | Mobile menu, availability-panel validation + official-channel handoff, scroll reveals. |
| SITE_REVIEW.md | Anti-template tests, visual scorecard, mechanical checks. |
| SOURCE_MANIFEST.md | Every external asset and evidence source with provenance. |
| .impeccable-craft-receipt.json | Impeccable craft invocation receipt (skill commit 44c27a72). |

## Viewing

Static files only. Any server works:

    python3 -m http.server 8000
    # open http://localhost:8000/index.html

Fonts (Google Fonts) and photography (Unsplash CDN) load from the network;
everything else is local. No build step, no trackers, no backend.

## Evidence boundary

Business facts (name, address, phone, 30+ years, services, breakfast,
best-rate promise, quoted public language) come solely from prospect.json,
PRODUCT.md, and BRAND_SOURCE.md, verified 2026-07-19 against
curitibapalacehotel.com.br. Stock photographs do not depict the hotel and are
used only to indicate image treatment direction. Brand color, typography, and
logo were not reliably extractable from the evidence and are documented
substitutes pending official verification.
