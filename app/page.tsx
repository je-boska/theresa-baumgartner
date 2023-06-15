import SinglePage from '@/components/SinglePage';
import { getHomePage } from '@/queries/Home';

export default async function page() {
  const { title, description, coverImage } = await getHomePage();

  return (
    <SinglePage
      title={title}
      description={description}
      coverImage={coverImage}
    />
  );
}
