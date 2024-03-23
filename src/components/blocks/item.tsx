import { DateTime } from 'luxon';
import dynamic from 'next/dynamic';

import { Badge } from '@/lib/components/badge';
import { PayloadLink } from '@/lib/components/payload-link';
import { Icons } from '@/lib/icons';
import { PayloadBlockItem } from '@/lib/types/payload';
import { cn } from '@/lib/utils/cn';
import { formatDuration } from '@/lib/utils/duration';

import Serialize from '../serialize';

const ItemDuration = dynamic(() => import('@/components/blocks/item-duration.client'), { ssr: false });

export default function BlockItem(props: PayloadBlockItem) {
  const { badge, content, hasBadge, hasLink, heading, link, size, tags } = props;

  function formatDate(date: string) {
    return DateTime.fromISO(date).toLocaleString({ month: 'short', year: 'numeric' });
  }

  return (
    <div className="my-5 space-y-2 first:mt-0 last:mb-0">
      <div className="space-y-1">
        <div className="flex w-full items-center justify-between gap-x-4 gap-y-1 xs:flex-row xs:justify-normal xs:gap-x-2">
          <h1 className={cn('font-bold text-gray-text-primary', size === 'default' ? 'text-xl' : 'text-2xl')}>
            {hasLink && link ? (
              <PayloadLink {...link} className={cn(size === 'default' ? 'text-xl' : 'text-2xl')}>
                {link.text}
              </PayloadLink>
            ) : (
              heading
            )}
          </h1>
          {hasBadge && <Badge color={badge.color}>{badge.text}</Badge>}
        </div>
        <ul className="flex flex-col">
          {tags &&
            tags.map((tag, index) => (
              <li key={index} className="flex gap-2 font-medium text-gray-text-primary">
                <Icons name={tag.icon} className={cn('shrink-0', size === 'default' ? 'h-5 w-3' : 'h-6 w-4')} />
                {tag.type === 'text' && <p className={cn(size === 'default' && 'text-sm')}>{tag.text?.join(' • ')}</p>}
                {tag.type === 'date' && (
                  <p className={cn(size === 'default' && 'text-sm')}>
                    {formatDate(tag.date)} • <ItemDuration date={tag.date} />
                  </p>
                )}
                {tag.type === 'dateRange' && (
                  <p className={cn(size === 'default' && 'text-sm')}>
                    {formatDate(tag.dateRange.startDate)} &ndash; {formatDate(tag.dateRange.endDate)} •{' '}
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
