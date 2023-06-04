'use client';

import Viewer from '@/components/Viewer';
import { Post } from '@/types/shared';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Home({ posts }: { posts: Post[] }) {
  const [currentPost, setCurrentPost] = useState<string | undefined>(
    posts[0].slug
  );

  const search = useSearchParams();

  const postParam = search.get('post');

  useEffect(() => {
    if (postParam) {
      setCurrentPost(postParam);
    }
  }, [postParam]);

  return (
    <div className='grid grid-cols-[1fr,3fr,1fr]'>
      <Viewer post={posts.find((item) => item.slug === currentPost)} />
    </div>
  );
}
