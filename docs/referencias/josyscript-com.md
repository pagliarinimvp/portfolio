# Referência: josyscript.com (Josyane Santos)

Análise feita em 31/10/2026 a partir do código publicado (HTML, bundle JS e CSS). O site é uma SPA: o `WebFetch` só enxerga o título, então o conteúdo saiu do bundle. Se o site mudar, os arquivos `/assets/index-*.js` terão outro hash.

**Por que guardar:** portfólio de uma engenheira full stack que está migrando para **Analytics / Business Analyst**. Três pontos servem de modelo para o meu portfólio: (1) identidade visual forte e coerente (tema de videogame portátil), (2) uma seção pública de **estudos em andamento**, com trilha, progresso e cases, e (3) um **Lab** com lições interativas de SQL, funil, A/B e modelo estrela.

---

## 1. Visão geral

| Item                  | Valor                                                                                                                 |
| --------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Pessoa                | Josyane Santos, Full Stack Engineer, Rio de Janeiro                                                                   |
| Meta description      | "Josyane Santos — Full Stack Engineer. Node.js, React, TypeScript. Fintech & e-commerce platforms serving 1M+ users." |
| Stack do site         | Vite + React 18 (SPA, roteamento manual por `pathname`), ícones Lucide, lazy loading por rota                         |
| Idiomas               | PT e EN (botão PT \| EN; padrão pelo idioma do navegador, guardado em `localStorage` `portfolio-language`)            |
| Contato               | josydevs@gmail.com · GitHub `josydev` · LinkedIn `in/josydev`                                                         |
| Redes (página /links) | YouTube `@josyscript`, Substack `@josyanes`, TikTok `@josystartar`, Instagram (clube)                                 |

### Rotas

| Rota                   | O que é                                                                                   |
| ---------------------- | ----------------------------------------------------------------------------------------- |
| `/`                    | Portfólio (seções `#intro`, `#about`, `#experience`, `#projects`, `#estudos`, `#contact`) |
| `/lab` e `/lab/<slug>` | Laboratório de estudos: lições interativas                                                |
| `/clubedolivro`        | Clube do Livro (página temática à parte)                                                  |
| `/links`               | Página de links (estilo "link na bio"), com tema de câmera digital e player de vídeo      |

---

## 2. Identidade visual

**Conceito:** console portátil retrô, "JOSY BOY — Developer Edition", tela LCD verde de matriz de pontos. Toda a navegação usa metáforas de jogo: PLAYER 01, ♥ ♥ ♥, "ESCOLHA UMA FASE", "WORLD 01 — RIO DE JANEIRO", "MISSÕES CONCLUÍDAS".

**Tipografia (Google Fonts):** Press Start 2P (títulos pixelados), VT323 (texto de terminal), Space Mono (corpo/mono). Leitura longa: fonte do sistema (`--reading`).

**Paleta (tokens CSS no `:root`):**

| Token                          | Cor                                               | Uso                                      |
| ------------------------------ | ------------------------------------------------- | ---------------------------------------- |
| `--navy`                       | `#223128`                                         | fundo principal (verde-escuro, não azul) |
| `--dark-navy`                  | `#1c2821`                                         | fundo mais escuro                        |
| `--light-navy`                 | `#28392d`                                         | superfícies                              |
| `--lightest-navy`              | `#43563b`                                         | bordas                                   |
| `--navy-shadow`                | `#101b14`                                         | sombras                                  |
| `--accent` / `--yellow`        | `#c3dc87`                                         | destaque (verde-limão LCD)               |
| `--lcd`                        | `#bbcf83`                                         | tela do console                          |
| `--slate` / `--light-slate`    | `#c0c9b5`                                         | texto secundário                         |
| `--white` / `--lightest-slate` | `#e2e8d5`                                         | texto principal                          |
| `--club-green`                 | `#d6a7c0`                                         | rosa do Clube do Livro                   |
| Lab                            | `#3aa39b #e0703c #4a74c9 #e8b23a #9a6bc4 #d65a6f` | séries categóricas das lições            |

**Detalhes de interação que valem copiar:**

