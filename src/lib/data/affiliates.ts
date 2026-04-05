export interface AffiliateNetwork {
  name: string;
  id: string;
  baseUrl: string;
  trackingParam: string;
}

export interface AffiliateConfig {
  primaryNetwork: AffiliateNetwork;
  fallbackUrl: string;
  disclosureText: string;
  shortDisclosure: string;
}

export const affiliateConfig: AffiliateConfig = {
  primaryNetwork: {
    name: "CJ Affiliate",
    id: "cardsorted",
    baseUrl: "https://www.cardsorted.com/go",
    trackingParam: "ref",
  },
  fallbackUrl: "#",
  disclosureText:
    "CardSorted is an independent credit card comparison service. We may receive compensation when you apply for credit card offers through links on our site. This compensation may affect how and where products appear, including the order in which they appear. However, this does not influence our evaluations. Our opinions are our own.",
  shortDisclosure:
    "We may earn a commission when you apply through our links. This doesn't affect our ratings.",
};

/**
 * Cards that have active affiliate links.
 * Maps card slug to the outbound redirect path segment.
 * Cards not in this map will use the fallback URL.
 */
const affiliateCards: Record<string, string> = {
  // Chase
  "chase-sapphire-preferred": "chase-sapphire-preferred",
  "chase-sapphire-reserve": "chase-sapphire-reserve",
  "chase-freedom-unlimited": "chase-freedom-unlimited",
  "chase-freedom-flex": "chase-freedom-flex",
  "chase-freedom-rise": "chase-freedom-rise",
  "ink-business-preferred": "ink-business-preferred",
  "ink-business-cash": "ink-business-cash",
  "ink-business-unlimited": "ink-business-unlimited",

  // American Express
  "amex-platinum": "amex-platinum",
  "amex-gold": "amex-gold",
  "amex-blue-cash-preferred": "amex-blue-cash-preferred",

  // Capital One
  "capital-one-venture-x": "capital-one-venture-x",
  "capital-one-venture": "capital-one-venture",
  "capital-one-quicksilver": "capital-one-quicksilver",
  "capital-one-savor-one": "capital-one-savor-one",
  "capital-one-spark-cash-plus": "capital-one-spark-cash-plus",
  "capital-one-platinum-secured": "capital-one-platinum-secured",
  "capital-one-quicksilver-student": "capital-one-quicksilver-student",

  // Citi
  "citi-double-cash": "citi-double-cash",
  "citi-premier": "citi-premier",
  "citi-custom-cash": "citi-custom-cash",
  "citi-diamond-preferred": "citi-diamond-preferred",

  // Discover
  "discover-it-cash-back": "discover-it-cash-back",
  "discover-it-student-cash-back": "discover-it-student-cash-back",
  "discover-it-secured": "discover-it-secured",

  // Wells Fargo
  "wells-fargo-active-cash": "wells-fargo-active-cash",
  "wells-fargo-autograph": "wells-fargo-autograph",
  "wells-fargo-reflect": "wells-fargo-reflect",

  // Hotel
  "marriott-bonvoy-boundless": "marriott-bonvoy-boundless",
  "ihg-one-rewards-premier": "ihg-one-rewards-premier",
  "hilton-honors-aspire": "hilton-honors-aspire",
  "hilton-honors-surpass": "hilton-honors-surpass",

  // Airline
  "delta-skymiles-gold": "delta-skymiles-gold",
  "united-explorer": "united-explorer",
  "southwest-priority": "southwest-priority",
  "alaska-airlines-visa": "alaska-airlines-visa",

  // Other
  "us-bank-altitude-reserve": "us-bank-altitude-reserve",
  "bank-of-america-customized-cash-students":
    "bank-of-america-customized-cash-students",
};

export function getAffiliateUrl(cardSlug: string): string {
  const path = affiliateCards[cardSlug];
  if (!path) {
    return affiliateConfig.fallbackUrl;
  }
  const { baseUrl, trackingParam } = affiliateConfig.primaryNetwork;
  return `${baseUrl}/${path}?${trackingParam}=${affiliateConfig.primaryNetwork.id}`;
}

export function hasAffiliateLink(cardSlug: string): boolean {
  return cardSlug in affiliateCards;
}
