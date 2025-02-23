/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  basePath: "", // Se estiver usando um domínio customizado, deixe vazio ""
  trailingSlash: true,
  images: { unoptimized: true },
  cleanDistDir: true ,// Limpa a pasta antes do build

  // experimental: { appDir: false },
  // assetPrefix: "https://brunomagalhaes.dev.br/",
  assetPrefix: "",
  // images: { unoptimized: true } // Evita erro de otimização de imagens no GitHub Pages
};
module.exports = nextConfig;
