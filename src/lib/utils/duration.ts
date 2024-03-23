import { DateTime, Interval } from 'luxon';

export function formatDuration(start: string, end?: string) {
  const { years, months } = Interval.fromDateTimes(
    DateTime.fromISO(start),
    end ? DateTime.fromISO(end) : DateTime.now(),
  ).toDuration(['years', 'months']);

  if (months.toFixed() === '12') {
    const adjustedYears = (years + 1).toFixed();

    return `${adjustedYears} ${adjustedYears === '1' ? 'yr' : 'yrs'}`;
  }

  if (years.toFixed() === '0') {
    const adjustedMonths = months.toFixed();

    return `${adjustedMonths} ${adjustedMonths === '1' ? 'mo' : 'mos'}`;
  }

  const adjustedYears = years.toFixed();
  const adjustedMonths = months.toFixed();

  return `${adjustedYears} ${adjustedYears === '1' ? 'yr' : 'yrs'} ${adjustedMonths} ${adjustedMonths === '1' ? 'mo' : 'mos'}`;
}
