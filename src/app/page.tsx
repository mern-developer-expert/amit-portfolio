import ClientHomePage from "@/components/home/ClientHomePage";
import { generatePersonSchema, generateWebsiteSchema, generateSoftwareAppSchema, generateProfessionalServiceSchema } from "@/lib/metadata/json-ld";
import Hero from "@/components/home/Hero";


export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      generatePersonSchema(),
      generateWebsiteSchema(),
      generateSoftwareAppSchema(),
      generateProfessionalServiceSchema()
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        key="person-jsonld"
      />
      <div className="relative overflow-hidden">

        <Hero />
        <ClientHomePage />
      </div>
    </>
  );
}