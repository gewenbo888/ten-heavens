import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { LangProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ten-heavens.psyverse.fun"),
  title: "Ten Heavens · 十重天 · The Layered Ontology of Value",
  description:
    "A bilingual map of the four worlds and ten heavens — Physical, Fictional, Real, On-chain — and the five mappings (RWA, ETF, Cross-chain, ABS, Anchoring) that connect them.",
  keywords: [
    "Ten Heavens",
    "十重天",
    "ontology of value",
    "RWA",
    "ETF",
    "cross-chain",
    "ABS",
    "blockchain",
    "zero-knowledge",
    "Psy",
    "Bitcoin",
    "Ethereum",
    "metaverse",
    "civilization stack",
    "Gewenbo",
    "价值本体论",
    "区块链",
    "元宇宙",
  ],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-CN": "/", "x-default": "/" },
  },
  openGraph: {
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Ten Heavens · 十重天" }],
    title: "Ten Heavens · 十重天",
    description:
      "Four worlds, ten heavens, five mappings. A bilingual map of the layered ontology of value — from physics to mathematics to fiction to fiat to the on-chain world.",
    url: "https://ten-heavens.psyverse.fun/",
    siteName: "Psyverse",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    images: ["/twitter-image.png"],
    card: "summary_large_image",
    title: "Ten Heavens · 十重天",
    description:
      "Four worlds, ten heavens, five mappings — the layered ontology of value, bilingual.",
  },
  robots: { index: true, follow: true },
  other: { "theme-color": "#08080a" },
};

export const viewport: Viewport = {
  themeColor: "#08080a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin+Condensed:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+SC:wght@300;400;500&family=Noto+Serif+SC:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Ten Heavens · 十重天",
              description:
                "A bilingual map of the layered ontology of value: four worlds, ten heavens, five mappings.",
              url: "https://ten-heavens.psyverse.fun/",
              inLanguage: ["en", "zh-CN"],
              author: { "@type": "Person", name: "Gewenbo", url: "https://psyverse.fun/" },
              publisher: { "@type": "Organization", name: "Psyverse", url: "https://psyverse.fun/" },
            }),
          }}
        />
      </head>
      <body>
        <LangProvider>{children}</LangProvider>
        <Script
          src="https://analytics-dashboard-two-blue.vercel.app/tracker.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
