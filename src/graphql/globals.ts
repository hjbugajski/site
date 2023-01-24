import { LINK } from './link';

export const GLOBALS = `
  query Globals {
    Toolbar {
      toolbarItems {
        ${LINK}
      }
    }
  }
`;
