import Link from 'next/link';

import { PayloadLinkType } from '@/interfaces';

export interface PayloadLinkProps {
  children?: any;
  link: PayloadLinkType;
}

const PAYLOAD_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL;

export default function PayloadLink({ children, link }: PayloadLinkProps) {
  return <Link href={link.file ? PAYLOAD_URL! + link.file.url! : link.url}>{children}</Link>;
}
