import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical';
import { CollectionConfig, FieldHook } from 'payload';

import { slugify } from '@/lib/utils/slugify';
import { Role, hasRole, hasRoleOrPublished } from '@/payload/access';
import { Item } from '@/payload/blocks/item';
import { Section } from '@/payload/blocks/section';

const useSlug: FieldHook = ({ operation, siblingData }) => {
  if (operation === 'create' || operation === 'update') {
    return slugify(siblingData?.title);
  }
};

export const Pages: CollectionConfig = {
  slug: 'pages',
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'status', 'updatedAt'],
  },
  access: {
    read: hasRoleOrPublished(Role.Admin),
    create: hasRole(Role.Admin),
    update: hasRole(Role.Admin),
    delete: hasRole(Role.Admin),
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: () => [
          BlocksFeature({
            blocks: [Section, Item],
          }),
        ],
      }),
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
      hooks: {
        beforeValidate: [useSlug],
      },
    },
  ],
};
