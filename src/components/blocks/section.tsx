import type { PayloadSectionBlock } from '@/payload/payload-types';

import { Serialize } from '@/components/serialize';

export function BlockSection(props: PayloadSectionBlock) {
  return (
    <section className="border-base-100 dark:border-base-900 border-t-2 py-7 first:border-t-0 first:pt-0 last:pb-0">
      {props.content?.root?.children && <Serialize nodes={props.content.root.children} />}
    </section>
  );
}
