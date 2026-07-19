Build a complete evidence-bounded static website redesign for the qualified prospect below.

Build the static site in /opt/data/projects/curitiba-rebuilds/2026-07-19/geracao-de-saude only. Never publish, contact the business, submit forms, or call external services.

MANDATORY FIRST STEP BEFORE WRITING OR MODIFYING ANY SITE CODE:
Invoke the locally provisioned Impeccable skill with `/impeccable craft`. Read PRODUCT.md and DESIGN.md, shape the UX, and write `.impeccable-craft-receipt.json` with schema=1, status=complete, command=craft, skill_commit=44c27a72af98394c32691ba79358811bff86bde6, a stable nonempty builder_id identifying this AFK run, and a truthful summary. If craft cannot complete, write a failure receipt and stop. Builders cannot self-approve any later review.

Use only evidence in prospect.json, PRODUCT.md, and BRAND_SOURCE.md for business-specific facts. Delete unsupported claims rather than hedging, guessing, or presenting placeholders. Required files: index.html, proposal.html, rationale.html, styles.css, script.js, README.md, SITE_REVIEW.md, SOURCE_MANIFEST.md. index.html must be production-realistic with no proposal/redesign/prototype/disclosure language and no link to proposal.html. proposal.html is the separate persuasive independent sales document. rationale.html must only redirect compatibly to proposal.html. If deliverable_tier is early_visual_direction, never mark it production-complete or ready for publication.

SPEED BUDGET: target 20 minutes. Make one coherent design/build pass, one desktop/mobile browser-validation pass, and at most one consolidated repair pass. Do not inspect Impeccable detector source code, repeatedly reopen unchanged pages, or chase one advisory at a time. Run the detector at most twice: once after the complete implementation and once after a single consolidated fix pass. If blocking findings remain after the second run, write a truthful failed build receipt listing them and stop; independent review or a bounded correction task will decide the next action.

RAISED STYLE BAR: This is not a generic category landing page. Before coding, commit to one prospect-specific compositional thesis and implement at least three distinct art-directed moments across the page. Use a deliberate display/body typographic pairing, a documented image-treatment rule, a restrained but intentional color evolution, and a mobile-native rhythm. Reject hero-plus-card-grid defaults, repeated generic cards, decorative gradients, glassmorphism, and familiar SaaS/agency patterns unless the evidence and thesis specifically justify them. Run the logo-removal, competitor-swap, squint, five-second, below-fold, and mobile-native tests; record observations in SITE_REVIEW.md. A beautiful but interchangeable build must fail honestly rather than be marked ready.

After public files are final, run `/opt/data/.venvs/curitiba/bin/python /opt/data/scripts/validate_curitiba_site.py /opt/data/projects/curitiba-rebuilds/2026-07-19/geracao-de-saude`. This standardized command runs node syntax validation, the pinned detector, and the complete Playwright desktop/mobile matrix, and binds its receipt to the release build. A nonzero exit blocks promotion. If it passes, you may also run `/opt/data/scripts/capture_curitiba_comparison.mjs /opt/data/projects/curitiba-rebuilds/2026-07-19/geracao-de-saude` for comparison evidence. Do not write approval, human-approval, or publication receipts. Finish only with a truthful ready or failed result.

