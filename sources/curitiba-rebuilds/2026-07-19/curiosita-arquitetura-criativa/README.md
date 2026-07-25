# Curiosità Arquitetura Criativa — redesign conceitual (site estático)

Conceito de redesign do site da Curiosità Arquitetura Criativa, produzido de
forma independente e não afiliada, dentro do pipeline de prospecção de
Curitiba. Este diretório contém uma **direção visual inicial**
(`early_visual_direction`) — não um site pronto para publicação.

## Arquivos

| Arquivo | Papel |
|---|---|
| `index.html` | Página principal do conceito (voz de produção, realista, em pt-BR) |
| `proposal.html` | Documento de vendas independente e persuasivo, explicitamente não afiliado |
| `rationale.html` | Redirecionamento compatível para `proposal.html` |
| `styles.css` | Sistema visual completo (tokens OKLCH, tipografia, layout, responsivo) |
| `script.js` | Revelação discreta ao rolar (progressiva; a página não depende de JS) |
| `SITE_REVIEW.md` | Autoavaliação honesta (testes anti-template, notas visuais) |
| `SOURCE_MANIFEST.md` | Inventário de evidências e fontes usadas |

## Tese composicional

A escola como interface: a página é uma leitura de planta. Uma linha de
projeto (eixo vertical com marcadores de estação) liga quatro momentos
art-dirigidos:

1. **Caderno de projeto** — hero composto como carimbo/título de planta,
   com a linguagem pública verificada “O projeto de uma escola deve ser
   pensado além da estética.”
2. **Caminhos de intervenção** — as oito frentes de serviço organizadas
   como estações de decisão (pergunta do gestor → caminho técnico), não
   como grade de cartões.
3. **Princípio** — bloco em verde profundo com a fórmula pública
   “Experiência + Técnica = Confiança” e a autoria do arquiteto Bruno Ronchi.
4. **Conversa** — bloco de contato em verde profundo com dobra de planta,
   telefone, e-mail e endereço verificados.

## Sistema visual

- **Tipografia:** Spectral (display, pesos 300–600) + Archivo (texto/UI,
  400–600), servidas via Fontsource/jsDelivr com `font-display: swap`.
- **Cor:** estratégia Restrained em papel claro com matiz do verde-semente
  (OKLCH 150°); o verde primário aprofunda ao longo da página até o bloco
  final em verde técnico escuro. Acento cítrico (lima) reservado a
  marcações e CTAs sobre verde.
- **Regra de imagem:** toda fotografia recebe tratamento duotone na
  direção do verde da marca (`mix-blend-mode: luminosity` e véu sólido sobre base
  verde-escura) + canto de dobra de planta; nunca foto crua, nunca
  cenário decorativo em CSS.
- **Movimento:** apenas revelação discreta via IntersectionObserver,
  desativada com `prefers-reduced-motion` e ausente sem JS.

## Executar localmente

Sirva o diretório com qualquer servidor estático, por exemplo:

    python3 -m http.server 8000

e abra `http://localhost:8000/`.

## Limites

- Nível de entrega: `early_visual_direction`. Não marcar como completo
  para produção nem pronto para publicação.
- As fotografias são de banco de imagens (Unsplash, URLs verificadas em
  19/07/2026); um site real usaria imagens dos projetos do escritório.
- Nenhuma métrica, depoimento ou estudo de caso foi inventado.
