# BUILD REPORT — Poncio Contabilidade

**Status:** aprovado para entrega local · **não publicado**  
**Data da revisão final:** 17/07/2026  
**Diretório:** `/opt/data/projects/prospect-batch/2026-07-17/poncio-contabilidade`

## Resultado

Foi construída uma homepage institucional responsiva, segura e orientada a conversas por necessidade, com uma página de oportunidade comercial totalmente separada. A identidade oficial — logotipo ascendente, azul-marinho/prata, grafismos pontilhados e linguagem de organização — foi preservada e transformada em um sistema editorial de “linha de decisão”, numeração progressiva e alternância de densidade.

A produção contém somente serviços, segmentos, linguagem institucional e contatos verificados. Não foram inventados CRC, profissionais, métricas, clientes, depoimentos, preços, economias ou resultados tributários. A página de produção não contém link, linguagem ou disclosure da página comercial.

## Pesquisa e constatações

- O domínio oficial, a página de contato, a página de serviços e o sitemap estavam acessíveis por HTTPS em 17/07/2026.
- O contato publicado foi confirmado: `(41) 99920-9313`, `contato@ponciocontabilidade.com.br` e endereço no Pinheirinho, Curitiba—PR.
- Foram confirmados cinco serviços: Contabilidade, Abertura de Empresa, Fiscal, Financeiro e Societário.
- Foram confirmados os segmentos Indústria, Comércio e Prestação de Serviços.
- A extração da homepage continha texto/link externo de cassino e a busca pública retornou página indevida associada ao domínio. Os endereços maliciosos não foram reproduzidos.
- O CTA principal de serviços atual continha uma URL terminada em `servicos/%22`.
- Os mesmos três depoimentos apareciam repetidos no documento da homepage.
- Os planos atuais possuem itens genéricos sem comprovação (“serviço 1”, etc.) e, por isso, não foram reutilizados.

O inventário completo de fontes, cópia e hashes dos ativos está em `SOURCE_MANIFEST.md`.

## Artefatos entregues

### Produção
- `index.html` — homepage final em português.
- `styles.css` — sistema visual e responsividade.
- `script.js` — menu acessível, fechamento por botão/link/Escape, ano automático e CTA móvel após rolagem.
- `assets/` — sete ativos locais baixados do domínio oficial.

### Página comercial separada
- `proposal.html` — oportunidade, comparativo atual × direção proposta, três prioridades correspondentes, entregáveis, dependências, sequência, um próximo passo, apêndice e disclosure compacto.

### Proveniência e verificação
- `SOURCE_MANIFEST.md` — fontes, brief de marca, tese, URLs e hashes dos ativos.
- `verify.mjs` — teste Playwright reproduzível.
- `evidence/verification-results.json` — resultado estruturado e hashes dos arquivos revisados.
- `evidence/original/` — capturas originais desktop/mobile, viewport e página completa.
- `evidence/rebuild/` — capturas finais de produção e página comercial, desktop/mobile, viewport e página completa.
- `package.json` / `package-lock.json` — ambiente de verificação.
- `capture-original.mjs` — procedimento reproduzível de captura da origem.

## Verificação mecânica final

Comando executado:

```bash
PLAYWRIGHT_BROWSERS_PATH="$PWD/.playwright-browsers" npm run verify
```

Resultado real: **PASS**, sem falhas.

| Página / viewport | HTTP | Overflow horizontal | Console | Erros de página | Requests falhos / ≥400 | Âncoras | Imagens | Contatos malformados |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Produção 1440×900 | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Produção 390×844 | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Página comercial 1440×900 | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Página comercial 390×844 | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

Menu móvel:
- abre pelo botão: **sim**;
- fecha pelo mesmo botão: **sim**;
- fecha por link: **sim**;
- fecha por `Escape` e devolve o foco ao botão: **sim**;
- alvo de toque: **48×48 px**.

Separação:
- termos comerciais/protótipo/diagnóstico/disclosure na produção: **0**;
- link de `proposal.html` na produção: **não**;
- identidade independente na página comercial: **sim**.

Os hashes SHA-256 dos arquivos revisados estão registrados em `evidence/verification-results.json`. Não houve publicação; portanto, não existe comparação com artefato remoto.

