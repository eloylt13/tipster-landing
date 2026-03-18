"use client";

import Link from "next/link";

type HeroProps = {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    highlights: readonly string[];
  };
};

export default function Hero({ content }: HeroProps) {
  return (
    <section className="grid gap-6 py-10 sm:py-12 lg:grid-cols-[1.06fr_0.94fr] lg:items-center lg:gap-8">
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
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#contacto"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(180deg,_#ffffff,_#dfe8ff)] px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_34px_rgba(0,0,0,0.18)] transition hover:translate-y-[-1px] hover:shadow-[0_16px_36px_rgba(0,0,0,0.22)]"
          >
            {content.primaryCta}
          </Link>
          <Link
            href="#como-funciona"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.045] px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/25 hover:bg-white/[0.1] hover:text-white"
          >
            {content.secondaryCta}
          </Link>
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/15 bg-[linear-gradient(180deg,_rgba(255,255,255,0.09),_rgba(255,255,255,0.045))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-sm sm:p-6">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-slate-100">
          {content.eyebrow}
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

