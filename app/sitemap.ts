import type { MetadataRoute } from "next";

import { listarSlugs } from "@/lib/casos";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixas = ["", "/casos", "/sobre", "/contato"];
  const casos = listarSlugs().map((slug) => `/casos/${slug}`);

  return [...fixas, ...casos].map((caminho) => ({
    url: `${siteUrl}${caminho}`,
    lastModified: new Date(),
  }));
}
