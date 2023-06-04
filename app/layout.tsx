import { getPosts } from '@/queries/Post';
import './globals.css';
import { Inter } from 'next/font/google';
import Selector from '@/components/Selector';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Theresa Baumgartner',
  description: 'Berlin based visual artist',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const posts = await getPosts();

  return (
    <html lang='en'>
      <body className={inter.className}>
        <Selector posts={posts} />
        {children}
      </body>
    </html>
  );
}
