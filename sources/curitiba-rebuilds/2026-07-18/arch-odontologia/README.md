# Arch Odontologia — hybrid-brand static concept

Static, dependency-free website concept for Arch Odontologia (Curitiba/PR), built as an unsolicited redesign demonstration.

## Files

- `index.html` — public-facing homepage. Standalone; does not mention or link to any proposal/redesign/prototype/disclosure material.
- `proposal.html` — separate, `noindex`, non-affiliated rationale page explaining the concept and the problems it addresses. Never linked from `index.html`.
- `rationale.html` — redirect-only stub (`meta http-equiv="refresh"` + `noindex`) that forwards to `proposal.html`. Not linked from `index.html`.
- `styles.css` — single stylesheet, no external font/CDN imports.
- `script.js` — vanilla JS, mobile nav toggle only. No network calls, no analytics, no third-party libraries.
- `PRODUCT.md`, `DESIGN.md`, `BRAND_SOURCE.md`, `prospect.json` — source briefs supplied for this build (not shipped as site content).
- `SOURCE_MANIFEST.md` — maps every business-specific claim on the site to its source.
- `SITE_REVIEW.md` — recorded results of `node --check`, the Impeccable anti-pattern detector, and local Playwright checks at 1440×900 and 390×844.

## Constraints honored

- No build tooling; open `index.html` directly in a browser or serve the folder statically.
- No external services, CDNs, web fonts, analytics, forms, file uploads, or outbound network calls from any script.
- No fabricated testimonials, before/after photography, awards, or numeric outcomes.
- Single, consistent contact path (one WhatsApp number) used for the contact link and appointment CTA, resolving the conflicting-number problem found in the official site's source.
- `index.html` contains no reference to "proposal", "redesign", "prototype", or "disclosure" in any form (verified by direct text search — see `SITE_REVIEW.md`).

## How to view

```sh
# any static file server, or simply open the file directly:
open index.html        # macOS
xdg-open index.html    # Linux
```

No installation step is required — there is no package.json/build step for the site itself.