- Hero é um console: menu navegável com ↑ ↓ (teclado e botões do D-pad na tela), A = abrir, B = voltar ao início. Cena em SVG pixelado (`shape-rendering: crispEdges`) de uma personagem digitando num monitor de tubo, com mãos animadas e cursor piscando.
- Seções entram com fade ao rolar (`IntersectionObserver`).
- Experiência em abas verticais por empresa (`role="tablist"`).
- Cards de projeto numerados (01, 02, 03) com ícone pixelado.
- Acessibilidade levada a sério: link "pular para o conteúdo", `aria-*` em tudo, armadilha de foco no modal, Esc fecha, `aria-live` nos anúncios.

---

## 3. Conteúdo do portfólio (versão PT)

### Intro

"oi, josyane aqui." · "Eu construo coisas para a web." · CTA "Diga oi!" · rodapé do hero: "NODE.JS + REACT + TYPESCRIPT" · "EST. 2020".

### 01 / A Jogadora (Sobre)

- Engenheira Full Stack com mais de 5 anos, mentalidade backend-first, Node.js, React e TypeScript em fintech e e-commerce com mais de 1 milhão de usuários.
- Orientada a produto: trabalha com produto, design e stakeholders para gerar impacto de negócio.
- Security Champion, acessibilidade WCAG 2.1, mentoria de juniores, fluxos assistidos por IA.
- **Stack:** Frontend (React, Next.js, TypeScript, Microfrontends/Module Federation, Zustand, React Query, Apollo Client) · Backend (Node.js, Express, APIs REST, GraphQL, Microsserviços, Autenticação) · Arquitetura & DevOps (AWS, Docker, CI/CD, DDD, Clean Architecture, New Relic, Kibana).

### 02 / Trajetória

| Empresa           | Cargo                       | Período             | Destaques                                                                                                                                                                                                                                                                                   |
| ----------------- | --------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Grupo Boticário   | Eng. de Software Full Stack | ago/2022 – abr/2026 | apps para 1M+ usuários; performance +30% (cache, CDN, code splitting); Security Champion; observabilidade (New Relic, Kibana), CI/CD, feature toggles; no ClickGB, APIs para 10 mil colaboradores; entrega de features 40% mais rápida com microfrontends; integrações REST + MongoDB/Redis |
| BTG Pactual       | Eng. de Software            | jul/2021 – jun/2022 | plataforma financeira em tempo real, APIs 35% mais rápidas; dashboards de monitoramento; AWS                                                                                                                                                                                                |
| Clave Consultoria | Dev Frontend Jr             | set/2020 – jul/2021 | clientes SulAmérica, Globo, Equinor; relatórios interativos em AngularJS; refatoração de legado                                                                                                                                                                                             |
| Stays             | Estagiária Frontend         | jan/2020 – ago/2020 | sites de clientes (HTML/CSS/JS/Bootstrap/jQuery); Kanban                                                                                                                                                                                                                                    |

Repare na escrita: cada bullet = verbo no passado + o quê + **número de impacto**.

### 03 / Missões concluídas (Projetos)

1. **Mapa de Feminicídio** — mapa interativo por estado e município com dados oficiais do Sinesp/MJSP, fonte e método explicados. Vite, Dados abertos, Cloudflare. <https://mapafeminicidio.josyscript.com/>
2. **Exame Invest Pro** — plataforma de dados financeiros em tempo real no BTG Pactual. React, Next.js, Node.js, RethinkDB, Chakra UI.
3. **Mais no GitHub** — <https://github.com/josydev>

### 04 / Em modo de estudo (só na versão PT)

"O que estou estudando agora — Meu mapa de estudos em dados e negócios. Um assunto de cada vez." Barra "MEU PROGRESSO: X de Y etapas concluídas" (em 31/10/2026, todas as etapas como _planejada_). Cada trilha é um cartão "MEM 01 · SQL" ligado por cabos SVG às etapas (○ planejada, ◐ em andamento, ✓ concluída); mostra 2 trilhas e "Ver mais trilhas". Clicar abre um painel lateral com: **O que estudar · Na prática · Case para resolver · Perguntas de entrevista · Critério de conclusão · Materiais de apoio**. Detalhe na seção 5.

### Contato

"04 / Diga oi!", e-mail, ícones GitHub/LinkedIn/E-mail. Crédito: "Construído e projetado por Josyane Santos · PLAYER 01".

---

## 4. Páginas extras

**Clube do Livro (`/clubedolivro`)** — "Menos código. Mais histórias. Um clube de uma pessoa de tech. Para ler além da bolha." Capa rosa estilo terminal ("VOL. 01", binário). Primeiro livro: _A tatuagem de pássaro_, de Dunya Mikhail (Tabla), em experiência de 3 meses; ponto de encontro no Instagram ("Em breve").

