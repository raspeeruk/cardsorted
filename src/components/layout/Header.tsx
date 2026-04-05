import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

const NAV_ITEMS = [
  { label: "Best Cards", href: "/best/cash-back" },
  { label: "Card Reviews", href: "/cards" },
  { label: "Compare", href: "/compare" },
  { label: "Guides", href: "/guides" },
];

export function Header() {
  return (
    <header className="border-b border-ink-faint bg-surface">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="font-data text-xs font-semibold tracking-widest text-ink-lighter uppercase"
            aria-hidden="true"
          >
            //
          </span>
          <span className="font-heading text-xl font-extrabold text-ink">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-heading text-sm font-medium text-ink-light transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/about/editorial-policy"
            className="hidden text-xs text-ink-lighter underline sm:inline"
          >
            Advertiser Disclosure
          </Link>
        </div>
      </div>

      {/* Disclosure banner */}
      <div className="bg-surface-dark px-4 py-1.5 text-center text-xs text-ink-lighter">
        {siteConfig.name} may earn a commission when you apply through our
        links.{" "}
        <Link href="/about/editorial-policy" className="underline">
          How we make money
        </Link>
      </div>
    </header>
  );
}
