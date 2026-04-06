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
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      {/* Magazine feature header */}
      <header className="border-y-2 border-ink py-10 lg:py-14">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <p className="masthead-label">DUEL&nbsp;DESK</p>
            <p className="monumental mt-2 text-[140px] text-accent leading-[0.78] lg:text-[200px]">
              vs
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className="masthead-label">{pairs.length}&nbsp;HEAD-TO-HEAD&nbsp;FILINGS</p>
            <h1 className="mt-3 font-display text-5xl leading-[0.92] text-ink lg:text-7xl">
              Two cards enter<span className="text-accent">.</span>
              <br />
              One card wins.
            </h1>
            <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-ink-mid">
              Can&rsquo;t decide between two cards? Our side-by-side filings break down every detail — rewards, fees, APR, and who each card is genuinely for.
            </p>
          </div>
        </div>
      </header>

      {/* Pairs grid */}
      <ul className="mt-16 grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-3">
        {pairs.map((pair, i) => (
          <li key={pair.slug}>
            <Link
              href={`/compare/${pair.slug}`}
              className="group block bg-surface-card p-6 transition-colors hover:bg-accent-light"
            >
              <p className="font-mono text-[10px] uppercase tracking-wider text-ink-fade">
                FILING&nbsp;{String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 font-display text-2xl leading-tight text-ink group-hover:text-accent-deep">
                {pair.cardAName}
                <br />
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                  &mdash;&nbsp;vs&nbsp;&mdash;
                </span>
                <br />
                {pair.cardBName}
              </h2>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-ink-fade">
                {pair.cardAIssuer}&nbsp;&middot;&nbsp;{pair.cardBIssuer}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
