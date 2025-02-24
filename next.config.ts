/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  basePath: "",
  trailingSlash: true,
  assetPrefix: "https://brunomagalhaes.dev.br/", // Importante para exportação estática
  images: { unoptimized: true },
};

module.exports = nextConfig;
