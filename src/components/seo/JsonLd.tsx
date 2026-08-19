import { siteConfig } from "@/lib/constants";

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: "USA-based web design, app development, and digital marketing agency. We turn your idea into a professional website or app that converts.",
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    priceRange: "$$$",
    serviceType: [
      "Website Design",
      "Web Development",
      "App Development",
      "Digital Marketing",
      "Content Writing",
      "Graphic Design",
      "Ecommerce Store Setup",
      "Shopify Development",
      "Ecommerce Web Development",
    ],
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    sameAs: Object.values(siteConfig.socialLinks),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}