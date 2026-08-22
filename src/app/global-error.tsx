'use client';

import { useEffect } from 'react';

/**
 * Replaces the root layout when it fails to render, so it owns `<html>`/`<body>` and cannot rely on
 * the layout's fonts, styles, or providers.
 */
export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          fontFamily: 'system-ui, sans-serif',
          margin: '0 auto',
          maxWidth: '42rem',
          padding: '4rem 1rem',
        }}
      >
        <h1 style={{ fontSize: '1.5rem' }}>Something Went Wrong</h1>
        <p>An unexpected error occurred.</p>
        <button type="button" onClick={() => retry()}>
          Try again
        </button>
      </body>
    </html>
  );
}
