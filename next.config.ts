import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // No basePath needed when using a custom domain.
  // If you switch to username.github.io/repo-name, uncomment:
  // basePath: '/dxrery-website',
  // assetPrefix: '/dxrery-website/',
};

export default nextConfig;
