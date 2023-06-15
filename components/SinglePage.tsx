import React from 'react';
import Container from './Container';
import Section from './Section';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import Image from 'next/image';
import { Page } from '@/types/shared';

export default function SinglePage({ title, description, coverImage }: Page) {
  return (
    <Container className='m-4'>
      <Section>
        <h1 className='font-title mb-2 text-2xl uppercase md:text-3xl lg:text-4xl'>
          {title}
        </h1>
        <div
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(description.json),
          }}
        />
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
