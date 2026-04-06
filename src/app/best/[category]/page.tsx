import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo/metadata";
import { SITE_NAME } from "@/lib/site.config";
import { getAllCategories, getCategoryBySlug } from "@/lib/data/categories";
import { getCardsByCategory } from "@/lib/data/cards";
import { getAllScoreRanges } from "@/lib/data/score-ranges";
import { CardTable } from "@/components/CardTable";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { getCategoryContent } from "@/lib/content/loader";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return getAllCategories().map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return createMetadata({
    title: cat.metaTitle,
    description: cat.metaDescription,
    path: `/best/${category}`,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const cards = getCardsByCategory(category);
  const scoreRanges = getAllScoreRanges();
  const allCategories = getAllCategories();
  const content = getCategoryContent(category);

  const fallbackFaqs = [
    {
      question: `What is the best ${cat.name.toLowerCase()} credit card right now?`,
      answer: cards.length > 0
        ? `Based on our analysis, the ${cards[0].name} is currently our top pick for ${cat.name.toLowerCase()} cards, offering ${cards[0].rewardsRate} with ${cards[0].annualFee === 0 ? "no annual fee" : `a $${cards[0].annualFee} annual fee`}.`
        : `We regularly update our rankings. Check back for the latest ${cat.name.toLowerCase()} card recommendations.`,
    },
    {
      question: `How many ${cat.name.toLowerCase()} credit cards does ${SITE_NAME} compare?`,
      answer: `We currently compare ${cards.length} ${cat.name.toLowerCase()} credit cards from major US issuers including Chase, American Express, Capital One, Citi, and Discover.`,
    },
    {
      question: `What credit score do I need for a ${cat.name.toLowerCase()} card?`,
      answer: `Credit score requirements vary by card. Some ${cat.name.toLowerCase()} cards accept scores as low as ${Math.min(...cards.map((c) => c.creditScoreMin))}, while premium options typically require 700+. Use our score filter to see cards you qualify for.`,
    },
  ];

  const faqs = content?.faqs ?? fallbackFaqs;

  // Two-letter monogram for the category (e.g. "CB" for cash-back)
  const monogram = cat.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <>
      <FAQSchema faqs={faqs} />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs
          items={[
            { name: "Best Cards", href: "/best/cash-back" },
            { name: cat.name, href: `/best/${category}` },
          ]}
        />

        {/* Magazine feature header */}
        <header className="border-y-2 border-ink py-10 lg:py-14">
          <div className="grid grid-cols-12 gap-6">
            {/* Left: monogram */}
            <div className="col-span-12 md:col-span-3">
              <p className="masthead-label">SECTION&nbsp;&middot;&nbsp;FILED</p>
              <p className="monumental mt-2 text-[120px] text-accent leading-[0.78] lg:text-[180px]">
                {monogram}
              </p>
            </div>
            {/* Middle: title */}
            <div className="col-span-12 md:col-span-6">
              <p className="masthead-label">
                {cards.length}&nbsp;CARDS&nbsp;&middot;&nbsp;
                {cat.name.toUpperCase()}&nbsp;DESK
              </p>
              <h1 className="mt-3 font-display text-5xl leading-[0.92] text-ink lg:text-7xl">
                The best <span className="ink-accent">{cat.name.toLowerCase()}</span> credit cards on file.
              </h1>
              <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-ink-mid">
                {cat.longDescription}
              </p>
            </div>
            {/* Right: dateline */}
            <div className="col-span-12 md:col-span-3">
              <p className="masthead-label">DATELINE</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-ink-mid">
                {new Date().toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <hr className="editorial-rule mt-4" />
              <p className="masthead-label mt-4">DESK&nbsp;EDITOR</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-ink-mid">
                The {SITE_NAME} Editors
              </p>
              <hr className="editorial-rule mt-4" />
              <p className="masthead-label mt-4">VOLUME</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-ink-mid">
                I &middot; Issue 01
              </p>
            </div>
          </div>
        </header>

        {/* Rich intro (AI-generated) — drop cap leads */}
        {content && (
          <section className="mt-12 grid grid-cols-12 gap-6 lg:gap-10">
            <div className="col-span-12 md:col-span-3">
              <p className="masthead-label">STANDFIRST</p>
              <p className="mt-2 font-display text-3xl leading-tight text-ink">
                A note from the desk.
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <div
                className="editorial-body"
                dangerouslySetInnerHTML={{ __html: content.intro }}
              />
            </div>
          </section>
        )}

        {/* Score filter — editorial numeric strip */}
        <section className="mt-16 panel-sunken border-y-2 border-ink py-10">
          <div className="relative px-6 lg:px-10">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-3">
                <p className="masthead-label">CROSS&nbsp;REFERENCE</p>
                <p className="mt-2 font-display text-3xl leading-tight text-ink">
                  By credit score<span className="text-accent">.</span>
                </p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <div className="grid grid-cols-3 gap-px bg-ink sm:grid-cols-4 lg:grid-cols-7">
                  {scoreRanges.map((sr) => (
                    <Link
                      key={sr.score}
                      href={`/best/${category}/${sr.score}`}
                      className="group block bg-surface-card px-3 py-4 text-center transition-colors hover:bg-accent"
                    >
                      <p className="monumental text-3xl text-ink transition-colors group-hover:text-surface lg:text-4xl">
                        {sr.score}
                      </p>
                      <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-ink-fade group-hover:text-surface">
                        {sr.tierLabel}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Card listing */}
        <section className="mt-16">
          <CardTable cards={cards} showScore title={`The ${cat.name} Register`} />
        </section>

        {/* Buying guide (AI-generated) */}
        {content && (
          <section className="mt-20 grid grid-cols-12 gap-6 border-t-2 border-ink pt-12 lg:gap-10">
            <div className="col-span-12 md:col-span-3">
              <p className="masthead-label">EDITORIAL&nbsp;BRIEF</p>
              <p className="mt-2 font-display text-3xl leading-tight text-ink">
                How to choose<span className="text-accent">.</span>
              </p>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink-mid">
                A field guide to picking the right {cat.name.toLowerCase()} card without paying the wrong tax.
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <div
                className="editorial-body"
                dangerouslySetInnerHTML={{ __html: content.buyingGuide }}
              />
            </div>
          </section>
        )}

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

        {/* Other categories — masthead grid */}
        <section className="mt-16 border-t-2 border-ink pt-12">
          <p className="masthead-label">OTHER&nbsp;DESKS</p>
          <h2 className="mt-2 font-display text-4xl leading-none text-ink lg:text-5xl">
            More from the file room<span className="text-accent">.</span>
          </h2>
          <ul className="mt-8 grid grid-cols-2 gap-px bg-rule sm:grid-cols-3 lg:grid-cols-4">
            {allCategories
              .filter((c) => c.slug !== category)
              .map((c, i) => (
                <li key={c.slug}>
                  <Link
                    href={`/best/${c.slug}`}
                    className="group block bg-surface-card p-5 transition-colors hover:bg-accent-light"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-wider text-ink-fade">
                      DESK&nbsp;{String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 font-display text-xl leading-tight text-ink group-hover:text-accent-deep">
                      {c.name}
                    </p>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      </div>
    </>
  );
}
