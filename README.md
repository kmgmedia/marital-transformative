# Marital Transformative Consult — Website

Marketing site + blog for a faith-based marital counselling practice.

## How this site is built

Most pages (`about.html`, `services.html`, `faq.html`, `index.html`, `contact.html`, `booking.html`, `privacy.html`, `404.html`) are plain, hand-written HTML — no build step touches them.

The **blog** is different: posts are written and edited in **Sanity** (a hosted CMS with a web-based writing studio), and **Eleventy** fetches them at build time and generates static pages from them (`blog.html`, one page per post under `/blog/`, and `sitemap.xml`). Eleventy is what turns Sanity content into the actual HTML files that get deployed — without it, the blog has no way to become real pages.

```
marital-transformative-website/
├── *.html                 static pages, unchanged by the build
├── css/, js/               shared styles + shared nav/footer/form logic
├── public/images/          logo, favicon
├── blog.njk                blog index template (loops Sanity posts)
├── post-detail.njk         individual post page template
├── sitemap.njk             sitemap template (static pages + Sanity posts)
├── _data/posts.js          fetches posts from Sanity at build time
├── posts/*.md              original article drafts (seed content only —
│                           not read by the build; see "Seeding content" below)
├── scripts/seed-sanity.mjs one-time script to push posts/*.md into Sanity
├── studio/                 Sanity Studio — the actual writing UI, deployed separately
├── .eleventy.js            Eleventy config
└── vercel.json             tells Vercel how to build/deploy
```

## Setup

```
npm install
cp .env.example .env
```

Fill in `.env`:
- `SANITY_PROJECT_ID` / `SANITY_DATASET` — from [sanity.io/manage](https://sanity.io/manage)
- `SANITY_WRITE_TOKEN` — only needed once, to run the seed script (Editor/Write permissions)
- `FORMSPREE_FORM_ID` — for the contact/booking forms to actually send

## Common commands

| Command | What it does |
|---|---|
| `npm run build` | Generates the full static site into `_site/` (fetches posts from Sanity) |
| `npm run serve` | Local dev server with live reload |
| `npm run seed` | One-time: pushes `posts/*.md` drafts into your Sanity dataset |

## Writing new blog posts

Day to day, don't touch `posts/*.md` or run the site's build to add a post — write it in the **Sanity Studio** instead:

```
cd studio
npm install
npx sanity dev       # local editor, or:
npx sanity deploy    # hosted editor at https://<your-project>.sanity.studio
```

Both commands require logging in with your Sanity account. Once a post is saved in Studio, the next `npm run build` (and the next Vercel deploy) picks it up automatically — no code changes needed.

## Deploying

Pushing to the connected branch triggers a Vercel build (`npm run build`, output directory `_site`, configured in `vercel.json`). Vercel's project settings need `SANITY_PROJECT_ID` and `SANITY_DATASET` added as environment variables so the production build can fetch posts.
