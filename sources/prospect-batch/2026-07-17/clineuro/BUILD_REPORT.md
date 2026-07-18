# BUILD_REPORT — CLINEURO Clínica do Sistema Nervoso

Data da execução: 17/07/2026
Workspace: `/opt/data/projects/prospect-batch/2026-07-17/clineuro`
Status: build local concluído e verificado; não implantado, não publicado e nenhum contato realizado.

## Entrega

- `/opt/data/projects/prospect-batch/2026-07-17/clineuro/index.html` — homepage de produção em português.
- `/opt/data/projects/prospect-batch/2026-07-17/clineuro/proposal.html` — documento independente, estruturalmente separado e `noindex, nofollow`.
- `/opt/data/projects/prospect-batch/2026-07-17/clineuro/styles.css` — estilos responsivos.
- `/opt/data/projects/prospect-batch/2026-07-17/clineuro/script.js` — menu móvel acessível; nenhum formulário ou comportamento clínico inventado.
- `/opt/data/projects/prospect-batch/2026-07-17/clineuro/assets/` — somente ativos baixados do domínio oficial.
- `/opt/data/projects/prospect-batch/2026-07-17/clineuro/SOURCE_MANIFEST.md` — fontes, limites e direção visual.
- `/opt/data/projects/prospect-batch/2026-07-17/clineuro/verify_playwright.cjs` — verificação reproduzível.

## Evidência atual versus direção

A homepage oficial foi lida diretamente em `https://clineuro.com/` e respondeu HTTP 200 por HTTPS. As capturas atuais estão em `evidence-current-desktop-1440x900.png`, `evidence-current-mobile-390x844.png` e respectivas versões full-page. A direção proposta está em `evidence-proposed-desktop-1440x900.png`, `evidence-proposed-mobile-390x844.png` e respectivas versões full-page. A proposta comercial independente está em `evidence-proposal-desktop-1440x900.png` e `evidence-proposal-full.png`.

A leitura atual confirmou uma página centrada em contato, endereço, horário e identificação institucional. `robots.txt` e `sitemap.xml` retornaram 404 na verificação direta. O novo `index.html` não replica linguagem de proposta, redesign, divulgação independente ou links para `proposal.html`.

## Gate de marca e direção

| Critério | Nota | Justificativa |
|---|---:|---|
| Fidelidade de marca | 4 | Mantém logo e imagens oficiais, áreas e canais publicados. |
| Distintividade | 4 | Sistema editorial numerado e sequência de orientação, não grade genérica. |
| Impacto do hero | 4 | Imagem oficial em faixa com contraste e título art-directed. |
| Art direction abaixo da dobra | 4 | Alternância areia/papel, lista editorial, imagem e contato escuro. |
| Tipografia | 4 | Par serif/sans de sistema com hierarquia consistente. |
| Tratamento de imagem | 4 | Ativos oficiais locais, recorte e saturação controlados. |
| Intencionalidade mobile | 4 | Menu dedicado, hero cropped, ritmo e CTA empilhados conscientemente. |
| Credibilidade/prova | 4 | Identidade, diretor técnico, CRM/RQE, CNPJ, endereço e canais oficiais. |
| Clareza de conversão | 4 | Áreas publicadas e telefone/e-mail/localização em caminho direto. |
| Persuasão da proposta | 4 | Current-versus-proposto perto do topo, melhorias, entregáveis, dependências e próximo passo. |

Média: 4,0/5. Nenhuma dimensão abaixo de 3; os limiares críticos do gate foram atendidos.

## Testes executados e resultados reais

Comando de verificação:

```bash
PLAYWRIGHT_BROWSERS_PATH="$PWD/.pw-browsers" node verify_playwright.cjs
```

Pré-requisito usado localmente: `playwright@1.61.1`, Chromium instalado em `.pw-browsers`, servidor local `python3 -m http.server 4174`.

Resultado observado:

- 1440×900: `scrollWidth=1440`, `clientWidth=1440`; âncoras locais resolvidas; console sem erros; requests sem falhas.
- 390×844: `scrollWidth=390`, `clientWidth=390`; âncoras locais resolvidas; console sem erros; requests sem falhas.
- Menu móvel: abriu com `aria-expanded=true`; fechou com Escape.
- Proposal: meta `robots="noindex, nofollow"`; título `Direção independente — CLINEURO`.
- Assets locais referenciados por `index.html`: todos existem.
- Varredura de produção: não encontrou `proposta`, `redesign`, `não oficial`, `noindex`, `disclosure` ou `independente` no texto do `index.html`.

## Segurança editorial

Não foram incluídos especialidades fora da evidência, procedimentos, diagnósticos, resultados, garantias, depoimentos, emergência, disponibilidade, profissionais adicionais, registros adicionais ou novos contatos. O texto orienta a confirmar detalhes com a clínica e não oferece aconselhamento médico.

## Checksums

Os SHA-256 dos arquivos de publicação e evidência estão em `CHECKSUMS.sha256`. Eles foram gerados após a última alteração dos artefatos revisados.
