import { getPosts } from '@/queries/Post';
import Projects from '../../components/Projects';
import Container from '@/components/Container';
import { Suspense } from 'react';

export default async function projects() {
  const posts = await getPosts();

  return (
    <Container>
      <Suspense>
        <Projects posts={posts} />
      </Suspense>
    </Container>
  );
}
