import { Page } from '@/types/shared';
import { contentfulQuery } from './Query';

export async function getDatesPage() {
  const query = /* GRAPHQL */ `
    query HomeQuery {
      page (id: "4gblXBliAKYqQOa3GdiaD7") {
        title
        description {
          json
          links {
            assets {
              block {
                sys {
                  id
                }
                contentType
                url
              }
            }
            entries {
              block {
                sys {
                  id
                }
                ... on YoutubeEmbed {
                  shareLink
                }
              }
            }
          }
        }
        coverImage {
          url
          width
          height
          title
        }
      }
    }`;
  const { data } = await contentfulQuery(query);
  return data.page as Page;
}
