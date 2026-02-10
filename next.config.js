/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,       // Enables React strict mode for highlighting potential problems
  swcMinify: true,             // Use Next.js built-in SWC compiler to minify code for faster builds
  images: {
    domains: ["images.unsplash.com", "avatars.githubusercontent.com"], // Allow optimized images from external sources
    formats: ["image/avif", "image/webp"],  // Use modern image formats for faster loading
  },
  experimental: {
    appDir: true,              // Enable Next.js App Directory (if using latest layouts)
  },
  env: {
    NEXT_PUBLIC_PORTFOLIO_NAME: "DevSpark Portfolio", // Public environment variable for dynamic text
    NEXT_PUBLIC_PRIMARY_COLOR: "#4F46E5",
  },
  async redirects() {
    return [
      {
        source: "/old-projects",
        destination: "/projects",
        permanent: true,       // Redirect old URLs to new pages for SEO
      },
    ];
  },
};

module.exports = nextConfig;
