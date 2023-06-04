import Image from 'next/image';
import type { Post } from '../types/shared';

export default function Viewer({ post }: { post?: Post }) {
  if (!post) return <div></div>;

  const { title, subtitle, slug, description, imagesCollection } = post;

  return (
    <div className='mr-20 col-start-2 w-full'>
      <h1>{title}</h1>
      <h1>{subtitle}</h1>
      <div className='w-full'>
        {imagesCollection.items.map(({ url, title, height, width }, idx) => (
          <Image
            className='w-full'
            src={url}
            alt={title}
            key={idx}
            height={height}
            width={width}
          />
        ))}
      </div>
    </div>
  );
}
