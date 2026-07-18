# Site review — CEAP Curitiba

Review date: 2026-07-18 (validation/repair pass)

## Scope

Single static hybrid-brand version only (`index.html`, `proposal.html`, `rationale.html`, `styles.css`, `script.js`). No rebuild, no variants, no publishing, uploads, form submissions, contact actions, or external browsing were performed. `assets/` is empty and no page references a local image/asset in that directory, so nothing there needed repair.

## Commands run, exact form and exit codes

1. `node --check script.js`
   - Working dir: `/opt/data/projects/curitiba-rebuilds/2026-07-18/ceap-curitiba`
   - Exit code: `0` (no output — syntax valid)

2. Canonical detector (`/opt/data/bin/impeccable`, resolved CLI `v3.2.1`) on shipped files:
   - `/opt/data/bin/impeccable detect index.html proposal.html styles.css script.js`
   - Exit code: `0`, zero findings (no stdout output)
   - Cross-checked against the existing build receipt `.impeccable-detector-receipt.json`, which independently recorded both `raw` and `design-aware` scan modes at exit code `0` with `"findings": []` and `"status": "clean"`.

3. Local Playwright/Chromium checks (Playwright `1.61.1`, Chromium `149.0.7827.55`, headless, `file://` URLs) — script run: `node /tmp/pw-check/ceap-check.js`
   - Exit code: `0`
   - Pages checked: `index.html`, `proposal.html`, `rationale.html` (as applicable — `rationale.html` is a redirect-only stub)
   - Viewports: `1440x900` and `390x844`
   - Checks per page/viewport: page title, first `h1` text, console errors, uncaught page errors, failed network requests (local asset resolution), horizontal overflow (`document.documentElement.scrollWidth` vs `clientWidth`), and — for `index.html` at `390x844` — mobile nav toggle open/close behavior and `aria-expanded` state.

## Viewport-by-viewport results

### index.html
| Viewport | Title | H1 | Console/page errors | Overflow | Broken local assets | Mobile nav/CTA |
|---|---|---|---|---|---|---|
| 1440x900 | "CEAP Curitiba — Cursos Técnicos e Profissionalizantes" | "Formação prática com convênios de estágio documentados." | none | none (docWidth 1440 = viewportWidth 1440) | none | n/a (desktop) |
| 390x844 | same as above | same as above | none | none (docWidth 390 = viewportWidth 390) | none | Pass — toggle opens nav (`is-open` false→true), `aria-expanded` becomes `"true"`, and clicking a nav link closes the menu (`is-open` reverts to closed) |

### proposal.html
| Viewport | Title | H1 | Console/page errors | Overflow | Broken local assets |
|---|---|---|---|---|---|
| 1440x900 | "CEAP Curitiba — Conceito de redesign independente" | "Um caminho direto entre o catálogo real de cursos e a pré-matrícula." | none | none | none |
| 390x844 | same as above | same as above | none | none | none |

### rationale.html
Redirect-only stub with immediate `<meta http-equiv="refresh" content="0; url=proposal.html">` and `<link rel="canonical" href="proposal.html">`. Loaded directly at both viewports; browser followed the refresh to `proposal.html` with no navigation error, landing on the same clean title/H1/overflow/asset results as `proposal.html` above (rows omitted above to avoid duplication — see raw JSON in verification log below for both viewport entries).

## Full raw result set (JSON, both viewports × three page targets)

