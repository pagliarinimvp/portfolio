import { describe, expect, it } from "vitest";

import { calcularSerie } from "@/lib/juros";

describe("calcularSerie", () => {
  it("bate com a fórmula fechada de anuidade antecipada", () => {
    const aporte = 500;
    const taxa = 0.008;
    const meses = 360;

    const esperado = aporte * ((Math.pow(1 + taxa, meses) - 1) / taxa) * (1 + taxa);

    const { acumulado } = calcularSerie(aporte, taxa, meses);

    expect(acumulado.at(-1)).toBeCloseTo(esperado, 6);
  });

  it("sem juros, o montante é exatamente a soma dos aportes", () => {
    const { aportado, acumulado } = calcularSerie(100, 0, 12);

    expect(acumulado.at(-1)).toBe(1200);
    expect(aportado.at(-1)).toBe(1200);
  });

  it("o montante supera o aportado quando há juros", () => {
    const { aportado, acumulado } = calcularSerie(500, 0.008, 360);

    expect(acumulado.at(-1)!).toBeGreaterThan(aportado.at(-1)!);
  });

  it("devolve uma entrada por mês", () => {
    const { aportado, acumulado } = calcularSerie(500, 0.008, 24);

    expect(aportado).toHaveLength(24);
    expect(acumulado).toHaveLength(24);
  });
});
