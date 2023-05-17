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
    <div>
      {posts.map(({ title, subtitle, slug }) => (
        <div key={slug} onClick={() => setCurrentPost(slug)}>
          <h2 className='cursor-pointer'>
            <span className='font-bold'>{title}</span>
            <br />
            <span>{subtitle}</span>
          </h2>
        </div>
      ))}
    </div>
  );
}
