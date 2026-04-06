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
import { getCardContent } from "@/lib/content/loader";

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

  const content = getCardContent(slug);
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

  const fallbackFaqs = [
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

  const faqs = content?.faqs ?? fallbackFaqs;

  return (
    <>
      <JsonLd data={productSchema} />
      <FAQSchema faqs={faqs} />

      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <Breadcrumbs
          items={[
            { name: "Card Reviews", href: "/cards" },
            { name: card.name, href: `/cards/${slug}` },
          ]}
        />

        {/* Magazine feature header */}
        <header className="mt-8 border-b-2 border-ink pb-12">
          <p className="masthead-label masthead-label-accent">
            CARD&nbsp;REVIEW &middot; {card.issuer.toUpperCase()} &middot;{" "}
            {card.network.toUpperCase()}
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[0.92] text-ink lg:text-7xl">
            {card.name}
            <span className="text-accent">.</span>
          </h1>

          {/* Monumental APR feature */}
          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left: giant APR */}
            <div className="lg:col-span-7">
              <p className="masthead-label">THE&nbsp;NUMBER</p>
              <p className="mt-2 monumental text-[120px] text-ink lg:text-[200px]">
                {card.annualFee === 0 ? "$0" : `$${card.annualFee}`}
              </p>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-ink-fade">
                ANNUAL&nbsp;FEE &middot;{" "}
                {card.annualFee === 0
                  ? "FREE FOREVER"
                  : "BILLED ONCE PER YEAR"}
              </p>
            </div>

            {/* Right: data column */}
            <div className="lg:col-span-5">
              <dl className="border-t border-rule">
                <div className="border-b border-rule py-4">
                  <dt className="masthead-label">APR&nbsp;RANGE</dt>
                  <dd className="mt-1 font-display text-3xl text-ink">
                    {card.aprMin}–{card.aprMax}%
                  </dd>
                </div>
                <div className="border-b border-rule py-4">
                  <dt className="masthead-label">REWARDS</dt>
                  <dd className="mt-1 font-body text-base text-ink">
                    {card.rewardsRate}
                  </dd>
                </div>
                <div className="border-b border-rule py-4">
                  <dt className="masthead-label">MIN&nbsp;CREDIT&nbsp;SCORE</dt>
                  <dd className="mt-1 font-display text-3xl text-ink">
                    {card.creditScoreMin}
                  </dd>
                </div>
                {card.signupBonus && (
                  <div className="border-b border-rule py-4">
                    <dt className="masthead-label masthead-label-oxblood">
                      SIGNUP&nbsp;BONUS
                    </dt>
                    <dd className="mt-1 font-body text-base text-ink">
                      {card.signupBonus}
                      {card.signupBonusValue && (
                        <span className="text-ink-mid">
                          {" "}
                          &middot; worth {card.signupBonusValue}
                        </span>
                      )}
                    </dd>
                    {card.signupBonusSpend && (
                      <p className="mt-1 font-mono text-xs text-ink-fade">
                        SPEND&nbsp;${card.signupBonusSpend.toLocaleString()}
                        &nbsp;IN&nbsp;{card.signupBonusPeriod}
                        &nbsp;MO.
                      </p>
                    )}
                  </div>
                )}
              </dl>

              {/* CTA */}
              <a
                href={card.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-8 block w-full border-2 border-ink bg-ink py-5 text-center font-mono text-sm font-bold uppercase tracking-wider text-surface transition-colors hover:bg-accent hover:border-accent"
              >
                Apply at {card.issuer}&nbsp;&rarr;
              </a>
              <p className="mt-3 text-center font-mono text-[10px] text-ink-fade">
                APPLICATION&nbsp;OPENS&nbsp;ON&nbsp;{card.issuer.toUpperCase()}
                &apos;S&nbsp;SECURE&nbsp;SITE
              </p>
            </div>
          </div>
        </header>

        {/* Rich content (AI-generated) — magazine feature body */}
        {content && (
          <article className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Sidebar — Best For, Pros, Cons */}
            <aside className="lg:col-span-4 lg:order-2">
              {/* Best For */}
              <div className="border-t-2 border-oxblood pt-4">
                <p className="masthead-label masthead-label-oxblood">
                  BEST&nbsp;FOR
                </p>
                <p className="mt-2 font-body text-base leading-snug text-ink">
                  {content.bestFor}
                </p>
              </div>

              {/* Pros */}
              <div className="mt-10 border-t border-rule pt-4">
                <p className="masthead-label">IN&nbsp;FAVOUR</p>
                <ul className="mt-3 space-y-2.5">
                  {content.pros.map((pro) => (
                    <li
                      key={pro}
                      className="flex items-start gap-3 font-body text-sm leading-snug text-ink-mid"
                    >
                      <span className="font-mono text-xs text-accent">+</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="mt-8 border-t border-rule pt-4">
                <p className="masthead-label">AGAINST</p>
                <ul className="mt-3 space-y-2.5">
                  {content.cons.map((con) => (
                    <li
                      key={con}
                      className="flex items-start gap-3 font-body text-sm leading-snug text-ink-mid"
                    >
                      <span className="font-mono text-xs text-oxblood">
                        &minus;
                      </span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expert verdict pull-quote */}
              <div className="mt-10 border-t-2 border-ink pt-4">
                <p className="masthead-label masthead-label-accent">
                  EDITORS&apos;&nbsp;VERDICT
                </p>
                <p className="mt-3 font-display text-2xl leading-tight text-ink">
                  &ldquo;{content.expertVerdict}&rdquo;
                </p>
              </div>
            </aside>

            {/* Main editorial body */}
            <div className="lg:col-span-8 lg:order-1">
              {/* Standfirst */}
              <p className="font-body text-2xl leading-snug text-ink">
                {content.summary}
              </p>

              <hr className="editorial-rule mt-8 mb-8" />

              <div
                className="editorial-body"
                dangerouslySetInnerHTML={{ __html: content.body }}
              />
            </div>
          </article>
        )}

        {/* Detailed sections — bonus categories, key features, intro APR */}
        <section className="mt-20 border-t-2 border-ink pt-12">
          <p className="masthead-label masthead-label-accent">
            DEPARTMENT &middot; THE&nbsp;FINE&nbsp;PRINT
          </p>
          <h2 className="mt-2 font-display text-4xl leading-none text-ink lg:text-5xl">
            Everything else
            <br />
            on this card<span className="text-accent">.</span>
          </h2>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Bonus categories */}
            {card.bonusCategories.length > 0 && (
              <div className="lg:col-span-6">
                <p className="masthead-label">BONUS&nbsp;REWARDS</p>
                <h3 className="mt-2 font-display text-2xl text-ink">
                  Where the rates spike
                </h3>
                <ul className="mt-6">
                  {card.bonusCategories.map((bc) => (
                    <li
                      key={bc.category}
                      className="flex items-baseline justify-between gap-4 border-b border-rule py-4"
                    >
                      <span className="font-body text-base text-ink">
                        {bc.category}
                      </span>
                      <span className="font-display text-2xl text-accent">
                        {bc.rate}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Key features */}
            <div
              className={
                card.bonusCategories.length > 0
                  ? "lg:col-span-6"
                  : "lg:col-span-12"
              }
            >
              <p className="masthead-label">KEY&nbsp;FEATURES</p>
              <h3 className="mt-2 font-display text-2xl text-ink">
                What you actually get
              </h3>
              <ul className="mt-6 space-y-3">
                {card.keyFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 border-b border-rule pb-3 font-body text-base text-ink-mid"
                  >
                    <span className="font-mono text-xs text-accent">
                      &mdash;
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Intro APR */}
            {(card.introAprPurchase || card.introAprBalance) && (
              <div className="lg:col-span-6">
                <p className="masthead-label">INTRO&nbsp;APR&nbsp;OFFERS</p>
                <h3 className="mt-2 font-display text-2xl text-ink">
                  The honeymoon period
                </h3>
                <dl className="mt-6">
                  {card.introAprPurchase && (
                    <div className="border-b border-rule py-4">
                      <dt className="masthead-label">PURCHASES</dt>
                      <dd className="mt-1 font-display text-xl text-ink">
                        {card.introAprPurchase}
                      </dd>
                    </div>
                  )}
                  {card.introAprBalance && (
                    <div className="border-b border-rule py-4">
                      <dt className="masthead-label">BALANCE&nbsp;TRANSFERS</dt>
                      <dd className="mt-1 font-display text-xl text-ink">
                        {card.introAprBalance}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            )}

            {/* Factsheet */}
            <div className="lg:col-span-6">
              <p className="masthead-label">FACTSHEET</p>
              <h3 className="mt-2 font-display text-2xl text-ink">
                The card on paper
              </h3>
              <dl className="mt-6">
                {[
                  ["Issuer", card.issuer],
                  ["Network", card.network],
                  [
                    "Foreign Txn Fee",
                    card.foreignTransactionFee ? "3%" : "None",
                  ],
                  ["Rewards Type", card.rewardsType],
                  [
                    "Score Range",
                    `${card.creditScoreMin}–${card.creditScoreMax}`,
                  ],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-baseline justify-between border-b border-rule py-3"
                  >
                    <dt className="masthead-label">{label.toUpperCase()}</dt>
                    <dd className="font-mono text-sm text-ink">{value}</dd>
                  </div>
                ))}
              </dl>

              {/* Filed under */}
              <div className="mt-6">
                <p className="masthead-label">FILED&nbsp;UNDER</p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                  {card.categories.map((cat) => (
                    <Link
                      key={cat}
                      href={`/best/${cat}`}
                      className="font-mono text-xs uppercase tracking-wider text-ink-mid hover:text-accent"
                    >
                      &mdash;&nbsp;{cat.replace(/-/g, " ")}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-20 border-t-2 border-ink pt-12">
          <p className="masthead-label masthead-label-oxblood">
            DEPARTMENT &middot; QUESTIONS&nbsp;AT&nbsp;THE&nbsp;DESK
          </p>
          <h2 className="mt-2 font-display text-4xl leading-none text-ink lg:text-5xl">
            Frequently asked<span className="text-accent">.</span>
          </h2>
          <div className="mt-10">
            <FAQAccordion faqs={faqs} />
          </div>
        </section>

        <AuthorByline
          name={reviewer.name}
          slug={reviewer.slug}
          credentials={reviewer.credentials}
          reviewDate={new Date().toISOString().split("T")[0]}
        />

        <AffiliateDisclosure />

        {/* Related cards */}
        {relatedCards.length > 0 && (
          <section className="mt-20 border-t-2 border-ink pt-12">
            <p className="masthead-label">ALSO&nbsp;ON&nbsp;FILE</p>
            <h2 className="mt-2 font-display text-4xl leading-none text-ink lg:text-5xl">
              Cards from the same drawer
              <span className="text-accent">.</span>
            </h2>
            <ul className="mt-10 grid gap-px bg-rule sm:grid-cols-2">
              {relatedCards.map((rc, i) => (
                <li key={rc.slug}>
                  <Link
                    href={`/cards/${rc.slug}`}
                    className="group block bg-surface-card p-6 transition-colors hover:bg-accent-light"
                  >
                    <p className="font-mono text-xs text-ink-fade">
                      {String(i + 1).padStart(2, "0")} &middot;{" "}
                      {rc.issuer.toUpperCase()}
                    </p>
                    <h3 className="mt-2 font-display text-2xl leading-tight text-ink group-hover:text-accent-deep">
                      {rc.name}
                    </h3>
                    <p className="mt-3 font-body text-sm text-ink-mid">
                      <span className="font-mono text-xs text-ink-fade">
                        {rc.annualFee === 0
                          ? "$0/YR"
                          : `$${rc.annualFee}/YR`}
                      </span>{" "}
                      &middot; {rc.rewardsRate}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </>
  );
}
