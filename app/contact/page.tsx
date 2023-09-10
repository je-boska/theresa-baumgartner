import SinglePage from '@/components/SinglePage';
import { getContactPage } from '@/queries/Contact';

export default async function contact() {
  const { title, coverImage, description } = await getContactPage();

  return (
    <SinglePage
      title={title}
      coverImage={coverImage}
      description={description}
    />
  );
}
