/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      '@react-three/fiber',
      '@react-three/drei',
      'three',
      'lucide-react',
      '@tabler/icons-react'
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Ensure splitChunks exists and has proper structure
      if (!config.optimization.splitChunks) {
        config.optimization.splitChunks = {};
      }
      if (!config.optimization.splitChunks.cacheGroups) {
        config.optimization.splitChunks.cacheGroups = {};
      }
      
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        three: {
          name: 'three',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](three|@react-three)[\\/]/,
        },
        animations: {
          name: 'animations',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](framer-motion|motion)[\\/]/,
        },
      };
    }
    return config;
  },
}

export default nextConfig
