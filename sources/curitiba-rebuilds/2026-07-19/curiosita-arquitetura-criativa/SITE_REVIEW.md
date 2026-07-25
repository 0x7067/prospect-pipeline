# SITE_REVIEW — Curiosità Arquitetura Criativa (direção visual inicial)

Autoavaliação honesta do build, executada pelo construtor em 19/07/2026.
Nível de entrega: **early_visual_direction** — não marcado como completo
para produção nem pronto para publicação. O construtor não pode
autoaprovar revisões posteriores; este documento registra observações,
não uma aprovação.

## Tese composicional

> Este conceito só pode pertencer à Curiosità porque a página é desenhada
> como uma **leitura de planta de uma escola**: um eixo vertical com
> marcadores de estação conduz o gestor escolar da pergunta concreta da
> sua escola ao caminho técnico correspondente — e a jornada termina numa
> conversa prática no Capão Raso. A linguagem pública verificada do
> escritório (“O projeto de uma escola deve ser pensado além da estética”,
> “Experiência + Técnica = Confiança”) ancora os dois momentos de maior
> contraste.

## Sistema

- **Composição:** linha de projeto (plan-line) com 5 estações de decisão;
  alternância pergunta (itálico serifado) / resposta (técnica) no desktop;
  eixo à esquerda com números de estação no mobile.
- **Tipografia:** Spectral (display, 300/300i/500/600) × Archivo (texto,
  400/500/600) — par editorial/técnico, nenhum dos dois na lista de
  reflexos rejeitados da skill.
- **Cor:** estratégia Restrained em papel claro com matiz do verde-semente
  (OKLCH 150°); evolução deliberada papel → tinta pálida → verde profundo
  nos momentos 3 e 4; acento lima apenas sobre verde escuro.
- **Regra de imagem:** toda foto recebe duotone na direção do verde
  (`mix-blend-mode: luminosity` e véu verde sólido sobre base verde-escura) + canto de dobra
  de planta; legendas genéricas (“Ambiente de aprendizagem”) deixam claro
  que não são projetos do escritório.
- **Movimento:** revelação discreta por IntersectionObserver; conteúdo
  visível sem JS; `prefers-reduced-motion` desativa tudo.

## Testes anti-template (6)

1. **Logo-removal:** sem o wordmark, a página ainda comunica “escritório
   técnico de arquitetura escolar” pelo eixo de planta, pelas cinco
   perguntas de gestor e pela dupla Spectral/verde. A personalidade não
   depende do logotipo. **Passa.**
2. **Competitor-swap:** um concorrente genérico de arquitetura não
   poderia trocar o nome sem redesenhar: as estações são o vocabulário de
   serviço verificado deste escritório (retrofit de fachada, adequação de
   acessibilidade, gestão ambiental), a fórmula “Experiência + Técnica =
   Confiança” e a autoria de Bruno Ronchi são dele. Um concorrente de
   arquitetura escolar de Curitiba poderia se aproximar — o que reduziria
   a nota se o swap fosse trivial; aqui exigiria reescrever metade do
   conteúdo. **Passa com ressalva registrada.**
3. **Squint:** em miniatura, o ritmo lê-se como blocos distintos: hero
   bipartido → faixa clara com eixo → bloco verde profundo com foto →
   bloco verde de contato sobre tinta pálida. Hierarquia intencional.
   **Passa.**
4. **Five-second:** quem vê declara quem é (arquitetura escolar em
   Curitiba), o que oferece (caminhos técnicos para escolas) e o que é
   memorável (a linha de planta com perguntas de gestor e o verde
   profundo). **Passa.**
5. **Below-fold:** as estações não são cartões repetidos; cada uma muda o
   lado e o peso. O momento 3 inverte para verde profundo com foto
   duotone; o momento 4 resolve o contato com a mesma convicção do hero.
   **Passa.**
6. **Mobile-native:** o mobile não é desktop empilhado: nav colapsa para
   o CTA; a foto do hero vai de borda a borda; a plan-line vira eixo à
   esquerda com números acima de cada estação; os CTAs finais ocupam
   largura total com alvos ≥ 44px. **Passa.**

## Scorecard visual (1–5, com evidência)

| Dimensão | Nota | Evidência |
|---|---:|---|
| Fidelidade à marca | 4 | Preserva especialização escolar, lente técnico-pedagógica, acessibilidade/sustentabilidade, fundador, contato direto e Curitiba; não copia layout/texto/logo originais. |
| Distintividade | 4.5 | A plan-line como interface de decisão é incomum na categoria; verificado em screenshots desktop/mobile. |
| Impacto do hero | 4.5 | Carimbo de planta + linguagem pública verificada + foto duotone; sem métricas falsas. |
| Art direction abaixo da dobra | 4.5 | Três momentos distintos (estações, princípio, conversa) com mundos visuais próprios e voz consistente. |
| Tipografia | 4 | Par deliberado, escala fluida, itálico reservado às perguntas; falta apenas um peso intermediário de Spectral para nuances. |
| Qualidade/tratamento de imagem | 3.5 | Tratamento duotone consistente e documentado, mas são banco de imagens (verificado HTTP 200), não projetos reais — limite do nível de entrega. |
| Intencionalidade mobile | 4.5 | Ritmo próprio: eixo à esquerda, foto full-bleed, CTAs full-width; validado em iframe 390px. |
| Credibilidade/prova | 3.5 | Zero invenção: contatos, endereço, serviços e fundador verificados; ausência de estudos de caso reais limita a prova (decisão honesta, não omissão). |
| Clareza de conversão | 4 | Dois caminhos claros (conversa/orçamento) por mailto + tel; falta formulário — decisão deliberada (brief proíbe submissão de formulários). |
| Persuasão da proposta | 4.5 | proposal.html é independente, evidência-led, cita os quatro problemas observados e os limites da entrega. |

Média ≈ 4.2; nenhuma dimensão abaixo de 3.5. Observação: a nota de
imagens (3.5) e prova (3.5) refletem o teto honesto de
`early_visual_direction` sem acesso a ativos reais do escritório.

## Validação em navegador (19/07/2026)

- Desktop (1280×720, navegador do harness): hero, estações, princípio e
  conversa verificados por screenshot; fontes Spectral/Archivo renderizam;
  sem overflow; contraste alto nos blocos verdes.
- Mobile (iframe 390×844): nav colapsada, foto hero edge-to-edge, eixo de
  estações à esquerda com números, bloco de contato em coluna única com
  botões full-width.
- `node --check script.js`: OK. A matriz padronizada de navegador passou em
  desktop e mobile na primeira validação; a validação final foi repetida após
  uma única correção consolidada dos alertas do detector.

## Limites conhecidos

- Fotografias de banco (URLs Unsplash verificadas), não projetos reais.
- Sem formulário de contato (mailto/tel apenas) — coerente com a proibição
  de submissão de formulários no brief.
- Sem métricas de experiência/projetos: o original exibe “0 +”; não havia
  número verificável para substituir, então nenhum contador foi usado.
- Entrega é direção visual inicial; requer validação do escritório e
  ativos reais antes de qualquer publicação.
