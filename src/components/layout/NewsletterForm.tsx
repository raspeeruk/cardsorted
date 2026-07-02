"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const website =
      (form.elements.namedItem("website") as HTMLInputElement)?.value || "";

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Could not subscribe right now");
        setStatus("error");
        return;
      }
      setStatus("done");
    } catch {
      setError("Could not subscribe right now");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="font-body text-base text-ink" role="status">
        Noted on the subscription ledger. The next issue is yours.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@address.com"
          className="w-full bg-white border-2 border-ink px-4 py-3 font-body text-ink placeholder:text-ink-fade focus:outline-none focus:border-accent"
        />
        {/* Honeypot: humans never see this field. Leave it empty. */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px] h-px w-px overflow-hidden"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="shrink-0 bg-ink px-8 py-3 masthead-label text-white hover:bg-accent transition-colors disabled:opacity-60"
        >
          {status === "sending" ? "Filing..." : "Subscribe"}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-3 font-body text-sm text-accent" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
