import { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
  return <div className='mx-auto mt-20 max-w-6xl'>{children}</div>;
}
