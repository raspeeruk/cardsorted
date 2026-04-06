import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { SITE_NAME } from "@/lib/site.config";
import { guides } from "@/lib/data/guides";

export const metadata: Metadata = createMetadata({
  title: "Credit Card Guides & Education",
  description: `Expert guides on credit scores, rewards optimization, balance transfers, and choosing the right card. Written and reviewed by certified financial professionals at ${SITE_NAME}.`,
  path: "/guides",
});

export default function GuidesIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      {/* Magazine feature header */}
      <header className="border-y-2 border-ink py-10 lg:py-14">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <p className="masthead-label">FIELD&nbsp;DESK</p>
            <p className="monumental mt-2 text-[140px] text-accent leading-[0.78] lg:text-[200px]">
              {String(guides.length).padStart(2, "0")}
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className="masthead-label">EDUCATION&nbsp;&middot;&nbsp;FIELD&nbsp;GUIDES</p>
            <h1 className="mt-3 font-display text-5xl leading-[0.92] text-ink lg:text-7xl">
              The plastic <span className="ink-accent">field guide</span>.
            </h1>
            <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-ink-mid">
              Expert-reviewed dossiers on credit scores, rewards strategy, and picking the right card for your goals — written by financial professionals, not affiliate copywriters.
            </p>
          </div>
        </div>
      </header>

      {/* Numbered editorial list */}
      <ul className="mt-16">
        {guides.map((guide, i) => (
          <li
            key={guide.slug}
            className="group border-b border-rule last:border-b-0"
          >
            <Link
              href={`/guides/${guide.slug}`}
              className="grid gap-6 py-8 lg:grid-cols-12 lg:gap-8 lg:py-10"
            >
              <div className="lg:col-span-2">
                <p className="masthead-label">CHAPTER</p>
                <p className="monumental text-7xl text-ink transition-colors group-hover:text-accent lg:text-8xl">
                  {String(i + 1).padStart(2, "0")}
                </p>
              </div>
              <div className="lg:col-span-7">
                <p className="masthead-label">{guide.category.toUpperCase()}</p>
                <h2 className="mt-2 font-display text-3xl leading-tight text-ink transition-colors group-hover:text-accent lg:text-4xl">
                  {guide.title}
                </h2>
                <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ink-mid">
                  {guide.description}
                </p>
              </div>
              <div className="lg:col-span-3 lg:text-right">
                <p className="masthead-label">BYLINE</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-ink-mid">
                  {guide.author}
                </p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-ink-fade">
                  {guide.readingTime}
                </p>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-accent group-hover:text-accent-deep">
                  READ&nbsp;&rarr;
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
