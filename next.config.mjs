/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  async redirects() {
    return [
      {
        source: '/contact-form.html',
        destination: '/access',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
