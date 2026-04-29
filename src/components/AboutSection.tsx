import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import Container from "./ui/Container";

const principles = [
  {
    num: "01",
    label: "Customer-centered",
    body: "We put the customer at the center of every decision — from spec sheets to dispatch.",
  },
  {
    num: "02",
    label: "Built to spec, then beyond",
    body: "We deliver products that meet specification and quietly exceed it where it matters.",
  },
  {
    num: "03",
    label: "Locally owned, locally accountable",
    body: "100% Zimbabwean ownership means decisions stay close to the people who use the gear.",
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32" id="about">
      <div className="absolute inset-0 -z-10 bg-white dark:bg-zinc-900/40" aria-hidden />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_80%_30%,rgba(58,46,92,0.08),transparent)] dark:bg-[radial-gradient(ellipse_60%_40%_at_80%_30%,rgba(138,120,194,0.12),transparent)]"
        aria-hidden
      />

      <Container>
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          {/* Left — large image */}
          <div className="col-span-12 lg:col-span-6">
            <div className="sticky top-28 space-y-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-zinc-200 shadow-xl dark:bg-zinc-800">
                <Image
                  src="/images/team-meeting.jpg"
                  alt="The Infinite Hardware & Electrical team in conversation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Caption */}
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
                  <div className="rounded-2xl bg-white/95 px-4 py-3 backdrop-blur-md dark:bg-zinc-950/90">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                      The team · Gweru HQ
                    </p>
                    <p className="font-display mt-1 text-lg leading-tight text-zinc-900 dark:text-zinc-50">
                      Dedicated · Professional · Hands-on
                    </p>
                  </div>
                </div>
              </div>

              {/* Two-up image strip */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-800">
                  <Image
                    src="/images/store-pliers.jpg"
                    alt="Hand tools on display"
                    fill
                    sizes="25vw"
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-800">
                  <Image
                    src="/images/testmeter.jpg"
                    alt="Electrical testing equipment"
                    fill
                    sizes="25vw"
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className="col-span-12 lg:col-span-6">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-brand-blue dark:text-brand-blue-muted">
              <span className="h-px w-10 bg-brand-blue/60 dark:bg-brand-blue-muted/60" />
              About IHE · 2019—now
            </div>

            <h2 className="font-display mt-6 text-4xl leading-[1.04] tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl md:text-6xl">
              Wholly Zimbabwean.
              <br />
              <span className="italic text-brand-purple dark:text-brand-blue-muted">
                Built around
              </span>{" "}
              real customers.
            </h2>

            {/* Pull quote */}
            <blockquote className="relative mt-10 rounded-3xl border border-zinc-200 bg-zinc-50/70 p-6 dark:border-zinc-800 dark:bg-zinc-900/60 sm:p-8">
              <Quote className="absolute -top-4 left-6 h-9 w-9 fill-brand-accent text-brand-accent" />
              <p className="font-display text-2xl leading-snug tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
                We deliver cutting-edge products that not only meet but{" "}
                <span className="italic text-brand-purple dark:text-brand-blue-muted">
                  exceed customer specifications.
                </span>
              </p>
              <footer className="mt-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                <span className="h-px w-6 bg-zinc-400" /> Our vision · IHE
              </footer>
            </blockquote>

            <p className="mt-8 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
              Established in 2019 from Gweru, IHE was built on a simple bet — that
              clients across mining, industry, manufacturing, agriculture and
              business deserve a single, trusted partner who can fulfil orders
              fast and follow through every time.
            </p>

            {/* Numbered principles */}
            <ul className="mt-10 space-y-3">
              {principles.map((p, i) => (
                <li
                  key={p.num}
                  className="group flex items-start gap-5 rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-300 hover:border-zinc-900 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-white/40 animate-fade-in-up"
                  style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
                >
                  <span className="font-mono text-xs font-semibold tracking-[0.18em] text-zinc-400">
                    {p.num}
                  </span>
                  <div className="flex-1">
                    <p className="font-display text-xl tracking-tight text-zinc-900 dark:text-zinc-50">
                      {p.label}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {p.body}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-900 link-underline dark:text-zinc-50"
            >
              Read the full company story
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
