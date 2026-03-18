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
  };
  answers: QuizAnswers;
};

export default function CTAFinal({ content, formContent, answers }: CTAFinalProps) {
  const summary = [
    { label: "Qué estás buscando", value: answers.searchingFor },
    { label: "Punto de partida", value: answers.startingPoint },
    { label: "Qué te frena más", value: answers.mainBlocker },
  ];

  return (
    <section className="py-8 sm:py-10">
      <div className="grid gap-5 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0.035))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-sm lg:grid-cols-[0.95fr_1.05fr] lg:p-6">
        <div className="flex flex-col justify-between gap-6">
          <div className="space-y-3">
            <span className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-sky-100/80">
              {content.eyebrow}
            </span>
            <h2 className="max-w-2xl text-[1.9rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-[2.3rem]">
              {content.title}
            </h2>
            <p className="max-w-xl text-sm leading-6 text-slate-300 sm:text-[0.98rem] sm:leading-7">
              {content.description}
            </p>
          </div>

          <div className="grid gap-2.5 sm:grid-cols-3">
            {summary.map((item) => (
              <div
                key={item.label}
                className="rounded-[1rem] border border-white/10 bg-black/20 px-3.5 py-3"
              >
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-slate-400">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-100">
                  {item.value || "Sin respuesta"}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contacto"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(180deg,_#ffffff,_#dfe8ff)] px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_34px_rgba(0,0,0,0.18)] transition hover:translate-y-[-1px] hover:shadow-[0_16px_36px_rgba(0,0,0,0.22)]"
            >
              {content.primaryCta}
            </Link>
            <button
              type="button"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            >
              {content.secondaryCta}
            </button>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-1.5">
          <div className="h-full rounded-[1.25rem] bg-[linear-gradient(180deg,_rgba(255,255,255,0.045),_rgba(255,255,255,0.02))] p-4 sm:p-5">
            <ContactForm content={formContent} answers={answers} />
          </div>
        </div>
      </div>
    </section>
  );
}
