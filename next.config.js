/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  swcMinify: true,
  optimizeFonts: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
};
module.exports = nextConfig;
