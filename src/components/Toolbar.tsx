import PayloadLink from '@/components/PayloadLink';
import { PayloadToolbar } from '@/interfaces';

import styles from './Toolbar.module.css';

export default function Toolbar({ toolbar }: { toolbar: PayloadToolbar | undefined }) {
  return (
    <nav className={styles.toolbar}>
      <div className={styles.innerContainer}>
        {toolbar?.toolbarItems?.map((item, i) => (
          <PayloadLink key={i} link={item}>
            {item.label}
          </PayloadLink>
        ))}
      </div>
    </nav>
  );
}