QUALIFIED PROSPECT BRIEF:
{
  "business_name": "Geração de Saúde",
  "official_url": "https://www.gscuidadoresdeidosos.com.br/",
  "run_date": "2026-07-19",
  "slug": "geracao-de-saude",
  "category": "elder-care and home-care services",
  "problems": [
    "The homepage repeats the same service headings twice in the rendered content, including 'Cuidador para residência', 'Reforço e terceirização de equipe', 'Cuidador para passeios', 'Cuidador para viagens', 'Plantões curtos e emergenciais', and 'Cuidador hospitalar' (observed 2026-07-19 at https://www.gscuidadoresdeidosos.com.br/), creating scan noise on a high-intent service page.",
    "The homepage displays counters as zero values for 'Anos Cuidando de Idosos', 'Número de Idosos Atendidos', 'Avaliações Positivas no Google', and 'Cuidadores em nossa Equipe' (observed 2026-07-19 at https://www.gscuidadoresdeidosos.com.br/), which weakens trust instead of turning the business's proof into usable reassurance.",
    "The service cards expose repeated headings and generic 'Leia Mais' calls rather than a clearly prioritized path from care situation to assessment request (observed 2026-07-19 at https://www.gscuidadoresdeidosos.com.br/), adding friction for families making an urgent care decision.",
    "The contact form asks for a long-form message and a response-preference selection while the primary evaluation CTA is not paired with a concise decision flow for residence, hospital, post-operative, or emergency coverage (observed 2026-07-19 at https://www.gscuidadoresdeidosos.com.br/)."
  ],
  "rebuild_angle": "Reframe the site as a calm care-navigation experience: lead with the family's immediate situation, route to the right care format, show verified service proof without zero counters, and make the free assessment the persistent next step.",
  "opportunity_score": 8,
  "active_evidence": "The official domain returned HTTP 301 to https://www.gscuidadoresdeidosos.com.br/ and the live homepage contained current service, contact, Curitiba address, and dated blog content when checked 2026-07-19. First-party contact page lists Curitiba at Rua Padre Anchieta, 2050, Sala 1506; homepage lists phone (41) 99812-0297 and a free assessment CTA.",
  "evidence_links": [
    "https://www.gscuidadoresdeidosos.com.br/",
    "https://www.gscuidadoresdeidosos.com.br/fale-conosco/",
    "https://www.gscuidadoresdeidosos.com.br/exercicios-para-idosos-em-casa-como-manter-a-mobilidade-com-seguranca/",
    "https://br.linkedin.com/company/cuidadores-de-idosos-geracao-de-saude"
  ],
  "preserved_strengths": [
    "The clear promise of humanized, personalized care for older adults and family peace of mind.",
    "The breadth of documented contexts: residence, hospital, travel, consultations, post-operative care, medication, meals, and cognitive/physical activities.",
    "The free assessment CTA, 24/7/emergency-oriented service language, testimonials, and visible Curitiba contact details.",
    "The warm, respectful care vocabulary and use of real caregiver/service imagery already present on the official site."
  ],
  "brand_source": {
    "logo_sources": [
      "https://www.gscuidadoresdeidosos.com.br/wp-content/uploads/2025/05/Logo-Geracao-de-Saude_sem-fundo-verde-scaled.png"
    ],
    "colors": [
      "Official CSS/site rendering includes deep green #23382B and #2D4337, warm gold #CE9F43, and light neutral #DCD7D1; preserve only after visual confirmation."
    ],
    "typography": [
      "Official homepage uses a large, friendly display hierarchy with compact uppercase section labels; exact font family was not asserted from the extracted page and must be re-selected during craft."
    ],
    "personality_words": [
      "humanized",
      "respectful",
      "safe",
      "personalized",
      "tranquilidade"
    ],
    "strongest_public_language": [
      "Mais tranquilidade para sua família",
      "cuidado especializado para idosos",
      "segurança, respeito e atenção personalizada",
      "agende a sua experiência de graça"
    ],
    "services": [
      "atendimento domiciliar",
      "cuidador hospitalar",
      "plantões curtos e emergenciais",
      "acompanhamento em exames e consultas",
      "pós-operatório",
      "alimentação e medicamentos"
    ],
    "locations": [
      "Rua Padre Anchieta, 2050, Sala 1506, Curitiba/PR",
      "Florianópolis/SC location is also listed on the official contact page; do not imply Curitiba-only coverage."
    ],
    "contacts": [
      "(41) 99812-0297",
      "https://www.gscuidadoresdeidosos.com.br/fale-conosco/"
    ],
    "visual_assets": [
      "https://www.gscuidadoresdeidosos.com.br/wp-content/uploads/2025/09/34f0e62f-1bc6-4e89-a711-65c1b83e764f-768x576.jpeg",
      "https://www.gscuidadoresdeidosos.com.br/wp-content/uploads/2025/06/Cuidador-para-residencia-01-200x300.jpg",
      "https://www.gscuidadoresdeidosos.com.br/wp-content/uploads/2025/06/Reforco-e-terceirizacao-de-equipe-01-200x300.jpg",
      "https://www.gscuidadoresdeidosos.com.br/wp-content/uploads/2025/06/Cuidador-para-passeios-01-200x300.jpg"
    ],
    "original_screenshots": {
      "desktop": "https://www.gscuidadoresdeidosos.com.br/",
      "mobile": "https://www.gscuidadoresdeidosos.com.br/"
    },
    "equity_to_preserve": [
      "green-and-warm-neutral care palette",
      "human-centered language",
      "caregiver photography",
      "family reassurance and free-assessment path"
    ],
    "weaknesses_not_to_copy": [
      "duplicated service headings",
      "zero-valued proof counters",
      "generic repeated card treatment",
      "long form-first contact friction"
    ]
  },
  "concept_thesis": "Turn the homepage into a quiet care navigator where a family's situation becomes the organizing structure, replacing repeated service cards and zero counters with human proof, clear coverage paths, and one confident assessment invitation.",
  "deliverable_tier": "production_complete"
}

