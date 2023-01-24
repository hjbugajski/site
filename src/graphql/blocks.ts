import { LINK } from './link';

export const CONTENT = `
... on Content {
  blockType
  contentFields {
    content
  }
}
`;

export const CARD_SECTION = `
... on CardSection {
    blockType
    cardSectionFields {
      title
      cards {
        title
        color
        links {
          ${LINK}
        }
        tags {
          value
        }
        body {
          content
        }
        footer
      }
    }
  }
`;
