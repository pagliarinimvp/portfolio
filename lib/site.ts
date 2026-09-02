import { perfil } from "@/content/perfil";

/** Trocar por dominio proprio definindo NEXT_PUBLIC_SITE_URL na Vercel. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export const site = {
  url: siteUrl,
  nome: perfil.nome,
  titulo: `${perfil.nome} — ${perfil.papel}`,
  descricao: perfil.resumo,
} as const;
