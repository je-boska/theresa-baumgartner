import Image from 'next/image';
import Section from './Section';
import type { Post } from '../types/shared';
import { renderRichTextWithMedia } from '@/utils/richText';

export default function Viewer({ post }: { post?: Post }) {
  if (!post) return <div></div>;

  const { title, subtitle, description, imagesCollection } = post;

  return (
    <div className='relative'>
      <Section className='my-8'>
        <h1 className='text-lg uppercase md:text-xl'>{title}</h1>
        <h2 className='mb-2 text-3xl uppercase md:text-4xl lg:text-5xl'>
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
      <Section className='mb-20 mt-4 lg:text-lg'>
        <div>{renderRichTextWithMedia(description)}</div>
      </Section>
    </div>
  );
}
