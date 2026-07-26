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

## Passagem de melhoria — 26/07/2026

Foram atualizados `index.html` e `styles.css`. A nova versão reforça os dois próximos passos verificados já no hero (matrículas 2026 e telefone da secretaria), adiciona um percurso rápido para famílias, uma seção de informações essenciais e dados estruturados limitados aos contatos/endereço confirmados. O `tel:` inválido da versão anterior foi corrigido para `+554130405872`, e o tamanho do título no hero mobile foi reequilibrado para manter a mensagem, o contexto e os dois CTAs em uma primeira tela mais útil.

A renderização foi validada em 1440×900 e 390×844: zero overflow horizontal, anchors ausentes, imagens quebradas, exceções de runtime ou requests com falha. O menu mobile abriu e fechou com estados/rótulos ARIA corretos e Escape. Também passaram a conferência estática de ativos/alt, `node --check script.js`, detecção de variáveis CSS sem definição, busca por linguagem proibida na produção e `git diff --check`.

## Passagem de revisão visual — 26/07/2026

Retorno da revisão de sites: retratos desfocados na seção “Pessoas” e sugestão de transformar parte dos círculos decorativos em planetas.

- Retratos: as duas únicas imagens disponíveis no domínio oficial (`assets/team-gleida.jpg`, `assets/team-elizane.jpg`) são recortes de captura de tela em 234×253 e 319×302 px e já chegam desfocados na origem — nenhum ajuste de exibição recupera nitidez. A seção passou a usar monogramas circulares (`.person-mark`) em Georgia sobre gradiente pastel, preservando nomes e funções publicados. Os arquivos originais continuam arquivados e documentados no manifesto; basta trocar o monograma por `<img>` quando o CEI fornecer fotografias em resolução adequada.
- Planetas: parte dos círculos já existentes virou planeta, sem novos elementos gratuitos. No hero, o círculo grande virou `.hero-planet` — corpo com crateras e brilho e anel âmbar inclinado. Em “Jeito de educar”, o ícone 01 ganhou crateras e o ícone 02 trocou o satélite por um anel. Os demais pontos (nuvem, satélites do hero, marcador de matrículas, bullets) seguem neutros, para que a leitura continue editorial e não vire tema espacial.

Revalidação em 1440×900 e 390×844 com `verify_playwright.js`: HTTP 200, zero overflow horizontal, anchors resolvidos, ativos locais 200, zero erros de console/página/request, menu mobile abrindo por Enter e fechando por Escape, `proposal.html` com `noindex, nofollow` e nenhuma string de proposta na produção. `evidence/proposed/`, `review/` e `verification-output.json` foram regerados nesta passagem.
