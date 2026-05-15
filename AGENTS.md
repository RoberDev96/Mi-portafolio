# Mi-Portafolio — AGENTS.md

## Quick start

```sh
npm install        # Node >=22.12.0
npm run dev        # dev server at localhost:4321
npm run build      # static site to dist/
npm run preview    # preview production build
```

No tests, no lint, no typecheck scripts configured. Use `astro check` for type checking.

## Stack

- **Astro 6** (static output), **Tailwind CSS 4** (Vite plugin, no config file), **React 19**
- `astro-icon` — icon component from SVG collection in `src/icons/`
- `@astrojs/sitemap` — auto-generates sitemap; i18n set to `es` / `es-ES`
- Deployed to Vercel via `vercel.json` (build: `astro build`, output: `dist/`)

## Architecture

- **`src/config/seo.ts`** — single source of truth for site name, URL, social links, and per-page SEO metadata (title, description, keywords, OG image)
- **`src/layout/Layout.astro`** — shell with `<html lang="es">` and `<body>`
- **`src/components/baseHead.astro`** — all `<head>` content: meta, OG/Twitter cards, JSON-LD schema, canonical URLs, icons, preconnect
- **`src/pages/`** — routes: `/` (index embeds SobreMi + Proyectos in sections), `/proyectos/`, `/sobreMi/`, `/404`
- **Global CSS**: `public/Style/global.css` (imported in baseHead), plus per-page CSS files in `public/Style/`
- **Icons**: `src/icons/` — SVG files used via `<Icon name="fileName" />` (astro-icon convention, no .svg extension)

## Quirks & conventions

- **SEO centralised**: Always update `PAGES_SEO` in `src/config/seo.ts` when adding/modifying pages. Each page reads `const { title, description, keywords, image } = PAGES_SEO.routeName;`
- **Nested Layouts**: `sobreMi.astro` and `proyectos.astro` each wrap in `<Layout>`, and `index.astro` embeds them directly — resulting in nested `<html>` shells. Index page works around this visually, but the DOM is not spec-compliant.
- **Image paths** in projects use `import` (e.g. `import img from '../../../public/imagen/...'`) not string literals.
- **`baseHead.astro` has hardcoded sameAs URLs** (github.com, linkedin.com) instead of reading from `seo.ts`'s `SOCIAL_MEDIA`.
- **No env vars** used; site URL is hardcoded in `astro.config.mjs` and `seo.ts`.
- **Generated dirs**: `.astro/` (type stubs, settings) and `dist/` are gitignored.
- **Site language**: Spanish (`es`), content mostly in Spanish.
- **Site URL**: `https://robertdev96.vercel.app`
