import type { Post } from '../types/shared';

export default function Viewer({ post }: { post?: Post }) {
  if (!post) return <div></div>;

  const { title, subtitle, slug, description, imagesCollection } = post;

  return (
    <div className='mr-20'>
      <h1>{title}</h1>
      <h1>{subtitle}</h1>
      <div className='w-full'>
        {imagesCollection.items.map(({ url, title }, idx) => (
          <img className='w-full' src={url} alt={title} key={idx} />
        ))}
      </div>
    </div>
  );
}
