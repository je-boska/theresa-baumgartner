import Image from 'next/image';
import type { Post } from '../types/shared';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export default function Viewer({ post }: { post?: Post }) {
  if (!post) return <div></div>;

  const { title, subtitle, description, imagesCollection } = post;

  return (
    <div>
      <div className='mx-4 mb-4'>
        <h1>{title}</h1>
        <h2 className='mb-2 text-2xl font-medium uppercase'>{subtitle}</h2>
      </div>
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
      <div
        className='mx-auto max-w-6xl'
        dangerouslySetInnerHTML={{
          __html: documentToHtmlString(description.json),
        }}
      />
    </div>
  );
}
