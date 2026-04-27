"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          topic: data.get("topic"),
          message: data.get("message"),
        }),
      });
      if (res.ok) {
        router.push("/contact/thanks");
      } else {
        const j = await res.json().catch(() => ({}));
        setError(j.error || "Something went wrong. Please try again.");
        setSubmitting(false);
      }
    } catch {
      setError("Network error. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <main className="bg-surface">
      <section className="mx-auto max-w-3xl px-6 lg:px-10 pt-16 pb-8">
        <p className="masthead-label masthead-label-oxblood mb-4">
          LETTERS &middot; TO THE EDITOR
        </p>
        <h1 className="font-display text-5xl leading-[0.95] tracking-tight text-ink lg:text-7xl">
          Write to us<span className="text-accent">.</span>
        </h1>
        <p className="mt-6 max-w-2xl font-body text-lg text-ink-mid">
          Card review correction? Editorial tip? Press request? Affiliate
          partnership? Send a letter — every one is read.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 lg:px-10 pb-24">
        <form
          onSubmit={handleSubmit}
          className="border-t border-rule pt-12 space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block masthead-label mb-2"
            >
              Your name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full bg-white border-2 border-ink px-4 py-3 font-body text-ink focus:border-accent focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block masthead-label mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full bg-white border-2 border-ink px-4 py-3 font-body text-ink focus:border-accent focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="topic" className="block masthead-label mb-2">
              Subject
            </label>
            <select
              id="topic"
              name="topic"
              className="w-full bg-white border-2 border-ink px-4 py-3 font-body text-ink focus:border-accent focus:outline-none"
            >
              <option value="general">General correspondence</option>
              <option value="correction">Card review correction</option>
              <option value="press">Press / media</option>
              <option value="partnership">Affiliate / partnership</option>
              <option value="suggestion">Card suggestion</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block masthead-label mb-2">
              Letter
            </label>
            <textarea
              id="message"
              name="message"
              rows={7}
              required
              className="w-full bg-white border-2 border-ink px-4 py-3 font-body text-ink focus:border-accent focus:outline-none"
            />
          </div>

          {error && (
            <p className="font-body text-sm text-accent">{error}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="bg-ink px-8 py-3 masthead-label text-white hover:bg-accent transition-colors disabled:opacity-60"
          >
            {submitting ? "Sending..." : "Post letter"}
          </button>
        </form>
      </section>
    </main>
  );
}
