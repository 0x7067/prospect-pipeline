# BUILD_REPORT.md

## Entrega

Build local concluído em `/opt/data/projects/prospect-batch/2026-07-17/buffet-original`.

Arquivos principais:

- `index.html` — homepage de produção em português.
- `proposal.html` — documento separado, com `noindex,nofollow`, disclosure independente e comparação atual × proposta.
- `styles.css` — sistema visual responsivo.
- `script.js` — menu mobile acessível, com estado ARIA e Escape.
- `assets/original/` — ativos baixados do domínio oficial.
- `SOURCE_MANIFEST.md` — fontes, proveniência, fatos usados, direção e limites.
- `verify_build.cjs` — verificação Playwright reproduzível.
- `capture-original.cjs` — captura do site oficial após carregamento e settling.
- `CHECKSUMS.sha256` — evidência de integridade dos arquivos revisados.

## Decisões de conteúdo

A produção usa somente informação encontrada no site oficial capturado e links públicos listados no manifesto. Não foram inventados cardápios, preços, disponibilidade, eventos, clientes, depoimentos, capacidade além das três capacidades publicadas, ou integrações comerciais. A página de produção não contém linguagem de proposta, redesign, diagnóstico, evidência, disclosure, protótipo ou link para `proposal.html`.

## Verificação Playwright

Dependência local instalada somente nesta pasta: `playwright@1.52.0`, com Chromium armazenado em `.playwright/`.

Servidor local usado:

```bash
python3 -m http.server 41993 --bind 127.0.0.1
```

Comandos reproduzíveis:

```bash
npm run test
# equivalente direto:
PLAYWRIGHT_BROWSERS_PATH=./.playwright node verify_build.cjs
```

Resultado observado na última execução:

- `index.html` em 1440×900: sem overflow; `scrollWidth=1440`, `clientWidth=1440`; altura total 4241; erros de console: 0; requests falhos: 0.
- `index.html` em 390×844: sem overflow; `scrollWidth=390`, `clientWidth=390`; altura total 4894; erros de console: 0; requests falhos: 0.
- Menu mobile: teclado testado; `aria-expanded` mudou de `false` para `true`, Escape retornou para `false` e o foco permaneceu no `.menu-toggle`.
- `proposal.html` em 1440×900: sem overflow; `scrollWidth=1440`, `clientWidth=1440`; altura total 3465; erros de console: 0; requests falhos: 0.
- `proposal.html` em 390×844: sem overflow; `scrollWidth=390`, `clientWidth=390`; altura total 5256; erros de console: 0; requests falhos: 0.
- Separação: termos de proposta encontrados na produção: nenhum; `proposal.html` referenciado em `index.html`: não.
- Links/ativos: nenhum anchor interno quebrado, link local ausente ou imagem sem carregamento nos quatro cenários.
- Integridade: os quatro arquivos principais existem; a verificação também registrou bytes e estado em `screenshots/verification.json`.

A captura do site original foi feita separadamente com `capture-original.cjs`, aguardando `networkidle` e mais 5 segundos. O original tentou enviar requisições ao Google Analytics; o endpoint externo foi abortado pelo ambiente headless. Isso está preservado nos arquivos `screenshots/original/*-errors.txt` e não afeta os assets locais.

## Evidência visual

- Original desktop/mobile after settling: `screenshots/original/`.
- Produção desktop/mobile, viewport exato e full page: `screenshots/production/`.
- Proposta desktop/mobile, viewport exato e full page: `screenshots/proposal/`.
- Comparação atual × proposta com as imagens próximas no fluxo da proposta: `screenshots/proposal/proposal-comparison-desktop-1440x900.png` e `proposal-comparison-mobile-1440x900.png`.

## Revisão contra o gate

- Brand source prerequisite: registrado em `SOURCE_MANIFEST.md`.
- Composição: hero, grid de ocasiões, galeria de espaços, bloco de catering e contato usam ritmos diferentes.
- Mobile: menu fechado/aberto, CTA e foco visual foram exercitados em 390×844; cards de espaços têm carrossel horizontal nativo com snap.
- Contraste: a cor de destaque é usada em CTA, linhas e eyebrow; o overlay fica limitado ao hero/catering para não achatar as imagens.
- Proposal gate: resultado/oportunidade vêm antes do apêndice; comparação atual × proposta, três prioridades, entregáveis, dependências, sequência, próximo passo explícito e disclosure estão presentes.
- Não foi feita autoaprovação. Este relatório registra execução e evidência técnica para revisão externa; não é uma autorização de publicação nem deploy.

## Limites

A proposta visual não confirma que o conteúdo do site original permanece atual depois da captura. Antes de qualquer publicação, a equipe responsável deve reconfirmar telefones, WhatsApp, e-mail, links sociais, imagens, capacidades, serviços, status dos espaços e o fluxo comercial.
