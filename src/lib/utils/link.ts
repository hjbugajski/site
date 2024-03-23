import { LinkProps } from 'next/link';

import { PayloadFieldLink } from '@/lib/types/payload';
import { slugify } from '@/lib/utils/slugify';

type InternalLinkProps = {
  'data-umami-event'?: string | null;
  'data-umami-event-id'?: string | null;
  'data-umami-event-url'?: string | null;
};

export const linkProps = (link: PayloadFieldLink): LinkProps & InternalLinkProps => {
  const href = link.type === 'internal' ? link.page?.slug : link.type === 'file' ? link.file?.url : link.url;

  return {
    href: href ?? '/',
    ...(link.newTab ? { target: '_blank' } : {}),
    ...(link.type === 'external' ? { rel: link.rel?.join(',') } : {}),
    'data-umami-event': link.umamiEvent ?? 'Link',
    'data-umami-event-id': link.umamiEventId ?? slugify(link.text),
    'data-umami-event-url': href,
  };
};
