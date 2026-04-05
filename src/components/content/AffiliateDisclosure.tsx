import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

export function AffiliateDisclosure() {
  return (
    <div className="mt-8 rounded-lg border border-ink-faint bg-surface-dark p-4 text-xs text-ink-light">
      <p className="mb-1 font-heading font-semibold text-ink">
        Advertiser Disclosure
      </p>
      <p>
        {siteConfig.name} is a {siteConfig.voice.companyDescriptor}. We may earn
        a commission when you apply for credit cards through links on our site.
        This does not affect our ratings or the order cards appear in our
        editorial recommendations.{" "}
        <Link
          href="/about/editorial-policy"
          className="text-brand underline"
        >
          Full disclosure
        </Link>
      </p>
    </div>
  );
}
