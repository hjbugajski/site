import type { ComponentProps } from 'react';

export const IconClock = (props: ComponentProps<'svg'>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="square"
    />
    <path d="M12 8V12L14.5 14.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
  </svg>
);
