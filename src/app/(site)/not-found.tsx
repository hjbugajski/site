import Link from 'next/link';

import { IconArrowUpRightSmall } from '@/lib/icons/arrow-up-right-small';

export default function NotFound() {
  return (
    <section className="space-y-3">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Page Not Found</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-neutral-400">
          We couldn&apos;t find the page you were looking for.
        </p>
      </div>
      <p>
        <Link
          href="/"
          className="border-b-2 border-b-transparent transition hover:border-neutral-800 dark:hover:border-neutral-200"
        >
          Home
          <IconArrowUpRightSmall className="inline-block size-5" />
        </Link>
      </p>
    </section>
  );
}
