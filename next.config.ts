import type { NextConfig } from "next";

// Static export configuration for GitHub Pages
// The basePath/assetPrefix is read from NEXT_PUBLIC_BASE_PATH so you can build
// locally without a repo subpath (use empty by default) and set the repo path
// when building for GitHub Pages.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Export the app as static HTML files
  output: "export",
  // Ensure exported pages are placed in directories with index.html so
  // paths like `/albums/blue-waves/` work on static hosts (avoids needing .html suffix).
  trailingSlash: true,
  // basePath/assetPrefix are blank by default for local preview. Set
  // NEXT_PUBLIC_BASE_PATH="/your-repo-name" when building for GitHub Pages.
  basePath: basePath,
  assetPrefix: basePath,
  // Allow next/image to work with static export by disabling the image optimization server
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
