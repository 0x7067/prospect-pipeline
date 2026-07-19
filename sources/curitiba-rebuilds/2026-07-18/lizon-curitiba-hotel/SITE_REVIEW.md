# Site review — Lizon Curitiba Hotel

Sessão de retomada: 2026-07-18/19. Nenhum outro worker detinha esta pasta no início da sessão (nenhum arquivo de lock/claim; o único processo com `cwd` na pasta era um `python3 -m http.server 8791` órfão de PID 1, sem nenhum processo AFK/Claude/Codex anexado) — trabalho retomado no lugar, preservando `index.html`, `proposal.html`, `rationale.html`, `styles.css` e `script.js` já existentes.

## Mapeamento problema → solução

| Problema documentado (`prospect.json.problems`) | Solução implementada | Benefício comercial |
|---|---|---|
| "A página oficial ativa abre com um widget de reserva antes de qualquer proposição sobre o hotel, tornando a primeira decisão um formulário, não uma escolha de estadia." | O hero do candidato abre com uma frase de chegada e proposição ("Uma base central para ficar, reunir e receber em Curitiba."), endereço e dois CTAs (`tel:`) — nenhum widget de datas/formulário em nenhum lugar do site. | A primeira impressão vende a estadia, não pede dados; reduz abandono na dobra inicial. |
| "A página espalha hotel, restaurante, apartamentos, eventos, comodidades e fatos de destino em uma sequência longa e genérica; os caminhos de maior valor não são priorizados." | Composição de "linha de base da cidade": uma linha vertical de percurso liga quatro pontos verificados em ordem deliberada — Centro (chegada) → Hospedagem → Eventos → Restaurante — antes de uma seção de serviços e um painel de contato final com três caminhos explícitos. | Sequência editorial substitui a lista solta; cada seção tem uma função clara na jornada de decisão. |
| "Copy e rótulos incluem linguagem de máquina/template como 'Button', 'Field label', 'High Speed Intenet Access' e '1 Adultos'." (confirmado em `/opt/data/tmp/prospect-research/lizon.html`) | Todo o texto do candidato é copy em português consistente, escrito para o negócio; nenhum rótulo de template, placeholder técnico ou erro de digitação de fornecedor. | Percepção de acabamento e confiança; remove o principal sinal de "site quebrado" citado na auditoria. |
| "A experiência mobile é uma página empilhada longa com controles de reserva e muitos itens de serviço antes de um caminho de decisão conciso." | Mobile mantém a mesma sequência de percurso (chegada → quarto → evento → restaurante) com uma barra de reserva fixa (sticky) sempre visível, e o menu mobile expõe os quatro links de navegação + CTA de reserva em um painel acessível. | Ação de reserva nunca fica fora de alcance; prova (endereço, quartos, eventos) aparece antes da lista longa de comodidades, conforme `concept_rules`. |

## Tese conceitual

> "Este conceito só pode pertencer ao Lizon Curitiba Hotel porque trata o hotel como uma base prática da cidade — seu endereço central, capacidade de reunião/evento, restaurante e ampla capacidade de quartos se tornam uma narrativa calma de chegada, em vez de uma página de reserva genérica."

Implementação: linha de percurso vertical (thin rule + waypoint dot + label) como ideia compositiva única; azul Lizon verificado abre e fecha a página (chegada e painel de contato), aquecendo em papel + latão restrito nas três seções de hospitalidade intermediárias; par tipográfico Bricolage Grotesque (chegada/destino) + Libre Franklin (operacional); toda fotografia em quadro editorial largo com legenda plana única, nunca corte quadrado/máscara/duotone.

## Testes anti-template

