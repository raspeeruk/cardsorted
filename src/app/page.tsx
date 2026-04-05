import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { SITE_NAME, siteConfig } from "@/lib/site.config";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllCategories } from "@/lib/data/categories";
import { getTopCards } from "@/lib/data/cards";
import { CardTable } from "@/components/CardTable";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";

export const metadata: Metadata = createMetadata({
  title: "Compare Credit Cards by Score, Category & Rewards",
  description: `${SITE_NAME} ranks every major US credit card by your credit score and spending habits. Find the best cash back, travel, and rewards cards in seconds.`,
  path: "/",
});

const SCORE_QUICK_LINKS = [
  { score: 580, label: "580" },
  { score: 650, label: "650" },
  { score: 700, label: "700" },
  { score: 720, label: "720" },
  { score: 750, label: "750+" },
];

export default function HomePage() {
  const categories = getAllCategories().slice(0, 8);
  const topCards = getTopCards(5);

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: siteConfig.url,
    description: siteConfig.description,
  };

  return (
    <>
      <JsonLd data={websiteSchema} />

      {/* Hero */}
      <section className="bg-dotgrid border-b border-ink-faint px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-data text-xs font-medium uppercase tracking-widest text-brand">
            {getAllCategories().length} categories &middot; 100+ cards ranked
          </p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-ink sm:text-6xl">
            The right card for
            <br />
            <span className="text-brand">your exact situation.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-light">
            Stop scrolling through generic &ldquo;best of&rdquo; lists.{" "}
            {siteConfig.name} filters by your credit score, spending categories,
            and the rewards you actually want.
          </p>

          {/* Score quick-select */}
          <div className="mt-8">
            <p className="mb-3 text-sm font-medium text-ink-light">
              What&rsquo;s your credit score?
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {SCORE_QUICK_LINKS.map((s) => (
                <Link
                  key={s.score}
                  href={`/best/cash-back/${s.score}`}
                  className="rounded-lg border border-ink-faint bg-white px-5 py-2.5 font-data text-sm font-semibold text-ink transition-all hover:border-brand hover:bg-brand-light"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-extrabold text-ink">
          Browse by Category
        </h2>
        <p className="mt-1 text-ink-light">
          Find the best card for how you actually spend.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/best/${cat.slug}`}
              className="group rounded-lg border border-ink-faint bg-white p-5 transition-all hover:border-brand/40 hover:shadow-md"
            >
              <span className="text-2xl">{cat.icon}</span>
              <h3 className="mt-2 font-heading font-bold text-ink group-hover:text-brand">
                {cat.name}
              </h3>
              <p className="mt-1 text-sm text-ink-light">{cat.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link
            href="/best/cash-back"
            className="font-heading text-sm font-medium text-brand hover:text-brand-dark"
          >
            View all {getAllCategories().length} categories &rarr;
          </Link>
        </div>
      </section>

      {/* Top Picks */}
      <section className="border-t border-ink-faint bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-heading text-2xl font-extrabold text-ink">
            Top Picks This Month
          </h2>
          <p className="mt-1 mb-6 text-ink-light">
            Our editors&rsquo; highest-rated cards across all categories.
          </p>
          <CardTable cards={topCards} showScore />
          <AffiliateDisclosure />
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-dotgrid border-t border-ink-faint px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center font-heading text-2xl font-extrabold text-ink">
            How {siteConfig.name} Works
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Pick your category",
                desc: "Cash back, travel, dining, gas — choose what matters to your wallet.",
              },
              {
                step: "02",
                title: "Enter your score",
                desc: "We filter out cards you won't qualify for. No wasted applications.",
              },
              {
                step: "03",
                title: "Compare & apply",
                desc: "See rewards, fees, and bonuses side by side. Apply directly with the issuer.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="font-data text-3xl font-bold text-brand">
                  {item.step}
                </span>
                <h3 className="mt-3 font-heading text-lg font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-ink-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / E-E-A-T */}
      <section className="border-t border-ink-faint bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center font-heading text-2xl font-extrabold text-ink">
            Why Trust {siteConfig.name}
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Expert Reviewed",
                desc: "Every recommendation is reviewed by a CFP, CFA, or AFC with real industry experience.",
              },
              {
                title: "Data-Driven Rankings",
                desc: "Cards are ranked by rewards value, fees, and approval odds — not by who pays us the most.",
              },
              {
                title: "Score-Filtered Results",
                desc: "We only show cards you're likely to qualify for. No wasted hard inquiries.",
              },
              {
                title: "Updated Monthly",
                desc: "Card terms change. We re-verify APRs, bonuses, and fees every month.",
              },
            ].map((point) => (
              <div key={point.title}>
                <h3 className="font-heading font-bold text-ink">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-ink-light">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
