# Centro Médico Trinità — hybrid-brand static rebuild

A single canonical, static, no-build-step website concept for Centro Médico Trinità (Bigorrilho, Curitiba), built entirely from independently re-verified public evidence. No forms, no uploads, no external booking/publishing services, no analytics, no contact-form backend — every "agendar" action links to the clinic's own existing Doctoralia and WhatsApp channels.

## Files

| File | Purpose |
|---|---|
| `index.html` | The production-voice homepage. Publicly indexable. Never mentions the proposal, redesign, prototype, or disclosure concepts. |
| `proposal.html` | Independent, non-affiliated pitch/rationale document explaining the redesign angle, the verified problems it addresses, and linking to `SOURCE_MANIFEST.md`. Marked `noindex, nofollow`. Never linked from `index.html`. |
| `rationale.html` | Redirect-only shim to `proposal.html` (meta-refresh + `location.replace`), `noindex, nofollow`. |
| `styles.css` | All styling: design tokens (brand green/sand/paper palette, Montserrat type scale), layout, components, responsive breakpoints, reduced-motion handling. |
| `script.js` | Progressive-enhancement only, vanilla JS: accessible mobile menu (focus trap, Escape-to-close, breakpoint auto-close), specialty-rail → team filter, scroll-reveal via `IntersectionObserver` with a no-JS fallback. No network calls, no form handling, no third-party SDKs. |
| `SOURCE_MANIFEST.md` | Every business-specific claim traced to a specific re-verified source URL or `prospect.json`. |
| `SITE_REVIEW.md` | Recorded, evidence-based results of `node --check`, the bundled anti-pattern detector, and local Playwright checks at 1440×900 and 390×844. |
| `PRODUCT.md` / `DESIGN.md` / `BRAND_SOURCE.md` / `prospect.json` | Inputs this build was produced from (not part of the shipped site). |

## Design summary

- **Palette:** `#3C5750` (primary green) and `#D3D0BF` (sand), sampled directly from the official site's rendered CSS. `#F8F6F1` warm-paper background (a documented, deliberate evolution from the source's `#F8F8F5`). `#24352F` deepened green for higher-contrast headings/footer (a documented evolution, not a sourced value).
- **Type:** Montserrat — confirmed the exact family used site-wide on the official theme.
- **Structural idea:** a specialty/symptom rail (15 documented areas of practice) filters the visible team grid, moving the visitor from "área de atuação" → "especialista" → "agendar" in one visible path — the 11 specialist profiles currently presented in the official site's visible grid are the wayfinding spine, not a decorative afterthought.
- **Conversion path:** exactly two CTAs, consistently repeated (header, hero, contact) — Doctoralia scheduling and WhatsApp — with zero blocking overlays on load (directly resolving the documented "two barriers before scheduling" problem on the live site).
- **Accessibility:** no `user-scalable=no` (pinch-zoom is restored), visible focus states, 44×44px minimum targets on buttons, icon controls, menu controls and specialty filters, `aria-live` status text on the team filter, and a focus-trapped mobile menu. The review records these tested control scopes; it does not claim every text link is 44×44px.
- **No fabricated numbers:** only literal, re-countable facts appear (11 currently presented profiles, 15 areas, 2 convênios highlighted in official-site artwork) — no invented patient counts, satisfaction percentages, or awards, because the source site's own counters are unpopulated and no verifiable outcome number exists in evidence.

## How to view

Open `index.html` directly in a browser (file:// works — no build step, no server, no dependencies). `proposal.html` and `rationale.html` are companion documents, not linked from the production page, intended for direct review only.

## Verification

See `SITE_REVIEW.md` for the exact, recorded output of `node --check`, the bundled anti-pattern detector, and local Playwright checks (desktop 1440×900 and mobile 390×844): title/H1, console/page errors, horizontal overflow, mobile nav open/close, and CTA destinations.
