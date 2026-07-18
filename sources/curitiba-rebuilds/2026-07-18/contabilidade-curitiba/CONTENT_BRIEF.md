# Brief de conteúdo e direção híbrida — Contabilidade Curitiba

Status: **implementação em staging; não publicar sem a validação final indicada abaixo**  
Escopo da pesquisa: somente fontes locais disponíveis em 18/07/2026; nenhuma consulta externa foi realizada nesta tarefa.

## 1. Fontes e regra de evidência

### Fontes factuais aceitas

- **S1 — `prospect.json`**: resumo local da verificação feita em 15/07/2026. Campos úteis: nome e URL (linhas 2–3), categoria (linha 5), endereço (linha 6), canais e atividade (linha 7), alegação de experiência/serviços e oportunidades propostas (linhas 18–19) e URL do WhatsApp (linhas 20–25).
- **S2 — `/opt/data/cron/output/bd2acb816e97/2026-07-15_08-50-32.md`**: auditoria local que registra a extração do site oficial. O trecho de descoberta reproduz o texto institucional publicado (linhas 417–423). O relatório verificado reúne categoria, endereço, URL e contatos (linhas 625–639), problemas observados (linhas 641–648) e distingue os serviços observados das páginas apenas recomendadas (linhas 653–668).
- **S3 — `SOURCE_MANIFEST.md`**: define `prospect.json` como entrada local aprovada, informa que `BRAND_SOURCE.md`, `PRODUCT.md` e `DESIGN.md` seriam referências apenas “quando presentes” (linhas 3–6) e registra como pendentes a verificação final de contato e a aprovação de produção (linhas 8–10).

### Arquivos que não são prova factual independente

`index.html`, `proposal.html`, `rationale.html`, `styles.css`, `README.md`, `SITE_REVIEW.md` e `.impeccable-craft-receipt.json` são saídas geradas. Podem orientar a estrutura do protótipo, mas **não** podem validar serviços, credenciais, identidade visual ou promessas comerciais. Não há `BRAND_SOURCE.md`, `PRODUCT.md` nem `DESIGN.md` no diretório; portanto, não existe fonte local aprovada para logotipo, monograma, paleta, tipografia, fotografia ou manual de marca. [S3]

## 2. Registro de fatos aceitos

| ID | Formulação permitida | Fonte local | Força/condição |
|---|---|---|---|
| F1 | O nome publicado é **Contabilidade Curitiba**. | S1, linhas 2–3; S2, linhas 625–630 | Aceito para staging. |
| F2 | O site oficial registrado na pesquisa é **https://contabilidadecuritiba.com/**. | S1, linha 3; S2, linha 629 | Aceito; reconfirmar antes de produção. |
| F3 | A atuação publicada inclui serviços **contábeis, fiscais, trabalhistas e societários**. | S2, linhas 417–423 | Extração do site oficial; usar sem ampliar o escopo. |
| F4 | A pesquisa classifica o negócio como contabilidade empresarial, fiscal e trabalhista e também registra oferta de contabilidade empresarial e condominial. | S1, linha 5; S2, linhas 627 e 653–655 | “Condominial” pode entrar em staging; reconfirmar antes de produção por não aparecer no trecho institucional reproduzido em S2, linhas 417–423. |
| F5 | Endereço publicado: **Rua Newton França Bitencourt, 460, Ahú, Curitiba–PR**. | S1, linha 6; S2, linhas 625–630 | Aceito; reconfirmar antes de produção. |
| F6 | Telefone publicado: **(41) 3018-7461**. | S2, linha 630 | Aceito para staging; validação final obrigatória. |
| F7 | WhatsApp publicado: **(41) 98841-3809**, com destino `https://api.whatsapp.com/send?phone=5541988413809`. | S1, linhas 20–25; S2, linha 630 | Número e destino coincidem nas fontes; não acionar nesta tarefa. Validar antes de produção. |
| F8 | E-mail publicado: **atendimento@contabilidadecuritiba.com**. | S2, linha 630 | Aceito para staging; validação final obrigatória. |
| F9 | O site atual **declara** mais de 30 anos de experiência. | S2, linhas 417–423; S1, linhas 18–19 | Alegação institucional, não verificação independente. Manter a atribuição (“o site informa”) até comprovação da data de fundação. |
| F10 | O site atual **declara** registro no Conselho Regional de Contabilidade do Paraná. | S2, linhas 417–423 | Alegação institucional sem número de registro na fonte local. Não criar selo nem exibir número. |
| F11 | Palavras publicadas que podem orientar o tom: soluções para empresas, segurança, precisão, orientação, integridade, excelência e atendimento. | S2, linhas 417–423 | Sinais de posicionamento, não garantias de resultado. |

