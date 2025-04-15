'use client';

import { formatDuration } from '@/utils/duration';

export function ItemDuration({ date }: { date: string }) {
  return formatDuration(date);
}
