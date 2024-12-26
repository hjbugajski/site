import { DateTime } from 'luxon';

import { ItemDuration } from '@/components/blocks/item-duration.client';
import { Serialize } from '@/components/serialize';
import { Badge } from '@/lib/components/badge';
import { PayloadLink } from '@/lib/components/payload-link';
import { Icons } from '@/lib/icons';
import { cn } from '@/lib/utils/cn';
import { formatDuration } from '@/lib/utils/duration';
import type { PayloadItemBlock } from '@/payload/payload-types';

export function BlockItem(props: PayloadItemBlock) {
  const { badge, content, hasBadge, hasLink, heading, link, size, tags } = props;

  function formatDate(date: string) {
    return DateTime.fromISO(date).toLocaleString({ month: 'short', year: 'numeric' });
  }

  return (
    <div className="my-5 space-y-2 first:mt-0 last:mb-0">
      <div className="space-y-1">
        <div className="xs:flex-row xs:justify-normal xs:gap-x-2 flex w-full items-center justify-between gap-x-4 gap-y-1">
          <h1
            className={cn(
              'text-gray-text-primary font-bold',
              size === 'default' ? 'text-xl' : 'text-2xl',
            )}
          >
            {hasLink && link ? (
              <PayloadLink {...link} className={cn(size === 'default' ? 'text-xl' : 'text-2xl')}>
                {link.text}
              </PayloadLink>
            ) : (
              heading
            )}
          </h1>
          {hasBadge && badge && <Badge color={badge.color}>{badge.text}</Badge>}
        </div>
        <ul className="flex flex-col">
          {tags &&
            tags.map((tag, index) => (
              <li
                key={index}
                className="text-gray-text-primary flex items-baseline gap-2 font-medium"
              >
                <Icons
                  name={tag.icon}
                  className={cn('shrink-0', size === 'default' ? 'size-3' : 'size-[0.875rem]')}
                />
                {tag.type === 'text' && (
                  <p className={cn(size === 'default' && 'text-sm')}>{tag.text?.join(' • ')}</p>
                )}
                {tag.type === 'date' && tag.date && (
                  <p className={cn(size === 'default' && 'text-sm')}>
                    {formatDate(tag.date)} • <ItemDuration date={tag.date} />
                  </p>
                )}
                {tag.type === 'dateRange' && tag.dateRange && (
                  <p className={cn(size === 'default' && 'text-sm')}>
                    {formatDate(tag.dateRange.startDate)} &ndash;{' '}
                    {formatDate(tag.dateRange.endDate)} •{' '}
                    {formatDuration(tag.dateRange.startDate, tag.dateRange.endDate)}
                  </p>
                )}
              </li>
            ))}
        </ul>
      </div>
      {content?.root?.children && <Serialize nodes={content.root.children} />}
    </div>
  );
}
