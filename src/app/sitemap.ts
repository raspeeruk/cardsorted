import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site.config";
import { cards } from "@/lib/data/cards";
import { getAllCategories } from "@/lib/data/categories";
import { getAllScoreRanges } from "@/lib/data/score-ranges";
import { getComparisonPairs } from "@/lib/data/comparisons";
import { guides } from "@/lib/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const categories = getAllCategories();
  const scoreRanges = getAllScoreRanges();
  const comparisons = getComparisonPairs();

  // Core static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/cards`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/compare`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/guides`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/about/editorial-policy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
  ];

  // Category pages — /best/[category]
  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${SITE_URL}/best/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Category + score pages — /best/[category]/[score] (THE MONEY PAGES)
  const categoryScorePages: MetadataRoute.Sitemap = categories.flatMap((cat) =>
    scoreRanges.map((sr) => ({
      url: `${SITE_URL}/best/${cat.slug}/${sr.score}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))
  );

  // Card review pages — /cards/[slug]
  const cardPages: MetadataRoute.Sitemap = cards.map((card) => ({
    url: `${SITE_URL}/cards/${card.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Comparison pages — /compare/[slug]
  const comparisonPages: MetadataRoute.Sitemap = comparisons.map((pair) => ({
    url: `${SITE_URL}/compare/${pair.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Guide pages — /guides/[slug]
  const guidePages: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${SITE_URL}/guides/${guide.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...categoryScorePages,
    ...cardPages,
    ...comparisonPages,
    ...guidePages,
  ];
}
