import type { ReactNode } from "react";

/**
 * Bloco editorial com marginalia: o rotulo vive na margem esquerda em telas
 * largas e vira uma linha acima do conteudo no mobile. O rotulo carrega
 * metadado real (o que e aquela secao), nao um numero ordinal.
 */
export function Secao({
  rotulo,
  children,
  className = "",
}: {
  rotulo: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`border-rule grid gap-x-10 gap-y-3 border-t py-12 lg:grid-cols-[9rem_minmax(0,1fr)] ${className}`}
    >
      <h2 className="text-ink-muted font-mono text-xs font-normal tracking-widest uppercase lg:pt-1">
        {rotulo}
      </h2>
      <div className="max-w-[38rem]">{children}</div>
    </section>
  );
}
