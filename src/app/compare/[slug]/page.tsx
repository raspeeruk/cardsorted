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

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs
          items={[
            { name: "Compare", href: "/compare" },
            {
              name: `${cardA.name.split(" ").slice(0, 2).join(" ")} vs ${cardB.name.split(" ").slice(0, 2).join(" ")}`,
              href: `/compare/${slug}`,
            },
          ]}
        />

        {/* Duel header — A vs B with monumental letters */}
        <header className="border-y-2 border-ink py-10 lg:py-14">
          <div className="grid grid-cols-12 items-center gap-4">
            {/* Side A */}
            <div className="col-span-12 md:col-span-5">
              <p className="masthead-label masthead-label-accent">SIDE&nbsp;A</p>
              <p className="monumental mt-2 text-[120px] text-accent leading-[0.78] lg:text-[200px]">
                A
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-ink-fade">
                {cardA.issuer}&nbsp;&middot;&nbsp;{cardA.network}
              </p>
              <p className="mt-1 font-display text-2xl leading-tight text-ink lg:text-3xl">
                {cardA.name}
              </p>
            </div>
            {/* VS */}
            <div className="col-span-12 text-center md:col-span-2">
              <p className="masthead-label">VS.</p>
              <p className="monumental mt-2 text-7xl text-ink-fade lg:text-8xl">×</p>
            </div>
            {/* Side B */}
            <div className="col-span-12 text-right md:col-span-5">
              <p className="masthead-label masthead-label-oxblood">SIDE&nbsp;B</p>
              <p className="monumental mt-2 text-[120px] text-oxblood leading-[0.78] lg:text-[200px]">
                B
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-ink-fade">
                {cardB.issuer}&nbsp;&middot;&nbsp;{cardB.network}
              </p>
              <p className="mt-1 font-display text-2xl leading-tight text-ink lg:text-3xl">
                {cardB.name}
              </p>
            </div>
          </div>
          <hr className="editorial-rule mt-10" />
          <div className="mt-6 grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3">
              <p className="masthead-label">FILING</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-ink-mid">
                Head-to-Head&nbsp;&middot;&nbsp;Plastic&nbsp;Quarterly
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <p className="font-body text-lg leading-relaxed text-ink-mid">
                {content?.intro ??
                  `A detailed comparison of two popular ${cardA.categories[0].replace(/-/g, " ")} credit cards. See which one wins on rewards, fees, and approval odds.`}
              </p>
            </div>
          </div>
        </header>

        {/* Verdict pull-quote */}
        {content && (
          <section className="mt-16 grid grid-cols-12 gap-6 lg:gap-10">
            <div className="col-span-12 md:col-span-3">
              <p className="masthead-label masthead-label-oxblood">THE&nbsp;VERDICT</p>
              <p className="mt-2 font-display text-2xl leading-tight text-ink">
                Our ruling<span className="text-accent">.</span>
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <blockquote className="border-l-4 border-oxblood pl-6">
                <p className="font-display text-3xl leading-tight text-ink lg:text-4xl">
                  &ldquo;{content.verdict}&rdquo;
                </p>
              </blockquote>
            </div>
          </section>
        )}

        {/* Choose if — paper cards */}
        {content && (
          <section className="mt-16 grid gap-px bg-ink sm:grid-cols-2">
            <div className="bg-surface-card p-8">
              <p className="masthead-label masthead-label-accent">CHOOSE&nbsp;A</p>
              <h2 className="mt-2 font-display text-3xl leading-tight text-ink">
                Side A is for you if<span className="text-accent">…</span>
              </h2>
              <ul className="mt-6 space-y-3">
                {content.chooseAIf.map((r, i) => (
                  <li key={r} className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-body text-base leading-relaxed text-ink-mid">
                      {r}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface-card p-8">
              <p className="masthead-label masthead-label-oxblood">CHOOSE&nbsp;B</p>
              <h2 className="mt-2 font-display text-3xl leading-tight text-ink">
                Side B is for you if<span className="text-oxblood">…</span>
              </h2>
              <ul className="mt-6 space-y-3">
                {content.chooseBIf.map((r, i) => (
                  <li key={r} className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-oxblood">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-body text-base leading-relaxed text-ink-mid">
                      {r}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Comparison table */}
        <section className="mt-16">
          <p className="masthead-label">THE&nbsp;LEDGER</p>
          <h2 className="mt-2 font-display text-4xl leading-none text-ink lg:text-5xl">
            Side by side<span className="text-accent">.</span>
          </h2>
          <div className="mt-8">
            <ComparisonTable cardA={cardA} cardB={cardB} />
          </div>
        </section>

        {/* Key features comparison */}
        <section className="mt-16 grid gap-px bg-ink sm:grid-cols-2">
          <div className="bg-surface-card p-8">
            <p className="masthead-label masthead-label-accent">A&nbsp;HIGHLIGHTS</p>
            <h2 className="mt-2 font-display text-2xl leading-tight text-ink">
              {cardA.name}
            </h2>
            <ul className="mt-6 space-y-2">
              {cardA.keyFeatures.map((f) => (
                <li
                  key={f}
                  className="flex items-baseline gap-3 font-body text-base leading-relaxed text-ink-mid"
                >
                  <span className="font-mono text-accent">&mdash;</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface-card p-8">
            <p className="masthead-label masthead-label-oxblood">B&nbsp;HIGHLIGHTS</p>
            <h2 className="mt-2 font-display text-2xl leading-tight text-ink">
              {cardB.name}
            </h2>
            <ul className="mt-6 space-y-2">
              {cardB.keyFeatures.map((f) => (
                <li
                  key={f}
                  className="flex items-baseline gap-3 font-body text-base leading-relaxed text-ink-mid"
                >
                  <span className="font-mono text-oxblood">&mdash;</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-20 grid grid-cols-12 gap-6 border-t-2 border-ink pt-12 lg:gap-10">
          <div className="col-span-12 md:col-span-3">
            <p className="masthead-label">QUESTIONS&nbsp;&middot;&nbsp;ANSWERS</p>
            <p className="mt-2 font-display text-3xl leading-tight text-ink">
              Frequently filed<span className="text-accent">.</span>
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <FAQAccordion faqs={faqs} />
          </div>
        </section>

        <AffiliateDisclosure />
      </div>
    </>
  );
}
