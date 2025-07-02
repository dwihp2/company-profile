import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config) => {
    return config;
  },
};

export default withPayload(nextConfig);
