/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  assetPrefix: "./", // Importante para caminhos relativos no GitHub Pages
  trailingSlash: true, // Opcional, mas pode ajudar a gerar /index.html
  images: { unoptimized: true }
};
module.exports = nextConfig;
