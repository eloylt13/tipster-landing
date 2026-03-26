"use client";

import { useState } from "react";

type QuizAnswers = {
  searchingFor: string;
  startingPoint: string;
  mainBlocker: string;
};

type ContactFormProps = {
  content: {
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

function Field({
  label,
  value,
  placeholder,
}: {
  label: string;
  value: string;
  placeholder: string;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-100">
        {label}
      </label>
      <input
        value={value}
        readOnly
        placeholder={placeholder}
        className="w-full rounded-[1.1rem] border border-white/15 bg-white/[0.065] px-4 py-3.5 text-sm text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] outline-none transition placeholder:text-slate-500"
      />
    </div>
  );
}

export default function ContactForm({ content, answers }: ContactFormProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const body = [
      "Hola,",
      "",
      "Quiero informacion sobre una landing para tipster.",
      "",
      `Que quiero mejorar: ${answers.searchingFor || "Sin completar"}`,
      `Momento del proyecto: ${answers.startingPoint || "Sin completar"}`,
      `Bloqueo principal: ${answers.mainBlocker || "Sin completar"}`,
      "",
      "Mensaje:",
      message || "Sin mensaje adicional.",
    ].join("\n");

    window.location.href = `mailto:${content.email}?subject=${encodeURIComponent(
      "Solicitud de propuesta - Nexo Criterio"
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form id="contacto" className="grid gap-4">
      <div className="space-y-2.5">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-sky-100/85">
          {content.eyebrow}
        </p>
        <h3 className="text-xl font-semibold tracking-tight text-white sm:text-[1.35rem]">
          {content.title}
        </h3>
        <p className="text-sm leading-6 text-slate-100">{content.description}</p>
      </div>

      <div className="grid gap-3">
        <Field
          label={content.labels.searchingFor}
          value={answers.searchingFor}
          placeholder={content.placeholders.searchingFor}
        />
        <Field
          label={content.labels.startingPoint}
          value={answers.startingPoint}
          placeholder={content.placeholders.startingPoint}
        />
        <Field
          label={content.labels.mainBlocker}
          value={answers.mainBlocker}
          placeholder={content.placeholders.mainBlocker}
        />
      </div>

      <div className="space-y-2">
        <label className="block text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-100">
          {content.labels.message}
        </label>
        <textarea
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder={content.placeholders.message}
          className="w-full resize-none rounded-[1.1rem] border border-white/15 bg-white/[0.065] px-4 py-3.5 text-sm text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] outline-none transition placeholder:text-slate-500 focus:border-sky-200/40 focus:bg-white/[0.065]"
        />
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(180deg,_#ffffff,_#dfe8ff)] px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_34px_rgba(0,0,0,0.18)] transition hover:translate-y-[-1px] hover:shadow-[0_16px_36px_rgba(0,0,0,0.22)]"
      >
        {content.button}
      </button>
      <p className="text-xs leading-5 text-slate-100">{content.note}</p>
    </form>
  );
}
