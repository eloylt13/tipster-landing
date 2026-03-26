"use client";

type AboutProps = {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    points: readonly string[];
  };
};

export default function About({ content }: AboutProps) {
  return (
    <section className="py-12 sm:py-14">
      <div className="rounded-[2rem] border border-white/15 bg-white/[0.065] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:p-6">
        <div className="max-w-3xl">
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
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {content.points.map((point) => (
            <div
              key={point}
              className="rounded-[1rem] border border-white/15 bg-black/26 px-4 py-4 text-sm text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            >
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


