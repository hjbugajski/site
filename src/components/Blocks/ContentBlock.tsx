import Serialize from '@/components/Serialize';
import { PayloadContentBlock } from '@/interfaces';

export default function ContentBlock({ block }: { block: PayloadContentBlock }) {
  const { contentFields: fields } = block;

  return <Serialize nodes={fields.content as any} />;
}
