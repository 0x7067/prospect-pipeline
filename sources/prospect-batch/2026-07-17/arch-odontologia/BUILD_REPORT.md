# BUILD REPORT — Arch Odontologia

**Data:** 17/07/2026  
**Workspace:** `/opt/data/projects/prospect-batch/2026-07-17/arch-odontologia`  
**Status:** **concluído e verificado localmente**  
**Deploy:** não realizado (fora do escopo)

## 1. Resultado entregue

Foi construída uma nova experiência institucional completa para a Arch Odontologia, em português, com:

- página de produção responsiva em `index.html`;
- proposta comercial/estratégica claramente separada em `proposal.html`;
- ativos oficiais baixados e otimizados localmente em `assets/official/`;
- manifesto rastreável de fatos e imagens em `SOURCE_MANIFEST.json`;
- checksums SHA-256 dos ativos em `ASSET_CHECKSUMS.sha256`;
- evidências visuais do site atual e da solução proposta em `evidence/`;
- teste automatizado reproduzível em `tests/verify.js`;
- resultado estruturado da verificação em `evidence/proposed/verification-results.json`.

## 2. Direção de marca e experiência

A solução preserva os principais sinais da identidade oficial:

- azul profundo, branco quente e acentos metálicos/dourados;
- símbolo e fotografias da clínica fornecidos pelo site oficial;
- equilíbrio entre linguagem clínica, elegância e proximidade;
- tipografia serifada de destaque, combinada com fonte de sistema para leitura rápida;
- uso de fotografias reais da clínica e da equipe, sem banco de imagens gerado ou identidade inventada.

A hierarquia foi reorganizada para responder rapidamente a quatro perguntas do paciente:

1. O que a Arch oferece?
2. Onde a clínica está?
3. Quem atende?
4. Como iniciar o contato?

## 3. Estrutura da página de produção

`index.html` contém:

1. barra de contato/localização;
2. navegação principal visível em desktop;
3. hero com posicionamento, telefone e CTA de tratamentos;
4. apresentação da clínica e destaque para estacionamento;
5. seis áreas de tratamento;
6. método de atendimento em quatro etapas;
7. equipe com quatro profissionais e registros confirmados quando disponíveis;
8. nota ética sobre indicação e variação de resultados;
9. contato com telefone, e-mail, endereço e mapa;
10. rodapé informativo e CTA flutuante de ligação.

A página não depende de JavaScript nem de CDN para renderizar. O CSS de produção está no arquivo local `styles.css` e todas as imagens de produção são locais.

## 4. Pesquisa e integridade de conteúdo

### Fontes primárias

- site oficial: `https://www.archodontologia.com/`;
- página oficial da equipe;
- páginas oficiais de Invisalign, lentes de contato e clínica em Curitiba;
- imagens oficiais hospedadas no CDN Wix da Arch.

### Registros profissionais

Foram publicados somente números que puderam ser associados de forma inequívoca ao profissional correspondente em fonte pública:

- Dra. Luana Delmonego — CRO-PR 20.055;
- Dr. Felipe Mussi — CRO-PR 22.293;
- Dr. Fábio Santos — CRO-PR 30.116.

O registro do Dr. Juarez Garcia não foi localizado com segurança durante a pesquisa; por isso a página exibe apenas “Cirurgião-dentista”, sem inventar um número.

### Contato

A versão demonstrativa usa somente dados confirmados no site oficial:

- telefone: (41) 3022-2999;
- e-mail: contato@archodontologia.com;
- endereço: Avenida Sete de Setembro, 5739, 2º andar — Batel, Curitiba.

O WhatsApp não foi publicado porque as fontes públicas apresentaram números divergentes. A confirmação direta com a clínica permanece uma dependência de pré-publicação.

### Diretrizes éticas

- nenhuma promessa de resultado;
- nenhum depoimento inventado;
- nenhum preço ou condição comercial não confirmada;
- indicação de tratamento condicionada à avaliação clínica;
- linguagem informativa, sem superlativos absolutos ou garantias.

## 5. Diagnóstico documentado do site atual

As capturas do site atual mostram:

- cookie banner cobrindo parte relevante do hero;
- título principal cortado e de baixa legibilidade;
- CTA de agendamento pouco evidente no primeiro impacto;
- grandes áreas vazias em galeria e profissionais;
- conteúdo e formulários com largura fixa no celular;
- rolagem horizontal/viewport não responsivo: a captura mobile de página completa expandiu para **980 px** mesmo com viewport solicitado de **390 px**;
- hierarquia visual e percurso de contato dispersos.

Evidências:

- `evidence/current/current-desktop-full.png` — 1440 × 7469;
- `evidence/current/current-mobile-full.png` — 980 × 7469, evidenciando overflow horizontal;
- `evidence/current/current-mobile-viewport.png` — 390 × 844, visão real recortada no celular.

