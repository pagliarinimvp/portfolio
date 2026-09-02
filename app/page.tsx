import Link from "next/link";

import { CurvaJuros } from "@/components/curva-juros";
import { Secao } from "@/components/ui/secao";
import { perfil } from "@/content/perfil";
import { listarCasos } from "@/lib/casos";

export default async function Home() {
  const casos = await listarCasos();

  return (
    <>
      <section className="border-rule grid gap-12 border-b py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:py-24">
        <div>
          <p className="text-ink-muted font-mono text-xs tracking-widest uppercase">
            {perfil.papel}
          </p>
          <h1 className="mt-5 text-4xl leading-[1.05] sm:text-5xl">{perfil.manchete}</h1>
          <p className="text-ink-muted mt-6 max-w-[34rem]">{perfil.resumo}</p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs">
            <Link
              href="/casos"
              className="text-accent decoration-rule hover:decoration-accent underline underline-offset-4"
            >
              Ver os casos
            </Link>
            <Link
              href="/sobre"
              className="text-ink-muted decoration-rule hover:text-ink underline underline-offset-4"
            >
              Sobre a transição
            </Link>
          </div>
        </div>

        <CurvaJuros />
      </section>

      <Secao rotulo="Estudo de caso">
        <ul className="space-y-10">
          {casos.map((caso) => (
            <li key={caso.slug}>
              <h3 className="text-2xl">
                <Link href={`/casos/${caso.slug}`} className="hover:text-accent">
                  {caso.meta.titulo}
                </Link>
              </h3>
              <p className="text-ink-muted mt-2">{caso.meta.resumo}</p>
              <p className="text-ink-muted mt-3 font-mono text-xs">
                <span data-numeric>{caso.meta.ano}</span> · {caso.meta.stack.join(" · ")}
              </p>
            </li>
          ))}
        </ul>
      </Secao>

      <Secao rotulo="Competências">
        <p className="text-ink-muted mb-6">
          Lista curta de propósito: só entra o que está comprovado em projeto publicado.
        </p>
        <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {perfil.competencias.map((competencia) => (
            <div key={competencia.nome}>
              <dt className="font-display font-semibold">{competencia.nome}</dt>
              <dd className="text-ink-muted font-mono text-xs">{competencia.contexto}</dd>
            </div>
          ))}
        </dl>
      </Secao>
    </>
  );
}
