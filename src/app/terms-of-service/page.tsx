import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { SITE_NAME, siteConfig } from "@/lib/site.config";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description: `The terms for reading ${SITE_NAME}: informational content only, not financial advice, verify card terms with issuers, and our affiliate disclosure. Last updated 4 July 2026.`,
  path: "/terms-of-service",
});

const linkClass =
  "text-accent underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-deep";

export default function TermsOfServicePage() {
  const sections = [
    {
      kicker: "ARTICLE 01",
      title: "The agreement",
      body: (
        <>
          <p>
            These terms govern your use of {siteConfig.name} (cardsorted.com),
            published by Two Cores Operations Ltd, a company registered in
            England and Wales. By reading or otherwise using the site you
            accept them. If you do not accept them, the remedy is simple: do
            not use the site.
          </p>
        </>
      ),
    },
    {
      kicker: "ARTICLE 02",
      title: "Information, not advice",
      body: (
        <>
          <p>
            Everything published on {siteConfig.name} is editorial and
            informational content. It is not financial advice, legal advice,
            tax advice, or a personal recommendation of any kind. Our reviews
            and rankings describe cards in general terms; they cannot account
            for your income, your debts, or your circumstances.
          </p>
          <p>
            {siteConfig.name} is a credit card comparison service, not a
            bank, card issuer, or credit broker. Before acting on anything you
            read here, consider taking advice from a qualified professional
            who knows your situation.
          </p>
        </>
      ),
    },
    {
      kicker: "ARTICLE 03",
      title: "Card terms change",
      body: (
        <>
          <p>
            APRs, fees, rewards rates, and signup bonuses are sourced from
            publicly available issuer information and reviewed monthly. Issuers
            can and do change their terms at any time, without telling us.
          </p>
          <p>
            Always verify current terms directly with the card issuer before
            applying. Approval for any card is at the sole discretion of the
            issuer, and an application may result in a hard inquiry that
            affects your credit score.
          </p>
        </>
      ),
    },
    {
      kicker: "ARTICLE 04",
      title: "How the site is funded",
      body: (
        <>
          <p>
            {siteConfig.name} earns affiliate compensation. If you apply for a
            card through a link on this site and are approved, we may be paid
            by the issuer or its affiliate network. Compensation may affect
            how and where products appear, but it never affects our editorial
            ratings or the substance of our reviews. The full disclosure lives
            in our{" "}
            <Link href="/about/editorial-policy" className={linkClass}>
              editorial policy
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      kicker: "ARTICLE 05",
      title: "No warranty",
      body: (
        <>
          <p>
            The site and its content are provided &ldquo;as is&rdquo; and
            &ldquo;as available&rdquo;, without warranty of any kind, express
            or implied. We work hard at accuracy, but we do not warrant that
            the content is complete, current, or error-free, or that the site
            will be available without interruption.
          </p>
        </>
      ),
    },
    {
      kicker: "ARTICLE 06",
      title: "Limitation of liability",
      body: (
        <>
          <p>
            To the maximum extent permitted by law, Two Cores Operations Ltd
            and its editors are not liable for any loss or damage arising from
            your use of the site or your reliance on its content, including
            decisions to apply for, use, or cancel any financial product.
            Nothing in these terms excludes liability that cannot lawfully be
            excluded.
          </p>
        </>
      ),
    },
    {
      kicker: "ARTICLE 07",
      title: "Intellectual property",
      body: (
        <>
          <p>
            The content, design, and name of {siteConfig.name} belong to Two
            Cores Operations Ltd. You may read, link to, and quote the site
            for personal, non-commercial purposes. You may not republish,
            scrape, or reproduce substantial parts of it without our written
            permission. Card names and trademarks belong to their respective
            issuers, who do not sponsor or endorse this site.
          </p>
        </>
      ),
    },
    {
      kicker: "ARTICLE 08",
      title: "Law and changes",
      body: (
        <>
          <p>
            These terms are governed by the law of England and Wales, and the
            courts of England and Wales have exclusive jurisdiction over any
            dispute arising from them or from the site.
          </p>
          <p>
            We may revise these terms from time to time; the current version
            is always the one published on this page. These terms were last
            updated on 4 July 2026. Questions go through the{" "}
            <Link href="/contact" className={linkClass}>
              contact page
            </Link>
            .
          </p>
        </>
      ),
    },
  ];

  return (
    <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      {/* Magazine feature header */}
      <header className="border-y-2 border-ink py-10 lg:py-14">
        <p className="masthead-label">THE&nbsp;FINE&nbsp;PRINT</p>
        <h1 className="mt-4 font-display text-5xl leading-[0.92] text-ink lg:text-7xl">
          Terms of service
          <span className="text-accent">.</span>
        </h1>
        <p className="mt-6 max-w-3xl font-body text-xl leading-relaxed text-ink-mid">
          The small print of {siteConfig.name} itself: what this site is, what
          it is not, and where responsibility sits.
        </p>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-ink-fade">
          LAST&nbsp;UPDATED&nbsp;&middot;&nbsp;4&nbsp;JULY&nbsp;2026
        </p>
      </header>

      {/* Article sections */}
      <div className="mt-12 space-y-16">
        {sections.map((section, i) => (
          <section key={i} className="grid grid-cols-12 gap-6 lg:gap-10">
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
      </div>
    </article>
  );
}
