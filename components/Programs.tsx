"use client";

type ProgramsProps = {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly {
      name: string;
      badge: string;
      audience: string;
      description: string;
      bullets: readonly string[];
      featured?: boolean;
    }[];
  };
};

export default function Programs({ content }: ProgramsProps) {
  return (
    <section className="py-10 sm:py-12">
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
        {content.items.map((item) => (
          <article
            key={item.name}
            className={`rounded-[1.75rem] border p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm ${
              item.featured
                ? "border-sky-100/30 bg-[linear-gradient(180deg,_rgba(255,255,255,0.12),_rgba(255,255,255,0.06))] shadow-[0_24px_70px_rgba(0,0,0,0.24)]"
                : "border-white/15 bg-white/[0.065]"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-sky-100/90">
                {item.name}
              </p>
              <span className="rounded-full border border-white/12 bg-black/20 px-3 py-1 text-[0.64rem] font-medium uppercase tracking-[0.2em] text-slate-200">
                {item.badge}
              </span>
            </div>
            <h3 className="mt-3 text-[1.05rem] font-semibold tracking-tight text-white">
              {item.audience}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-100">
              {item.description}
            </p>
            <ul className="mt-5 grid gap-2 text-sm text-slate-100">
              {item.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="rounded-[1rem] border border-white/15 bg-black/26 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
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
