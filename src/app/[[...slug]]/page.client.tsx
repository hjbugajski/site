'use client';

import { useLivePreview } from '@payloadcms/live-preview-react';

import Serialize from '@/components/serialize';
import { PayloadPage } from '@/lib/types/payload';

export default function PageClient({ page }: { page: PayloadPage }) {
  const { data } = useLivePreview({
    serverURL: process.env.NEXT_PUBLIC_PAYLOAD_URL || '',
    depth: 2,
    initialData: page,
  });

  return <>{data.content?.root?.children && <Serialize nodes={data.content.root.children} />}</>;
}
