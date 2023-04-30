import { Space_Grotesk } from '@next/font/google';

import Toolbar from '@/components/Toolbar';
import { VercelAnalytics } from '@/components/VercelAnalytics';
import { fetchGlobals } from '@/graphql';

import '@/styles/globals.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: 'variable' });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { toolbar } = await fetchGlobals();

  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <Toolbar toolbar={toolbar} />
        {children}
        <VercelAnalytics />
      </body>
    </html>
  );
}
