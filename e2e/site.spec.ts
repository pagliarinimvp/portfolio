import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const paginas = ["/", "/casos", "/casos/portal-finquant", "/sobre", "/contato"];

test.describe("acessibilidade", () => {
  for (const caminho of paginas) {
    test(`${caminho} não tem violações de WCAG A/AA`, async ({ page }) => {
      await page.goto(caminho);

      const resultado = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

      expect(resultado.violations).toEqual([]);
    });
  }

  test("o tema claro também passa na verificação", async ({ page }) => {
    await page.addInitScript(() => localStorage.setItem("tema", "claro"));
    await page.goto("/");

    const resultado = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();

    expect(resultado.violations).toEqual([]);
  });
});

test.describe("navegação", () => {
  test("chega ao estudo de caso a partir da home", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Ver os casos" }).click();
    await expect(page).toHaveURL(/\/casos$/);

    await page.getByRole("link", { name: "Portal FinQuant" }).click();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Portal FinQuant");
  });

  test("o link de pular conteúdo aparece ao focar com teclado", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");

    const pular = page.getByRole("link", { name: "Pular para o conteúdo" });
    await expect(pular).toBeFocused();
    await expect(pular).toBeVisible();
  });

  test("abre no tema escuro por padrão e mantém a escolha ao alternar", async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme: "light" });
    await page.goto("/");

    const html = page.locator("html");
    await expect(html).toHaveClass(/dark/);

    await page.getByRole("button", { name: /Alternar entre tema/ }).click();
    await expect(html).not.toHaveClass(/dark/);

    await page.reload();
    await expect(html).not.toHaveClass(/dark/);
  });
});

for (const largura of [320, 360]) {
  test(`a página não rola na horizontal em ${largura}px`, async ({ page }) => {
    await page.setViewportSize({ width: largura, height: 780 });

    for (const caminho of paginas) {
      await page.goto(caminho);
      const estoura = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
      );
      expect(estoura, `rolagem horizontal em ${caminho}`).toBe(false);
    }
  });
}
