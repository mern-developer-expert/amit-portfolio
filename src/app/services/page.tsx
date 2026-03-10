import Services from '@/components/services/serviceHero';
import { generateServiceSchema } from '@/lib/metadata/json-ld';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "MERN Stack & Digital Marketing Services | Amit Kumar",
  description:
    "Amit Kumar offers expert MERN full-stack development, digital marketing, and cloud DevOps services. From React/Next.js frontends to scalable Node.js backends and strategic SEO, I deliver end-to-end solutions for projects of any scale.",
  keywords: [
    "MERN Developer Expert",
    "MERN stack",
    "Full stack developer",
    "React developer",
    "Next.js developer",
    "Node.js",
    "API Development",
    "Digital Marketing",
    "SEO Strategy",
    "Social Media Advertising",
    "Cloud DevOps",
    "AWS",
    "React Native",
    "Freelance Developer",
    "Amit Kumar",
  ],
  authors: [{ name: "Amit Kumar" }],
  alternates: {  // ADD THIS – critical for canonical tag output
    canonical: "https://www.amitdevjourney.xyz/services",
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
    title: "MERN Stack & Digital Marketing Services | Amit Kumar",
    description:
      "Amit Kumar offers expert MERN full-stack development, digital marketing, and cloud DevOps services. From React/Next.js frontends to scalable Node.js backends and strategic SEO.",
    url: "https://www.amitdevjourney.xyz/services",
    siteName: "Amit Kumar Portfolio",
    images: [
      {
        url: "https://www.amitdevjourney.xyz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amit Kumar Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Amitsin40190332",
    creator: "@Amitsin40190332",
    title: "MERN Stack & Digital Marketing Services | Amit Kumar",
    description:
      "Expert MERN full-stack development, digital marketing, and DevOps services by Amit Kumar.",
    images: ["https://www.amitdevjourney.xyz/og-image.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateServiceSchema()) }}
      />
      <Services />
    </>
  );
}