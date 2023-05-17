'use client';

import Selector from '@/components/Selector';
import Viewer from '@/components/Viewer';
import { Post } from '@/types/shared';
import React, { useState } from 'react';

export default function Home({ posts }: { posts: Post[] }) {
  const [currentPost, setCurrentPost] = useState<string | undefined>(
    posts[0].slug
  );
  return (
    <div className='grid grid-cols-[1fr,3fr]'>
      <Selector posts={posts} setCurrentPost={setCurrentPost} />
      <Viewer post={posts.find((item) => item.slug === currentPost)} />
    </div>
  );
}
