import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "127.0.0.1",
    "localhost",
    "sakthipoultry.local",
    "172.30.222.28",
  ],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
