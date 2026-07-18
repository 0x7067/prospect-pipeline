# Relatório de build — Cavassin Engenharia

Data: 17/07/2026
Workspace: `/opt/data/projects/prospect-batch/2026-07-17/cavassin-engenharia`

## Entrega

- `index.html` — experiência pública de produção.
- `proposal.html` — conceito independente separado, com `noindex,nofollow`; não é referenciado pela home.
- `styles.css` — sistema visual responsivo da home e do documento independente.
- `script.js` — menu acessível no mobile; nenhum comportamento externo.
- `assets/logo-cavassin.jpg` — asset oficial local.
- `assets/hero-oficial.png` — asset oficial local publicado na home original.
- `SOURCE_MANIFEST.md` — fontes, evidências, limites e direção de marca.
- `verify.mjs` — verificação Playwright reproduzível.
- `verification-desktop.png`, `verification-mobile.png`, `verification-proposal.png` — capturas produzidas pelos testes.
- `evidence-current-home.png` — captura da home oficial consultada para evidência current-versus-conceito.
- `SHA256SUMS.txt` — checksums dos artefatos entregues.

## Evidência usada

O conteúdo público está limitado às páginas oficiais e aos dados fornecidos no briefing. Foram confirmados: atuação desde 2005; Curitiba e região metropolitana; projetos complementares elétrico, tubulações telefônicas, hidráulico e incêndio; projetos arquitetônicos; regularização de obras; aprovação junto às prefeituras de Curitiba e região metropolitana; endereço; telefone; WhatsApp; e-mail; missão/visão/valores publicados.

Não foram inventados projetos, clientes, responsáveis técnicos, CREA, equipe, prêmios, métricas, resultados, garantias, depoimentos ou municípios adicionais. A ausência de portfólio verificável foi tratada com uma narrativa de capacidade e processo.

## Current-versus-conceito

- Current: `evidence-current-home.png`, captura 1440×900 do endereço oficial em 17/07/2026.
- Conceito: `verification-proposal.png`, captura do documento independente.
- A comparação textual também está no topo de `proposal.html`, com a chamada original publicada e a direção proposta claramente identificada como conceito.

## Verificação executada

Comando:

```bash
node verify.mjs
```

Resultado real:

```json
{
  "viewports": [
    {"name":"desktop","width":1440,"height":900},
    {"name":"mobile","width":390,"height":844}
  ],
  "proposalRobots": "noindex,nofollow",
  "screenshots": [
    "verification-desktop.png",
    "verification-mobile.png",
    "verification-proposal.png"
  ],
  "failures": []
}
```

O script também verificou: anchors da home, resposta local de links HTML, ausência de overflow horizontal, console sem erros, requests sem falhas, abertura do menu mobile e meta `noindex,nofollow` da página de conceito.

## Gate visual aplicado

A direção usa um percurso de “clareza técnica”: imagem oficial com contraste controlado no hero, tipografia editorial local, azul-petróleo/laranja como sistema, um bloco geométrico de processo em CSS e CTA direto para contato. A marca é preservada sem importar dependências externas ou inventar prova.

Pontuação interna de revisão visual, escala 1–5:

- Fidelidade de marca: 4
- Distintividade: 4
- Impacto do hero: 4
- Qualidade abaixo do hero: 4
- Tipografia: 4
- Tratamento de imagem: 4
- Intencionalidade mobile: 4
- Credibilidade/prova: 4
- Clareza de conversão: 5
- Persuasão do conceito independente: 4

Média: 4,1. Nenhuma dimensão abaixo de 3; os limiares prioritários do gate foram atendidos visualmente nas capturas desktop e mobile. A credibilidade foi mantida deliberadamente sem claims não verificados.

## Limitações conhecidas

- O asset hero é uma imagem oficial publicada pela própria Cavassin, mas não tem legenda pública de projeto; por isso é tratado apenas como imagem de contexto, sem atribuição.
- A página pública não oferece portfólio verificável, responsáveis técnicos/CREA ou depoimentos; não foram simulados.
- O servidor local e `node_modules` usados apenas para verificação não fazem parte da publicação requerida.

## Checksums

Gerados após a verificação final em `SHA256SUMS.txt`.
