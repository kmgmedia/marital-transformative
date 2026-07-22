# Marital Transformative Consult — Website

Marketing site + blog for a faith-based marital counselling practice, built with **Next.js** (App Router).

## How this site is built

Every page lives under `app/` as a React Server Component with its own `metadata` export (title, description, OG/Twitter tags, canonical). Shared chrome (nav, footer, fonts, analytics) lives in `app/layout.jsx` and `components/`.

The **blog** is different: posts are written and edited in **Sanity** (a hosted CMS with a web-based writing studio). `lib/sanity.js` fetches them — at build time for `generateStaticParams`, and refreshed hourly via ISR (`export const revalidate = 3600`) so new posts show up without a full redeploy.

The **contact/booking forms** POST to `app/api/contact` and `app/api/booking` (Next.js Route Handlers), which verify the reCAPTCHA token server-side and relay the submission to Formspree — the Formspree ID and reCAPTCHA secret never reach the browser.

```
marital-transformative-website/
├── app/                    pages (Server Components), layout, API routes, sitemap.js, robots.js
│   ├── api/contact/, api/booking/   form submission handlers (reCAPTCHA verify + Formspree relay)
│   ├── blog/, blog/[slug]/          blog list + post detail (Sanity-backed)
│   └── layout.jsx, globals.css      shared chrome + design system
├── components/             Navbar, Footer, forms, cards, etc. ("use client" where interactive)
├── lib/                    sanity.js (CMS fetch), jsonld.js, formHandler.js, content/*.js
├── public/images/          logo, favicon; public/manifest.webmanifest
├── posts/*.md              original article drafts (seed content only — not read by the app)
├── scripts/seed-sanity.mjs one-time script to push posts/*.md into Sanity
├── studio/                 Sanity Studio — the actual writing UI, deployed separately
└── next.config.js          old .html URL → clean URL redirects
```

## Setup

```
npm install
cp .env.example .env
```

Fill in `.env` (see comments in `.env.example` for what's server-only vs. `NEXT_PUBLIC_`):
- `SANITY_PROJECT_ID` / `SANITY_DATASET` — from [sanity.io/manage](https://sanity.io/manage)
- `SANITY_WRITE_TOKEN` — only needed once, to run the seed script (Editor/Write permissions)
- `FORMSPREE_FORM_ID` — for the contact/booking forms to actually send
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — optional, omits the GA snippet entirely if blank
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` / `RECAPTCHA_SECRET_KEY` — optional, omits the reCAPTCHA widget entirely if blank

## Common commands

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server with live reload |
| `npm run build` | Production build (`.next/`) |
| `npm run start` | Serve the production build locally |
| `npm run seed` | One-time: pushes `posts/*.md` drafts into your Sanity dataset |

## Writing new blog posts

Day to day, don't touch `posts/*.md` — write it in the **Sanity Studio** instead:

```
cd studio
npm install
npx sanity dev       # local editor, or:
npx sanity deploy    # hosted editor at https://<your-project>.sanity.studio
```

Both commands require logging in with your Sanity account. Once a post is saved in Studio, it appears on the live site within the hour (ISR) — no redeploy needed.

## Deploying

Deployed on Vercel with zero-config Next.js detection (no `vercel.json` needed). Vercel's project settings need `SANITY_PROJECT_ID`, `SANITY_DATASET`, `FORMSPREE_FORM_ID`, and (optionally) `NEXT_PUBLIC_GA_MEASUREMENT_ID` / `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` / `RECAPTCHA_SECRET_KEY` added as environment variables.
