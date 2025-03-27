'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import useBlogStore, { Post } from '../store/blogStore';

const BlogList: React.FC = () => {
  const { posts, loading, searchQuery } = useBlogStore();
  
  // Изначально показываем 10 постов
  const [visibleCount, setVisibleCount] = useState(10);

  // Фильтруем посты по запросу
  const filteredPosts = posts.filter((post: Post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <p className="text-center text-lg text-gray-500">Загрузка...</p>;
  }

  if (filteredPosts.length === 0) {
    return <p className="text-center text-lg text-gray-500">Ничего не найдено</p>;
  }

  // Берём из фильтрованного массива только часть, которая сейчас «видна»
  const visiblePosts = filteredPosts.slice(0, visibleCount);

  return (
    <div>
      <div className="space-y-6">
        {visiblePosts.map((post: Post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
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

      {visibleCount < filteredPosts.length && (
        <div className="text-center mt-6">
          <button
            onClick={() => setVisibleCount(prev => prev + 10)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Показать ещё
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogList;