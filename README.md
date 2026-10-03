# ananyduhan.com

Personal portfolio — Next.js (App Router) + TypeScript + Tailwind CSS, exported as a static site and deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Updating content

All content lives in two files — no page code needs to change:

- `src/data/profile.ts` — bio, education, skills, leadership, links
- `src/data/projects.ts` — projects (order = order on site; `featured: true` puts one on the home page)

Each project automatically gets its own page at `/projects/<slug>/`.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes `out/` to GitHub Pages.
The custom domain is kept via `public/CNAME`.
