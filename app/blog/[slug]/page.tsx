import { getPost } from '@/app/lib/sanity'
import { PortableText } from '@portabletext/react'
import Navbar from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link'

import { notFound } from 'next/navigation'
import Contact from '@/app/components/Contact';

export const revalidate = 10

type SlugParam={
  params: { 
    slug: string 
  }
   
  
}


export async function generateMetadata({ params }: SlugParam) {
 
  const post = await getPost(params.slug)
  
  if (!post) return {}

  return {
    title: post.title,
    description: post.body?.[0]?.children?.[0]?.text?.slice(0, 150) || '',
    openGraph: {
      title: post.title,
      images: [post.mainImage?.asset?.url],
    },
  }
}


export default async function BlogPost({ params }: SlugParam) {
 
  const post = await getPost(params.slug)

  if (!post) return notFound()
    const formattedDate = new Date(post.publishedAt).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
  return (
    <>
    <Navbar />
    
      <div className="bg-gradient-to-br py-50 px-6 from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 min-h-screen">
     
        <article className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center text-neutral-800 dark:text-neutral-100">
          
          <div>
            
            <h1 className="text-4xl font-bold mb-2 ">{post.title}</h1>
            <p className="text-sm text-gray-600 mb-4">
              Publié le {formattedDate} par {post.author}
            </p>
            {post.mainImage?.asset?.url && (
              <div className="mb-8">
                <img
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  width={900}
                  height={500}
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            )}
          </div>
          <div className="prose lg:prose-lg prose-neutral py-10 dark:prose-invert mx-auto">
            <PortableText value={post.body} />
            <Link
              href="/#blog"
              className="inline-block mt-8 text-blue-600 hover:underline font-medium"
            >
              ← Retour aux articles
            </Link>
          </div>
        </article>
      </div>
      <Contact/>
      <Footer/>
    </>
  )
}
