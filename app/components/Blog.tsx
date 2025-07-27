'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

type Post = {
  _id: string
  imageUrl: string
  title: string
  excerpt: string
  author: string
  publishedAt: string
}

interface BlogProps {
  posts: Post[]
}

export default function Blog({ posts }: BlogProps) {
  return (
    <section className="py-16 bg-gray-50" id="blog">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-black mb-12">Notre Blog</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: any, i: number) => (
            <motion.div
              key={post._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="text-sm text-gray-500">
                  Par {post.author} —{' '}
                  {new Date(post.publishedAt).toLocaleDateString('fr-FR')}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
