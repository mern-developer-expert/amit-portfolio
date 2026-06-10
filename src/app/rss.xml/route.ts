import { NextResponse } from "next/server";
import { client } from "@/lib/sanity";
import { groq } from "next-sanity";

const BASE_URL = "https://www.amitdevjourney.com";
const FEED_TITLE = "The Journal | Amit Kumar Portfolio";
const FEED_DESCRIPTION = "Deep-dives into MERN stack development, high-performance web engineering, and digital innovation.";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return new NextResponse("", {
      status: 200,
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
      },
    });
  }

  const posts = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      "updatedAt": _updatedAt
    }`
  );

  const lastBuildDate = posts?.[0]?.updatedAt || posts?.[0]?.publishedAt || new Date().toISOString();

  const items = (posts || [])
    .map((post: any) => {
      const url = `${BASE_URL}/blogs/${post.slug}`;
      const pubDate = post.publishedAt || post.updatedAt || new Date().toISOString();
      const description = post.excerpt ? escapeXml(post.excerpt) : "";

      return [
        "<item>",
        `<title>${escapeXml(post.title)}</title>`,
        `<link>${url}</link>`,
        `<guid isPermaLink=\"true\">${url}</guid>`,
        `<pubDate>${new Date(pubDate).toUTCString()}</pubDate>`,
        description ? `<description>${description}</description>` : "",
        "</item>",
      ].join("");
    })
    .join("");

  const xml = [
    "<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
    "<rss version=\"2.0\">",
    "<channel>",
    `<title>${escapeXml(FEED_TITLE)}</title>`,
    `<link>${BASE_URL}/blogs</link>`,
    `<description>${escapeXml(FEED_DESCRIPTION)}</description>`,
    `<lastBuildDate>${new Date(lastBuildDate).toUTCString()}</lastBuildDate>`,
    items,
    "</channel>",
    "</rss>",
  ].join("");

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
