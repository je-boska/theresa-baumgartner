import { getPosts } from '@/queries/Post';
import Container from '@/components/Container';

export default async function page() {
  const posts = await getPosts();

  return (
    <main>
      <Container>
        <h1 className='mb-2 text-2xl font-medium uppercase'>
          Theresa Baumgartner
        </h1>
        <p>Berlin based visual artist</p>
      </Container>
    </main>
  );
}