## 3. Declarações prontas para implementação

Toda frase factual abaixo está coberta pelos IDs do registro:

1. **Marca no cabeçalho:** “Contabilidade Curitiba”. [F1]
2. **Linha factual do hero:** “Serviços contábeis, fiscais, trabalhistas e societários no Ahú, em Curitiba.” [F3, F5]
3. **Rótulos de serviço:** “Contábil”, “Fiscal”, “Trabalhista” e “Societário”. [F3]
4. **Serviço opcional em staging:** “Contabilidade condominial”. [F4] Só promover após reconfirmação.
5. **Prova institucional cautelosa:** “O site atual informa mais de 30 anos de experiência e registro no CRC-PR.” [F9, F10] Preferível substituir por ano de fundação e número do registro depois de validados.
6. **Contato:** endereço, telefone, WhatsApp e e-mail exatamente como em [F5–F8].
7. **CTA:** “Falar pelo WhatsApp”, apontando para o destino de [F7]. O link pode ser renderizado em staging, mas não deve ser testado por envio nem promovido sem validação.

Headlines como **“Clareza para as decisões do seu negócio”** podem ser usadas como direção criativa: são propostas de marca, não afirmações de desempenho. Evitar transformá-las em promessas (“garantimos economia”, “aumentamos seu lucro”, “as melhores soluções”).

## 4. Hierarquia de conteúdo recomendada

1. **Cabeçalho enxuto** — nome por extenso; links “Serviços”, “Sobre” e “Contato”; um CTA “Falar pelo WhatsApp”. [F1, F7]
2. **Hero híbrido (marca + utilidade)** — headline curta e autoral; linha factual 2 acima; CTA primário para WhatsApp e CTA secundário para serviços. Não usar métricas ou superlativos.
3. **Serviços** — quatro blocos para Contábil, Fiscal, Trabalhista e Societário. [F3] Cada descrição deve permanecer genérica até existir fonte de escopo detalhado. “Condominial” fica opcional e condicionado a [F4].
4. **Sobre / confiança** — apresentar a alegação de experiência e CRC somente com a atribuição indicada em [F9–F10]. Não exibir equipe, números de clientes, depoimentos ou certificações sem novas fontes.
5. **Contato** — endereço e canais publicados. [F5–F8] Priorizar links `tel:`, `mailto:` e WhatsApp; não adicionar formulário de captação enquanto não houver política de privacidade, finalidade, consentimento e responsável definidos.
6. **Rodapé** — nome, endereço e canais; reservar área para razão social, CNPJ, número CRC, política de privacidade e horário apenas quando validados.

## 5. Direção visual híbrida

Esta seção é **recomendação de design**, não descrição da marca oficial.

- Combinar uma camada **editorial/institucional** (tipografia expressiva, muito boa hierarquia, composição sóbria e um motivo gráfico abstrato inspirado em organização/linhas de registro) com uma camada **operacional** (serviços escaneáveis e contato imediato).
- Usar o nome por extenso como wordmark provisório. **Não usar o monograma “CO” como se fosse um logotipo**: ele aparece apenas no candidato gerado e não tem fonte de marca aprovada. [S3]
- Manter paleta provisória sóbria e de alto contraste: fundo claro, texto escuro e um único acento contido. As cores atuais `#173B4A`, `#EEF4F1` e `#C98E52` são escolhas do protótipo, não cores verificadas da empresa; não descrevê-las como “identidade existente”.
- Não usar fotos de equipe, escritório, selos, brasões ou imagens de Curitiba como se fossem ativos próprios sem origem e licença documentadas.
- Sinal local permitido em texto: **Ahú · Curitiba**, coberto por [F5].

