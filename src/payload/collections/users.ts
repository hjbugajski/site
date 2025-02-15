import type { CollectionConfig } from 'payload';

import { Role, hasRole, hasRoleField, hasRoleOrSelf, hasRoleOrSelfField } from '../access';

export const Users: CollectionConfig<'users'> = {
  slug: 'users',
  typescript: {
    interface: 'PayloadUsersCollection',
  },
  auth: true,
  admin: {
    useAsTitle: 'email',
    group: 'Admin',
    defaultColumns: ['email', 'roles', 'id'],
  },
  access: {
    create: hasRole(Role.Admin),
    read: hasRoleOrSelf(Role.Admin),
    update: hasRoleOrSelf(Role.Admin),
    delete: hasRole(Role.Admin),
  },
  fields: [
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      defaultValue: [Role.Public],
      required: true,
      access: {
        read: hasRoleOrSelfField(Role.Admin),
        update: hasRoleField(Role.Admin),
      },
      options: Object.values(Role).map((value) => value),
    },
  ],
};
