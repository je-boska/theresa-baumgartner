import React from 'react';
import Container from './Container';
import Section from './Section';
import Image from 'next/image';
import { Page } from '@/types/shared';
import { renderRichTextWithMedia } from '@/utils/richText';

export default function SinglePage({ title, description, coverImage }: Page) {
  return (
    <Container>
      <Section>
        <h1 className='mb-8 font-tv text-3xl uppercase md:text-4xl lg:text-5xl'>
          {title}
        </h1>
        <div>{renderRichTextWithMedia(description)}</div>
        {coverImage ? (
          <Image
            src={coverImage.url}
            height={coverImage.height}
            width={coverImage.width}
            alt=''
          />
        ) : null}
      </Section>
    </Container>
  );
}
