import React, { useEffect } from 'react'
import type { NextPage, GetServerSideProps } from 'next'
import SearchBar from '../components/SearchBar'
import BlogList from '../components/BlogList'
import useBlogStore, { Post } from '../store/blogStore'

interface HomeProps {
  initialPosts: Post[];
}

function generateSlug(title: string, id: number): string {
  return (
    title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\-]/g, '')
    + '-' + id
  );
}

const Home: NextPage<HomeProps> = ({ initialPosts }) => {
  const { setPosts } = useBlogStore()

  useEffect(() => {
    setPosts(initialPosts)
  }, [initialPosts, setPosts])

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <SearchBar />
          </div>
        </div>
        
      
        <div className="mt-8">
          <BlogList />
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  let posts: Post[] = await res.json()

  
  posts = posts.map(post => ({
    ...post,
    slug: generateSlug(post.title, post.id)
  }))

  return {
    props: {
      initialPosts: posts
    }
  }
}

export default Home