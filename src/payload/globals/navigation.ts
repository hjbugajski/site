import { revalidateTag } from 'next/cache';
import type { GlobalAfterChangeHook, GlobalConfig } from 'payload';

import { Role, hasRole } from '@/payload/access';
import { linkArray } from '@/payload/fields/link';

const useRevalidateTag: GlobalAfterChangeHook = ({ doc, global: { slug } }) => {
  revalidateTag(`global_${slug}`, { expire: 0 });

  return doc;
};

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  typescript: {
    interface: 'PayloadNavigationGlobal',
  },
  access: {
    read: () => true,
    update: hasRole(Role.Admin),
  },
  hooks: {
    afterChange: [useRevalidateTag],
  },
  fields: [linkArray],
};