## Evidência visual

- `evidence/rebuild/rebuild-desktop-viewport-1440x900.png`
- `evidence/rebuild/rebuild-desktop-full-1440x900.png`
- `evidence/rebuild/rebuild-mobile-viewport-390x844.png`
- `evidence/rebuild/rebuild-mobile-full-390x844.png`
- `evidence/rebuild/proposal-desktop-viewport-1440x900.png`
- `evidence/rebuild/proposal-desktop-full-1440x900.png`
- `evidence/rebuild/proposal-mobile-viewport-390x844.png`
- `evidence/rebuild/proposal-mobile-full-390x844.png`

Os recortes finais foram revisados visualmente. No mobile, o hero mantém marca, promessa e CTA no primeiro fold; o segundo caminho de navegação permanece visível, a faixa de áreas sinaliza rolagem e o WhatsApp persistente só aparece após 640 px de rolagem para não cobrir o primeiro fold.

## Revisões adversariais

1. **Estrategista de marca (leitura independente):** fidelidade 4/5, distintividade 4/5, sem fraqueza genérica de alta severidade. Destacou como próprios da Poncio o símbolo ascendente, a paleta, a linguagem verificada e o sistema “organização → decisão → seguir em frente”.
2. **Direção de arte (leitura independente):** elogiou hierarquia, paleta e sistema editorial; apontou risco de familiaridade em fotografia corporativa e repetição. A avaliação final considerou a limitação a ativos oficiais, os três momentos compositivos distintos e a alternância de densidade. Não há ampliação de imagem de baixa resolução.
3. **Mobile/conversão (leitura independente):** apontou ausência inicial do caminho secundário e falta de CTA durante a página longa. Foram adicionados o link secundário no hero, sinal de rolagem na faixa e WhatsApp persistente após rolagem.

Duas leituras alegaram que o `tel:` tinha asteriscos. O contato da produção foi normalizado para `tel:+5541999209313`; o verificador final valida mecanicamente o formato `tel:+` com 12–15 dígitos e URLs `wa.me`.

## Scorecard final

| Dimensão | Nota (1–5) | Evidência |
|---|---:|---|
| Fidelidade de marca | 4,2 | Marca, cores, linguagem e grafismos oficiais |
| Distintividade | 4,1 | Linha de decisão, ritmo numerado e movimento ascendente |
| Impacto do hero | 4,4 | Mensagem imediata, imagem oficial, CTA e recorte próprio por viewport |
| Direção abaixo da dobra | 4,1 | Ledger de serviços, jornadas, editorial institucional, princípios e contato |
| Tipografia | 4,0 | Escala firme, itálico ascendente, quebras dirigidas e fontes de sistema |
| Imagem/tratamento | 4,0 | Ativos oficiais, luz preservada, recortes aprovados e grafismos locais |
| Intencionalidade mobile | 4,2 | Ritmo próprio, edge-to-edge, menu 48 px, scroll cue e CTA após rolagem |
| Credibilidade/prova | 3,8 | Fatos e contatos verificados; nenhuma prova inventada |
| Clareza de conversão | 4,2 | Entradas por momento e mensagens pré-contextualizadas |
| Persuasão da página comercial | 4,4 | Oportunidade, evidência cedo, prioridades, escopo, sequência e próximo passo |
| **Média** | **4,14** | **Passa** |

Nenhuma dimensão ficou abaixo de 3; fidelidade, distintividade, hero, abaixo da dobra, mobile e página comercial ficaram ≥4.

## Problemas encontrados durante o build

- A instalação inicial do navegador Playwright tentou gravar em `/opt/hermes/.playwright` e falhou por permissão. Foi corrigida com `PLAYWRIGHT_BROWSERS_PATH` local.
- A porta `4173` já estava ocupada por outro servidor e apontava para conteúdo alheio. A verificação foi movida para `127.0.0.1:43891`, sem tocar outros projetos.
- Uma checagem inicial marcou imagem lazy-load como quebrada antes da rolagem. O teste foi corrigido para rolar a página, aguardar e considerar falha real por request/status ou `naturalWidth === 0`.
- Nenhum bloqueio remanescente. Nenhum arquivo fora deste diretório foi alterado e nada foi implantado ou enviado ao prospect.
