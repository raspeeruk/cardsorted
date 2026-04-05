import Link from "next/link";
import type { CreditCard } from "@/lib/data/cards";

interface CardTableProps {
  cards: CreditCard[];
  showScore?: boolean;
  title?: string;
}

export function CardTable({ cards, showScore = false, title }: CardTableProps) {
  if (cards.length === 0) {
    return (
      <div className="rounded-lg border border-ink-faint bg-surface-dark p-8 text-center">
        <p className="text-ink-light">
          No cards match this criteria. Try a different category or score range.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {title && (
        <h2 className="font-heading text-2xl font-extrabold text-ink">
          {title}
        </h2>
      )}
      <div className="space-y-3">
        {cards.map((card, index) => (
          <div
            key={card.slug}
            className="group rounded-lg border border-ink-faint bg-white p-5 transition-all hover:border-brand/40 hover:shadow-md"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              {/* Left: Card info */}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-data text-xs font-medium text-ink-lighter">
                    #{index + 1}
                  </span>
                  <Link
                    href={`/cards/${card.slug}`}
                    className="font-heading text-lg font-bold text-ink transition-colors group-hover:text-brand"
                  >
                    {card.name}
                  </Link>
                </div>
                <p className="mt-1 text-sm text-ink-light">
                  {card.issuer} &middot; {card.network}
                </p>

                {/* Key stats row */}
                <div className="mt-3 flex flex-wrap gap-4">
                  <div>
                    <p className="text-xs text-ink-lighter">Annual Fee</p>
                    <p className="font-data text-sm font-semibold text-ink">
                      {card.annualFee === 0 ? "$0" : `$${card.annualFee}`}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-ink-lighter">APR</p>
                    <p className="font-data text-sm font-semibold text-ink">
                      {card.aprMin}% – {card.aprMax}%
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-ink-lighter">Rewards</p>
                    <p className="text-sm font-medium text-ink">
                      {card.rewardsRate}
                    </p>
                  </div>
                  {showScore && (
                    <div>
                      <p className="text-xs text-ink-lighter">Min. Score</p>
                      <p className="font-data text-sm font-semibold text-ink">
                        {card.creditScoreMin}+
                      </p>
                    </div>
                  )}
                </div>

                {/* Signup bonus */}
                {card.signupBonus && (
                  <div className="mt-2 inline-block rounded-md bg-brand-light px-2 py-1">
                    <p className="text-xs font-medium text-brand-dark">
                      Bonus: {card.signupBonus}
                      {card.signupBonusValue && ` (worth ${card.signupBonusValue})`}
                    </p>
                  </div>
                )}
              </div>

              {/* Right: CTA */}
              <div className="flex flex-col items-end gap-2 sm:min-w-[140px]">
                <a
                  href={card.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block rounded-lg bg-brand px-5 py-2.5 font-heading text-sm font-bold text-white transition-colors hover:bg-brand-dark"
                >
                  Apply Now
                </a>
                <Link
                  href={`/cards/${card.slug}`}
                  className="text-xs text-ink-lighter underline hover:text-brand"
                >
                  Full review
                </Link>
              </div>
            </div>

            {/* Key features */}
            <div className="mt-3 flex flex-wrap gap-2">
              {card.keyFeatures.slice(0, 3).map((feature) => (
                <span
                  key={feature}
                  className="rounded-full border border-ink-faint bg-surface px-2.5 py-0.5 text-xs text-ink-light"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
