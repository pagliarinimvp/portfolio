"use client";

/**
 * Alterna claro/escuro. Os dois icones sao renderizados sempre e o CSS decide
 * qual aparece — assim nao existe divergencia entre servidor e cliente.
 */
export function ThemeToggle() {
  function alternar() {
    const raiz = document.documentElement;
    const escuroAgora = raiz.classList.toggle("dark");
    try {
      localStorage.setItem("tema", escuroAgora ? "escuro" : "claro");
    } catch {
      // Navegacao privativa: a preferencia so nao persiste.
    }
  }

  return (
    <button
      type="button"
      onClick={alternar}
      aria-label="Alternar entre tema claro e escuro"
      className="text-ink-muted hover:text-ink rounded-sm p-2 transition-colors"
    >
      <svg
        className="size-4 dark:hidden"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
      </svg>
      <svg
        className="hidden size-4 dark:block"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}
