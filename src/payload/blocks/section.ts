import {
  AlignFeature,
  BlocksFeature,
  BoldFeature,
  HeadingFeature,
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
import { Block } from 'payload/types';

import { Item } from '@/payload/blocks/item';

export const Section: Block = {
  slug: 'section',
  interfaceName: 'BlockSection',
  fields: [
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: () => [
          HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3'] }),
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
          BlocksFeature({
            blocks: [Item],
          }),
        ],
      }),
    },
  ],
};
