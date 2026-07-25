/impeccable craft

Build a complete evidence-bounded static website redesign for the qualified prospect below.

Build the static site in /opt/data/projects/curitiba-rebuilds/2026-07-19/trevi-hotel only. Never publish, contact the business, submit forms, or call external services.

MANDATORY FIRST STEP BEFORE WRITING OR MODIFYING ANY SITE CODE:
Invoke the locally provisioned Impeccable skill with `/impeccable craft`. Read PRODUCT.md and DESIGN.md, shape the UX, and write `.impeccable-craft-receipt.json` with schema=1, status=complete, command=craft, skill_commit=44c27a72af98394c32691ba79358811bff86bde6, a stable nonempty builder_id identifying this AFK run, and a truthful summary. If craft cannot complete, write a failure receipt and stop. Builders cannot self-approve any later review.

Use only evidence in prospect.json, PRODUCT.md, and BRAND_SOURCE.md for business-specific facts. Delete unsupported claims rather than hedging, guessing, or presenting placeholders. Required files: index.html, proposal.html, rationale.html, styles.css, script.js, README.md, SITE_REVIEW.md, SOURCE_MANIFEST.md. index.html must be production-realistic with no proposal/redesign/prototype/disclosure language and no link to proposal.html. proposal.html is the separate persuasive independent sales document. rationale.html must only redirect compatibly to proposal.html. If deliverable_tier is early_visual_direction, never mark it production-complete or ready for publication.

SPEED BUDGET: target 20 minutes. Make one coherent design/build pass, one desktop/mobile browser-validation pass, and at most one consolidated repair pass. Do not inspect Impeccable detector source code, repeatedly reopen unchanged pages, or chase one advisory at a time. Run the detector at most twice: once after the complete implementation and once after a single consolidated fix pass. If blocking findings remain after the second run, write a truthful failed build receipt listing them and stop; independent review or a bounded correction task will decide the next action.

RAISED STYLE BAR: This is not a generic category landing page. Before coding, commit to one prospect-specific compositional thesis and implement at least three distinct art-directed moments across the page. Use a deliberate display/body typographic pairing, a documented image-treatment rule, a restrained but intentional color evolution, and a mobile-native rhythm. Reject hero-plus-card-grid defaults, repeated generic cards, decorative gradients, glassmorphism, and familiar SaaS/agency patterns unless the evidence and thesis specifically justify them. Run the logo-removal, competitor-swap, squint, five-second, below-fold, and mobile-native tests; record observations in SITE_REVIEW.md. A beautiful but interchangeable build must fail honestly rather than be marked ready.

After public files are final, run `/opt/data/.venvs/curitiba/bin/python /opt/data/scripts/validate_curitiba_site.py /opt/data/projects/curitiba-rebuilds/2026-07-19/trevi-hotel`. This standardized command runs node syntax validation, the pinned detector, and the complete Playwright desktop/mobile matrix, and binds its receipt to the release build. A nonzero exit blocks promotion. If it passes, you may also run `/opt/data/scripts/capture_curitiba_comparison.mjs /opt/data/projects/curitiba-rebuilds/2026-07-19/trevi-hotel` for comparison evidence. Do not write approval, human-approval, or publication receipts. Finish only with a truthful ready or failed result.

