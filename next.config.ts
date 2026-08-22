import { env } from 'node:process';

import { withPayload } from '@payloadcms/next/withPayload';
import type { NextConfig } from 'next';

const isProductionVercel = env.VERCEL_TARGET_ENV === 'production';

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  headers: () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ...(isProductionVercel ? [] : [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }]),
      ],
    },
  ],
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
