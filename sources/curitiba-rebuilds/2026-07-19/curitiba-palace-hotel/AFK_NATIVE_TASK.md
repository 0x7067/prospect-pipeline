Build a complete evidence-bounded static website redesign for the qualified prospect below.

Build the static site in /opt/data/projects/curitiba-rebuilds/2026-07-19/curitiba-palace-hotel only. Never publish, contact the business, submit forms, or call external services.

MANDATORY FIRST STEP BEFORE WRITING OR MODIFYING ANY SITE CODE:
Invoke the locally provisioned Impeccable skill with `/impeccable craft`. Read PRODUCT.md and DESIGN.md, shape the UX, and write `.impeccable-craft-receipt.json` with schema=1, status=complete, command=craft, skill_commit=44c27a72af98394c32691ba79358811bff86bde6, a stable nonempty builder_id identifying this AFK run, and a truthful summary. If craft cannot complete, write a failure receipt and stop. Builders cannot self-approve any later review.

Use only evidence in prospect.json, PRODUCT.md, and BRAND_SOURCE.md for business-specific facts. Delete unsupported claims rather than hedging, guessing, or presenting placeholders. Required files: index.html, proposal.html, rationale.html, styles.css, script.js, README.md, SITE_REVIEW.md, SOURCE_MANIFEST.md. index.html must be production-realistic with no proposal/redesign/prototype/disclosure language and no link to proposal.html. proposal.html is the separate persuasive independent sales document. rationale.html must only redirect compatibly to proposal.html. If deliverable_tier is early_visual_direction, never mark it production-complete or ready for publication.

SPEED BUDGET: target 20 minutes. Make one coherent design/build pass, one desktop/mobile browser-validation pass, and at most one consolidated repair pass. Do not inspect Impeccable detector source code, repeatedly reopen unchanged pages, or chase one advisory at a time. Run the detector at most twice: once after the complete implementation and once after a single consolidated fix pass. If blocking findings remain after the second run, write a truthful failed build receipt listing them and stop; independent review or a bounded correction task will decide the next action.

RAISED STYLE BAR: This is not a generic category landing page. Before coding, commit to one prospect-specific compositional thesis and implement at least three distinct art-directed moments across the page. Use a deliberate display/body typographic pairing, a documented image-treatment rule, a restrained but intentional color evolution, and a mobile-native rhythm. Reject hero-plus-card-grid defaults, repeated generic cards, decorative gradients, glassmorphism, and familiar SaaS/agency patterns unless the evidence and thesis specifically justify them. Run the logo-removal, competitor-swap, squint, five-second, below-fold, and mobile-native tests; record observations in SITE_REVIEW.md. A beautiful but interchangeable build must fail honestly rather than be marked ready.

After public files are final, run `/opt/data/.venvs/curitiba/bin/python /opt/data/scripts/validate_curitiba_site.py /opt/data/projects/curitiba-rebuilds/2026-07-19/curitiba-palace-hotel`. This standardized command runs node syntax validation, the pinned detector, and the complete Playwright desktop/mobile matrix, and binds its receipt to the release build. A nonzero exit blocks promotion. If it passes, you may also run `/opt/data/scripts/capture_curitiba_comparison.mjs /opt/data/projects/curitiba-rebuilds/2026-07-19/curitiba-palace-hotel` for comparison evidence. Do not write approval, human-approval, or publication receipts. Finish only with a truthful ready or failed result.

