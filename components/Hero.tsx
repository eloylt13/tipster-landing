"use client";

import Link from "next/link";

const trustBadges = [
  "Mas claridad comercial",
  "Mas confianza al presentar",
  "Captacion mejor resuelta",
] as const;

const trustNote =
  "Pensada para tipsters que quieren presentar mejor su servicio sin recargar la pagina: una oferta mas clara, una imagen mas profesional y una forma mas ordenada de captar contactos.";

type HeroProps = {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    primaryHref: string;
    secondaryCta: string;
    highlights: readonly string[];
  };
};

export default function Hero({ content }: HeroProps) {
  return (
    <section className="grid gap-6 pt-12 pb-12 sm:pt-14 sm:pb-14 lg:grid-cols-[1.06fr_0.94fr] lg:items-center lg:gap-8">
      <div>
        <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-sky-100/90">
          {content.eyebrow}
        </span>
        <h1 className="mt-4 max-w-3xl text-[2.45rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-[3.5rem] lg:text-[4.4rem]">
          {content.title}
        </h1>
        <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-slate-100 sm:text-[1.05rem]">
          {content.description}
        </p>
        <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <Link
            href={content.primaryHref}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(180deg,_#ffffff,_#dfe8ff)] px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_34px_rgba(0,0,0,0.18)] transition hover:translate-y-[-1px] hover:shadow-[0_16px_36px_rgba(0,0,0,0.22)]"
          >
            {content.primaryCta}
          </Link>
          <Link
            href="#como-funciona"
            className="inline-flex min-h-12 items-center justify-center px-1 py-3 text-sm font-semibold text-slate-300 transition hover:text-white"
          >
            {content.secondaryCta}
          </Link>
        </div>
        <div className="mt-5">
          <div className="flex flex-wrap gap-2.5">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.045] px-3 py-1.5 text-[0.72rem] font-medium tracking-[0.01em] text-slate-100/92"
              >
                {badge}
              </span>
            ))}
          </div>
          <p className="mt-3 max-w-2xl text-xs leading-6 text-slate-300 sm:text-[0.83rem]">
            {trustNote}
          </p>
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/15 bg-[linear-gradient(180deg,_rgba(255,255,255,0.09),_rgba(255,255,255,0.045))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-sm sm:p-6">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-slate-100">
          Lo que gana tu landing
        </p>
        <ul className="mt-5 grid gap-3">
          {content.highlights.map((item) => (
            <li
              key={item}
              className="rounded-[1.1rem] border border-white/15 bg-black/26 px-4 py-4 text-sm leading-6 text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

