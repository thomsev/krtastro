# Karmøy Rørteknikk – Astro site

Modern Astro + TypeScript site with a flexible content layer that can read from Headless WordPress or local JSON fallbacks.

## Getting started

```bash
npm install
npm run dev
```

## Content source modes

Set the content source via environment variables:

```bash
CONTENT_SOURCE=local npm run dev
CONTENT_SOURCE=wordpress WORDPRESS_BASE_URL=https://example.com npm run dev
```

- `CONTENT_SOURCE=local` reads from `src/content/`.
- `CONTENT_SOURCE=wordpress` reads from WordPress REST endpoints. If a request fails, it falls back to local content.

## WordPress expectations

The site looks for WordPress REST endpoints:

- Pages: `GET /wp-json/wp/v2/pages?slug=...`
- Pages (all): `GET /wp-json/wp/v2/pages?per_page=100`
- Optional custom post types:
  - Projects: `GET /wp-json/wp/v2/projects`
  - Suppliers: `GET /wp-json/wp/v2/suppliers`
  - References: `GET /wp-json/wp/v2/references`

## Scripts

- `npm run dev` – start local dev server
- `npm run build` – build the site
- `npm run preview` – preview the production build
- `npm run lint` – run Astro type checks
- `npm run format` – format with Prettier

## Deployment

The project is compatible with most static hosting services. Common options:

- Vercel
- Netlify
- Fly.io

Make sure to set `CONTENT_SOURCE` and `WORDPRESS_BASE_URL` in your deployment environment.
