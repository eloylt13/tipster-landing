"use client";

type CustomizationProps = {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    bridgeLabel: string;
    bridgeTitle: string;
    bridgeDescription: string;
    items: readonly {
      title: string;
      description: string;
    }[];
    closing: string;
  };
};

export default function Customization({ content }: CustomizationProps) {
  return (
    <section className="py-12 sm:py-14">
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="max-w-xl">
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

        <div className="rounded-[2rem] border border-white/15 bg-[linear-gradient(180deg,_rgba(255,255,255,0.1),_rgba(255,255,255,0.045))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-sm sm:p-6">
          <div className="rounded-[1.5rem] border border-white/12 bg-black/20 p-4 sm:p-5">
            <span className="inline-flex items-center rounded-full border border-white/12 bg-white/6 px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-slate-200">
              {content.bridgeLabel}
            </span>
            <h3 className="mt-4 text-[1.15rem] font-semibold tracking-tight text-white sm:text-[1.35rem]">
              {content.bridgeTitle}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-100">
              {content.bridgeDescription}
            </p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {content.items.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.35rem] border border-white/12 bg-white/[0.05] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              >
                <h4 className="text-sm font-semibold tracking-tight text-white">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-100/92">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-5 text-sm leading-6 text-slate-300/90">{content.closing}</p>
        </div>
      </div>
    </section>
  );
}
