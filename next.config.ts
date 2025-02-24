/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // Gera HTML estático
  distDir: 'dist',         // (Opcional) pasta de saída
  trailingSlash: true,     // Garante que cada rota gere um /index.html
  images: { unoptimized: true },  // Evita erro de otimização de imagens no GH Pages

  // Fundamental para GH Pages:
  // Força que todos os assets (CSS/JS) sejam buscados relativamente.
  // assetPrefix: './',

  // Se você NÃO estiver usando subpasta (ex.: /portfolio),
  // mantenha basePath vazio mesmo:
  // basePath: '',
};

module.exports = nextConfig;
