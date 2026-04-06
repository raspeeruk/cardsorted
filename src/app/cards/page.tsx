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
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      {/* Magazine feature header */}
      <header className="border-y-2 border-ink py-10 lg:py-14">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <p className="masthead-label">THE&nbsp;FILE&nbsp;ROOM</p>
            <p className="monumental mt-2 text-[140px] text-accent leading-[0.78] lg:text-[200px]">
              {cards.length}
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className="masthead-label">REGISTRY&nbsp;&middot;&nbsp;ALL&nbsp;CARDS</p>
            <h1 className="mt-3 font-display text-5xl leading-[0.92] text-ink lg:text-7xl">
              Every <span className="ink-accent">card</span> on file.
            </h1>
            <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-ink-mid">
              Expert-reviewed breakdowns of every major US credit card — rewards rates, fees, approval odds, and who each card is genuinely for. Filed by issuer, scored by the desk.
            </p>
          </div>
        </div>
      </header>

      {/* Issuer sections */}
      <div className="mt-16 space-y-16">
        {issuers.map((issuer, issuerIndex) => (
          <section key={issuer}>
            <div className="flex items-baseline justify-between border-b-2 border-ink pb-4">
              <div>
                <p className="masthead-label">
                  ISSUER&nbsp;{String(issuerIndex + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-1 font-display text-4xl leading-none text-ink lg:text-5xl">
                  {issuer}
                </h2>
              </div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink-fade">
                {byIssuer[issuer].length}&nbsp;CARDS&nbsp;FILED
              </p>
            </div>
            <ul className="mt-px grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-3">
              {byIssuer[issuer].map((card, i) => (
                <li key={card.slug}>
                  <Link
                    href={`/cards/${card.slug}`}
                    className="group block bg-surface-card p-6 transition-colors hover:bg-accent-light"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-wider text-ink-fade">
                      ENTRY&nbsp;{String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-2xl leading-tight text-ink group-hover:text-accent-deep">
                      {card.name}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-4 font-mono text-[11px] uppercase tracking-wider text-ink-mid">
                      <span>
                        {card.annualFee === 0
                          ? "$0 fee"
                          : `$${card.annualFee}/yr`}
                      </span>
                      <span className="text-ink-fade">&middot;</span>
                      <span>{card.rewardsRate}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
