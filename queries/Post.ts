import type { Post } from '../types/shared';
import { contentfulQuery } from './Query';

export async function getPosts() {
  const query = /* GRAPHQL */ `
    query PostsQuery {
      postCollection (limit: 100) {
        items {
          title
          slug
          subtitle
          date
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
                  width
                  height
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
                  ... on VimeoEmbed {
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

  const sortedPosts: Post[] = data.postCollection.items.sort(
    (a: Post, b: Post) => (a.date < b.date ? 1 : -1)
  );

  return sortedPosts;
}
