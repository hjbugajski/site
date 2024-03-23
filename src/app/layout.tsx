import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistSans } from 'geist/font/sans';
import { Metadata } from 'next';
import Script from 'next/script';

import Navigation from '@/components/navigation';
import { fetchGlobal } from '@/lib/api';
import { PayloadNavigation } from '@/lib/types/payload';
import { cn } from '@/lib/utils/cn';
import './globals.css';

export const metadata: Metadata = {
  title: 'Henry Bugajski',
  description: 'Software Engineer',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const navigation = await fetchGlobal<PayloadNavigation>('navigation');

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
          src={process.env.NEXT_PUBLIC_UMAMI_SRC}
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
          data-domains={process.env.NEXT_PUBLIC_DOMAINS}
        />
        <SpeedInsights />
      </body>
    </html>
  );
}
