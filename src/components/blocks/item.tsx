import type { ComponentType } from 'react';

import { DateTime } from 'luxon';

import { ItemDuration } from '@/components/blocks/item-duration.client';
import { PayloadLink } from '@/components/ui/payload-link';
import { Icons } from '@/icons';
import type { PayloadItemBlock } from '@/payload/payload-types';
import { cn } from '@/utils/cn';
import { formatDuration } from '@/utils/duration';

interface ItemBlockProps extends PayloadItemBlock {
  RichText: ComponentType<{ content?: PayloadItemBlock['content'] }>;
}

function formatDate(date: string) {
  return DateTime.fromISO(date).toLocaleString({ month: 'short', year: 'numeric' });
}

export function ItemBlock(props: ItemBlockProps) {
  const { content, hasLink, heading, link, positions, RichText, size, tags } = props;
  const hasPositions = !!positions && positions.length > 0;

  return (
    <div className="my-5 space-y-2 first:mt-0 last:mb-0">
      <div className="space-y-1">
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
                  className={cn(
                    'shrink-0 text-neutral-700 dark:text-neutral-400',
                    size === 'default' ? 'size-3.5' : 'size-4',
                  )}
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
      {hasPositions ? (
        <ol className="mt-3 flex flex-col">
          {positions.map((position, index) => {
            const isLast = index === positions.length - 1;

            return (
              <li
                key={position.id ?? index}
                className={cn(
                  'grid gap-3',
                  size === 'default' ? 'grid-cols-[0.875rem_1fr]' : 'grid-cols-[1rem_1fr]',
                  !isLast && 'pb-3',
                )}
              >
                <div className="relative flex justify-center">
                  {!isLast ? (
                    <span
                      aria-hidden="true"
                      className="absolute top-2 bottom-0 w-px bg-neutral-300 dark:bg-neutral-700"
                    />
                  ) : null}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'relative shrink-0 rounded-full bg-neutral-700 dark:bg-neutral-400',
                      size === 'default' ? 'mt-1 size-2' : 'mt-1.5 size-2.5',
                    )}
                  />
                </div>
                <div className="space-y-0.5">
                  <h2
                    className={cn('font-semibold', size === 'default' ? 'text-base' : 'text-lg')}
                  >
                    {position.title}
                  </h2>
                  {position.dateRange ? (
                    <p
                      className={cn(
                        'text-neutral-700 dark:text-neutral-400',
                        size === 'default' ? 'text-xs' : 'text-sm',
                      )}
                    >
                      {formatDate(position.dateRange.startDate)} &ndash;{' '}
                      {position.dateRange.endDate
                        ? formatDate(position.dateRange.endDate)
                        : 'Present'}{' '}
                      •{' '}
                      {position.dateRange.endDate ? (
                        formatDuration(position.dateRange.startDate, position.dateRange.endDate)
                      ) : (
                        <ItemDuration date={position.dateRange.startDate} />
                      )}
                    </p>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ol>
      ) : (
        <RichText content={content} />
      )}
    </div>
  );
}
