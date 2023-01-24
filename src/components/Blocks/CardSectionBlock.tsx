import Card from '@/components/Card';
import { PayloadCardSectionBlock } from '@/interfaces';

import styles from './CardSectionBlock.module.css';

export default function CardSectionBlock({ block }: { block: PayloadCardSectionBlock }) {
  const { cardSectionFields: fields } = block;

  return (
    <>
      <h1>{fields.title}</h1>
      <div className={fields.cards.length > 1 ? styles.grid : undefined}>
        {fields.cards.map((card, i) => (
          <Card key={i} card={card} />
        ))}
      </div>
    </>
  );
}
