# Verificação reproduzível

Com o site servido na raiz do projeto em `http://127.0.0.1:4173`:

```bash
node tests/verify.js
```

O script usa Chromium headless via Playwright e valida:
- HTTP 200 para produção e proposta;
- conteúdo e contagens essenciais;
- links de telefone/e-mail;
- ausência de overflow horizontal em 1440×900 e 390×844;
- ausência de imagens quebradas ou imagens remotas na produção;
- ausência de erros de console, de página e de requisição;
- separação e identificação inequívoca da proposta.

Resultado persistido em `evidence/proposed/verification-results.json`.
