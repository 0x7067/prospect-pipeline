/impeccable craft

Build a complete evidence-bounded static website redesign for the qualified prospect below.

Build the static site in /opt/data/projects/curitiba-rebuilds/2026-07-17/anarco-restaurante only. Never publish, contact the business, submit forms, or call external services.

MANDATORY FIRST STEP BEFORE WRITING OR MODIFYING ANY SITE CODE:
Invoke the locally provisioned Impeccable skill with `/impeccable craft`. Read PRODUCT.md and DESIGN.md, shape the UX, and write `.impeccable-craft-receipt.json` with schema=1, status=complete, command=craft, skill_commit=44c27a72af98394c32691ba79358811bff86bde6, a stable nonempty builder_id identifying this AFK run, and a truthful summary. If craft cannot complete, write a failure receipt and stop. Builders cannot self-approve any later review.

Use only evidence in prospect.json, PRODUCT.md, and BRAND_SOURCE.md for business-specific facts. Delete unsupported claims rather than hedging, guessing, or presenting placeholders. Required files: index.html, proposal.html, rationale.html, styles.css, script.js, README.md, SITE_REVIEW.md, SOURCE_MANIFEST.md. index.html must be production-realistic with no proposal/redesign/prototype/disclosure language and no link to proposal.html. proposal.html is the separate persuasive independent sales document. rationale.html must only redirect compatibly to proposal.html. If deliverable_tier is early_visual_direction, never mark it production-complete or ready for publication.

SPEED BUDGET: target 20 minutes. Make one coherent design/build pass, one desktop/mobile browser-validation pass, and at most one consolidated repair pass. Do not inspect Impeccable detector source code, repeatedly reopen unchanged pages, or chase one advisory at a time. Run the detector at most twice: once after the complete implementation and once after a single consolidated fix pass. If blocking findings remain after the second run, write a truthful failed build receipt listing them and stop; independent review or a bounded correction task will decide the next action.

RAISED STYLE BAR: This is not a generic category landing page. Before coding, commit to one prospect-specific compositional thesis and implement at least three distinct art-directed moments across the page. Use a deliberate display/body typographic pairing, a documented image-treatment rule, a restrained but intentional color evolution, and a mobile-native rhythm. Reject hero-plus-card-grid defaults, repeated generic cards, decorative gradients, glassmorphism, and familiar SaaS/agency patterns unless the evidence and thesis specifically justify them. Run the logo-removal, competitor-swap, squint, five-second, below-fold, and mobile-native tests; record observations in SITE_REVIEW.md. A beautiful but interchangeable build must fail honestly rather than be marked ready.

After public files are final, run `/opt/data/.venvs/curitiba/bin/python /opt/data/scripts/validate_curitiba_site.py /opt/data/projects/curitiba-rebuilds/2026-07-17/anarco-restaurante`. This standardized command runs node syntax validation, the pinned detector, and the complete Playwright desktop/mobile matrix, and binds its receipt to the release build. A nonzero exit blocks promotion. If it passes, you may also run `/opt/data/scripts/capture_curitiba_comparison.mjs /opt/data/projects/curitiba-rebuilds/2026-07-17/anarco-restaurante` for comparison evidence. Do not write approval, human-approval, or publication receipts. Finish only with a truthful ready or failed result.

