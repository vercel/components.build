import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";
import path from "node:path";

const withMDX = createMDX();

const jotaiPath = path.dirname(require.resolve("jotai"));

const config: NextConfig = {
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
  },

  webpack: (webpackConfig) => {
    webpackConfig.resolve.alias = {
      ...webpackConfig.resolve.alias,
      jotai: jotaiPath,
    };
    return webpackConfig;
  },
};

export default withMDX(config);
