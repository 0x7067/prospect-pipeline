# Manifesto de fontes — Cavassin Engenharia

Data da verificação: 17/07/2026

## Fontes públicas consultadas

1. `https://cavassinengenharia.com.br/` — página inicial oficial. Verificados: nome, chamada original, endereço, telefone, e-mail, links sociais e imagem oficial usada como referência visual.
2. `https://cavassinengenharia.com.br/quem-somos/` — página institucional oficial. Verificados: atuação desde 2005; Curitiba e região metropolitana; projetos complementares (elétrico, tubulações telefônicas, hidráulico e incêndio); projetos arquitetônicos; regularização de obras; aprovação junto às prefeituras de Curitiba e região metropolitana; histórico profissional informado desde 1996/2002; legislação, normas técnicas, visão, missão e valores.
3. `https://cavassinengenharia.com.br/contato/` — página de contato oficial. Verificados: endereço, telefone `(41) 3019-8780`, WhatsApp `(41) 99104-9789` e e-mail `contato@cavassin.eng.br`.
4. `https://cavassinengenharia.com.br/orcamento/` — página de orçamento oficial. Verificados: e-mail para orçamento e campos públicos de solicitação.
5. `prospect.json` — briefing de prospecção fornecido no workspace. Usado apenas como contexto de auditoria/oportunidade; não substitui as páginas oficiais.

## Assets locais

- `assets/logo-cavassin.jpg` — baixado de `https://cavassinengenharia.com.br/wp-content/uploads/2016/10/logo-cavassin.jpg`; logo oficial publicada no site.
- `assets/hero-oficial.png` — baixado de `https://cavassinengenharia.com.br/wp-content/uploads/2016/02/engenharia-cavassin-1477x630.png`; imagem oficial publicada na home. Usada como textura hero, sem atribuir projeto ou resultado.

## Limites de evidência

Não foram publicados projetos específicos, clientes, números de resultado, aprovações concretas, prêmios, depoimentos, nomes de responsáveis técnicos ou registros CREA porque não foram verificados nas fontes consultadas. O site se apoia em capacidades, processo e contatos públicos. Não foram usados dados de terceiros, imagens de banco ou widgets externos.

## Direção de marca registrada

- Personalidade observada: objetiva, técnica, institucional.
- Cores retidas/sistematizadas: azul-petróleo da presença visual e laranja de acento percebido no material oficial; a implementação documenta os valores de interface em `styles.css` (`--ink`, `--blue`, `--accent`).
- Tipografia: Arial para informação e Georgia para títulos, uma aproximação local e sem dependência externa do uso de Open Sans observado no site oficial.
- Tese: “Este conceito só pode pertencer à Cavassin porque transforma a combinação publicada de projetos complementares, arquitetura, regularização e aprovação em um percurso visual de clareza técnica, sem fabricar portfólio.”
- Regra de imagem: apenas asset oficial local, com tratamento de contraste para legibilidade; detalhes geométricos são CSS, não simulações de projetos.

## Origem do conceito

`proposal.html` é um documento independente, marcado como `noindex,nofollow`, e não é ligado pela experiência pública. `index.html` não contém linguagem de proposta, redesign ou divulgação desta auditoria.
# Interface icon source

- `assets/icons/arrow-up-right.svg` and `assets/icons/arrow-down.svg` are locally vendored regular-weight assets from `@phosphor-icons/core`. They replace platform-dependent Unicode/emoji glyphs and add no runtime CDN dependency.

