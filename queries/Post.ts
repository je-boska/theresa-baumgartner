import type { Post } from '../types/shared';
import { contentfulQuery } from './Query';

export async function getPosts() {
  const query = /* GRAPHQL */ `
    query PostsQuery {
      postCollection (limit: 10) {
        items {
          title
          slug
          subtitle
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
          imagesCollection(limit: 10) {
            items {
              url
              title
              width
              height
              contentType
            }
          }
        }
      }
    }`;
  const { data } = await contentfulQuery(query);
  return data.postCollection.items as Post[];
}
