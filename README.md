# Portfólio — Marcos Vinicius Pagliarini

Site pessoal de análise e ciência de dados. Next.js 16, TypeScript, Tailwind v4,
conteúdo em MDX. Estático: sem banco, sem CMS, sem chamada de API em runtime.

## Rodar localmente

```bash
npm install
npm run dev     # http://localhost:3000
```

## Verificação

```bash
npm run lint        # ESLint
npm run typecheck   # tsc --noEmit
npm run test        # Vitest — matemática dos juros e contrato dos casos
npm run test:e2e    # Playwright + axe, em desktop e mobile, claro e escuro
npm run build       # build de produção
```

O CI (`.github/workflows/ci.yml`) roda tudo isso a cada push e pull request.

## Onde mexer

| Quero…                                | Arquivo                            |
| ------------------------------------- | ---------------------------------- |
| Mudar nome, e-mail, bio, competências | `content/perfil.ts`                |
| Adicionar um estudo de caso           | novo `.mdx` em `content/casos/`    |
| Mudar cores ou tipografia             | `app/globals.css` (tokens)         |
| Configurar o domínio                  | `NEXT_PUBLIC_SITE_URL` no ambiente |

Adicionar um caso não exige tocar em rota, índice ou sitemap: `lib/casos.ts`
descobre os arquivos e o resto se atualiza sozinho. O formato de `meta` que cada
`.mdx` precisa exportar está tipado como `CasoMeta` no mesmo arquivo.

## Deploy

Vercel, com build padrão do Next.js. Definir `NEXT_PUBLIC_SITE_URL` com a URL
final para que sitemap, robots e as imagens de compartilhamento apontem para o
domínio certo.
