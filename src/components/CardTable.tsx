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
      <div className="border border-rule bg-surface-card p-10 text-center">
        <p className="masthead-label">NO&nbsp;MATCHES&nbsp;FILED</p>
        <p className="mt-3 font-body text-lg text-ink-mid">
          No cards match this criteria. Try a different category or score.
        </p>
      </div>
    );
  }

  return (
    <div>
      {title && (
        <div className="mb-8 border-b border-rule pb-4">
          <p className="masthead-label">SECTION</p>
          <h2 className="mt-1 font-display text-4xl leading-none text-ink">
            {title}
          </h2>
        </div>
      )}

      <ul>
        {cards.map((card, index) => (
          <li
            key={card.slug}
            className="group border-b border-rule last:border-b-0"
          >
            <div className="grid gap-6 py-8 lg:grid-cols-12 lg:gap-8 lg:py-10">
              {/* Rank numeral — monumental */}
              <div className="lg:col-span-2">
                <p className="masthead-label">ENTRY</p>
                <p className="monumental text-7xl text-ink transition-colors group-hover:text-accent lg:text-8xl">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>

              {/* Card details */}
              <div className="lg:col-span-6">
                <p className="masthead-label">
                  {card.issuer.toUpperCase()}&nbsp;&middot;&nbsp;
                  {card.network.toUpperCase()}
                </p>
                <Link
                  href={`/cards/${card.slug}`}
                  className="mt-2 block font-display text-3xl leading-tight text-ink transition-colors hover:text-accent lg:text-4xl"
                >
                  {card.name}
                </Link>

                {card.signupBonus && (
                  <p className="mt-3 font-body text-base text-ink-mid">
                    <span className="font-mono text-xs text-oxblood">
                      BONUS&nbsp;&rarr;
                    </span>{" "}
                    {card.signupBonus}
                    {card.signupBonusValue && (
                      <span className="text-ink">
                        {" "}
                        ({card.signupBonusValue})
                      </span>
                    )}
                  </p>
                )}

                <p className="mt-3 font-body text-base text-ink-mid">
                  {card.rewardsRate}
                </p>

                {/* Key features as inline tags */}
                {card.keyFeatures.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                    {card.keyFeatures.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="font-mono text-[10px] uppercase tracking-wider text-ink-fade"
                      >
                        &mdash;&nbsp;{feature}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Stats column */}
              <div className="lg:col-span-2">
                <dl className="space-y-3">
                  <div>
                    <dt className="masthead-label">FEE</dt>
                    <dd className="mt-0.5 font-display text-2xl leading-none text-ink">
                      {card.annualFee === 0 ? "$0" : `$${card.annualFee}`}
                    </dd>
                  </div>
                  <div>
                    <dt className="masthead-label">APR</dt>
                    <dd className="mt-0.5 font-mono text-sm text-ink">
                      {card.aprMin}–{card.aprMax}%
                    </dd>
                  </div>
                  {showScore && (
                    <div>
                      <dt className="masthead-label">MIN&nbsp;SCORE</dt>
                      <dd className="mt-0.5 font-display text-2xl leading-none text-ink">
                        {card.creditScoreMin}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>

              {/* CTA column */}
              <div className="lg:col-span-2 lg:text-right">
                <a
                  href={card.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block border-2 border-ink bg-ink px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-surface transition-colors hover:bg-accent hover:border-accent"
                >
                  Apply&nbsp;&rarr;
                </a>
                <Link
                  href={`/cards/${card.slug}`}
                  className="mt-3 block font-mono text-[11px] text-ink-fade hover:text-accent lg:text-right"
                >
                  READ&nbsp;THE&nbsp;FULL&nbsp;REVIEW&nbsp;&rarr;
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
