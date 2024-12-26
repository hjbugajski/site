import type { ComponentProps } from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '../utils/cn';

export type BadgeProps = {
  color: 'gray' | 'blue' | 'red' | 'amber' | 'green' | 'teal' | 'purple' | 'pink';
};

const badgeVariants = cva(
  'flex h-6 w-fit items-center gap-1 rounded-full border-2 px-2 text-xs font-medium',
  {
    variants: {
      color: {
        gray: 'border-neutral-300 bg-neutral-200 text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400',
        blue: 'border-blue-200 bg-blue-100 text-blue-800 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-400',
        red: 'border-red-200 bg-red-100 text-red-800 dark:border-red-900 dark:bg-red-950 dark:text-red-400',
        amber:
          'border-amber-200 bg-amber-100 text-amber-800 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-500',
        green:
          'border-green-200 bg-green-100 text-green-800 dark:border-green-900 dark:bg-green-950 dark:text-green-400',
        teal: 'border-teal-200 bg-teal-100 text-teal-800 dark:border-teal-900 dark:bg-teal-950 dark:text-teal-400',
        purple:
          'border-violet-200 bg-violet-100 text-violet-800 dark:border-violet-900 dark:bg-violet-950 dark:text-violet-400',
        pink: 'border-pink-200 bg-pink-100 text-pink-800 dark:border-pink-900 dark:bg-pink-950 dark:text-pink-400',
      },
    },
    defaultVariants: {
      color: 'gray',
    },
  },
);

type Props = ComponentProps<'span'> & VariantProps<typeof badgeVariants>;

export const Badge = ({ className, color, ...props }: Props) => (
  <span className={cn(badgeVariants({ color }), className)} {...props} />
);
