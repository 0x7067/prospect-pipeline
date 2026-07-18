# Adversarial Brand & Style Review

**Target:** Penha Moraes one-prospect pilot  
**Reviewed:** 17 July 2026  
**Scope:** Production homepage, mobile navigation, and separate proposal page  
**Evidence:** Local files exactly matching the published preview; 1440×900 and 390×844 Playwright renders; live original website benchmark

## Executive summary

The revised pilot has a strong hero and is technically sound, but it is not yet a reusable gold standard. Its strongest screen is the first viewport. Below the fold, the brand expression becomes generic and under-evidenced. The concept borrows familiar “premium architecture” signals—navy, editorial serif, magenta accent, numbered services—without yet converting Penha Moraes’s own identity into a distinctive system.

| Severity | Count |
|---|---:|
| Release blocker | 0 |
| High | 4 |
| Medium | 6 |
| Low | 2 |
| **Total** | **12** |

### Subjective scorecard

| Dimension | Score / 5 | Adversarial read |
|---|---:|---|
| Technical execution | 5.0 | No overflow, failed assets, console errors, or broken mobile menu |
| First-screen visual impact | 4.2 | Strong image, hierarchy, and CTA |
| Brand fidelity | 3.2 | Logo and magenta survive; typographic voice changes substantially |
| Distinctiveness | 3.0 | Could be adapted to another architecture studio too easily |
| Below-fold art direction | 2.8 | Sparse service rows and office block lose the hero’s energy |
| Credibility/proof | 2.2 | No usable portfolio narrative, project facts, or sourced proof |
| Mobile intentionality | 3.5 | Strong hero; later sections feel stacked rather than art-directed |
| Conversion clarity | 3.3 | Contact works, but persuasion drops between hero and contact |
| Proposal persuasiveness | 2.1 | Reads as a defensive audit memo, not a premium sales document |

## High-severity findings

### 1. The concept weakens the prospect’s most distinctive brand voice

The original leads with an emotionally assertive, owned-sounding line—“Experiências transformadoras com a arquitetura”—using bold uppercase sans typography and a vivid pink intervention. The proposal replaces this with a literal service inventory. That is factually safe but emotionally weaker and less memorable.

**Correction:** Preserve or reinterpret verified language already used by the prospect. Separate the emotional promise from the factual service list. Do not make factual safety synonymous with flat copy.

### 2. The experience collapses below the hero

The first viewport feels art-directed. The services section is then four nearly identical ruled rows with no imagery, context, interaction, or change in pacing. The office section contains one short sentence and a low-resolution image. This creates a visible “hero plus template sections” pattern.

**Correction:** Require a complete below-fold visual narrative before release: project proof, a varied editorial rhythm, a studio/approach moment, and a decisive contact ending. A strong hero cannot compensate for an under-designed remaining 70% of the page.

### 3. The design lacks enough verified visual proof

Only two official images are used. The service image is 470 px wide, visibly watermarked, and stretched into a major brand moment. The redesign removes the original’s portfolio, testimonial, and social-proof cues without replacing them with verified evidence.

**Correction:** Do not advance a prospect to final design until the asset inventory is sufficient. Gather at least one hero image plus three verified project/detail images, project names, and any public proof the firm already uses. If evidence is unavailable, label the concept as an early visual direction rather than pretending it is a finished production site.

### 4. The proposal page is an audit memo rather than a sales proposal

It leads with non-affiliation, technical defects, DOM/GET/schema details, and limitations. It repeats separation/disclosure language and has no visual comparison, scope, sequence, timeline, decision, or clear next step. A skeptical prospect must work too hard to understand the opportunity.

**Correction:** Lead with the opportunity and the visual result. Move disclosure to a compact but clear block. Show current-versus-proposed evidence, three prioritized improvements, deliverables, dependencies, and one next action. Keep raw technical findings in an appendix.

## Medium-severity findings

### 5. Typography introduces a second identity rather than tightening the existing one

The logo and original site use geometric/condensed sans language; the redesign uses a Georgia-like serif for major headings. This produces “editorial luxury architecture” but does not clearly originate from Penha Moraes.

**Correction:** Source or approximate the prospect’s actual typographic DNA before selecting a display face. If introducing contrast, explain the relationship and test it against the logo rather than defaulting to serif-as-premium.

### 6. The hero overlay suppresses the strongest visual asset

The dark navy veil gives text contrast but removes much of the image’s material detail, sky, landscaping, and warm wood. The original uses the same asset more confidently.

**Correction:** Use a localized gradient behind copy rather than a uniform dark cast. Preserve daylight and material color on the image’s focal side.

### 7. The palette is plausible but not proven as the actual brand palette

Magenta is retained, but the exact hue and navy are not documented from a brand source. The navy changes the emotional register from bright/energetic to restrained/corporate.

**Correction:** Extract and record palette values from verified logo/site assets. Deliberately classify colors as retained, evolved, or newly introduced.

### 8. The office section has weak information value and excessive empty space

“Curitiba” plus one factual sentence does not justify a full section. On desktop, the text and image feel disconnected. On mobile, it becomes a long informational pause.

**Correction:** Use verified studio/profile material, a stronger project caption, or compress the section. Every large section must earn its space through brand, proof, or conversion value.

### 9. Mobile becomes a stacked document after the hero

The mobile hero is strong, but the numbered services, office block, and three contact cards are mechanically stacked. Section heights are generous without enough content variation.

**Correction:** Design a separate mobile rhythm: horizontal service index or compact accordion, edge-to-edge image moments, shorter contact treatment, and deliberate changes in density.

### 10. Mobile navigation is functional but generic

The `<details>` menu works and has adequate tap targets, but it has no close label/state, active-section feedback, or outside-click behavior. The box floats over the hero without becoming a branded moment.

**Correction:** At minimum change the label to “Fechar” while open and add visible focus/active states. For higher-end concepts, make the menu composition part of the visual system rather than a utility dropdown.

## Low-severity findings

### 11. Decorative vertical location text is generic

“Curitiba · Paraná” and its line add polish but not unique brand meaning. The device is common in architecture templates.

**Correction:** Replace generic decoration with a verified project/location caption or a meaningful brand cue.

### 12. Contact cards revert to generic bordered boxes

The design correctly avoids cards in services, then ends with three conventional bordered cards. This weakens consistency.

**Correction:** Use an editorial contact composition—oversized phone/email, one directional rule, and a compact address—rather than interchangeable card UI.

## Original equity to preserve or outperform

- Full-bleed architectural imagery with visible material richness
- White geometric logo against image
- High-energy magenta accent
- Bold, emotionally persuasive uppercase headline
- Immediate phone visibility
- Portfolio, testimonial, and social-presence signals
- Distinctive vertical navigation/progress behavior

## Original weaknesses not to copy

- Overloaded hero controls and social icons
- Tiny secondary text over a busy image
- Staging/external navigation and dead portfolio routes
- Placeholder/inconsistent contact data
- Dated one-page slider behavior
- Unsupported or inaccessible interaction details

## Technical coverage

- `index.html`: desktop and mobile full-page renders
- `proposal.html`: desktop and mobile full-page renders
- Mobile menu opened and visually inspected
- Internal assets, console, failed requests, and horizontal overflow checked
- Result: all technical checks passed

## Evidence

- Production desktop: `screenshots/index-desktop-full.png`
- Production mobile: `screenshots/index-mobile-full.png`
- Mobile menu: `screenshots/index-mobile-menu.png`
- Proposal desktop: `screenshots/proposal-desktop-full.png`
- Proposal mobile: `screenshots/proposal-mobile-full.png`
- Mechanical results: `technical-results.json`
