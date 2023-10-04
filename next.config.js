/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  experimental: {
    serverActions: true,
  },
  env: {
    API_URL: 'http://localhost:3002',
  }
};