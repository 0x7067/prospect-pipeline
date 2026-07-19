# Salão de Eventos Curitiba — candidato híbrido

Status: rascunho para avaliação / staging only. Nada foi publicado, nenhum formulário é enviado e nenhuma integração externa é acionada.

## Conceito

Uma experiência híbrida que começa pela promessa publicada — “Você será um convidado em sua própria festa” — e combina reconhecimento emocional com informação prática. A homepage organiza as três ocasiões publicadas (Casamento, 15 Anos e Formatura), estrutura, serviços, galeria e um contato deliberadamente inerte. `proposal.html` é um documento independente, não afiliado, para revisão interna.

## Arquivos

- `index.html`: candidato de homepage, em português, responsivo e com conteúdo limitado ao manifesto de fontes.
- `proposal.html`: proposta independente com evidências, direção e checklist de confirmações.
- `rationale.html`: redirecionamento sem conteúdo próprio para `proposal.html`.
- `styles.css`: sistema visual, layout responsivo e estados de foco.
- `script.js`: menu móvel e aviso local de contato; não envia dados.
- `SOURCE_MANIFEST.md`: registro de fontes, citações, mídia, exclusões e limites de uso.
- `assets/`: cópias locais das mídias verificadas durante a pesquisa.

## Limites de evidência

A homepage oficial é a fonte primária. Endereço, município, capacidade, preços, disponibilidade, políticas, depoimentos, prêmios, horários e resultados não são afirmados porque não foram confirmados. Números de telefone/WhatsApp, redes sociais, logotipo e imagens continuam sujeitos à confirmação de canal e direitos antes de qualquer publicação. As fotos de ocasião são legendadas como ilustrações; a imagem da galeria é uma referência do espaço publicado, não uma prova de configuração atual.

## Executar localmente

Não há build step nem dependências de pacote. A partir desta pasta:

```bash
python3 -m http.server 8000
```

Abra `http://localhost:8000/`. Para encerrar, use `Ctrl-C`.

## Checks

```bash
node --check script.js
python3 -m http.server 8000
```

Em revisão manual, teste teclado (skip link, menu, links e foco), menu em viewport estreita, ausência de rolagem horizontal em 390×844 e leitura em 1440×900. Confirme que o botão de contato apenas mostra o aviso local e que `rationale.html` conduz à proposta.
