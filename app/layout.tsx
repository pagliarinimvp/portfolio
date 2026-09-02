import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Literata } from "next/font/google";

import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { perfil } from "@/content/perfil";
import { site } from "@/lib/site";

// Manchete em grotesca, corpo em serifada: o inverso do par usual, e o que se
// ve em caderno de economia — titulo seco, texto feito para leitura longa.
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const literata = Literata({
  subsets: ["latin"],
  variable: "--font-literata",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.titulo,
    template: `%s — ${perfil.nome}`,
  },
  description: site.descricao,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: perfil.nome,
    title: site.titulo,
    description: site.descricao,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

// Aplica o tema antes da primeira pintura, senao a pagina pisca em branco
// para quem escolheu o tema escuro.
const scriptTema = `try{var t=localStorage.getItem("tema");var e=t?t==="escuro":matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",e)}catch(n){}`;

// Schema.org: ajuda o Google a entender de quem e o site.
const dadosEstruturados = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: perfil.nome,
  url: site.url,
  email: perfil.email,
  jobTitle: perfil.papel,
  sameAs: [perfil.github, perfil.linkedin].filter(Boolean),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // As variaveis do next/font ficam no <html>, nao no <body>: os tokens
    // --fonte-* sao declarados em :root e uma custom property so resolve no
    // elemento onde e declarada.
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${literata.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptTema }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados) }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#conteudo"
          className="focus:bg-paper-raised sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:font-mono focus:text-sm"
        >
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo" className="mx-auto max-w-[clamp(64rem,90vw,100rem)] px-6">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
