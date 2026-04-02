import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
// @ts-ignore
import "./globals.css";
import Navbar from "@/components/home/navbar";
import Footer from "@/components/footer";
import ConditionalBackground from "@/components/ui/ConditionalBackground";
import ClientEnhancements from "@/components/layout/ClientEnhancements";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amitdevjourney.xyz/"),
  title: {
    default: "Amit Kumar | MERN Developer Expert & Full-Stack Engineer",
    template: "%s | Amit Kumar Portfolio",
  },
  description:
    "Amit Kumar — Expert MERN Stack Developer. Building scalable 1M+ user SaaS platforms. Learning in Public: sharing insights on React, Node.js, and scalable architecture.",
  keywords:
    "Amit Kumar, MERN Developer Amit, MERN Developer Expert, MERN Stack Developer, MERN expert amit, mer developer, React, Next.js, Node.js, Express, MongoDB, TypeScript, JavaScript, SaaS, portfolio, India",
  authors: [{ name: "Amit Kumar" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/favicons/favicon.ico", type: "image/x-icon" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicons/favicon.ico",
    apple: "/favicons/apple-touch-icon.png",
    other: [
      {
        rel: "manifest",
        url: "/favicons/site.webmanifest",
      },
    ],
  },
  openGraph: {
    title: "Amit Kumar | MERN Stack Developer Portfolio",
    description:
      "Amit Kumar — Full stack MERN developer. Built production SaaS, real-time platforms and consumer products (1M+ users). Explore case studies, architecture, and product-first engineering.",
    url: "https://www.amitdevjourney.xyz/",
    siteName: "Amit Kumar Portfolio",
    images: [
      {
        url: "https://www.amitdevjourney.xyz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amit Kumar Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Amitsin40190332",
    creator: "@Amitsin40190332",
    title: "Amit Kumar | MERN Stack Developer Portfolio",
    description:
      "Amit Kumar, MERN stack developer, specializes in JavaScript and its frameworks, building scalable web apps with React, Node.js, and MongoDB. Explore my portfolio!",
    images: ["https://www.amitdevjourney.xyz/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.amitdevjourney.xyz/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#061025" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={sora.variable}
      data-scroll-behavior="smooth"
    >
      <body className="bg-black">
        <ConditionalBackground />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#06b6d4] focus:text-white focus:rounded-lg focus:font-bold"
        >
          Skip to main content
        </a>
        <header className="flex justify-center ">
          <Navbar />
        </header>
        <main id="main-content">{children}</main>
        <ClientEnhancements />
        <Footer />
      </body>
    </html>
  );
}