QUALIFIED PROSPECT BRIEF:
{
  "business_name": "Anarco Restaurante",
  "slug": "anarco-restaurante",
  "official_url": "https://anarco.com.br/",
  "run_date": "2026-07-17",
  "category": "restaurante italiano e frutos do mar",
  "opportunity_score": 9.1,
  "confidence": "alta",
  "active_evidence": "A página oficial respondeu HTTP 200 em 2026-07-17, exibe duas unidades em Curitiba, telefones, horários, cardápio e link de reserva por WhatsApp.",
  "problems": [
    "A cópia publicada na home contém uma injeção editorial de links e texto de cassino dentro da história do restaurante, um risco direto de confiança e SEO.",
    "O HTML inicial observado tem aproximadamente 668 KB antes de imagens e scripts, pesado para uma página de restaurante.",
    "A navegação é uma página longa que mistura história, avaliações, cardápio extenso e duas unidades sem uma hierarquia clara de reserva por localização.",
    "O logotipo aparece como imagem grande com proporção de fotografia, e a home usa tipografia sistêmica misturada com Open Sans/Playfair sem sistema consistente.",
    "A página depende de links âncora e de um menu muito longo; a ação de reserva não é contextualizada por unidade."
  ],
  "rebuild_angle": "Uma mesa editorial de cozinha italiana: história de família, pratos autorais e escolha imediata entre Mercado Municipal e Batel, com cardápio legível e reserva por unidade.",
  "roi_mechanism": "Reservas de almoço/jantar e grupos têm valor comercial direto; remover spam, reduzir fricção entre unidades e tornar cardápio/reserva escaneáveis pode recuperar visitas que hoje abandonam ou desconfiam da página.",
  "concept_thesis": "Este conceito só pode pertencer ao Anarco porque transforma a herança Artusi/Colônia Cecília, o cardápio de massas e frutos do mar e as duas casas em uma narrativa de mesa compartilhada, em vez de uma vitrine genérica de restaurante.",
  "concept_rules": [
    "Composição: usar uma faixa editorial de pratos e uma bifurcação persistente Mercado Municipal/Batel antes do cardápio.",
    "Tipografia: manter Playfair Display apenas para nomes de pratos e história, com Open Sans para leitura e reservas.",
    "Imagem: tratar fotos de pratos em cortes amplos e sem overlays que escondam textura ou cor.",
    "Cor: preservar bordô #5C0709, creme #FFF8E0 e verde oliva #566B3D; usar rosa #CC3366 somente em estados de ação herdados do site.",
    "Promessa: usar apenas linguagem publicada sobre tradição, sabor, qualidade e história familiar.",
    "Conversão: oferecer dois CTAs de reserva, cada um apontando para o WhatsApp oficial da respectiva unidade."
  ],
  "brand_source": {
    "logo_sources": [
      "https://anarco.com.br/wp-content/uploads/2022/10/logo-anarco.png",
      "https://anarco.com.br/"
    ],
    "colors": [
      "#5C0709 — fundo observado em elementos de marca",
      "#FFF8E0 — creme observado",
      "#566B3D — verde oliva observado",
      "#CC3366 — rosa observado em acentos"
    ],
    "typography": "O site observado usa Open Sans e Playfair Display junto de fallback sistêmico; manter a dupla Open Sans/Playfair com papéis mais disciplinados.",
    "personality_words": [
      "familiar",
      "italiana",
      "generosa"
    ],
    "strongest_public_language": [
      "Tradição e simpatia são ingredientes primordiais de nossa casa.",
      "O mais tradicional restaurante de comida Italiana da cidade de Curitiba.",
      "Fundado em 1991 por Ilsa Artusi Agottani.",
      "Venha experimentar as delícias da Anarco e fazer parte desta linda história de amor pela cozinha italiana."
    ],
    "services": [
      "cardápio de massas, risotos, carnes e frutos do mar",
      "bebidas e vinhos",
      "reservas por WhatsApp"
    ],
    "locations": [
      "Mercado Municipal — Av. Sete de Setembro, 1865, Box 16, Curitiba/PR",
      "Batel — Rua Mal. José Bernardino Bormann, 600, Curitiba/PR"
    ],
    "contacts": [
      "Mercado Municipal: (41) 3336-0049",
      "Batel: (41) 3013-5379",
      "https://wa.me/554133360049",
      "https://www.facebook.com/anarcorestaurante",
      "https://www.instagram.com/anarcorestaurante/"
    ],
    "visual_assets": [
      {
        "role": "logo",
        "url": "https://anarco.com.br/wp-content/uploads/2022/10/logo-anarco.png",
        "provenance": "official site image observed 2026-07-17"
      },
      {
        "role": "hero/menu",
        "url": "https://anarco.com.br/wp-content/uploads/2023/03/Restaurante-Anarco-Mercado-Municipal-Curtiba_Y.png",
        "provenance": "official site image, alt='menu anarco restaurante curitiba'"
      },
      {
        "role": "dish",
        "url": "https://anarco.com.br/wp-content/uploads/2023/03/anarco-carpaccio-de-haddock.jpg",
        "provenance": "official site image, alt='Carpaccio de haddock Anarco'"
      },
      {
        "role": "dish",
        "url": "https://anarco.com.br/wp-content/uploads/2023/03/anarco-risoto-de-bacalhau.jpg",
        "provenance": "official site image, alt='Risoto de Bacalhau Anarco'"
      },
      {
        "role": "dish",
        "url": "https://anarco.com.br/wp-content/uploads/2023/03/anarco-casquinha-de-siri-com-ovas-de-capelin.jpg",
        "provenance": "official site image, alt='Casquinha de siri com ovas de capelin anarco'"
      }
    ],
    "original_screenshots": {
      "desktop": "/opt/data/projects/curitiba-rebuilds/2026-07-17/anarco-restaurante/evidence/original/desktop-1440x900.png",
      "mobile": "/opt/data/projects/curitiba-rebuilds/2026-07-17/anarco-restaurante/evidence/original/mobile-390x844.png"
    },
    "equity_to_preserve": [
      "fundação em 1991 e história de Ilsa Artusi Agottani",
      "linguagem de tradição e simpatia",
      "pratos e ingredientes publicados",
      "duas localizações reais",
      "fotografia de pratos e avaliações publicadas"
    ],
    "weaknesses_not_to_copy": [
      "texto de cassino injetado",
      "página excessivamente longa",
      "mistura tipográfica sem hierarquia",
      "reserva sem escolha contextual de unidade",
      "logotipo tratado como imagem hero"
    ]
  },
  "evidence_links": [
    "https://anarco.com.br/",
    "https://anarco.com.br/historia/",
    "https://anarco.com.br/contato/",
    "https://anarco.com.br/wp-content/uploads/2022/10/logo-anarco.png",
    "https://wa.me/554133360049"
  ],
  "source_audit": "/opt/data/site-inspect/anarco.json",
  "deliverable_tier": "production_complete"
}

