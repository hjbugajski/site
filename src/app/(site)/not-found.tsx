import Link from 'next/link';

import { IconArrowRight } from '@/lib/icons/arrow-right';

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
          className="hover:dark:border-base-200 dark:text-base-200 inline-flex items-center gap-1 border-b-2 border-b-transparent text-black transition hover:border-black"
        >
          Home
          <IconArrowRight className="inline-block size-4" />
        </Link>
      </p>
    </section>
  );
}
