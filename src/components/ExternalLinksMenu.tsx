'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import PayloadLink from '@/components/PayloadLink';
import { IconExternalLink } from '@/icons';
import { PayloadLinkType } from '@/interfaces';

import styles from './ExternalLinksMenu.module.css';

export default function ExternalLinksMenu({ links }: { links: PayloadLinkType[] }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={styles.iconButton} aria-label="External links menu">
        <IconExternalLink />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" className={styles.content}>
          <ul className={styles.list}>
            {links.map((link, i) => (
              <li key={i}>
                <PayloadLink link={link}>
                  <DropdownMenu.Item className={styles.item}>{link.label}</DropdownMenu.Item>
                </PayloadLink>
              </li>
            ))}
          </ul>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
