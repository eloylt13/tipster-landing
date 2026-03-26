import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Nexo Criterio | Landing premium para tipsters",
  description:
    "Landing comercial para tipsters centrada en claridad, jerarquia, consistencia visual y conversion.",
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
