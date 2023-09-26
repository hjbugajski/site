import PayloadLink from '@/components/PayloadLink';
import { PayloadToolbar } from '@/interfaces';

import styles from './Toolbar.module.css';

export default function Toolbar({ toolbar }: { toolbar: PayloadToolbar | undefined }) {
  return (
    <nav className={styles.toolbar}>
      <ul className={styles.list}>
        {toolbar?.toolbarItems?.map((item, i) => (
          <li key={i}>
            <PayloadLink link={item}>{item.label}</PayloadLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
