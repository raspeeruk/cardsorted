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
  {
    label: "Bonus Value",
    render: (c) => c.signupBonusValue || "N/A",
  },
  {
    label: "Min. Credit Score",
    render: (c) => `${c.creditScoreMin}+`,
  },
  {
    label: "Foreign Transaction Fee",
    render: (c) => (c.foreignTransactionFee ? "Yes (typically 3%)" : "None"),
  },
];

export function ComparisonTable({ cardA, cardB }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b-2 border-ink-faint">
            <th className="py-3 pr-4 text-left font-heading text-xs font-semibold uppercase tracking-wider text-ink-lighter">
              Feature
            </th>
            <th className="py-3 px-4 text-left font-heading text-sm font-bold text-ink">
              <Link
                href={`/cards/${cardA.slug}`}
                className="hover:text-brand"
              >
                {cardA.name}
              </Link>
            </th>
            <th className="py-3 pl-4 text-left font-heading text-sm font-bold text-ink">
              <Link
                href={`/cards/${cardB.slug}`}
                className="hover:text-brand"
              >
                {cardB.name}
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.label}
              className={
                i % 2 === 0
                  ? "bg-surface"
                  : "bg-white"
              }
            >
              <td className="py-2.5 pr-4 font-heading text-xs font-medium text-ink-light">
                {row.label}
              </td>
              <td className="py-2.5 px-4 font-data text-sm text-ink">
                {row.render(cardA)}
              </td>
              <td className="py-2.5 pl-4 font-data text-sm text-ink">
                {row.render(cardB)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* CTA row */}
      <div className="mt-6 flex gap-4">
        <a
          href={cardA.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="flex-1 rounded-lg bg-brand py-3 text-center font-heading text-sm font-bold text-white transition-colors hover:bg-brand-dark"
        >
          Apply for {cardA.name.split(" ").slice(0, 2).join(" ")}
        </a>
        <a
          href={cardB.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="flex-1 rounded-lg border-2 border-brand py-3 text-center font-heading text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-white"
        >
          Apply for {cardB.name.split(" ").slice(0, 2).join(" ")}
        </a>
      </div>
    </div>
  );
}
