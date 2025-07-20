// lib/sanity.js
import { createClient } from '@sanity/client'


export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, // ou la date de ton schéma Sanity
  useCdn: false,
})

export async function getServerSideProps () {
  const query = `*[_type == "siteSettings"][0]{
  heroTitle,
  heroSubtitle,
  heroImage {
    asset->{
      url
    }
  }
}`
  const data = await client.fetch(query)
  return {props: { data }}
}