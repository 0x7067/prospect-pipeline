# A9 Arquitetura — Hybrid Site Architecture

## 1. Scope and governing idea

Build exactly one self-contained, evidence-bounded hybrid-brand version of the A9 Arquitetura site. The public-facing experience is a guided proof system: a visitor identifies a spatial/business need, sees one relevant project direction, understands the method, and reaches the official contact route. The visual system should preserve the verified language “A9 Arquitetura para Resultados”, “Inteligência Espacial”, “estratégia, funcionalidade e experiência”, and “do projeto à obra”, while reducing the source site’s portfolio overload and repeated unsequenced pathways.

Facts about services, projects, cities, current content, imagery, and contact must be traceable to `BRAND_SOURCE.md`, `PRODUCT.md`, or `prospect.json`. Do not invent metrics, clients, awards, addresses, outcomes, testimonials, project details, or capacity. No publishing, upload, form submission, promotion, analytics, tracking, or external service dependency is part of this build.

## 2. Information architecture

### Primary route: `index.html`

One long-form, semantic homepage with this order:

1. **Skip link and header** — keyboard skip link; A9 wordmark/text lockup; compact navigation anchors for `Método`, `Projetos`, and `Contato`; one prominent contact link pointing to the verified official contact URL. Do not link to `proposal.html`.
2. **Hero / orientation** — dark structural panel, eyebrow `A9 Arquitetura para Resultados`, headline centered on `Inteligência Espacial`, short supporting copy using the verified strategy/functionality/experience language, and a primary “Ver como funciona” anchor. Use one local project image as the visual proof edge, not a decorative carousel.
3. **Problem-led entry points** — four selectable routes for the verified categories: corporate, commercial, cenographic, and residential architecture. The cards must explain that selection changes the featured proof, not open a separate service funnel. Use restrained numbered coordinates (01–04) as the brand-connected notation system.
4. **Guided proof / featured case** — one dominant project panel with image, category label, bounded caption, and method steps. The selected problem-led route updates the panel content from a local JavaScript data object. Default state is corporate; every state has complete copy and an image fallback. Include a clear “Falar sobre um projeto” official contact link.
5. **Service and execution layer** — concise method sequence showing strategy → spatial definition → execution, with construction management, turn key, and corporate experiences listed only as verified service labels where relevant. This section explains the route without claiming guaranteed results.
6. **Portfolio index / proof set** — a deliberately small, curated grid using the supplied official project imagery and source-bounded categories. Avoid a dense archive and avoid repeated generic “Veja mais” calls. Each item is informative or scrolls to the featured proof; it does not imply a detailed case page exists locally.
7. **About / positioning** — short statement connecting spatial intelligence to a project-to-execution promise. Do not add team biographies, founding dates, geography, or unsupported credentials. A secondary link may point to the verified official about page if needed.
8. **Final contact band and footer** — repeat the official contact route, clarify that the local experience is informational and has no form submission, and list only verified navigation/source links. Footer should remain quiet and not add social/promotion mechanics.

### Independent route: `proposal.html`

A persuasive but clearly independent sales document for the redesign concept, not part of the production homepage navigation. It should explain the observed issue (content density and weak problem-to-proof sequence), the proposed route, visual rationale, responsive behavior, and expected review questions without presenting fabricated business outcomes. It may link back to `index.html` and the official evidence URLs. Label the independent proposal status in the page copy; do not imply affiliation or approval.

### Compatibility route: `rationale.html`

Redirect-only compatibility page. Use a minimal HTML document with a canonical/meta refresh and a short accessible fallback link to `proposal.html`. It must not contain a second rationale experience, site navigation, tracking, or business claims. JavaScript is not required for the redirect.

## 3. File responsibilities

- `index.html`: the complete production-realistic local homepage described above. Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), accessible labels, local asset paths, and official contact/about links only where justified. No proposal/redesign/prototype/disclosure language and no proposal link.
- `proposal.html`: independent persuasive rationale and review document for the hybrid concept; never used as the homepage.
- `rationale.html`: redirect-only compatibility shim to `proposal.html`.
- `styles.css`: all layout, typography, palette, responsive rules, focus/hover/selected states, reduced-motion behavior, image cropping, and print-safe basics. Use the evidence-compatible structural black `#111111`, warm neutral `#F4F0E8`, and restrained muted green `#B7C9C0`; ensure text contrast rather than using sampled colors blindly.
- `script.js`: progressive enhancement only. Own the four-route selection, selected state, featured proof replacement, `aria-selected`/`tabindex` synchronization, keyboard behavior, and a no-JavaScript-safe default. No fetch, form handling, analytics, external libraries, or network calls.
- `README.md`: local run instructions, file map, supported viewport review steps, evidence boundary, known non-goals, and validation commands.
- `SITE_REVIEW.md`: evidence-based review checklist and observed implementation results for desktop/mobile, accessibility, interaction states, performance, and prohibited-flow checks. This is evidence documentation, not an approval receipt.

