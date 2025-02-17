import type { SerializedLinkNode } from '@payloadcms/richtext-lexical';
import Link from 'next/link';

import type { JSXConverter } from '@/components/rich-text';
import { IconArrowRight } from '@/lib/icons/arrow-right';
import { IconArrowUpRightSmall } from '@/lib/icons/arrow-up-right-small';
import { cn } from '@/lib/utils/cn';
import { linkProps } from '@/lib/utils/link';
import type { PayloadLinkGroupField } from '@/payload/payload-types';

export const linkConverter: JSXConverter<SerializedLinkNode> = ({
  additionalClass,
  node,
  nodesToJSX,
  overrideClass,
}) => {
  const fields = node.fields as unknown as PayloadLinkGroupField;
  const Icon = fields.type === 'internal' ? IconArrowRight : IconArrowUpRightSmall;

  return (
    <Link
      {...linkProps(fields)}
      className={
        overrideClass ||
        cn(
          'dark:text-base-200 hover:dark:border-base-200 inline-flex items-center gap-1 border-b-2 border-b-transparent text-black transition hover:border-black',
          additionalClass,
        )
      }
    >
      <span>{nodesToJSX({ nodes: node.children })}</span>
      <Icon className="inline-block size-4" />
    </Link>
  );
};
