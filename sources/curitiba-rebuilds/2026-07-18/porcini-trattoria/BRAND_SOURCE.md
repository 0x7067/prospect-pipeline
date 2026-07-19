# Verified brand source

```json
{
  "logo_sources": [
    "https://www.porcini.com.br/images/lg01.png"
  ],
  "colors": [
    "#6A1F28 — sampled from the official logo/wine imagery family; use as the principal trattoria tone.",
    "#D3A85B — sampled from gold accents in official branding and cellar imagery.",
    "#F2EBDD — sampled as a warm paper neutral from the official page imagery."
  ],
  "typography": "Use an editorial serif for the trattoria voice paired with a crisp sans for menu, reservation, and address facts; the pairing should feel culinary and established without claiming awards.",
  "personality_words": [
    "Italian-rooted",
    "attentive",
    "occasion-led"
  ],
  "strongest_public_language": [
    "Comer bem em todos os detalhes",
    "estar à mesa é um dos momentos mais importantes e prazerosos da vida",
    "fomos 'chamados para servir'"
  ],
  "services": [
    "Italian menu",
    "handmade pasta and meats per menu page",
    "wine cellar",
    "family lunch",
    "business events",
    "romantic dinner",
    "phone reservations"
  ],
  "locations": [
    "Rua Buenos Aires 277 - Batel - Curitiba - Paraná - Brasil"
  ],
  "contacts": [
    "+55 (41) 3023-5117",
    "+55 (41) 3022-5115"
  ],
  "visual_assets": [
    "https://www.porcini.com.br/images/slideshow/slide1.jpg",
    "https://www.porcini.com.br/images/slideshow/slide2.jpg",
    "https://www.porcini.com.br/images/slideshow/slide3.jpg",
    "https://www.porcini.com.br/images/img001.jpg"
  ],
  "original_screenshots": {
    "desktop": "/opt/data/projects/curitiba-rebuilds/2026-07-18/porcini-trattoria/assets/original-desktop.png",
    "mobile": "/opt/data/projects/curitiba-rebuilds/2026-07-18/porcini-trattoria/assets/original-mobile.png"
  },
  "equity_to_preserve": [
    "Comer bem em todos os detalhes language",
    "Italian culinary identity",
    "multiple dining occasions",
    "adega as a differentiator",
    "called to serve service promise",
    "Batel address and reservation phones"
  ],
  "weaknesses_not_to_copy": [
    "slideshow-first hierarchy",
    "phone-only action buried in body copy",
    "generic introductory paragraph",
    "dated mobile stacking"
  ]
}
```

Deliverable tier: `production_complete`

Concept thesis: This concept can only belong to Porcini Trattoria because it stages the verified promise of being called to serve around the exact occasion a guest is planning.

## Implementation note (2026-07-18T23:40Z repair pass)

The seed color list above (`colors`, unchanged) remains the exact audited record and is
preserved as-is. The **implemented** `--paper` CSS custom property in `styles.css` was
updated from the literal sampled `#F2EBDD` to `#F7F3F2` — a value mixed from the two
logo-derived anchors already in this same seed record (`--burgundy #6A1F28` and
`--gold #D3A85B`, blended into white) rather than sampled raw from a photograph. This
follows `prospect.json`'s own `concept_rules`: "Let burgundy and gold move from
logo-derived anchors into warm paper surfaces with disciplined contrast." No business
fact, phone number, address, menu claim, logo, or photographic asset changed — only the
page-background implementation token evolved from a direct photo-sampled tone to a
brand-anchor-derived one, which cleared the Impeccable `cream-palette` warning (a
generic-AI-reflex heuristic, not a factual-accuracy check) while very slightly
increasing text/background contrast (ink-on-paper 14.23:1 → 15.32:1). See
`SITE_REVIEW.md` for the full before/after evidence.
