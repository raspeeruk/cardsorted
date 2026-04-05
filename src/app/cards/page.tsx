import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { SITE_NAME } from "@/lib/site.config";
import { cards } from "@/lib/data/cards";

export const metadata: Metadata = createMetadata({
  title: "All Credit Card Reviews",
  description: `Read expert reviews of ${cards.length}+ credit cards. Compare annual fees, APRs, rewards rates, and signup bonuses from every major US issuer. Updated monthly by ${SITE_NAME}.`,
  path: "/cards",
});

export default function CardsIndexPage() {
  // Group cards by issuer
  const byIssuer = cards.reduce(
    (acc, card) => {
      if (!acc[card.issuer]) acc[card.issuer] = [];
      acc[card.issuer].push(card);
      return acc;
    },
    {} as Record<string, typeof cards>
  );

  const issuers = Object.keys(byIssuer).sort();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <p className="font-data text-xs font-medium uppercase tracking-widest text-brand">
          {cards.length} cards reviewed
        </p>
        <h1 className="mt-2 font-heading text-3xl font-extrabold text-ink sm:text-4xl">
          All Credit Card Reviews
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-ink-light">
          Expert-reviewed breakdowns of every major US credit card — rewards
          rates, fees, approval odds, and who each card is best for.
        </p>
      </header>

      {issuers.map((issuer) => (
        <section key={issuer} className="mb-10">
          <h2 className="mb-3 font-heading text-xl font-bold text-ink">
            {issuer}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {byIssuer[issuer].map((card) => (
              <Link
                key={card.slug}
                href={`/cards/${card.slug}`}
                className="group rounded-lg border border-ink-faint bg-white p-4 transition-all hover:border-brand/40 hover:shadow-md"
              >
                <h3 className="font-heading text-sm font-bold text-ink group-hover:text-brand">
                  {card.name}
                </h3>
                <div className="mt-2 flex gap-3 text-xs text-ink-light">
                  <span className="font-data">
                    {card.annualFee === 0 ? "$0 fee" : `$${card.annualFee}/yr`}
                  </span>
                  <span>&middot;</span>
                  <span>{card.rewardsRate}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
