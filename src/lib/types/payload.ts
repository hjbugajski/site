// [START] Fields
export interface PayloadFieldLink {
  text: string;
  type: 'internal' | 'file' | 'external';
  page?: PayloadPage | null;
  file?: PayloadFile | null;
  url?: string | null;
  rel?: ('noopener' | 'noreferrer' | 'nofollow')[] | null;
  newTab?: boolean | null;
  umamiEvent?: string | null;
  umamiEventId?: string | null;
  id?: string | null;
}
// [END] Fields

// [START] Blocks
export interface PayloadBlockItem {
  size: 'default' | 'large';
  heading: string;
  hasLink?: boolean | null;
  link: PayloadFieldLink;
  hasBadge?: boolean | null;
  badge: {
    text: string;
    color: 'gray' | 'blue' | 'red' | 'amber' | 'green' | 'teal' | 'purple' | 'pink';
  };
  tags: {
    icon: 'arrowUpRightSmall' | 'briefcase' | 'clock' | 'code' | 'globe' | 'servers';
    type: 'text' | 'date' | 'dateRange';
    text: string[];
    date: string;
    dateRange: {
      startDate: string;
      endDate: string;
    };
  }[];
  content?: {
    root: {
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      type: string;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'item';
}

export interface PayloadBlockSection {
  content?: {
    root: {
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      type: string;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'section';
}
// [END] Blocks

// [START] Collections
export interface PayloadFile {
  id: string;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}

export interface PayloadPage {
  id: string;
  title: string;
  description: string;
  content?: {
    root: {
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      type: string;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
}
// [END] Collections

// [START] Globals
export interface PayloadNavigation {
  id?: string;
  links?: PayloadFieldLink[];
  updatedAt?: string;
  createdAt?: string;
}
// [END] Globals
