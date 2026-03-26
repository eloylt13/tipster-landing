import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { seo, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: seo.title,
    template: `%s | ${seo.siteName}`,
  },
  description: seo.description,
  applicationName: seo.siteName,
  alternates: {
    canonical: "/",
  },
  verification: seo.verification,
  openGraph: {
    type: "website",
    locale: seo.locale,
    siteName: seo.siteName,
    title: seo.title,
    description: seo.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
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
    <html lang="es" className="h-full">
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)] antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
