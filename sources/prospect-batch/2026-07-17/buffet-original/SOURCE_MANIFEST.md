# SOURCE_MANIFEST.md

## Identidade e origem

- Negócio: Buffet Original
- Domínio oficial verificado: http://www.buffetoriginal.com.br/ (HTTP) e https://www.buffetoriginal.com.br/ (HTTPS respondendo)
- Página oficial observada: https://www.buffetoriginal.com.br/
- Data da captura original: 17/07/2026
- Endereço publicado no site oficial: Rua Coronel Adyr Guimarães, 288, Ahú, Curitiba/PR, CEP 82200-510.
- Fonte de contato oficial: https://www.buffetoriginal.com.br/contato.php
- Fonte de orçamento oficial: https://www.buffetoriginal.com.br/orcamento.php
- Fonte social pública: https://www.instagram.com/buffetoriginal/
- Fonte pública de contexto: https://www.casamentos.com.br/buffet-casamento/buffet-original--e98619
- Fonte pública de listagem: https://restaurantguru.com.br/Buffet-Original-Curitiba

## Evidência textual usada

- Headline preservada literalmente do site oficial: “Todos os momentos são únicos. Alguns são inesquecíveis.”
- O site oficial publica as ocasiões: casamentos; aniversários/festas de 15 anos; formaturas e colações; eventos empresariais e sociais.
- O site oficial publica três espaços: Rotary Club, Salão Nobre e Salão Boliche.
- Capacidades usadas somente porque aparecem nas páginas/conteúdo oficial capturado: Salão Nobre até 700 convidados; Rotary Club até 450 convidados; Salão Boliche até 70 convidados.
- O site oficial publica catering como opção para levar a estrutura ao local do evento.
- Telefones usados conforme a página oficial de contato capturada: (41) 3252-5161; (41) 3029-2177; WhatsApp (41) 99904-4115.
- Não foram usados preços, cardápios, clientes, depoimentos, datas de eventos, disponibilidade, nomes de equipe, awards ou métricas não confirmados.

## Ativos locais oficiais

Todos os arquivos abaixo foram baixados do domínio oficial em 17/07/2026 e armazenados em `assets/original/`.

| Arquivo local | URL oficial de origem | Uso |
|---|---|---|
| `logo.png` | `https://www.buffetoriginal.com.br/images/logo.png` | marca no cabeçalho |
| `logo_shaped.png` | `https://www.buffetoriginal.com.br/images/logo_shaped.png` | variante de marca de fallback |
| `txt-home.png` | `https://www.buffetoriginal.com.br/images/txt-home.png` | referência preservada; não é carregada na produção |
| `hero-50.jpg` | `https://www.buffetoriginal.com.br/fotos/1-100/dAlbumFoto-50-1.jpg` | hero de produção |
| `hero-194.jpg` | `https://www.buffetoriginal.com.br/fotos/101-200/dAlbumFoto-194-1.jpg` | seção catering |
| `hero-790.jpg` | `https://www.buffetoriginal.com.br/fotos/701-800/dAlbumFoto-790-1.jpg` | asset oficial de referência |
| `espaco-rotary.jpg` | `https://www.buffetoriginal.com.br/images/espaco-rotary.jpg` | card Rotary Club |
| `espaco-nobre.jpg` | `https://www.buffetoriginal.com.br/images/espaco-nobre.jpg` | card Salão Nobre |
| `espaco-boliche.jpg` | `https://www.buffetoriginal.com.br/images/espaco-boliche.jpg` | card Salão Boliche |
| `icon-cake-wedding.png` | `https://www.buffetoriginal.com.br/images/icon-cake-wedding.png` | referência de categoria |
| `icon-cake-birth.png` | `https://www.buffetoriginal.com.br/images/icon-cake-birth.png` | referência de categoria |
| `icon-graduation.png` | `https://www.buffetoriginal.com.br/images/icon-graduation.png` | referência de categoria |
| `icon-party.png` | `https://www.buffetoriginal.com.br/images/icon-party.png` | referência de categoria |

## Gate de marca e direção

- Cores observadas no CSS/site oficial: marrom dourado `#866114`, amarelo de destaque `#f2c720`, fundo creme `#faf2e7`, texto escuro `#241d15`.
- Tipografia observada: Roboto Condensed para navegação/corpo, com headline caligráfica em asset de imagem. A produção usa substitutos locais: Arial Narrow/Roboto Condensed local para corpo e Georgia para a headline editorial, evitando dependência externa.
- Personalidade atual em três palavras: dourada, acolhedora, celebratória.
- Equidade preservada: logo dourado, amarelo de destaque, headline oficial, fotografia quente, foco em ocasiões e espaços em Curitiba.
- Fragilidades não copiadas: navegação comprimida, contraste baixo dos atalhos sobre o hero, home rasa, pouca contextualização dos espaços e CTA de orçamento pouco hierarquizado.
- Tese: “Este conceito só pode pertencer ao Buffet Original porque transforma a sua própria assinatura — momentos únicos/inesquecíveis, fotografia quente e três espaços nomeados — em uma jornada editorial por ocasião, ambiente e orçamento.”
- Ideia composicional: uma faixa dourada contínua costura hero, categorias, espaços e contato.
- Regra de tratamento: fotografias oficiais em recortes amplos, sem watermark ou screenshot social, com overlay apenas para legibilidade.
- Promessa emocional usada: tornar mais clara a passagem de ocasião para espaço e, então, para orçamento, sem alegar resultado comercial.
- Conversão: CTA primário aponta para a página oficial de orçamento; telefone, WhatsApp, endereço e Instagram aparecem em contato.

## Capturas e verificação

- Original após carregamento/settling: `screenshots/original/original-desktop-1440x900.png`, `original-mobile-1440x900.png`, e versões full.
- Produção: `screenshots/production/index-desktop-1440x900.png`, `index-mobile-1440x900.png`, e versões full.
- Proposta: `screenshots/proposal/proposal-desktop-1440x900.png`, `proposal-mobile-1440x900.png`, versões full e comparações `proposal-comparison-*`.
- A captura original teve apenas falhas de requisição do endpoint externo do Google Analytics em ambiente headless; nenhum asset oficial local falhou. A produção e a proposta não carregam analytics externo e foram verificadas sem erros.
## Fonte dos ícones de interface

- Setas e ícones de ocasião em `assets/icons/` são ativos regulares do `@phosphor-icons/core`, armazenados localmente e renderizados por máscara CSS. Eles substituem glifos Unicode dependentes da plataforma sem adicionar CDN em runtime.

