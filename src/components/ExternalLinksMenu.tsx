'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import PayloadLink from '@/components/PayloadLink';
import { IconExternalLink } from '@/icons';
import { PayloadLinkType } from '@/interfaces';

import styles from './ExternalLinksMenu.module.css';

export default function ExternalLinksMenu({ links }: { links: PayloadLinkType[] }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={styles.iconButton} aria-label="External links menu">
          <IconExternalLink />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" className={styles.content}>
          {links.map((link, i) => (
            <PayloadLink key={`link-${i}`} link={link}>
              <DropdownMenu.Item className={styles.item}>{link.label}</DropdownMenu.Item>
            </PayloadLink>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
