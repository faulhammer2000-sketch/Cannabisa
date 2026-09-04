import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

// ─── Fonts ──────────────────────────────────────────────────────────────────
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-arabic",
  display: "swap",
});

// ─── Metadata ───────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: [...siteConfig.seo.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["th_TH", "ar_SA"],
    url: siteConfig.seo.siteUrl,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.seo.siteUrl,
    languages: {
      en: `${siteConfig.seo.siteUrl}?lang=en`,
      th: `${siteConfig.seo.siteUrl}?lang=th`,
      ar: `${siteConfig.seo.siteUrl}?lang=ar`,
    },
  },
  other: {
    "og:locale:alternate": "th_TH",
    "og:locale:alternate:ar": "ar_SA",
  },
};

// ─── Root Layout ────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${cormorant.variable} ${manrope.variable} ${notoArabic.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#050505" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
