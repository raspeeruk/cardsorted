export interface ScoreRange {
  score: number;
  slug: string;
  label: string;
  tier: "poor" | "fair" | "good" | "very-good" | "excellent";
  tierLabel: string;
  description: string;
  approvalLikelihood: string;
}

export const scoreRanges: ScoreRange[] = [
  {
    score: 580,
    slug: "580",
    label: "580 Credit Score",
    tier: "poor",
    tierLabel: "Poor Credit",
    description:
      "A 580 score falls in the poor credit range. You may have late payments, high utilization, or limited credit history pulling your score down. Most mainstream credit cards will be out of reach, but secured cards and credit-builder products are designed specifically for this range.",
    approvalLikelihood:
      "Low — limited to secured cards and subprime offers with higher fees",
  },
  {
    score: 600,
    slug: "600",
    label: "600 Credit Score",
    tier: "poor",
    tierLabel: "Poor Credit",
    description:
      "At 600, you are near the top of the poor credit range. You likely have some negative marks but may be on an upward trend. A few more months of on-time payments and lower utilization could push you into fair territory, opening up better card options.",
    approvalLikelihood:
      "Low — secured cards and select no-fee cards are your best options",
  },
  {
    score: 620,
    slug: "620",
    label: "620 Credit Score",
    tier: "fair",
    tierLabel: "Fair Credit",
    description:
      "A 620 score puts you in the fair credit range. You have crossed out of poor territory and can now qualify for some unsecured credit cards, including several cash back options with no annual fee. Consistent responsible use from here builds momentum quickly.",
    approvalLikelihood:
      "Moderate — eligible for entry-level unsecured cards and some cash back options",
  },
  {
    score: 640,
    slug: "640",
    label: "640 Credit Score",
    tier: "fair",
    tierLabel: "Fair Credit",
    description:
      "At 640, you are solidly in the fair credit range with a growing number of card options. Many no-annual-fee cash back and student cards are within reach. Focus on keeping utilization below 30% and maintaining a clean payment record to keep climbing.",
    approvalLikelihood:
      "Moderate — several no-fee cash back and rewards cards available",
  },
  {
    score: 650,
    slug: "650",
    label: "650 Credit Score",
    tier: "fair",
    tierLabel: "Fair Credit",
    description:
      "A 650 score sits at the upper end of fair credit. You are approaching the threshold where many issuers start approving mainstream rewards cards. Some balance transfer offers may also be accessible, giving you tools to manage existing debt more efficiently.",
    approvalLikelihood:
      "Moderate — many options available including some balance transfer offers",
  },
  {
    score: 660,
    slug: "660",
    label: "660 Credit Score",
    tier: "good",
    tierLabel: "Good Credit",
    description:
      "At 660, you have entered the good credit range. This opens the door to mid-tier rewards cards, competitive balance transfer offers, and cards with sign-up bonuses. Issuers see you as a reasonable risk, and your options expand significantly from here.",
    approvalLikelihood:
      "Good — eligible for most mid-tier rewards and balance transfer cards",
  },
  {
    score: 670,
    slug: "670",
    label: "670 Credit Score",
    tier: "good",
    tierLabel: "Good Credit",
    description:
      "A 670 score gives you solid standing in the good credit range. You qualify for many popular rewards cards from Chase, Capital One, Discover, and others. Sign-up bonuses and intro APR offers are more frequently available at this level.",
    approvalLikelihood:
      "Good — most mainstream rewards cards and sign-up bonuses are accessible",
  },
  {
    score: 680,
    slug: "680",
    label: "680 Credit Score",
    tier: "good",
    tierLabel: "Good Credit",
    description:
      "At 680, you are well-positioned in the good credit range and approaching the threshold for premium card consideration. You have access to strong travel and cash back cards, competitive APRs, and generous welcome offers from most major issuers.",
    approvalLikelihood:
      "Good — strong approval odds for most rewards cards and some premium options",
  },
  {
    score: 700,
    slug: "700",
    label: "700 Credit Score",
    tier: "very-good",
    tierLabel: "Very Good Credit",
    description:
      "A 700 score puts you in the very good credit range. This is a significant milestone — you now qualify for the majority of credit cards on the market, including premium travel cards, high-limit rewards cards, and the best balance transfer offers with the longest 0% APR periods.",
    approvalLikelihood:
      "Very good — eligible for most cards including premium travel and high-limit options",
  },
  {
    score: 720,
    slug: "720",
    label: "720 Credit Score",
    tier: "very-good",
    tierLabel: "Very Good Credit",
    description:
      "At 720, you are in strong territory within the very good range. Nearly every credit card is within reach, and you will receive more competitive APRs and higher credit limits. Issuers actively compete for cardholders at this score level with their best offers.",
    approvalLikelihood:
      "Very good — approved for nearly all cards with competitive terms and higher limits",
  },
  {
    score: 740,
    slug: "740",
    label: "740 Credit Score",
    tier: "very-good",
    tierLabel: "Very Good Credit",
    description:
      "A 740 score places you at the top of the very good range, on the cusp of excellent. You qualify for virtually every credit card product available, often with the best possible APRs and highest credit limits. Premium cards with annual fees of $500 or more are well within reach.",
    approvalLikelihood:
      "Excellent — top-tier approval odds with the best rates and highest limits",
  },
  {
    score: 760,
    slug: "760",
    label: "760 Credit Score",
    tier: "excellent",
    tierLabel: "Excellent Credit",
    description:
      "At 760, you are in the excellent credit range. Lenders view you as an exceptionally low-risk borrower. Every credit card is available to you, and you will consistently receive the lowest APRs, highest limits, and best promotional offers. Your focus should be on maximizing rewards value rather than building credit.",
    approvalLikelihood:
      "Excellent — approved for all cards with the lowest rates and best promotional offers",
  },
  {
    score: 780,
    slug: "780",
    label: "780 Credit Score",
    tier: "excellent",
    tierLabel: "Excellent Credit",
    description:
      "A 780 score represents top-tier creditworthiness. You are in the upper echelon of the excellent range, and there is no credit card you cannot qualify for. At this level, the game is purely about optimizing your card portfolio for maximum rewards, perks, and value across your spending patterns.",
    approvalLikelihood:
      "Excellent — universal approval with the best possible terms across all issuers",
  },
];

export function getScoreRange(score: number): ScoreRange | undefined {
  return scoreRanges.find((r) => r.score === score);
}

export function getAllScoreRanges(): ScoreRange[] {
  return scoreRanges;
}

export function getScoreTier(score: number): string {
  if (score < 620) return "poor";
  if (score < 660) return "fair";
  if (score < 700) return "good";
  if (score < 750) return "very-good";
  return "excellent";
}
