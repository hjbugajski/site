import ExternalLinksMenu from '@/components/ExternalLinksMenu';
import { PayloadCard } from '@/interfaces';

import styles from './Card.module.css';

export default function Card({ card }: { card: PayloadCard }) {
  return (
    <div className={[styles.card, card.color ? styles[card.color!] : undefined].join(' ')}>
      <div className={styles.titleContainer}>
        <div className={styles.titleToolbar}>
          <h1 className={styles.title}>{card.title}</h1>
          <ExternalLinksMenu links={card.links} />
        </div>
        <div className={styles.tags}>
          {card.tags.map((tag, i) => (
            <span key={`key-${i}`} className={styles.tag}>
              {tag.value}
            </span>
          ))}
        </div>
      </div>
      {card.body.map((item, i) => (
        <p key={i} className={styles.description}>
          {item.content}
        </p>
      ))}
      <div className={styles.footer}>{card.footer}</div>
    </div>
  );
}
