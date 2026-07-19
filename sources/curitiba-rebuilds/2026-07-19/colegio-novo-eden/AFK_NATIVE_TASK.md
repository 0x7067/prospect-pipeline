/impeccable craft

Build a complete evidence-bounded static website redesign for the qualified prospect below.

Build the static site in /opt/data/projects/curitiba-rebuilds/2026-07-19/colegio-novo-eden only. Never publish, contact the business, submit forms, or call external services.

MANDATORY FIRST STEP BEFORE WRITING OR MODIFYING ANY SITE CODE:
Invoke the locally provisioned Impeccable skill with `/impeccable craft`. Read PRODUCT.md and DESIGN.md, shape the UX, and write `.impeccable-craft-receipt.json` with schema=1, status=complete, command=craft, skill_commit=44c27a72af98394c32691ba79358811bff86bde6, a stable nonempty builder_id identifying this AFK run, and a truthful summary. If craft cannot complete, write a failure receipt and stop. Builders cannot self-approve any later review.

Use only evidence in prospect.json, PRODUCT.md, and BRAND_SOURCE.md for business-specific facts. Delete unsupported claims rather than hedging, guessing, or presenting placeholders. Required files: index.html, proposal.html, rationale.html, styles.css, script.js, README.md, SITE_REVIEW.md, SOURCE_MANIFEST.md. index.html must be production-realistic with no proposal/redesign/prototype/disclosure language and no link to proposal.html. proposal.html is the separate persuasive independent sales document. rationale.html must only redirect compatibly to proposal.html. If deliverable_tier is early_visual_direction, never mark it production-complete or ready for publication.

SPEED BUDGET: target 20 minutes. Make one coherent design/build pass, one desktop/mobile browser-validation pass, and at most one consolidated repair pass. Do not inspect Impeccable detector source code, repeatedly reopen unchanged pages, or chase one advisory at a time. Run the detector at most twice: once after the complete implementation and once after a single consolidated fix pass. If blocking findings remain after the second run, write a truthful failed build receipt listing them and stop; independent review or a bounded correction task will decide the next action.

RAISED STYLE BAR: This is not a generic category landing page. Before coding, commit to one prospect-specific compositional thesis and implement at least three distinct art-directed moments across the page. Use a deliberate display/body typographic pairing, a documented image-treatment rule, a restrained but intentional color evolution, and a mobile-native rhythm. Reject hero-plus-card-grid defaults, repeated generic cards, decorative gradients, glassmorphism, and familiar SaaS/agency patterns unless the evidence and thesis specifically justify them. Run the logo-removal, competitor-swap, squint, five-second, below-fold, and mobile-native tests; record observations in SITE_REVIEW.md. A beautiful but interchangeable build must fail honestly rather than be marked ready.

After public files are final, run `/opt/data/.venvs/curitiba/bin/python /opt/data/scripts/validate_curitiba_site.py /opt/data/projects/curitiba-rebuilds/2026-07-19/colegio-novo-eden`. This standardized command runs node syntax validation, the pinned detector, and the complete Playwright desktop/mobile matrix, and binds its receipt to the release build. A nonzero exit blocks promotion. If it passes, you may also run `/opt/data/scripts/capture_curitiba_comparison.mjs /opt/data/projects/curitiba-rebuilds/2026-07-19/colegio-novo-eden` for comparison evidence. Do not write approval, human-approval, or publication receipts. Finish only with a truthful ready or failed result.

