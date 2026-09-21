import type { NextConfig } from "next";

// Static export for GitHub Pages. If deploying to a project page without a
// custom domain (https://<user>.github.io/<repo>), set NEXT_PUBLIC_BASE_PATH
// to "/<repo>" at build time — the deploy workflow does this. It's
// NEXT_PUBLIC_-prefixed (not just NEXT_BASE_PATH) so the same value can also
// be imported into client components via src/lib/basePath.ts, for the raw
// <img>/<a> tags that don't get basePath applied automatically the way
// next/image and next/link do. A custom domain at the repo root needs no
// basePath at all.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
