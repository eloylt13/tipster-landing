"use client";

import Link from "next/link";

const disclaimer =
  "Landing orientada a presentar servicios de tipster con mas claridad, mejor jerarquia y una imagen comercial mas solida.";

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
    <footer className="pb-8 pt-10 sm:pb-10 sm:pt-12">
      <div className="border-t border-white/15 pt-6">
        <div className="flex flex-col gap-4 text-sm text-slate-100 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-slate-100">{content.brandName}</p>
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
        <p className="mt-4 max-w-3xl text-xs leading-5 text-slate-400">
          {disclaimer}
        </p>
      </div>
    </footer>
  );
}

