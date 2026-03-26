"use client";

type BenefitsProps = {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly {
      title: string;
      description: string;
    }[];
  };
};

export default function Benefits({ content }: BenefitsProps) {
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
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {content.items.map((item, index) => (
          <article
            key={item.title}
            className="rounded-[1.75rem] border border-white/15 bg-white/[0.065] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.055]"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-[linear-gradient(180deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0.03))] text-[0.74rem] font-semibold tracking-[0.18em] text-sky-100/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-4 text-[1.05rem] font-semibold tracking-tight text-white">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-100">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

