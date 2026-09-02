# Portfólio — Marcos Vinicius Pagliarini

Site pessoal de um profissional de **negócios/financeiro migrando para análise e
ciência de dados**. Não é portfólio de desenvolvedor: a narrativa é a ponte entre
domínio de negócio e competência técnica.

## Comandos

```bash
npm run dev          # desenvolvimento em http://localhost:3000
npm run build        # build de produção
npm run typecheck    # tsc --noEmit
npm run lint         # eslint
npm run format       # prettier --write
npm run test         # vitest (unitários)
npm run test:e2e     # playwright + axe (faz o build antes)
```

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript strict · Tailwind v4 ·
MDX via `@next/mdx` · deploy na Vercel. Site totalmente estático: sem banco, sem
CMS, sem chamada de API em runtime.

## Regras deste repositório

**Nunca inventar fato sobre o Marcos.** Cargo, formação, cidade, métricas e
resultados só entram quando ele fornecer. O que falta fica `null` em
`content/perfil.ts` e a seção correspondente não renderiza — o site nunca exibe
placeholder para quem acessa.

**`content/perfil.ts` é a fonte única** de todo dado pessoal. Nenhum componente
escreve nome, e-mail ou biografia direto no JSX.

**Adicionar um estudo de caso** = criar um `.mdx` em `content/casos/` exportando
`meta` (ver `lib/casos.ts` para o formato). Rota, índice, sitemap e página se
atualizam sozinhos. Não editar rota para isso.

**Cores e tipografia só saem dos tokens** em `app/globals.css`. Nenhum hex solto
em componente. A paleta é "tinta e papel de cotação": tinta azul-marinho e um
único acento, o verde de alta do mercado.

**Escopo é decisão do Marcos.** Não adicionar seções, projetos ou bibliotecas de
gráfico por iniciativa própria. A v1 é deliberadamente mínima.

**`.mdx` fica fora do Prettier** (`.prettierignore`). O Prettier formata MDX com
o parser de markdown e transforma `{/* comentário */}` em `{/_ … _/}`, o que
quebra o build. Formatar conteúdo à mão.

## Convenções de código

- Código e identificadores em português, seguindo o domínio (`Secao`, `perfil`,
  `carregarCaso`). Termos técnicos que são API do framework ficam em inglês.
- Comentários explicam _por que_, não _o que_.
- Server components por padrão; `"use client"` só onde há interação real
  (`components/theme-toggle.tsx` é o único hoje).
- Toda animação respeita `prefers-reduced-motion` — a regra global já cobre.

## Skills

- `superpowers:brainstorming` antes de qualquer funcionalidade nova
- `frontend-design` antes de mexer em design system ou layout
- `dataviz` antes do primeiro gráfico de dados reais
- `context7` para consultar docs de Next e Tailwind — as duas mudaram
  recentemente e responder de memória gera código desatualizado
- `superpowers:verification-before-completion` antes de dizer que algo está pronto

## Pendências

1. Currículo do Marcos → preenche `content/perfil.ts`
2. Seção "o que deu errado" do caso FinQuant (marcada no `.mdx`) — só ele sabe
3. Domínio próprio → `NEXT_PUBLIC_SITE_URL` na Vercel
