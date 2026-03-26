"use client";

import { useEffect, useRef, useState } from "react";

type QuizField = "searchingFor" | "startingPoint" | "mainBlocker";

type QuizAnswers = Record<QuizField, string>;

type QuizStep = {
  id: QuizField;
  label: string;
  options: readonly string[];
};

type QuickQualifierProps = {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    steps: readonly QuizStep[];
    summaryTitle: string;
    summaryNote: string;
    primaryCta: string;
    secondaryCta: string;
    secondaryHref: string;
  };
  answers: QuizAnswers;
  onAnswer: (field: QuizField, value: string) => void;
};

export default function QuickQualifier({ content, answers, onAnswer }: QuickQualifierProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isComplete = stepIndex >= content.steps.length;
  const activeStep = content.steps[stepIndex];
  const progress = isComplete ? 100 : ((stepIndex + 1) / content.steps.length) * 100;

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const advance = () => {
    setIsTransitioning(true);
    timerRef.current = setTimeout(() => {
      setStepIndex((current) => current + 1);
      setIsTransitioning(false);
    }, 170);
  };

  const handleSelect = (value: string) => {
    if (!activeStep) {
      return;
    }

    onAnswer(activeStep.id, value);
    advance();
  };

  const handleAccessClick = () => {
    document.getElementById("contacto")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const summaryItems = [
    { label: "Que quieres mejorar", value: answers.searchingFor },
    { label: "Momento del proyecto", value: answers.startingPoint },
    { label: "Bloqueo principal", value: answers.mainBlocker },
  ].filter((item) => item.value.trim().length > 0);

  return (
    <section id="filtro-acceso" className="py-10 sm:py-12">
      <div className="overflow-hidden rounded-[2.25rem] border border-white/15 bg-[linear-gradient(180deg,_rgba(255,255,255,0.09),_rgba(255,255,255,0.045))] shadow-[0_28px_90px_rgba(0,0,0,0.32)] backdrop-blur-sm">
        <div className="grid gap-6 px-4 py-5 sm:px-6 sm:py-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8 lg:px-7 lg:py-7">
          <div className="space-y-4 lg:pt-1">
            <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-sky-100/90">
              {content.eyebrow}
            </span>
            <div className="space-y-3">
              <h2 className="max-w-2xl text-[1.95rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-[2.35rem]">
                {content.title}
              </h2>
              <p className="max-w-2xl text-sm leading-6 text-slate-100 sm:text-[0.98rem] sm:leading-7">
                {content.description}
              </p>
            </div>
          </div>

          <div
            className="rounded-[1.8rem] border border-white/15 bg-[rgba(5,9,17,0.5)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-5"
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="flex items-center justify-between gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-slate-100">
              <span>{isComplete ? "Resumen final" : `Paso ${stepIndex + 1} de ${content.steps.length}`}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10 ring-1 ring-white/10">
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,_rgba(158,192,255,0.9),_rgba(236,242,255,0.95))] transition-[width] duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {!isComplete ? (
              <div
                className={`mt-5 transition-all duration-200 ${
                  isTransitioning ? "translate-y-1 opacity-0" : "translate-y-0 opacity-100"
                }`}
              >
                <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-slate-100">
                  Paso {stepIndex + 1} de {content.steps.length}
                </p>
                <h3 className="mt-2 text-[1.08rem] font-semibold leading-7 text-white sm:text-[1.15rem]">
                  {activeStep?.label}
                </h3>
                <div className="mt-4 grid gap-3">
                  {activeStep?.options.map((option) => {
                    const selected = answers[activeStep.id] === option;

                    return (
                      <button
                        key={option}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => handleSelect(option)}
                        className={`group min-h-14 rounded-[1.15rem] border px-4 py-3.5 text-left text-[0.95rem] leading-6 transition duration-200 ${
                          selected
                            ? "border-sky-200/45 bg-[linear-gradient(180deg,_rgba(255,255,255,0.12),_rgba(255,255,255,0.06))] text-white shadow-[0_0_0_1px_rgba(186,211,255,0.14),_0_12px_24px_rgba(0,0,0,0.18)]"
                            : "border-white/15 bg-white/[0.055] text-slate-100 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.075] hover:text-white"
                        }`}
                      >
                        <span className="block transition-transform duration-200 group-hover:translate-x-0.5">
                          {option}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="mt-5">
                <div className="rounded-[1.35rem] border border-white/15 bg-white/[0.055] p-4 sm:p-5">
                  <h3 className="text-[1.05rem] font-semibold leading-7 text-white sm:text-[1.15rem]">
                    {content.summaryTitle}
                  </h3>
                  <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
                    {summaryItems.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[1rem] border border-white/15 bg-black/26 px-3.5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                      >
                        <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-slate-100">
                          {item.label}
                        </p>
                        <p className="mt-2 text-[0.9rem] leading-6 text-slate-100">{item.value}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-100">
                    {content.summaryNote}
                  </p>
                </div>
                <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={handleAccessClick}
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(180deg,_#ffffff,_#dfe8ff)] px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_34px_rgba(0,0,0,0.18)] transition hover:translate-y-[-1px] hover:shadow-[0_16px_36px_rgba(0,0,0,0.22)]"
                  >
                    {content.primaryCta}
                  </button>
                  <a
                    href={content.secondaryHref}
                    className="inline-flex min-h-12 items-center justify-center px-1 py-3 text-sm font-semibold text-slate-300 transition hover:text-white"
                  >
                    {content.secondaryCta}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

