'use client';

import cx from 'classnames';
import { useContext } from 'react';
import { SidebarContext } from '@/contexts/SidebarContext';
import ArrowRight from '@/icons/ArrowRight';
import ArrowLeft from '@/icons/ArrowLeft';

export default function Switch() {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <div
      className='transition-color group fixed right-0 top-0 z-20 flex w-14 cursor-pointer justify-center border-b-2 border-l-2 border-dotted border-black bg-[rgba(255,255,255,0.3)] py-2 text-2xl duration-300 hover:bg-white md:w-20'
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={cx('transition-translate duration-300', {
          'md:group-hover:-translate-x-1': !isOpen,
          'md:group-hover:translate-x-1': isOpen,
        })}
      >
        {isOpen ? (
          <ArrowRight className='h-5 md:h-auto' />
        ) : (
          <ArrowLeft className='h-5 md:h-auto' />
        )}
      </div>
    </div>
  );
}
