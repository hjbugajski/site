import { HTMLProps, forwardRef } from 'react';

import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '../utils/cn';

export type BadgeProps = {
  color: 'gray' | 'blue' | 'red' | 'amber' | 'green' | 'teal' | 'purple' | 'pink';
};

const badgeVariants = cva('flex h-6 w-fit items-center gap-1 rounded-full border-2 px-2 text-xs font-medium', {
  variants: {
    color: {
      gray: 'border-gray-border-default bg-gray-bg-default text-gray-text-secondary',
      blue: 'border-blue-border-default bg-blue-bg-default text-blue-text-secondary',
      red: 'border-red-border-default bg-red-bg-default text-red-text-secondary',
      amber: 'border-amber-border-default bg-amber-bg-default text-amber-text-secondary',
      green: 'border-green-border-default bg-green-bg-default text-green-text-secondary',
      teal: 'border-teal-border-default bg-teal-bg-default text-teal-text-secondary',
      purple: 'border-purple-border-default bg-purple-bg-default text-purple-text-secondary',
      pink: 'border-pink-border-default bg-pink-bg-default text-pink-text-secondary',
    },
  },
  defaultVariants: {
    color: 'gray',
  },
});

export const Badge = forwardRef<HTMLSpanElement, HTMLProps<HTMLSpanElement> & VariantProps<typeof badgeVariants>>(
  ({ className, color, ...props }, ref) => (
    <span ref={ref} className={cn(badgeVariants({ color }), className)} {...props} />
  ),
);
Badge.displayName = 'Badge';
