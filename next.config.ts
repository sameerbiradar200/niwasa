import type { NextConfig } from "next";

const nextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://192.168.1.121:3000",
  ],
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
