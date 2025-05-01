import type { SerializedLinkNode } from '@payloadcms/richtext-lexical';
import Link from 'next/link';

import type { JSXConverter } from '@/components/rich-text';
import { IconArrowRight } from '@/icons/arrow-right';
import { IconArrowUpRightSmall } from '@/icons/arrow-up-right-small';
import type { PayloadLinkGroupField } from '@/payload/payload-types';
import { cn } from '@/utils/cn';
import { linkProps } from '@/utils/link';

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
          'inline-flex items-center gap-1 border-b-2 border-b-transparent text-neutral-800 transition hover:border-neutral-800 dark:text-neutral-300 hover:dark:border-neutral-300',
          additionalClass,
        )
      }
    >
      <span>{nodesToJSX({ nodes: node.children })}</span>
      <Icon className="inline-block size-4" />
    </Link>
  );
};
