import Link from "next/link";

interface AuthorBylineProps {
  name: string;
  slug: string;
  credentials: string;
  reviewDate: string;
}

export function AuthorByline({
  name,
  slug,
  credentials,
  reviewDate,
}: AuthorBylineProps) {
  return (
    <div className="mt-12 border-t-2 border-ink pt-8">
      <p className="masthead-label">REVIEWED&nbsp;&middot;&nbsp;FILED</p>
      <div className="mt-3 flex flex-wrap items-baseline gap-4">
        <p className="font-display text-2xl leading-tight text-ink">
          <Link
            href={`/authors/${slug}`}
            className="underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
          >
            {name}
          </Link>
        </p>
        <p className="font-mono text-[11px] uppercase tracking-widest text-ink-fade">
          {credentials}
        </p>
      </div>
      <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-ink-fade">
        LAST&nbsp;UPDATED&nbsp;&middot;&nbsp;
        <time dateTime={reviewDate}>
          {new Date(reviewDate).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </time>
      </p>
    </div>
  );
}
