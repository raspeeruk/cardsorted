import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

const FOOTER_COLUMNS = [
  {
    label: "By Category",
    num: "I",
    links: [
      { label: "Cash Back", href: "/best/cash-back" },
      { label: "Travel", href: "/best/travel" },
      { label: "No Annual Fee", href: "/best/no-annual-fee" },
      { label: "Balance Transfer", href: "/best/balance-transfer" },
      { label: "Business", href: "/best/business" },
      { label: "Student", href: "/best/student" },
      { label: "Secured", href: "/best/secured" },
    ],
  },
  {
    label: "By Spending",
    num: "II",
    links: [
      { label: "Groceries", href: "/best/groceries" },
      { label: "Gas", href: "/best/gas" },
      { label: "Dining", href: "/best/dining" },
      { label: "Hotel", href: "/best/hotel" },
      { label: "Airline", href: "/best/airline" },
      { label: "Rewards", href: "/best/rewards" },
      { label: "Premium", href: "/best/premium" },
    ],
  },
  {
    label: "Departments",
    num: "III",
    links: [
      { label: "Card Reviews", href: "/cards" },
      { label: "Card vs Card", href: "/compare" },
      { label: "Field Guides", href: "/guides" },
    ],
  },
  {
    label: "Masthead",
    num: "IV",
    links: [
      { label: "About", href: "/about" },
      { label: "Editorial Policy", href: "/about/editorial-policy" },
      { label: "Privacy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms-of-service" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Big footer masthead */}
        <div className="border-b border-rule pt-16 pb-12">
          <p className="masthead-label masthead-label-oxblood mb-4">
            COLOPHON &middot; END&nbsp;OF&nbsp;ISSUE
          </p>
          <h2 className="font-display text-7xl leading-none tracking-tight text-ink lg:text-9xl">
            {siteConfig.name}
            <span className="text-accent">.</span>
          </h2>
          <p className="mt-6 max-w-2xl font-body text-lg text-ink-mid">
            A quarterly of plastic, published continuously since 2026 by an
            independent editorial desk in the public interest of better card
            choices.
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-12 md:grid-cols-4">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.label}>
              <p className="masthead-label mb-1">{col.num}</p>
              <h3 className="mb-4 font-display text-xl text-ink">
                {col.label}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-base text-ink-mid transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclosures */}
        <div className="border-t border-rule py-10">
          <p className="masthead-label masthead-label-oxblood mb-3">
            IMPORTANT&nbsp;DISCLOSURES
          </p>
          <div className="grid gap-4 font-body text-sm leading-relaxed text-ink-mid md:grid-cols-3">
            <p>
              {siteConfig.name} is a {siteConfig.voice.companyDescriptor}, not a
              bank or card issuer. We may receive compensation when you apply
              for credit card offers through links on our site. This may affect
              how and where products appear, but never our editorial ratings.
            </p>
            <p>
              All credit card information is presented without warranty. APRs,
              fees, and rewards are sourced from publicly available issuer
              information and may change at any time. Always verify terms
              directly with the card issuer before applying.
            </p>
            <p>
              Credit score requirements are estimates based on publicly
              available data. Approval is at the sole discretion of the issuer.
              A credit application may result in a hard inquiry that affects
              your credit score.
            </p>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="flex items-center justify-between border-t border-rule py-6">
          <p className="masthead-label">
            &copy; MMXXVI &middot; {siteConfig.name} &middot; All&nbsp;rights&nbsp;reserved
          </p>
          <p className="masthead-label">PRINTED ON THE INTERNET</p>
        </div>
      </div>
    </footer>
  );
}
