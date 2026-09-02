import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  // Tipagem gerada para rotas — pega link quebrado em tempo de build.
  typedRoutes: true,
};

// Com Turbopack, os plugins remark/rehype sao declarados por nome (string),
// nao por import: o loader roda fora do processo do Node do config.
const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: ["rehype-slug"],
  },
});

export default withMDX(nextConfig);
