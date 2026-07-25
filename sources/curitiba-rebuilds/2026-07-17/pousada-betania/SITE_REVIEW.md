# Site Review — Pousada Betânia

## Visão geral

Redesign estático conceitual validado em desktop e mobile. Layout mobile-first fluido, sem overflow horizontal. Três caminhos claros (Hospedar, Reunir, Descansar) como entrada principal.

## Validação desktop (1440×900)

- Hero ocupa viewport completo com imagem de fachada e overlay escuro.
- Navegação desktop com links âncora e CTA "Reservar" visível.
- Três caminhos em grid de 3 colunas com imagens verticais.
- Seções de hospedagem, eventos, serviços, galeria, localização e contato fluem naturalmente.
- Footer escuro com logo e links.
- Sem overflow horizontal.
- Tipografia Jost (títulos) e Public Sans (corpo) carregam corretamente.

## Validação mobile (390×844)

- Header fixo com menu hambúrguer funcional.
- Hero adaptado com texto legível sobre imagem.
- Três caminhos empilhados verticalmente, imagens em proporção 4:5.
- Serviços em grid de 1 coluna.
- Galeria em coluna única.
- Contato com métodos claros e CTAs em largura total.
- Sem overflow horizontal (corrigido em relação ao original que tinha scrollWidth de 980px).
- Touch targets mínimos de 44×44px.

## Acessibilidade

- Contraste WCAG AA para corpo de texto (≥ 4.5:1).
- Anúncios ARIA em seções e navegação.
- Foco visível com `:focus-visible` usando cor verde escuro.
- Navegação por teclado funcional.
- Menu mobile com `aria-expanded` e fechamento por Escape.
- Imagens com alt text descritivo.
- Semântica HTML5 com landmarks (`header`, `main`, `footer`, `nav`, `section`, `article`).

## Performance

- Imagens com `loading="lazy"` exceto hero (fetchpriority="high").
- Fontes com `font-display: swap`.
- Sem dependências JavaScript externas.
- CSS inline no `<head>`, sem render-blocking.

## Diferenças em relação ao original

| Aspecto | Original | Redesenho |
|---------|----------|-----------|
| Layout mobile | Overflow horizontal (980px em 390px) | Fluid, sem overflow |
| Navegação | Âncoras longas em página Wix | Três caminhos claros + âncoras contextuais |
| CTA de reserva | Desconectado do contexto | Repetido em cada caminho relevante |
| Galeria | Miniaturas pequenas | Imagens em escala humana |
| Tipografia | Arial/Brandon Grot | Jost/Public Sans (substituições gratuitas) |
| Erros editoriais | "área vede externa", pontuação inconsistente | Texto revisado e editado |
