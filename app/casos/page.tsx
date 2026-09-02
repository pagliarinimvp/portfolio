import type { Metadata } from "next";
import Link from "next/link";

import { Secao } from "@/components/ui/secao";
import { listarCasos } from "@/lib/casos";

export const metadata: Metadata = {
  title: "Casos",
  description: "Estudos de caso: o problema, as decisões e o que ficou de aprendizado.",
};

export default async function Casos() {
  const casos = await listarCasos();

  return (
    <>
      <header className="py-16">
        <h1 className="text-4xl sm:text-5xl">Casos</h1>
        <p className="text-ink-muted mt-4 max-w-[34rem]">
          Cada caso conta o problema, as decisões tomadas e o que deu errado no caminho —
          não só a lista de tecnologias.
        </p>
      </header>

      {casos.map((caso) => (
        <Secao key={caso.slug} rotulo={caso.meta.ano}>
          <h2 className="text-2xl">
            <Link href={`/casos/${caso.slug}`} className="hover:text-accent">
              {caso.meta.titulo}
            </Link>
          </h2>
          <p className="text-ink-muted mt-2">{caso.meta.resumo}</p>
          <p className="text-ink-muted mt-4 font-mono text-sm">
            {caso.meta.papel} · {caso.meta.stack.join(" · ")}
          </p>
        </Secao>
      ))}
    </>
  );
}
