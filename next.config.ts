/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  basePath: "", // Para domínio customizado, mantenha vazio
  trailingSlash: true,
  assetPrefix: "https://brunomagalhaes.dev.br/",
  images: {
    unoptimized: true, // Evita erro de otimização de imagens no GitHub Pages
  },
};

module.exports = nextConfig;
