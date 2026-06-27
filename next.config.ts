import { env } from 'node:process';

import { withPayload } from '@payloadcms/next/withPayload';
import type { NextConfig } from 'next';

const isProductionVercel = env.VERCEL_TARGET_ENV === 'production';

const nextConfig: NextConfig = {
  headers: () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'X-Frame-Options', value: 'DENY' },
        ...(isProductionVercel ? [] : [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }]),
      ],
    },
  ],
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
