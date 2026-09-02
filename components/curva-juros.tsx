/**
 * Elemento de assinatura do site: a curva de juros compostos.
 *
 * E a mesma funcao que a calculadora do Portal FinQuant implementa. A area
 * entre as duas linhas e o efeito dos juros — a distancia entre o que foi
 * aportado e o que o tempo fez com aquilo.
 *
 * Server component: os pontos sao calculados no build e a animacao e CSS puro.
 * Nenhum JavaScript chega ao navegador por causa deste grafico.
 */

import { calcularSerie } from "@/lib/juros";

const MESES = 360; // 30 anos
const APORTE_MENSAL = 500;
const TAXA_MENSAL = 0.008; // 0,8% ao mes

const LARGURA = 640;
const ALTURA = 260;
const MARGEM_BAIXO = 28;

type Ponto = { x: number; y: number };

function paraPontos(valores: number[], maximo: number): Ponto[] {
  return valores.map((valor, indice) => ({
    x: (indice / (valores.length - 1)) * LARGURA,
    y: ALTURA - MARGEM_BAIXO - (valor / maximo) * (ALTURA - MARGEM_BAIXO - 12),
  }));
}

function caminho(pontos: Ponto[]): string {
  return pontos
    .map(
      (ponto, indice) =>
        `${indice === 0 ? "M" : "L"}${ponto.x.toFixed(1)} ${ponto.y.toFixed(1)}`,
    )
    .join(" ");
}

/** Comprimento aproximado da polilinha, para dimensionar o stroke-dasharray. */
function comprimento(pontos: Ponto[]): number {
  let total = 0;
  for (let i = 1; i < pontos.length; i++) {
    total += Math.hypot(pontos[i].x - pontos[i - 1].x, pontos[i].y - pontos[i - 1].y);
  }
  return Math.ceil(total);
}

const formatador = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

export function CurvaJuros() {
  const { aportado, acumulado } = calcularSerie(APORTE_MENSAL, TAXA_MENSAL, MESES);
  const maximo = acumulado[acumulado.length - 1];

  const pontosAportado = paraPontos(aportado, maximo);
  const pontosAcumulado = paraPontos(acumulado, maximo);

  const areaEntreCurvas = `${caminho(pontosAcumulado)} L${LARGURA} ${
    pontosAportado[pontosAportado.length - 1].y
  } ${caminho([...pontosAportado].reverse()).replace("M", "L")} Z`;

  const totalAportado = aportado[aportado.length - 1];
  const totalAcumulado = acumulado[acumulado.length - 1];

  return (
    <figure className="not-prose m-0">
      <svg
        viewBox={`0 0 ${LARGURA} ${ALTURA}`}
        className="w-full"
        role="img"
        aria-labelledby="titulo-curva descricao-curva"
      >
        <title id="titulo-curva">Curva de juros compostos ao longo de 30 anos</title>
        <desc id="descricao-curva">
          Duas linhas partem da origem. A reta inferior é o total aportado, que cresce em
          ritmo constante até {formatador.format(totalAportado)}. A curva superior é o
          montante acumulado com juros de 0,8% ao mês, que acelera e termina em{" "}
          {formatador.format(totalAcumulado)}. A área entre as duas é o efeito dos juros.
        </desc>

        <line
          x1="0"
          y1={ALTURA - MARGEM_BAIXO}
          x2={LARGURA}
          y2={ALTURA - MARGEM_BAIXO}
          stroke="var(--rule)"
          strokeWidth="1"
        />

        <path d={areaEntreCurvas} fill="var(--accent-soft)" className="curva-area" />

        <path
          d={caminho(pontosAportado)}
          fill="none"
          stroke="var(--ink-muted)"
          strokeWidth="1.5"
          strokeDasharray="3 4"
          className="curva-tracada"
          style={{ "--comprimento": comprimento(pontosAportado) } as React.CSSProperties}
        />

        <path
          d={caminho(pontosAcumulado)}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="curva-tracada"
          style={{ "--comprimento": comprimento(pontosAcumulado) } as React.CSSProperties}
        />

        <g className="curva-rotulo" fontFamily="var(--fonte-mono)" fontSize="13">
          <text x="0" y={ALTURA - 8} fill="var(--ink-muted)">
            ano 0
          </text>
          <text x={LARGURA} y={ALTURA - 8} fill="var(--ink-muted)" textAnchor="end">
            ano 30
          </text>
        </g>
      </svg>

      <figcaption className="text-ink-muted mt-4 font-mono text-sm leading-relaxed">
        <span className="text-accent">—</span> montante acumulado{" "}
        <span data-numeric>{formatador.format(totalAcumulado)}</span>
        <span className="text-rule mx-2">|</span>
        <span>- - -</span> total aportado{" "}
        <span data-numeric>{formatador.format(totalAportado)}</span>
        <br />
        Aporte de {formatador.format(APORTE_MENSAL)} ao mês a 0,8% a.m., por 30 anos. É a
        mesma função da calculadora do Portal FinQuant.
      </figcaption>
    </figure>
  );
}
