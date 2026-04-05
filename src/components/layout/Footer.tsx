import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

const FOOTER_LINKS = {
  "By Category": [
    { label: "Cash Back", href: "/best/cash-back" },
    { label: "Travel", href: "/best/travel" },
    { label: "No Annual Fee", href: "/best/no-annual-fee" },
    { label: "Balance Transfer", href: "/best/balance-transfer" },
    { label: "Business", href: "/best/business" },
    { label: "Student", href: "/best/student" },
    { label: "Secured", href: "/best/secured" },
  ],
  "By Spending": [
    { label: "Groceries", href: "/best/groceries" },
    { label: "Gas", href: "/best/gas" },
    { label: "Dining", href: "/best/dining" },
    { label: "Hotel", href: "/best/hotel" },
    { label: "Airline", href: "/best/airline" },
    { label: "Rewards", href: "/best/rewards" },
    { label: "Premium", href: "/best/premium" },
  ],
  Resources: [
    { label: "Card Reviews", href: "/cards" },
    { label: "Compare Cards", href: "/compare" },
    { label: "Guides", href: "/guides" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Editorial Policy", href: "/about/editorial-policy" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-ink-faint bg-ink">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-heading text-sm font-semibold text-surface-dark">
                {category}
              </h3>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-lighter transition-colors hover:text-brand"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-ink-light/20 pt-8">
          <div className="text-xs leading-relaxed text-ink-lighter">
            <p className="font-heading font-medium text-surface-dark">
              Important Disclosures
            </p>
            <p className="mt-2">
              {siteConfig.name} is a {siteConfig.voice.companyDescriptor}, not a
              bank or card issuer. We may receive compensation when you apply for
              credit card offers through links on our site. This compensation may
              affect how and where products appear, including the order in which
              they are listed. However, this does not influence our editorial
              content or card ratings.
            </p>
            <p className="mt-2">
              All credit card information is presented without warranty. Credit
              card details, APRs, fees, and rewards are sourced from publicly
              available issuer information and may change at any time. Always
              verify terms directly with the card issuer before applying.
            </p>
            <p className="mt-2">
              Credit score requirements are estimates based on publicly available
              data. Approval is at the sole discretion of the card issuer. A
              credit inquiry may affect your credit score.
            </p>
          </div>

          <p className="mt-6 text-xs text-ink-lighter/60">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
