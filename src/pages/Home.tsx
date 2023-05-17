import { useEffect, useState } from 'react';
import type { Post } from '../types/shared';
import Viewer from '../components/Viewer';
import Selector from '../components/Selector';

export default function Home({ posts }: { posts: Post[] }) {
  const [currentPost, setCurrentPost] = useState<string | undefined>(
    posts[0].slug
  );

  useEffect(() => {
    if (currentPost) {
      const url = new URL(window.location.href);
      const searchParams = new URLSearchParams(url.search);
      searchParams.set('post', currentPost);
      url.search = searchParams.toString();
      window.history.pushState({}, '', url.toString());
    }
  }, [currentPost]);

  return (
    <div className='grid grid-cols-[1fr,3fr]'>
      <Selector posts={posts} setCurrentPost={setCurrentPost} />
      <Viewer post={posts.find((item) => item.slug === currentPost)} />
    </div>
  );
}
