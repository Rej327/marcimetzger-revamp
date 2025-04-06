import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
      {
        protocol: "https",
        hostname: "aceternity.com",
      },
      {
        protocol: "https",
        hostname: "pix.dotproperty.co.th",
      },
      {
        protocol: "https",
        hostname: "images.proppit.com",
      },
      {
        protocol: "https",
        hostname: "img1.wsimg.com",
      },
    ],
  },
};

export default nextConfig;
