import type { Metadata } from "next";
import Link from "next/link";
import {
  generateBreadcrumbSchema,
  generateFaqSchema,
} from "@/lib/metadata/json-ld";
import { faqItems } from "@/constant";
import SecondaryButton from "@/components/buttons/secondaryButton";
import FaqAccordion from "@/components/best-portfolio/FaqAccordion";

const BASE_URL = "https://www.amitdevjourney.xyz";

export const metadata: Metadata = {
  title: "Best Portfolio Example | Amit Kumar",
  description:
    "A real, working best portfolio example with case studies, measurable impact, and performance-first engineering. See the exact structure and why it works.",
  keywords: [
    "best portfolio example",
    "developer portfolio example",
    "software engineer portfolio",
    "MERN developer portfolio",
    "portfolio case study",
  ],
  alternates: {
    canonical: `${BASE_URL}/best-portfolio`,
  },
  openGraph: {
    title: "Best Portfolio Example | Amit Kumar",
    description:
      "A real, working best portfolio example with case studies, measurable impact, and performance-first engineering.",
    url: `${BASE_URL}/best-portfolio`,
    siteName: "Amit Kumar Portfolio",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Best portfolio example",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Amitsin40190332",
    creator: "@Amitsin40190332",
    title: "Best Portfolio Example | Amit Kumar",
    description:
      "A real, working best portfolio example with case studies, measurable impact, and performance-first engineering.",
    images: [`${BASE_URL}/og-image.jpg`],
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

export default function BestPortfolioPage() {
  return (
    <div className="min-h-screen relative overflow-hidden pt-28 pb-10 sm:pb-16">
      <div className="max-w-6xl mx-auto relative z-10">
        <header className="text-center mb-12">
          <div>
            <p className="inline-flex items-center text-sm text-slate-300 uppercase tracking-widest rounded-full bg-gradient-to-r from-white/5 via-white/3 to-transparent px-3 py-1 my-4 sm:my-6">
              Best Portfolio Example
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] mt-4">
              A Real Best Portfolio Example That Wins Interviews
            </h1>
            <p className="text-slate-300 mt-4 text-base sm:text-lg leading-relaxed">
              This page is a working example of a developer portfolio built to rank
              and convert. It focuses on results, clarity, and proof—exactly what
              hiring teams and clients look for.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/blogs"
                className="bg-gradient-to-tr from-[#06b6d4] to-[#8ef3c1] text-black font-semibold shadow-lg hover:scale-[1.03] transition-transform px-4 py-1.5 rounded-full text-sm"
              >
                Read case studies
              </Link>
              <Link
                href="/contact"
                className="bg-gradient-to-tr from-[#06b6d4] to-[#8ef3c1] text-black font-semibold shadow-lg hover:scale-[1.03] transition-transform px-4 py-1.5 rounded-full text-sm"
              >
                Work with me
              </Link>
            </div>
          </div>
        </header>

        <section className="rounded-3xl bg-white/5 p-5 backdrop-blur-lg border border-white/10 sm:p-8 mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Why this is a best portfolio example?
          </h2>
          <ul className="mt-4 text-slate-300 space-y-3">
            <li>
              <span className="font-bold leading-normal text-base text-[#fff]">Clear positioning :</span> MERN full‑stack + product engineering with
              scale and performance focus.
            </li>
            <li>
              <span className="font-bold leading-normal text-base text-[#fff]">Proof over claims :</span> case studies, live products, and measurable
              outcomes (users, speed, conversion).
            </li>
            <li>
              <span className="font-bold leading-normal text-base text-[#fff]">Strong UX :</span> fast load, scannable sections, and specific outcomes.
            </li>
            <li>
              <span className="font-bold leading-normal text-base text-[#fff]">SEO built‑in :</span> clean metadata, structured data, and internal links
              to depth articles.
            </li>
          </ul>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 ">
          <div className="border border-white/15 bg-gradient-to-br from-[#061025]/50 via-[#07162b]/30 to-transparent backdrop-blur-md hover:shadow-2xl transition-shadow duration-300 rounded-3xl focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#06b6d4]/30 p-6">
            <h3 className="text-lg font-bold text-white">👉 Case study format</h3>
            <p className="text-slate-300 mt-3">
              Each project follows: Problem → Approach → Architecture → Results.
              This helps readers quickly understand impact and complexity.
            </p>
          </div>
          <div className="border border-white/15 bg-gradient-to-br from-[#061025]/50 via-[#07162b]/30 to-transparent backdrop-blur-md hover:shadow-2xl transition-shadow duration-300 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#06b6d4]/30 rounded-3xl p-6">
            <h3 className="text-lg font-bold text-white">👉 Performance focus</h3>
            <p className="text-slate-300 mt-3">
              Real metrics (load time, scale, cost reduction, or conversion lift)
              make your portfolio credible and persuasive.
            </p>
          </div>
          <div className="border border-white/15 bg-gradient-to-br from-[#061025]/50 via-[#07162b]/30 to-transparent backdrop-blur-md hover:shadow-2xl transition-shadow duration-300 rounded-3xl p-6">
            <h3 className="text-lg font-bold text-white">👉 Depth over quantity</h3>
            <p className="text-slate-300 mt-3">
              A few high‑quality case studies outperform a long list of shallow
              projects.
            </p>
          </div>
          <div className="border border-white/15 bg-gradient-to-br from-[#061025]/50 via-[#07162b]/30 to-transparent backdrop-blur-md hover:shadow-2xl transition-shadow duration-300 rounded-3xl focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#06b6d4]/30 p-6">
            <h3 className="text-lg font-bold text-white">👉 Conversion design</h3>
            <p className="text-slate-300 mt-3">
              Clear calls to action and social proof guide the reader to contact
              or hire you.
            </p>
          </div>
        </section>

        <section className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 sm:p-8 mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Want a portfolio like this?
          </h2>
          <p className="text-slate-300 mt-3">
            I can help you craft a portfolio that ranks and converts. If you want
            a product‑level portfolio with real case studies and performance
            proof, let’s talk.
          </p>
          <div className="mt-5">
            <Link
              href="/contact"
            >
              <SecondaryButton
                title="Book a consult"
                containerStyles="inline-flex items-center px-5 py-2 font-semibold tracking-wide text-sm rounded-full"
              />
            </Link>
          </div>
        </section>

        <section className="bg-[#07162b]/50 border border-white/10 rounded-3xl p-6 sm:p-8 max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-white text-center">
            FAQ
          </h2>
          <FaqAccordion items={faqItems} />
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: `${BASE_URL}/` },
              { name: "Best Portfolio", url: `${BASE_URL}/best-portfolio` },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFaqSchema(faqItems)),
        }}
      />
    </div>
  );
}
