import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com', // El servidor de imágenes de Amazon
      },
    ],
  },
};

export default nextConfig;
