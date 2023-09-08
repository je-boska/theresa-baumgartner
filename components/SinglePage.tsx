import React from 'react';
import Container from './Container';
import Section from './Section';
import Image from 'next/image';
import { Page } from '@/types/shared';
import { renderRichTextWithMedia } from '@/utils/richText';

export default function SinglePage({ title, description, coverImage }: Page) {
  return (
    <Container>
      {coverImage ? (
        <Image
          className='mt-0 h-[400px] w-full object-cover'
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
        <div>{renderRichTextWithMedia(description)}</div>
      </Section>
    </Container>
  );
}
