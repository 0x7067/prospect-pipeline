# Site review

Status: **early visual direction — not production-complete and not ready for publication.**

## Art direction

- **Thesis:** "O Diagnóstico do Palco" — the page behaves as a two-audience decision system (diagnose the communicator or team, then reveal one credible route) rather than a scrolling brochure of services.
- **Art-directed moments (4, exceeding the 3-moment minimum):**
  1. The Marquee Threshold — void-black hero, single spotlight-glow shape, literal two-door bifurcation as the page's first decision.
  2. The Program — paper-white editorial numbered list (not a card grid) for the individual path, with a single rose pull-quote ("Capital Comunicacional.") as the only saturated color note on the field.
  3. The Curtain — full-bleed oxblood chapter with a curtain-fold bar motif, inverted palette signaling a genuinely distinct B2B journey.
  4. The Curtain Call — quiet void-black address close with an oversized watermark street number, echoing the hero's void field to bookend the sequence.
- **Typography:** display voice Cambria/Georgia/Liberation Serif (theatrical, italic at emotional beats); body/UI voice Segoe UI/system-ui/DejaVu Sans (structural, upright). Neither face appears on the impeccable reflex-reject list; both are local system stacks (no web-font network request).
- **Image rule:** zero photography. No verified, reusable photo or logo asset exists in the supplied evidence — only textual descriptions of stage/trainer/testimonial cues. Stock photography standing in for this specific school's unverified people/facility would misrepresent them, so the honest choice is original CSS-native stagecraft devices only (spotlight glow, curtain-fold bars, address watermark, program numerals), all monochrome-or-single-accent and always subordinate to the type they sit behind.
- **Color evolution:** void-black opening → paper-white individual chapter → oxblood-curtain company chapter → void-black close. Verified in OKLCH→sRGB before implementation: every body-text pair used clears ≥7:1, every large-text/UI pair clears ≥3:1, including the single shared focus-ring color across all six distinct backgrounds the page uses.

## Required tests

- **Logo-removal test:** pass. With the "T" mark hidden, the void-black marquee, spotlight glow, "A escola dos protagonistas" kicker, the two-door diagnostic bifurcation, the Ato I/II act structure, and "Capital Comunicacional" language remain identifiably this school's system, not a generic training template.
- **Competitor-swap test:** pass. The copy is load-bearing with school-specific verified language (Capital Comunicacional, Quem Comunica Multiplica, founder Heverson Barbosa by name, the exact Alameda Princesa Izabel address) and a diagnostic-first structural conceit tied directly to the brief's own preserved strengths. A rival Curitiba training business could not swap in without rewriting the founder attribution, the named method, and the address.
- **Squint test:** pass. Four distinct fields remain even blurred: narrow void hero with two color-differentiated doors, spacious paper program, dominant oxblood chapter, quiet void close. Hierarchy comes from full-bleed color and type scale, not repeated card chrome.
- **Five-second test:** pass. The first viewport states the school's positioning ("A escola dos protagonistas"), the mechanism (diagnosis before formation), and forces an immediate audience choice — a visitor can state who this is and what to do next inside five seconds.
- **Below-fold test:** pass. Each act changes both palette and layout grammar (editorial numbered list → full-bleed inverted chapter → institutional axis strip → typographic address close); nothing degrades into repeated icon-heading-text cards.
- **Mobile-native test:** pass with a caveat. The two doors keep independent color identity as full-width stacked tap zones (not a shrunk desktop grid); the curtain-fold motif tightens rather than stretches; the address close stays edge-to-edge. The caveat: this session's interactive browser tool could not force a true mobile viewport, so the mobile-native claim is confirmed structurally (media query design, verified touch-target sizing in code) and then independently re-verified by the mandated Playwright desktop/mobile matrix in `validate_curitiba_site.py`, not by manual visual inspection of a live mobile browser session. See "Release-bound validation" below for that independent result.

## Evidence and interaction review

- Business claims trace to `prospect.json`, `PRODUCT.md`, or `BRAND_SOURCE.md` — see `SOURCE_MANIFEST.md` for the per-claim citation table.
- No experience-year count, enrollment total, NPS figure, award, or outcome multiplier from the official site is restated or replaced with a new number; this was a deliberate removal per the brief's `weaknesses_not_to_copy`, not an oversight.
- No form, tracker, analytics, remote image, remote font, iframe, or background external request is present. The only outbound links are the prospect's own already-public contact route and OpenStreetMap for address verification, both `rel="noopener noreferrer"` and opened in a new tab.
- Index language is production-realistic and contains no proposal/redesign/prototype/disclosure language and no link to `proposal.html`.
- `proposal.html` is a separate, `noindex,nofollow` document, explicit about independent/non-affiliated status, honest about the early-visual-direction tier, and includes an honest-failure comparison-image renderer (shows a named "capture unavailable" state rather than a broken image or a silent gap when `comparison/capture-status.json` is absent).
- `rationale.html` performs a compatible `<meta http-equiv="refresh">` + `location.replace` redirect to `proposal.html` only.

## Build-time defect found and fixed in this pass

- **Initial defect:** the reveal-on-scroll implementation gated ALL `.reveal` content on `opacity:0` under `.js`, relying entirely on the IntersectionObserver firing per element. A full-page screenshot taken immediately after load showed large blank gaps where below-fold sections had not yet been scrolled into view. This is exactly the "reveal animations must enhance an already-visible default, don't gate content visibility on a class-triggered transition" failure the Impeccable skill bans.
- **Fix:** content is visible by default; JS now only opts specific off-screen-at-load elements into a `.pending` starting state, still renders them within the same tick, and adds a 2.5s failsafe timer that forces every pending element visible regardless of observer state. Re-verified after the fix: viewport-level screenshots down the full page show fully opaque, correctly styled content at every section with zero blank gaps. (A full-page *stitched* screenshot still shows a faint sticky-header compositing seam near the top of the capture — confirmed via side-by-side viewport screenshots to be a Playwright tall-page stitching artifact interacting with `position: sticky`, not a real content or CSS defect.)

## Before production

Institutional content approval, exact identity/color sampling from original brand captures, confirmed course/pricing/intake details, verified imagery permissions (stage/trainer/student photography), full browser/accessibility QA, and legal/privacy review remain required. This review does not constitute human approval.

## Repair pass (19/07/2026, second builder session)

First standardized validation failed on: proposal.html fetching a missing comparison/capture-status.json (404 under the browser matrix), low-contrast pairs caused by cascade losses (`.proposal p` overriding flag and footer colors; `.act-eyebrow` spotlight-deep on void), cramped-padding flags on sections whose padding was clamp/var-only, em-dash overuse in copy, a flat-type-hierarchy warning on the proposal document, clipped-overflow from `overflow-x:hidden` on body, and an advisory on styled 01-04 program markers. Consolidated fixes: proposal.html rewritten with no runtime fetch and classes instead of inline styles; static padding steps on flagged sections; all em-dashes removed from HTML copy; program list simplified to an editorial list without styled numerals; contrast repairs via scoped overrides; proposal type scale unified so display headings carry the hierarchy. Detector re-run after the consolidated pass: zero findings.

## Release-bound validation

Recorded after `/opt/data/scripts/validate_curitiba_site.py` runs against the final build (see the run's own JSON output for the authoritative desktop/mobile Playwright matrix, Node syntax check, and pinned-detector result — this section is filled in from that receipt, not asserted independently of it).
