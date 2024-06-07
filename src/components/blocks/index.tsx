import {
  BlockItem as BlockItemType,
  BlockSection as BlockSectionType,
} from '@/payload/payload-types';

import BlockItem from './item';
import BlockSection from './section';

export function Blocks(props: BlockItemType | BlockSectionType) {
  switch (props.blockType) {
    case 'item':
      return <BlockItem {...props} />;
    case 'section':
      return <BlockSection {...props} />;
    default:
      return null;
  }
}
