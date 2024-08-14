import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical';
import { revalidateTag } from 'next/cache';
import { CollectionAfterChangeHook, CollectionConfig, FieldHook } from 'payload';

import { slugify } from '@/lib/utils/slugify';
import { Role, hasRole, hasRoleOrPublished } from '@/payload/access';
import { Item } from '@/payload/blocks/item';
import { Section } from '@/payload/blocks/section';

const useSlug: FieldHook = ({ operation, siblingData }) => {
  if (operation === 'create' || operation === 'update') {
    return slugify(siblingData?.title);
  }
};

export const useRevalidateTag: CollectionAfterChangeHook = ({ doc, previousDoc }) => {
  revalidateTag('pages');

  if (doc._status === 'published') {
    revalidateTag(`page_${doc.slug}`);
  }

  if (previousDoc?._status === 'published' && doc._status !== 'published') {
    revalidateTag(`page_${previousDoc.slug}`);
  }

  return doc;
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
  hooks: {
    afterChange: [useRevalidateTag],
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
