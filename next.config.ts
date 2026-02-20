import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/portfolio_nextjs" : "",
  assetPrefix: isProd ? "/portfolio_nextjs/" : "",
};

export default nextConfig;