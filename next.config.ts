import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Export as a fully static site — no Node.js server needed on VPS
  output: 'export',
  devIndicators: false,
  images: {
    // next/image optimisation is server-side; disabled for static export
    unoptimized: true,
  },
};

export default nextConfig;
