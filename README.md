# moosa.hashim

Personal portfolio of **Muhammad Moosa Hashim** — software engineer building AI-orchestrated workflows, .NET services and event-driven pipelines.

The visual language is a homage to [tailwindcss.com](https://tailwindcss.com): a blueprint grid with striped gutters, full-bleed hairlines, mono "class annotations" and rotated section labels — set in space, with a parallax starfield and aurora glows.

## Stack

- React 19 + Vite 7
- Tailwind CSS v4
- Framer Motion (reveals, scroll-linked timelines, pinned horizontal scroll)
- Lenis (smooth scrolling), Embla (project carousel)
- EmailJS (contact form, optional)

## Features

- `⌘K` / `Ctrl K` command palette — copy email, download résumé, jump to sections
- Light / dark theme with a circular view-transition reveal (dark by default)
- Canvas starfield with depth parallax and shooting stars
- Scroll-driven experience timeline and pinned horizontal "journey" section
- Draggable, swipeable, trackpad-friendly project carousel with parallax
- Respects `prefers-reduced-motion`; responsive down to 320px

## Editing content

All copy lives in [`src/data/portfolio.js`](src/data/portfolio.js). Wrap a phrase in `**double asterisks**` to highlight it. Tech icons are mapped in [`src/lib/techIcons.js`](src/lib/techIcons.js).

The résumé is served from `public/` — update `profile.resume` if the file name changes.

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run lint
```

## Deploying on Vercel

Import the repository in Vercel — the Vite preset and `vercel.json` handle the rest. Optional environment variables:

| Variable | Purpose |
| --- | --- |
| `VITE_EMAILJS_SERVICE`, `VITE_EMAILJS_TEMPLATE`, `VITE_EMAILJS_PUBLIC` | Send the contact form through EmailJS. Without them the form opens the visitor's mail client instead. |
| `VITE_SITE_URL` | Absolute URL for canonical / Open Graph tags when using a custom domain. Defaults to Vercel's production URL. |
