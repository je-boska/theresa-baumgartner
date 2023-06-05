'use client';

import Container from '@/components/Container';
import { SidebarContext } from './contexts/SidebarContext';

export default async function page() {
  return (
    <SidebarContext.Provider value={true}>
      <Container>
        <h1 className='mb-2 text-2xl font-medium uppercase'>
          Theresa Baumgartner
        </h1>
        <p>Berlin based visual artist</p>
      </Container>
    </SidebarContext.Provider>
  );
}
