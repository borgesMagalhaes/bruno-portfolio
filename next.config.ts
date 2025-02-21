/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  basePath: "/bruno-portfolio", // Nome do repositório no GitHub
  trailingSlash: true,
  images: {
    unoptimized: true, // Evita erro com otimização de imagens no GitHub Pages
  },
};

module.exports = nextConfig;
