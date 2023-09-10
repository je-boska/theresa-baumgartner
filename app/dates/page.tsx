import SinglePage from '@/components/SinglePage';
import { getDatesPage } from '@/queries/Dates';

export default async function dates() {
  const { title, coverImage, description } = await getDatesPage();

  return (
    <SinglePage
      title={title}
      coverImage={coverImage}
      description={description}
    />
  );
}
