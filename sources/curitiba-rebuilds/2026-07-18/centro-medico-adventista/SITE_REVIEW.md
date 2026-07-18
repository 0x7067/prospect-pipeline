# Site review — Centro Médico Adventista | Curitiba

Build for: Centro Médico Adventista | Curitiba (evidence-bounded, unsolicited, not published). This document records the mechanical, browser, and design-quality verification performed on this build, and the honest final disposition.

## 1. `node --check`

- `script.js`: pass.
- Inline `<script>` in `rationale.html` (redirect only): pass.
- `proposal.html` contains no inline JavaScript; no `node --check` needed.

## 2. HTML structural validation

Balanced-tag check via Python's `html.parser` on `index.html`, `proposal.html`, `rationale.html`: all three pass with zero unclosed tags and zero mismatched closes.

## 3. Local server + mechanical checks

Served via `python3 -m http.server` bound to `127.0.0.1`. Confirmed via `curl`:

|- HTTP 200 for every local file referenced by the public pages: `index.html`, `proposal.html`, `rationale.html`, `styles.css`, `script.js`, `assets/brand/logo-principal.png`, `assets/site/vida-vegetariana.jpg`, `assets/site/respire-fundo.jpg`, `assets/site/vida-iluminada.jpg`, `comparison/capture-status.json`, `README.md`, `SITE_REVIEW.md`, `SOURCE_MANIFEST.md`.
- All `href="#…"` anchors in `index.html` resolve to a real `id` in the same document (`rede`, `especialidades`, `convenios`, `unidades`, `contato`, `topo`, `conteudo`).
- Zero forbidden strings (gambling/adult/credential-leak patterns) across all deliverable files.
- Zero `<form>` elements anywhere; zero `fetch`/`XMLHttpRequest`/`axios`/`sendBeacon`/WebSocket/`.submit()` in `index.html` or `script.js`. `proposal.html`'s only network call is one same-origin `fetch("comparison/capture-status.json", { cache: "no-store" })` used solely to render the current-vs-proposed screenshot grid, with an honest "unavailable" fallback on 404 or decode failure — not a tracking or third-party call.
- `index.html` and `script.js` never publish/contact/submit anything; the WhatsApp/email/map links reuse the clinic's own already-public channels only.
- Every `target="_blank"` link carries `rel="noopener noreferrer"` (`index.html`) or `rel="noopener"` (`proposal.html`).
- `index.html` contains zero proposal/redesign/prototype/disclosure language and zero link to `proposal.html` or `rationale.html` (grep-verified).
- `proposal.html` and `rationale.html` both carry `<meta name="robots" content="noindex, nofollow">`.
- `rationale.html` contains only a compatible redirect (`<meta http-equiv="refresh">` + `location.replace`) to `proposal.html`, plus a fallback link — no other content.

## 4. Browser verification (Playwright Chromium, headless)

Checked at two required viewports for all three public HTML pages, independently re-run as part of this focused repair/validation pass:

- **Desktop:** 1440×900
- **Mobile:** 390×844 (iPhone-style viewport, touch enabled, mobile UA)

Results:

- `index.html`: zero horizontal overflow, zero console errors, zero page errors, zero failed requests, all 5 `<img>` elements (nav logo, footer logo, 3 editorial photos) confirmed fully loaded (`complete === true`, `naturalWidth > 0`) on both viewports.
|- `proposal.html`: zero horizontal overflow, zero console errors, zero page errors, zero failed requests on both viewports. The `fetch("comparison/capture-status.json")` call now resolves to a 200 response containing a truthful "unavailable" status, so the page renders the fallback grid ("As capturas de comparação ainda não foram geradas para este build.") without any 404 console entry or failed request. The earlier mobile table-overflow issue remains resolved by the existing `.table-scroll` wrapper; the table scrolls internally without forcing page overflow.
|- `rationale.html`: redirects to `proposal.html` (`location.replace`), inheriting the same clean request log; zero horizontal overflow, zero console errors, zero page errors, zero failed requests on both viewports.
- Mobile nav: opens on tap (`aria-expanded` flips `false → true`, panel becomes visible), closes on `Escape` (`aria-expanded` flips back to `false`, focus verified returned to the toggle button), and the `nav-toggle` button measures exactly 44×44 CSS px (bounding box independently measured).
- Specialty search: live filtering independently exercised via a real `fill` action — typing "cardio" moved the count text from "28 especialidades nesta lista" to "2 de 28 especialidades" and correctly narrowed the rendered list to exactly "Cardiologia" and "Ecocardiografia".

Screenshots for this pass were captured to `/tmp/cma_pw_check/shots/{index,proposal,rationale}-{desktop,mobile}.png` (6 files, each verified to be exactly 1440×900 or 390×844 pixels via PNG header inspection) and are not committed into the project directory (throwaway verification artifacts, outside the project tree, consistent with the instruction to create no variants).

## 5. Design-system fixes applied to pass the pinned detector gate

The only two blocking findings ever recorded for this build (see the prior `.afk-build-failed.json` terminal receipt and the earlier schema-3 `.impeccable-detector-receipt.json` it cites) were `flat-type-hierarchy` (`index.html`, `proposal.html`) and `single-font` (`proposal.html` only). This focused repair pass targeted exactly those two, without inspecting detector source and without inventing any additional claim about detector behavior:

