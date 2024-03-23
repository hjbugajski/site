import { PayloadBlockSection } from '@/lib/types/payload';

import Serialize from '../serialize';

export default function BlockSection(props: PayloadBlockSection) {
  return (
    <section className="border-t-2 border-gray-border-default py-7 first:border-t-0 first:pt-0 last:pb-0">
      {props.content?.root?.children && <Serialize nodes={props.content.root.children} />}
    </section>
  );
}
