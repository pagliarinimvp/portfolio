import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";

const DIRETORIO = path.join(process.cwd(), "content", "casos");

/** Metadados que todo arquivo em content/casos/ precisa exportar. */
export type CasoMeta = {
  titulo: string;
  resumo: string;
  ano: string;
  papel: string;
  stack: readonly string[];
  repositorio?: string;
  siteAoVivo?: string;
};

export type Caso = {
  slug: string;
  meta: CasoMeta;
  Conteudo: ComponentType;
};

/**
 * Descobre os casos lendo o diretorio: adicionar um estudo de caso e criar um
 * .mdx aqui, sem tocar em rota nem em indice.
 */
export function listarSlugs(): string[] {
  if (!fs.existsSync(DIRETORIO)) return [];
  return fs
    .readdirSync(DIRETORIO)
    .filter((arquivo) => arquivo.endsWith(".mdx"))
    .map((arquivo) => arquivo.replace(/\.mdx$/, ""))
    .sort();
}

export async function carregarCaso(slug: string): Promise<Caso | null> {
  if (!listarSlugs().includes(slug)) return null;

  const modulo = await import(`../content/casos/${slug}.mdx`);
  return {
    slug,
    meta: modulo.meta as CasoMeta,
    Conteudo: modulo.default as ComponentType,
  };
}

/** Casos do mais recente para o mais antigo. */
export async function listarCasos(): Promise<Caso[]> {
  const casos = await Promise.all(listarSlugs().map(carregarCaso));
  return casos
    .filter((caso): caso is Caso => caso !== null)
    .sort((a, b) => b.meta.ano.localeCompare(a.meta.ano));
}
