import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";
import { SITE_NAME, siteConfig, AUTHORS } from "@/lib/site.config";

export const metadata: Metadata = createMetadata({
  title: "Editorial Policy & Advertiser Disclosure",
  description: `How ${SITE_NAME} makes money, how we rank credit cards, and our commitment to editorial independence. Full FTC-compliant advertiser disclosure.`,
  path: "/about/editorial-policy",
});

export default function EditorialPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="font-heading text-3xl font-extrabold text-ink sm:text-4xl">
          Editorial Policy & Advertiser Disclosure
        </h1>
        <p className="mt-3 text-lg text-ink-light">
          Transparency about how {siteConfig.name} operates, makes money, and
          maintains editorial independence.
        </p>
      </header>

      <div className="space-y-8 text-ink-light leading-relaxed">
        <section>
          <h2 className="font-heading text-xl font-bold text-ink">
            How We Make Money
          </h2>
          <p className="mt-3">
            {siteConfig.name} earns money through affiliate partnerships with
            credit card issuers. When you click an &ldquo;Apply Now&rdquo; link
            and are approved for a credit card, we may receive compensation from
            the card issuer or their affiliate network.
          </p>
          <p className="mt-3">
            This compensation helps us keep {siteConfig.name} free to use. We do
            not charge consumers for access to our card comparisons, reviews, or
            educational content.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-ink">
            Editorial Independence
          </h2>
          <p className="mt-3">
            Our editorial content is independent from our business
            relationships. Compensation from affiliates does not influence:
          </p>
          <ul className="mt-3 ml-4 list-disc space-y-1">
            <li>Which cards we include in our database</li>
            <li>How we rank cards within categories</li>
            <li>Our ratings or editorial opinions</li>
            <li>The content of our guides and educational articles</li>
          </ul>
          <p className="mt-3">
            However, compensation may affect which cards are shown in
            &ldquo;featured&rdquo; or &ldquo;sponsored&rdquo; placements, which
            are always clearly labeled.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-ink">
            How We Rank Cards
          </h2>
          <p className="mt-3">
            Cards within each category are ranked based on a combination of:
          </p>
          <ul className="mt-3 ml-4 list-disc space-y-1">
            <li>
              <strong>Rewards value</strong> — Total value of cash back, points,
              or miles earned on typical spending
            </li>
            <li>
              <strong>Annual fee breakeven</strong> — Whether benefits exceed
              costs
            </li>
            <li>
              <strong>Signup bonus value</strong> — Current welcome offer
              strength
            </li>
            <li>
              <strong>Approval accessibility</strong> — Credit score
              requirements and approval odds
            </li>
            <li>
              <strong>Consumer-friendly terms</strong> — No foreign transaction
              fees, no penalty APR, flexible redemption
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-ink">
            Our Editorial Team
          </h2>
          <p className="mt-3">
            All content on {siteConfig.name} is written or reviewed by
            credentialed financial professionals:
          </p>
          <div className="mt-4 space-y-4">
            {AUTHORS.map((author) => (
              <div
                key={author.slug}
                className="rounded-lg border border-ink-faint bg-white p-4"
              >
                <p className="font-heading font-bold text-ink">
                  {author.name}, {author.credentials}
                </p>
                <p className="text-sm text-ink-lighter">{author.title}</p>
                <p className="mt-2 text-sm">{author.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-ink">
            Data Accuracy
          </h2>
          <p className="mt-3">
            Credit card terms, APRs, rewards rates, and fees are sourced from
            publicly available issuer information. We review and update card
            details monthly. However, card terms can change at any time — always
            verify current terms directly with the card issuer before applying.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-ink">
            FTC Compliance
          </h2>
          <p className="mt-3">
            In accordance with FTC guidelines, {siteConfig.name} discloses
            material connections between our site and credit card issuers. Every
            page containing affiliate links includes a disclosure statement. This
            page serves as our comprehensive advertiser disclosure.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-ink">
            Contact Us
          </h2>
          <p className="mt-3">
            Questions about our editorial policy? Contact us at{" "}
            <a
              href={`mailto:${siteConfig.emails.support}`}
              className="text-brand underline"
            >
              {siteConfig.emails.support}
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
