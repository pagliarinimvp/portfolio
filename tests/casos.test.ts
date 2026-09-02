import { describe, expect, it } from "vitest";

import { listarCasos, listarSlugs } from "@/lib/casos";

describe("catálogo de casos", () => {
  it("descobre os arquivos de content/casos sem registro manual", () => {
    expect(listarSlugs()).toContain("portal-finquant");
  });

  it("todo caso expõe os metadados que as páginas consomem", async () => {
    const casos = await listarCasos();
    expect(casos.length).toBeGreaterThan(0);

    for (const caso of casos) {
      expect(caso.meta.titulo).toBeTruthy();
      expect(caso.meta.resumo).toBeTruthy();
      expect(caso.meta.ano).toMatch(/^\d{4}$/);
      expect(caso.meta.papel).toBeTruthy();
      expect(caso.meta.stack.length).toBeGreaterThan(0);
    }
  });
});
