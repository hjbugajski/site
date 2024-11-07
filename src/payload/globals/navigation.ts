import { revalidateTag } from 'next/cache';
import { GlobalAfterChangeHook, GlobalConfig } from 'payload';

import { Role, hasRole } from '@/payload/access';
import { linkArray } from '@/payload/fields/link';

const useRevalidateTag: GlobalAfterChangeHook = ({ doc, global: { slug } }) => {
  revalidateTag(`global_${slug}`);

  return doc;
};

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  access: {
    read: () => true,
    update: hasRole(Role.Admin),
  },
  hooks: {
    afterChange: [useRevalidateTag],
  },
  fields: [linkArray],
};
