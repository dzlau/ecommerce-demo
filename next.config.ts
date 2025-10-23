import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  cacheComponents: true,
  turbopack: {
    // ...
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
}
 
export default nextConfig