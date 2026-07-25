/impeccable craft

Build a complete evidence-bounded static website redesign for the qualified prospect below.

Build the static site in /opt/data/projects/curitiba-rebuilds/2026-07-19/arte-e-jardim only. Never publish, contact the business, submit forms, or call external services.

MANDATORY FIRST STEP BEFORE WRITING OR MODIFYING ANY SITE CODE:
Invoke the locally provisioned Impeccable skill with `/impeccable craft`. Read PRODUCT.md and DESIGN.md, shape the UX, and write `.impeccable-craft-receipt.json` with schema=1, status=complete, command=craft, skill_commit=44c27a72af98394c32691ba79358811bff86bde6, a stable nonempty builder_id identifying this AFK run, and a truthful summary. If craft cannot complete, write a failure receipt and stop. Builders cannot self-approve any later review.

Use only evidence in prospect.json, PRODUCT.md, and BRAND_SOURCE.md for business-specific facts. Delete unsupported claims rather than hedging, guessing, or presenting placeholders. Required files: index.html, proposal.html, rationale.html, styles.css, script.js, README.md, SITE_REVIEW.md, SOURCE_MANIFEST.md. index.html must be production-realistic with no proposal/redesign/prototype/disclosure language and no link to proposal.html. proposal.html is the separate persuasive independent sales document. rationale.html must only redirect compatibly to proposal.html. If deliverable_tier is early_visual_direction, never mark it production-complete or ready for publication.

SPEED BUDGET: target 20 minutes. Make one coherent design/build pass, one desktop/mobile browser-validation pass, and at most one consolidated repair pass. Do not inspect Impeccable detector source code, repeatedly reopen unchanged pages, or chase one advisory at a time. Run the detector at most twice: once after the complete implementation and once after a single consolidated fix pass. If blocking findings remain after the second run, write a truthful failed build receipt listing them and stop; independent review or a bounded correction task will decide the next action.

RAISED STYLE BAR: This is not a generic category landing page. Before coding, commit to one prospect-specific compositional thesis and implement at least three distinct art-directed moments across the page. Use a deliberate display/body typographic pairing, a documented image-treatment rule, a restrained but intentional color evolution, and a mobile-native rhythm. Reject hero-plus-card-grid defaults, repeated generic cards, decorative gradients, glassmorphism, and familiar SaaS/agency patterns unless the evidence and thesis specifically justify them. Run the logo-removal, competitor-swap, squint, five-second, below-fold, and mobile-native tests; record observations in SITE_REVIEW.md. A beautiful but interchangeable build must fail honestly rather than be marked ready.

After public files are final, run `/opt/data/.venvs/curitiba/bin/python /opt/data/scripts/validate_curitiba_site.py /opt/data/projects/curitiba-rebuilds/2026-07-19/arte-e-jardim`. This standardized command runs node syntax validation, the pinned detector, and the complete Playwright desktop/mobile matrix, and binds its receipt to the release build. A nonzero exit blocks promotion. If it passes, you may also run `/opt/data/scripts/capture_curitiba_comparison.mjs /opt/data/projects/curitiba-rebuilds/2026-07-19/arte-e-jardim` for comparison evidence. Do not write approval, human-approval, or publication receipts. Finish only with a truthful ready or failed result.

