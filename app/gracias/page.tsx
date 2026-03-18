import Link from "next/link";
import { content } from "@/lib/content";

export default function GraciasPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(130,150,255,0.18),_transparent_32%),linear-gradient(180deg,_#090d16_0%,_#0b1222_100%)] px-4 py-8 text-white sm:px-6 lg:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-2xl flex-col justify-center">
        <div className="rounded-[2rem] border border-white/15 bg-[linear-gradient(180deg,_rgba(255,255,255,0.1),_rgba(255,255,255,0.05))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-sm sm:p-8">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-sky-100/90">
            {content.thanks.eyebrow}
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-[2.6rem]">
            {content.thanks.title}
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200 sm:text-[0.98rem]">
            {content.thanks.description}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(180deg,_#ffffff,_#dfe8ff)] px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_34px_rgba(0,0,0,0.18)] transition hover:translate-y-[-1px] hover:shadow-[0_16px_36px_rgba(0,0,0,0.22)]"
            >
              {content.thanks.primaryCta}
            </Link>
            <a
              href={`mailto:${content.brand.email}`}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.045] px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/25 hover:bg-white/[0.1] hover:text-white"
            >
              {content.thanks.secondaryCta}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
