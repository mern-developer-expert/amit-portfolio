import { client } from "@/lib/sanity";
import { paginatedPostsQuery, totalPostsQuery, categoriesQuery } from "@/lib/sanity.queries";
import { generateBlogSchema, generateBreadcrumbSchema } from "@/lib/metadata/json-ld";
import AllBlogsContent from "@/components/blogs/allBlogs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Journal | Amit Kumar Portfolio",
    description: "Deep-dives into MERN stack development, high-performance web engineering, and digital innovation. Explore technical insights and master your craft with Amit Kumar.",
    keywords: [
        "Amit Kumar",
        "MERN Developer Expert",
        "MERN Developer Amit",
        "MERN master",
        "mern expert amit",
        "The Journal",
        "Technical Blog",
        "Web Engineering",
        "SaaS Architecture",
        "Performance Optimization",
        "Next.js Insights",
    ],
    authors: [{ name: "Amit Kumar" }],
    alternates: {
        canonical: "https://www.amitdevjourney.xyz/blogs",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    openGraph: {
        title: "The Journal | Amit Kumar Portfolio",
        description:
            "Deep-dives into MERN stack development, high-performance web engineering, and digital innovation. Explore technical insights and master your craft with Amit Kumar.",
        url: "https://www.amitdevjourney.xyz/blogs",
        siteName: "Amit Kumar Portfolio",
        images: [
            {
                url: "https://www.amitdevjourney.xyz/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "The Journal - Amit Kumar Portfolio",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@Amitsin40190332",
        creator: "@Amitsin40190332",
        title: "The Journal | Amit Kumar Portfolio",
        description:
            "Exploration of modern web engineering and high-performance MERN architecture by Amit Kumar.",
        images: ["https://www.amitdevjourney.xyz/og-image.jpg"],
    },
};

const POSTS_PER_PAGE = 24;

export const revalidate = 1500; // revalidate every 15 minutes

async function getPosts(search: string = "", page: number = 1, category: string = "All") {
    const start = (page - 1) * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;
    const searchPattern = `*${search}*`;

    const posts = await client.fetch(paginatedPostsQuery, {
        search: searchPattern,
        category,
        start,
        end,
    });

    const total = await client.fetch(totalPostsQuery, {
        search: searchPattern,
        category,
    });

    return { posts, total };
}

async function getCategories() {
    return await client.fetch(categoriesQuery);
}

export default async function AllBlogsPage({
    searchParams,
}: {
    searchParams: Promise<{ search?: string; page?: string; category?: string }>;
}) {
    const { search = "", page = "1", category = "All" } = await searchParams;
    const currentPage = Number(page);
    const { posts, total } = await getPosts(search, currentPage, category);
    const categories = await getCategories();
    const totalPages = Math.ceil(total / POSTS_PER_PAGE);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBlogSchema()) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { name: "Home", url: "https://www.amitdevjourney.xyz/" },
                            { name: "Blogs", url: "https://www.amitdevjourney.xyz/blogs" },
                        ])
                    ),
                }}
            />
            <AllBlogsContent
                posts={posts}
                total={total}
                categories={categories}
                currentPage={currentPage}
                totalPages={totalPages}
                search={search}
                category={category}
            />
        </>
    );
}
