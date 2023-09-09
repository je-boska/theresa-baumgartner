import SinglePage from '@/components/SinglePage';
import { getDatesPage } from '@/queries/Dates';

export default async function dates() {
  const { title, description } = await getDatesPage();

  return <SinglePage title={title} description={description} />;
}
