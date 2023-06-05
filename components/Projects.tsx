'use client';

import Viewer from '@/components/Viewer';
import { Post } from '@/types/shared';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Container from './Container';

export default function Projects({ posts }: { posts: Post[] }) {
  const [currentPost, setCurrentPost] = useState<string | undefined>(undefined);

  const search = useSearchParams();

  const postParam = search.get('current');

  useEffect(() => {
    if (postParam) {
      setCurrentPost(postParam);
    }
  }, [postParam]);

  if (!currentPost) return <Container> </Container>;

  return <Viewer post={posts.find((item) => item.slug === currentPost)} />;
}
