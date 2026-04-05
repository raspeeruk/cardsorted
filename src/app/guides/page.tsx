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
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <p className="font-data text-xs font-medium uppercase tracking-widest text-brand">
          {guides.length} guides
        </p>
        <h1 className="mt-2 font-heading text-3xl font-extrabold text-ink sm:text-4xl">
          Credit Card Guides
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-ink-light">
          Expert-reviewed guides on credit scores, rewards strategies, and
          picking the right card for your goals.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="group rounded-lg border border-ink-faint bg-white p-5 transition-all hover:border-brand/40 hover:shadow-md"
          >
            <p className="text-xs text-ink-lighter">{guide.category}</p>
            <h2 className="mt-1 font-heading text-base font-bold text-ink group-hover:text-brand">
              {guide.title}
            </h2>
            <p className="mt-2 text-sm text-ink-light line-clamp-2">
              {guide.description}
            </p>
            <p className="mt-3 text-xs text-ink-lighter">
              {guide.readingTime} &middot; By {guide.author}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
