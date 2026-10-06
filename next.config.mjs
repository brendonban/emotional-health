/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Every page is static, so build plain HTML files. No serverless functions needed.
  output: "export",
};
export default nextConfig;
