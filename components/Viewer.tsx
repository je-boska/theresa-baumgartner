import Image from 'next/image';
import cx from 'classnames';
import type { Post } from '../types/shared';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { useContext } from 'react';
import { SidebarContext } from '@/app/contexts/SidebarContext';

export default function Viewer({ post }: { post?: Post }) {
  const { isOpen } = useContext(SidebarContext);

  if (!post) return <div></div>;

  const { title, subtitle, slug, description, imagesCollection } = post;

  return (
    <div className='flex justify-end'>
      <div
        className={cx('mt-20 transition-all duration-300', {
          'w-3/4': isOpen,
          'w-full': !isOpen,
        })}
      >
        <div className='text-right'>
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
    </div>
  );
}
