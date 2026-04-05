import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo/metadata";
import { SITE_NAME, AUTHORS } from "@/lib/site.config";
import { cards, getCardBySlug, getCardsByCategory } from "@/lib/data/cards";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AuthorByline } from "@/components/content/AuthorByline";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { FAQAccordion } from "@/components/content/FAQAccordion";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return cards.map((card) => ({ slug: card.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const card = getCardBySlug(slug);
  if (!card) return {};
  return createMetadata({
    title: `${card.name} Review — Rewards, Fees & Who It's For`,
    description: `${card.name} review: ${card.rewardsRate}, ${card.annualFee === 0 ? "no annual fee" : `$${card.annualFee}/year`}, ${card.aprMin}%–${card.aprMax}% APR. Expert analysis of rewards, fees, and approval odds from ${SITE_NAME}.`,
    path: `/cards/${slug}`,
  });
}

export default async function CardReviewPage({ params }: Props) {
  const { slug } = await params;
  const card = getCardBySlug(slug);
  if (!card) notFound();

  const reviewer = AUTHORS[0];
  const relatedCards = getCardsByCategory(card.categories[0])
    .filter((c) => c.slug !== card.slug)
    .slice(0, 4);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: card.name,
    brand: { "@type": "Brand", name: card.issuer },
    description: `${card.name} — ${card.rewardsRate}. ${card.annualFee === 0 ? "No annual fee." : `$${card.annualFee} annual fee.`}`,
    offers: {
      "@type": "Offer",
      price: card.annualFee,
      priceCurrency: "USD",
      description: "Annual Fee",
    },
  };

  const faqs = [
    {
      question: `Is the ${card.name} worth it?`,
      answer: card.annualFee === 0
        ? `With no annual fee and ${card.rewardsRate}, the ${card.name} is worth it for most people who spend in its bonus categories. There's no cost to hold it.`
        : `The ${card.name} has a $${card.annualFee} annual fee. To break even, you'd need to earn at least that much in rewards value annually. ${card.signupBonus ? `The ${card.signupBonus} signup bonus alone can offset the fee in year one.` : "Consider your spending patterns to determine if the rewards outweigh the fee."}`,
    },
    {
      question: `What credit score do I need for the ${card.name}?`,
      answer: `The ${card.name} generally requires a credit score of ${card.creditScoreMin}+. This falls in the ${card.creditScoreMin >= 740 ? "excellent" : card.creditScoreMin >= 670 ? "good to very good" : card.creditScoreMin >= 580 ? "fair to good" : "fair or below"} range. Other factors like income and existing debt also affect approval.`,
    },
    {
      question: `Does the ${card.name} have a signup bonus?`,
      answer: card.signupBonus
        ? `Yes — the ${card.name} currently offers ${card.signupBonus}${card.signupBonusValue ? ` (valued at ${card.signupBonusValue})` : ""} after spending $${card.signupBonusSpend?.toLocaleString()} in the first ${card.signupBonusPeriod} months.`
        : `The ${card.name} does not currently offer a signup bonus. However, card offers change frequently — check back for updates.`,
    },
  ];

  return (
    <>
      <JsonLd data={productSchema} />
      <FAQSchema faqs={faqs} />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Card Reviews", href: "/cards" },
            { name: card.name, href: `/cards/${slug}` },
          ]}
        />

        {/* Header */}
        <header className="mb-8 border-b border-ink-faint pb-8">
          <p className="font-data text-xs font-medium uppercase tracking-widest text-brand">
            {card.issuer} &middot; {card.network}
          </p>
          <h1 className="mt-2 font-heading text-3xl font-extrabold text-ink sm:text-4xl">
            {card.name}
          </h1>

          {/* Key stats grid */}
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-lg border border-ink-faint bg-white p-4">
              <p className="text-xs text-ink-lighter">Annual Fee</p>
              <p className="font-data text-xl font-bold text-ink">
                {card.annualFee === 0 ? "$0" : `$${card.annualFee}`}
              </p>
            </div>
            <div className="rounded-lg border border-ink-faint bg-white p-4">
              <p className="text-xs text-ink-lighter">APR</p>
              <p className="font-data text-xl font-bold text-ink">
                {card.aprMin}%–{card.aprMax}%
              </p>
            </div>
            <div className="rounded-lg border border-ink-faint bg-white p-4">
              <p className="text-xs text-ink-lighter">Rewards</p>
              <p className="text-sm font-bold text-ink">{card.rewardsRate}</p>
            </div>
            <div className="rounded-lg border border-ink-faint bg-white p-4">
              <p className="text-xs text-ink-lighter">Min. Score</p>
              <p className="font-data text-xl font-bold text-ink">
                {card.creditScoreMin}+
              </p>
            </div>
          </div>

          {/* Signup bonus banner */}
          {card.signupBonus && (
            <div className="mt-4 rounded-lg bg-brand-light p-4">
              <p className="font-heading text-sm font-bold text-brand-dark">
                Signup Bonus: {card.signupBonus}
                {card.signupBonusValue && ` (worth ${card.signupBonusValue})`}
              </p>
              {card.signupBonusSpend && (
                <p className="mt-1 text-sm text-ink-light">
                  Spend ${card.signupBonusSpend.toLocaleString()} in the first{" "}
                  {card.signupBonusPeriod} months
                </p>
              )}
            </div>
          )}

          {/* CTA */}
          <div className="mt-6">
            <a
              href={card.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block rounded-lg bg-brand px-8 py-3 font-heading text-base font-bold text-white transition-colors hover:bg-brand-dark"
            >
              Apply for {card.name.split(" ").slice(0, 3).join(" ")}
            </a>
          </div>
        </header>

        {/* Card details */}
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {/* Bonus categories */}
            {card.bonusCategories.length > 0 && (
              <section className="mb-8">
                <h2 className="mb-3 font-heading text-xl font-bold text-ink">
                  Bonus Rewards Categories
                </h2>
                <div className="space-y-2">
                  {card.bonusCategories.map((bc) => (
                    <div
                      key={bc.category}
                      className="flex items-center justify-between rounded-lg border border-ink-faint bg-white px-4 py-3"
                    >
                      <span className="text-sm text-ink">{bc.category}</span>
                      <span className="font-data text-sm font-bold text-brand">
                        {bc.rate}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Key features */}
            <section className="mb-8">
              <h2 className="mb-3 font-heading text-xl font-bold text-ink">
                Key Features
              </h2>
              <ul className="space-y-2">
                {card.keyFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-ink-light">
                    <span className="mt-1 text-brand">&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            {/* Intro APR */}
            {(card.introAprPurchase || card.introAprBalance) && (
              <section className="mb-8">
                <h2 className="mb-3 font-heading text-xl font-bold text-ink">
                  Intro APR Offers
                </h2>
                <div className="space-y-2">
                  {card.introAprPurchase && (
                    <div className="rounded-lg border border-ink-faint bg-white px-4 py-3">
                      <p className="text-xs text-ink-lighter">Purchases</p>
                      <p className="font-data text-sm font-semibold text-ink">
                        {card.introAprPurchase}
                      </p>
                    </div>
                  )}
                  {card.introAprBalance && (
                    <div className="rounded-lg border border-ink-faint bg-white px-4 py-3">
                      <p className="text-xs text-ink-lighter">
                        Balance Transfers
                      </p>
                      <p className="font-data text-sm font-semibold text-ink">
                        {card.introAprBalance}
                      </p>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* FAQ */}
            <section className="mb-8">
              <h2 className="mb-4 font-heading text-xl font-bold text-ink">
                Frequently Asked Questions
              </h2>
              <FAQAccordion faqs={faqs} />
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick facts */}
            <div className="rounded-lg border border-ink-faint bg-white p-5">
              <h3 className="mb-3 font-heading text-sm font-bold text-ink">
                Card Details
              </h3>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-ink-lighter">Issuer</dt>
                  <dd className="font-medium text-ink">{card.issuer}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-ink-lighter">Network</dt>
                  <dd className="font-medium text-ink">{card.network}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-ink-lighter">Foreign Txn Fee</dt>
                  <dd className="font-medium text-ink">
                    {card.foreignTransactionFee ? "3%" : "None"}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-ink-lighter">Rewards Type</dt>
                  <dd className="font-medium text-ink capitalize">
                    {card.rewardsType}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-ink-lighter">Score Range</dt>
                  <dd className="font-data font-medium text-ink">
                    {card.creditScoreMin}–{card.creditScoreMax}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Categories */}
            <div className="rounded-lg border border-ink-faint bg-white p-5">
              <h3 className="mb-3 font-heading text-sm font-bold text-ink">
                Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {card.categories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/best/${cat}`}
                    className="rounded-full border border-ink-faint px-2.5 py-0.5 text-xs text-ink-light hover:border-brand hover:text-brand"
                  >
                    {cat.replace(/-/g, " ")}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <AuthorByline
          name={reviewer.name}
          slug={reviewer.slug}
          credentials={reviewer.credentials}
          reviewDate={new Date().toISOString().split("T")[0]}
        />

        <AffiliateDisclosure />

        {/* Related cards */}
        {relatedCards.length > 0 && (
          <section className="mt-12 border-t border-ink-faint pt-8">
            <h2 className="mb-4 font-heading text-lg font-bold text-ink">
              Similar Cards
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {relatedCards.map((rc) => (
                <Link
                  key={rc.slug}
                  href={`/cards/${rc.slug}`}
                  className="rounded-lg border border-ink-faint bg-white p-4 transition-all hover:border-brand/40 hover:shadow-md"
                >
                  <h3 className="font-heading text-sm font-bold text-ink">
                    {rc.name}
                  </h3>
                  <div className="mt-1 flex gap-3 text-xs text-ink-light">
                    <span className="font-data">
                      {rc.annualFee === 0 ? "$0 fee" : `$${rc.annualFee}/yr`}
                    </span>
                    <span>&middot;</span>
                    <span>{rc.rewardsRate}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