QUALIFIED PROSPECT BRIEF:
{
  "business_name": "Curitiba Palace Hotel",
  "official_url": "https://www.curitibapalacehotel.com.br/",
  "run_date": "2026-07-19",
  "slug": "curitiba-palace-hotel",
  "category": "hotel and hospitality",
  "problems": [
    "The official homepage contains a very large stream of social-style destination and promotional posts after the core hotel content, including repeated hashtag-heavy blocks about Curitiba attractions, breakfast, rooms, and contact (observed 2026-07-19 at https://www.curitibapalacehotel.com.br/), diluting the reservation path.",
    "The homepage mixes core hotel information with long editorial copy about attractions such as Ópera de Arame, Museu Oscar Niemeyer, and Curitiba travel topics before returning to conversion content (observed 2026-07-19), increasing scroll burden for a visitor trying to compare rooms and reserve.",
    "The primary reservation message is present, but room-specific decision support is not surfaced in the extracted homepage content beyond general comfort language, while services and restaurant content compete for the same hierarchy (observed 2026-07-19 at https://www.curitibapalacehotel.com.br/).",
    "The site's visible content includes a large volume of repeated social captions and hashtag clusters rather than a concise, scannable hotel proposition (observed 2026-07-19), a likely trust and mobile-use issue for direct-booking visitors."
  ],
  "rebuild_angle": "Create a direct-booking hospitality homepage organized around stay decisions—room confidence, central Curitiba context, breakfast, amenities, and reservation—while preserving the hotel's traditional elegance and warm service voice.",
  "opportunity_score": 7,
  "active_evidence": "The official domain returned HTTP 200 with the hotel title, reservation CTA, 30+ years in central Curitiba, amenities, breakfast, contact address, and phone in the live extracted page when checked 2026-07-19. The official contact search result confirms Rua Desembargador Ermelino de Leão, 45, Curitiba/PR and +55 41 3322-8081.",
  "evidence_links": [
    "https://www.curitibapalacehotel.com.br/",
    "https://www.curitibapalacehotel.com.br/contato",
    "https://guiaemcuritiba.com.br/centro/curitiba-palace-hotel"
  ],
  "preserved_strengths": [
    "The direct-booking promise of best rate, free cancellation window, and agile support.",
    "The documented central Curitiba location and more-than-30-years tradition cue.",
    "The traditional architecture plus contemporary comfort positioning.",
    "Breakfast, 24-hour reception, valet parking, Wi-Fi, restaurant, room service, and guest-review proof already exposed on the official site."
  ],
  "brand_source": {
    "logo_sources": [
      "https://www.curitibapalacehotel.com.br/"
    ],
    "colors": [
      "Official page extraction supports an elegant/traditional positioning but did not reliably expose a canonical color token; use a restrained hotel palette only after visual inspection of the official mark and photography."
    ],
    "typography": [
      "The official homepage uses uppercase editorial section headings and a traditional hospitality voice; exact type family was not asserted from extraction and must be re-selected during craft."
    ],
    "personality_words": [
      "elegance",
      "comfort",
      "tradition",
      "sympathy",
      "dedication",
      "central"
    ],
    "strongest_public_language": [
      "Elegância, conforto e tradição no coração de Curitiba",
      "Garantimos a melhor tarifa através do nosso site",
      "arquitetura tradicional, conforto e elegância contemporâneos",
      "sinta-se em casa"
    ],
    "services": [
      "hotel accommodation",
      "online reservation",
      "breakfast",
      "restaurant",
      "24-hour reception",
      "valet parking",
      "room service",
      "laundry"
    ],
    "locations": [
      "Rua Desembargador Ermelino de Leão, 45, Curitiba/PR"
    ],
    "contacts": [
      "+55 41 3322-8081",
      "https://www.curitibapalacehotel.com.br/contato"
    ],
    "visual_assets": [
      "https://www.curitibapalacehotel.com.br/",
      "https://www.curitibapalacehotel.com.br/contato",
      "https://www.curitibapalacehotel.com.br/",
      "https://www.curitibapalacehotel.com.br/"
    ],
    "original_screenshots": {
      "desktop": "https://www.curitibapalacehotel.com.br/",
      "mobile": "https://www.curitibapalacehotel.com.br/"
    },
    "equity_to_preserve": [
      "traditional-elegance cue",
      "central Curitiba positioning",
      "direct reservation value proposition",
      "breakfast and service hospitality"
    ],
    "weaknesses_not_to_copy": [
      "hashtag-heavy social stream",
      "long attraction/editorial digressions",
      "repeated promotional captions",
      "reservation path diluted by mixed hierarchy"
    ]
  },
  "concept_thesis": "Shape the hotel homepage like a considered arrival: a compact central-Curitiba welcome that moves from room confidence to breakfast and amenities, then lands on the direct reservation promise without the current social-feed sprawl.",
  "deliverable_tier": "early_visual_direction"
}

