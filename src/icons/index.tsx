import type { ComponentProps } from 'react';

import { IconArrowRight } from '@/icons/arrow-right';
import type { PayloadItemBlock } from '@/payload/payload-types';

import { IconArrowUpRightSmall } from './arrow-up-right-small';
import { IconBriefcase } from './briefcase';
import { IconClock } from './clock';
import { IconCode } from './code';
import { IconGlobe } from './globe';
import { IconServers } from './servers';

type Props = ComponentProps<'svg'> & { name: PayloadItemBlock['tags'][number]['icon'] };

export const Icons = ({ name, ...props }: Props) => {
  switch (name) {
    case 'arrowRight':
      return <IconArrowRight {...props} />;
    case 'arrowUpRightSmall':
      return <IconArrowUpRightSmall {...props} />;
    case 'briefcase':
      return <IconBriefcase {...props} />;
    case 'clock':
      return <IconClock {...props} />;
    case 'code':
      return <IconCode {...props} />;
    case 'globe':
      return <IconGlobe {...props} />;
    case 'servers':
      return <IconServers {...props} />;
    default:
      return null;
  }
};
