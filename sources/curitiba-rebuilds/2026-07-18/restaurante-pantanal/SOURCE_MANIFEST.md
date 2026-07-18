# Manifesto de fontes — Restaurante Pantanal Curitiba

Data e hora da pesquisa: 2026-07-18T12:28:41-03:00  
Escopo: fatos públicos úteis para conteúdo de um site da unidade de Curitiba.  
Método: prioridade para páginas oficiais; fontes secundárias servem apenas para detectar divergências. Nenhum contato, formulário ou publicação foi realizado.

## Critério de evidência

- **Confirmado em fonte oficial**: publicado em uma página controlada pelo restaurante. É evidência primária do que o negócio declara, mas não equivale a auditoria independente.
- **Corroborado**: coincide com ao menos uma fonte secundária recente.
- **Conflitante / não usar sem nova verificação**: fontes atuais divergem ou as próprias páginas oficiais divergem.
- **Indisponível**: não localizado em fonte adequada; não deve ser inventado.

## Fontes usadas

### S1 — Página oficial da unidade de Curitiba

- URL: https://restaurantepantanal.com.br/curitiba/
- Acesso: 2026-07-18
- Tipo: fonte primária, controlada pelo restaurante
- Uso: identidade pública, história declarada, prato carro-chefe, unidades, chef, links de reserva/delivery e redes sociais.
- Trechos relevantes:
  - “Restaurante Pantanal Curitiba”
  - “O ano era 1998 [...] abertura de um pesque-e-pague na chácara da família, em Toledo-PR, junto com um pequeno restaurante batizado de ‘Pantanal’ por conta dos banhados do local.”
  - “Peixe ao Forno, que segue sendo o carro-chefe da casa.”
  - “Atualmente, o Peixe Frito Pantanal conta com 4 unidades no Paraná, em Toledo, Cascavel, Pato Branco e Curitiba.”
  - A página identifica “Thiago Paetzold Gonçalves” como chef e declara formação em Gastronomia pela Univel desde 2019 e mais de 15 anos no ramo de restaurantes.
- Inspeção do HTML oficial:
  - Reserva: https://api.whatsapp.com/send?phone=554132038126&text=Ol%C3%A1,%20venho%20do%20site%20e%20gostaria%20de%20fazer%20uma%20reserva
  - Delivery/pedido: https://api.whatsapp.com/send?phone=554132038126&text=Ol%C3%A1,%20venho%20do%20site%20e%20gostaria%20de%20fazer%20um%20pedido
  - Instagram: https://www.instagram.com/pantanalcuritiba/
  - Facebook: https://www.facebook.com/profile.php?id=61558715852541

### S2 — Página oficial de contato

- URL: https://restaurantepantanal.com.br/curitiba/contato/
- Acesso: 2026-07-18
- Tipo: fonte primária, controlada pelo restaurante
- Uso: endereço, telefone, WhatsApp, e-mail, horário publicado e link de mapa.
- Trechos relevantes:
  - “Rua Brg. Franco, 3359 - Rebouças, Curitiba - PR”
  - “Terça a Sexta: Almoço 11h às 15hmin - Jantar 18h às 23h” (o texto contém “15hmin”; neste manifesto isso é interpretado apenas como provável erro tipográfico para 15h)
  - “Sáb. e Dom.: Almoço 11h às 15h - Jantar 18h às 23h”
  - “WhatsApp (41) 3203-8126” e “Telefone (41) 3203-8126”
- E-mail exibido no HTML com proteção Cloudflare, decodificado localmente: `comercialctba@restaurantepantanal.com.br`.
- Link de mapa publicado: https://maps.app.goo.gl/bFeeVFHS17vGub9E6 (o destino não pôde ser extraído pela ferramenta; o endereço acima foi verificado diretamente no texto oficial).

### S3 — Cardápio oficial da unidade de Curitiba

