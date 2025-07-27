export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  heroTitle,
  heroSubtitle,
  heroImage {
    asset->{
      url
    }
  }
}`


export const teamQuery = `
*[_type == "teamMember"]{
  _id,
  name,
  role,
  description,
  "imageUrl": image.asset->url
}
`;