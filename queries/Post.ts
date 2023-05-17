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
          description {
            json
          }
          imagesCollection(limit: 100) {
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
