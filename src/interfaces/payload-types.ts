export interface Config {}

export interface PayloadLinkType {
  type: 'internal' | 'file' | 'external';
  newTab?: boolean;
  internal: PayloadPage;
  file: PayloadFile;
  label: string;
  url: string;
  id?: string;
}

export interface PayloadToolbar {
  id: string;
  toolbarItems: PayloadLinkType[];
}

export interface PayloadContentBlock {
  contentFields: {
    content?: {
      [k: string]: unknown;
    }[];
  };
  id?: string;
  blockName?: string;
  blockType: 'content';
}

export interface PayloadCard {
  title: string;
  color?: 'blue' | 'teal' | 'tomato' | 'plum' | 'violet';
  links: PayloadLinkType[];
  tags: {
    value: string;
    id?: string;
  }[];
  body: {
    content: string;
    id?: string;
  }[];
  footer: string;
  id?: string;
}

export interface PayloadCardSectionBlock {
  cardSectionFields: {
    title: string;
    cards: PayloadCard[];
  };
  id?: string;
  blockName?: string;
  blockType: 'cardSection';
}

export interface PayloadPage {
  id: string;
  name: string;
  slug: string;
  meta: {
    title: string;
    description: string;
  };
  layout: (PayloadContentBlock | PayloadCardSectionBlock)[];
  _status?: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}

export interface PayloadFile {
  id: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  createdAt: string;
  updatedAt: string;
}

export interface PayloadUser {
  id: string;
  firstName?: string;
  lastName?: string;
  roles: ('admin' | 'editor' | 'public')[];
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
}
