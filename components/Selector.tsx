import { usePathname, useRouter } from 'next/navigation';
import type { Post } from '../types/shared';

export default function Selector({ posts }: { posts: Post[] }) {
  const router = useRouter();
  const pathname = usePathname();

  function setPostQuery(post: string) {
    router.push(`${pathname}${`?post=${post}`}`);
  }
  return (
    <div>
      {posts.map(({ title, subtitle, slug }) => (
        <div
          key={slug}
          onClick={() => {
            setPostQuery(slug);
          }}
        >
          <h2 className='flashing-link cursor-pointer'>
            <span className='font-bold'>{title}</span>
            <br />
            <span>{subtitle}</span>
          </h2>
        </div>
      ))}
    </div>
  );
}
