/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
    images: {
      unoptimized: true,
    },
  devIndicators: {
    buildActivity: false
  }
};

export default nextConfig;
