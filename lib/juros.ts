/**
 * Juros compostos com aportes mensais, no regime de anuidade antecipada:
 * o aporte do mes entra antes da capitalizacao daquele mes.
 *
 * E a mesma regra da calculadora do Portal FinQuant, isolada aqui para poder
 * ser verificada por teste contra a formula fechada.
 */

export type SerieJuros = {
  /** Soma dos aportes ate cada mes. Cresce em linha reta. */
  aportado: number[];
  /** Montante com juros ate cada mes. */
  acumulado: number[];
};

export function calcularSerie(
  aporteMensal: number,
  taxaMensal: number,
  meses: number,
): SerieJuros {
  const aportado: number[] = [];
  const acumulado: number[] = [];
  let montante = 0;

  for (let mes = 1; mes <= meses; mes++) {
    montante = (montante + aporteMensal) * (1 + taxaMensal);
    aportado.push(aporteMensal * mes);
    acumulado.push(montante);
  }

  return { aportado, acumulado };
}