QUALIFIED PROSPECT BRIEF:
{
  "business_name": "Colégio Novo Éden",
  "official_url": "https://novoeden.com.br/",
  "run_date": "2026-07-19",
  "slug": "colegio-novo-eden",
  "category": "private school",
  "problems": [
    "The official homepage presents a very compressed information architecture: school positioning, three education levels, partnerships, structure, and visit CTA are present, but the page does not expose the practical admissions journey, visit scheduling details, or clear next steps beyond 'Agende uma visita' (observed 2026-07-19 at https://novoeden.com.br/).",
    "The homepage relies on generic 'Saiba mais' labels for Ensino Infantil, Fundamental, and Médio without visible program-specific detail in the extracted page (observed 2026-07-19 at https://novoeden.com.br/), making it harder for families to compare the relevant stage before contacting the school.",
    "The homepage lacks a visible H1 in the fetched HTML while using a slogan-led opening ('EDUCANDO PARA A VIDA COM') and the page title 'Colégio Novo Éden' (observed 2026-07-19), a structural weakness for page hierarchy and search clarity.",
    "The active contact page contains the phone, opening hours, and address, but those high-intent details are not surfaced on the homepage alongside the visit CTA (observed 2026-07-19 at https://novoeden.com.br/fale-conosco/), adding an avoidable click for prospective families."
  ],
  "rebuild_angle": "Build an admissions-first school story that makes the education journey legible by age/stage, brings visit logistics into the first screen, and uses the school's long-running life-preparation promise as the emotional throughline.",
  "opportunity_score": 7,
  "active_evidence": "The official domain returned HTTP 200 and the live homepage named Colégio Novo Éden, documented education from Infantil through Ensino Médio, a Curitiba address, and an invitation to schedule a visit when checked 2026-07-19. The official contact page lists weekday hours 07:20–19:00 and phone (41) 3289-9436.",
  "evidence_links": [
    "https://novoeden.com.br/",
    "https://novoeden.com.br/fale-conosco/",
    "https://linkedin.com/company/colegio-novo-eden"
  ],
  "preserved_strengths": [
    "The established origin story: the homepage says the school began in 1990.",
    "The clear breadth from Ensino Infantil through Ensino Médio.",
    "The values of quality, safety, creativity, autonomy, academic formation, and love of life stated on the official homepage.",
    "The direct 'Agende uma visita' conversion intent and Curitiba neighborhood/address context."
  ],
  "brand_source": {
    "logo_sources": [
      "https://novoeden.com.br/"
    ],
    "colors": [
      "Official page CSS exposes a blue-forward link palette including #0170B9 and #005BE2, plus green accents; verify against the rendered logo/hero before production use."
    ],
    "typography": [
      "The official page uses a bold slogan-led hierarchy and compact education-level labels; exact type family was not asserted from the extracted page and must be re-selected during craft."
    ],
    "personality_words": [
      "quality",
      "safety",
      "creative",
      "autonomy",
      "academic",
      "life-oriented"
    ],
    "strongest_public_language": [
      "Educando para a vida",
      "Uma escola, muitos sonhos realizados!",
      "qualidade e segurança",
      "criatividade e autonomia",
      "Agende uma visita!"
    ],
    "services": [
      "Ensino Infantil",
      "Ensino Fundamental I e II",
      "Ensino Médio",
      "school visit scheduling"
    ],
    "locations": [
      "Rua Mandirituba, 1327, Sítio Cercado, Curitiba – PR, CEP 81925-540"
    ],
    "contacts": [
      "(41) 3289-9436",
      "contato@novoeden.com.br",
      "https://novoeden.com.br/fale-conosco/"
    ],
    "visual_assets": [
      "https://novoeden.com.br/",
      "https://novoeden.com.br/fale-conosco/",
      "https://novoeden.com.br/",
      "https://novoeden.com.br/"
    ],
    "original_screenshots": {
      "desktop": "https://novoeden.com.br/",
      "mobile": "https://novoeden.com.br/"
    },
    "equity_to_preserve": [
      "life-preparation promise",
      "blue/green educational cue direction",
      "stage-based education offer",
      "warm invitation to visit"
    ],
    "weaknesses_not_to_copy": [
      "generic Saiba mais labels",
      "compressed admissions information",
      "contact details hidden from homepage",
      "slogan opening without a clear semantic H1"
    ]
  },
  "concept_thesis": "Make the school journey the visual spine: a welcoming, stage-by-stage path from early learning to high school that turns 'educando para a vida' into a practical visit decision for Curitiba families.",
  "deliverable_tier": "early_visual_direction"
}

