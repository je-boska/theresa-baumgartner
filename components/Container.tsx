'use client';

import { SidebarContext } from '@/contexts/SidebarContext';
import { ReactNode, useContext } from 'react';
import cx from 'classnames';

export default function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const { isOpen } = useContext(SidebarContext);

  return (
    <main
      className={
        'mx-auto flex w-full max-w-[1920px] justify-start ' + className
      }
    >
      <div
        className={cx('w-full transition-all duration-300', {
          'lg:w-3/4': isOpen,
        })}
      >
        {children}
      </div>
    </main>
  );
}
