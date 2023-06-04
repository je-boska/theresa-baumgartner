'use client';

import { usePathname, useRouter } from 'next/navigation';
import type { Post } from '../types/shared';
import cx from 'classnames';
import { useState } from 'react';
import Nav from './Nav';

export default function Selector({ posts }: { posts: Post[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  function setPostQuery(post: string) {
    console.log(pathname);
    router.push(`/${`?post=${post}`}`);
  }

  return (
    <div
      className={cx(
        'fixed top-0 z-10 h-full w-full border-r-2 border-black bg-white transition-all duration-500 lg:w-1/4',
        {
          'left-0': isOpen,
          '-left-full lg:-left-1/4': !isOpen,
        }
      )}
    >
      <Nav />
      <div className='relative w-full'>
        <div
          className={cx(
            'flashing-link absolute z-20 flex w-20 cursor-pointer justify-center border-2 border-black text-2xl',
            {
              'right-0 border-r-0': isOpen,
              '-right-20': !isOpen,
            }
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? '->' : '<-'}
        </div>
        <nav className='m-4 pt-20'>
          {posts.map(({ title, subtitle, slug }) => (
            <div
              key={slug}
              onClick={() => {
                setPostQuery(slug);
                setIsOpen(false);
              }}
            >
              <h2 className='flashing-link cursor-pointer font-bold'>
                <span>{title}</span>
                <br />
                <span>{subtitle}</span>
              </h2>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
