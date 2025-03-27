import { Post } from '../store/blogStore';

export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error('Ошибка при загрузке постов');
  }

  const posts: Post[] = await res.json();
  posts.forEach((post) => {
    post.slug = post.title.toLowerCase().replace(/\s+/g, '-') + '-' + post.id;
  });
  return posts;
}

export async function fetchPost(id: number): Promise<Post | null> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-cache',
  });
  if (!res.ok) return null;
  return res.json();
}