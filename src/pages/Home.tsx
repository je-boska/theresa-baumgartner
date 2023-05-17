import React, { useEffect, useState } from 'react';
import type { Post } from '../types/shared';
import Viewer from '../components/Viewer';
import Selector from '../components/Selector';

export default function Home({ posts }: { posts: Post[] }) {
  const [currentPost, setCurrentPost] = useState<string | undefined>(undefined);

  useEffect(() => {
    console.log(currentPost);
  }, [currentPost]);

  return (
    <div>
      <Viewer post={posts.find((item) => item.slug === currentPost)} />
      <Selector posts={posts} setCurrentPost={setCurrentPost} />
    </div>
  );
}