## 4. Interaction model and states

The problem-led control is a tablist or equivalent grouped single-selection control. Each route control has:

- default/unselected state: warm-neutral surface, clear label and number;
- hover state: subtle border/green accent only, no layout jump;
- keyboard focus state: visible high-contrast outline, independent of hover;
- selected state: dark or green emphasis, `aria-selected="true"`, and matching featured proof content;
- pressed/touch state: brief color transition with no navigation surprise;
- unavailable/error-safe state: if a local image fails, retain alt text/caption and show a neutral background rather than collapsing the proof panel.

Use event delegation or a small explicit listener set. The selected route must be usable by keyboard (`ArrowLeft`/`ArrowRight` or standard tab semantics), announce the changed featured panel through a labelled region/live status without excessive verbosity, and preserve a stable anchor position. Do not auto-rotate content. All contact links are ordinary outbound links to the verified official contact page; they do not submit data.

## 5. Responsive behavior

### 1440 × 900 target

- Keep a centered max-width content frame around 1180–1240px with generous outer margins.
- Header is one horizontal row; navigation and contact action remain visible.
- Hero uses a two-part composition: large text block and a wide image/proof edge, with headline sized for two or three balanced lines.
- Problem routes display as four columns or a two-by-two spatial grid depending on copy length; featured proof uses a dominant image beside method/caption content.
- Portfolio proof set uses a controlled asymmetric grid, preserving clear reading order and avoiding card-wall density.
- The first viewport must communicate positioning, one action, and the start of the problem-led route without relying on tiny text.

### 390 × 844 target

- Header collapses to brand plus a compact menu button or stacked anchor treatment; no horizontal overflow. The contact action remains reachable in the first interaction path.
- Hero becomes a single column. Keep the headline readable (approximately 44–56px clamp range), with the image below or behind a controlled crop; avoid text over busy imagery.
- Problem routes become one-column full-width controls with 44px minimum touch targets. Do not hide categories behind a swipe-only carousel.
- Featured proof stacks image, label, caption, and method. Update content in place so selection does not reset scroll or open a modal.
- Portfolio items become a single-column or two-column compact list with explicit labels; preserve source order and meaningful alt text.
- Reduce decorative coordinate lines and padding while retaining the black/warm-neutral/green hierarchy. Long headings wrap naturally; no clipped labels.
- Footer and final contact band remain reachable without fixed overlays. Respect safe-area insets where useful.

Use CSS `clamp()`, grid/flex, and a breakpoint around 760–840px rather than device-specific hacks. Validate at exactly both target sizes and at an intermediate width for overflow.

## 6. Accessibility requirements

- Use one `h1`, ordered heading levels, landmarks, and descriptive link text.
- Provide a skip link, document language, meaningful image `alt`, and empty-alt for purely decorative imagery.
- Ensure all controls are keyboard reachable, have a visible `:focus-visible` style, and have a minimum 44×44px touch area.
- Implement tab semantics correctly if used (`role=tablist`, `role=tab`, `role=tabpanel`, IDs/`aria-controls`, selected and keyboard behavior); otherwise use ordinary buttons with equivalent labels.
- Keep contrast WCAG AA for body and control text in every state; never communicate selection by color alone.
- Add `@media (prefers-reduced-motion: reduce)` to disable nonessential transitions. Avoid autoplay and parallax.
- Do not use fake disabled controls, inaccessible icon-only buttons, or modal-only content.

## 7. Performance and local operation

Use only local HTML/CSS/JS and supplied local assets. Prefer appropriately sized local images, explicit `width`/`height` or aspect-ratio to prevent layout shift, `loading="lazy"` below the fold, and `decoding="async"` where appropriate. Keep JavaScript small and defer it. Do not load fonts, images, scripts, APIs, or analytics from the network. Use a plain local server for review (for example `python3 -m http.server`) rather than opening assumptions about file URLs.

## 8. Required evidence artifacts

The implementation handoff is complete when the required files exist and the following evidence can be recorded in `SITE_REVIEW.md`:

1. `node --check script.js` succeeds.
2. A local-server review confirms `index.html` and `proposal.html` render without console/runtime errors; `rationale.html` redirects only.
3. Exact 1440×900 and 390×844 captures show no horizontal overflow, readable hierarchy, and intact contact/proof paths.
4. Route controls are tested in default, hover/focus, selected, keyboard, reduced-motion, and missing-image-safe states.
5. A source audit confirms business-specific claims and image usage are bounded to the supplied evidence; no forms, upload, publishing, tracking, or promotion flow is present.
6. The detector/capture receipts, when run by the implementation lane, are described truthfully with their actual output rather than pre-asserted in this plan.

Success is one coherent hybrid version with two coherent page experiences (`index.html` production route and `proposal.html` independent document), not multiple competing visual variants.
