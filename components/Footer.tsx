"use client";

import Link from "next/link";

type FooterProps = {
  content: {
    brandName: string;
    emailLabel: string;
    email: string;
    links: readonly {
      label: string;
      href: string;
    }[];
  };
};

export default function Footer({ content }: FooterProps) {
  return (
    <footer className="pb-6 pt-8 sm:pb-8">
      <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-slate-200">{content.brandName}</p>
          <p className="mt-1">
            {content.emailLabel}: {content.email}
          </p>
        </div>
        <nav className="flex flex-wrap gap-4">
          {content.links.map((link) => (
            <Link key={link.label} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
