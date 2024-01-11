import React from 'react';
import Container from './Container';
import Section from './Section';
import Image from 'next/image';
import { Page } from '@/types/shared';
import { renderRichTextWithMedia } from '@/utils/richText';

export default function SinglePage({
  title,
  description,
  coverImage,
  children,
}: Page) {
  return (
    <Container>
      {coverImage ? (
        <Image
          className='mt-0 h-[200px] w-full object-cover md:h-[400px]'
          src={coverImage.url}
          height={coverImage.height}
          width={coverImage.width}
          alt=''
        />
      ) : null}
      <Section>
        <h1 className='my-8 font-heading text-2xl uppercase md:text-4xl lg:text-6xl'>
          {title}
        </h1>
        {description && (
          <div className='pb-20'>{renderRichTextWithMedia(description)}</div>
        )}
        {children && children}
      </Section>
    </Container>
  );
}
