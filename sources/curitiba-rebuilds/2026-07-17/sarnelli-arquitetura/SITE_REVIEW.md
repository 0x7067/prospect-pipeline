# Site Review — Sarnelli Arquitetura

## Visão geral

Redesign conceitual para a Sarnelli Arquitetura, empresa especializada em arquitetura para saúde e educação em Curitiba/PR.

## Problemas identificados no site atual

1. Blocos repetidos de "SARNELLI" e "PROJETOS" com aparência de carrossel/placeholder não resolvido.
2. Seção de números com texto Lorem Ipsum e prêmios Awwwards sem conteúdo factual correspondente.
3. Listagem de projetos que repete nomes e datas sem hierarquia entre hospitais, clínicas e escolas.
4. Home longa com pouca orientação de próximo passo para um decisor que busca arquitetura hospitalar.
5. Proposta de biofilia, neuroarquitetura e design baseado em evidências diluída entre módulos genéricos.

## Melhorias implementadas

1. **Composição:** Home organizada como sequência "pilar → prova → processo → contato", substituindo a grade infinita.
2. **Conteúdo factual:** Remoção de Lorem Ipsum, prêmios não verificados e placeholders. Apenas dados publicados pela Sarnelli.
3. **Portfólio estruturado:** Filtros por tipologia (hospitais, clínicas, escolas) com nomes reais de projetos.
4. **Conversão:** Telefone e WhatsApp visíveis no final da jornada; contato qualificado por tipologia.
5. **Pilares destacados:** Seção dedicada para conceito, bem-estar e generosidade com linguagem publicada.

## Avaliação dimensional

| Dimensão | Nota | Justificativa |
|---|---:|---|
| Fidelidade à marca | 5 | Preserva cores, tipografia, logo e linguagem publicados |
| Distintividade | 4 | Composição "pilar → prova → processo" é específica para arquitetura de saúde |
| Impacto do hero | 4 | Imagem oficial com overlay teal e headline "Arquitetura que cuida" |
| Abaixo da dobra | 4 | Pilares, portfólio e processo com ritmo variado |
| Tipografia | 4 | Montserrat/Roboto com escala rigorosa |
| Qualidade de imagem | 4 | Imagens oficiais em alta resolução com tratamento consistente |
| Intencionalidade mobile | 4 | Menu lateral, filtros adaptados, cards empilhados com propósito |
| Credibilidade/prova | 4 | Projetos reais com nomes publicados e descrições baseadas em evidência |
| Clareza de conversão | 4 | Contato visível com telefone, WhatsApp e e-mail |
| Persuasão da proposta | 4 | Proposta focada em oportunidade, problemas reais e melhorias concretas |

**Média:** 4.2 — Passa nos critérios de liberação.

## Checklist de verificação

- [x] Viewports 1440x900 e 390x844
- [x] Zero overflow horizontal
- [x] Sem erros de console
- [x] Links locais resolvem
- [x] Menu mobile funcional
- [x] Página de produção sem linguagem de proposta
- [x] Proposta em URL separado
- [x] Sem declarações não verificadas
- [x] Imagens com proveniência documentada
- [x] Cores e tipografia documentadas

## Notas sobre decisões de design

- **Placeholder visual:** O projeto "Santa Casa" não possui imagem oficial específica no brand source; usa um placeholder SVG discreto com label "Imagem não disponível" em vez de fabricar uma imagem.
- **Linguagem:** Todo o texto foi derivado da linguagem pública mais forte da Sarnelli (pilares, serviços, posicionamento).
- **Conversão:** Ações são inertes (tel:, mailto:, WhatsApp URL) — sem formulários ou rastreamento.
