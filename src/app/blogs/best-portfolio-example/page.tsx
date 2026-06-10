import type { Metadata } from "next";
import Link from "next/link";
import {
  generateBlogPostSchema,
  generateBreadcrumbSchema,
} from "@/lib/metadata/json-ld";

const BASE_URL = "https://www.amitdevjourney.com";
const OG_IMAGE = `${BASE_URL}/og-image.jpg`;

export const metadata: Metadata = {
  title: "Best Portfolio Example: Structure, Proof, and Why It Works",
  description:
    "A detailed breakdown of a best portfolio example, showing the exact structure, proof points, and SEO moves that make it rank and convert.",
  keywords: [
    "best portfolio example",
    "developer portfolio",
    "portfolio case study",
    "software engineer portfolio",
  ],
  alternates: {
    canonical: `${BASE_URL}/blogs/best-portfolio-example`,
  },
  openGraph: {
    title: "Best Portfolio Example: Structure, Proof, and Why It Works",
    description:
      "A detailed breakdown of a best portfolio example, showing the exact structure, proof points, and SEO moves that make it rank and convert.",
    url: `${BASE_URL}/blogs/best-portfolio-example`,
    siteName: "Amit Kumar Portfolio",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Best portfolio example",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Amitsin40190332",
    creator: "@Amitsin40190332",
    title: "Best Portfolio Example: Structure, Proof, and Why It Works",
    description:
      "A detailed breakdown of a best portfolio example, showing the exact structure, proof points, and SEO moves that make it rank and convert.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const publishedAt = "2026-02-05";

const post = {
  title: "Best Portfolio Example: Structure, Proof, and Why It Works",
  excerpt:
    "A detailed breakdown of a best portfolio example, showing the exact structure, proof points, and SEO moves that make it rank and convert.",
  slug: "best-portfolio-example",
  publishedAt,
  updatedAt: publishedAt,
};

export default function BestPortfolioExamplePost() {
  const currentUrl = `${BASE_URL}/blogs/best-portfolio-example`;

  return (
    <div className="min-h-screen bg-[#020617] pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link
            href="/blogs"
            className="text-sm font-semibold text-[#8ef3c1] hover:underline"
          >
            Back to Journal
          </Link>
        </div>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8ef3c1] font-bold">
            Best Portfolio Example
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
            {post.title}
          </h1>
          <p className="text-slate-300 mt-4 leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        <article className="prose prose-invert prose-slate max-w-none">
          <h2>Why this portfolio ranks and converts</h2>
          <p>
            A portfolio wins when it proves outcomes, not just skills. The best
            portfolio example is built around real results, clear structure, and
            fast comprehension for busy readers.
          </p>

          <h2>The exact structure that works</h2>
          <ol>
            <li><strong>Hero positioning:</strong> one-sentence value + proof.</li>
            <li><strong>Case studies:</strong> problem → approach → results.</li>
            <li><strong>Proof:</strong> metrics, screenshots, live links.</li>
            <li><strong>Conversion:</strong> CTA + contact path.</li>
          </ol>

          <h2>Proof beats claims</h2>
          <p>
            Anyone can say “I build scalable apps.” The best portfolios show
            numbers—users, speed gains, or revenue impact. That’s what makes it
            credible to hiring teams.
          </p>

          <h2>SEO wins are intentional</h2>
          <p>
            A dedicated landing page targeting “best portfolio example”, plus
            internal links from blogs, gives Google a clear topic signal.
          </p>

          <h2>Next step</h2>
          <p>
            Want a portfolio like this? Start with a dedicated landing page and
            add focused case studies. If you want help, let’s build it.
          </p>
        </article>

        <div className="mt-10">
          <Link
            href="/best-portfolio"
            className="inline-flex items-center px-5 py-2 rounded-full bg-[#06b6d4] text-white text-sm font-semibold"
          >
            See the full best portfolio example
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBlogPostSchema(post, OG_IMAGE)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: `${BASE_URL}/` },
              { name: "Blogs", url: `${BASE_URL}/blogs` },
              { name: post.title, url: currentUrl },
            ]),
          ),
        }}
      />
    </div>
  );
}
