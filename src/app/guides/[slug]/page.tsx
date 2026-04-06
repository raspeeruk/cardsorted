import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo/metadata";
import { SITE_NAME, AUTHORS } from "@/lib/site.config";
import { guides, getGuideBySlug } from "@/lib/data/guides";
import { AuthorByline } from "@/components/content/AuthorByline";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { FAQAccordion } from "@/components/content/FAQAccordion";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return createMetadata({
    title: guide.title,
    description: guide.description,
    path: `/guides/${slug}`,
    type: "article",
    authorName: guide.author,
  });
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const reviewer = AUTHORS[0];

  return (
    <>
      {guide.faqs.length > 0 && <FAQSchema faqs={guide.faqs} />}

      <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs
          items={[
            { name: "Guides", href: "/guides" },
            { name: guide.title, href: `/guides/${slug}` },
          ]}
        />

        {/* Magazine feature header */}
        <header className="border-y-2 border-ink py-10 lg:py-14">
          <p className="masthead-label">
            FIELD&nbsp;GUIDE&nbsp;&middot;&nbsp;{guide.category.toUpperCase()}
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[0.92] text-ink lg:text-7xl">
            {guide.title}
          </h1>
          <p className="mt-6 max-w-3xl font-body text-xl leading-relaxed text-ink-mid">
            {guide.description}
          </p>
          <hr className="editorial-rule mt-8" />
          <div className="mt-4 flex flex-wrap items-baseline gap-6 font-mono text-[11px] uppercase tracking-widest text-ink-fade">
            <span>READING&nbsp;TIME&nbsp;&middot;&nbsp;{guide.readingTime}</span>
            <span>BY&nbsp;{guide.author.toUpperCase()}</span>
            <span>
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </header>

        {/* Guide body — numbered editorial sections */}
        <div className="mt-12 space-y-16">
          {guide.sections.map((section, i) => (
            <section
              key={i}
              className="grid grid-cols-12 gap-6 lg:gap-10"
            >
              <div className="col-span-12 md:col-span-3">
                <p className="masthead-label">
                  CHAPTER&nbsp;{String(i + 1).padStart(2, "0")}
                </p>
                <p className="monumental mt-2 text-7xl text-accent leading-none lg:text-8xl">
                  {String(i + 1).padStart(2, "0")}
                </p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h2 className="font-display text-4xl leading-tight text-ink lg:text-5xl">
                  {section.heading}
                </h2>
                <div
                  className="editorial-body mt-6"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </div>
            </section>
          ))}
        </div>

        {/* FAQ */}
        {guide.faqs.length > 0 && (
          <section className="mt-20 grid grid-cols-12 gap-6 border-t-2 border-ink pt-12 lg:gap-10">
            <div className="col-span-12 md:col-span-3">
              <p className="masthead-label">QUESTIONS&nbsp;&middot;&nbsp;ANSWERS</p>
              <p className="mt-2 font-display text-3xl leading-tight text-ink">
                Frequently filed<span className="text-accent">.</span>
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <FAQAccordion faqs={guide.faqs} />
            </div>
          </section>
        )}

        <AuthorByline
          name={reviewer.name}
          slug={reviewer.slug}
          credentials={reviewer.credentials}
          reviewDate={new Date().toISOString().split("T")[0]}
        />
      </article>
    </>
  );
}
