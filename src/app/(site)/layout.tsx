import type { Metadata } from 'next';
import { unstable_cache } from 'next/cache';
import { Inter_Tight } from 'next/font/google';
import Script from 'next/script';
import { type GlobalSlug, getPayload } from 'payload';

import { Navigation } from '@/components/navigation';
import { env } from '@/env/client';
import { cn } from '@/lib/utils/cn';
import config from '@payload-config';

import './globals.css';

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: 'variable',
  display: 'swap',
  variable: '--font-inter-tight',
});

export const metadata: Metadata = {
  title: 'Henry Bugajski',
  description: 'Software Engineer',
};

const fetchGlobal = async (slug: GlobalSlug) => {
  const payload = await getPayload({ config });

  return payload.findGlobal({ slug });
};

const fetchCachedGlobal = (slug: GlobalSlug) =>
  unstable_cache(fetchGlobal, [slug], { tags: [`global_${slug}`] })(slug);

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const navigation = await fetchCachedGlobal('navigation');

  return (
    <html
      lang="en"
      className={cn(
        interTight.variable,
        'font-optical-sizing-auto bg-paper dark:text-base-500 text-base-600 font-sans font-normal dark:bg-black',
      )}
    >
      <body>
        <Navigation {...navigation} />
        <main className="mx-auto w-full max-w-2xl px-4 pt-16 pb-8">{children}</main>
        <Script
          src={env.NEXT_PUBLIC_UMAMI_SRC}
          data-website-id={env.NEXT_PUBLIC_UMAMI_ID}
          data-domains={env.NEXT_PUBLIC_DOMAINS}
        />
      </body>
    </html>
  );
}
