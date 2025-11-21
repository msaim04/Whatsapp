/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  serverExternalPackages: [], // ensures standalone works with turbopack
  experimental: {
    optimizePackageImports: ["react", "react-dom"],
  },
};

module.exports = nextConfig;
