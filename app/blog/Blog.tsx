'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

type TypePost = {
  _id: string
  title: string
  excerpt: string
  author: string
  publishedAt: string
  slug:{
    current:string
  };
  
  mainImage: {
    asset: {
      url: string;
    };
  };
}



export default function Blog({ posts }: { posts: TypePost[] }) {
  
  

  return (
    <section className="py-16 bg-gray-50" id="blog">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-black mb-12">Nos articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <motion.div 
              key={post._id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}>
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
             
                <h2 className="text-xl font-semibold text-black mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                
                
                <Link href={`/blog/${post.slug.current}`} className="text-blue-600 font-semibold hover:underline">
                  Lire plus →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
