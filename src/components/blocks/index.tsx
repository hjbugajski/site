import { BlockItem } from '@/components/blocks/item';
import { BlockSection } from '@/components/blocks/section';
import type { PayloadItemBlock, PayloadSectionBlock } from '@/payload/payload-types';

export function Blocks(props: PayloadItemBlock | PayloadSectionBlock) {
  switch (props.blockType) {
    case 'item':
      return <BlockItem {...props} />;
    case 'section':
      return <BlockSection {...props} />;
    default:
      return null;
  }
}
