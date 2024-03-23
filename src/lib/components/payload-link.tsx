import { ReactNode } from 'react';

import { VariantProps, cva } from 'class-variance-authority';
import Link from 'next/link';

import { IconArrowUpRightSmall } from '../icons/arrow-up-right-small';
import { PayloadFieldLink } from '../types/payload';
import { cn } from '../utils/cn';
import { linkProps } from '../utils/link';

const linkVariants = cva(
  'border-b-2 border-b-transparent transition hover:border-gray-text-primary hover:text-gray-text-primary',
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: 'text-base',
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
      sm: 'size-4',
      md: 'size-5',
      lg: 'size-6',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface PayloadLinkProps extends PayloadFieldLink, VariantProps<typeof linkVariants> {
  children?: ReactNode;
  className?: string;
}

const PayloadLink = ({ children, className, size, ...link }: PayloadLinkProps) => (
  <Link {...linkProps(link)} className={cn(linkVariants({ size }), className)}>
    {children}
    <IconArrowUpRightSmall className={iconVariants({ size })} />
  </Link>
);

export { PayloadLink };
