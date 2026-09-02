/**
 * FONTE UNICA dos dados pessoais do site.
 *
 * PENDENTE ate o curriculo chegar (campos `null` somem da pagina, nao viram
 * placeholder visivel para quem acessa):
 *   - cidade
 *   - cargoAtual
 *   - linkedin
 *   - formacao
 *   - competenciasEmEstudo
 *
 * Regra: nao preencher por suposicao. O que nao esta comprovado fica `null`.
 */

export type Formacao = {
  curso: string;
  instituicao: string;
  conclusao: string;
};

export const perfil = {
  nome: "Marcos Vinicius Pagliarini",
  /** Como ele se apresenta hoje, sem afirmar cargo que nao foi confirmado. */
  papel: "Análise e ciência de dados",
  cidade: null as string | null,
  cargoAtual: null as string | null,

  email: "pagliarinimvp@gmail.com",
  github: "https://github.com/pagliarinimvp",
  linkedin: null as string | null,

  /** Manchete da home. Uma frase, sem jargao. */
  manchete: "Vim das finanças. Aprendi a construir o sistema que responde.",

  /** Subtitulo do hero: explica a ponte em duas frases. */
  resumo:
    "Trabalho com negócios e finanças, e entendo o problema antes de escolher a ferramenta. Estou construindo a base técnica para responder a esses problemas com dados — começando por software que foi para produção.",

  /** Texto da pagina Sobre. Cada item vira um paragrafo. */
  sobre: [
    "Minha formação é em negócios e finanças. É de lá que vem a parte que não se aprende em curso de biblioteca: reconhecer qual pergunta vale a pena responder, entender o que está por trás de uma margem, de um custo ou de um risco, e saber quando um número está dizendo menos do que parece.",
    "A transição para dados veio da vontade de responder essas perguntas eu mesmo, sem depender de terceiros para extrair o que já estava no banco. Comecei pela parte mais difícil de fingir: construir e colocar um sistema no ar.",
    "O Portal FinQuant nasceu desse encontro. Peguei o domínio que eu já conhecia — finanças quantitativas — e transformei em uma aplicação Django com banco PostgreSQL, autenticação e deploy em produção. Não é um notebook rodando na minha máquina: é software que outra pessoa consegue acessar.",
    "O próximo passo é a análise em si. Este site cresce junto com ela.",
  ],

  formacao: null as Formacao | null,

  /**
   * So entra aqui o que esta comprovado por projeto publicado.
   * Lista curta e honesta vale mais que grade de icones.
   */
  competencias: [
    { nome: "Python", contexto: "Backend do Portal FinQuant" },
    { nome: "Django", contexto: "Aplicação completa, da modelagem ao deploy" },
    { nome: "PostgreSQL", contexto: "Banco de produção do FinQuant" },
    { nome: "SQL", contexto: "Modelagem e consultas do projeto" },
    { nome: "Git", contexto: "Versionamento de todo o trabalho" },
    { nome: "HTML e Bootstrap", contexto: "Interface do FinQuant" },
  ],

  competenciasEmEstudo: null as string[] | null,
} as const;

export type Perfil = typeof perfil;
