import type { NextConfig } from "next";

const DEPLOY_STATIC = process.env.DEPLOY_STATIC;
const repo = 'liquid-glass-react'; // Replace with your actual repo name

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
  output: DEPLOY_STATIC ? 'export' : 'standalone',
  basePath: DEPLOY_STATIC ? `/${repo}` : '',
  assetPrefix: DEPLOY_STATIC ? `/${repo}` : '',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Ensures compatibility with GitHub Pages
};

export default nextConfig;
