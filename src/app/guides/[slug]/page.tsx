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

      <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Guides", href: "/guides" },
            { name: guide.title, href: `/guides/${slug}` },
          ]}
        />

        <header className="mb-8">
          <p className="text-xs text-ink-lighter">
            {guide.category} &middot; {guide.readingTime}
          </p>
          <h1 className="mt-2 font-heading text-3xl font-extrabold text-ink sm:text-4xl">
            {guide.title}
          </h1>
          <p className="mt-3 text-lg text-ink-light">{guide.description}</p>
        </header>

        {/* Guide content rendered as sections */}
        <div className="max-w-none space-y-8">
          {guide.sections.map((section, i) => (
            <section key={i}>
              <h2 className="font-heading text-xl font-bold text-ink">
                {section.heading}
              </h2>
              <div
                className="mt-3 text-ink-light leading-relaxed [&_p]:mb-3 [&_ul]:ml-4 [&_ul]:list-disc [&_ul]:space-y-1 [&_ol]:ml-4 [&_ol]:list-decimal [&_ol]:space-y-1"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </section>
          ))}
        </div>

        {/* FAQ */}
        {guide.faqs.length > 0 && (
          <section className="mt-12">
            <h2 className="mb-4 font-heading text-xl font-bold text-ink">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={guide.faqs} />
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
