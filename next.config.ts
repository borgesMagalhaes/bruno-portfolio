/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  basePath: "",
  trailingSlash: true,
  // assetPrefix: "https://brunomagalhaes.dev.br/",
    assetPrefix: "./",
  images: { unoptimized: true },
  cleanDistDir: true ,// Limpa a pasta antes do build
};

module.exports = nextConfig;
