# Relatório de build — CEI Mundo para Todo Mundo

Data: 17/07/2026
Diretório único de trabalho: `/opt/data/projects/prospect-batch/2026-07-17/mundo-para-todo-mundo`

## Entrega

- `index.html`: homepage pública, sem link ou linguagem de proposta.
- `proposal.html`: documento separado com `noindex, nofollow`; não é referenciado pela homepage.
- `styles.css`: sistema visual responsivo, acessível e sem dependências externas.
- `script.js`: menu mobile com estado ARIA, teclado, Escape e fechamento ao clicar fora.
- `assets/`: logo, hero, galeria e retratos baixados de URLs oficiais e usados localmente.
- `SOURCE_MANIFEST.md`: fontes, limites editoriais, direção visual, proveniência dos ativos e SHA-256.
- `verify_playwright.js`: verificação reproduzível com Playwright.
- `evidence/current/` e `evidence/proposed/`: capturas comparáveis desktop/mobile.

## Limites editoriais aplicados

O conteúdo usa somente identidade, linguagem institucional, matrícula 2026 publicada, endereço, e-mail, telefone, nomes/funções publicados e imagens oficiais. Não foram inventados idades, horários, valores, vagas, regras públicas/particulares, instalações, credenciais, salvaguarda, testemunhos, resultados ou serviços.

## Verificação reproduzível

Pré-requisito usado:

```bash
npm install --no-save playwright@1.61.1
```

Servidor local:

```bash
cd /opt/data/projects/prospect-batch/2026-07-17/mundo-para-todo-mundo
python3 -m http.server 43921 --bind 127.0.0.1
```

Execução final:

```bash
BASE_URL=http://127.0.0.1:43921 node verify_playwright.js > verification-output.json
```

O script verifica, nos viewports 1440×900 e 390×844:

- resposta HTTP local;
- overflow horizontal zero;
- todos os anchors locais resolvidos;
- respostas 200 para todos os ativos locais referenciados;
- ausência de erros de console, page errors e request failures;
- abertura do menu mobile por Enter;
- estado `aria-expanded` e classe aberta;
- fechamento por Escape e retorno de foco;
- `proposal.html` com `noindex, nofollow`;
- ausência no production HTML de `proposal.html`, `redesign`, `conceito independente` e linguagem de não afiliação;
- presença dos artefatos obrigatórios;
- screenshots propostas nos dois viewports.

## Resultado exato da execução final

A saída completa está em `verification-output.json`. Resultado observado:

```text
PASS — home-desktop: HTTP 200; overflow {"innerWidth":1440,"scrollWidth":1440}; anchors 10; local assets 9; console/page/request errors 0.
PASS — home-mobile: HTTP 200; overflow {"innerWidth":390,"scrollWidth":390}; anchors 10; local assets 9; console/page/request errors 0.
PASS — menu mobile abriu via Enter, expôs aria-expanded=true e fechou via Escape.
PASS — proposal.html: meta robots=noindex, nofollow.
PASS — proposal.html: HTTP 200; overflow {"innerWidth":1440,"scrollWidth":1440}; local assets 4; console/page/request errors 0.
PASS — production: zero strings de proposta e zero link para proposal.html.
PASS — arquivos obrigatórios presentes.
```

## Gate visual e revisão

A direção preserva o símbolo, a linguagem “Uma escola para todos”, a ideia de inclusão e as imagens oficiais; evolui o uso de coral/azul para orientar leitura e conversão. A homepage foi verificada mecanicamente nas duas larguras e inclui foco visível, skip link, alt text útil e targets de toque amplos.

A exigência de não autoaprovação foi respeitada: não foram usados outros agentes, não foi feita publicação/deploy e este relatório não substitui a leitura independente de estrategista de marca, direção de arte e revisão mobile/conversão prevista no gate. As capturas current-vs-proposed e o manifesto deixam a revisão reproduzível.

## Segurança de escopo

Nenhum scheduler foi alterado, nenhum contato foi realizado, nenhum deploy foi feito e nenhum diretório irmão foi modificado.
