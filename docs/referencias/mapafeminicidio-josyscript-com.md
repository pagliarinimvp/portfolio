# Referência: mapafeminicidio.josyscript.com (Josyane Santos)

Análise feita em 31/10/2026 a partir do código e dos dados publicados. É o projeto "Mapa de Feminicídio" do portfólio [josyscript.com](josyscript-com.md). Cópia completa (arquivos, dados e capturas) no repositório privado `pagliarinimvp/referencias-de-sites`, pasta `mapafeminicidio.josyscript.com/`.

**Por que guardar:** é o melhor exemplo, até agora, de **projeto de dados de portfólio feito com rigor**: fonte oficial com versão e hash, revisão registrada, separação clara entre bases que não podem ser somadas, "sem dado" diferente de "zero" e aviso de período parcial. É exatamente o tipo de cuidado que um projeto meu com dados financeiros deveria mostrar.

---

## 1. Visão geral

| Item          | Valor                                                                                                                                                                                               |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Título        | Mapa de Feminicídio · "Dados que não podem ser invisíveis"                                                                                                                                          |
| Descrição     | Indicadores oficiais de feminicídio e memória documentada, com fonte e cobertura explícitas                                                                                                         |
| Stack         | Vite + framework leve com JSX (estilo Preact, sem React), **mapa em SVG próprio** a partir de TopoJSON (sem Leaflet, D3 ou MapLibre). Hospedado na Cloudflare Pages, com o Cloudflare Web Analytics |
| Tamanho       | JS de 100 KB, CSS de 31 KB e cerca de 18 MB de dados (a malha de municípios tem 2,7 MB)                                                                                                             |
| Rotas (com #) | `#/mapa` (Feminicídios) · `#/noticias` · `#/desaparecidas` · `#/ajuda` · `#/sobre` (Fontes e método) · `#/memoria-curta`                                                                            |
| Atualização   | Dados aprovados em 23/10/2026; manifest gerado em 31/10/2026                                                                                                                                        |

**Detalhe de cuidado:** a barra fixa com **190** (Polícia Militar) e **180** (Central de Atendimento à Mulher) está escrita direto no HTML, para funcionar mesmo se o JavaScript ou os dados falharem. O comentário no código cita um requisito ("FR-011"), sinal de que o projeto tem especificação escrita.

---

## 2. Interface (tela do mapa)

- **Painel esquerdo:** indicador em destaque (ex.: "Feminicídios · 2.629 vítimas do sexo feminino", 2025 completo + janeiro a setembro de 2026), com o selo "Dados preliminares", a fonte e a data de consulta ("Sinesp / MJSP · consulta em 23/10/2026"). Abaixo, a contagem **separada** das fichas editoriais (341), com o aviso de que não é somada ao indicador oficial. Termina com uma frase humana curta e "Fonte e critérios da contagem".
- **Centro:** mapa coroplético do Brasil, com Estados/Municípios, zoom (botões, pinça, arrastar), legenda em 5 faixas e "Ver tabela" (os mesmos dados em tabela, por acessibilidade). Embaixo, a escolha de período (2025–2026, 2024, 2025, 2026) com aviso "Preliminar · setembro".
- **Painel direito:** lista dos 8 indicadores oficiais com o total de cada um ("cada categoria mantém sua própria fonte e não é somada às demais"), filtro de faixa etária e totais por região e por estado.
- **Topo:** busca de município ou estado (atalho ⌘K) e botão Compartilhar (o estado da tela fica na URL, com indicador, nível, ano e local).
- **Ao escolher um território:** detalhamento estadual (fonte estadual ao lado da nacional, só para RJ e ES), casos editoriais e notícias do lugar, tentativas noticiadas.

### Outras seções

- **Notícias / Memória curta:** "Direitos conquistados", uma linha do tempo com 16 marcos legais (voto feminino, Maria da Penha, lei do feminicídio, igualdade salarial etc.), cada um conferido no texto oficial do Planalto ou do STF, ligada a 40 falas públicas contra esses direitos, com fonte, data e marcação de fonte única ou insuficiente.
- **Desaparecidas:** mostra que o dado de mulheres adultas está **indisponível** porque ainda não há fonte oficial validada com esse recorte, e leva ao painel oficial do CNPD. Prefere dizer "não temos" a mostrar um número frágil.
- **Ajuda:** risco imediato (190) e orientação e denúncia (180).
- **Fontes e método:** por enquanto, uma frase só: indicadores oficiais, fichas editoriais e desaparecimentos são coberturas diferentes e nunca são somados.

### Visual

Tema escuro com rosa como destaque. Títulos com serifa e o resto sem serifa. Mapa em escala de rosa/vinho.

| Token         | Cor       |
| ------------- | --------- |
| `--bg`        | `#101316` |
| `--panel`     | `#171a1f` |
| `--line`      | `#2a2d33` |
| `--fg`        | `#f4f1f3` |
| `--muted`     | `#a6a6af` |
| `--accent`    | `#efa9c4` |
| `--notice-bg` | `#30232d` |

---

## 3. Dados: a parte mais valiosa

### Fontes

| Base                    | Origem                                                                  | Uso                                                                      |
| ----------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Indicadores oficiais    | **Sinesp VDE / MJSP** (planilha `BancoVDE 2025.xlsx`, com hash SHA-256) | 8 indicadores por UF e município, 2024–2026 (feminicídio de 2018 a 2026) |
| População (denominador) | **IBGE, Censo 2022** (SIDRA, tabela 9514)                               | taxa por 100 mil mulheres                                                |
| Fontes estaduais        | ISP-RJ e SESP-ES                                                        | comparação lado a lado (nenhum arquivo publicado ainda)                  |
| Fichas editoriais       | Notícias revisadas (sobretudo g1, Metrópoles, CNN Brasil e UOL)         | 379 casos de 2025–2026, com média de 2 fontes por caso                   |
| Linha do tempo          | Planalto e STF                                                          | 16 marcos legais                                                         |

### Os 8 indicadores

Feminicídios · Tentativas de feminicídio · Homicídios dolosos de mulheres · Tentativas de homicídio de mulheres · Lesões corporais seguidas de morte · Latrocínios com vítimas femininas · Estupros com vítimas femininas (só UF) · Estupros de vulnerável com vítimas femininas (só UF).

### Arquitetura de dados (o que copiar como prática)

- **`manifest.json`** lista os 113 arquivos, cada um com o SHA-256, e um catálogo de indicadores: anos, níveis, faixas etárias, último período (`month_cutoff`, `partial`), escalas da legenda e modelo de caminho (`data/indicators/{id}/{faixa}/{nível}-{ano}.json`). O app só pede o que existe; nenhum caminho fica escrito à mão.
- **Cada arquivo de indicador carrega a procedência:** `nature: indicador_oficial`, fonte, URL, versão do arquivo, hash, data de coleta, `review_status: aprovado`, quem revisou, data de publicação e o total da fonte (`source_total`) para conferência.
- **Status por linha:** `value`, `zero` ou `missing`, mostrados como número, "zero registrado" ou "**sem dado**". Ausência nunca vira zero.
- **Período parcial explícito:** 2026 vai até setembro e é marcado como preliminar na tela.
- **Taxa por 100 mil mulheres** com denominador do Censo e corte mínimo de **50 mil mulheres** por município, para evitar taxas infladas em cidades pequenas.
- **Naturezas que nunca se somam:** `indicador_oficial`, `indicador_derivado` (taxa) e `memoria_editorial` (fichas). As fichas aparecem com "classificação não confirmada" e o aviso "não é contagem oficial".
- **Comparação estadual com estados nomeados:** igual, divergente, incomparável (bases que não cobrem o mesmo indicador ou período), ausente ou preliminar. "Indisponível não significa zero."
- **Falas públicas** com marcação de fonte única ou fonte insuficiente.

---

## 4. O que levar para os meus projetos (ideias, não decisões)

- **Um projeto de dados públicos com o mesmo rigor, no meu domínio:** por exemplo, indicadores do Banco Central ou da CVM por estado e ao longo do tempo, com manifest, hash da fonte, status `missing` × `zero`, período parcial e taxa com denominador explícito. Mostra maturidade analítica sem depender de experiência profissional em dados.
- **Procedência dentro de cada arquivo de dados** (fonte, versão, hash, data de coleta, revisão): serve para o Portal FinQuant e para o Script de Análise Quantitativa.
- **"Sem dado" ≠ zero** e **nunca somar bases diferentes:** são regras que combinam com o meu `perfil.ts` (o que falta fica `null` e não aparece).
- **Mapa SVG próprio a partir de TopoJSON:** leve, sem biblioteca de mapa. Vale estudar o código da cópia se eu precisar de um mapa.
- **"Ver tabela" ao lado de cada gráfico** e estado da tela na URL (compartilhável).
- **Texto de método curto e honesto** em cada número ("2025 completo + janeiro a setembro de 2026", "preliminar").
