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
    <section className="py-8 sm:py-10">
      <div className="max-w-2xl">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-sky-100/80">
          {content.eyebrow}
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-[2.15rem]">
          {content.title}
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-[0.98rem]">
          {content.description}
        </p>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {content.items.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.055]"
          >
            <div className="h-10 w-10 rounded-2xl border border-white/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0.03))] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" />
            <h3 className="mt-4 text-[1.05rem] font-semibold tracking-tight text-white">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
