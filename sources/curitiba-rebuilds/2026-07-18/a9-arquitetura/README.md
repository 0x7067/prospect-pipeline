# A9 Arquitetura — experiência híbrida local

Status: conceito local, não publicado.

Esta pasta contém uma única experiência híbrida: `index.html` é a rota principal orientada à marca; `proposal.html` é um documento independente de proposta; `rationale.html` é apenas um shim de compatibilidade que redireciona para a proposta.

## Executar localmente

A partir desta pasta, inicie um servidor estático:

```bash
python3 -m http.server 8000
```

Abra `http://127.0.0.1:8000/`. Para encerrar, use `Ctrl+C`. Não abra diretamente pelo protocolo `file://`: o servidor torna a revisão de imagens e navegação mais fiel.

## O que revisar

- `index.html` em 1440×900 e 390×844.
- Menu móvel, skip link, foco visível e navegação por teclado nas quatro categorias.
- Seleção de cada categoria: a prova visual e o texto mudam no mesmo painel, sem salto de scroll.
- Links de contato: são somente links para `https://a9arquitetura.com.br/contato/`; esta versão não contém formulário, envio, analytics, upload, publicação ou promoção.
- `proposal.html` como documento independente; a homepage não aponta para ele.
- `rationale.html` redireciona para `proposal.html` e não duplica a experiência.

## Mapa de arquivos

- `index.html`: homepage semântica, orientada a problema → prova → contato.
- `proposal.html`: proposta independente, com observação, direção visual e perguntas de revisão.
- `rationale.html`: redirect-only de compatibilidade.
- `styles.css`: sistema visual, estados, responsividade, reduced motion e impressão.
- `script.js`: progressive enhancement do menu e da seleção acessível de prova.
- `assets/`: imagens fornecidas localmente.
- `SOURCE_MANIFEST.md`: proveniência, limites e matriz de claims.
- `CONTENT_BRIEF.md` e `ARCHITECTURE.md`: brief e plano de implementação.
- `SITE_REVIEW.md`: registro da validação desta entrega.

## Evidência e limites

Claims de negócio foram limitados ao `prospect.json`, `PRODUCT.md` e `BRAND_SOURCE.md`, conforme o brief. As imagens locais são usadas como prova visual e alt text delimitado; não são uma afirmação de direitos de publicação. Não foram adicionados métricas, prêmios, depoimentos, equipe, endereço, telefone, e-mail, datas de projetos ou resultados.

## Validação rápida

```bash
node --check script.js
python3 -m http.server 8000
```

A validação de browser deve ser feita com o servidor em execução. Nenhum asset, fonte, script ou serviço externo é carregado automaticamente pela implementação.
