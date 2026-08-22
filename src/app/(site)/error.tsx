'use client';

import { IconArrowRight } from '@/icons/arrow-right';

export default function Error({ retry }: { retry: () => void }) {
  return (
    <section className="space-y-3">
      <div className="space-y-1">
        <h1 className="text-2xl">Something Went Wrong</h1>
        <p className="mx-auto max-w-2xl text-lg">
          An unexpected error occurred while loading this page.
        </p>
      </div>
      <p>
        <button
          type="button"
          onClick={() => retry()}
          className="inline-flex cursor-pointer items-center gap-1 border-b-2 border-b-transparent text-neutral-800 transition hover:border-neutral-800 dark:text-neutral-300 hover:dark:border-neutral-300"
        >
          Try again
          <IconArrowRight className="inline-block size-4" />
        </button>
      </p>
    </section>
  );
}
