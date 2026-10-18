# Hum Jaise (ہم جیسے)

A small, static peer-support website for neurodivergent people in Pakistan. Built with Astro and deployed on Netlify.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

## Where things live

| What | Where |
|---|---|
| Experiences (written prompts, not real quotes) | `src/content/experiences.json` |
| Resources (each has `verified`) | `src/content/resources.json` |
| Community principles | `src/data/principles.ts` |
| Colours, type, comfort settings | `src/styles/global.css` |
| Design rules | `DESIGN.md` |
| Product context | `PRODUCT.md` |
| Security headers, build | `netlify.toml` |

## Before launch

- [ ] Check every entry in `resources.json` and set `verified: true` (the "Not yet checked" tag then disappears).
- [ ] Have a fluent reader review all Urdu text (hero, page titles, principle titles).
- [ ] Add a real contact email in `src/pages/about.astro`.
- [ ] Set the real domain in `astro.config.mjs` (`site`).
- [ ] After the first deploy, turn on form notifications in Netlify (Forms → write-to-us) so messages reach you.

## Growing into a community platform

- **Accounts:** pseudonymous only. Never require a real name, phone number or diagnosis.
- **Moderation:** write the rules from `src/data/principles.ts`. Each principle has a stable `id` so moderation notes can cite it.
- **Member stories:** add a separate collection with explicit consent fields. Keep the authored experiences clearly labelled.
- **Urdu:** `astro.config.mjs` already declares an `ur` locale. Add pages under `src/pages/ur/`.
- **Privacy:** update `src/pages/privacy.astro` before any feature that collects data goes live.
