"use client";

type SocialProofProps = {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly {
      quote: string;
      author: string;
      role: string;
    }[];
  };
};

export default function SocialProof({ content }: SocialProofProps) {
  return (
    <section className="py-8 sm:py-10">
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
          <figure
            key={item.quote}
            className="rounded-[1.75rem] border border-white/15 bg-white/[0.065] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm"
          >
            <blockquote className="text-sm leading-6 text-slate-100">
              {item.quote}
            </blockquote>
            <figcaption className="mt-5 border-t border-white/15 pt-4 text-sm">
              <div className="font-semibold text-white">{item.author}</div>
              <div className="text-slate-100">{item.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

