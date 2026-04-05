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

  const faqs = [
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

  return (
    <>
      <FAQSchema faqs={faqs} />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Best Cards", href: "/best/cash-back" },
            { name: cat.name, href: `/best/${category}` },
          ]}
        />

        <header className="mb-8">
          <p className="font-data text-xs font-medium uppercase tracking-widest text-brand">
            {cat.icon} {cards.length} cards ranked
          </p>
          <h1 className="mt-2 font-heading text-3xl font-extrabold text-ink sm:text-4xl">
            Best {cat.name} Credit Cards
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-ink-light">
            {cat.longDescription}
          </p>
        </header>

        {/* Score filter links */}
        <div className="mb-8 rounded-lg border border-ink-faint bg-white p-4">
          <p className="mb-2 font-heading text-sm font-semibold text-ink">
            Filter by credit score
          </p>
          <div className="flex flex-wrap gap-2">
            {scoreRanges.map((sr) => (
              <Link
                key={sr.score}
                href={`/best/${category}/${sr.score}`}
                className="rounded-md border border-ink-faint px-3 py-1.5 font-data text-xs font-medium text-ink transition-all hover:border-brand hover:bg-brand-light"
              >
                {sr.score} ({sr.tierLabel})
              </Link>
            ))}
          </div>
        </div>

        {/* Card listing */}
        <CardTable cards={cards} showScore title={`All ${cat.name} Cards`} />

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="mb-4 font-heading text-xl font-bold text-ink">
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={faqs} />
        </section>

        <AffiliateDisclosure />

        {/* Other categories */}
        <section className="mt-12 border-t border-ink-faint pt-8">
          <h2 className="mb-4 font-heading text-lg font-bold text-ink">
            Other Categories
          </h2>
          <div className="flex flex-wrap gap-2">
            {allCategories
              .filter((c) => c.slug !== category)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/best/${c.slug}`}
                  className="rounded-full border border-ink-faint bg-white px-3 py-1 text-sm text-ink-light transition-colors hover:border-brand hover:text-brand"
                >
                  {c.icon} {c.name}
                </Link>
              ))}
          </div>
        </section>
      </div>
    </>
  );
}