- URL: https://restaurantepantanal.com.br/curitiba/cardapio/
- Acesso: 2026-07-18
- Tipo: fonte primária, controlada pelo restaurante
- Uso: natureza da oferta e exemplos de pratos; detecção de divergência de preços.
- Trechos relevantes:
  - “Os valores desse cardápio são válidos somente para o Restaurante Pantanal de Curitiba – PR.”
  - O cardápio lista, entre outros, Filé de Tilápia Frito/Grelhado, Peixe ao Forno, Peixe ao Molho de Ervas, Traíra Desossada, moquecas de tilápia/camarão/mista, Parmegiana de Tilápia, camarão, costela de pacu, sashimi de tilápia, ceviche, carne de rã, lula e carne de jacaré.
  - Para algumas porções completas de Filé de Tilápia Frito e Peixe ao Forno, publica “Opção sem glúten e sem lactose por +10,00”. Isso vale para esses itens/formatos específicos, não para o cardápio inteiro.

### S4 — Instagram vinculado pelo site oficial

- URL: https://www.instagram.com/pantanalcuritiba/
- Acesso: 2026-07-18
- Tipo: perfil externo vinculado pela fonte oficial
- Conteúdo extraído: título “Restaurante Pantanal CURITIBA (@pantanalcuritiba)”.
- Uso: confirmar o identificador público do perfil; nenhuma postagem foi usada como evidência de horário, preço ou oferta.

### S5 — Facebook vinculado pelo site oficial

- URL: https://www.facebook.com/profile.php?id=61558715852541
- Acesso: 2026-07-18
- Tipo: perfil externo vinculado pela fonte oficial
- Conteúdo extraído: título “Restaurante Pantanal Curitiba | Curitiba PR | Facebook”.
- Uso: confirmar o destino do link social; nenhuma publicação foi usada como evidência factual.

### S6 — Restaurant Guru (consulta de divergência; não é fonte de implementação)

- URL: https://restaurantguru.com.br/Restaurante-Pantanal-Curitiba-Curitiba
- Acesso: 2026-07-18
- Data declarada pela página: “Atualizado em: jul 04, 2026”
- Tipo: agregador secundário
- Uso: corroborar telefone/endereço e detectar divergência operacional.
- Corrobora: `(41) 3203-8126` e `R. Brig. Franco, 3359`.
- Diverge: lista domingo apenas `11:00–15:00` e segunda-feira como fechada, enquanto S2 publica almoço e jantar no domingo e não menciona segunda-feira.
- Não usar como base para avaliações, rankings, preços, facilidades ou atributos; esses dados não foram verificados em fonte primária.

### S7 — Locais do Brasil (consulta secundária; não é fonte de implementação)

- URL: https://www.locaisdobrasil.com.br/encontre/restaurantes/curitiba-pr/restaurante-pantanal-curitiba/684c80d9397cca9d4ac32d27
- Acesso: 2026-07-18
- Tipo: diretório secundário
- Uso: checagem adicional de horário em resultado de busca.
- Resultado: mostra domingo `11:00–15:00, 18:00–23:00`, segunda-feira fechada e os mesmos dois turnos de terça a sábado. Corrobora S2 para domingo, mas não elimina a divergência com S6.
- Não recomendado como base de conteúdo.

## Mapeamento de alegações para fontes

