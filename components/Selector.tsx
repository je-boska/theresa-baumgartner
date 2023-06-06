'use client';

import { usePathname, useRouter } from 'next/navigation';
import type { Post } from '../types/shared';
import cx from 'classnames';
import { useContext, useEffect } from 'react';
import Nav from './Nav';
import ArrowLeft from '@/icons/ArrowLeft';
import ArrowRight from '@/icons/ArrowRight';
import { SidebarContext } from '@/contexts/SidebarContext';

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
        'fixed top-0 z-10 h-full w-full border-l-2 border-dashed border-black bg-white transition-all duration-300 lg:w-1/4',
        {
          'right-0': isOpen,
          '-right-full lg:-right-1/4': !isOpen,
        }
      )}
    >
      <div className='relative w-full'>
        <div className='relative'>
          <Nav />
          <div
            className={cx(
              'group absolute bottom-0 z-20 flex w-20 cursor-pointer justify-center border-2 border-dashed border-black py-2 text-2xl hover:bg-white',
              {
                'left-0 border-b-0 border-l-0 bg-white': isOpen,
                'transition-color -left-20 border-r-0 bg-[rgba(255,255,255,0.3)] duration-300':
                  !isOpen,
              }
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={cx('transition-translate duration-300', {
                'group-hover:-translate-x-2': !isOpen,
                'group-hover:translate-x-2': isOpen,
              })}
            >
              {isOpen ? <ArrowRight /> : <ArrowLeft />}
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
