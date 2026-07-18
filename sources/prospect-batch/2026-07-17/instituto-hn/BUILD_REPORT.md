# Relatório de construção — Instituto HN

Data: 17/07/2026
Escopo: somente `/opt/data/projects/prospect-batch/2026-07-17/instituto-hn`. Nenhum deploy, contato ou alteração fora desta pasta foi realizado.

## Entrega

- `index.html` — produção, em português, sem linguagem de proposta, redesign, disclosure ou link para `proposal.html`.
- `proposal.html` — documento independente, com `noindex,nofollow,noarchive`, visual atual versus proposto, diagnóstico, três melhorias, entregáveis, dependências, sequência, próximo passo e disclosure compacto.
- `styles.css` — sistema visual responsivo; contraste azul petróleo/coral/papel/areia; navegação, hero, catálogo, jornada, localização e contato.
- `script.js` — menu móvel acessível: estado `aria-expanded`, fechamento por clique nos links e tecla Escape.
- `assets/` — seis imagens baixadas do domínio oficial; origens e uso descritos em `SOURCE_MANIFEST.md`.
- `evidence/` — capturas atuais e propostas em desktop/mobile, além da captura da proposta.
- `tests/verify.mjs` e `package.json` — verificação reproduzível com Playwright local.
- `SHA256SUMS.txt` — evidência SHA-256 dos arquivos revisados, ativos locais, capturas e teste.

## Limites factuais aplicados

O catálogo reúne os doze temas encontrados na homepage oficial e destaca apenas Toxina Botulínica e Ultrassonografia na harmonização com links para páginas oficiais. A página de Ultrassonografia ainda mostra uma data de 2023, portanto ela não foi apresentada como turma atual. Datas, vagas, duração, carga horária, investimento, credenciais, acreditação, resultados, depoimentos e disponibilidade foram explicitamente deixados como “a confirmar” ou omitidos. Não foram inventados profissionais, certificados, registros, depoimentos, garantias ou disponibilidade.

A única correção textual foi `venenoso` → `venoso` no contexto de coleta de sangue, registrada no manifesto de fontes.

## Verificações executadas

Comando:

```text
npm test
```

Resultado observado: processo 0, verificação Playwright concluída.

- Produção desktop: 1440×900, sem overflow, console errors ou requests falhos; `lang=pt-BR`.
- Produção mobile: 390×844, sem overflow, console errors ou requests falhos; `lang=pt-BR`.
- Site atual desktop: 1440×900, sem overflow, console errors ou requests falhos; captura salva.
- Site atual mobile: 390×844, sem overflow, console errors ou requests falhos; captura salva.
- Proposta desktop: 1440×900, sem overflow, console errors ou requests falhos; `lang=pt-BR`.
- Proposta mobile: 390×844, sem overflow, erros de console ou requisições falhas; `lang=pt-BR`.
- Proposta: meta robots observada como `noindex,nofollow,noarchive`.
- Menu móvel: recebeu foco e abriu por teclado com Enter, expôs `aria-expanded="true"`, fechou com Escape e voltou ao estado fechado.
- As imagens locais e `script.js` foram carregados sem falhas nas páginas testadas.
- Auditoria local: nenhum destino de âncora quebrado e nenhuma linguagem/link de proposta na homepage de produção.
- Resultado estruturado: `evidence/test-results.json`.

Verificação adicional de integridade:

```text
sha256sum -c SHA256SUMS.txt
```

Resultado observado: todas as entradas listadas retornaram `OK`.

## Capturas

- `evidence/current-home-desktop.png`
- `evidence/current-home-mobile.png`
- `evidence/proposed-desktop.png`
- `evidence/proposed-mobile.png`
- `evidence/proposal-desktop.png`
- `evidence/proposal-mobile.png`

As capturas atuais documentam a página pública acessível no momento da execução; os problemas narrados no prospecto estão datados de 15/07/2026 e podem mudar.

## Revisão do gate visual

O conceito foi revisado nos dois viewports antes do fechamento. Pontuação de construção contra o gate (avaliação de qualidade, não autorização de publicação): fidelidade de marca 4/5; distinção 4/5; impacto do hero 4/5; direção abaixo da dobra 4/5; tipografia 4/5; tratamento de imagem 4/5; intenção mobile 4/5; credibilidade/prova 4/5; clareza de conversão 4/5; persuasão da proposta 4/5. Média: 4,0/5, sem dimensão abaixo de 3. O catálogo integral em painel editorial foi adicionado após a primeira revisão para evitar uma oferta visualmente forte, porém factual e comercialmente incompleta.

O material não foi autoaprovado para publicação. A aprovação factual, de marca, jurídica e operacional continua listada como dependência na proposta.

## Observação de publicação

`proposal.html` deve permanecer fora do caminho público de produção ou ser servido apenas como material privado. Mesmo assim, a própria página contém noindex/nofollow/noarchive. `index.html` não referencia a proposta e não contém sua linguagem comercial ou de disclosure.
