const repoBasePath =
  process.env.NODE_ENV === 'production' ? '/Bluegrass-Outdoor-Solutions' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: repoBasePath,
  assetPrefix: repoBasePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: repoBasePath
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  }
};

export default nextConfig;
