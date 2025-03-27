'use client';

import React, { useEffect } from 'react';
import SearchBar from './SearchBar';
import BlogList from './BlogList';
import useBlogStore from '../store/blogStore';
import { Post } from '../store/blogStore';

interface ClientSideContentProps {
  initialPosts: Post[];
}

const ClientSideContent: React.FC<ClientSideContentProps> = ({ initialPosts }) => {
  const { setPosts } = useBlogStore();

  useEffect(() => {
    setPosts(initialPosts);
  }, [initialPosts, setPosts]);

  return (
    <>
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <SearchBar />
        </div>
      </div>
      <div className="mt-8">
        <BlogList />
      </div>
    </>
  );
};

export default ClientSideContent;