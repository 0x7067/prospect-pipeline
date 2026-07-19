Build a complete evidence-bounded static website redesign for the qualified prospect below.

Build the static site in /opt/data/projects/curitiba-rebuilds/2026-07-19/cuidar-curitiba only. Never publish, contact the business, submit forms, or call external services.

MANDATORY FIRST STEP BEFORE WRITING OR MODIFYING ANY SITE CODE:
Invoke the locally provisioned Impeccable skill with `/impeccable craft`. Read PRODUCT.md and DESIGN.md, shape the UX, and write `.impeccable-craft-receipt.json` with schema=1, status=complete, command=craft, skill_commit=44c27a72af98394c32691ba79358811bff86bde6, a stable nonempty builder_id identifying this AFK run, and a truthful summary. If craft cannot complete, write a failure receipt and stop. Builders cannot self-approve any later review.

Use only evidence in prospect.json, PRODUCT.md, and BRAND_SOURCE.md for business-specific facts. Delete unsupported claims rather than hedging, guessing, or presenting placeholders. Required files: index.html, proposal.html, rationale.html, styles.css, script.js, README.md, SITE_REVIEW.md, SOURCE_MANIFEST.md. index.html must be production-realistic with no proposal/redesign/prototype/disclosure language and no link to proposal.html. proposal.html is the separate persuasive independent sales document. rationale.html must only redirect compatibly to proposal.html. If deliverable_tier is early_visual_direction, never mark it production-complete or ready for publication.

SPEED BUDGET: target 20 minutes. Make one coherent design/build pass, one desktop/mobile browser-validation pass, and at most one consolidated repair pass. Do not inspect Impeccable detector source code, repeatedly reopen unchanged pages, or chase one advisory at a time. Run the detector at most twice: once after the complete implementation and once after a single consolidated fix pass. If blocking findings remain after the second run, write a truthful failed build receipt listing them and stop; independent review or a bounded correction task will decide the next action.

RAISED STYLE BAR: This is not a generic category landing page. Before coding, commit to one prospect-specific compositional thesis and implement at least three distinct art-directed moments across the page. Use a deliberate display/body typographic pairing, a documented image-treatment rule, a restrained but intentional color evolution, and a mobile-native rhythm. Reject hero-plus-card-grid defaults, repeated generic cards, decorative gradients, glassmorphism, and familiar SaaS/agency patterns unless the evidence and thesis specifically justify them. Run the logo-removal, competitor-swap, squint, five-second, below-fold, and mobile-native tests; record observations in SITE_REVIEW.md. A beautiful but interchangeable build must fail honestly rather than be marked ready.

After public files are final, run `/opt/data/.venvs/curitiba/bin/python /opt/data/scripts/validate_curitiba_site.py /opt/data/projects/curitiba-rebuilds/2026-07-19/cuidar-curitiba`. This standardized command runs node syntax validation, the pinned detector, and the complete Playwright desktop/mobile matrix, and binds its receipt to the release build. A nonzero exit blocks promotion. If it passes, you may also run `/opt/data/scripts/capture_curitiba_comparison.mjs /opt/data/projects/curitiba-rebuilds/2026-07-19/cuidar-curitiba` for comparison evidence. Do not write approval, human-approval, or publication receipts. Finish only with a truthful ready or failed result.

