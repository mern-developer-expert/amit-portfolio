export default function Head() {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Amit Kumar",
            jobTitle: "Full‑Stack MERN Developer",
            url: "https://www.amitdevjourney.com/",
            sameAs: [
                "https://github.com/mern-developer-expert",
                "https://www.linkedin.com/in/mern-developer-expert-amit",
                "https://x.com/Amitsin40190332",
            ],
            knowsAbout: [
                "React",
                "Next.js",
                "Node.js",
                "Express",
                "MongoDB",
                "TypeScript",
                "Web performance",
                "SaaS architecture",
                "Real-time systems"
            ],
            description:
                "Amit Kumar — Full‑Stack MERN developer building production-grade web apps, SaaS platforms and real-time systems."
        },
        {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Amit Kumar — Resume",
            description: "Official resume / CV for Amit Kumar — Full‑Stack MERN Developer.",
            url: "https://docs.google.com/document/d/1WQormpR0rl5oz-JgnFhqoH9MPsg3zvAwqA29mZzNNzw/export?format=pdf",
            encodingFormat: "application/pdf"
        },
        {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Notable projects",
            itemListElement: [
                { "@type": "ListItem", position: 1, url: "https://medicalkundali.com/", name: "Medical Kundali — healthcare SaaS" },
                { "@type": "ListItem", position: 2, url: "https://brightdigigold.com/", name: "Bright Digi Gold — consumer product (1M+ users)" },
                { "@type": "ListItem", position: 3, url: "https://testofire.in/", name: "TestOfire — real-time EdTech" }
            ]
        }
    ];

    return (
        <>
            {/* canonical + basic fallbacks stay in metadata in layout.tsx */}
            <link rel="canonical" href="https://www.amitdevjourney.com/" />
            <link
                rel="alternate"
                type="application/rss+xml"
                title="The Journal | Amit Kumar Portfolio"
                href="https://www.amitdevjourney.com/rss.xml"
            />
            <script
                key="person-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </>
    );
}
