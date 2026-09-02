import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { perfil } from "@/content/perfil";

const navegacao = [
  { href: "/casos", texto: "Casos" },
  { href: "/sobre", texto: "Sobre" },
  { href: "/contato", texto: "Contato" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-rule border-b">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-5">
        <Link
          href="/"
          className="font-display text-ink hover:text-accent text-sm font-bold tracking-tight"
        >
          {perfil.nome}
        </Link>

        <nav aria-label="Navegação principal" className="flex items-center gap-1">
          {navegacao.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ink-muted hover:text-ink rounded-sm px-2 py-2 font-mono text-sm tracking-wide uppercase transition-colors"
            >
              {item.texto}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
