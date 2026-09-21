import type { NextConfig } from "next";

// Static export for GitHub Pages. If deploying to a project page without a
// custom domain (https://<user>.github.io/<repo>), set NEXT_BASE_PATH to
// "/<repo>" at build time. A custom domain at the repo root needs no basePath.
const basePath = process.env.NEXT_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: basePath || undefined,
};

export default nextConfig;
