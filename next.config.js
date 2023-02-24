/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'joz2kqj5.directus.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
