import type { ReactNode } from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import Link from 'next/link';

import { IconArrowUpRightSmall } from '@/icons/arrow-up-right-small';
import type { PayloadLinkGroupField } from '@/payload/payload-types';
import { cn } from '@/utils/cn';
import { linkProps } from '@/utils/link';

const linkVariants = cva(
  'inline-flex items-center gap-1 border-b-2 border-b-transparent text-neutral-800 transition hover:border-neutral-800 dark:text-neutral-300 hover:dark:border-neutral-300',
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: 'text-neutral',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const iconVariants = cva('inline-block', {
  variants: {
    size: {
      sm: 'mb-[3.5px] size-3.5',
      md: 'mb-1 size-4.5',
      lg: 'mb-1.25 size-5.5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface PayloadLinkProps extends PayloadLinkGroupField, VariantProps<typeof linkVariants> {
  children?: ReactNode;
  className?: string;
}

const PayloadLink = ({ children, className, size, ...link }: PayloadLinkProps) => (
  <Link
    {...linkProps(link)}
    className={cn(linkVariants({ size }), className, 'mb mb-1 inline-flex items-end')}
  >
    {children}
    <IconArrowUpRightSmall className={cn(iconVariants({ size }))} />
  </Link>
);

export { PayloadLink };
