import { Serialize } from '@/components/serialize';
import type { BlockSection as BlockSectionType } from '@/payload/payload-types';

export default function BlockSection(props: BlockSectionType) {
  return (
    <section className="border-t-2 border-gray-border-default py-7 first:border-t-0 first:pt-0 last:pb-0">
      {props.content?.root?.children && <Serialize nodes={props.content.root.children} />}
    </section>
  );
}
