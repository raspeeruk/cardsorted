import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";
import { SITE_NAME, siteConfig, AUTHORS } from "@/lib/site.config";

export const metadata: Metadata = createMetadata({
  title: "Editorial Policy & Advertiser Disclosure",
  description: `How ${SITE_NAME} makes money, how we rank credit cards, and our commitment to editorial independence. Full FTC-compliant advertiser disclosure.`,
  path: "/about/editorial-policy",
});

export default function EditorialPolicyPage() {
  const sections = [
    {
      kicker: "FOOTNOTE 01",
      title: "How we make money",
      body: (
        <>
          <p>
            {siteConfig.name} earns money through affiliate partnerships with credit card issuers. When you click an &ldquo;Apply Now&rdquo; link and are approved for a credit card, we may receive compensation from the card issuer or their affiliate network.
          </p>
          <p>
            This compensation helps us keep {siteConfig.name} free to use. We do not charge consumers for access to our card comparisons, reviews, or educational content.
          </p>
        </>
      ),
    },
    {
      kicker: "FOOTNOTE 02",
      title: "Editorial independence",
      body: (
        <>
          <p>
            Our editorial content is independent from our business relationships. Compensation from affiliates does not influence:
          </p>
          <ul>
            <li>Which cards we include in our database</li>
            <li>How we rank cards within categories</li>
            <li>Our ratings or editorial opinions</li>
            <li>The content of our guides and educational articles</li>
          </ul>
          <p>
            However, compensation may affect which cards are shown in &ldquo;featured&rdquo; or &ldquo;sponsored&rdquo; placements, which are always clearly labeled.
          </p>
        </>
      ),
    },
    {
      kicker: "FOOTNOTE 03",
      title: "How we rank cards",
      body: (
        <>
          <p>Cards within each category are ranked based on a combination of:</p>
          <ul>
            <li>
              <strong>Rewards value</strong> — Total value of cash back, points, or miles earned on typical spending
            </li>
            <li>
              <strong>Annual fee breakeven</strong> — Whether benefits exceed costs
            </li>
            <li>
              <strong>Signup bonus value</strong> — Current welcome offer strength
            </li>
            <li>
              <strong>Approval accessibility</strong> — Credit score requirements and approval odds
            </li>
            <li>
              <strong>Consumer-friendly terms</strong> — No foreign transaction fees, no penalty APR, flexible redemption
            </li>
          </ul>
        </>
      ),
    },
    {
      kicker: "FOOTNOTE 04",
      title: "Data accuracy",
      body: (
        <>
          <p>
            Credit card terms, APRs, rewards rates, and fees are sourced from publicly available issuer information. We review and update card details monthly. However, card terms can change at any time — always verify current terms directly with the card issuer before applying.
          </p>
        </>
      ),
    },
    {
      kicker: "FOOTNOTE 05",
      title: "FTC compliance",
      body: (
        <>
          <p>
            In accordance with FTC guidelines, {siteConfig.name} discloses material connections between our site and credit card issuers. Every page containing affiliate links includes a disclosure statement. This page serves as our comprehensive advertiser disclosure.
          </p>
        </>
      ),
    },
  ];

  return (
    <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      {/* Magazine feature header */}
      <header className="border-y-2 border-ink py-10 lg:py-14">
        <p className="masthead-label">THE&nbsp;COLOPHON</p>
        <h1 className="mt-4 font-display text-5xl leading-[0.92] text-ink lg:text-7xl">
          Editorial policy
          <span className="text-accent">.</span>
        </h1>
        <p className="mt-6 max-w-3xl font-body text-xl leading-relaxed text-ink-mid">
          Transparency about how {siteConfig.name} operates, makes money, and maintains editorial independence.
        </p>
      </header>

      {/* Footnote sections */}
      <div className="mt-12 space-y-16">
        {sections.map((section, i) => (
          <section
            key={i}
            className="grid grid-cols-12 gap-6 lg:gap-10"
          >
            <div className="col-span-12 md:col-span-3">
              <p className="masthead-label">{section.kicker}</p>
              <p className="monumental mt-2 text-7xl text-accent leading-none lg:text-8xl">
                {String(i + 1).padStart(2, "0")}
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-display text-4xl leading-tight text-ink lg:text-5xl">
                {section.title}
              </h2>
              <div className="editorial-body mt-6">{section.body}</div>
            </div>
          </section>
        ))}

        {/* Editorial team */}
        <section className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 md:col-span-3">
            <p className="masthead-label">THE&nbsp;DESK</p>
            <p className="monumental mt-2 text-7xl text-accent leading-none lg:text-8xl">
              06
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-4xl leading-tight text-ink lg:text-5xl">
              Our editorial team
            </h2>
            <p className="mt-4 font-body text-lg leading-relaxed text-ink-mid">
              All content on {siteConfig.name} is written or reviewed by credentialed financial professionals.
            </p>
            <ul className="mt-8 grid gap-px bg-rule sm:grid-cols-2">
              {AUTHORS.map((author) => (
                <li key={author.slug} className="bg-surface-card p-6">
                  <p className="masthead-label">BYLINE</p>
                  <p className="mt-2 font-display text-2xl leading-tight text-ink">
                    {author.name}
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                    {author.credentials}
                  </p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-ink-fade">
                    {author.title}
                  </p>
                  <p className="mt-4 font-body text-base leading-relaxed text-ink-mid">
                    {author.bio}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="grid grid-cols-12 gap-6 border-t-2 border-ink pt-12 lg:gap-10">
          <div className="col-span-12 md:col-span-3">
            <p className="masthead-label">CORRESPONDENCE</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-3xl leading-tight text-ink">
              Questions? Write to the desk<span className="text-accent">.</span>
            </h2>
            <p className="mt-4 font-body text-lg leading-relaxed text-ink-mid">
              <a
                href={`mailto:${siteConfig.emails.support}`}
                className="text-accent underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-deep"
              >
                {siteConfig.emails.support}
              </a>
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}