| ID | Alegação utilizável | Fonte(s) | Estado e limite de uso |
|---|---|---|---|
| C01 | O nome público da unidade é “Restaurante Pantanal Curitiba”. | S1, S2, S3 | Confirmado em fonte oficial. Não tratar como razão social. |
| C02 | A unidade fica na Rua Brg. Franco, 3359, Rebouças, Curitiba–PR. | S2; corroborado por S6 | Confirmado. O CEP 80220-100 aparece apenas em S6 e não é recomendado sem fonte primária. |
| C03 | Telefone e WhatsApp publicados: (41) 3203-8126. | S2; corroborado por S6 | Confirmado. |
| C04 | E-mail publicado: comercialctba@restaurantepantanal.com.br. | S2 (HTML oficial com proteção Cloudflare) | Confirmado. |
| C05 | S2 publica ter–sex, almoço 11h–15h e jantar 18h–23h. | S2 | Confirmado como horário publicado. |
| C06 | S2 publica sáb–dom, almoço 11h–15h e jantar 18h–23h. | S2; domingo corroborado por S7, mas conflitante com S6 | Não recomendar domingo à noite como fato incontroverso sem nova verificação. |
| C07 | Segunda-feira não tem horário publicado na página oficial. | S2 | Observação verificável. S6/S7 dizem “fechado”, mas não há confirmação oficial localizada. |
| C08 | O cardápio oficial tem foco expressivo em peixes e frutos do mar e lista os pratos exemplificados em S3. | S3 | Confirmado; usar nomes de pratos, sem extrapolar ingredientes ou disponibilidade. |
| C09 | A casa declara o Peixe ao Forno como carro-chefe. | S1 | Alegação institucional de primeira parte; pode ser redigida como “carro-chefe da casa”. |
| C10 | A história declarada começa em 1998, em Toledo–PR, com pesque-e-pague e pequeno restaurante familiar. | S1 | Alegação histórica de primeira parte; atribuir ao restaurante se necessário. |
| C11 | A marca declara quatro unidades no Paraná: Toledo, Cascavel, Pato Branco e Curitiba. | S1 | Confirmado como declaração atual do site oficial. |
| C12 | O site nomeia Thiago Paetzold Gonçalves como chef da unidade e publica credenciais específicas. | S1 | Autodeclaração oficial, sem verificação independente localizada; evitar transformar em prêmio, autoridade ou endosso. |
| C13 | O site oferece links distintos de reserva e pedido/delivery pelo mesmo WhatsApp. | S1 (HTML) | Confirmado que os links existem; cobertura, taxas, horários e garantia de atendimento não foram verificados. |
| C14 | Instagram `@pantanalcuritiba` e o Facebook listado em S5 são os perfis vinculados pela página oficial. | S1, S4, S5 | Confirmado como vínculo oficial. |
| C15 | Preços do Peixe ao Forno divergem entre a homepage e o cardápio oficial. | S1, S3 | Conflitante; não reproduzir preços em página institucional sem reconfirmação. |

## Divergências e cautelas de implementação

1. **Domingo à noite:** S2 e S7 publicam jantar; S6, atualizado em 2026-07-04, publica apenas almoço. Até nova confirmação direta em fonte oficial inequívoca, não transformar o jantar de domingo em promessa operacional sem ressalva.
2. **Segunda-feira:** agregadores dizem “fechado”, mas S2 simplesmente não apresenta segunda-feira. Não publicar “fechado” como fato oficial sem verificação adicional.
3. **Preços:** a homepage e o cardápio oficial têm valores diferentes para o Peixe ao Forno. O site institucional deve apontar para o cardápio oficial em vez de duplicar preços.
4. **Dietas/alergênicos:** S3 oferece versão sem glúten e sem lactose apenas em itens/porções específicos mediante adicional. Não afirmar que o restaurante ou o cardápio inteiro é “sem glúten” ou “sem lactose”; contaminação cruzada e protocolos não foram informados.
5. **Superlativos:** frases promocionais da própria página como “entre os melhores restaurantes em Curitiba”, “ingredientes frescos”, “qualidade” e “experiência inesquecível” não foram corroboradas. Não são recomendadas como fatos.

## Informações não localizadas em fonte primária adequada

- Razão social, CNPJ e nome legal.
- CEP oficial da unidade.
- Regra oficial para segunda-feira e feriados.
- Resolução da divergência sobre jantar de domingo.
- Política de reservas, tolerância, lotação ou confirmação.
- Área/custos/raio de delivery e plataformas efetivamente disponíveis.
- Estacionamento, acessibilidade, brinquedoteca, Wi‑Fi e formas de pagamento.
- Procedimentos para alergênicos e contaminação cruzada.
- Prêmios, rankings, avaliações auditadas ou alegação objetiva de ser “o melhor”.
- Disponibilidade diária de cada prato e preços estáveis.

Esses itens devem permanecer ausentes do conteúdo público até haver fonte primária atualizada; não usar placeholders que pareçam fatos.
