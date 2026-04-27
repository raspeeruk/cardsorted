import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Letter received — CardSorted",
  description: "Thanks for writing in. The editorial desk has it.",
};

export default function ContactThanks() {
  return (
    <main className="bg-surface">
      <section className="mx-auto max-w-3xl px-6 lg:px-10 py-24 text-center">
        <p className="masthead-label masthead-label-oxblood mb-4">
          DELIVERED &middot; TO THE EDITORIAL DESK
        </p>
        <h1 className="font-display text-5xl leading-[0.95] tracking-tight text-ink lg:text-7xl">
          Letter received<span className="text-accent">.</span>
        </h1>
        <p className="mt-6 max-w-xl mx-auto font-body text-lg text-ink-mid">
          Thanks. We respond to most correspondence within one business day.
        </p>
        <div className="mt-12">
          <Link
            href="/"
            className="inline-block bg-ink px-8 py-3 masthead-label text-white hover:bg-accent transition-colors"
          >
            Back to the issue
          </Link>
        </div>
      </section>
    </main>
  );
}
