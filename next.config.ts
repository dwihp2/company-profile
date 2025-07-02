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
  // Disable static generation during database setup
  staticPageGenerationTimeout: 120,
  experimental: {
    // Use some valid experimental flags
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};

export default withPayload(nextConfig);
