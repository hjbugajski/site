import { PayloadLink } from '@/lib/components/payload-link';
import type { PayloadNavigationGlobal } from '@/payload/payload-types';

export function Navigation({ links }: PayloadNavigationGlobal) {
  return (
    <nav className="fixed w-full bg-neutral-100/75 backdrop-blur-md dark:bg-neutral-900/75 print:hidden">
      <ul className="mx-auto flex h-14 w-full max-w-2xl items-center gap-3 px-4">
        {links?.map((link) => (
          <li key={link.id}>
            <PayloadLink {...link} size="sm" className="font-medium">
              {link.text}
            </PayloadLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