QUALIFIED PROSPECT BRIEF:
{
  "business_name": "Arte & Jardim",
  "official_url": "https://arteejardim.com.br/",
  "run_date": "2026-07-19",
  "slug": "arte-e-jardim",
  "category": "landscaping and garden maintenance",
  "problems": [
    "The live homepage leads with broad positioning and a four-item service list, but the visible homepage content does not show project examples or a structured portfolio preview despite a 'Conheça o nosso portfólio' prompt (observed 2026-07-19 at https://arteejardim.com.br/), weakening visual proof for a high-consideration landscaping purchase.",
    "The homepage includes a 'BLOG' section whose extracted live content contains only the heading 'Dicas, novidades e notícias' and no visible article content (observed 2026-07-19 at https://arteejardim.com.br/), creating an unfinished-looking section and avoidable scroll noise.",
    "The four service blocks are introduced with duplicated icon glyphs and short generic labels—creation, implementation, maintenance, and technical consulting—without a clear path for residential, commercial, or partner-project inquiries (observed 2026-07-19 at https://arteejardim.com.br/).",
    "The primary contact mechanism is an email form that asks visitors to send project files, while the homepage does not frame what information to provide or what happens after submission (observed 2026-07-19 at https://arteejardim.com.br/), leaving a valuable project lead without a guided brief."
  ],
  "rebuild_angle": "Turn the site into a portfolio-led project intake experience: use the company's long Curitiba history and four documented capabilities to guide visitors from inspiration to a qualified project submission, without losing the established personal founder story.",
  "opportunity_score": 8,
  "active_evidence": "The official domain returned HTTP 200 and the live homepage identified Arte & Jardim, stated 36 years of dedication, documented the founder João E. Wolfart and Curitiba origin story, listed project creation, project implementation, maintenance, and technical consulting, and provided three phone numbers plus the Boa Vista address on 2026-07-19.",
  "evidence_links": [
    "https://arteejardim.com.br/",
    "https://arteejardim.com.br/portfolio/",
    "https://arteejardim.com.br/sobre/",
    "https://arteejardim.com.br/contato/",
    "https://arteejardim.com.br/criacao-de-projetos/"
  ],
  "preserved_strengths": [
    "The founder-led story of João E. Wolfart building the business in Curitiba.",
    "The 36-year market-history cue and emphasis on individual client needs.",
    "The complete service scope from design through implementation, maintenance, and technical support.",
    "The project-file submission intent, direct phone contacts, and Boa Vista location."
  ],
  "brand_source": {
    "logo_sources": [
      "https://arteejardim.com.br/"
    ],
    "colors": [
      "The official live site is clearly nature-led, but exact canonical color tokens were not reliably exposed in extracted content; use a restrained botanical palette only after inspecting the original logo and page captures."
    ],
    "typography": [
      "The official site uses uppercase section labels, a large founder/story hierarchy, and compact service descriptions; exact type family is not asserted and must be re-selected during craft."
    ],
    "personality_words": [
      "dedication",
      "intelligent",
      "harmonious",
      "individual",
      "technical",
      "experienced"
    ],
    "strongest_public_language": [
      "36 anos de dedicação e soluções inteligentes na integração de ambientes",
      "Desde o planejamento até a execução, pensamos em cada detalhe",
      "Conheça o nosso portfólio",
      "Envie-nos seu projeto e ideias"
    ],
    "services": [
      "criação de projetos",
      "implantação de projeto",
      "manutenção e conservação",
      "assessoria técnica",
      "paisagismo e jardinagem"
    ],
    "locations": [
      "Rua Ary Barroso, 1160, Boa Vista, Curitiba/PR, CEP 82560-370"
    ],
    "contacts": [
      "(41) 3252-8332",
      "(41) 99102-5129",
      "(41) 98422-6251",
      "https://arteejardim.com.br/contato/"
    ],
    "visual_assets": [
      "https://arteejardim.com.br/",
      "https://arteejardim.com.br/portfolio/",
      "https://arteejardim.com.br/sobre/",
      "https://arteejardim.com.br/criacao-de-projetos/"
    ],
    "original_screenshots": {
      "desktop": "https://arteejardim.com.br/",
      "mobile": "https://arteejardim.com.br/"
    },
    "equity_to_preserve": [
      "founder-led local history",
      "long-running experience cue",
      "end-to-end project capability",
      "nature-connected category language",
      "project submission CTA"
    ],
    "weaknesses_not_to_copy": [
      "empty blog section",
      "portfolio hidden behind a generic prompt",
      "duplicated icon glyphs",
      "unguided file-upload lead form"
    ]
  },
  "concept_thesis": "Frame Arte & Jardim as a living project archive: let Curitiba landscapes, the founder's long practice, and four stages of service lead a visitor from visual possibility to a well-briefed project conversation.",
  "deliverable_tier": "early_visual_direction"
}

