import { PayloadLink } from '@/lib/components/payload-link';
import { PayloadNavigation } from '@/lib/types/payload';

export default function Navigation({ links }: PayloadNavigation) {
  return (
    <nav className="fixed w-full bg-background/75 backdrop-blur-md print:hidden">
      <ul className="mx-auto flex h-14 w-full max-w-2xl items-center gap-3 px-4">
        {links?.map((link, i) => (
          <li key={i}>
            <PayloadLink {...link} size="sm" className="font-medium">
              {link.text}
            </PayloadLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
