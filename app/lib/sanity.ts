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
  heroImage {
    asset->{
      url
    }
  }
}`
  )
}