1. **Teste de remoção do logotipo:** com o logotipo oculto, a linha de percurso vertical, o azul civil de abertura/fechamento e a estrutura de "painel de embarque" no contato ainda comunicam uma identidade prática e wayfinding-orientada — não um template genérico de hotel. **Passa.**
2. **Teste de troca de concorrente:** o texto cita endereço exato (Av. Sete de Setembro, 2246), telefones específicos de reserva/eventos e os serviços verificados (restaurante, eventos, room service, recepção 24h); outro hotel de Curitiba não poderia substituir o nome sem quebrar essas referências. **Passa.**
3. **Teste do olhar semicerrado (squint):** em miniatura, a alternância azul-escuro → papel/creme → azul-escuro → azul cria um ritmo de "abre e fecha" distinto de uma página de cartões repetidos. **Passa.**
4. **Teste dos cinco segundos:** um visitante identifica o hotel (Lizon, Centro de Curitiba), o que oferece (quartos 1–4 pessoas, eventos, restaurante) e o elemento memorável (a linha de percurso ligando os quatro pontos) dentro do hero e da primeira seção. **Passa.**
5. **Teste abaixo da dobra:** as seções de hospedagem/eventos/restaurante alternam a direção da mídia (split reverso), o painel de serviços muda de temperatura (azul escuro) e o contato fecha em azul vívido com layout de tabela — não há fileira repetida de cards genéricos. **Passa.**
6. **Teste mobile-nativo:** mobile mantém a barra de reserva fixa, empilha a linha de percurso com recuo reduzido, e o painel de contato vira cartões de linha única por contato (não uma tabela apertada) — ritmo próprio, não apenas desktop empilhado. **Passa.**

## Registro anterior do detector (histórico, não representa a build atual)

Comando: `python3 /opt/data/scripts/impeccable_detector_gate.py /opt/data/projects/curitiba-rebuilds/2026-07-18/lizon-curitiba-hotel`

### Execução 1 anterior

`generated_at`: 2026-07-18T21:34:55.752060+00:00 · `status`: `findings` · 21 achados únicos, incluindo: `hero-eyebrow-chip` (index.html e proposal.html), `all-caps-body` (5 ocorrências em index.html, 1 em proposal.html), `cramped-padding` (hero, table-media-pair, services, board), `clipped-overflow-container` (body em ambos os arquivos), `flat-type-hierarchy` (13 tamanhos em 1.5:1 no index; 6 tamanhos em 1.4:1 na proposta), `cream-palette` (ambos os arquivos), `em-dash-overuse` (6 no index, 11 na proposta), `numbered-section-markers` (sequência 01/02/03/04), `low-contrast` (`#8c6a34` sobre `#efeae0`, 4.14:1).

### Passe de reparo anterior

- Removidos os chips numerados (`01 · Chegada`, `02 · Hospedagem` etc.) e o eyebrow do hero; rótulos de waypoint reestruturados em `<span class="waypoint-label">`/`<span class="waypoint-detail">` sem numeração.
- `text-transform: uppercase` removido de `.proposal-tag`; badge "NÃO AFILIADO..." reescrito em minúsculas/maiúsculas de frase.
- Todos os 17 em-dashes (6 em index.html incluindo `<title>`, 11 em proposal.html) substituídos por dois-pontos, ponto-e-vírgula, parênteses ou reestruturação de frase — zero em-dashes restantes em qualquer arquivo público.
- Paleta `--paper`/`--paper-deep` deslocada de creme/bege clássico (H≈40-43°, S≈30%) para tom pedra aquecido e mais dessaturado (H≈75°/60°, S≈16-17%); `--brass-ink` recalculado de `#8C6A34` (4.14:1, falhava) para `#945944` (≥4.6:1 sobre ambos os fundos, contraste recomputado programaticamente via luminância relativa WCAG).
- `--fs-xs`/`--fs-sm`/`--fs-md` introduzidos (12px/16px/20px) consolidando as ~13 variações de fonte próximas do index.html (11.8–17.6px, razão 1.5:1) em uma escala clara com H1/H2 em 40–73.6px — razão de contraste de tamanho agora muito acima de 1.25:1 entre níveis adjacentes.
- Padding vertical adicionado a `.hero-content` (3.6rem), `.services` (4.2rem/4.6rem) e `.board` (4.2rem/4.8rem); `.table-media-pair` recebeu `padding: 12px` interno — confirmado via `getBoundingClientRect()` que o conteúdo agora tem inset real em todas as quatro seções sinalizadas.
- `board-row-index` (A/B/C sobre fundo azul) recolorido de `--brass` (2.56:1, falhava) para `--paper` (7.37:1).
- `<code>` dentro de `.proposal-next` (fundo escuro) recebeu `color: var(--ink)` explícito para corrigir um bug real de especificidade CSS descoberto durante a auditoria de contraste automatizada (o `color: var(--muted-on-ink)` herdado de `.proposal-next p` deixava o texto claro sobre o próprio fundo claro do `<code>`).

