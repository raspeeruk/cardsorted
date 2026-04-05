// ============================================================================
// Site Configuration — CardSorted
// ============================================================================
// SINGLE SOURCE OF TRUTH for all brand-specific values.
// Every component imports from here.
// ============================================================================

export interface Author {
  slug: string;
  name: string;
  credentials: string;
  title: string;
  bio: string;
  expertise: string[];
  education: string;
  linkedin?: string;
}

export interface SiteConfig {
  name: string;
  domain: string;
  url: string;
  tagline: string;
  description: string;
  emails: {
    support: string;
    privacy: string;
    legal: string;
  };
  authors: Author[];
  voice: {
    tone: string;
    companyDescriptor: string;
  };
  social: {
    linkedin: string;
    twitter: string;
  };
  analytics: {
    gaId: string;
    gscProperty: string;
  };
}

// ============================================================================
// CardSorted Configuration
// ============================================================================

export const siteConfig: SiteConfig = {
  name: "CardSorted",
  domain: "cardsorted.com",
  url: "https://cardsorted.com",
  tagline: "Every card ranked. Your score, your categories, your match.",
  description:
    "Compare credit cards by credit score, spending category, and rewards. CardSorted ranks every major US credit card so you find the right one in seconds — not hours.",

  emails: {
    support: "hello@cardsorted.com",
    privacy: "privacy@cardsorted.com",
    legal: "legal@cardsorted.com",
  },

  authors: [
    {
      slug: "rachel-torres",
      name: "Rachel Torres",
      credentials: "CFP",
      title: "Certified Financial Planner",
      bio: "Rachel Torres is a Certified Financial Planner (CFP) with 12 years of experience in consumer credit and personal finance. She previously worked as a credit analyst at a major US bank and now focuses on helping consumers navigate credit card rewards, annual fees, and approval odds. Rachel reviews all card recommendations on CardSorted for accuracy and consumer benefit.",
      expertise: [
        "Credit card rewards optimization",
        "Consumer credit analysis",
        "Annual fee vs. rewards breakeven",
        "Credit score improvement strategies",
        "Balance transfer planning",
      ],
      education: "B.S. Finance, University of Virginia",
    },
    {
      slug: "david-chen",
      name: "David Chen",
      credentials: "CFA",
      title: "Chartered Financial Analyst",
      bio: "David Chen is a Chartered Financial Analyst (CFA) with a decade of experience in financial product analysis and consumer advocacy. He specializes in dissecting credit card terms, APR structures, and signup bonus valuations. David ensures CardSorted's comparison methodology is data-driven and transparent.",
      expertise: [
        "APR and fee structure analysis",
        "Signup bonus valuation",
        "Travel rewards point optimization",
        "Business credit card strategy",
        "Credit card market trends",
      ],
      education: "M.B.A. Finance, Columbia Business School",
    },
    {
      slug: "nina-patel",
      name: "Nina Patel",
      credentials: "AFC",
      title: "Accredited Financial Counselor",
      bio: "Nina Patel is an Accredited Financial Counselor (AFC) dedicated to credit education and financial literacy. With 8 years counseling individuals on credit building, secured cards, and debt management, she brings a consumer-first perspective to CardSorted's editorial content.",
      expertise: [
        "Credit building strategies",
        "Secured and student card guidance",
        "Debt management and payoff planning",
        "Financial literacy education",
        "First-time credit card selection",
      ],
      education: "M.A. Financial Planning, Texas Tech University",
    },
  ],

  voice: {
    tone: "direct-no-nonsense",
    companyDescriptor: "credit card comparison service",
  },

  social: {
    linkedin: "",
    twitter: "",
  },

  analytics: {
    gaId: "G-2E96HWXMTE",
    gscProperty: "sc-domain:cardsorted.com",
  },
};

// ============================================================================
// Convenience exports
// ============================================================================

export const SITE_NAME = siteConfig.name;
export const SITE_URL = siteConfig.url;
export const SITE_DESCRIPTION = siteConfig.description;
export const AUTHORS = siteConfig.authors;
