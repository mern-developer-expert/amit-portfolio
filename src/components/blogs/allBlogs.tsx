"use client";
import { Suspense } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogCard } from "./BlogCard";
import { SearchAndFilter } from "./SearchAndFilter";
import { Pagination } from "./Pagination";
import { sanityImageLoader } from "@/lib/image-loader";
import { urlFor } from "@/lib/sanity";
import { staggerContainer, fadeInUp } from "@/constant";

interface AllBlogsContentProps {
    posts: any[];
    total: number;
    categories: string[];
    currentPage: number;
    totalPages: number;
    search: string;
    category: string;
}

export default function AllBlogsContent({
    posts,
    total,
    categories,
    currentPage,
    totalPages,
    search,
    category
}: AllBlogsContentProps) {
    const featuredPost = posts.length > 0 && currentPage === 1 && !search && category === "All" ? posts[0] : null;
    const remainingPosts = featuredPost ? posts.slice(1) : posts;

    return (
        <LazyMotion features={domAnimation}>
            <div className="min-h-screen pt-32 pb-10 sm:pb-16 relative overflow-hidden">

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Hero Section */}
                    <div className="text-center mb-12 sm:mb-16">
                        <m.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/20 text-[#06b6d4] text-sm font-medium mb-6"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span className="text-[#fff]">Insights & Innovations</span>
                        </m.div>

                        <m.div
                            variants={staggerContainer}
                            initial="initial"
                            animate="animate"
                            className="text-center mb-12"
                        >
                            <m.h1
                                variants={fadeInUp}
                                className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] mb-4"
                            >
                                The Journal
                            </m.h1>
                            <m.p
                                variants={fadeInUp}
                                className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed"
                            >
                                Mastering the MERN stack and beyond. Explore technical deep-dives into high-performance web engineering.
                            </m.p>
                        </m.div>
                    </div>

                    {/* Featured Post Highlight */}
                    {featuredPost && (
                        <m.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-12 sm:mb-20"
                        >
                            <Link href={`/blogs/${featuredPost.slug}`}>
                                <div className="group relative rounded-3xl overflow-hidden border border-[#06b6d4]/30 sm:border-white/10 hover:border-[#06b6d4]/30 bg-[#07162b]/40 backdrop-blur-xl transition-all duration-500">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">
                                        <div className="relative sm:h-full aspect-[16/9] overflow-hidden bg-[#020617]/50">
                                            <Image
                                                loader={sanityImageLoader}
                                                src={urlFor(featuredPost.mainImage).url()}
                                                alt={featuredPost.title}
                                                fill
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                                className="object-contain transition-transform duration-700 group-hover:scale-105"
                                                priority
                                                fetchPriority="high"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent lg:hidden" />
                                        </div>
                                        <div className="p-4 sm:p-8 flex flex-col justify-center">
                                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                                {(Array.isArray(featuredPost.categories) ? featuredPost.categories : [featuredPost.categories]).map((cat: string, i: number) => (
                                                    <span key={i} className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg px-3 py-1 bg-white/5 border border-white/5 text-[#06b6d4]  sm:text-slate-200 group-hover:bg-white/10 transition-colors group-hover:text-[#06b6d4]">
                                                        {cat}
                                                    </span>
                                                ))}
                                                <div className="flex items-center justify-center text-slate-300 text-xs group-hover:text-[#06b6d4]">
                                                    <Calendar className="w-4 h-4 mr-2 text-slate-300" />
                                                    <div className="flex items-center justify-center text-[#06b6d4] sm:text-slate-300">
                                                        {new Date(featuredPost.publishedAt).toLocaleDateString("en-IN")}
                                                    </div>
                                                </div>
                                            </div>

                                            <h2 className="text-xl sm:text-2xl font-bold text-slate-200 group-hover:text-white mb-4 sm:mb-6 transition-colors leading-relaxed sm:leading-tight">
                                                {featuredPost.title}
                                            </h2>

                                            <p className="text-slate-300 group-hover:text-slate-200 text-sm sm:text-lg line-clamp-3 leading-relaxed mb-3">
                                                {featuredPost.excerpt}
                                            </p>

                                            <div className="flex items-center justify-between mt-3">
                                                <div className="flex items-center justify-center text-[#06b6d4] sm:text-slate-300 font-medium italic group-hover:text-[#06b6d4] transition-colors">
                                                    <div>
                                                        <Clock className="w-5 h-5 mr-2 text-slate-300 group-hover:text-[#06b6d4]" />
                                                    </div>
                                                    <div>
                                                        {featuredPost.readTime || "5 min read"}
                                                    </div>
                                                </div>
                                                <div className="inline-flex items-center text-[#06b6d4] sm:text-white font-bold group-hover:translate-x-2 transition-transform group-hover:text-[#06b6d4]">
                                                    Read Article <ArrowRight className="ml-2 w-5 h-5 text-slate-300 group-hover:text-[#06b6d4]" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </m.div>
                    )}

                    {/* Operations Bar (Search & Filter) */}
                    <div className="sticky top-24 z-50 mb-12 sm:mb-16">
                        <Suspense fallback={<div className="h-16 w-full bg-[#07162b]/40 rounded-3xl animate-pulse" />}>
                            <SearchAndFilter categories={categories} />
                        </Suspense>
                    </div>

                    {/* Article Grid */}
                    {remainingPosts.length > 0 ? (
                        <m.div
                            variants={staggerContainer}
                            initial="initial"
                            animate="animate"
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {remainingPosts.map((post: any) => (
                                <BlogCard key={post._id} post={post} />
                            ))}
                        </m.div>
                    ) : !featuredPost ? (
                        <div className="text-center py-20 bg-[#07162b]/30 rounded-3xl border border-white/5">
                            <div className="text-6xl mb-6">🔭</div>
                            <h2 className="text-3xl font-bold text-white mb-2">No matches found</h2>
                            <p className="text-slate-400 text-lg">Try adjusting your search filters or exploring all topics.</p>
                        </div>
                    ) : null}

                    {totalPages > 1 && (
                        <div className="mt-20">
                            <Suspense fallback={<div className="h-10 w-full bg-[#07162b]/40 rounded-3xl animate-pulse" />}>
                                <Pagination totalPages={totalPages} />
                            </Suspense>
                        </div>
                    )}
                </div>
            </div>
        </LazyMotion>
    );
}
