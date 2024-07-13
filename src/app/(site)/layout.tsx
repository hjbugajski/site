import { getPayloadHMR } from '@payloadcms/next/utilities';
import { SpeedInsights } from '@vercel/speed-insights/next';
// eslint-disable-next-line import/no-unresolved
import { GeistSans } from 'geist/font/sans';
import { Metadata } from 'next';
import Script from 'next/script';

import Navigation from '@/components/navigation';
import { env } from '@/env/client';
import { cn } from '@/lib/utils/cn';
import payloadConfig from '@payload-config';

import './globals.css';

export const metadata: Metadata = {
  title: 'Henry Bugajski',
  description: 'Software Engineer',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const payload = await getPayloadHMR({ config: payloadConfig });
  const navigation = await payload.findGlobal({ slug: 'navigation' });

  return (
    <html
      lang="en"
      className={cn(
        GeistSans.variable,
        'bg-background font-sans font-normal text-gray-text-secondary font-optical-sizing-auto',
      )}
    >
      <body>
        <Navigation {...navigation} />
        <main className="mx-auto w-full max-w-2xl px-4 pb-8 pt-16">{children}</main>
        <Script
          src={env.NEXT_PUBLIC_UMAMI_SRC}
          data-website-id={env.NEXT_PUBLIC_UMAMI_ID}
          data-domains={env.NEXT_PUBLIC_DOMAINS}
        />
        <SpeedInsights />
      </body>
    </html>
  );
}
