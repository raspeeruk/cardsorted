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

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs
          items={[
            { name: "Best Cards", href: "/best/cash-back" },
            { name: cat.name, href: `/best/${category}` },
            { name: `${sr.score} Score`, href: `/best/${category}/${score}` },
          ]}
        />

        {/* Money page hero — score is the monument */}
        <header className="border-y-2 border-ink py-10 lg:py-14">
          <div className="grid grid-cols-12 gap-6">
            {/* Left: monumental score */}
            <div className="col-span-12 md:col-span-5">
              <p className="masthead-label">YOUR&nbsp;DIGIT&nbsp;&middot;&nbsp;FILED</p>
              <p className="monumental mt-2 text-[160px] text-accent leading-[0.78] lg:text-[260px]">
                {sr.score}
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-ink-mid">
                {sr.tierLabel}&nbsp;&middot;&nbsp;{cards.length}&nbsp;cards&nbsp;matched
              </p>
            </div>
            {/* Middle: title */}
            <div className="col-span-12 md:col-span-5">
              <p className="masthead-label">
                {cat.name.toUpperCase()}&nbsp;DESK&nbsp;&middot;&nbsp;APPROVAL&nbsp;ODDS
              </p>
              <h1 className="mt-3 font-display text-5xl leading-[0.92] text-ink lg:text-6xl">
                Best <span className="ink-accent">{cat.name.toLowerCase()}</span> cards for a {sr.score} score.
              </h1>
              <p className="mt-6 font-body text-lg leading-relaxed text-ink-mid">
                {cards.length > 0
                  ? `These ${cat.name.toLowerCase()} credit cards accept applicants in your range. Ranked by rewards value and the likelihood you actually get approved.`
                  : `No ${cat.name.toLowerCase()} cards currently match this score. Try a different desk or build your file with a secured option.`}
              </p>
            </div>
            {/* Right: tier dossier */}
            <div className="col-span-12 md:col-span-2">
              <p className="masthead-label">TIER</p>
              <p className="mt-1 font-display text-2xl leading-tight text-ink">
                {sr.tierLabel}
              </p>
              <hr className="editorial-rule mt-4" />
              <p className="masthead-label mt-4">ODDS</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-ink-mid">
                {sr.approvalLikelihood}
              </p>
              <hr className="editorial-rule mt-4" />
              <p className="masthead-label mt-4">DATELINE</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-ink-mid">
                {new Date().toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </header>

        {/* Score context — sunken paper panel */}
        <section className="mt-12 panel-sunken border-y-2 border-ink py-8">
          <div className="relative px-6 lg:px-10">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-3">
                <p className="masthead-label">DOSSIER</p>
                <p className="mt-2 font-display text-2xl leading-tight text-ink">
                  What {sr.score} means<span className="text-accent">.</span>
                </p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <p className="font-body text-base leading-relaxed text-ink-mid">
                  {sr.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Card listing */}
        <section className="mt-16">
          <CardTable
            cards={cards}
            showScore
            title={`${cat.name} for ${sr.score}+ Scores`}
          />
        </section>

        {/* Other scores — editorial numeric strip */}
        <section className="mt-16 border-y-2 border-ink py-10">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3">
              <p className="masthead-label">CROSS&nbsp;FILE</p>
              <p className="mt-2 font-display text-3xl leading-tight text-ink">
                Try another digit<span className="text-accent">.</span>
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <div className="grid grid-cols-3 gap-px bg-ink sm:grid-cols-4 lg:grid-cols-7">
                {allScores.map((s) => {
                  const isCurrent = s.score === scoreNum;
                  return (
                    <Link
                      key={s.score}
                      href={`/best/${category}/${s.score}`}
                      className={`group block px-3 py-4 text-center transition-colors ${
                        isCurrent
                          ? "bg-accent text-surface"
                          : "bg-surface-card hover:bg-accent"
                      }`}
                    >
                      <p
                        className={`monumental text-3xl leading-none lg:text-4xl ${
                          isCurrent
                            ? "text-surface"
                            : "text-ink group-hover:text-surface"
                        }`}
                      >
                        {s.score}
                      </p>
                      <p
                        className={`mt-1 font-mono text-[9px] uppercase tracking-wider ${
                          isCurrent
                            ? "text-surface"
                            : "text-ink-fade group-hover:text-surface"
                        }`}
                      >
                        {s.tierLabel}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
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
