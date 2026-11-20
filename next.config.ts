import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/raw",
        destination: "/plain.html",
      },
      {
        source: "/plain",
        destination: "/plain.html",
      },
    ];
  },
};

export default nextConfig;
