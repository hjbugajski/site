import type { ComponentProps } from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/utils/cn';

export type BadgeProps = {
  color: 'gray' | 'blue' | 'red' | 'orange' | 'green' | 'cyan' | 'purple' | 'magenta';
};

const badgeVariants = cva(
  'flex h-6 w-fit items-center gap-1 rounded-full border-2 px-2 text-xs font-medium',
  {
    variants: {
      color: {
        base: 'border-base-100 bg-base-50 text-base-600 dark:border-base-900 dark:bg-base-950 dark:text-base-500',
        red: 'border-red-100 bg-red-50 text-red-600 dark:border-red-900 dark:bg-red-950 dark:text-red-500',
        orange:
          'border-orange-100 bg-orange-50 text-orange-600 dark:border-orange-900 dark:bg-orange-950 dark:text-orange-500',
        yellow:
          'border-yellow-100 bg-yellow-50 text-yellow-600 dark:border-yellow-900 dark:bg-yellow-950 dark:text-yellow-500',
        green:
          'border-green-100 bg-green-50 text-green-600 dark:border-green-900 dark:bg-green-950 dark:text-green-500',
        cyan: 'border-cyan-100 bg-cyan-50 text-cyan-600 dark:border-cyan-900 dark:bg-cyan-950 dark:text-cyan-500',
        blue: 'border-blue-100 bg-blue-50 text-blue-600 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-500',
        purple:
          'border-purple-100 bg-purple-50 text-purple-600 dark:border-purple-900 dark:bg-purple-950 dark:text-purple-500',
        magenta:
          'border-magenta-100 bg-magenta-50 text-magenta-600 dark:border-magenta-900 dark:bg-magenta-950 dark:text-magenta-500',
      },
    },
    defaultVariants: {
      color: 'base',
    },
  },
);

type Props = ComponentProps<'span'> & VariantProps<typeof badgeVariants>;

export const Badge = ({ className, color, ...props }: Props) => (
  <span className={cn(badgeVariants({ color }), className)} {...props} />
);
