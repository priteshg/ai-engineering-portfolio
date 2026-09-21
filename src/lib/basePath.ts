// The site is deployed under a subpath on GitHub Pages
// (https://priteshg.github.io/ai-engineering-portfolio/). next/link and
// next/image pick up next.config.ts's basePath automatically, but plain
// <img src="/..."> and <a href="/..."> tags don't — those need this prefix
// applied manually. Set by the deploy workflow at build time; empty locally.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
