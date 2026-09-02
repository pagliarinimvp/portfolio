import { perfil } from "@/content/perfil";

export function SiteFooter() {
  return (
    <footer className="border-rule mt-24 border-t">
      <div className="text-ink-muted mx-auto flex max-w-[clamp(64rem,80vw,88rem)] flex-wrap items-baseline justify-between gap-4 px-6 py-8 font-mono text-sm">
        <p>
          {perfil.nome} · <span data-numeric>{new Date().getFullYear()}</span>
        </p>
        <p className="flex gap-5">
          <a className="hover:text-ink" href={perfil.github}>
            GitHub
          </a>
          <a className="hover:text-ink" href={`mailto:${perfil.email}`}>
            E-mail
          </a>
          {perfil.linkedin ? (
            <a className="hover:text-ink" href={perfil.linkedin}>
              LinkedIn
            </a>
          ) : null}
        </p>
      </div>
    </footer>
  );
}