**Links (`/links`)** — tema de câmera digital ("JOSY CAM", "little memories, big dreams ♡") com adesivos recortados em SVG (coração, estrelas, borboleta, morango, flor, arco-íris) e um player tipo iPod com roda clicável para 4 vídeos do YouTube (embed `youtube-nocookie`, só carrega ao clicar). Links: YouTube, Portfólio, Mapa de Feminicídio, Clube do Livro, Substack, TikTok.

**Lab (`/lab`)** — "LAB · EXPLORE · ENTENDA · PRATIQUE". 6 lições interativas, cada uma ligada a uma etapa da trilha, com cena ilustrada em SVG isométrico e um editor de código com **lacunas para completar** (a lição confere a resposta e dá dica). Navega com ← →, guarda as lições visitadas e mostra progresso.

| Slug         | Trilha                   | Título     | Ideia central                                                 |
| ------------ | ------------------------ | ---------- | ------------------------------------------------------------- |
| `left-join`  | Base de comandos (SQL)   | LEFT JOIN  | O LEFT JOIN nunca deixa ninguém da esquerda para trás.        |
| `group-by`   | Base de comandos (SQL)   | GROUP BY   | WHERE tira vendas antes de somar; HAVING tira grupos depois.  |
| `window-lag` | Base de comandos (SQL)   | WINDOW LAG | Cada linha espia a vizinha de trás, sem se juntar a ela.      |
| `funil`      | Radar de negócio         | FUNIL      | Cada portão só deixa passar uma parte de quem chegou nele.    |
| `ab-test`    | Laboratório de hipóteses | A/B TEST   | Diferença pequena só vira certeza com muita gente.            |
| `estrela`    | Central de indicadores   | ESTRELA    | O filtro escorre da dimensão para a fato, nunca ao contrário. |

---

## 5. Trilha de estudos completa (Data Analyst / Business Analyst)

8 trilhas, 61 etapas. Formato de cada etapa: estudo → prática (SQL sobre uma base de pedidos de e-commerce) → case → pergunta de entrevista → critério de conclusão. **[LAB]** = tem lição interativa.

### SQL — "Base de comandos" (consultas, joins, agregações, CTEs, janelas e datas)

1. **SELECT, WHERE, ORDER BY** — top 10 pedidos, filtro por intervalo de datas. Case: defina "melhor cliente" antes de consultar.
2. **Agregações** — pedidos, compradores, receita, ticket por país; COUNT(*) × COUNT(user_id). Case: região com mais receita e menos pedidos.
3. **HAVING e CASE WHEN** [LAB] — clientes com 3+ pedidos; faixas <100, 100–300, ≥300 sem sobreposição; testar os limites.
4. **INNER JOIN** — comparar contagem antes/depois do join. Case: o JOIN aumentou a receita em 40% (duplicação?).
5. **LEFT JOIN** [LAB] — anti-join; filtro em ON × WHERE.
6. **NULL e COALESCE** — NULLIF no denominador, divisão decimal; zero × desconhecido × não aplicável.
7. **Revisão SQL I** — 40 min, 4 consultas; apresentar achado, hipótese e limitação em 3 min; história STAR.
8. **Subqueries** — EXISTS/NOT EXISTS; por que NOT IN falha com NULL.
9. **CTEs** — consulta auditável comentada + dicionário de 5 campos.
10. **Datas** — intervalos fechados à esquerda e abertos à direita; não comparar mês completo com mês parcial.
11. **Window Functions I** — receita acumulada (ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW), participação no total.
12. **ROW_NUMBER, RANK, DENSE_RANK** — top 3 por país, deduplicar tentativas com desempate explícito.
13. **LAG e LEAD** [LAB] — variação MoM; LAG só é "mês anterior" com calendário completo.
14. **Revisão SQL II** — 45 min cronometrados; explicar consulta a não técnico em 2 min.

### Excel — "Oficina de planilhas"

1. **Fórmulas para investigar** — PROCX, ÍNDICE/CORRESP, SOMASES, CONT.SES; conciliar totais e IDs sem correspondência.
2. **Tabelas dinâmicas e Power Query** — mesclar × acrescentar; fluxo reproduzível com validação.
3. **Case de queda de receita** — base de 50 mil pedidos; três hipóteses; não confundir mix com causalidade.

