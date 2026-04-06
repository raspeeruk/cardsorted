import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

export function AffiliateDisclosure() {
  return (
    <aside className="mt-12 panel-sunken border-t border-b border-rule">
      <div className="relative px-6 py-6">
        <p className="masthead-label masthead-label-oxblood">
          DISCLOSURE&nbsp;&middot;&nbsp;FOOTNOTE
        </p>
        <p className="mt-2 font-body text-base leading-relaxed text-ink-mid">
          {siteConfig.name} is a {siteConfig.voice.companyDescriptor}. We may
          earn a commission when you apply for credit cards through links on
          our site. This does not affect our ratings or the order in which
          cards appear in our editorial recommendations.{" "}
          <Link
            href="/about/editorial-policy"
            className="text-accent underline decoration-accent decoration-1 underline-offset-4 hover:text-accent-deep"
          >
            Read the full policy &rarr;
          </Link>
        </p>
      </div>
    </aside>
  );
}
