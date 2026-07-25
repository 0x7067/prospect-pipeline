Build a complete evidence-bounded static website redesign for the qualified prospect below.

Build the static site in /opt/data/projects/curitiba-rebuilds/2026-07-19/hotel-estacao-express only. Never publish, contact the business, submit forms, or call external services.

MANDATORY FIRST STEP BEFORE WRITING OR MODIFYING ANY SITE CODE:
Invoke the locally provisioned Impeccable skill with `/impeccable craft`. Read PRODUCT.md and DESIGN.md, shape the UX, and write `.impeccable-craft-receipt.json` with schema=1, status=complete, command=craft, skill_commit=44c27a72af98394c32691ba79358811bff86bde6, a stable nonempty builder_id identifying this AFK run, and a truthful summary. If craft cannot complete, write a failure receipt and stop. Builders cannot self-approve any later review.

Use only evidence in prospect.json, PRODUCT.md, and BRAND_SOURCE.md for business-specific facts. Delete unsupported claims rather than hedging, guessing, or presenting placeholders. Required files: index.html, proposal.html, rationale.html, styles.css, script.js, README.md, SITE_REVIEW.md, SOURCE_MANIFEST.md. index.html must be production-realistic with no proposal/redesign/prototype/disclosure language and no link to proposal.html. proposal.html is the separate persuasive independent sales document. rationale.html must only redirect compatibly to proposal.html. If deliverable_tier is early_visual_direction, never mark it production-complete or ready for publication.

SPEED BUDGET: target 20 minutes. Make one coherent design/build pass, one desktop/mobile browser-validation pass, and at most one consolidated repair pass. Do not inspect Impeccable detector source code, repeatedly reopen unchanged pages, or chase one advisory at a time. Run the detector at most twice: once after the complete implementation and once after a single consolidated fix pass. If blocking findings remain after the second run, write a truthful failed build receipt listing them and stop; independent review or a bounded correction task will decide the next action.

RAISED STYLE BAR: This is not a generic category landing page. Before coding, commit to one prospect-specific compositional thesis and implement at least three distinct art-directed moments across the page. Use a deliberate display/body typographic pairing, a documented image-treatment rule, a restrained but intentional color evolution, and a mobile-native rhythm. Reject hero-plus-card-grid defaults, repeated generic cards, decorative gradients, glassmorphism, and familiar SaaS/agency patterns unless the evidence and thesis specifically justify them. Run the logo-removal, competitor-swap, squint, five-second, below-fold, and mobile-native tests; record observations in SITE_REVIEW.md. A beautiful but interchangeable build must fail honestly rather than be marked ready.

After public files are final, run `/opt/data/.venvs/curitiba/bin/python /opt/data/scripts/validate_curitiba_site.py /opt/data/projects/curitiba-rebuilds/2026-07-19/hotel-estacao-express`. This standardized command runs node syntax validation, the pinned detector, and the complete Playwright desktop/mobile matrix, and binds its receipt to the release build. A nonzero exit blocks promotion. If it passes, you may also run `/opt/data/scripts/capture_curitiba_comparison.mjs /opt/data/projects/curitiba-rebuilds/2026-07-19/hotel-estacao-express` for comparison evidence. Do not write approval, human-approval, or publication receipts. Finish only with a truthful ready or failed result.

