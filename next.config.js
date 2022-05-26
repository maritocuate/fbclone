/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'platform-lookaside.fbsbx.com',
      'cdn.pixabay.com'
    ]
  }
}

module.exports = nextConfig
