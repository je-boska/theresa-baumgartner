import Image from 'next/image';
import type { Post } from '../types/shared';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import Section from './Section';

export default function Viewer({ post }: { post?: Post }) {
  if (!post) return <div></div>;

  const { title, subtitle, description, imagesCollection } = post;

  return (
    <div className='relative'>
      <Section>
        <h1 className='uppercase md:text-lg'>{title}</h1>
        <h2 className='mb-2 text-2xl uppercase md:text-3xl lg:text-4xl'>
          {subtitle}
        </h2>
      </Section>
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
      <Section className='mt-4'>
        <div
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(description.json),
          }}
        />
      </Section>
    </div>
  );
}
