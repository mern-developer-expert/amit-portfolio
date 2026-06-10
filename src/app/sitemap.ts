import { MetadataRoute } from "next";
import { client } from "@/lib/sanity";
import { groq } from "next-sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.amitdevjourney.com";

  let blogEntries: MetadataRoute.Sitemap = [];
  
  // Only attempt to fetch blogs if Sanity is configured
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    try {
      // Fetch all post slugs from Sanity
      const posts = await client.fetch(groq`*[_type == "post"] {
        "slug": slug.current,
        "updatedAt": _updatedAt,
        publishedAt
      }`);

      blogEntries = posts.map((post: any) => ({
        url: `${baseUrl}/blogs/${post.slug}`,
        lastModified: new Date(post.updatedAt || post.publishedAt || new Date()),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }));
    } catch (error) {
      console.error("Sitemap: Failed to fetch blog posts from Sanity", error);
    }
  }

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/best-portfolio`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs/best-portfolio-example`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  return [...staticEntries, ...blogEntries];
}
