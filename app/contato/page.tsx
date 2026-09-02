import type { Metadata } from "next";

import { Secao } from "@/components/ui/secao";
import { perfil } from "@/content/perfil";

export const metadata: Metadata = {
  title: "Contato",
  description: `Como falar com ${perfil.nome}.`,
};

const linkClasse =
  "text-accent underline decoration-rule underline-offset-4 hover:decoration-accent";

export default function Contato() {
  return (
    <>
      <header className="py-10">
        <h1 className="text-4xl sm:text-5xl">Contato</h1>
        <p className="text-ink-muted mt-4 max-w-[34rem]">
          Aberto a conversas sobre vagas em análise de dados, projetos e colaborações.
          Respondo por e-mail.
        </p>
      </header>

      <Secao rotulo="Onde me achar">
        <dl className="space-y-5 font-mono text-sm">
          <div>
            <dt className="text-ink-muted text-sm tracking-widest uppercase">E-mail</dt>
            <dd className="mt-1">
              <a className={linkClasse} href={`mailto:${perfil.email}`}>
                {perfil.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-ink-muted text-sm tracking-widest uppercase">GitHub</dt>
            <dd className="mt-1">
              <a className={linkClasse} href={perfil.github}>
                @pagliarinimvp
              </a>
            </dd>
          </div>
          {perfil.linkedin ? (
            <div>
              <dt className="text-ink-muted text-sm tracking-widest uppercase">
                LinkedIn
              </dt>
              <dd className="mt-1">
                <a className={linkClasse} href={perfil.linkedin}>
                  Perfil
                </a>
              </dd>
            </div>
          ) : null}
        </dl>
      </Secao>
    </>
  );
}
