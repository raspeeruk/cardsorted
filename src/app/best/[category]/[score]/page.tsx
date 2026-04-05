import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo/metadata";
import { SITE_NAME } from "@/lib/site.config";
import { getAllCategories, getCategoryBySlug } from "@/lib/data/categories";
import { getCardsByCategoryAndScore } from "@/lib/data/cards";
import { getAllScoreRanges, getScoreRange } from "@/lib/data/score-ranges";
import { CardTable } from "@/components/CardTable";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { FAQAccordion } from "@/components/content/FAQAccordion";

interface Props {
  params: Promise<{ category: string; score: string }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  const scores = getAllScoreRanges();
  return categories.flatMap((cat) =>
    scores.map((sr) => ({ category: cat.slug, score: sr.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, score } = await params;
  const cat = getCategoryBySlug(category);
  const sr = getScoreRange(parseInt(score, 10));
  if (!cat || !sr) return {};
  return createMetadata({
    title: `Best ${cat.name} Cards for ${sr.score} Credit Score (${sr.tierLabel})`,
    description: `Compare the best ${cat.name.toLowerCase()} credit cards for a ${sr.score} credit score. Filtered by approval odds so you only see cards you can actually get. Updated monthly by ${SITE_NAME}.`,
    path: `/best/${category}/${score}`,
  });
}

export default async function CategoryScorePage({ params }: Props) {
  const { category, score } = await params;
  const cat = getCategoryBySlug(category);
  const scoreNum = parseInt(score, 10);
  const sr = getScoreRange(scoreNum);
  if (!cat || !sr) notFound();

  const cards = getCardsByCategoryAndScore(category, scoreNum);
  const allScores = getAllScoreRanges();

  const faqs = [
    {
      question: `What ${cat.name.toLowerCase()} cards can I get with a ${sr.score} credit score?`,
      answer: cards.length > 0
        ? `With a ${sr.score} credit score (${sr.tierLabel}), you have ${cards.length} ${cat.name.toLowerCase()} card options. Our top pick is the ${cards[0].name}, which offers ${cards[0].rewardsRate}.`
        : `With a ${sr.score} credit score, ${cat.name.toLowerCase()} card options may be limited. Consider building your score or looking at secured card options.`,
    },
    {
      question: `Is a ${sr.score} credit score good enough for a ${cat.name.toLowerCase()} card?`,
      answer: `A ${sr.score} score is considered ${sr.tierLabel.toLowerCase()}. ${sr.approvalLikelihood}. ${cards.length > 0 ? `We found ${cards.length} cards in this category that accept your score range.` : "You may want to consider building your score first."}`,
    },
    {
      question: `Will applying for a credit card hurt my ${sr.score} credit score?`,
      answer: `Most credit card applications result in a hard inquiry, which typically lowers your score by 5-10 points temporarily. The impact diminishes over 12 months and falls off your report after 2 years. Only apply for cards you're confident you'll be approved for.`,
    },
  ];

  return (
    <>
      <FAQSchema faqs={faqs} />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Best Cards", href: "/best/cash-back" },
            { name: cat.name, href: `/best/${category}` },
            { name: `${sr.score} Score`, href: `/best/${category}/${score}` },
          ]}
        />

        <header className="mb-8">
          <p className="font-data text-xs font-medium uppercase tracking-widest text-brand">
            {cat.icon} {sr.tierLabel} &middot; {cards.length} cards matched
          </p>
          <h1 className="mt-2 font-heading text-3xl font-extrabold text-ink sm:text-4xl">
            Best {cat.name} Cards for {sr.score} Credit Score
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-ink-light">
            {cards.length > 0
              ? `These ${cat.name.toLowerCase()} credit cards accept applicants with a ${sr.score} credit score (${sr.tierLabel}). Ranked by rewards value and approval likelihood.`
              : `No ${cat.name.toLowerCase()} cards currently match a ${sr.score} credit score. Try a different category or check our secured card options.`}
          </p>
        </header>

        {/* Score context box */}
        <div className="mb-8 rounded-lg border border-ink-faint bg-white p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-heading text-sm font-bold text-ink">
                Your Score: <span className="font-data text-brand">{sr.score}</span>
              </p>
              <p className="text-sm text-ink-light">
                {sr.tierLabel} &mdash; {sr.description}
              </p>
            </div>
            <p className="text-sm text-ink-light">{sr.approvalLikelihood}</p>
          </div>
        </div>

        {/* Card listing */}
        <CardTable
          cards={cards}
          showScore
          title={`${cat.name} Cards for ${sr.score}+ Score`}
        />

        {/* Other scores for this category */}
        <section className="mt-8 rounded-lg border border-ink-faint bg-surface-dark p-4">
          <p className="mb-2 font-heading text-sm font-semibold text-ink">
            Try a different score
          </p>
          <div className="flex flex-wrap gap-2">
            {allScores.map((s) => (
              <Link
                key={s.score}
                href={`/best/${category}/${s.score}`}
                className={`rounded-md border px-3 py-1.5 font-data text-xs font-medium transition-all ${
                  s.score === scoreNum
                    ? "border-brand bg-brand text-white"
                    : "border-ink-faint bg-white text-ink hover:border-brand hover:bg-brand-light"
                }`}
              >
                {s.score}
              </Link>
            ))}
          </div>
        </section>

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
