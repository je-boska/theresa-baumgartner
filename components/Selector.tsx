'use client';

import { useRouter } from 'next/navigation';
import type { Post } from '../types/shared';
import cx from 'classnames';
import { useContext } from 'react';
import Nav from './Nav';
import ArrowLeft from '@/icons/ArrowLeft';
import ArrowRight from '@/icons/ArrowRight';
import { SidebarContext } from '@/app/contexts/SidebarContext';

export default function Selector({ posts }: { posts: Post[] }) {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const router = useRouter();

  function setPostQuery(post: string) {
    router.push(`/projects?current=${post}`);
  }

  return (
    <div
      className={cx(
        'fixed top-0 z-10 h-full w-full border-r-2 border-dashed border-black bg-white transition-all duration-300 lg:w-1/4',
        {
          'left-0': isOpen,
          '-left-full lg:-left-1/4': !isOpen,
        }
      )}
    >
      <div className='relative w-full'>
        <div className='relative'>
          <Nav />
          <div
            className={cx(
              'group absolute bottom-0 z-20 flex w-20 cursor-pointer justify-center border-2 border-dashed border-black bg-white py-2 text-2xl',
              {
                'right-0 border-b-0 border-r-0': isOpen,
                '-right-20 border-l-0': !isOpen,
              }
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={cx('transition-translate duration-300', {
                'group-hover:translate-x-2': !isOpen,
                'group-hover:-translate-x-2': isOpen,
              })}
            >
              {!isOpen ? <ArrowRight /> : <ArrowLeft />}
            </div>
          </div>
        </div>
        <nav className='m-4'>
          {posts.map(({ title, subtitle, slug }) => (
            <div
              key={slug}
              className='mb-2'
              onClick={() => {
                setPostQuery(slug);
                if (window.innerWidth < 1024) {
                  setIsOpen(false);
                }
              }}
            >
              <h2 className='cursor-pointer'>
                <span>{title}</span>
                <br />
                <span className='font-bold'>{subtitle}</span>
              </h2>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
