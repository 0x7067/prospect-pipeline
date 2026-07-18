# Sarnelli Arquitetura — Kimi Variant

Static, evidence-bounded redesign concept for Sarnelli Arquitetura, built independently inside the `kimi-variant` directory.

## Scope

- `index.html` — production-style homepage reorganized as pilar → prova → processo → contato.
- `proposal.html` — independent proposal document (not official).
- `rationale.html` — redirect-only page pointing to `proposal.html`.
- `styles.css` — responsive design system based on verified brand palette (Montserrat + Roboto, ink/paper/teal/neutral).
- `script.js` — accessible mobile navigation.
- `README.md` — this file.
- `SITE_REVIEW.md` — audit notes, evidence boundary, and validation results.
- `SOURCE_MANIFEST.md` — traceability of every business claim.
- `assets/` — local logo and imagery.
- `comparison/` — desktop/mobile validation screenshots and JSON status.

## How to view locally

Open `index.html` directly in a browser, or serve the directory with any static server, e.g.:

```bash
cd /opt/data/projects/curitiba-rebuilds/2026-07-17/sarnelli-arquitetura/kimi-variant
python3 -m http.server 8080
```

Then visit `http://localhost:8080/` and `http://localhost:8080/proposal.html`.

## Validation

Playwright (Chromium) was used to capture the site at 1440×900 and 390×844. All pages loaded without console errors, request failures, or horizontal overflow. See `comparison/kimi-validation-status.json` and `SITE_REVIEW.md`.

## Quality gate

The pinned `impeccable_detector_gate.py` was run twice. After the second pass the receipt remained in `findings` status, primarily because the brand-mandated fonts Montserrat and Roboto are flagged as overused by the generic detector. This blocked the AFK capture script, so the terminal marker is a failed receipt (`/.kimi-failed.json`) rather than a complete receipt.

## Status

Independent concept. Do not publish without authorization from Sarnelli Arquitetura.
