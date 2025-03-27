import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { Post } from '../../store/blogStore'

interface BlogPostProps {
  post: Post | null;
}

function extractIdFromSlug(slug: string): number {
  const parts = slug.split('-')
  return parseInt(parts[parts.length - 1], 10)
}

const BlogPost: NextPage<BlogPostProps> = ({ post }) => {
  if (!post) {
    return <div>Пост не найден</div>
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link href="/">
        &larr; Назад
      </Link>
      <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-4">Автор: Пользователь {post.userId}</p>
      <p>{post.body}</p>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string }
  const id = extractIdFromSlug(slug)
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  
  if (res.status !== 200) {
    return { props: { post: null } }
  }
  
  const post: Post = await res.json()
  post.slug = slug

  return {
    props: {
      post
    }
  }
}

export default BlogPost