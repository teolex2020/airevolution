/** @type {import('next').NextConfig} */
const nextConfig = {}


module.exports = { async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },]}}