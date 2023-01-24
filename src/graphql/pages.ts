import { CARD_SECTION, CONTENT } from './blocks';

export const PAGE = `
  query Page($slug: String) {
    Pages(where: { slug: { equals: $slug} }, draft: false) {
      docs {
        id
        name
        slug
        meta {
          title
          description
        }
        layout {
          ${CONTENT}
          ${CARD_SECTION}
        }
      }
    }
  }
`;

export const PAGES = `
  query Pages {
    Pages(limit: 500) {
      docs {
        slug
      }
    }
  }
`;
