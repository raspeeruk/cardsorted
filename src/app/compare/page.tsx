import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { SITE_NAME } from "@/lib/site.config";
import { getComparisonPairs } from "@/lib/data/comparisons";

export const metadata: Metadata = createMetadata({
  title: "Compare Credit Cards Side by Side",
  description: `Compare any two credit cards head-to-head. See annual fees, APRs, rewards, signup bonuses, and approval odds in one table. ${SITE_NAME}'s card comparison tool.`,
  path: "/compare",
});

export default function CompareIndexPage() {
  const pairs = getComparisonPairs();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <p className="font-data text-xs font-medium uppercase tracking-widest text-brand">
          {pairs.length} comparisons
        </p>
        <h1 className="mt-2 font-heading text-3xl font-extrabold text-ink sm:text-4xl">
          Compare Credit Cards
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-ink-light">
          Can&rsquo;t decide between two cards? Our side-by-side comparisons
          break down every detail — rewards, fees, APR, and who each card is
          best for.
        </p>
      </header>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {pairs.map((pair) => (
          <Link
            key={pair.slug}
            href={`/compare/${pair.slug}`}
            className="group rounded-lg border border-ink-faint bg-white p-5 transition-all hover:border-brand/40 hover:shadow-md"
          >
            <h2 className="font-heading text-sm font-bold text-ink group-hover:text-brand">
              {pair.cardAName} vs {pair.cardBName}
            </h2>
            <p className="mt-1 text-xs text-ink-light">
              {pair.cardAIssuer} vs {pair.cardBIssuer}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
