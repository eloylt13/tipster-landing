"use client";

import ContactForm from "@/components/ContactForm";
import Link from "next/link";

type QuizAnswers = {
  searchingFor: string;
  startingPoint: string;
  mainBlocker: string;
};

type CTAFinalProps = {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    secondaryHref: string;
    directContactTitle: string;
    directContactDescription: string;
    directContactHandle: string;
    directContactHref: string;
  };
  formContent: {
    eyebrow: string;
    title: string;
    description: string;
    labels: {
      searchingFor: string;
      startingPoint: string;
      mainBlocker: string;
      message: string;
    };
    placeholders: {
      searchingFor: string;
      startingPoint: string;
      mainBlocker: string;
      message: string;
    };
    button: string;
    note: string;
    email: string;
  };
  answers: QuizAnswers;
};

function TelegramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="#229ED9" />
      <path
        d="M17.47 6.78L5.94 11.22C5.15 11.54 5.16 11.98 5.8 12.18L8.76 13.1L15.61 8.78C15.93 8.58 16.22 8.69 15.98 8.9L10.43 13.91H10.42L10.43 13.92L10.23 16.9C10.52 16.9 10.65 16.77 10.82 16.61L12.26 15.21L15.25 17.42C15.8 17.72 16.19 17.56 16.33 16.91L18.29 7.67C18.5 6.87 17.97 6.51 17.47 6.78Z"
        fill="white"
      />
    </svg>
  );
}

export default function CTAFinal({ content, formContent, answers }: CTAFinalProps) {
  const summary = [
    { label: "Que quieres mejorar", value: answers.searchingFor },
    { label: "Momento del proyecto", value: answers.startingPoint },
    { label: "Bloqueo principal", value: answers.mainBlocker },
  ].filter((item) => item.value.trim().length > 0);

  const hasSummary = summary.length > 0;

  return (
    <section className="pt-12 pb-14 sm:pt-14 sm:pb-16">
      <div className="grid gap-5 rounded-[2rem] border border-white/15 bg-[linear-gradient(180deg,_rgba(255,255,255,0.1),_rgba(255,255,255,0.05))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-sm lg:grid-cols-[0.95fr_1.05fr] lg:p-6">
        <div className="flex flex-col justify-between gap-6">
          <div className="space-y-3">
            <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-sky-100/90">
              {content.eyebrow}
            </span>
            <h2 className="max-w-2xl text-[1.9rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-[2.3rem]">
              {content.title}
            </h2>
            <p className="max-w-xl text-sm leading-6 text-slate-100 sm:text-[0.98rem] sm:leading-7">
              {content.description}
            </p>
          </div>

          {hasSummary ? (
            <div className="grid gap-2.5 sm:grid-cols-3">
              {summary.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1rem] border border-white/15 bg-black/26 px-3.5 py-3"
                >
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-slate-100">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-100">{item.value}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-[1.15rem] border border-white/15 bg-black/26 px-4 py-4 text-sm leading-6 text-slate-100">
              Puedes escribirme aunque aun no hayas completado el filtro. Si prefieres, revisamos tu caso directamente y te orientare sobre la mejor forma de plantear la landing.
            </div>
          )}

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Link
              href="#contacto"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(180deg,_#ffffff,_#dfe8ff)] px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_34px_rgba(0,0,0,0.18)] transition hover:translate-y-[-1px] hover:shadow-[0_16px_36px_rgba(0,0,0,0.22)]"
            >
              {content.primaryCta}
            </Link>
            <a
              href={content.secondaryHref}
              className="inline-flex min-h-12 items-center justify-center px-1 py-3 text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              {content.secondaryCta}
            </a>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-white/15 bg-black/26 p-1.5">
          <div className="h-full rounded-[1.25rem] bg-[linear-gradient(180deg,_rgba(255,255,255,0.045),_rgba(255,255,255,0.02))] p-4 sm:p-5">
            <ContactForm content={formContent} answers={answers} />
            <div className="mt-5 rounded-[1.1rem] border border-white/12 bg-white/[0.04] px-4 py-4">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5">
                  <TelegramIcon />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white">{content.directContactTitle}</p>
                  <p className="mt-1 text-xs leading-6 text-slate-300">
                    {content.directContactDescription}
                  </p>
                  <a
                    href={content.directContactHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center text-sm font-semibold text-sky-300 transition hover:text-sky-200"
                  >
                    {content.directContactHandle}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

