# Build report — CEAP Curitiba

**Status:** concluído e aprovado localmente em 17/07/2026  
**Escopo:** homepage de produção, proposta independente separada, ativos oficiais locais, manifesto de fontes e evidências de verificação.  
**Publicação:** não realizada, conforme instrução.

## Resultado

Foi construída uma jornada de descoberta e matrícula baseada nas três áreas públicas do CEAP — Saúde, Aperfeiçoamento e Indústria — com:

- hero ancorado em prática e preparo profissional;
- catálogo filtrável com seis cursos verificados;
- informações comparáveis de modalidade, duração/horário e requisitos;
- destaque específico para Técnico em Enfermagem e convênios de estágio divulgados na página oficial;
- contato por WhatsApp com contexto pré-preenchido;
- navegação e filtros acessíveis por teclado;
- layout mobile intencional, com imagem edge-to-edge, CTA no primeiro fluxo e alvos de toque de pelo menos 44 px.

A proposta comercial foi mantida em `proposal.html`, sem link ou linguagem de proposta na produção. Ela apresenta oportunidade, comparação visual real, três melhorias, entregáveis, dependências, sequência, próximo passo e divulgação de não afiliação em um único bloco compacto.

## Fatos e limites editoriais

- “Desde 2002” substitui a contagem pública desatualizada de “20 anos”.
- Não foram inventados preços, vagas, datas de turma, instrutores, taxas de emprego, certificados ou resultados de alunos.
- Menções a estágio foram limitadas aos convênios que o próprio CEAP lista para Técnico em Enfermagem e não implicam promessa de vaga ou emprego.
- Onde a página oficial informa “consultar”, a interface mantém “consultar”.
- O catálogo exibido não se apresenta como lista exaustiva e aponta para a relação oficial.

## Identidade aplicada

- Logo e fotografias foram baixados de URLs oficiais e mantidos localmente.
- Azul, verde e estrutura visual direta foram preservados; o marinho profundo melhora hierarquia e contraste.
- O verde funcional foi escurecido para `#138449`, atingindo **4,75:1** com texto branco.
- Tipografia usa substitutos de sistema, sem dependências externas.
- Tese: o conceito pertence ao CEAP por transformar suas três trilhas públicas em uma decisão guiada, conectando prática, estrutura, requisitos e conversa direta.

## Verificação executada

Comando final: `PLAYWRIGHT_BROWSERS_PATH="$PWD/.pw-browsers" npm test` usando Playwright 1.61.1 e Chromium 149.0.7827.55. O script npm inicia e encerra o servidor HTTP local isolado.

| Verificação | Resultado |
|---|---|
| Produção 1440×900 | passou |
| Produção 390×844 | passou |
| Proposta 1440×900 | passou |
| Proposta 390×844 | passou |
| Overflow horizontal | zero em todas as páginas/viewports |
| Console e page errors | zero |
| Requisições locais com falha | zero |
| Imagens quebradas | zero |
| Âncoras locais não resolvidas | zero |
| Menu mobile | abriu, anunciou `aria-expanded=true`, fechou por Escape |
| Filtro de cursos | retornou exatamente os dois cursos industriais no teste |
| Alvos abaixo de 44 px no mobile | zero |
| Idioma e hierarquia | `pt-BR`, exatamente um H1 por página |
| Linguagem proibida na produção | zero ocorrências |

Relatório mecânico completo: `evidence/verification.json` (`passed: true`).

### Contraste mecânico principal

- branco / marinho `#102746`: **14,99:1**;
- branco / verde funcional `#138449`: **4,75:1**;
- texto `#14213A` / branco: **16,05:1**;
- texto secundário `#667085` / branco: **4,97:1**;
- marinho / amarelo `#F4C64E`: **9,96:1**;
- verde claro `#43C87A` / marinho: **6,98:1**.

## Evidências

- Original: `evidence/original-desktop.png`, `original-desktop-full.png`, `original-mobile.png`, `original-mobile-full.png`.
- Produção: `evidence/index-desktop.png`, `index-desktop-full.png`, `index-mobile.png`, `index-mobile-full.png`.
- Proposta: `evidence/proposal-desktop.png`, `proposal-desktop-full.png`, `proposal-mobile.png`, `proposal-mobile-full.png`.
- Comparação incorporada: `assets/current-home.png` e `assets/proposed-home.png`.
- Integridade: `evidence/SHA256SUMS.txt`.

## Revisão adversarial

### Brand strategist

A personalidade permanece reconhecível sem o logotipo por meio das três trilhas, da paleta azul/verde, da prática em saúde, da formação profissional e da conversa direta. Não houve fraqueza grave.

### Art director

O hero mantém o ativo oficial vivo, com focal point respeitado e overlay apenas na área de texto. O catálogo deliberadamente técnico é interrompido por seção editorial de Enfermagem, bloco de estrutura e contato, evitando que a página inteira colapse em cards. Não houve fraqueza grave.

### Mobile/conversion reviewer

A primeira dobra apresenta marca, imagem oficial, promessa, CTA e início do seletor; menu, filtros e CTAs foram testados. O overflow de 4 px encontrado na primeira execução foi corrigido ajustando a margem do filtro mobile. Não restou fraqueza grave.

## Scorecard visual

| Dimensão | Nota (1–5) |
|---|---:|
| Fidelidade à marca | 5 |
| Distintividade | 4 |
| Impacto do hero | 5 |
| Direção de arte abaixo da dobra | 4 |
| Tipografia | 4 |
| Imagens/tratamento | 4 |
| Intencionalidade mobile | 5 |
| Credibilidade/prova | 4 |
| Clareza de conversão | 5 |
| Persuasão da proposta | 5 |
| **Média** | **4,5** |

Passa a média mínima de 4,0 e todos os limiares individuais do gate.

## Arquivos principais

- `index.html` — produção;
- `proposal.html` — proposta separada;
- `styles.css` — sistema responsivo compartilhado;
- `script.js` — menu e filtros;
- `SOURCE_MANIFEST.md` — fontes, ativos, identidade e limites;
- `assets/` — logo, favicon, imagens oficiais e comparativos;
- `evidence/` — screenshots, relatório JSON e hashes;
- `verify.mjs` — verificação repetível;
- `capture-original.mjs` — captura do site original.

## Incidentes resolvidos

1. A primeira tentativa de servidor usou a porta 4173, já ocupada por outro projeto; o build foi isolado em `127.0.0.1:4179` sem tocar o processo existente.
2. A primeira execução detectou overflow mobile de 394 px em viewport de 390 px, causado pela margem do trilho de filtros; corrigido e retestado.
3. O verde original aproximado não tinha contraste suficiente para texto branco pequeno; foi criada a variação funcional acessível `#138449` e toda a suíte foi executada novamente.
4. O diretório global de browsers do Playwright não permitia escrita; foi usado `PLAYWRIGHT_BROWSERS_PATH` local durante a verificação.
