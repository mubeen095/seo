/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
      return config;
    },
    future: {
      webpack5: true,
    },
  };
  
  export default nextConfig;