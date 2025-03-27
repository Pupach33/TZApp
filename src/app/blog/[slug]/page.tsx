// app/blog/[slug]/page.tsx
import Link from 'next/link';
import { Post } from '../../../store/blogStore';

function extractIdFromSlug(slug: string): number {
  const parts = slug.split('-');
  return parseInt(parts[parts.length - 1], 10);
}

async function getPost(id: number): Promise<Post | null> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-cache' });
  if (!res.ok) return null;
  const post: Post = await res.json();
  return post;
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const id = extractIdFromSlug(params.slug);
  const post = await getPost(id);

  if (!post) {
    return <p>Пост не найден</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link href="/" className="text-blue-500 underline">
        &larr; Назад
      </Link>
      <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-4">Автор: Пользователь {post.userId}</p>
      <p>{post.body}</p>
    </div>
  );
}