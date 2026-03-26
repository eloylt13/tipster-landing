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
      focus: string;
    }[];
  };
};

const trustPillars = [
  "Mejor imagen para un servicio de pago",
  "Oferta mas clara desde el primer vistazo",
  "Captacion mas ordenada y mas profesional",
] as const;

export default function SocialProof({ content }: SocialProofProps) {
  const [featured, ...secondary] = content.items;

  return (
    <section className="py-12 sm:py-14">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
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
        <p className="max-w-sm text-xs leading-6 text-slate-300/80 lg:text-right">
          Referencias de tono para mostrar una prueba social mas concreta, sobria y alineada con una landing comercial para tipsters.
        </p>
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <figure className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[linear-gradient(180deg,_rgba(255,255,255,0.12),_rgba(255,255,255,0.05))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-sm sm:p-7">
          <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.16),_transparent_65%)]" />
          <div className="relative">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/6 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-sky-100/85">
                Testimonio destacado
              </span>
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-slate-300/80">
                Escenario realista
              </span>
            </div>
            <blockquote className="mt-6 max-w-2xl text-[1.05rem] leading-8 text-slate-50 sm:text-[1.18rem]">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex flex-col gap-4 border-t border-white/12 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-base font-semibold text-white">{featured.author}</div>
                <div className="mt-1 text-sm text-slate-300">{featured.role}</div>
              </div>
              <div className="rounded-[1rem] border border-white/12 bg-black/20 px-4 py-3 text-sm text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                {featured.focus}
              </div>
            </figcaption>
          </div>
        </figure>
        <div className="grid gap-4">
          {secondary.map((item) => (
            <figure
              key={item.quote}
              className="rounded-[1.7rem] border border-white/15 bg-white/[0.065] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-white">{item.author}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-sky-100/70">
                    {item.role}
                  </div>
                </div>
                <span className="rounded-full border border-white/12 bg-black/18 px-3 py-1 text-[0.68rem] text-slate-300">
                  {item.focus}
                </span>
              </div>
              <blockquote className="mt-4 text-sm leading-7 text-slate-100">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
      <div className="mt-6 rounded-[1.85rem] border border-white/15 bg-black/20 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm">
        <div className="grid gap-3 md:grid-cols-3">
          {trustPillars.map((pillar) => (
            <div
              key={pillar}
              className="rounded-[1.2rem] border border-white/12 bg-white/[0.04] px-4 py-4 text-sm text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            >
              {pillar}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

