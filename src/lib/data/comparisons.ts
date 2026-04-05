// ============================================================================
// Card Comparison Pairs
// ============================================================================
// Pre-defined popular head-to-head comparisons for pSEO.
// Each pair generates a /compare/[slug] page.
// ============================================================================

export interface ComparisonPair {
  slug: string;
  cardASlug: string;
  cardAName: string;
  cardAIssuer: string;
  cardBSlug: string;
  cardBName: string;
  cardBIssuer: string;
}

const pairs: ComparisonPair[] = [
  // Chase vs Amex flagship
  { slug: "chase-sapphire-preferred-vs-amex-gold", cardASlug: "chase-sapphire-preferred", cardAName: "Chase Sapphire Preferred", cardAIssuer: "Chase", cardBSlug: "amex-gold", cardBName: "Amex Gold Card", cardBIssuer: "American Express" },
  { slug: "chase-sapphire-reserve-vs-amex-platinum", cardASlug: "chase-sapphire-reserve", cardAName: "Chase Sapphire Reserve", cardAIssuer: "Chase", cardBSlug: "amex-platinum", cardBName: "The Platinum Card", cardBIssuer: "American Express" },
  { slug: "chase-sapphire-preferred-vs-chase-sapphire-reserve", cardASlug: "chase-sapphire-preferred", cardAName: "Chase Sapphire Preferred", cardAIssuer: "Chase", cardBSlug: "chase-sapphire-reserve", cardBName: "Chase Sapphire Reserve", cardBIssuer: "Chase" },

  // Cash back head-to-heads
  { slug: "chase-freedom-unlimited-vs-citi-double-cash", cardASlug: "chase-freedom-unlimited", cardAName: "Chase Freedom Unlimited", cardAIssuer: "Chase", cardBSlug: "citi-double-cash", cardBName: "Citi Double Cash", cardBIssuer: "Citi" },
  { slug: "chase-freedom-unlimited-vs-capital-one-quicksilver", cardASlug: "chase-freedom-unlimited", cardAName: "Chase Freedom Unlimited", cardAIssuer: "Chase", cardBSlug: "capital-one-quicksilver", cardBName: "Capital One Quicksilver", cardBIssuer: "Capital One" },
  { slug: "citi-double-cash-vs-wells-fargo-active-cash", cardASlug: "citi-double-cash", cardAName: "Citi Double Cash", cardAIssuer: "Citi", cardBSlug: "wells-fargo-active-cash", cardBName: "Wells Fargo Active Cash", cardBIssuer: "Wells Fargo" },
  { slug: "discover-it-cash-back-vs-chase-freedom-flex", cardASlug: "discover-it-cash-back", cardAName: "Discover it Cash Back", cardAIssuer: "Discover", cardBSlug: "chase-freedom-flex", cardBName: "Chase Freedom Flex", cardBIssuer: "Chase" },
  { slug: "capital-one-quicksilver-vs-wells-fargo-active-cash", cardASlug: "capital-one-quicksilver", cardAName: "Capital One Quicksilver", cardAIssuer: "Capital One", cardBSlug: "wells-fargo-active-cash", cardBName: "Wells Fargo Active Cash", cardBIssuer: "Wells Fargo" },
  { slug: "amex-blue-cash-preferred-vs-citi-custom-cash", cardASlug: "amex-blue-cash-preferred", cardAName: "Blue Cash Preferred", cardAIssuer: "American Express", cardBSlug: "citi-custom-cash", cardBName: "Citi Custom Cash", cardBIssuer: "Citi" },

  // Travel card face-offs
  { slug: "capital-one-venture-x-vs-chase-sapphire-reserve", cardASlug: "capital-one-venture-x", cardAName: "Capital One Venture X", cardAIssuer: "Capital One", cardBSlug: "chase-sapphire-reserve", cardBName: "Chase Sapphire Reserve", cardBIssuer: "Chase" },
  { slug: "capital-one-venture-vs-chase-sapphire-preferred", cardASlug: "capital-one-venture", cardAName: "Capital One Venture", cardAIssuer: "Capital One", cardBSlug: "chase-sapphire-preferred", cardBName: "Chase Sapphire Preferred", cardBIssuer: "Chase" },
  { slug: "capital-one-venture-vs-capital-one-venture-x", cardASlug: "capital-one-venture", cardAName: "Capital One Venture", cardAIssuer: "Capital One", cardBSlug: "capital-one-venture-x", cardBName: "Capital One Venture X", cardBIssuer: "Capital One" },
  { slug: "amex-gold-vs-amex-platinum", cardASlug: "amex-gold", cardAName: "Amex Gold Card", cardAIssuer: "American Express", cardBSlug: "amex-platinum", cardBName: "The Platinum Card", cardBIssuer: "American Express" },
  { slug: "citi-premier-vs-chase-sapphire-preferred", cardASlug: "citi-premier", cardAName: "Citi Premier", cardAIssuer: "Citi", cardBSlug: "chase-sapphire-preferred", cardBName: "Chase Sapphire Preferred", cardBIssuer: "Chase" },

  // Balance transfer
  { slug: "citi-diamond-preferred-vs-wells-fargo-reflect", cardASlug: "citi-diamond-preferred", cardAName: "Citi Diamond Preferred", cardAIssuer: "Citi", cardBSlug: "wells-fargo-reflect", cardBName: "Wells Fargo Reflect", cardBIssuer: "Wells Fargo" },
  { slug: "chase-freedom-unlimited-vs-wells-fargo-reflect", cardASlug: "chase-freedom-unlimited", cardAName: "Chase Freedom Unlimited", cardAIssuer: "Chase", cardBSlug: "wells-fargo-reflect", cardBName: "Wells Fargo Reflect", cardBIssuer: "Wells Fargo" },

  // Student cards
  { slug: "discover-it-student-cash-back-vs-capital-one-quicksilver-student", cardASlug: "discover-it-student-cash-back", cardAName: "Discover it Student Cash Back", cardAIssuer: "Discover", cardBSlug: "capital-one-quicksilver-student", cardBName: "Capital One Quicksilver Student", cardBIssuer: "Capital One" },
  { slug: "chase-freedom-rise-vs-discover-it-student-cash-back", cardASlug: "chase-freedom-rise", cardAName: "Chase Freedom Rise", cardAIssuer: "Chase", cardBSlug: "discover-it-student-cash-back", cardBName: "Discover it Student Cash Back", cardBIssuer: "Discover" },

  // Secured cards
  { slug: "discover-it-secured-vs-capital-one-platinum-secured", cardASlug: "discover-it-secured", cardAName: "Discover it Secured", cardAIssuer: "Discover", cardBSlug: "capital-one-platinum-secured", cardBName: "Capital One Platinum Secured", cardBIssuer: "Capital One" },

  // Business cards
  { slug: "ink-business-preferred-vs-capital-one-spark-cash-plus", cardASlug: "chase-ink-business-preferred", cardAName: "Ink Business Preferred", cardAIssuer: "Chase", cardBSlug: "capital-one-spark-cash-plus", cardBName: "Capital One Spark Cash Plus", cardBIssuer: "Capital One" },
  { slug: "ink-business-cash-vs-ink-business-unlimited", cardASlug: "chase-ink-business-cash", cardAName: "Ink Business Cash", cardAIssuer: "Chase", cardBSlug: "chase-ink-business-unlimited", cardBName: "Ink Business Unlimited", cardBIssuer: "Chase" },

  // Grocery/dining focused
  { slug: "amex-gold-vs-capital-one-savor-one", cardASlug: "amex-gold", cardAName: "Amex Gold Card", cardAIssuer: "American Express", cardBSlug: "capital-one-savor-one", cardBName: "Capital One SavorOne", cardBIssuer: "Capital One" },
  { slug: "wells-fargo-autograph-vs-capital-one-savor-one", cardASlug: "wells-fargo-autograph", cardAName: "Wells Fargo Autograph", cardAIssuer: "Wells Fargo", cardBSlug: "capital-one-savor-one", cardBName: "Capital One SavorOne", cardBIssuer: "Capital One" },

  // Hotel cards
  { slug: "marriott-bonvoy-boundless-vs-hilton-honors-surpass", cardASlug: "chase-marriott-bonvoy-boundless", cardAName: "Marriott Bonvoy Boundless", cardAIssuer: "Chase", cardBSlug: "amex-hilton-honors-surpass", cardBName: "Hilton Honors Surpass", cardBIssuer: "American Express" },
  { slug: "hilton-honors-aspire-vs-marriott-bonvoy-boundless", cardASlug: "amex-hilton-honors-aspire", cardAName: "Hilton Honors Aspire", cardAIssuer: "American Express", cardBSlug: "chase-marriott-bonvoy-boundless", cardBName: "Marriott Bonvoy Boundless", cardBIssuer: "Chase" },

  // Airline cards
  { slug: "delta-skymiles-gold-vs-united-explorer", cardASlug: "amex-delta-skymiles-gold", cardAName: "Delta SkyMiles Gold", cardAIssuer: "American Express", cardBSlug: "chase-united-explorer", cardBName: "United Explorer", cardBIssuer: "Chase" },
  { slug: "southwest-priority-vs-united-explorer", cardASlug: "chase-southwest-priority", cardAName: "Southwest Priority", cardAIssuer: "Chase", cardBSlug: "chase-united-explorer", cardBName: "United Explorer", cardBIssuer: "Chase" },
  { slug: "alaska-airlines-visa-vs-delta-skymiles-gold", cardASlug: "boa-alaska-airlines", cardAName: "Alaska Airlines Visa", cardAIssuer: "Bank of America", cardBSlug: "amex-delta-skymiles-gold", cardBName: "Delta SkyMiles Gold", cardBIssuer: "American Express" },

  // Premium tier
  { slug: "us-bank-altitude-reserve-vs-chase-sapphire-reserve", cardASlug: "us-bank-altitude-reserve", cardAName: "US Bank Altitude Reserve", cardAIssuer: "US Bank", cardBSlug: "chase-sapphire-reserve", cardBName: "Chase Sapphire Reserve", cardBIssuer: "Chase" },
  { slug: "capital-one-venture-x-vs-amex-platinum", cardASlug: "capital-one-venture-x", cardAName: "Capital One Venture X", cardAIssuer: "Capital One", cardBSlug: "amex-platinum", cardBName: "The Platinum Card", cardBIssuer: "American Express" },

  // Mixed matchups
  { slug: "amex-blue-cash-everyday-vs-chase-freedom-unlimited", cardASlug: "amex-blue-cash-everyday", cardAName: "Blue Cash Everyday", cardAIssuer: "American Express", cardBSlug: "chase-freedom-unlimited", cardBName: "Chase Freedom Unlimited", cardBIssuer: "Chase" },
  { slug: "bank-of-america-customized-cash-vs-citi-custom-cash", cardASlug: "boa-customized-cash", cardAName: "BofA Customized Cash", cardAIssuer: "Bank of America", cardBSlug: "citi-custom-cash", cardBName: "Citi Custom Cash", cardBIssuer: "Citi" },
  { slug: "bank-of-america-premium-rewards-vs-citi-premier", cardASlug: "boa-premium-rewards", cardAName: "BofA Premium Rewards", cardAIssuer: "Bank of America", cardBSlug: "citi-premier", cardBName: "Citi Premier", cardBIssuer: "Citi" },
  { slug: "apple-card-vs-citi-double-cash", cardASlug: "apple-card", cardAName: "Apple Card", cardAIssuer: "Goldman Sachs", cardBSlug: "citi-double-cash", cardBName: "Citi Double Cash", cardBIssuer: "Citi" },
  { slug: "wells-fargo-autograph-vs-chase-freedom-flex", cardASlug: "wells-fargo-autograph", cardAName: "Wells Fargo Autograph", cardAIssuer: "Wells Fargo", cardBSlug: "chase-freedom-flex", cardBName: "Chase Freedom Flex", cardBIssuer: "Chase" },
  { slug: "capital-one-savor-vs-amex-gold", cardASlug: "capital-one-savor", cardAName: "Capital One Savor", cardAIssuer: "Capital One", cardBSlug: "amex-gold", cardBName: "Amex Gold Card", cardBIssuer: "American Express" },
  { slug: "discover-it-miles-vs-capital-one-venture-one", cardASlug: "discover-it-miles", cardAName: "Discover it Miles", cardAIssuer: "Discover", cardBSlug: "capital-one-ventureone", cardBName: "Capital One VentureOne", cardBIssuer: "Capital One" },
  { slug: "costco-anywhere-visa-vs-amex-blue-cash-preferred", cardASlug: "citi-costco-anywhere", cardAName: "Costco Anywhere Visa", cardAIssuer: "Citi", cardBSlug: "amex-blue-cash-preferred", cardBName: "Blue Cash Preferred", cardBIssuer: "American Express" },
  { slug: "wells-fargo-autograph-journey-vs-capital-one-venture", cardASlug: "wells-fargo-autograph-journey", cardAName: "Wells Fargo Autograph Journey", cardAIssuer: "Wells Fargo", cardBSlug: "capital-one-venture", cardBName: "Capital One Venture", cardBIssuer: "Capital One" },
  { slug: "us-bank-altitude-go-vs-wells-fargo-autograph", cardASlug: "us-bank-altitude-go", cardAName: "US Bank Altitude Go", cardAIssuer: "US Bank", cardBSlug: "wells-fargo-autograph", cardBName: "Wells Fargo Autograph", cardBIssuer: "Wells Fargo" },
  { slug: "ihg-one-rewards-premier-vs-marriott-bonvoy-boundless", cardASlug: "chase-ihg-one-rewards-premier", cardAName: "IHG One Rewards Premier", cardAIssuer: "Chase", cardBSlug: "chase-marriott-bonvoy-boundless", cardBName: "Marriott Bonvoy Boundless", cardBIssuer: "Chase" },
];

export function getComparisonPairs(): ComparisonPair[] {
  return pairs;
}

export function getComparisonBySlug(slug: string): ComparisonPair | undefined {
  return pairs.find((p) => p.slug === slug);
}
