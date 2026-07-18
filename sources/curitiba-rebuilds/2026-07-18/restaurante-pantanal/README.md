# Restaurante Pantanal Curitiba

Site estático híbrido de marca para a unidade do Restaurante Pantanal em Curitiba.

## O que foi construído

- Uma única página responsiva em `index.html`, com navegação âncora, hero editorial, cardápio, história, chef, visita e contato.
- `styles.css` define o sistema visual: verde profundo, creme e laranja queimado; tipografia editorial; composição assimétrica; estados de foco e layout para desktop/mobile.
- `script.js` controla apenas o menu mobile e seus estados acessíveis. Não há backend, formulário, analytics ou envio automático.
- `rationale.html` existe como entrada legada e redireciona somente para `index.html`.
- `SOURCE_MANIFEST.md` e `CONTENT_BRIEF.md` permanecem preservados como base de evidência.

## Limites de evidência

O texto usa os fatos documentados no manifesto, priorizando as páginas oficiais: nome público, endereço, telefone/WhatsApp, e-mail, horários publicados, cardápio, história declarada, chef e perfis sociais. Preços, segunda-feira, feriados, disponibilidade diária, confirmação de reservas, delivery, facilidades, alergênicos e superlativos não são apresentados como fatos.

O jantar de domingo é exibido com a ressalva de que existe divergência entre fontes secundárias. Os horários estão rotulados como publicados no site oficial em 18/07/2026 e devem ser reconfirmados antes de eventual publicação real.

Os links para cardápio, mapa, WhatsApp, e-mail e redes sociais são ações explícitas do visitante, abertas por clique. O site não publica, envia formulário, faz upload, promove, contata pessoas ou dispara requisições externas automaticamente.

## Execução local

Na pasta do projeto, rode um servidor HTTP simples:

```bash
python3 -m http.server 4173
```

Abra `http://127.0.0.1:4173/`. Não há dependências de build.

## Validação

Checks recomendados:

```bash
node --check script.js
python3 -m http.server 4173
```

Para inspeção visual, valide a página em 1440x900 e 390x844. Confirme também: navegação do menu mobile, ausência de rolagem horizontal, foco visível por teclado, abertura dos links somente por interação do usuário e redirecionamento de `rationale.html` para `index.html`.

Data-base do conteúdo: 18/07/2026. Fontes e IDs de alegações: `SOURCE_MANIFEST.md`.
