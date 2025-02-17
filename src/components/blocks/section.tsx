import { RichText } from '@/components/rich-text';
import type { PayloadSectionBlock } from '@/payload/payload-types';

export function SectionBlock({ content }: PayloadSectionBlock) {
  return (
    <section className="border-base-100 dark:border-base-900 border-t-2 py-7 first:border-t-0 first:pt-0 last:pb-0">
      <RichText content={content} />
    </section>
  );
}
