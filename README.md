# Bruno Magalhães - Portfolio

Portfólio profissional em Next.js com visual hightech, navegação por seções, currículo em dois modos (ATS e completo) e publicação em GitHub Pages.

## Stack

- Next.js 15.5.13
- React 18
- TypeScript
- Tailwind CSS
- React Icons

## Funcionalidades Principais

- Home com layout single-page (âncoras: Sobre, Especialidades, Experiência, Formação, Iniciativas, Cursos e Contato).
- Hero com foco profissional e CTAs para currículo ATS/completo.
- Filtro por stack usando palavras-chave reais do currículo.
- Timeline de experiência profissional.
- Formação acadêmica e cursos com rolagem.
- Página `/curriculo` com:
  - modo ATS (enxuto),
  - modo completo (detalhado),
  - preview,
  - geração HTML,
  - export TXT (ATS),
  - impressão/PDF.
- Internacionalização PT/EN.

## Efeitos Visuais (HighTech)

- Fundo tecnológico com gradientes e grid animado.
- Scanline com rastro luminoso.
- Ripple interativo no fundo (movimento do mouse e clique).
- Cursor glow customizado para desktop.
- Cards com efeito aura no hover.
- Tilt 3D sutil em cards.
- Texto do hero com type reveal.
- CTA principal com pulso discreto.
- Respeito a `prefers-reduced-motion` e fallback para dispositivos touch.

## Segurança e Manutenção

- Dependências atualizadas para reduzir vulnerabilidades (incluindo upgrade de Next.js para 15.5.13).
- `dist/` ignorado no Git principal para evitar commits de artefatos gerados.
- Script de deploy com limpeza de cache para evitar problemas comuns no Windows/OneDrive.

## Execução Local

```bash
npm install
npm run dev
```

Acesse: `http://localhost:3000`

## Build de Produção (estático)

```bash
npm run build
```

Saída estática em `dist/`.

## Deploy (GitHub Pages)

```bash
npm run deploy
```

O script:
- limpa `.next` e cache local do `gh-pages`,
- gera build estático,
- publica no GitHub Pages.

## Autor

Bruno Magalhães
