'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import useBlogStore, { Post } from '../store/blogStore';

const BlogList: React.FC = () => {
  const { posts, loading, searchQuery } = useBlogStore();

  const filteredPosts = posts.filter((post: Post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / pageSize);
  const paginatedPosts = filteredPosts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  if (loading) {
    return <p className="text-center text-lg text-gray-500">Загрузка...</p>;
  }

  if (filteredPosts.length === 0) {
    return <p className="text-center text-lg text-gray-500">Ничего не найдено</p>;
  }

  return (
    <div>
      <div className="space-y-6">
        {paginatedPosts.map((post: Post) => (
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

      <div className="flex justify-center mt-6 space-x-4">
        <button 
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Предыдущая
        </button>
        <span className="px-4 py-2">
          {currentPage} / {totalPages}
        </span>
        <button 
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Следующая
        </button>
      </div>
    </div>
  );
};

export default BlogList;