
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    //接口代理
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8081/:path*",
      },
    ];
  },
}

module.exports = nextConfig
