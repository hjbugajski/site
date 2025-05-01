import Link from 'next/link';

import { IconArrowRight } from '@/icons/arrow-right';

export default function NotFound() {
  return (
    <section className="space-y-3">
      <div className="space-y-1">
        <h1 className="text-2xl">Page Not Found</h1>
        <p className="mx-auto max-w-2xl text-lg">
          We couldn&apos;t find the page you were looking for.
        </p>
      </div>
      <p>
        <Link
          href="/"
          className="inline-flex items-center gap-1 border-b-2 border-b-transparent text-neutral-800 transition hover:border-neutral-800 dark:text-neutral-300 hover:dark:border-neutral-300"
        >
          Home
          <IconArrowRight className="inline-block size-4" />
        </Link>
      </p>
    </section>
  );
}
