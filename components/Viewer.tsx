import Image from 'next/image';
import type { Post } from '../types/shared';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export default function Viewer({ post }: { post?: Post }) {
  if (!post) return <div></div>;

  const { title, subtitle, slug, description, imagesCollection } = post;

  return (
    <div className='col-start-2 mr-20 mt-20 w-full'>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
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
        dangerouslySetInnerHTML={{
          __html: documentToHtmlString(description.json),
        }}
      />
    </div>
  );
}