### Execução 2 anterior

`generated_at`: 2026-07-19T00:27:17Z · `build_id`: `37b99ddb7b1df7ccde1e53f9796e929afa45b63397153d7187d64385c79ffe50` · `status`: `findings` (gate exit code 2). Quatro achados únicos remanescentes, todos severidade `warning`:

1. `cramped-padding` — `<section> "hero"`: mesmo após a adição de `padding: 3.6rem 4vw` ao `.hero-content`, o detector ainda mede o próprio `<section class="hero">` (que continua com `padding: 0`, por design: `.hero-media` precisa preencher 100% da seção para a foto de fundo full-bleed) como "filhos rentes ao fundo em todos os lados" — o inset real está no wrapper de conteúdo interno, não na seção-fundo. Não resolvido nesta passagem porque exigiria repensar a estrutura hero-media/hero-content (fora do orçamento de uma única passagem de reparo consolidado).
2. `flat-type-hierarchy` — `index.html`, tamanhos "12px, 16px, 20px" lidos em razão 1.7:1 pelo detector (a escala consolidada nesta passagem já é objetivamente mais clara que a original de 13 tamanhos em 1.5:1, mas o detector também soma os tamanhos de H1/H2 do documento completo — 40/43.2/51.2/52.8/73.6px — nem todos capturados neste snippet resumido).
3. `hero-eyebrow-chip` — `proposal.html`, o badge "Não afiliado ao Lizon Curitiba Hotel" continua lido como um "chip" pela geometria (bloco com borda + texto em negrito acima do H1), independentemente da mudança de caixa alta para frase; resolver exigiria remover ou redesenhar completamente o badge de não afiliação, o que entra em tensão com o requisito explícito do gate de marca/estilo (`PROSPECT_BRAND_STYLE_GATE.md` §6) de que a página de proposta tenha uma "divulgação de não afiliação clara".
4. `cream-palette` — `proposal.html`, fundo `rgb(234, 234, 226)` (a variável `--paper-deep` recém-dessaturada) ainda lido como familiar de creme/bege; um deslocamento adicional de matiz/saturação não foi tentado nesta passagem para não arriscar reintroduzir falhas de contraste já corrigidas sem uma nova rodada de verificação, que excederia o orçamento de duas execuções.

Este registro é preservado apenas como histórico. A implementação atual removeu o tratamento de chip da divulgação na proposta, deslocou o fundo secundário para um neutro azulado, acrescentou inset real ao contêiner do hero e eliminou inferências de conteúdo não sustentadas. O agente raiz executará o gate pinado sobre a build atual, conforme o contrato desta rodada.

## Verificação mecânica da implementação anterior

