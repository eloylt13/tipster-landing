"use client";

type FAQProps = {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly {
      question: string;
      answer: string;
    }[];
  };
};

export default function FAQ({ content }: FAQProps) {
  return (
    <section className="pt-12 pb-10 sm:pt-14 sm:pb-12">
      <div className="max-w-2xl">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-sky-100/90">
          {content.eyebrow}
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-[2.15rem]">
          {content.title}
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-100 sm:text-[0.98rem]">
          {content.description}
        </p>
      </div>
      <div className="mt-6 grid gap-4">
        {content.items.map((item) => (
          <details
            key={item.question}
            className="group rounded-[1.5rem] border border-white/15 bg-white/[0.065] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm"
          >
            <summary className="cursor-pointer list-none text-base font-semibold text-white transition group-open:text-slate-100">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-6 text-slate-100">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}


