import type { Metadata } from "next";
import { content } from "@/lib/content";

const GOOGLE_SITE_VERIFICATION = "6Cr92jGfY8D6cZX4sdEC1v1vECb_mgjBy8Jd9qoUfI4";
const FALLBACK_DOMAIN = content.brand.email.split("@")[1] ?? "nexocriterio.com";

function normalizeSiteUrl(rawUrl: string) {
  const trimmed = rawUrl.trim();

  if (!trimmed) {
    return null;
  }

  const prefixedUrl = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : trimmed.startsWith("localhost") || trimmed.startsWith("127.0.0.1")
      ? `http://${trimmed}`
      : `https://${trimmed}`;

  try {
    return new URL(prefixedUrl);
  } catch {
    return null;
  }
}

export function getSiteUrl() {
  const envCandidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_URL,
  ];

  for (const candidate of envCandidates) {
    if (!candidate) {
      continue;
    }

    const parsedUrl = normalizeSiteUrl(candidate);

    if (parsedUrl) {
      return new URL(parsedUrl.origin);
    }
  }

  return new URL(`https://${FALLBACK_DOMAIN}`);
}

export const siteUrl = getSiteUrl();

export const seo = {
  siteName: content.brand.name,
  locale: "es_ES",
  title: "Web para tipsters | Landing y pagina para tipsters",
  description:
    "Landing profesional para tipsters y web para canal de Telegram de tipster, pensada para presentar tu servicio y captar contactos con mas confianza.",
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
  },
} as const satisfies {
  siteName: string;
  locale: string;
  title: string;
  description: string;
  verification: NonNullable<Metadata["verification"]>;
};
