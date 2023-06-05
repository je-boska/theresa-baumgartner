import { getPosts } from '@/queries/Post';
import Projects from '../../components/Projects';
import Container from '@/components/Container';

export default async function projects() {
  const posts = await getPosts();

  return (
    <Container>
      <Projects posts={posts} />
    </Container>
  );
}
