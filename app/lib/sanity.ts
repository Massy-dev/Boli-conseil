// lib/sanity.js
import { createClient } from '@sanity/client'

import { groq } from 'next-sanity'


export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, // ou la date de ton schéma Sanity
  useCdn: false,
})

export async function getHeroData () {
  return client.fetch(
    groq`*[_type == "siteSettings"][0]{
  heroTitle,
  heroSubtitle,
  boutonTexte,
  heroImage {
    asset->{
      url
    }
  }
}`
  )
}

export async function getTeamMembers() {
  const teamQuery = `
  *[_type == "teamMember"][0]{
    title,
    subtitle,
    teamMembers[]{
      name,
      role,
      description,
      location,
      languages,
      image{
        asset->{url}
      }
    }
    
  }
  `;
  return await client.fetch(teamQuery);
}


export async function getAbout() {
  const getAboutQuery = `*[_type == "about"][0]{
    title,
    description,
    "imageUrl": image.asset->url
  }`;

  return await client.fetch(getAboutQuery)
}

export async function getExpertises() {
  const getExpertisesQuery = `*[_type == "service"]{
    _id,
    title,
    slug,
    description,
    "imageUrl": image.asset->url
  }`;

  return await client.fetch(getExpertisesQuery)
}

export async function getTestimonials() {

const getTestimonialsQuery = `*[_type == "testimonial"] | order(_createdAt desc){
  _id,
  author,
  content,
  position,
  "imageUrl": image.asset->url
}`;

return await client.fetch(getTestimonialsQuery)
}


export async function getMenu() {
  const menuQuery = `*[_type == "menu"][0]{
  title,
  links[]{
    label,
    href
  }
  
  }`;
  return await client.fetch(menuQuery)
}


export async function getPricing() {
  
  const pricingQuery = `*[_type == "pricing"][0]{
    title,
    subtitle,
    plans[]{
      name,
      price,
      features,
      buttonLabel,
      buttonLink,
      popular,
      whatsappMessage,
      description
    }
  }`

  return await client.fetch(pricingQuery)
}


export async function getAllPosts() {

  const getPostsQuery = `*[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    author,
    mainImage{
      asset->{url}
    }
  }`;
  
  return await client.fetch(getPostsQuery, {}, { next: { revalidate: 10 } })
}


export async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    mainImage{ asset->{url} },
    publishedAt,
    author
  }`

  return await client.fetch(query, { slug })
}