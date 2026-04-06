import type { Metadata } from "next";
import { Boldonse, STIX_Two_Text, Reddit_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { GoogleAnalytics } from "@/lib/analytics/GoogleAnalytics";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/site.config";
import "./globals.css";

// Display: chunky condensed serif, magazine-cover feel
const boldonse = Boldonse({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

// Body: scholarly journal serif with old-style figures
const stix = STIX_Two_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

// Mono: distinctive monospace for data and labels
const redditMono = Reddit_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Compare Credit Cards by Score, Category & Rewards`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${boldonse.variable} ${stix.variable} ${redditMono.variable}`}
    >
      <body className="flex min-h-screen flex-col antialiased">
        <GoogleAnalytics />
        <OrganizationSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
