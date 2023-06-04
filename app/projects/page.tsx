import { getPosts } from '@/queries/Post';
import Projects from '../../components/Projects';

export default async function projects() {
  const posts = await getPosts();

  return (
    <main>
      <Projects posts={posts} />
    </main>
  );
}
