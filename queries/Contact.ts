import { Page } from '@/types/shared';
import { contentfulQuery } from './Query';

export async function getContactPage() {
  const query = /* GRAPHQL */ `
    query HomeQuery {
      page (id: "hoxa3LULdSx52ABwcwSKc") {
        title
        description {
            json
        }
      }
    }`;
  const { data } = await contentfulQuery(query);
  return data.page as Page;
}
