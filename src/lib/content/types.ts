// ============================================================================
// Generated Content Types — CardSorted
// ============================================================================
// JSON schemas for AI-generated page content. Each type maps to a page route.
// Generated once by scripts/generate-content.ts, read at build time.
// ============================================================================

export interface CardContent {
  summary: string;       // 2-3 sentence card overview
  body: string;          // 800-1200 word review (HTML)
  pros: string[];        // 4-6 pros
  cons: string[];        // 3-5 cons
  bestFor: string;       // One-liner: "Best for frequent travelers who..."
  expertVerdict: string; // 2-3 sentence final take
  faqs: FAQ[];           // 5 unique FAQs
}

export interface CategoryContent {
  intro: string;         // 150-200 word category overview (HTML)
  buyingGuide: string;   // 300-500 word buying guide (HTML)
  faqs: FAQ[];           // 5 unique FAQs
}

export interface ComparisonContent {
  intro: string;         // 150-200 word comparison overview
  verdict: string;       // 2-3 sentence verdict
  chooseAIf: string[];   // 3-4 reasons to choose card A
  chooseBIf: string[];   // 3-4 reasons to choose card B
  faqs: FAQ[];           // 5 unique FAQs
}

export interface FAQ {
  question: string;
  answer: string;
}
