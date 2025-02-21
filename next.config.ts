// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   distDir: "dist",
//   basePath: "", // Se estiver usando um domínio customizado, deixe vazio ""
//   trailingSlash: true,
//   assetPrefix: "https://brunomagalhaes.dev.br/",
//   images: { unoptimized: true } // Evita erro de otimização de imagens no GitHub Pages
// };

// module.exports = nextConfig;
const nextConfig = {
  output: "export",
  distDir: "dist",
  trailingSlash: true,
  assetPrefix: "https://brunomagalhaes.dev.br/",
  images: { unoptimized: true },
};

module.exports = nextConfig;