import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

const NAV_ITEMS = [
  { label: "Cards", href: "/cards", num: "01" },
  { label: "Categories", href: "/best/cash-back", num: "02" },
  { label: "Compare", href: "/compare", num: "03" },
  { label: "Guides", href: "/guides", num: "04" },
];

export function Header() {
  return (
    <header className="border-b border-rule bg-surface">
      {/* Top masthead strip */}
      <div className="border-b border-rule">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 lg:px-10">
          <p className="masthead-label">
            Vol.&nbsp;I &middot; Issue&nbsp;01 &middot; The Quarterly of Plastic
          </p>
          <Link
            href="/about/editorial-policy"
            className="masthead-label hover:text-ink"
          >
            Advertiser&nbsp;Disclosure&nbsp;&rarr;
          </Link>
        </div>
      </div>

      {/* Main masthead row */}
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10 lg:py-8">
        <div className="flex items-end justify-between gap-8">
          <Link href="/" className="group block">
            <p className="masthead-label masthead-label-accent mb-2">
              EST. MMXXVI &middot; A FINANCIAL QUARTERLY
            </p>
            <h1 className="font-display text-4xl leading-none tracking-tight text-ink lg:text-5xl">
              {siteConfig.name}
              <span className="text-accent">.</span>
            </h1>
          </Link>

          <nav className="hidden items-end gap-7 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col items-start"
              >
                <span className="masthead-label group-hover:text-accent">
                  {item.num}
                </span>
                <span className="font-display text-base text-ink transition-colors group-hover:text-accent">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom rule */}
      <hr className="editorial-rule-double" />
    </header>
  );
}
