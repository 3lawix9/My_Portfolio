/** @type {import('next').NextConfig} */

module.exports = {
  nextConfig: {
    reactStrictMode: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://zenquotes.io/:path*', // Replace this with the actual API URL
      },
    ];
  },
}
