import { FC } from 'react';

import { PayloadBlockItem, PayloadBlockSection } from '@/lib/types/payload';

import BlockItem from './item';
import BlockSection from './section';

const blocks = {
  item: BlockItem,
  section: BlockSection,
};

export function Blocks({ blockType, ...props }: PayloadBlockItem | PayloadBlockSection) {
  const RenderBlock: FC<any> = blocks[blockType];

  return RenderBlock ? <RenderBlock {...props} /> : null;
}
