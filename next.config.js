/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.garmin.com',
      },
      {
        protocol: 'https',
        hostname: 'media.dcrainmaker.com',
      },
      {
        protocol: 'https',
        hostname: 'www.strava.com',
      }
    ],
  },
}

module.exports = nextConfig
