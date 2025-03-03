/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',  // Empty since we're using a custom domain or root domain
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    unoptimized: true,
  },
  // Disable image optimization since GitHub Pages serves static files
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