QUALIFIED PROSPECT BRIEF:
{
  "business_name": "Trevi Hotel & Business",
  "official_url": "https://trevihotel.com.br/",
  "run_date": "2026-07-19",
  "slug": "trevi-hotel",
  "category": "hotel and business hospitality",
  "problems": [
    "The live official homepage shows a large blank hero area with an empty level-1 heading before the reservation form, while the hotel proposition is not stated in the first visible heading (observed 2026-07-19 at https://trevihotel.com.br/).",
    "The homepage exposes the booking form and a 'Reserve já' button, but the core room content is represented only by the heading 'ACOMODAÇÕES' with no room categories or decision-support details in the live page structure (observed 2026-07-19 at https://trevihotel.com.br/).",
    "The official services page is indexed with the literal content 'teste serviços' under a page titled 'Serviços', a visible quality and trust defect for guests evaluating amenities (observed 2026-07-19 at https://trevihotel.com.br/servicos/).",
    "The official events page states that the hotel has two event rooms but provides no visible specifications in the extracted content beyond the introductory sentence, leaving a meaningful business-events lead path underdeveloped (observed 2026-07-19 at https://trevihotel.com.br/eventos/).",
    "The homepage footer exposes headings for address and directions, but the live accessibility structure contains no address text beneath them, forcing guests to seek location details elsewhere (observed 2026-07-19 at https://trevihotel.com.br/)."
  ],
  "rebuild_angle": "Turn the Trevi site into a confident stay-and-events decision path: lead with a clear central-Curitiba proposition, make room and amenity choices tangible, and give business-event inquiries a complete, credible route without the blank hero or test content.",
  "opportunity_score": 8,
  "active_evidence": "The official domain returned HTTP 200 and the title 'Reservas | Trevi Hotel & Business – SITE OFICIAL – Reservas | Trevi Hotel & Business – SITE OFICIAL' on 2026-07-19. The live site exposes online reservation controls, WhatsApp, phone (41) 3224-0111, and links for apartments, events, contact, and guest information. Official guest information states the hotel is in central Curitiba with 24-hour reception, Wi-Fi, breakfast, event room, business center, and other amenities; the official events page states there are two event rooms.",
  "evidence_links": [
    "https://trevihotel.com.br/",
    "https://trevihotel.com.br/eventos/",
    "https://trevihotel.com.br/informacoes-de-hospedagem/",
    "https://trevihotel.com.br/contato/",
    "https://trevihotel.com.br/servicos/"
  ],
  "preserved_strengths": [
    "The prominent online reservation control with date, guest, and 'Reserve já' interaction.",
    "The central-Curitiba business and tourist positioning documented in the official guest information.",
    "The Trevi Hotel & Business name and practical hospitality framing.",
    "The visible phone, WhatsApp, accommodation, events, and contact routes.",
    "The documented 24-hour reception, breakfast, Wi-Fi, business center, event room, and central location cues."
  ],
  "brand_source": {
    "logo_sources": [
      "https://trevihotel.com.br/"
    ],
    "colors": [
      "The official live site and logo are the required visual references; exact canonical color tokens were not asserted from text extraction and must be sampled from the original mark during craft rather than invented."
    ],
    "typography": [
      "The official site uses uppercase navigation and section labels with a conventional hospitality presentation; exact font family was not asserted and must be re-selected during craft."
    ],
    "personality_words": [
      "central",
      "practical",
      "business-ready",
      "welcoming",
      "convenient"
    ],
    "strongest_public_language": [
      "ESCOLHA O TREVI HOTEL & BUSINESS",
      "INFORMAÇÕES ESSENCIAIS PARA HÓSPEDES",
      "Reserve já",
      "informações úteis para você que vai se hospedar em Curitiba"
    ],
    "services": [
      "hotel accommodation",
      "online reservation",
      "breakfast",
      "Wi-Fi",
      "24-hour reception",
      "business center",
      "events",
      "contact via WhatsApp"
    ],
    "locations": [
      "Central Curitiba location is stated on the official guest-information page; the exact street address must be taken from the live contact/location module during craft and not fabricated."
    ],
    "contacts": [
      "(41) 3224-0111",
      "https://trevihotel.com.br/contato/",
      "https://trevihotel.com.br/"
    ],
    "visual_assets": [
      "https://trevihotel.com.br/",
      "https://trevihotel.com.br/apartamentos",
      "https://trevihotel.com.br/eventos/",
      "https://trevihotel.com.br/informacoes-de-hospedagem/"
    ],
    "original_screenshots": {
      "desktop": "https://trevihotel.com.br/",
      "mobile": "https://trevihotel.com.br/"
    },
    "equity_to_preserve": [
      "direct reservation interaction",
      "central Curitiba context",
      "hotel-and-business dual positioning",
      "practical guest information",
      "phone and WhatsApp contact access"
    ],
    "weaknesses_not_to_copy": [
      "blank hero and empty H1",
      "test content on services page",
      "room information absent from homepage",
      "underdeveloped event-room lead path",
      "footer location headings without visible address text"
    ]
  },
  "concept_thesis": "Design Trevi as the practical gateway to central Curitiba: a calm arrival sequence that makes the stay, the business event, and the next reservation action equally legible.",
  "deliverable_tier": "early_visual_direction"
}