```json
[
  {
    "page": "index.html", "viewport": "1440x900", "navError": null,
    "title": "CEAP Curitiba — Cursos Técnicos e Profissionalizantes",
    "h1": "Formação prática com convênios de estágio documentados.",
    "overflow": { "docWidth": 1440, "viewportWidth": 1440, "hasOverflow": false },
    "assetErrors": [], "consoleErrors": [], "pageErrors": [], "failedRequests": [],
    "navToggleTest": null
  },
  {
    "page": "index.html", "viewport": "390x844", "navError": null,
    "title": "CEAP Curitiba — Cursos Técnicos e Profissionalizantes",
    "h1": "Formação prática com convênios de estágio documentados.",
    "overflow": { "docWidth": 390, "viewportWidth": 390, "hasOverflow": false },
    "assetErrors": [], "consoleErrors": [], "pageErrors": [], "failedRequests": [],
    "navToggleTest": { "beforeOpen": false, "afterOpen": true, "ariaExpanded": "true", "closesOnLinkClick": true }
  },
  {
    "page": "proposal.html", "viewport": "1440x900", "navError": null,
    "title": "CEAP Curitiba — Conceito de redesign independente",
    "h1": "Um caminho direto entre o catálogo real de cursos e a pré-matrícula.",
    "overflow": { "docWidth": 1440, "viewportWidth": 1440, "hasOverflow": false },
    "assetErrors": [], "consoleErrors": [], "pageErrors": [], "failedRequests": [],
    "navToggleTest": null
  },
  {
    "page": "proposal.html", "viewport": "390x844", "navError": null,
    "title": "CEAP Curitiba — Conceito de redesign independente",
    "h1": "Um caminho direto entre o catálogo real de cursos e a pré-matrícula.",
    "overflow": { "docWidth": 390, "viewportWidth": 390, "hasOverflow": false },
    "assetErrors": [], "consoleErrors": [], "pageErrors": [], "failedRequests": [],
    "navToggleTest": null
  },
  {
    "page": "rationale.html", "viewport": "1440x900", "navError": null,
    "finalUrlAfterRedirect": ".../proposal.html",
    "title": "CEAP Curitiba — Conceito de redesign independente",
    "h1": "Um caminho direto entre o catálogo real de cursos e a pré-matrícula.",
    "overflow": { "docWidth": 1440, "viewportWidth": 1440, "hasOverflow": false },
    "assetErrors": [], "consoleErrors": [], "pageErrors": [], "failedRequests": []
  },
  {
    "page": "rationale.html", "viewport": "390x844", "navError": null,
    "finalUrlAfterRedirect": ".../proposal.html",
    "title": "CEAP Curitiba — Conceito de redesign independente",
    "h1": "Um caminho direto entre o catálogo real de cursos e a pré-matrícula.",
    "overflow": { "docWidth": 390, "viewportWidth": 390, "hasOverflow": false },
    "assetErrors": [], "consoleErrors": [], "pageErrors": [], "failedRequests": []
  }
]
```

## Repairs made

None. No defects were found in any check family (`node --check`, canonical detector, or Playwright/Chromium at both viewports), so no code changes were made to `index.html`, `proposal.html`, `rationale.html`, `styles.css`, or `script.js`. Per scope, since no repair was justified, all three check families above reflect a single verification pass (no re-run was needed).

## Evidence boundary checks (carried over, still valid — unchanged by this pass)

- Catalog count is described as nine sitemap-listed course pages, not nine active enrollments.
- Ten internship agreements and enrollment documents are explicitly scoped to Técnico em Enfermagem.
- Cuidador de Idosos is marked 100% online.
- Operador de Empilhadeira describes online/live theory plus practice.
- Reciclagem avoids choosing between conflicting source schedules and asks the visitor to confirm the class.
- NR 10 and NR 35 state delivery at the CEAP unit or in-company.
- External destinations are user-activated official WhatsApp, Instagram, and `tel:` links; there are no automatic third-party requests on page load (confirmed again by zero `failedRequests` and zero external navigations during headless load in this pass).

## Final status

**PASS — no repair required.** All three check families (`node --check script.js`, canonical `impeccable detect` on shipped files, and Playwright/Chromium checks at 1440x900 and 390x844 for `index.html`/`proposal.html`/`rationale.html`) completed with exit code `0` and zero findings/errors. The single existing hybrid-brand site and all working files were preserved unmodified.
