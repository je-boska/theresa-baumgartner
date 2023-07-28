import { Page } from '@/types/shared';
import { contentfulQuery } from './Query';

export async function getHomePage() {
  const query = /* GRAPHQL */ `
    query HomeQuery {
      page (id: "2Tj4SvQiQQ106swMZLMVU") {
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