QUALIFIED PROSPECT BRIEF:
{
  "business_name": "Cuidar Curitiba",
  "official_url": "https://cuidar.curitiba.br/",
  "run_date": "2026-07-19",
  "slug": "cuidar-curitiba",
  "category": "medical coworking / fiscal address service",
  "problems": [
    "The active landing page contains conversion-damaging content errors in high-visibility sections, including the literal '+ 0' professionals counter, the misspelled 'Endereo Fiscal', repeated 'Beneficíos' headings, and a duplicated/unfinished benefits structure.",
    "The page mixes two distinct offers—hour/day/month medical coworking and fiscal domicile/CNPJ support—across a very long scroll, so a physician seeking rooms and a professional seeking a fiscal address do not get clean, separate decision paths.",
    "The site makes strong operational and trust claims but presents them with inconsistent proof formatting: 'Avaliações (4,9)', '+ 1300' and 'Mais de 200 profissionais' appear near one another without a clear metric label hierarchy, while the testimonial embed is visually dense and difficult to scan.",
    "The active page relies on a large Elementor/WordPress asset stack and repeated sections, creating a practical opportunity to simplify the mobile-first inquiry path around the stated WhatsApp, booking, pricing, location, and compliance information."
  ],
  "rebuild_angle": "Split the offer into two high-intent routes—consultório pronto and endereço fiscal—then use a compact proof-led page to move health professionals from eligibility and legal confidence to a WhatsApp plan request or booking action.",
  "opportunity_score": 8.0,
  "active_evidence": "On 2026-07-19, the official HTTPS domain loaded as Cuidar Curitiba and described medical coworking and fiscal-address services in Curitiba, including furnished/climatized rooms, online scheduling, stated weekday/Saturday hours, plans from R$197 per month, packages from R$50 per hour, WhatsApp contact, and a published address at Av. Presidente Affonso Camargo, 2583, Jardim Botânico/Curitiba. The page states that it serves health professionals and displays the active offer, pricing, FAQs, reviews, and legal/compliance positioning. OpenStreetMap/Nominatim matched the published address to Curitiba coordinates.",
  "evidence_links": [
    "https://cuidar.curitiba.br/",
    "https://cuidar.curitiba.br/ (official page observation: 2026-07-19)",
    "https://cuidar.curitiba.br/wp-content/uploads/2025/10/Identidade-Visual-Cuidar-Curitiba-1.png",
    "https://cuidar.curitiba.br/wp-content/uploads/2025/10/Identidade-Visual-Cuidar-Curitiba-3.png",
    "https://www.openstreetmap.org/?mlat=-25.4410325&mlon=-49.2361555#map=19/-25.4410325/-49.2361555"
  ],
  "preserved_strengths": [
    "The direct, specific offer for doctors and health professionals.",
    "The two commercially meaningful products: furnished medical rooms and fiscal address.",
    "The explicit price anchors from the official page.",
    "The Jardim Botânico location cue.",
    "The WhatsApp-first contact intent and online-reservation promise.",
    "The official visual identity assets and professional-health category cues, without copying the current layout or imagery."
  ],
  "brand_source": {
    "logo_sources": [
      "https://cuidar.curitiba.br/wp-content/uploads/2025/10/Identidade-Visual-Cuidar-Curitiba-1.png",
      "https://cuidar.curitiba.br/wp-content/uploads/2025/10/Identidade-Visual-Cuidar-Curitiba-3.png"
    ],
    "colors": [
      "Official identity image assets are supplied by the business at the two linked URLs; use those originals only as reference and sample the exact palette from local captures before production."
    ],
    "typography": [
      "The page is built with WordPress/Elementor and exposes no reliable prospect-specific type declaration in the collected evidence; choose a distinctive accessible pairing while preserving the supplied identity assets as reference."
    ],
    "personality_words": [
      "conforto",
      "segurança",
      "credibilidade",
      "praticidade",
      "legalidade",
      "atendimento humanizado"
    ],
    "strongest_public_language": [
      "Coworking médico e endereço fiscal prontos para você atuar em Curitiba",
      "Seu consultório pronto para atender em Curitiba",
      "A partir de R$ 197 por mês",
      "Atendimento Imediato via WhatsApp"
    ],
    "services": [
      "Medical coworking rooms",
      "Fiscal domicile/address for health professionals",
      "Online room reservations",
      "Reception",
      "Packages by hour/day/month"
    ],
    "locations": [
      "Av. Presidente Affonso Camargo, 2583 - casa 01 - Jardim Botânico, Curitiba - PR, 80050-370",
      "In front of Jardim Botânico, as stated on the official page"
    ],
    "contacts": [
      "(41) 98782-1228",
      "(41) 3598-2870",
      "comercial@cuidar.curitiba.br"
    ],
    "visual_assets": [
      "https://cuidar.curitiba.br/wp-content/uploads/2025/10/Identidade-Visual-Cuidar-Curitiba-1.png",
      "https://cuidar.curitiba.br/wp-content/uploads/2025/10/Identidade-Visual-Cuidar-Curitiba-3.png",
      "https://cuidar.curitiba.br/wp-content/uploads/2025/10/medico-1-1-553x1024.png",
      "https://cuidar.curitiba.br/wp-content/uploads/2025/10/2.-foto-764x1024.jpg"
    ],
    "original_screenshots": {
      "desktop": "https://cuidar.curitiba.br/ (original desktop inspection, 2026-07-19)",
      "mobile": "https://cuidar.curitiba.br/ (original mobile inspection required before implementation)"
    },
    "equity_to_preserve": [
      "Health-professional specialization",
      "Two-offer commercial model",
      "Price transparency",
      "Jardim Botânico location",
      "WhatsApp and booking convenience",
      "Compliance-oriented trust cues"
    ],
    "weaknesses_not_to_copy": [
      "'+ 0' counter",
      "Misspelled 'Endereo Fiscal'",
      "Repeated benefits headings",
      "Blended offer architecture",
      "Dense testimonial and metrics treatment",
      "Elementor-heavy long-scroll repetition"
    ]
  },
  "concept_thesis": "Turn Cuidar Curitiba into a two-door practice hub: one confident route to book a furnished room and one precise route to secure a compliant fiscal address, with the Jardim Botânico location and transparent entry prices acting as the trust bridge between them.",
  "deliverable_tier": "early_visual_direction"
}

