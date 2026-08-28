import type { Metadata } from "next";
import { Boldonse, Reddit_Mono, STIX_Two_Text } from "next/font/google";
import "./globals.css";

const display = Boldonse({ subsets: ["latin"], weight: ["400"], variable: "--font-display", display: "swap" });
const body = STIX_Two_Text({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body", display: "swap" });
const mono = Reddit_Mono({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://cardsorted.com"),
  title: "CardSorted.com — Domain available for acquisition",
  description: "CardSorted.com is available for acquisition: a memorable .com for card comparison, rewards, wallet or consumer-finance products.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "CardSorted.com — Domain available for acquisition",
    description: "A crisp .com for a card-comparison product, rewards optimiser, wallet app or consumer-finance brand.",
    url: "/",
    siteName: "CardSorted.com",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
