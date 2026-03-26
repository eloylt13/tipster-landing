"use client";

type HowItWorksProps = {
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

export default function HowItWorks({ content }: HowItWorksProps) {
  return (
    <section id="como-funciona" className="py-10 sm:py-12">
      <div className="rounded-[2rem] border border-white/15 bg-white/[0.065] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:p-6">
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
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {content.items.map((item, index) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-white/15 bg-black/26 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-sky-100/80">
                Paso {index + 1}
              </p>
              <h3 className="mt-3 text-[1.02rem] font-semibold tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-100">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

