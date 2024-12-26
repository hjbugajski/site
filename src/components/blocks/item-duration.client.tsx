'use client';

import { formatDuration } from '@/lib/utils/duration';

export function ItemDuration({ date }: { date: string }) {
  return formatDuration(date);
}