- `node --check script.js`: sucesso, sem erros de sintaxe.
- Servidor estático local (`python3 -m http.server`), HTTP 200 confirmado em `index.html`, `proposal.html`, `rationale.html`, `styles.css`, `script.js` e todos os 7 arquivos em `assets/` (incluindo 3 arquivos de fonte `.woff2` e `fonts.css`).
- Parser HTML Python (`html.parser`): zero tags não fechadas/incompatíveis em `index.html`, `proposal.html` e `rationale.html`; todos os hrefs `#âncora` resolvem para um `id` existente; zero arquivos locais referenciados ausentes.
- Auditoria de contraste WCAG automatizada via Playwright (percorrendo a cadeia real de `background-color` computada por elemento, não apenas variáveis CSS nomeadas): 64 elementos de texto verificados em `index.html`, 43 em `proposal.html` — **zero falhas** após o reparo (a falha real encontrada, o bug do `<code>` em fundo escuro, foi corrigida e reverificada).
- Teste de overflow horizontal em 320/375/390/768/860/1280/1440/1920px, com e sem a regra `overflow-x: hidden` do `body` removida temporariamente para confirmar que nenhum overflow real está sendo mascarado: `scrollWidth === clientWidth` em todas as larguras, em ambas as condições, em ambos os arquivos HTML. A regra `overflow-x: hidden` foi removida permanentemente do `body` por não ser necessária (nenhum overflow real existe) e por ela mesma ter sido um provável contribuinte ao achado `clipped-overflow-container` do detector.
- Playwright real (não apenas a ferramenta de browser integrada) com emulação móvel verdadeira (`isMobile: true, hasTouch: true`) em 390×844: zero erros de console/página em `index.html` e `proposal.html`; menu mobile abre/fecha corretamente via clique e `Escape`; todos os alvos de toque do menu mobile e da barra de reserva ≥44×44px (medidos via `getBoundingClientRect()`); todos os botões de CTA (`Reservar estadia`, `Consultar reserva`, `Falar sobre um evento`, `Contato do restaurante`, `Ligar para reservas/eventos/recepção`) ≥44px de altura.
- Navegação por teclado: primeiro `Tab` foca o skip-link (torna-se visível), segundo `Tab` mostra `outline: 3px solid #B18A4A` visível sobre o header azul.
- Varredura de segurança: zero `<form>`, `fetch`, `XMLHttpRequest`, `axios`, `sendBeacon`, `WebSocket`, `.submit()` ou snippets de analytics em qualquer arquivo; zero strings proibidas (cassino/apostas/farmacêuticos/credenciais); zero referências a `SITE_REVIEW`/`README.md`/`AFK_`/`.afk-`/`DESIGN_CRITIQUE` em `index.html`, `proposal.html`, `rationale.html` ou `script.js` (a única menção a `SOURCE_MANIFEST.md` está em `proposal.html`, consistente com o padrão já usado pelos projetos irmãos desta mesma leva de 2026-07-18). Todos os links `target="_blank"` em `proposal.html` carregam `rel="noopener"`. Únicos domínios externos referenciados: o próprio domínio oficial do hotel (`lizon.com.br`) em `proposal.html`.
- `index.html` não contém nenhum link para `proposal.html`, nenhuma linguagem de proposta/redesign/protótipo/divulgação, e nenhum `meta robots` (consistente com o padrão de todos os `index.html` irmãos desta leva). `proposal.html` carrega `<meta name="robots" content="noindex, nofollow">`. `rationale.html` redireciona compativelmente (meta refresh + `location.replace`) apenas para `proposal.html`.
- Exatamente um `<h1>` em cada página; skip-link presente em ambas.

## Notas de escopo

Trabalho realizado apenas neste diretório (`/opt/data/projects/curitiba-rebuilds/2026-07-18/lizon-curitiba-hotel`); nenhum outro diretório de candidato foi tocado. Nenhuma ação de publicação, upload, contato, envio de formulário ou criação de variante foi realizada. `prospect.json`, `AFK_NATIVE_TASK.md`, `.afk-native-queued.json` e `.impeccable-provision.json` foram preservados sem alteração (bookkeeping do pipeline, não artefatos para limpar).

## Validação da build atual — 2026-07-19

- Passagem única de navegador em 1440×900 e 390×844: HTTP 200, sete imagens locais carregadas, nenhum erro de console/página/requisição e `scrollWidth === clientWidth` nos dois viewports. Capturas de validação foram lidas visualmente em página completa.
- Desktop: a hierarquia permanece legível no teste semicerrado; chegada, hospedagem, eventos, restaurante, serviços e painel de contato têm silhuetas distintas. Mobile: o conteúdo recompõe em uma coluna com endereço e hospedagem antes dos serviços, barra de reserva persistente e menu expansível funcional.
- Detector atual, execução 1 (`build_id` `88b21aa120f6ce5fbad9c7a86d4872c96c23deeea3f97e9475f512afa5f43159`): dois avisos — inset do hero full-bleed e escala intermediária 12/16/20px. A única passagem consolidada de reparo aumentou o quadro interno real do hero para 8px e consolidou o token médio em 24px. A execução 2 determinará o estado final; não haverá nova correção nesta rodada.
- Detector atual, execução 2: `status=clean`, schema 3, zero achados, `build_id` `43e414812800f3f3a5893cad1685b8db6328483816fd9ecb4b0e0bc30ae25d55`.
- Captura vinculada à build: proposta desktop e mobile e site oficial desktop foram capturados com sucesso. O site oficial mobile retornou HTTP 200, mas o documento mediu 768px dentro do viewport obrigatório de 390px; o script marcou `horizontal_overflow=true`, removeu os PNGs inválidos desse alvo e encerrou `success=false`. Nenhuma imagem foi substituída. A build local permanece limpa, porém a entrega termina como falha por conjunto comparativo incompleto.
