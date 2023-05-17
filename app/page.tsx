import { getPosts } from '@/queries/Post';
import Home from '../components/Home';

export default async function page() {
  const posts = await getPosts();

  return (
    <main>
      <Home posts={posts} />
    </main>
  );
}
