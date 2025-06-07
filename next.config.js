// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for dev
  images: {
    domains: ['example.com'], // Allow image domains
  },
};

module.exports = nextConfig;