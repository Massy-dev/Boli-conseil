// lib/sanity.js
import { createClient } from '@sanity/client'
import { siteSettingsQuery } from './queries'

export const client = createClient({
  projectId: 'xz8pdv5f',
  dataset: 'production',
  apiVersion: "2023-01-01", // ou la date de ton schéma Sanity
  useCdn: false,
})

export async function getSiteSettings() {
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
  return data
}