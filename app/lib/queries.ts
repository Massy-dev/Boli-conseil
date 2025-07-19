export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  heroTitle,
  heroSubtitle,
  heroImage {
    asset->{
      url
    }
  }
}`
