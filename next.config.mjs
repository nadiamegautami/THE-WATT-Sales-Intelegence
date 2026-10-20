/** @type {import('next').NextConfig} */
const repoName = "THE-WATT-Sales-Intelegence";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isProd ? `/${repoName}` : "",
};

export default nextConfig;
