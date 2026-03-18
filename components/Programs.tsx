"use client";

type ProgramsProps = {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly {
      name: string;
      audience: string;
      description: string;
      bullets: readonly string[];
    }[];
  };
};

export default function Programs({ content }: ProgramsProps) {
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
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {content.items.map((item) => (
          <article
            key={item.name}
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm"
          >
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-sky-100/80">
              {item.name}
            </p>
            <h3 className="mt-3 text-[1.05rem] font-semibold tracking-tight text-white">
              {item.audience}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.description}
            </p>
            <ul className="mt-5 grid gap-2 text-sm text-slate-200">
              {item.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="rounded-[1rem] border border-white/10 bg-black/20 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
