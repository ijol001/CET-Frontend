import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Allow Unsplash images
      },
    ],
    unoptimized: true,
  },

  /* config options here */
  reactCompiler: true,
  // output: "export",
};

export default nextConfig;
