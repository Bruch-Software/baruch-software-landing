# VibeLogic Landing

Professional landing page for **VibeLogic** — High-Performance Software Factory & AI Solutions. Built with React, Vite, Tailwind CSS, and i18n (EN/ES).

## Features

- **SEO**: Dynamic meta tags (title, description, keywords), semantic H1/H2/H3, canonical URL, sitemap.xml, robots.txt
- **i18n**: English (default) and Spanish via react-i18next; language selector in navbar
- **Design**: Dark mode, minimal (Linear/Vercel style), Inter Bold logo, subtle gradients, responsive
- **Performance**: Performance widget showing load time; optional Inter font for logo

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build & Deploy

```bash
npm run build
npm run preview   # test production build locally
```

### GitHub Pages / Custom domain

1. In `vite.config.js`, set `base: '/your-repo-name/'` if using GitHub Pages project site.
2. For custom domain **vibelogic.io**, the file `public/CNAME` is set to `vibelogic.io` (copied to `dist/` on build).
3. Deploy the `dist` folder (e.g. via GitHub Actions or manual upload).

## Project structure

- `src/components/` — Navbar, Hero, Services, WhyUs, Process, Closing, Contact, Footer, SEO, PerformanceWidget
- `src/i18n/` — i18n config and `locales/en.json`, `locales/es.json`
- `public/` — favicon.svg, sitemap.xml, robots.txt, CNAME

## Customization

- **Meta/SEO**: Edit `src/components/SEO.jsx` and default meta in `index.html`.
- **Copy**: Edit `src/i18n/locales/en.json` and `es.json`.
- **Domain**: Canonical and sitemap use `https://vibelogic.io`. Update SEO.jsx, sitemap.xml, and robots.txt if using another URL.
- **OG image**: Add `public/og-image.png` (recommended 1200×630) for social previews.
