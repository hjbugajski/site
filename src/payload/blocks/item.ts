import {
  AlignFeature,
  BoldFeature,
  ItalicFeature,
  OrderedListFeature,
  ParagraphFeature,
  StrikethroughFeature,
  SubscriptFeature,
  SuperscriptFeature,
  UnderlineFeature,
  UnorderedListFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';
import type { Block, Field } from 'payload';

import { linkGroup } from '@/payload/fields/link';
import type { PayloadItemBlock } from '@/payload/payload-types';
import { deepMerge } from '@/payload/utils/deep-merge';

export const Item: Block = {
  slug: 'item',
  interfaceName: 'PayloadItemBlock',
  fields: [
    {
      name: 'size',
      type: 'radio',
      required: true,
      defaultValue: 'default',
      options: [
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'Large',
          value: 'large',
        },
      ],
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'hasLink',
      type: 'checkbox',
      defaultValue: false,
    },
    deepMerge<Field>(linkGroup, {
      admin: {
        condition: (_, siblingData: Partial<PayloadItemBlock>) => !!siblingData.hasLink,
      },
    }),
    {
      name: 'hasBadge',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'badge',
      type: 'group',
      admin: {
        condition: (_, siblingData: Partial<PayloadItemBlock>) => !!siblingData.hasBadge,
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
        {
          name: 'color',
          type: 'select',
          defaultValue: 'gray',
          required: true,
          options: [
            {
              label: 'Gray',
              value: 'gray',
            },
            {
              label: 'Blue',
              value: 'blue',
            },
            {
              label: 'Red',
              value: 'red',
            },
            {
              label: 'Amber',
              value: 'amber',
            },
            {
              label: 'Green',
              value: 'green',
            },
            {
              label: 'Teal',
              value: 'teal',
            },
            {
              label: 'Purple',
              value: 'purple',
            },
            {
              label: 'Pink',
              value: 'pink',
            },
          ],
        },
      ],
    },
    {
      name: 'tags',
      type: 'array',
      required: true,
      admin: {
        components: {
          RowLabel: {
            path: '@/payload/components/row-label.tsx',
            exportName: 'RowLabel',
            clientProps: {
              path: 'icon',
              fallback: 'Tag',
            },
          },
        },
      },
      fields: [
        {
          name: 'icon',
          type: 'select',
          required: true,
          options: [
            {
              label: 'Arrow Up Right Small',
              value: 'arrowUpRightSmall',
            },
            {
              label: 'Briefcase',
              value: 'briefcase',
            },
            {
              label: 'Clock',
              value: 'clock',
            },
            {
              label: 'Code',
              value: 'code',
            },
            {
              label: 'Globe',
              value: 'globe',
            },
            {
              label: 'Servers',
              value: 'servers',
            },
          ],
        },
        {
          name: 'type',
          type: 'select',
          required: true,
          options: [
            {
              label: 'Text',
              value: 'text',
            },
            {
              label: 'Date',
              value: 'date',
            },
            {
              label: 'Date Range',
              value: 'dateRange',
            },
          ],
        },
        {
          name: 'text',
          type: 'text',
          hasMany: true,
          required: true,
          admin: {
            condition: (_, siblingData) => siblingData.type === 'text',
          },
        },
        {
          name: 'date',
          type: 'date',
          required: true,
          admin: {
            condition: (_, siblingData) => siblingData.type === 'date',
          },
        },
        {
          name: 'dateRange',
          type: 'group',
          admin: {
            condition: (_, siblingData) => siblingData.type === 'dateRange',
          },
          fields: [
            {
              name: 'startDate',
              type: 'date',
              required: true,
            },
            {
              name: 'endDate',
              type: 'date',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: () => [
          ParagraphFeature(),
          BoldFeature(),
          ItalicFeature(),
          UnderlineFeature(),
          StrikethroughFeature(),
          UnorderedListFeature(),
          OrderedListFeature(),
          SuperscriptFeature(),
          SubscriptFeature(),
          AlignFeature(),
        ],
      }),
    },
  ],
};
