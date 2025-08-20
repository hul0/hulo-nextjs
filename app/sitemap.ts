import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hulo.dev"

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/skills`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/socials`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/exploiting-buffer-overflows-2024`,
      lastModified: new Date("2024-01-15"),
      changeFrequency: "never",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/api-security-checklist`,
      lastModified: new Date("2024-01-10"),
      changeFrequency: "never",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/osint-techniques-2024`,
      lastModified: new Date("2024-01-05"),
      changeFrequency: "never",
      priority: 0.6,
    },
  ]
}
