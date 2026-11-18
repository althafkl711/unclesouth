import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  themeColor: "#00209E",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://unclesouth.in"),
  title: {
    default: "Uncle South | Coming Soon",
    template: "%s | Uncle South",
  },
  description:
    "Uncle South — Coming Soon. Stay tuned and follow us on Instagram @unclesouthofficial for updates.",
  keywords: ["Uncle South", "unclesouth", "unclesouth.in", "Uncle South Official"],
  authors: [{ name: "Uncle South", url: "https://unclesouth.in" }],
  creator: "Uncle South",
  publisher: "Uncle South",
  openGraph: {
    title: "Uncle South | Coming Soon",
    description:
      "Uncle South — Coming Soon. Stay tuned and follow us on Instagram @unclesouthofficial for updates.",
    url: "https://unclesouth.in",
    siteName: "Uncle South",
    images: [
      {
        url: "/logo.png",
        width: 612,
        height: 408,
        alt: "Uncle South Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uncle South | Coming Soon",
    description:
      "Uncle South — Coming Soon. Stay tuned and follow us on Instagram @unclesouthofficial for updates.",
    images: ["/logo.png"],
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
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
