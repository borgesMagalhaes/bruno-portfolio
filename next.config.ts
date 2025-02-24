/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  basePath: "", // Mantém vazio para domínios personalizados
  trailingSlash: true,
  assetPrefix: "./", // ESSENCIAL para exportação estática e carregar corretamente o CSS
  images: { unoptimized: true },
};

module.exports = nextConfig;
