import { SVGProps, forwardRef } from 'react';

import { IconArrowUpRightSmall } from './arrow-up-right-small';
import { IconBriefcase } from './briefcase';
import { IconClock } from './clock';
import { IconCode } from './code';
import { IconGlobe } from './globe';
import { IconServers } from './servers';

const icons = {
  arrowUpRightSmall: IconArrowUpRightSmall,
  briefcase: IconBriefcase,
  clock: IconClock,
  code: IconCode,
  globe: IconGlobe,
  servers: IconServers,
};

export const Icons = forwardRef<
  SVGSVGElement,
  SVGProps<SVGSVGElement> & { name: keyof typeof icons }
>(({ name, ...props }, ref) => {
  const RenderIcon = icons[name];

  return RenderIcon ? <RenderIcon ref={ref} {...props} /> : null;
});
Icons.displayName = 'Icons';
