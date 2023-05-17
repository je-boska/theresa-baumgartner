import type { Dispatch } from 'react';
import type { Post } from '../types/shared';

export default function Selector({
  posts,
  setCurrentPost,
}: {
  posts: Post[];
  setCurrentPost: Dispatch<React.SetStateAction<string | undefined>>;
}) {
  return (
    <>
      {posts.map(({ title, slug }) => (
        <div onClick={() => setCurrentPost(slug)}>{title}</div>
      ))}
    </>
  );
}
