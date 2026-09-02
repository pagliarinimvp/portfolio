import type { MDXComponents } from "mdx/types";

import { mdxComponents } from "@/components/mdx";

/**
 * Ponto unico onde o MDX conhece nossos componentes.
 * O @next/mdx procura este arquivo na raiz do projeto por convencao.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...mdxComponents, ...components };
}
