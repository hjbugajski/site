import { Space_Grotesk } from '@next/font/google';

import '@/styles/globals.css';
import Toolbar from '@/components/Toolbar';
import { fetchGlobals } from '@/graphql';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: 'variable' });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { toolbar } = await fetchGlobals();

  return (
    <html lang="en">
      <head />
      <body className={spaceGrotesk.className}>
        <Toolbar toolbar={toolbar} />
        {children}
      </body>
    </html>
  );
}
