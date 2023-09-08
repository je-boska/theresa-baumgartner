'use client';

import { usePathname, useRouter } from 'next/navigation';
import type { Post } from '../types/shared';
import cx from 'classnames';
import { useContext, useEffect } from 'react';
import Nav from './Nav';
import ArrowLeft from '@/icons/ArrowLeft';
import ArrowRight from '@/icons/ArrowRight';
import { SidebarContext } from '@/contexts/SidebarContext';
import Image from 'next/image';

export default function Selector({ posts }: { posts: Post[] }) {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const router = useRouter();
  const pathname = usePathname();

  function setPostQuery(post: string) {
    router.push(`/projects?current=${post}`);
  }

  useEffect(() => {
    if (window.innerWidth < 1024 && pathname !== '/projects') {
      setIsOpen(false);
    }
  }, [pathname, setIsOpen]);

  return (
    <div
      className={cx(
        'fixed bottom-0 top-0 z-10 w-full overflow-y-scroll border-dotted border-black bg-white transition-all duration-300 lg:w-1/4 lg:border-l-2',
        {
          'right-0': isOpen,
          '-right-full lg:-right-1/4': !isOpen,
        }
      )}
    >
      <div className='relative w-full'>
        <Nav />
        <nav>
          {posts.map(({ title, subtitle, slug, imagesCollection }) => (
            <div
              key={slug}
              className='cursor-pointer'
              onClick={() => {
                setPostQuery(slug);
                if (window.innerWidth < 1024) {
                  setIsOpen(false);
                }
              }}
            >
              <Image
                className='w-full lg:hidden'
                src={imagesCollection.items[0].url}
                alt={title}
                height={imagesCollection.items[0].height}
                width={imagesCollection.items[0].width}
              />
              <div className='py-2'>
                <h2 className='px-4 text-lg uppercase md:text-xl'>
                  <span>{subtitle}</span>
                </h2>
                <h2 className='px-4 text-lg uppercase md:text-xl'>
                  <span>{title}</span>
                </h2>
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
