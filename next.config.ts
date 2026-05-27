import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  // Allow cross-origin dev access for hot-reload from your LAN host
  allowedDevOrigins: [
    'http://192.168.1.26:3000',
    'http://192.168.1.26',
    '192.168.1.26',
    'localhost',
    '127.0.0.1',
  ],
};

export default nextConfig;
