import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { SITE_NAME, siteConfig } from "@/lib/site.config";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: `How ${SITE_NAME} handles your data: what little we collect, the cookies involved, and your rights under UK GDPR and the California CCPA. Last updated 4 July 2026.`,
  path: "/privacy-policy",
});

const linkClass =
  "text-accent underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-deep";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      kicker: "CLAUSE 01",
      title: "Who we are",
      body: (
        <>
          <p>
            {siteConfig.name} (cardsorted.com) is published by Two Cores
            Operations Ltd, a company registered in England and Wales. Two
            Cores Operations Ltd is the data controller for the personal
            information described in this policy. The site is written for
            readers in the United States, so this policy covers both UK data
            protection law (which applies to us as the publisher) and
            California privacy law (which matters to many of our readers).
          </p>
        </>
      ),
    },
    {
      kicker: "CLAUSE 02",
      title: "What we collect",
      body: (
        <>
          <p>
            Very little, because there is very little to collect. There are no
            reader accounts on {siteConfig.name}. You cannot register, there
            are no profiles, and we never ask for financial details. Card
            applications happen on the issuer&rsquo;s own site, never on ours.
            The personal information we handle is limited to:
          </p>
          <ul>
            <li>
              <strong>Contact form letters.</strong> If you write to us
              through the contact page we receive the name, email address,
              subject, and message you type. The letter is delivered to our
              editorial inbox by email using Resend, an email delivery
              service, and we use it only to read and answer your
              correspondence.
            </li>
            <li>
              <strong>Newsletter signups.</strong> If you subscribe to the
              newsletter we collect your email address, along with a note of
              which site and form it came from. Signups are stored using
              Netlify Forms, a service of our hosting provider, and used only
              to send you the newsletter.
            </li>
            <li>
              <strong>Usage data.</strong> We use Google Analytics 4 to
              understand how the site is read: pages visited, approximate
              location, device and browser type, and how you arrived. This
              data is aggregated and does not identify you to us by name.
            </li>
          </ul>
          <p>
            We do not sell your personal information, and we do not buy lists,
            enrich profiles, or run third-party advertising on the site.
          </p>
        </>
      ),
    },
    {
      kicker: "CLAUSE 03",
      title: "Card links and affiliate tracking",
      body: (
        <>
          <p>
            {siteConfig.name} is funded by affiliate compensation. When you
            click an &ldquo;Apply Now&rdquo; or card link, you leave our site
            and travel to the issuer through an affiliate network, including
            CJ Affiliate. Those networks set their own cookies and tracking so
            that an approved application can be attributed to us.
          </p>
          <p>
            That tracking belongs to the networks and issuers, not to us. We
            never receive your application details, and the networks&rsquo;
            handling of your data is governed by their own privacy policies,
            which we encourage you to read before applying.
          </p>
        </>
      ),
    },
    {
      kicker: "CLAUSE 04",
      title: "Cookies",
      body: (
        <>
          <p>
            {siteConfig.name} itself does not require cookies to read.
            Cookies on or around the site come from two places:
          </p>
          <ul>
            <li>
              <strong>Google Analytics 4</strong> sets cookies in your browser
              to measure how the site is used
            </li>
            <li>
              <strong>Affiliate networks</strong> such as CJ Affiliate set
              cookies when you click a card link, to attribute any resulting
              application
            </li>
          </ul>
          <p>
            You can block or delete cookies in your browser settings, and
            Google offers a browser add-on that opts you out of Google
            Analytics entirely. The site remains fully readable with cookies
            disabled.
          </p>
        </>
      ),
    },
    {
      kicker: "CLAUSE 05",
      title: "Your rights",
      body: (
        <>
          <p>
            Because our publisher is a UK company, the UK General Data
            Protection Regulation applies to the personal data we hold. Under
            it you can ask us for a copy of the information we hold about you
            (in practice, your letters and newsletter signup), ask us to
            correct it, or ask us to delete it. You can also complain to the
            UK Information Commissioner&rsquo;s Office if you think we have
            handled your data badly.
          </p>
          <p>
            If you are a California resident, the California Consumer Privacy
            Act gives you equivalent rights: to know what personal information
            we have collected about you, to access it, and to have it deleted.
            We do not sell or share personal information as those terms are
            defined in the CCPA, so there is nothing to opt out of.
          </p>
          <p>
            To exercise any of these rights, write to us through the{" "}
            <Link href="/contact" className={linkClass}>
              contact page
            </Link>{" "}
            and we will respond promptly. Unsubscribing from the newsletter is
            simpler still: use the link in any issue, or ask us and we will
            remove you.
          </p>
        </>
      ),
    },
    {
      kicker: "CLAUSE 06",
      title: "Keeping and changing",
      body: (
        <>
          <p>
            Contact letters are kept only as long as needed to deal with your
            correspondence. Newsletter addresses are kept until you
            unsubscribe or ask to be removed. Analytics data is retained on
            the schedule set in Google Analytics.
          </p>
          <p>
            If this policy changes, the new version will be published here
            with a revised date. This version was last updated on 4 July 2026.
          </p>
        </>
      ),
    },
  ];

  return (
    <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      {/* Magazine feature header */}
      <header className="border-y-2 border-ink py-10 lg:py-14">
        <p className="masthead-label">THE&nbsp;RECORDS&nbsp;DESK</p>
        <h1 className="mt-4 font-display text-5xl leading-[0.92] text-ink lg:text-7xl">
          Privacy policy
          <span className="text-accent">.</span>
        </h1>
        <p className="mt-6 max-w-3xl font-body text-xl leading-relaxed text-ink-mid">
          What {siteConfig.name} knows about its readers (very little), where
          it goes, and the rights you hold over it.
        </p>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-ink-fade">
          LAST&nbsp;UPDATED&nbsp;&middot;&nbsp;4&nbsp;JULY&nbsp;2026
        </p>
      </header>

      {/* Clause sections */}
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
              Questions about your data
              <span className="text-accent">?</span>
            </h2>
            <p className="mt-4 font-body text-lg leading-relaxed text-ink-mid">
              Write to Two Cores Operations Ltd through the{" "}
              <Link href="/contact" className={linkClass}>
                contact page
              </Link>{" "}
              and mark your letter &ldquo;privacy&rdquo;.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}
