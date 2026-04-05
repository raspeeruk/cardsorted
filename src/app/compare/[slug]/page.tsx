import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo/metadata";
import { SITE_NAME } from "@/lib/site.config";
import { getCardBySlug } from "@/lib/data/cards";
import { getComparisonPairs } from "@/lib/data/comparisons";
import { ComparisonTable } from "@/components/ComparisonTable";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { getComparisonContent } from "@/lib/content/loader";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getComparisonPairs().map((pair) => ({ slug: pair.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pair = getComparisonPairs().find((p) => p.slug === slug);
  if (!pair) return {};
  return createMetadata({
    title: `${pair.cardAName} vs ${pair.cardBName} — Which Is Better?`,
    description: `Compare ${pair.cardAName} vs ${pair.cardBName}: annual fees, APR, rewards, signup bonuses, and approval odds side by side. Expert comparison from ${SITE_NAME}.`,
    path: `/compare/${slug}`,
  });
}

export default async function ComparisonPage({ params }: Props) {
  const { slug } = await params;
  const pair = getComparisonPairs().find((p) => p.slug === slug);
  if (!pair) notFound();

  const cardA = getCardBySlug(pair.cardASlug);
  const cardB = getCardBySlug(pair.cardBSlug);
  if (!cardA || !cardB) notFound();

  const content = getComparisonContent(slug);

  const fallbackFaqs = [
    {
      question: `Is the ${cardA.name} or ${cardB.name} better?`,
      answer: `It depends on your priorities. The ${cardA.name} offers ${cardA.rewardsRate} with ${cardA.annualFee === 0 ? "no annual fee" : `a $${cardA.annualFee} annual fee`}, while the ${cardB.name} offers ${cardB.rewardsRate} with ${cardB.annualFee === 0 ? "no annual fee" : `a $${cardB.annualFee} annual fee`}. Choose based on your spending habits and whether the rewards offset any fees.`,
    },
    {
      question: `Which card has better rewards — ${cardA.name} or ${cardB.name}?`,
      answer: `The ${cardA.name} earns ${cardA.rewardsRate}, while the ${cardB.name} earns ${cardB.rewardsRate}. ${cardA.signupBonus ? `The ${cardA.name} also offers a ${cardA.signupBonus} signup bonus.` : ""} ${cardB.signupBonus ? `The ${cardB.name} offers a ${cardB.signupBonus} signup bonus.` : ""}`,
    },
    {
      question: `Which card is easier to get approved for?`,
      answer: `The ${cardA.name} generally requires a credit score of ${cardA.creditScoreMin}+, while the ${cardB.name} requires ${cardB.creditScoreMin}+. ${cardA.creditScoreMin < cardB.creditScoreMin ? `The ${cardA.name} may be easier to qualify for.` : cardB.creditScoreMin < cardA.creditScoreMin ? `The ${cardB.name} may be easier to qualify for.` : "Both cards have similar credit requirements."}`,
    },
  ];

  const faqs = content?.faqs ?? fallbackFaqs;

  return (
    <>
      <FAQSchema faqs={faqs} />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Compare", href: "/compare" },
            {
              name: `${cardA.name.split(" ").slice(0, 2).join(" ")} vs ${cardB.name.split(" ").slice(0, 2).join(" ")}`,
              href: `/compare/${slug}`,
            },
          ]}
        />

        <header className="mb-8">
          <p className="font-data text-xs font-medium uppercase tracking-widest text-brand">
            Head-to-head comparison
          </p>
          <h1 className="mt-2 font-heading text-3xl font-extrabold text-ink sm:text-4xl">
            {cardA.name} vs {cardB.name}
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-ink-light">
            {content?.intro ??
              `A detailed comparison of two popular ${cardA.categories[0].replace(/-/g, " ")} credit cards. See which one wins on rewards, fees, and approval odds.`}
          </p>
        </header>

        {/* Verdict + Choose If (AI-generated) */}
        {content && (
          <div className="mb-8 space-y-4">
            <div className="rounded-lg border-l-4 border-brand bg-white p-5">
              <p className="font-heading text-sm font-bold text-ink">Our Verdict</p>
              <p className="mt-1 text-ink-light">{content.verdict}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-ink-faint bg-white p-5">
                <h2 className="mb-3 font-heading text-sm font-bold text-ink">
                  Choose {cardA.name.split(" ").slice(0, 3).join(" ")} if you...
                </h2>
                <ul className="space-y-2">
                  {content.chooseAIf.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-ink-light">
                      <span className="mt-0.5 text-brand">&#8250;</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-ink-faint bg-white p-5">
                <h2 className="mb-3 font-heading text-sm font-bold text-ink">
                  Choose {cardB.name.split(" ").slice(0, 3).join(" ")} if you...
                </h2>
                <ul className="space-y-2">
                  {content.chooseBIf.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-ink-light">
                      <span className="mt-0.5 text-brand">&#8250;</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Comparison table */}
        <div className="rounded-lg border border-ink-faint bg-white p-6">
          <ComparisonTable cardA={cardA} cardB={cardB} />
        </div>

        {/* Key features comparison */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-ink-faint bg-white p-5">
            <h2 className="mb-3 font-heading text-lg font-bold text-ink">
              {cardA.name} Highlights
            </h2>
            <ul className="space-y-2">
              {cardA.keyFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-ink-light">
                  <span className="mt-0.5 text-brand">&#10003;</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-ink-faint bg-white p-5">
            <h2 className="mb-3 font-heading text-lg font-bold text-ink">
              {cardB.name} Highlights
            </h2>
            <ul className="space-y-2">
              {cardB.keyFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-ink-light">
                  <span className="mt-0.5 text-brand">&#10003;</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="mb-4 font-heading text-xl font-bold text-ink">
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={faqs} />
        </section>

        <AffiliateDisclosure />
      </div>
    </>
  );
}
