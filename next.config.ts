/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  basePath: "", // Deixe vazio para domínios customizados
  trailingSlash: true,
  assetPrefix: "https://brunomagalhaes.dev.br/",
  images: { unoptimized: true },
};

module.exports = nextConfig;
