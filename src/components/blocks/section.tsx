import type { ComponentType } from 'react';

import type { PayloadSectionBlock } from '@/payload/payload-types';

interface SectionBlockProps extends PayloadSectionBlock {
  RichText: ComponentType<{ content?: PayloadSectionBlock['content'] }>;
}

export function SectionBlock({ content, RichText }: SectionBlockProps) {
  return (
    <section className="border-t-2 border-neutral-300 py-7 first:border-t-0 first:pt-0 last:pb-0 dark:border-neutral-800">
      <RichText content={content} />
    </section>
  );
}
