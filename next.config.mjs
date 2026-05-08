import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // Pin the file-tracing root to this project so Next stops auto-
  // selecting the user-home package-lock.json as the workspace root.
  outputFileTracingRoot: __dirname,
  // lucide-react v1 ships with a non-standard barrel shape; Next 15's
  // optimizePackageImports (auto-enabled for lucide-react) emits
  // false-positive "Attempted import error" warnings at build time.
  // Override the default list and leave lucide-react out.
  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/icons-material', 'framer-motion'],
  },
};

export default nextConfig;
