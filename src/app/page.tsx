import { Post } from '../store/blogStore';
import ClientSideContent from '../components/ClientSideContent';

function generateSlug(title: string, id: number): string {
  return (
    title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\-]/g, '')
    + '-' + id
  );
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-cache' });
  let posts: Post[] = await res.json();
  posts = posts.map(post => ({
    ...post,
    slug: generateSlug(post.title, post.id)
  }));
  return posts;
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <ClientSideContent initialPosts={posts} />
      </div>
    </div>
  );
}