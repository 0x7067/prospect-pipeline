# Manifesto de fontes — Lizon Curitiba Hotel

Data-base do conteúdo: 18/07/2026. Escopo: fatos públicos usados na reconstrução especulativa deste diretório. Nenhum contato, formulário ou publicação foi realizado.

## Hierarquia de fontes

1. **Fontes autorizadas de fatos do negócio:** `prospect.json`, `PRODUCT.md` e `BRAND_SOURCE.md`. `AFK_NATIVE_TASK.md` restringe explicitamente toda alegação específica do negócio a estas fontes.
2. **Evidência visual local:** as capturas originais e as fotografias oficiais abaixo sustentam análise visual, recorte e texto alternativo, mas não autorizam alegações de negócio ausentes de (1).
3. **Fontes de processo/design:** `DESIGN.md` e `PROSPECT_BRAND_STYLE_GATE.md` orientam o sistema visual e o portão de publicação; não são evidência sobre o hotel.

## Documentos locais

| Arquivo | SHA-256 | Papel |
|---|---|---|
| `prospect.json` | `3af7fd3df9115246df2f11b603d3a3c967ac689ce7cfb2aceecb12f83dd73608` | Fonte primária: nome, URL oficial, problemas documentados, ângulo de reconstrução, tese conceitual, evidências ativas, links de evidência, brand_source completo, tier de entrega |
| `PRODUCT.md` | `39eefead40de572b842f7a6e741283d7b8f9d817409918cd931eaf5db55d7142` | Fronteira de evidência e voz de produção/proposta |
| `BRAND_SOURCE.md` | `1252f4b522b7704e9ccbfcb5dc10e28a79e7499c708c486a45cab45dbb722087` | Fonte estruturada de marca: logos, cores, tipografia, palavras de personalidade, linguagem pública mais forte, serviços, localização, contatos, ativos visuais, equity a preservar, fraquezas a não copiar |
| `DESIGN.md` | `a37d59655cc2ae46487f8e4ecf20ef4f79567bdde8d429f40d95eec73ad8c68a` | Sistema de design seed e barra de qualidade exigida |
| `AFK_NATIVE_TASK.md` | `45105e5afd9d864dcb74fb1140a1ab212337f40282c99ce5e85822dbd1de84f8` | Escopo do build, arquivos obrigatórios, orçamento de velocidade, sequência de validação |
| `PROSPECT_BRAND_STYLE_GATE.md` | `d56c0bb5c23e51da7f521f70fb0c95067ff625deae6c7ba16f2de0f8ed032723` | Checklist de marca/estilo e testes anti-template |

## Evidência ativa citada em prospect.json

> "Official homepage returned HTTP 200 and rendered on 2026-07-18; official page states the hotel is in Centro, offers rooms for 1–4 people, restaurant, events, 24h reception and lists reservation/event phones."

Links de evidência (todos apontam ao domínio oficial do hotel; nenhum foi recontatado nesta sessão):

- https://lizon.com.br/
- https://lizon.com.br/apartamentos
- https://lizon.com.br/restaurante
- https://lizon.com.br/eventos
- https://lizon.com.br/termos-e-condicoes

## Capturas originais (antes/depois de carregadores e animações assentarem)

| Arquivo | Viewport | SHA-256 |
|---|---|---|
| `original-captures/original-desktop.png` | 1440×900 | `ba94e0bdf4bc9dfd6e9aaf6f51418355dfc74e809aea6520f9f8de7ae135d3cd` |
| `original-captures/original-mobile.png` | 390×844 | `468bf7c2e23ba46c829cf57a3f63878bdcf23573e09539d2d6cf660b5e19376f` |

Ambas as capturas registram `title: "LIZON CURITIBA HOTEL"`, `final_url: "https://www.lizon.com.br/"`, e as mesmas três falhas de requisição de terceiros (chatbot Omnibees e métricas de performance) documentadas em `original-desktop.json`/`original-mobile.json` — não usadas como evidência de conteúdo, apenas registradas como estado real da página no momento da captura.

## Ativos visuais usados na reconstrução

Todos abaixo são referenciados em `brand_source.visual_assets` de `prospect.json`/`BRAND_SOURCE.md` (URLs no domínio `lirp.cdn-website.com`, CDN do site oficial). Nenhuma licença de reuso separada foi localizada; presença no workspace estabelece proveniência para este conceito local, não autorização de publicação.

| Arquivo local | SHA-256 | Uso na página |
|---|---|---|
| `assets/logo-mark.png` | `4aacc71cb5b7162c77938931f1b922bf3816be4fa30658f5e5cdcd6454a6d3a3` | Marca no cabeçalho e rodapé |
| `assets/logo-white.png` | `04cd3dc34868d34dbb9cb3f594350aba1fa7c2c5872363d0aa12ddef7741f3bd` | Variante de marca clara (não referenciada no HTML atual; mantida como ativo de reserva) |
| `assets/lobby-worldmap.jpg` | `a4e3a4743bbf8e657297f265fb9b695df48635bc420c46096ef796c5934cbcb1` | Imagem de fundo do hero (chegada) |
| `assets/suite-jacuzzi.jpg` | `4a8c4df7382d9f91fc3c91348998f5a155ad3034f9e2657d57877925ccb28566` | Seção de hospedagem |
| `assets/event-hall.jpg` | `09565550f4026a1fc8b561d6a6cf1128ee15b1b8b5da0a26da18d0236d937c9d` | Seção de eventos (também usada em `proposal.html`) |
| `assets/breakfast-room.jpg` | `e4ce924bb4f6ce518d838b27949e37db76f4b6316355a8b3f7691db320a01bfc` | Seção de restaurante (salão) |
| `assets/dish-shrimp.jpg` | `bc7a925a713149f2beeb1c7cb108588812604685b032b240817b0d9d7838cd94` | Seção de restaurante (prato) |

Tipografia self-hosted (`assets/fonts/`): Bricolage Grotesque (display) e Libre Franklin (operacional), arquivos `.woff2` locais sem dependência de host externo — ver `assets/fonts/fonts.css`.

## Alegações não utilizadas / fora do limite

Nenhum preço, disponibilidade, calendário, avaliação, certificação, prêmio ou dado de equipe foi incluído: nenhum destes campos existe em `prospect.json`/`BRAND_SOURCE.md`. A lista de serviços em `index.html` (hospedagem, restaurante, eventos, salas de reunião, room service, recepção 24h, estacionamento) reproduz exatamente `brand_source.services`; nenhum serviço foi inferido ou adicionado.

## Informações não localizadas em fonte autorizada

- Categorias, preços e disponibilidade por tipo de quarto.
- Capacidade exata das salas de evento.
- Direitos de uso das fotografias do hotel.
- Política de cancelamento.

Estes itens permanecem ausentes do conteúdo público até nova fonte autorizada; `proposal.html` já lista este mesmo conjunto em "Antes de publicar: o que precisa de confirmação".
