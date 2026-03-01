'use client';

import { useRowLabel } from '@payloadcms/ui';
import type { Data } from 'payload';

export function RowLabel({ path, fallback }: { path: string; fallback: string }) {
  const { data, rowNumber } = useRowLabel<Data>();
  const fieldValue = path.split('.').reduce<unknown>((value, part) => {
    if (value && typeof value === 'object') {
      return (value as Record<string, unknown>)[part];
    }

    return undefined;
  }, data);

  // oxlint-disable-next-line react/jsx-no-useless-fragment
  return <>{fieldValue || `${fallback} ${rowNumber}`}</>;
}
