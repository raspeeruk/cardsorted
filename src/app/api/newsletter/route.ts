import { NextRequest, NextResponse } from "next/server";

const COLLECTOR_URL =
  "https://rogerson-signups.netlify.app/.netlify/functions/newsletter-subscribe";
const SITE = "cardsorted.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown): string {
  return String(value ?? "")
    .replace(/[\r\n\t]/g, " ")
    .trim()
    .slice(0, 200);
}

export async function POST(req: NextRequest) {
  let body: Record<string, string> = {};

  const contentType = req.headers.get("content-type") || "";
  try {
    if (contentType.includes("application/json")) {
      body = await req.json();
    } else {
      const form = await req.formData();
      body = Object.fromEntries(
        Array.from(form.entries()).map(([k, v]) => [k, String(v)])
      );
    }
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const email = (body.email || "").trim();
  const honeypot = (body.website || "").trim();
  const page = clean(body.page);
  const source = clean(body.source);

  // Bots fill the hidden field; pretend success and drop silently.
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(COLLECTOR_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Origin: `https://${SITE}` },
      body: JSON.stringify({
        email,
        domain: SITE,
        source: source || "footer",
        page: page || `https://${SITE}`,
      }),
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Could not subscribe right now" },
        { status: 502 }
      );
    }
  } catch {
    return NextResponse.json(
      { error: "Could not subscribe right now" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
