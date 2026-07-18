# CEAP Curitiba — Cursos Técnicos e Profissionalizantes

Site estático híbrido: identidade de marca reconhecível, catálogo real de cursos, prova de estágio verificada e um único caminho de conversão para pré-matrícula.

## Arquivos

- `index.html` — homepage pública; não faz referência a proposta, redesign, protótipo ou disclosure.
- `proposal.html` — conceito independente e racional de negócio (não linkado a partir da home).
- `rationale.html` — redirect-only para `proposal.html`.
- `styles.css` / `script.js` — sistema visual e navegação móvel (toggle sem dependências externas).
- `PRODUCT.md` / `DESIGN.md` / `BRAND_SOURCE.md` — briefing de produto, sistema de design e fonte de marca.
- `SITE_REVIEW.md` — revisão visual, resultados de `node --check`, detector e Playwright.
- `SOURCE_MANIFEST.md` — proveniência de todos os fatos usados.

## Execução local

Sirva esta pasta com qualquer servidor estático, por exemplo:

```
python3 -m http.server 8000
```

Não há dependências de build, fontes remotas, formulários, uploads ou chamadas automáticas a serviços externos no carregamento. Há dois destinos externos ativados pelo usuário: o WhatsApp oficial e o Instagram oficial.

## Escopo factual

Cursos, convênios de estágio, endereço, telefone, WhatsApp, horário de funcionamento e estrutura física foram usados apenas conforme evidência pública verificada em 18/07/2026 (ver `SOURCE_MANIFEST.md`). Nenhum preço, prêmio, certificação, depoimento ou resultado foi inventado.
