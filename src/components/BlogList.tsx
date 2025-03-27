import React from 'react'
import Link from 'next/link'
import useBlogStore, { Post } from '../store/blogStore'

const BlogList: React.FC = () => {
  const { posts, loading, searchQuery } = useBlogStore()

  const filteredPosts = posts.filter((post: Post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.body.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (loading) {
    return <p className="text-center text-lg text-gray-500">Загрузка...</p>
  }

  return (
    // Вертикальный список карточек с отступами
    <div className="space-y-6">
      {filteredPosts.map((post: Post) => (
        <div
          key={post.id}
          className="bg-white  rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <Link href={`/blog/${post.slug}`} className="block">
            <h2 className="text-xl font-bold text-gray-800 hover:text-blue-600">
              {post.title}
            </h2>
          </Link>
          <p className="mt-2 text-gray-600">
            {post.body.substring(0, 100)}...
          </p>
        </div>
      ))}
    </div>
  )
}

export default BlogList