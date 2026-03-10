import { getClient, urlFor } from "@/lib/sanity";
import { postBySlugQuery, postSlugsQuery } from "@/lib/sanity.queries";
import {
  generateBlogPostSchema,
  generateBreadcrumbSchema,
} from "@/lib/metadata/json-ld";
import { notFound } from "next/navigation";
import BlogPostContent from "@/components/blogs/BlogPostContent";
import type { Metadata, ResolvingMetadata } from "next";
import { draftMode } from "next/headers";

export const revalidate = 1500; // revalidate every 15 minutes

export async function generateStaticParams() {
  const slugs = await getClient().fetch(postSlugsQuery);
  return slugs.map((slug: string) => ({ slug }));
}

async function getPost(slug: string, isDraft: boolean = false) {
  const client = getClient(
    isDraft ? process.env.VIEWER_TOKEN_SANITY : undefined,
  );
  return await client.fetch(postBySlugQuery, { slug });
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const isDraft = (await draftMode()).isEnabled;
  const post = await getPost(slug, isDraft);

  if (!post) return { title: "Post Not Found" };
  const ogImage = post.mainImage
    ? urlFor(post.mainImage)
      .width(1200)
      .height(630)
      .fit("crop")
      .format("jpg")
      .url()
    : "https://www.amitdevjourney.xyz/og-image.jpg";

  const categories = Array.isArray(post.categories)
    ? post.categories
    : post.categories
      ? [post.categories]
      : ["General"];
  const dynamicKeywords = Array.isArray(post.keywords) ? post.keywords : [];

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      ...dynamicKeywords,
      ...categories,
      "MERN Developer Expert",
      "MERN Developer Amit",
      "MERN stack",
      "Amit Kumar",
      "Developer",
      "Blog",
    ],
    alternates: {
      canonical: `https://www.amitdevjourney.xyz/blogs/${slug}`,
    },
    authors: [{ name: "Amit Kumar" }],
    publisher: "Amit Kumar",
    robots: {
      index: !isDraft,
      follow: !isDraft,
      googleBot: {
        index: !isDraft,
        follow: !isDraft,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.amitdevjourney.xyz/blogs/${slug}`,
      siteName: "Amit Kumar Portfolio",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Amit Kumar"],
      tags: categories,
    },
    twitter: {
      card: "summary_large_image",
      site: "@Amitsin40190332",
      creator: "@Amitsin40190332",
      title: post.title,
      description:
        post.excerpt?.length > 160
          ? post.excerpt.substring(0, 157) + "..."
          : post.excerpt,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const isDraft = (await draftMode()).isEnabled;
  const post = await getPost(slug, isDraft);

  if (!post) {
    notFound();
  }

  const currentUrl = `https://www.amitdevjourney.xyz/blogs/${slug}`;
  const ogImage = post.mainImage
    ? urlFor(post.mainImage)
      .width(1200)
      .height(630)
      .fit("crop")
      .format("jpg")
      .url()
    : "https://www.amitdevjourney.xyz/og-image.jpg";

  return (
    <>
      {isDraft && (
        <div className="bg-yellow-500 text-black px-4 py-1 text-center font-bold text-sm fixed top-0 w-full z-[100]">
          Preview Mode Active &nbsp;
          <a href="/api/disable-draft" className="underline hover:no-underline">
            Exit Preview
          </a>
        </div>
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBlogPostSchema(post, ogImage)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "https://www.amitdevjourney.xyz/" },
              { name: "Blogs", url: "https://www.amitdevjourney.xyz/blogs" },
              { name: post.title, url: currentUrl },
            ]),
          ),
        }}
      />
      <BlogPostContent post={post} currentUrl={currentUrl} />
    </>
  );
}
