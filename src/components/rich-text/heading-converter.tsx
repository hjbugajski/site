import type { SerializedHeadingNode } from '@payloadcms/richtext-lexical';

import type { JSXConverter } from '@/components/rich-text';
import { cn } from '@/lib/utils/cn';
import { slugify } from '@/lib/utils/slugify';

const headingClasses = (node: SerializedHeadingNode) => {
  switch (node.tag) {
    case 'h1':
      return 'my-5 text-2xl';
    case 'h2':
      return 'my-4 text-xl';
    default:
      return 'my-3 text-lg';
  }
};

export const headingConverter: JSXConverter<SerializedHeadingNode> = ({
  additionalClass,
  node,
  nodesToJSX,
  overrideClass,
}) => (
  <node.tag
    // @ts-expect-error – valid key
    id={slugify(node.children?.map((c) => c.text).join(' '))}
    className={overrideClass || cn('first:mt-0 last:mb-0', headingClasses(node), additionalClass)}
  >
    {nodesToJSX({ nodes: node.children })}
  </node.tag>
);
