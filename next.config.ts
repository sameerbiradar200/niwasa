import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "i.sstatic.net", // fallback avatar
      },
      {
        protocol: "https",
        hostname: "a0.muscache.com", // fallback avatar
      },
    ],
  },
};

export default nextConfig;
