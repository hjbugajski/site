import CardSectionBlock from '@/components/Blocks/CardSectionBlock';
import ContentBlock from '@/components/Blocks/ContentBlock';
import { PayloadCardSectionBlock, PayloadContentBlock } from '@/interfaces';

const blocks = {
  content: ContentBlock,
  cardSection: CardSectionBlock
};

export default function Blocks({ block }: { block: PayloadContentBlock | PayloadCardSectionBlock }) {
  const RenderBlock = blocks[block.blockType];

  // @ts-ignore
  return RenderBlock ? <RenderBlock block={block} /> : null;
}
