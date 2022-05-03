/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    EMAIL_SERVICE : process.env.EMAIL_SERVICE,
    EMAIL_TEMPLATE : process.env.EMAIL_TEMPLATE,
    EMAIL_USER : process.env.EMAIL_USER
  }
}

module.exports = nextConfig
