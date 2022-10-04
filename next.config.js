/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.experiments = { topLevelAwait: true, layers: true };
    return config;
  },
  env: {
    unitSize: '0.1',
  },
}

module.exports = nextConfig