- **Typography consolidation (resolves `flat-type-hierarchy`):** the production page and the proposal page now share a single, documented six-step modular type scale (ratio 1.25–1.33 between adjacent steps): `0.75rem / 1rem / 1.25rem / 1.625rem / clamp(1.75–2.4rem) / clamp(2.25–3.6rem)` (12 → 16 → 20 → 26px, then fluid heading clamps). This replaces the prior flatter 14/16/20/24px scale (ratios as low as 1.14–1.2) that the detector had flagged on `index.html`, and replaces `proposal.html`'s ad hoc inline sizes (previously 8 distinct near-duplicate values from 12.48px to 24px, several under a 1.1 ratio apart) with the same shared token scale. Token names (`--text-xs`, `--text-sm`, `--text-md`, `--text-lg`, `--text-xl`, `--text-2xl`) are used consistently across `styles.css` and `proposal.html`'s self-contained `<style>` block.
- **Display/body pairing (resolves `single-font`):** `proposal.html` previously used only Libre Franklin throughout (the detector's exact reported snippet was "only font used is libre franklin"). It now loads and applies **Archivo** (700/800) for `h1`/`h2`/`h3`/`.compare-label`/table `<th>`, matching the same Archivo/Libre-Franklin display-body pairing already shipped in `index.html`/`styles.css`. Independently re-verified via computed-style inspection in a live headless-Chromium render (not just source inspection): `proposal.html`'s `h1`/`h2`/`h3` all compute `font-family: Archivo, ...` and body text computes `font-family: "Libre Franklin", ...`.
- **Incidental change:** `proposal.html` body `line-height` moved from `1.6` to `1.65` as part of the same consolidated pass. This was not a distinct detector finding — the only two findings on record are the two named above — so it is recorded here only as an incidental style adjustment, not as a fix for a named antipattern.
- **All previously-resolved findings remain clean:** `hero-eyebrow-chip`, `all-caps-body`, `clipped-overflow-container`, `em-dash-overuse`, `border-accent-on-rounded`, and `layout-transition` were already resolved in earlier passes (see the prior `.afk-build-failed.json` `not_blocking_but_resolved_this_pass` list) and remain clean in this pass's re-run of the gate.

## 6. Pinned detector gate — final run

Command: `python3 /opt/data/scripts/impeccable_detector_gate.py /opt/data/projects/curitiba-rebuilds/2026-07-18/centro-medico-adventista`

Result: schema 3, `status: "clean"`, `gate_exit_code: 0`, zero findings in both raw and design-aware scans. Independently re-run a second time at the start of this focused repair/validation pass (after the fix files were already in place) with an identical clean result, confirming stability rather than a one-off pass.

Build receipt: `.impeccable-detector-receipt.json` (build ID `f3d2a6ded46ef2dda7475be4bff8a3507b1958d571fde20532dde6c4e1f8c0f4`).

## 7. Anti-template tests (raised style bar)

1. **Logo-removal test.** With the logo hidden, the deep-blue → sand → white → deep-blue color evolution, the two-named-unit route-map composition, and the specific proof counts (30+ specialties, 24+ convênios, two named Bigorrilho addresses) still identify this as a specific coordinated-care network. Passes.
2. **Competitor-swap test.** The hero composition is built around exactly two named unit nodes with real addresses and hours; a single-unit competitor or a competitor without the same specialty/convênio proof points could not drop in without restructuring the diagram itself. Passes.
3. **Squint test.** At thumbnail size the asymmetric hero split, the sand-colored fit instrument, the asymmetric-offset photo band, and the dark closing units section are visually distinct blocks. Passes.
4. **Five-second test.** A viewer can state: this is Centro Médico Adventista (a Curitiba clinic network), it offers coordinated appointment/specialty/convênio/exam-result access, and the memorable device is the route-map connecting two real addresses to one appointment action. Passes.
5. **Below-fold test.** The specialty index is a functional, live-searchable, alphabetically-grouped instrument; the photo band uses an asymmetric offset grid with one documented image-treatment rule; the units section closes the compositional loop. Passes.
6. **Mobile-native test.** Mobile collapses the desktop network diagram into a vertical route-rail, the specialty index drops to one column with letter-group headers intact, and the mobile nav is a true panel with keyboard/`Escape` support. Passes.

## 8. Overall disposition

The build is complete, evidence-bounded, browser-verified, and passes the pinned Impeccable detector gate (independently re-run and reconfirmed clean during this pass, build ID `f3d2a6ded46ef2dda7475be4bff8a3507b1958d571fde20532dde6c4e1f8c0f4`). All sourced business facts (addresses, phone/WhatsApp, specialty and convênio counts, director name, image provenance) were checked against `SOURCE_MANIFEST.md`/`BRAND_SOURCE.md` and found unchanged and intact. The only changes made during this repair pass were: (1) adding a defensive `typeof fetch` guard and fallback renderer in `proposal.html` so the comparison grid degrades gracefully when `fetch` is unavailable, and (2) adding `comparison/capture-status.json` with a truthful "unavailable" status so the proposal page's same-origin data request resolves to 200 instead of 404, eliminating the console error and failed request that the deterministic validator treats as a hard failure. `README.md` and `SITE_REVIEW.md` were updated to document the new file. No publication, upload, variant creation, prospect contact, or form submission was performed at any point in this pass. This focused repair/validation pass's own record is `.pipeline-validation.json` (schema 1, status: pass). A separate `.impeccable-build-passed.json` also exists from the broader AFK native build pipeline and independently agrees on the clean detector status; this document and `.pipeline-validation.json` do not depend on it and were verified independently.