QUALIFIED PROSPECT BRIEF:
{
  "business_name": "Hotel Estação Express",
  "official_url": "https://www.hotelestacaoexpress.com.br/",
  "run_date": "2026-07-19",
  "slug": "hotel-estacao-express",
  "category": "hospitality / central hotel and events",
  "problems": [
    "The active official homepage is structurally difficult to use: it exposes repeated 'FAÇA SUA RESERVA' calls beside carousel-like '1/8', '1/14', and '1/7' fragments without a clearly surfaced booking engine, room selection path, rates, or contact details in the extracted page content.",
    "The page devotes substantial space to generic Curitiba attraction descriptions while the commercially valuable hotel decisions—room categories, event capacity, amenities, location logistics, and reservation action—are comparatively hard to scan.",
    "The homepage presents event space capacity up to 300 people and a central location, but does not provide a clear event inquiry route or concise event-specification summary, leaving a meaningful B2B lead path underdeveloped.",
    "Visible content-quality and freshness friction includes awkward copy such as 'programação a cabo', 'Café da manhã é cortesia' without a strong booking context, and a page presentation dominated by repeated image/slider labels rather than clear accommodation proof."
  ],
  "rebuild_angle": "Rebuild the hotel as a practical Curitiba base with two clear revenue paths—stay and event—using location proof, room/amenity clarity, a direct reservation route, and a concise event brief request instead of a tourism-heavy scroll.",
  "opportunity_score": 7.5,
  "active_evidence": "On 2026-07-19, https://www.hotelestacaoexpress.com.br/ loaded as the official Hotel Estação Express site and described central Curitiba lodging, proximity to the Convention Center, UTFPR, Shopping Estação, and Rua XV de Novembro; breakfast, Wi-Fi, paid private parking, air-conditioned rooms, frigobar, work desk, private bathroom, and event salons for up to 300 people. OpenStreetMap/Nominatim matched the hotel to 780 Rua João Negrão, Centro, Curitiba.",
  "evidence_links": [
    "https://www.hotelestacaoexpress.com.br/ (official page observation: 2026-07-19)",
    "https://www.openstreetmap.org/?mlat=-25.4359912&mlon=-49.2641782#map=19/-25.4359912/-49.2641782"
  ],
  "preserved_strengths": [
    "The central Curitiba location and proximity cues to UTFPR, Shopping Estação, Convention Center, and Rua XV.",
    "The practical business-traveler and event-hosting proposition.",
    "The concrete room amenities and breakfast/Wi-Fi/parking information.",
    "The event capacity claim up to 300 people.",
    "The accessible, value-oriented hospitality positioning.",
    "The local Curitiba attraction context, used selectively rather than as the main conversion surface."
  ],
  "brand_source": {
    "logo_sources": [
      "https://www.hotelestacaoexpress.com.br/ (official header/identity observation, 2026-07-19)"
    ],
    "colors": [
      "The official page presents a hospitality-oriented light layout with image-led content and dark text; exact brand palette should be sampled from original captures before implementation."
    ],
    "typography": [
      "The official page uses a conventional hospitality web presentation; no prospect-specific typeface is asserted in the collected evidence."
    ],
    "personality_words": [
      "conforto",
      "bons serviços",
      "localização",
      "atendimento personalizado",
      "preços acessíveis",
      "praticidade"
    ],
    "strongest_public_language": [
      "Melhor Preço Garantido de Curitiba",
      "escolha ideal",
      "conforto, bons serviços e ótima localização",
      "ESPAÇO PERFEITO PARA EVENTOS",
      "FAÇA SUA RESERVA"
    ],
    "services": [
      "Hotel accommodation",
      "Breakfast",
      "High-speed Wi-Fi",
      "Paid private parking",
      "Event salons for up to 300 people",
      "Business-travel lodging"
    ],
    "locations": [
      "780 Rua João Negrão, Centro, Curitiba-PR, as matched by OpenStreetMap to the official hotel listing"
    ],
    "contacts": [
      "The active official homepage presents reservation CTAs; a direct telephone/email was not asserted because it was not exposed in the collected page evidence."
    ],
    "visual_assets": [
      "Official hotel room imagery visible on https://www.hotelestacaoexpress.com.br/",
      "Official event-space imagery visible on https://www.hotelestacaoexpress.com.br/",
      "Official Curitiba attraction imagery/context visible on https://www.hotelestacaoexpress.com.br/",
      "Official hospitality infrastructure presentation visible on https://www.hotelestacaoexpress.com.br/"
    ],
    "original_screenshots": {
      "desktop": "https://www.hotelestacaoexpress.com.br/ (original desktop inspection, 2026-07-19)",
      "mobile": "https://www.hotelestacaoexpress.com.br/ (original mobile inspection, 2026-07-19)"
    },
    "equity_to_preserve": [
      "Central location",
      "Value-oriented hospitality",
      "Business and event utility",
      "Concrete amenities",
      "Breakfast and Wi-Fi cues",
      "Curitiba access context"
    ],
    "weaknesses_not_to_copy": [
      "Carousel counter fragments",
      "Repeated reservation CTAs without a clear booking destination",
      "Tourism copy crowding out hotel decisions",
      "Underdeveloped event inquiry path",
      "Weak information hierarchy"
    ]
  },
  "concept_thesis": "Make every minute in Curitiba easier: a compact stay-and-event hub where location, room utility, and a fast reservation or event inquiry path do the selling before generic tourism content begins.",
  "deliverable_tier": "early_visual_direction"
}

