import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { SITE_NAME, siteConfig } from "@/lib/site.config";

export const metadata: Metadata = createMetadata({
  title: "About Us",
  description: `${SITE_NAME} is an independent credit card comparison desk published by Two Cores Operations Ltd. Who we are, what we publish, and how we make money.`,
  path: "/about",
});

const linkClass =
  "text-accent underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-deep";

export default function AboutPage() {
  const sections = [
    {
      kicker: "FOLIO 01",
      title: "Who publishes this",
      body: (
        <>
          <p>
            {siteConfig.name} is an independent card-comparison desk published
            by Two Cores Operations Ltd, a company registered in England and
            Wales. The desk covers the United States credit card market, and
            everything it prints is written for American cardholders.
          </p>
          <p>
            We are a publisher, not a lender. {siteConfig.name} is not a bank,
            a card issuer, or a credit broker. We do not take applications, we
            do not make approval decisions, and we never see the details you
            submit to an issuer.
          </p>
        </>
      ),
    },
    {
      kicker: "FOLIO 02",
      title: "What the desk prints",
      body: (
        <>
          <p>
            The archive holds full reviews of 100 major US credit cards, each
            one read against its issuer agreement and re-verified monthly.
            Around the reviews we publish three kinds of pages:
          </p>
          <ul>
            <li>
              <strong>Category rankings</strong> for cash back, travel, no
              annual fee, balance transfer, business, student, secured, and
              the spending categories in between
            </li>
            <li>
              <strong>Credit score guides</strong> that filter every ranking to
              the cards you can realistically be approved for, from a 580
              score up to 780
            </li>
            <li>
              <strong>Head-to-head comparisons</strong> that put two cards side
              by side and call a winner
            </li>
          </ul>
          <p>
            Every recommendation is reviewed by our editorial team of
            credentialed financial professionals (a CFP, a CFA, and an AFC)
            before it runs.
          </p>
        </>
      ),
    },
    {
      kicker: "FOLIO 03",
      title: "How we make money",
      body: (
        <>
          <p>
            {siteConfig.name} earns affiliate compensation from credit card
            issuers and their partner networks. When you apply for a card
            through a link on this site and are approved, we may be paid for
            the referral. That compensation keeps the site free to read.
          </p>
          <p>
            It never buys a ranking. Compensation may affect how and where
            products appear, but it does not influence our editorial ratings,
            which cards we include, or what our reviews say. Cards are ordered
            by what they return per dollar of typical spending, not by what
            the referral pays.
          </p>
          <p>
            The full version of this promise, including how our ranking
            methodology works, is set out in our{" "}
            <Link href="/about/editorial-policy" className={linkClass}>
              editorial policy and advertiser disclosure
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
        <p className="masthead-label">THE&nbsp;MASTHEAD</p>
        <h1 className="mt-4 font-display text-5xl leading-[0.92] text-ink lg:text-7xl">
          About the desk
          <span className="text-accent">.</span>
        </h1>
        <p className="mt-6 max-w-3xl font-body text-xl leading-relaxed text-ink-mid">
          Who publishes {siteConfig.name}, what we cover, and how the lights
          stay on.
        </p>
      </header>

      {/* Folio sections */}
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

        {/* Contact */}
        <section className="grid grid-cols-12 gap-6 border-t-2 border-ink pt-12 lg:gap-10">
          <div className="col-span-12 md:col-span-3">
            <p className="masthead-label">CORRESPONDENCE</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-3xl leading-tight text-ink">
              Write to the desk<span className="text-accent">.</span>
            </h2>
            <p className="mt-4 font-body text-lg leading-relaxed text-ink-mid">
              Corrections, card suggestions, press requests, and partnership
              enquiries all go through the{" "}
              <Link href="/contact" className={linkClass}>
                letters page
              </Link>
              . Every letter is read.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}
