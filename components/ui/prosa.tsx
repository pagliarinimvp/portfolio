import type { ReactNode } from "react";

/** Coluna de leitura. Um unico lugar define o ritmo tipografico do texto longo. */
export function Prosa({ children }: { children: ReactNode }) {
  return (
    <div className="[&_a]:decoration-rule [&_a]:hover:decoration-accent [&_a]:text-accent [&_blockquote]:border-accent [&_blockquote]:text-ink-muted max-w-[38rem] [&_a]:underline [&_a]:underline-offset-4 [&_blockquote]:border-l-2 [&_blockquote]:pl-5 [&_blockquote]:italic [&_code]:font-mono [&_code]:text-[0.9em] [&_h2]:mt-12 [&_h2]:mb-3 [&_h2]:text-2xl [&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:text-lg [&_li]:mb-2 [&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:my-5 [&_strong]:font-semibold [&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-5">
      {children}
    </div>
  );
}
