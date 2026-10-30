import type { NextConfig } from "next";

const repo = "rootk-maintenance-quotation";
const isGhPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGhPages ? `/${repo}` : undefined,
  assetPrefix: isGhPages ? `/${repo}/` : undefined,
  trailingSlash: true,
};

export default nextConfig;
