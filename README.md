# AI Engineering Portfolio

A personal portfolio site built as a premium technology product, not a CV
page. It showcases 20 years of Quality Engineering experience and current
work applying AI agents to software testing.

## Stack

- [Next.js](https://nextjs.org) (App Router, static export)
- TypeScript
- Tailwind CSS v4
- Framer Motion

Dependencies are kept deliberately minimal — no UI kit, no icon library, no
state management. Everything on the page is built from Tailwind and a
handful of custom components.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint       # ESLint
npx tsc --noEmit   # Type check
npm run build      # Production build (static export to ./out)
```

## Architecture

```
src/
  app/                 Root layout, global styles, single page route
  components/
    layout/             Navbar, Footer
    sections/            Hero, Work, Engineering, Writing, About, Contact
    motion/              Shared scroll-reveal primitive
  data/                 Static content (projects, writing stubs, nav, stack)
  types/                Shared domain types
  lib/                  Utilities (className merging)
```

Content lives in `src/data/*.ts`, separate from the components that render
it, so copy can be edited without touching layout code.

This first phase is the website only — no AI agent, chatbot, RAG or backend
integration. The component and data boundaries are intentionally simple
so that layer can be added later without a rebuild.

## Deployment

The site builds to a fully static export (`output: "export"` in
`next.config.ts`) suitable for GitHub Pages. `.github/workflows/deploy.yml`
builds and deploys `out/` to Pages on every push to `main`.

If deploying to `https://<user>.github.io/<repo>` (no custom domain), set
the `NEXT_BASE_PATH` environment variable to `/<repo>` at build time. With a
custom domain at the repository root, no base path is needed.
