import ContactUs from "@/components/contactUs/contactUs";
import { generateContactPageSchema } from "@/lib/metadata/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Amit Kumar | Let's Build Together",  // Good – this will become "Contact Amit Kumar | Let's Build Together | Amit Kumar Portfolio" thanks to root template
  description:
    "Get in touch with Amit Kumar to discuss your next project. Available for freelance opportunities in web development, API design, and cloud infrastructure.",
  keywords: [
    "contact Amit Kumar",
    "hire MERN developer",
    "freelance full-stack developer",
    "web development inquiry",
    "React Node.js developer",
    "India freelance developer",
  ],
  authors: [{ name: "Amit Kumar" }],
  alternates: {  // ADD THIS – critical for correct canonical URL
    canonical: "https://www.amitdevjourney.com/contact",
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
    title: "Contact Amit Kumar | Let's Build Together",
    description:
      "Get in touch with Amit Kumar to discuss your next project. Available for freelance opportunities in web development, API design, and cloud infrastructure.",
    url: "https://www.amitdevjourney.com/contact",
    siteName: "Amit Kumar Portfolio",
    images: [
      {
        url: "https://www.amitdevjourney.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Amit Kumar",
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Amitsin40190332",
    creator: "@Amitsin40190332",
    title: "Contact Amit Kumar | Let's Build Together",
    description:
      "Get in touch with Amit Kumar to discuss your next project. Available for freelance opportunities in web development, API design, and cloud infrastructure.",
    images: ["https://www.amitdevjourney.com/og-image.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateContactPageSchema()) }}
      />
      <ContactUs />
    </>
  );
}