### Analytics — "Radar de negócio" (funil, retenção, cohort, métricas)

- **Funil de conversão** [LAB] — unidade = sessão; purchase não pode vir antes de checkout.
- **Retenção** — recompra em 30 dias só para quem teve 30 dias de observação (janela madura).
- **Cohort** — mês da primeira compra × meses 0, 1, 2; células imaturas marcadas.
- **Churn** — sem assinatura, churn é definição operacional (30 × 60 dias de inatividade).
- **Receita** — receita = pedidos × AOV. Case: pedidos +10% e ticket −15% → **receita −6,5%** (1,10 × 0,85 = 0,935).
- **Mock SQL completo** (60 min).
- **Framework de investigação** — conversão 10% → 9% = **−1 pp e −10%**.
- **Métricas de produto** — ativação, DAU/WAU/MAU, stickiness; métrica principal + 3 guardrails.
- **Métricas de negócio** — margem, CAC, limites do LTV; "não invente custos".
- **Funnel Analysis** — cada segmento melhora e o total piora (mudança de mix / Simpson).
- **Causa raiz** — Pareto e 5 porquês. Case: cancelamentos 100/1.000 → 130/2.000; **a taxa cai de 10% para 6,5%**.
- **Criação de hipóteses** — cada hipótese com teste e condição de refutação.
- **Mock Analytics Case** — pedidos −12% na semana, 25 min + 5 de apresentação.
- **Árvore de métricas** — receita = pedidos pagos × ticket; numerador e denominador de cada taxa.

### Estatística — "Laboratório de hipóteses"

- **Descritiva** — 10, 10, 10, 20, 950: média 200, mediana 10; p90.
- **Variância e desvio padrão** — outlier não é necessariamente erro.
- **Amostra e população** — 3 vieses e mitigações.
- **Correlação e causalidade** — cupom × retenção (seleção).
- **Teste de hipótese** — p = 0,03 **não** é 97% de chance de estar certo; significância ≠ impacto.
- **A/B Testing** [LAB] — A 500/5.000 × B 550/5.000 = **+1 pp / +10%**; MDE, duração, SRM, não parar no primeiro p < 0,05.

### Power BI — "Central de indicadores"

- **Estrutura** (Power Query, reconciliação de totais) · **Modelagem** [LAB] (fato por pedido, tentativas em fato separada) · **DAX básico** (SUM, CALCULATE, DIVIDE; medida × coluna calculada) · **KPIs** (cada visual ligado a uma pergunta e uma ação) · **Storytelling** (contexto, achado, evidência, limitação, recomendação) · **Projeto BI** (dashboard v1 + dicionário + limitações) · **Inteligência de tempo** (calendário, YTD, MoM, YoY, período parcial).

### Negócios — "Mapa de decisões" (Business Analyst)

- **Requirement Gathering** (10 perguntas de descoberta; pedido de solução × necessidade) · **As-Is / To-Be** (BPMN, gaps) · **User Stories e critérios Given/When/Then, UAT** · **Priorização** (MoSCoW, RICE, impacto/esforço) · **Business Case** (simulado de 40 min) · **Processos e prioridades** (BPMN, regras, exceções, Pareto, 5 porquês).

### Python & dados — "Oficina de dados"

- **pandas básico** (mesma definição em SQL e Python) · **Manipulação** (groupby, merge com `validate`, pivot_table) · **Data Quality** (PK duplicada, FK órfã, freshness; reconciliar 12 mi × 10 mi) · **Modelagem** (raw → staging → mart, dbt incremental, testes unique/not_null, particionamento no BigQuery, Airflow e reprocessamento).

### Entrevistas — "Sala de treinamento"

- Mock SQL (60 + 30 min) · Mock Data Analyst · Mock Business Analyst · Simulação final completa (nota por dimensão, 3 lacunas, 14 dias de reforço) · **Projeto de conversão** (SQL + dashboard + resumo executivo) · **Projeto de atrasos em delivery** · **Comunicação e repertório** (STAR, estimativas, "por que migrar para Analytics e como sua experiência ajuda").

Regra que aparece várias vezes: **dados sintéticos sempre identificados, sem alegar impacto real nem inventar experiência analítica.**

### Materiais de apoio (todos conferidos em 16/10/2026)

