# Lizon Curitiba Hotel — conceito local

Status: implementação estática local concluída e detector limpo. A liberação está bloqueada porque a captura obrigatória do site oficial em 390×844 detectou overflow horizontal externo; o conjunto comparativo de quatro capturas não pôde ser concluído. Nada foi publicado.

Esta pasta contém uma única experiência híbrida: `index.html` é a rota de produção, sem qualquer linguagem de proposta/redesign/protótipo/divulgação; `proposal.html` é o documento de venda persuasivo e independente; `rationale.html` é um redirecionamento apenas de compatibilidade para `proposal.html`.

## Executar localmente

A partir desta pasta, inicie um servidor estático:

```bash
python3 -m http.server 8000
```

Abra `http://127.0.0.1:8000/`. Para encerrar, use `Ctrl+C`. Não abra diretamente pelo protocolo `file://`.

## Tese compositiva

"A linha de base da cidade": um marcador vertical de percurso (linha fina + ponto + rótulo) liga quatro pontos verificados — Centro (chegada/endereço), Hospedagem, Eventos e Restaurante — antes de fechar em uma seção de contato no estilo "painel de embarque". A página abre e fecha no azul Lizon verificado (identidade, chegada/partida) e aquece através de papel + latão restrito nos momentos de hospedagem intermediários (ficar, reunir, comer). A tipografia combina Bricolage Grotesque (display humanista, afirmações de chegada) com Libre Franklin (sans operacional neutro, reserva/quartos/detalhe). Toda fotografia roda em um quadro editorial largo, quase sem corte, com uma única legenda plana — nunca um corte quadrado, máscara circular ou duotone sobre a foto.

## O que revisar

- `index.html` em 1440×900 e 390×844 (e 320/375/768/1920 — ver `SITE_REVIEW.md`).
- Menu móvel, skip link, foco visível e navegação por teclado.
- Três caminhos de conversão separados: reservar estadia, consultar evento, falar com recepção/restaurante, usando os telefones publicados pela fonte oficial.
- Barra de reserva fixa (sticky) somente em mobile.
- `proposal.html` como documento independente (`noindex, nofollow`); a homepage não aponta para ele em nenhum lugar.
- `rationale.html` redireciona (meta refresh + `location.replace`) para `proposal.html` e não duplica a experiência.

## Mapa de arquivos

- `index.html`: homepage de produção, sequência chegada → hospedagem → eventos → restaurante → serviços → contato.
- `proposal.html`: proposta independente e não afiliada, com evidência, três problemas/respostas, direção visual e checklist de pré-publicação.
- `rationale.html`: redirect-only de compatibilidade para `proposal.html`.
- `styles.css`: sistema visual único (linha de percurso, hero, seções split, painel de serviços, painel de contato) + estilos da página de proposta no mesmo arquivo.
- `script.js`: apenas o menu mobile acessível (abrir/fechar, `Escape`, clique fora fecha o menu).
- `assets/`: logo, fotografias oficiais do hotel e fontes self-hosted.
- `original-captures/`: capturas do site oficial ativo (desktop e mobile) usadas como referência de marca.
- `SOURCE_MANIFEST.md`: proveniência, hashes e limites de evidência.
- `SITE_REVIEW.md`: mapeamento problema → solução, testes anti-template e registro de validação desta sessão.

## Evidência e limites

Alegações de negócio foram limitadas a `prospect.json`, `PRODUCT.md` e `BRAND_SOURCE.md`. Nenhum preço, disponibilidade, calendário, avaliação, certificação, prêmio ou dado de equipe foi incluído — nenhum desses campos existe nas fontes autorizadas. Ver `SOURCE_MANIFEST.md` para a matriz completa.

## Validação rápida

```bash
node --check script.js
python3 /opt/data/scripts/impeccable_detector_gate.py /opt/data/projects/curitiba-rebuilds/2026-07-18/lizon-curitiba-hotel
python3 -m http.server 8000
```

A validação de browser (console, overflow horizontal, contraste, menu mobile) deve ser feita com o servidor em execução. Nenhum asset, fonte, script ou serviço externo é carregado automaticamente pela implementação. O formulário/CTA de contato usa apenas links `tel:` para números já publicados pela fonte oficial — não há formulário, envio, analytics, upload ou chamada de rede.
