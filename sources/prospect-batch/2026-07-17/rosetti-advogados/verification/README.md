# Independent re-verification harness

Rerun on 2026-07-17 during BUILD_REPORT.md completion, independent of the
original build session's `/tmp/verify-rosetti/*` scripts (kept separately —
this is a fresh re-implementation, not a replay of prior results).

## How it was run

```
cd verification
npm init -y >/dev/null 2>&1  # or reuse an existing node_modules with playwright-core
npm install playwright-core
# a local chromium executable must be resolvable by playwright-core
node verify.mjs
```

The script:
1. Serves the project root with `python3 -m http.server` on 127.0.0.1.
2. Loads `index.html` and `proposal.html` at 1440×900 (desktop) and
   390×844 (`isMobile:true`, `hasTouch:true`) — 4 page/viewport combinations.
3. Asserts: zero horizontal overflow, zero console/page errors, zero
   failed/4xx/5xx local requests, all in-page anchors resolve, no forbidden
   production-language terms appear on `index.html` (word-boundary matched,
   not naive substring — see note on the "Previdência"/"evidência" false
   positive below), and `index.html` contains no link to `proposal.html`.
4. Runs a full mobile-menu behavior suite against `index.html`: opens/closes
   via toggle button, Escape (with focus return), nav-link click, and scrim
   click; checks `aria-expanded`/`aria-label` update correctly at each step;
   checks tap-target sizes for the toggle, first nav link, and WhatsApp FAB.
5. Scans all visible links/buttons for sub-44×44 CSS px bounding boxes
   (informational — see BUILD_REPORT.md §Verification for interpretation).
6. Saves fresh screenshots (viewport + full page) for both pages/viewports
   to `verification/screenshots/`, plus a `verify-results.json` machine
   summary.

## Result

87 assertions, 0 failures, on the final on-disk state of `index.html`,
`proposal.html`, `styles.css`, and `script.js`. Full pass/fail log and
methodology notes are in `../BUILD_REPORT.md`.
