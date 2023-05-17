import type { Post } from '../types/shared';

export default function Viewer({ post }: { post?: Post }) {
  if (!post) return <div>Click on a post</div>;
  return <div>{post.title}</div>;
}
