"use client";

import Script from "next/script";
import { siteConfig } from "@/lib/site.config";

/**
 * Google Analytics 4 integration.
 * Renders the gtag script only when analytics.gaId is set in site.config.ts.
 * Drop this component into layout.tsx — it handles its own conditional rendering.
 */
export function GoogleAnalytics() {
  const gaId = siteConfig.analytics.gaId;
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
