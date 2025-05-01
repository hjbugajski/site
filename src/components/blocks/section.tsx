import { RichText } from '@/components/rich-text';
import type { PayloadSectionBlock } from '@/payload/payload-types';

export function SectionBlock({ content }: PayloadSectionBlock) {
  return (
    <section className="border-t-2 border-neutral-300 py-7 first:border-t-0 first:pt-0 last:pb-0 dark:border-neutral-800">
      <RichText content={content} />
    </section>
  );
}
