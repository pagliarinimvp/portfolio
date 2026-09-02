import type { MDXComponents } from "mdx/types";

/**
 * Componentes que o MDX usa. Os estilos de texto longo vivem no <Prosa>, entao
 * aqui ficam so os elementos que precisam de comportamento proprio.
 */
export const mdxComponents: MDXComponents = {
  a: ({ href, children, ...resto }) => {
    const externo = typeof href === "string" && href.startsWith("http");
    return (
      <a
        href={href}
        {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...resto}
      >
        {children}
      </a>
    );
  },
  /** Destaque para uma decisao ou licao dentro do caso. */
  Nota: ({ children }: { children: React.ReactNode }) => (
    <aside className="border-accent bg-accent-soft/60 my-8 border-l-2 px-5 py-4 text-[0.95rem]">
      {children}
    </aside>
  ),
};