## 6. Verificação real

### Ambiente

- servidor local: `python3 -m http.server 4173 --bind 127.0.0.1`;
- navegador: Chromium headless via Playwright;
- viewports verificados: 1440 × 900 e 390 × 844.

### Comando reproduzível

```bash
node tests/verify.js
```

O script inicia e encerra seu próprio servidor HTTP isolado em `127.0.0.1:43903`.

### Resultado

**PASS** em todos os três casos:

| Caso | Resultado | HTTP | Overflow | Imagens quebradas | Console/Page errors | Requests falhas |
|---|---:|---:|---:|---:|---:|---:|
| Produção desktop 1440×900 | PASS | 200 | 0 | 0 | 0 | 0 |
| Produção mobile 390×844 | PASS | 200 | 0 | 0 | 0 | 0 |
| Proposta mobile 390×844 | PASS | 200 | 0 | — | — | — |

Validações adicionais realizadas:

- título e H1 corretos;
- seis cards de tratamento;
- quatro cards de equipe;
- 12 links de telefone e um link de e-mail;
- um link de mapa;
- todos os links internos apontam para IDs existentes;
- nenhuma imagem remota no documento de produção;
- nenhuma imagem local quebrada;
- proposta identificada como “Proposta estratégica · visualização separada” e com link explícito para produção.

Resultado completo: `evidence/proposed/verification-results.json`.

### Evidências da solução proposta

- `evidence/proposed/proposed-desktop-full.png` — 1440 × 5488;
- `evidence/proposed/proposed-mobile-full.png` — 390 × 9738;
- `evidence/proposed/proposal-desktop-full.png` — 1440 × 4493;
- dimensões e tamanhos: `evidence/SCREENSHOT_INDEX.json`.

A revisão visual detectou inicialmente que os retratos com `loading="lazy"` não apareciam na captura mobile de página completa. O defeito de evidência/renderização foi corrigido removendo o lazy loading desses quatro retratos; a captura foi refeita e confirma todos os profissionais visíveis.

## 7. Critérios do Brand/Style Gate

| Critério | Status | Evidência |
|---|---|---|
| Marca reconhecível e preservada | PASS | símbolo, paleta e ativos oficiais |
| Sem redesign genérico ou template evidente | PASS | direção editorial e clínica específica |
| Hero direto e orientado à conversão | PASS | mensagem, telefone e tratamentos no primeiro viewport |
| Navegação principal visível em desktop | PASS | quatro links + CTA no cabeçalho |
| Endereço, telefone e acesso ao mapa | PASS | hero/topline/contato |
| CTA repetido nos momentos de decisão | PASS | hero, tratamentos, contato e botão flutuante |
| Responsividade 390 px | PASS | teste sem overflow + screenshot |
| Imagens oficiais e locais | PASS | `assets/official/` + manifesto/checksums |
| Ética odontológica | PASS | sem garantias; aviso de avaliação clínica |
| Proposta separada da produção | PASS | `proposal.html` rotulada e `noindex` |
| Rastreabilidade | PASS | `SOURCE_MANIFEST.json` |
| Verificação reproduzível | PASS | `tests/verify.js` e JSON de resultado |

## 8. Pendências de pré-publicação

Estas pendências não bloqueiam a demonstração, mas devem ser resolvidas antes de um deploy oficial:

1. confirmar o WhatsApp oficial diretamente com a clínica;
2. confirmar CRO da pessoa jurídica e responsável técnico para o rodapé legal definitivo;
3. confirmar todos os registros individuais que a clínica deseja publicar;
4. fornecer política de privacidade/LGPD e configuração de consentimento, caso sejam adicionados analytics, pixels ou formulários;
5. aprovar texto, imagens e direitos de uso com a clínica;
6. definir infraestrutura, domínio e analytics — nenhum deles foi alterado nesta entrega.

## 9. Arquivos principais

```text
index.html
proposal.html
SOURCE_MANIFEST.json
ASSET_CHECKSUMS.sha256
BUILD_REPORT.md
assets/official/
  logo.png
  clinic-hero.webp
  clinic-room.webp
  smile.webp
  luana.webp
  juarez.webp
  felipe.webp
  fabio.webp
evidence/
  SCREENSHOT_INDEX.json
  current/
  proposed/
tests/
  README.md
  verify.js
```

## 10. Observações de execução

- O workspace não é um repositório Git; nenhuma operação de commit foi possível ou necessária.
- O runner `@playwright/test` não estava instalado. A verificação foi implementada diretamente com a API Chromium já disponível do Playwright, sem instalar dependências e com resultado persistido.
- Nenhuma pasta irmã foi modificada.
- Nenhum deploy foi realizado.
