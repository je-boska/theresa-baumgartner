import { DateEntry, Page } from '@/types/shared';
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
      dateCollection {
        items {
          title
          date
        }
      }
    }`;
  const { data } = await contentfulQuery(query);

  const sortedDates: DateEntry[] = data.dateCollection.items.sort(
    (a: DateEntry, b: DateEntry) => (a.date < b.date ? 1 : -1)
  );

  return {
    page: data.page as Page,
    dates: sortedDates as DateEntry[],
  };
}
