import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { SITE_NAME, siteConfig, AUTHORS } from "@/lib/site.config";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllCategories } from "@/lib/data/categories";
import { getTopCards } from "@/lib/data/cards";
import { CardTable } from "@/components/CardTable";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";

export const metadata: Metadata = createMetadata({
  title: "Compare Credit Cards by Score, Category & Rewards",
  description: `${SITE_NAME} ranks every major US credit card by your credit score and spending habits. Find the best cash back, travel, and rewards cards in seconds.`,
  path: "/",
});

const SCORE_QUICK_LINKS = [
  { score: 580, label: "580", tier: "Building" },
  { score: 650, label: "650", tier: "Fair" },
  { score: 700, label: "700", tier: "Good" },
  { score: 720, label: "720", tier: "Very Good" },
  { score: 750, label: "750", tier: "Excellent" },
];

export default function HomePage() {
  const categories = getAllCategories();
  const topCards = getTopCards(5);
  const cardCount = 100;

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: siteConfig.url,
    description: siteConfig.description,
  };

  return (
    <>
      <JsonLd data={websiteSchema} />

      {/* ============================================================ */}
      {/* HERO — asymmetric editorial split with monumental numerals    */}
      {/* ============================================================ */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 lg:px-10 lg:pt-24 lg:pb-32">
          <p className="masthead-label masthead-label-accent mb-8">
            ISSUE&nbsp;01 &middot; THE&nbsp;DEPARTMENT&nbsp;OF&nbsp;PLASTIC
          </p>

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left — editorial headline */}
            <div className="lg:col-span-7">
              <h1 className="font-display text-[56px] leading-[0.88] tracking-tight text-ink sm:text-[72px] lg:text-[112px]">
                The right card
                <br />
                for your
                <br />
                <span className="text-accent">exact</span> situation
                <span className="text-accent">.</span>
              </h1>

              <p className="mt-10 max-w-xl font-body text-xl leading-snug text-ink-mid">
                Stop scrolling NerdWallet&rsquo;s 200th &ldquo;best of&rdquo;
                list. {siteConfig.name} ranks every major US credit card
                against your credit score, your spending categories, and the
                rewards you actually use.
              </p>

              <div className="mt-12 flex items-center gap-8">
                <span className="masthead-label">By the numbers&nbsp;&rarr;</span>
                <div className="flex items-baseline gap-6 font-mono text-sm text-ink-mid">
                  <span>
                    <strong className="font-display text-2xl text-ink">
                      {cardCount}
                    </strong>
                    &nbsp;cards
                  </span>
                  <span className="h-4 w-px bg-rule" />
                  <span>
                    <strong className="font-display text-2xl text-ink">
                      {categories.length}
                    </strong>
                    &nbsp;categories
                  </span>
                  <span className="h-4 w-px bg-rule" />
                  <span>
                    <strong className="font-display text-2xl text-ink">3</strong>
                    &nbsp;CFP/CFA editors
                  </span>
                </div>
              </div>
            </div>

            {/* Right — Score Foundry: monumental score selector */}
            <div className="lg:col-span-5">
              <div className="border border-rule bg-surface-card">
                <div className="border-b border-rule px-6 py-4">
                  <p className="masthead-label masthead-label-oxblood">
                    THE&nbsp;SCORE&nbsp;FOUNDRY &mdash;&nbsp;ENTER&nbsp;YOUR&nbsp;DIGIT
                  </p>
                </div>
                <div className="px-6 py-8">
                  <ul className="space-y-1">
                    {SCORE_QUICK_LINKS.map((s, i) => (
                      <li key={s.score}>
                        <Link
                          href={`/best/cash-back/${s.score}`}
                          className="group flex items-baseline justify-between border-b border-rule py-3 last:border-b-0"
                        >
                          <div className="flex items-baseline gap-5">
                            <span className="font-mono text-[10px] text-ink-fade">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="monumental text-[64px] leading-none transition-colors group-hover:text-accent sm:text-[80px]">
                              {s.label}
                            </span>
                          </div>
                          <div className="text-right">
                            <p className="masthead-label">{s.tier}</p>
                            <p className="mt-1 font-mono text-[10px] text-ink-fade group-hover:text-accent">
                              VIEW&nbsp;CARDS&nbsp;&rarr;
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TOP PICKS — numbered editorial list                          */}
      {/* ============================================================ */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 lg:px-10">
          <div className="flex items-end justify-between gap-8 border-b border-rule pb-6">
            <div>
              <p className="masthead-label masthead-label-accent mb-3">
                DEPARTMENT&nbsp;01 &middot; THE&nbsp;TOP&nbsp;FIVE
              </p>
              <h2 className="font-display text-5xl leading-none text-ink lg:text-7xl">
                The cards we&rsquo;d
                <br />
                actually <span className="text-accent">apply for</span>.
              </h2>
            </div>
            <p className="hidden max-w-sm font-body text-base leading-snug text-ink-mid md:block">
              Five cards. Selected by our CFP and CFA editors after evaluating
              rewards yield, fee structure, approval odds, and the small print
              you don&rsquo;t read.
            </p>
          </div>

          <div className="mt-12">
            <CardTable cards={topCards} showScore />
          </div>

          <AffiliateDisclosure />
        </div>
      </section>

      {/* ============================================================ */}
      {/* CATEGORY GRID — magazine asymmetric                          */}
      {/* ============================================================ */}
      <section className="border-b border-rule panel-sunken">
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 lg:px-10">
          <div className="border-b border-rule pb-6">
            <p className="masthead-label masthead-label-oxblood mb-3">
              DEPARTMENT&nbsp;02 &middot; THE&nbsp;FILE&nbsp;CABINET
            </p>
            <h2 className="font-display text-5xl leading-none text-ink lg:text-7xl">
              Browse the <span className="text-accent">archive</span>.
            </h2>
            <p className="mt-4 max-w-2xl font-body text-lg text-ink-mid">
              {categories.length} categories. {cardCount} cards. Filed by how
              you actually spend money.
            </p>
          </div>

          {/* Asymmetric layout: 2 large featured + grid of smaller */}
          <div className="mt-12 grid gap-px bg-rule md:grid-cols-12">
            {/* Featured large 1 */}
            {categories[0] && (
              <Link
                href={`/best/${categories[0].slug}`}
                className="group bg-surface-card p-8 transition-colors hover:bg-accent-light md:col-span-7 md:row-span-2 md:p-12"
              >
                <p className="masthead-label">FEATURED &middot; 01</p>
                <h3 className="mt-4 font-display text-5xl leading-none text-ink transition-colors group-hover:text-accent-deep md:text-7xl">
                  {categories[0].name}
                </h3>
                <p className="mt-6 max-w-md font-body text-lg leading-snug text-ink-mid">
                  {categories[0].longDescription || categories[0].description}
                </p>
                <p className="mt-8 font-mono text-xs text-accent group-hover:text-accent-deep">
                  ENTER&nbsp;THE&nbsp;ARCHIVE&nbsp;&rarr;
                </p>
              </Link>
            )}

            {/* Featured medium */}
            {categories[1] && (
              <Link
                href={`/best/${categories[1].slug}`}
                className="group bg-surface-card p-8 transition-colors hover:bg-accent-light md:col-span-5"
              >
                <p className="masthead-label">FEATURED &middot; 02</p>
                <h3 className="mt-3 font-display text-4xl leading-none text-ink transition-colors group-hover:text-accent-deep">
                  {categories[1].name}
                </h3>
                <p className="mt-3 font-body text-base text-ink-mid">
                  {categories[1].description}
                </p>
              </Link>
            )}

            {/* Featured medium 2 */}
            {categories[2] && (
              <Link
                href={`/best/${categories[2].slug}`}
                className="group bg-surface-card p-8 transition-colors hover:bg-accent-light md:col-span-5"
              >
                <p className="masthead-label">FEATURED &middot; 03</p>
                <h3 className="mt-3 font-display text-4xl leading-none text-ink transition-colors group-hover:text-accent-deep">
                  {categories[2].name}
                </h3>
                <p className="mt-3 font-body text-base text-ink-mid">
                  {categories[2].description}
                </p>
              </Link>
            )}

            {/* Smaller grid items */}
            {categories.slice(3, 11).map((cat, i) => (
              <Link
                key={cat.slug}
                href={`/best/${cat.slug}`}
                className="group bg-surface-card p-6 transition-colors hover:bg-accent-light md:col-span-3"
              >
                <p className="font-mono text-[10px] text-ink-fade">
                  {String(i + 4).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-2xl leading-none text-ink transition-colors group-hover:text-accent-deep">
                  {cat.name}
                </h3>
              </Link>
            ))}
          </div>

          {categories.length > 11 && (
            <div className="mt-8 text-center">
              <Link
                href={`/best/${categories[0]?.slug ?? "cash-back"}`}
                className="font-mono text-xs text-accent hover:text-accent-deep"
              >
                BROWSE&nbsp;ALL&nbsp;{categories.length}&nbsp;CATEGORIES&nbsp;&rarr;
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/* LETTER FROM THE EDITORS                                      */}
      {/* ============================================================ */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="masthead-label masthead-label-accent">
                DEPARTMENT&nbsp;03
              </p>
              <h2 className="mt-3 font-display text-5xl leading-none text-ink lg:text-6xl">
                A note
                <br />
                from the
                <br />
                <span className="text-accent">editors</span>.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="border-l-2 border-oxblood pl-8">
                <p className="font-body text-xl leading-relaxed text-ink-mid">
                  Most credit card sites are SEO machines that exist to push
                  whatever pays the highest commission. We&rsquo;re a working
                  editorial desk &mdash; one CFP, one CFA, one AFC &mdash; and
                  we sort cards the same way a finance journalist would: by
                  what they actually return per dollar, not by what the
                  affiliate kickback looks like.
                </p>
                <p className="mt-6 font-body text-xl leading-relaxed text-ink-mid">
                  Every card on this site has been read against its issuer
                  agreement. Every APR has been verified this month. Every
                  signup bonus has been valued in actual dollars, not
                  marketing-speak. If a card doesn&rsquo;t hold up, we say
                  so &mdash; even when the commission is good.
                </p>
              </div>

              {/* Editor signatures */}
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {AUTHORS.map((author) => (
                  <div key={author.slug} className="border-t border-rule pt-4">
                    <p className="masthead-label">{author.credentials}</p>
                    <p className="mt-1 font-display text-xl text-ink">
                      {author.name}
                    </p>
                    <p className="mt-1 font-body text-sm text-ink-mid">
                      {author.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TRUST STRIP — newsroom standards                             */}
      {/* ============================================================ */}
      <section>
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 lg:px-10">
          <p className="masthead-label masthead-label-oxblood mb-3">
            EDITORIAL&nbsp;STANDARDS
          </p>
          <h2 className="font-display text-4xl leading-none text-ink lg:text-5xl">
            How we keep the
            <br />
            <span className="text-accent">scoring honest</span>.
          </h2>

          <hr className="editorial-rule mt-10" />

          <div className="grid gap-12 pt-10 md:grid-cols-4">
            {[
              {
                num: "01",
                title: "Independently reviewed",
                desc: "Every card is reviewed by a CFP, CFA, or AFC. Recommendations are not signed off until two editors agree.",
              },
              {
                num: "02",
                title: "Yield-ranked, not paid-ranked",
                desc: "Cards are ordered by rewards yield against typical spend. Affiliate commission has zero weight in our rankings.",
              },
              {
                num: "03",
                title: "Score-filtered always",
                desc: "We only show you cards you have a real chance of being approved for. No wasted hard inquiries.",
              },
              {
                num: "04",
                title: "Verified monthly",
                desc: "APRs, fees, and signup bonuses are re-checked the first week of every month. The dateline shows the last verification.",
              },
            ].map((item) => (
              <div key={item.num}>
                <p className="monumental text-6xl text-accent">{item.num}</p>
                <h3 className="mt-3 font-display text-2xl leading-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-base text-ink-mid">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
