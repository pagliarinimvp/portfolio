// Captura as telas para revisao visual. Uso: node scripts/screenshot.mjs
import { chromium } from "@playwright/test";

const base = process.env.BASE_URL ?? "http://127.0.0.1:3100";
const telas = [
  ["home-claro", "/", "light", 1280],
  ["home-escuro", "/", "dark", 1280],
  ["caso", "/casos/portal-finquant", "light", 1280],
  ["casos", "/casos", "light", 1280],
  ["sobre", "/sobre", "light", 1280],
  ["home-mobile", "/", "light", 390],
];

const navegador = await chromium.launch();
for (const [nome, caminho, tema, largura] of telas) {
  const pagina = await navegador.newPage({
    viewport: { width: largura, height: 900 },
    colorScheme: tema,
  });
  await pagina.goto(base + caminho, { waitUntil: "networkidle" });
  await pagina.waitForTimeout(2200); // deixa a animacao do hero terminar
  await pagina.screenshot({ path: `.screenshots/${nome}.png`, fullPage: false });
  await pagina.close();
}
await navegador.close();
console.log("screenshots em .screenshots/");
