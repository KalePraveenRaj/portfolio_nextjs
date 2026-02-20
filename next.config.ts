import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Required for static export
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  basePath: "/portfolio_nextjs",
  assetPrefix: "/portfolio_nextjs/",
};

export default nextConfig;