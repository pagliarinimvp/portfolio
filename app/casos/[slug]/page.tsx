import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Prosa } from "@/components/ui/prosa";
import { carregarCaso, listarSlugs } from "@/lib/casos";

export const dynamicParams = false;

export function generateStaticParams() {
  return listarSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caso = await carregarCaso(slug);
  if (!caso) return {};

  return {
    title: caso.meta.titulo,
    description: caso.meta.resumo,
    openGraph: {
      title: caso.meta.titulo,
      description: caso.meta.resumo,
      type: "article",
    },
  };
}

export default async function CasoPagina({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caso = await carregarCaso(slug);
  if (!caso) notFound();

  const { meta, Conteudo } = caso;

  return (
    <article className="py-10">
      <header className="border-rule border-b pb-8">
        <p className="text-ink-muted font-mono text-sm tracking-widest uppercase">
          <span data-numeric>{meta.ano}</span> · {meta.papel}
        </p>
        <h1 className="mt-5 max-w-[24ch] text-4xl sm:text-5xl">{meta.titulo}</h1>
        <p className="text-ink-muted mt-5 max-w-[38rem] text-lg">{meta.resumo}</p>
      </header>

      <div className="grid gap-x-10 gap-y-8 pt-8 lg:grid-cols-[9rem_minmax(0,1fr)]">
        <aside className="text-ink-muted space-y-6 font-mono text-sm">
          <div>
            <h2 className="tracking-widest uppercase">Stack</h2>
            <ul className="mt-2 space-y-1">
              {meta.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          {meta.repositorio || meta.siteAoVivo ? (
            <div>
              <h2 className="tracking-widest uppercase">Links</h2>
              <ul className="mt-2 space-y-1">
                {meta.repositorio ? (
                  <li>
                    <a
                      className="text-accent underline underline-offset-4"
                      href={meta.repositorio}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Repositório
                    </a>
                  </li>
                ) : null}
                {meta.siteAoVivo ? (
                  <li>
                    <a
                      className="text-accent underline underline-offset-4"
                      href={meta.siteAoVivo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Site no ar
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>
          ) : null}
        </aside>

        <Prosa>
          <Conteudo />
        </Prosa>
      </div>
    </article>
  );
}
