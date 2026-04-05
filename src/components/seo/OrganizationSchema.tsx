import { JsonLd } from "./JsonLd";
import { siteConfig } from "@/lib/site.config";

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: `${siteConfig.name} is a ${siteConfig.voice.companyDescriptor} that helps consumers find the best credit card for their credit score, spending habits, and financial goals.`,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: `${siteConfig.url}/about`,
    },
    sameAs: [siteConfig.social.linkedin, siteConfig.social.twitter].filter(
      Boolean
    ),
  };

  return <JsonLd data={data} />;
}
