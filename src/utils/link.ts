import type { LinkProps } from 'next/link';

import type { PayloadLinkGroupField } from '@/payload/payload-types';
import { slugify } from '@/utils/slugify';

type InternalLinkProps = {
  'data-umami-event'?: string | null;
  'data-umami-event-id'?: string | null;
  'data-umami-event-url'?: string | null;
};

const getInternalLink = (link: PayloadLinkGroupField['page']) =>
  typeof link === 'string' ? link : link?.slug;

export const linkProps = (link: PayloadLinkGroupField): LinkProps & InternalLinkProps => {
  const href = link.type === 'internal' ? getInternalLink(link.page) : link.url;

  return {
    href: href || '/',
    ...(link.newTab ? { target: '_blank' } : {}),
    ...(link.type === 'external' ? { rel: link.rel?.join(',') } : {}),
    'data-umami-event': link.umamiEvent ?? 'Link',
    'data-umami-event-id': link.umamiEventId ?? slugify(link.text),
    'data-umami-event-url': href || '/',
  };
};
