/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 静的エクスポートを有効にする
  trailingSlash: true, // 末尾のスラッシュを強制する
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Next.js Imageコンポーネントの最適化を無効にする
  },
}

module.exports = nextConfig
