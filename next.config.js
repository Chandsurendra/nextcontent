/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.ctfassets.net',
          },
        ],
      },
      webpack: (config) => {
          config.resolve.alias.canvas = false;
          return config;
        },
}

module.exports = nextConfig