- **SQL (PostgreSQL docs):** [tutorial](https://www.postgresql.org/docs/current/tutorial-sql.html) · [joins/GROUP BY](https://www.postgresql.org/docs/current/queries-table-expressions.html) · [CASE/COALESCE](https://www.postgresql.org/docs/current/functions-conditional.html) · [subconsultas](https://www.postgresql.org/docs/current/functions-subquery.html) · [WITH](https://www.postgresql.org/docs/current/queries-with.html) · [datas](https://www.postgresql.org/docs/current/functions-datetime.html) · [janelas (tutorial)](https://www.postgresql.org/docs/current/tutorial-window.html) · [funções de janela](https://www.postgresql.org/docs/current/functions-window.html)
- **Produto (Amplitude):** [funil](https://amplitude.com/docs/analytics/charts/funnel-analysis/funnel-analysis-build) · [retenção](https://amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-build) · [guia de métricas (PDF)](https://info.amplitude.com/rs/138-CDN-550/images/The%20Amplitude%20Guide%20to%20Product%20Metrics.pdf) · [LTV e cohorts](https://www.amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-n-day-ltv)
- **Estatística e experimentos:** [OpenIntro Statistics](https://www.openintro.org/book/os/) · [Microsoft: experimentos confiáveis](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-pre-experiment-stage/) · [Microsoft: SRM em A/B](https://www.microsoft.com/en-us/research/articles/diagnosing-sample-ratio-mismatch-in-a-b-testing/)
- **Power BI/DAX:** [mesclar consultas](https://learn.microsoft.com/en-us/power-query/merge-queries-overview) · [acrescentar](https://learn.microsoft.com/en-us/power-query/append-queries) · [esquema estrela](https://learn.microsoft.com/en-us/power-bi/guidance/star-schema) · [DAX](https://learn.microsoft.com/en-us/dax/dax-overview) · [inteligência de tempo](https://learn.microsoft.com/en-us/dax/time-intelligence-functions-dax) · [design de dashboards](https://learn.microsoft.com/en-us/power-bi/create-reports/service-dashboards-design-tips)
- **Excel:** [PROCX](https://support.microsoft.com/pt-br/excel/functions/xlookup-function) · [tabela dinâmica](https://support.microsoft.com/pt-br/excel/get-started/create-a-pivottable-to-analyze-worksheet-data)
- **Negócios:** [IIBA Core Standard (PDF)](https://www.iiba.org/globalassets/standards-and-resources/core-standard/iiba-core-standard.pdf) · [user stories](https://agilealliance.org/glossary/user-stories/) · [testes de aceitação](https://agilealliance.org/glossary/acceptance-testing/) · [BPMN 2.0.2](https://www.omg.org/spec/BPMN/2.0.2) · [RICE](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers) · [MoSCoW](https://www.agilebusiness.org/resource/what-is-moscow-prioritization/) · [5 porquês](https://asq.org/quality-resources/five-whys) · [Pareto](https://asq.org/quality-resources/pareto)
- **Engenharia de dados:** [pandas tutoriais](https://pandas.pydata.org/docs/getting_started/intro_tutorials/) · [pandas merge](https://pandas.pydata.org/docs/user_guide/merging.html) · [dbt testes](https://docs.getdbt.com/docs/build/data-tests) · [dbt incremental](https://docs.getdbt.com/docs/build/incremental-models) · [Airflow boas práticas](https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html) · [BigQuery particionamento](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- **Entrevista:** [método STAR](https://nationalcareers.service.gov.uk/careers-advice/interview-advice/the-star-method)

---

## 6. O que levar para o meu portfólio (ideias, não decisões)

- **Seção "Em modo de estudo"** com trilha pública e progresso honesto (tudo começa como _planejada_). Combina com a regra do meu site de nunca inventar fato: mostra o caminho sem fingir experiência.
- **Formato de etapa** (estudar → praticar → case → pergunta de entrevista → critério de conclusão) serve tanto para o portfólio quanto para o Maestro.
- **Cases com resposta numérica** (−6,5%, −1 pp × −10%, taxa de 10% → 6,5%) são ótimos para estudos de caso curtos com o meu ângulo financeiro.
- **Lab interativo** com lacunas para completar: um diferencial grande, mas caro de construir; dá para começar com uma lição só.
- **Tema visual próprio e coerente** do começo ao fim: no meu caso, o tema "tinta e papel de cotação" já faz esse papel.
- **Bullets de experiência com número de impacto**, e páginas extras (clube do livro, links) que mostram a pessoa além do trabalho.
