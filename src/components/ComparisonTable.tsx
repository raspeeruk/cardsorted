import Link from "next/link";
import type { CreditCard } from "@/lib/data/cards";

interface ComparisonTableProps {
  cardA: CreditCard;
  cardB: CreditCard;
}

const rows: { label: string; render: (card: CreditCard) => string }[] = [
  { label: "Issuer", render: (c) => c.issuer },
  { label: "Network", render: (c) => c.network },
  {
    label: "Annual Fee",
    render: (c) => (c.annualFee === 0 ? "$0" : `$${c.annualFee}`),
  },
  { label: "APR Range", render: (c) => `${c.aprMin}% – ${c.aprMax}%` },
  {
    label: "Intro APR (Purchases)",
    render: (c) => c.introAprPurchase || "None",
  },
  {
    label: "Intro APR (Balance Transfers)",
    render: (c) => c.introAprBalance || "None",
  },
  { label: "Rewards Type", render: (c) => c.rewardsType },
  { label: "Rewards Rate", render: (c) => c.rewardsRate },
  { label: "Sign-Up Bonus", render: (c) => c.signupBonus || "None" },
  { label: "Bonus Value", render: (c) => c.signupBonusValue || "—" },
  { label: "Min. Credit Score", render: (c) => `${c.creditScoreMin}+` },
  {
    label: "Foreign Transaction Fee",
    render: (c) => (c.foreignTransactionFee ? "Yes (3%)" : "None"),
  },
];

export function ComparisonTable({ cardA, cardB }: ComparisonTableProps) {
  return (
    <div>
      {/* Duel header — A vs B with monumental letters */}
      <div className="grid grid-cols-12 gap-4 border-b-2 border-ink pb-6">
        <div className="col-span-2">
          <p className="masthead-label">VS.</p>
        </div>
        <div className="col-span-5">
          <p className="masthead-label masthead-label-accent">SIDE&nbsp;A</p>
          <Link
            href={`/cards/${cardA.slug}`}
            className="mt-1 block font-display text-2xl leading-tight text-ink hover:text-accent lg:text-3xl"
          >
            {cardA.name}
          </Link>
        </div>
        <div className="col-span-5">
          <p className="masthead-label masthead-label-oxblood">SIDE&nbsp;B</p>
          <Link
            href={`/cards/${cardB.slug}`}
            className="mt-1 block font-display text-2xl leading-tight text-ink hover:text-accent lg:text-3xl"
          >
            {cardB.name}
          </Link>
        </div>
      </div>

      {/* Data rows */}
      <dl>
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`grid grid-cols-12 gap-4 border-b border-rule py-4 ${
              i % 2 === 0 ? "" : "panel-sunken"
            }`}
          >
            <dt className="col-span-2 masthead-label self-center">
              {row.label.toUpperCase()}
            </dt>
            <dd className="col-span-5 self-center font-mono text-base text-ink">
              {row.render(cardA)}
            </dd>
            <dd className="col-span-5 self-center font-mono text-base text-ink">
              {row.render(cardB)}
            </dd>
          </div>
        ))}
      </dl>

      {/* CTA row */}
      <div className="mt-8 grid grid-cols-12 gap-4">
        <div className="col-span-2" />
        <a
          href={cardA.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="col-span-5 border-2 border-ink bg-ink py-4 text-center font-mono text-xs font-bold uppercase tracking-wider text-surface transition-colors hover:bg-accent hover:border-accent"
        >
          Apply for Side A&nbsp;&rarr;
        </a>
        <a
          href={cardB.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="col-span-5 border-2 border-ink py-4 text-center font-mono text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:bg-accent hover:border-accent hover:text-surface"
        >
          Apply for Side B&nbsp;&rarr;
        </a>
      </div>
    </div>
  );
}
