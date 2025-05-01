import { DateTime } from 'luxon';

import { ItemDuration } from '@/components/blocks/item-duration.client';
import { RichText } from '@/components/rich-text';
import { PayloadLink } from '@/components/ui/payload-link';
import { Icons } from '@/icons';
import type { PayloadItemBlock } from '@/payload/payload-types';
import { cn } from '@/utils/cn';
import { formatDuration } from '@/utils/duration';

export function ItemBlock(props: PayloadItemBlock) {
  const { content, hasLink, heading, link, size, tags } = props;

  function formatDate(date: string) {
    return DateTime.fromISO(date).toLocaleString({ month: 'short', year: 'numeric' });
  }

  return (
    <div className="my-5 space-y-2 first:mt-0 last:mb-0">
      <div className="space-y-1 font-display">
        <h1 className={cn('flex items-center', size === 'default' ? 'text-3xl' : 'text-2xl')}>
          {hasLink && link ? (
            <PayloadLink {...link} className={cn(size === 'default' ? 'text-xl' : 'text-2xl')}>
              {link.text}
            </PayloadLink>
          ) : (
            heading
          )}
        </h1>
        <ul className="flex flex-col">
          {tags?.map((tag, index) => (
            <li
              key={index}
              className={cn(
                'grid gap-2 font-semibold text-neutral-800 dark:text-neutral-300',
                size === 'default' ? 'grid-cols-[0.875rem_1fr]' : 'grid-cols-[1rem_1fr]',
              )}
            >
              <div
                className={cn(
                  'flex items-center justify-center',
                  size === 'default' ? 'h-5' : 'h-6',
                )}
              >
                <Icons
                  name={tag.icon}
                  className={cn('shrink-0', size === 'default' ? 'size-3.5' : 'size-4')}
                />
              </div>
              {tag.type === 'text' ? (
                <p className={cn(size === 'default' && 'text-sm')}>{tag.text?.join(' • ')}</p>
              ) : null}
              {tag.type === 'date' && tag.date ? (
                <p className={cn(size === 'default' && 'text-sm')}>
                  {formatDate(tag.date)} • <ItemDuration date={tag.date} />
                </p>
              ) : null}
              {tag.type === 'dateRange' && tag.dateRange ? (
                <p className={cn(size === 'default' && 'text-sm')}>
                  {formatDate(tag.dateRange.startDate)} &ndash; {formatDate(tag.dateRange.endDate)}{' '}
                  • {formatDuration(tag.dateRange.startDate, tag.dateRange.endDate)}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
      <RichText content={content} />
    </div>
  );
}
