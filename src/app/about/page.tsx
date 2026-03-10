import AboutUs from "@/components/aboutUs/aboutUs";
import { generateAboutPageSchema } from "@/lib/metadata/json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Amit Kumar | MERN Full-Stack Developer",
  description:
    "Learn about Amit Kumar, a product-focused MERN stack developer with 4+ years of experience building scalable web applications for companies like Bright Digi Gold and TestOfire.",
  keywords: [
    "Amit Kumar",
    "MERN Developer Expert",
    "MERN stack developer",
    "MERN Developer Amit",
    "Full stack developer",
    "mern expert amit",
    "React developer",
    "Node.js developer",
    "Next.js",
    "best-portfolio",
    "Portfolio",
    "Freelance developer India",
    "Web development experience",
  ],
  authors: [{ name: "Amit Kumar" }],
  alternates: {
    canonical: "https://www.amitdevjourney.xyz/about",
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
    title: "About Amit Kumar | MERN Full-Stack Developer",
    description:
      "Learn about Amit Kumar, a product-focused MERN stack developer with 4+ years of experience building scalable web applications.",
    url: "https://www.amitdevjourney.xyz/about",
    siteName: "Amit Kumar Portfolio",
    images: [
      {
        url: "https://www.amitdevjourney.xyz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Amit Kumar - MERN Developer",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Amitsin40190332",
    creator: "@Amitsin40190332",
    title: "About Amit Kumar | MERN Full-Stack Developer",
    description:
      "Product-focused MERN stack developer with 4+ years experience building scalable apps for Bright Digi Gold, TestOfire, and more.",
    images: ["https://www.amitdevjourney.xyz/og-image.jpg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateAboutPageSchema()) }}
      />
      <AboutUs />
    </>
  );
}