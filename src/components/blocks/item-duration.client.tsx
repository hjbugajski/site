'use client';

import { formatDuration } from '@/lib/utils/duration';

export default function ItemDuration({ date }: { date: string }) {
  return formatDuration(date);
}
