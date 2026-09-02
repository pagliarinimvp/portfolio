import type { Metadata } from "next";

import { Prosa } from "@/components/ui/prosa";
import { Secao } from "@/components/ui/secao";
import { perfil } from "@/content/perfil";

export const metadata: Metadata = {
  title: "Sobre",
  description: perfil.sobre[0],
};

export default function Sobre() {
  return (
    <>
      <header className="py-10">
        <h1 className="text-4xl sm:text-5xl">Sobre</h1>
        <p className="text-ink-muted mt-4 font-mono text-sm tracking-widest uppercase">
          De negócios e finanças para dados
        </p>
      </header>

      <Secao rotulo="Trajetória">
        <Prosa>
          {perfil.sobre.map((paragrafo) => (
            <p key={paragrafo.slice(0, 32)}>{paragrafo}</p>
          ))}
        </Prosa>
      </Secao>

      {perfil.formacao ? (
        <Secao rotulo="Formação">
          <p className="font-display font-semibold">{perfil.formacao.curso}</p>
          <p className="text-ink-muted">{perfil.formacao.instituicao}</p>
          <p className="text-ink-muted font-mono text-sm" data-numeric>
            {perfil.formacao.conclusao}
          </p>
        </Secao>
      ) : null}

      {perfil.competenciasEmEstudo ? (
        <Secao rotulo="Em estudo">
          <ul className="text-ink-muted flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm">
            {perfil.competenciasEmEstudo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Secao>
      ) : null}
    </>
  );
}
