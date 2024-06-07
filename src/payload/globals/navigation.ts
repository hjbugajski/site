import { GlobalConfig } from 'payload/types';

import { Role, hasRole } from '@/payload/access';
import { linkArray } from '@/payload/fields/link';

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  access: {
    read: () => true,
    update: hasRole(Role.Admin),
  },
  fields: [linkArray],
};