## 6. Tom de voz

- Português brasileiro; calmo, preciso, direto e profissional.
- Preferir frases concretas e curtas: o que é oferecido, onde fica e como conversar.
- Traduzir os sinais publicados de segurança, precisão, orientação, integridade, excelência e atendimento [F11] em **estilo verbal**, não em garantias absolutas.
- Evitar urgência artificial, jargão técnico sem explicação, excesso de “soluções”, autoelogio e alegações comparativas.
- Não afirmar resultados tributários, redução de custos, crescimento, lucratividade, atendimento personalizado, segurança total ou conformidade garantida sem prova específica.

## 7. Prioridades responsivas e de acessibilidade

1. **Mobile primeiro:** nome legível, linha factual e CTA primário antes de qualquer arte decorativa.
2. **Ordem estável:** hero → serviços → sobre/confiança → contato; no desktop, pode haver composição em duas colunas sem alterar a ordem de leitura.
3. **Sem vazios excessivos:** ilustração e espaçamento não devem empurrar serviços/contato para muito abaixo da dobra — problema registrado em S1, linha 13, e S2, linhas 641–648.
4. **Serviços em uma coluna no celular** e grade curta em telas largas; títulos e ações precisam funcionar sem hover.
5. **Contato acionável e copiável:** telefone, e-mail e endereço em texto, além dos links. [F5–F8]
6. **Acessibilidade:** declarar `lang="pt-BR"`, manter H1 não vazio, landmarks semânticos, link de salto, foco visível, alvos de toque confortáveis e zoom habilitado. Se houver formulário futuramente, todo campo precisa de rótulo visível e mensagem de finalidade. Essas prioridades respondem aos problemas registrados em S1, linhas 13–16, e S2, linhas 641–648.
7. **Performance:** evitar que fontes externas ou arte pesada bloqueiem a primeira renderização; a mensagem e o CTA devem permanecer úteis sem JavaScript.

## 8. Desconhecidos e exclusões obrigatórias

Não há fonte local suficiente para publicar como fato:

- razão social, CNPJ, ano exato de fundação, número de registro CRC e situação cadastral atual;
- nomes, cargos, credenciais, fotografias ou tamanho da equipe;
- horário de atendimento, área geográfica atendida, atendimento presencial/remoto e idiomas;
- escopo detalhado, público, preço ou prazo de cada serviço;
- abertura de empresa, e-commerce e troca de contador como serviços atuais — em S1, linha 19, e S2, linhas 653–668, aparecem como **landing pages recomendadas**, não como catálogo comprovado;
- quantidade de clientes, avaliações, casos, depoimentos, parceiros, certificações ou resultados;
- logotipo, monograma, cores, fontes, fotos e demais ativos oficiais;
- política de privacidade e base legal para coleta de dados.

Excluir do candidato atual ou manter claramente como placeholder: “CO” como logotipo, “identidade já publicada”, descrições que afirmem apoio/orientação para abertura de empresa, e-commerce ou troca de contador, métricas não documentadas e qualquer promessa de crescimento, lucro, economia ou precisão garantida.

## 9. Gate antes de produção

Antes de publicar, obter ou reconfirmar em fonte oficial: (1) titularidade/nome legal; (2) endereço e quatro canais [F5–F8]; (3) número e situação do CRC; (4) data de fundação para sustentar “mais de 30 anos”; (5) lista e escopo de serviços, inclusive condominial; (6) ativos de marca e licenças; e (7) política de privacidade se houver captação. Até lá, o material permanece **DRAFT / STAGING ONLY**, conforme `README.md`, linhas 1–9, e [S3].
