import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Wrench,
  Zap,
  Code2,
  ShieldCheck,
  MapPin,
  Phone,
} from "lucide-react";
import Container from "./ui/Container";

const divisions = [
  { label: "Hardware & Tools", icon: Wrench, num: "01" },
  { label: "Electrical", icon: Zap, num: "02" },
  { label: "Software", icon: Code2, num: "03" },
  { label: "Safety", icon: ShieldCheck, num: "04" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Editorial background — light */}
      <div
        className="absolute inset-0 -z-20 bg-brand-cream transition-opacity duration-500 dark:opacity-0"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-20 bg-zinc-950 opacity-0 transition-opacity duration-500 dark:opacity-100"
        aria-hidden
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-60 dark:opacity-40"
        aria-hidden
      />
      {/* Mesh blob accents */}
      <div
        className="absolute -top-32 -right-20 -z-10 h-[480px] w-[480px] rounded-full bg-brand-blue/15 blur-3xl dark:bg-brand-blue/20"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 -left-20 -z-10 h-[420px] w-[420px] rounded-full bg-brand-accent/10 blur-3xl dark:bg-brand-accent/15"
        aria-hidden
      />

      <Container className="relative pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-24 lg:pb-32">
        {/* Top thin meta bar */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-zinc-300/60 pb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:border-zinc-800 dark:text-zinc-400 sm:mb-12">
          <div className="flex items-center gap-2">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open for orders · Mon–Sat
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <MapPin className="h-3 w-3" /> Gweru, Zimbabwe
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-3 w-3" /> +263 776 339 832
          </div>
        </div>

        {/* Headline column */}
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-10">
          {/* Left — display headline */}
          <div className="col-span-12 lg:col-span-8">
            <div className="animate-fade-in-up flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-brand-blue dark:text-brand-blue-muted">
              <span className="h-px w-10 bg-brand-blue/60 dark:bg-brand-blue-muted/60" />
              Trusted in Zimbabwe since 2019
            </div>

            <h1 className="font-display mt-6 animate-fade-in-up text-[44px] leading-[0.96] tracking-[-0.025em] text-zinc-900 [animation-delay:80ms] dark:text-zinc-50 sm:text-[64px] md:text-[88px] lg:text-[112px]">
              The infinite
              <br />
              <span className="italic text-brand-purple dark:text-brand-blue-muted">
                hardware
              </span>{" "}
              <span className="text-zinc-400 dark:text-zinc-600">·</span> electrical{" "}
              <span className="text-zinc-400 dark:text-zinc-600">·</span>{" "}
              <span className="italic text-brand-accent">safety</span>
              <br />
              partner.
            </h1>

            <p className="mt-8 max-w-2xl animate-fade-in-up text-base leading-relaxed text-zinc-600 [animation-delay:200ms] dark:text-zinc-400 sm:text-lg md:text-xl">
              A wholly-owned Zimbabwean supplier of domestic hardware and tools,
              electrical supplies, safety products and bespoke software solutions —
              built for mining, industrial, manufacturing, agricultural and business clients.
            </p>

            <div className="mt-10 flex flex-col items-stretch gap-3 animate-fade-in-up [animation-delay:300ms] sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-ink px-7 py-4 text-base font-medium text-white shadow-[0_12px_32px_-12px_rgba(13,14,18,0.5)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] dark:bg-white dark:text-zinc-900"
              >
                Request a quote
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white/60 px-7 py-4 text-base font-medium text-zinc-900 backdrop-blur transition-all duration-200 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-100 dark:hover:bg-zinc-900"
              >
                Browse divisions
                <span
                  aria-hidden
                  className="font-mono text-xs text-zinc-400 transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right — image stack collage */}
          <div className="col-span-12 lg:col-span-4">
            <div className="relative grid grid-cols-2 gap-3 animate-fade-in-right [animation-delay:200ms]">
              <div className="relative col-span-2 aspect-[16/11] overflow-hidden rounded-3xl bg-zinc-200 shadow-2xl ring-1 ring-zinc-200/70 dark:bg-zinc-800 dark:ring-zinc-800/80">
                <Image
                  src="/images/man-electrical-fuses.jpg"
                  alt="Electrical specialist working on industrial fuses"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-brand-ink/60 via-brand-ink/10 to-transparent"
                  aria-hidden
                />
                {/* Floating tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                      Now serving
                    </p>
                    <p className="font-display mt-1 text-2xl leading-tight text-white">
                      Mining · Industry
                    </p>
                  </div>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-zinc-900">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>

              <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-200 shadow-lg dark:bg-zinc-800">
                <Image
                  src="/images/solar.jpg"
                  alt="Solar power systems"
                  fill
                  sizes="(max-width: 1024px) 50vw, 17vw"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                <span className="absolute bottom-2 left-2 rounded-full bg-white/90 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-zinc-700 backdrop-blur">
                  Solar
                </span>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-200 shadow-lg dark:bg-zinc-800">
                <Image
                  src="/images/helmet.jpg"
                  alt="PPE and safety equipment"
                  fill
                  sizes="(max-width: 1024px) 50vw, 17vw"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                <span className="absolute bottom-2 left-2 rounded-full bg-white/90 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-zinc-700 backdrop-blur">
                  PPE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divisions strip — bottom */}
        <div className="mt-16 grid grid-cols-2 divide-x divide-y divide-zinc-300/60 overflow-hidden rounded-3xl border border-zinc-300/60 bg-white/50 backdrop-blur sm:divide-y-0 sm:grid-cols-4 dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-950/50 animate-fade-in-up [animation-delay:400ms]">
          {divisions.map(({ label, icon: Icon, num }) => (
            <Link
              key={label}
              href="/services"
              className="group flex flex-col gap-3 px-5 py-6 transition-colors duration-200 hover:bg-white dark:hover:bg-zinc-900/70 sm:px-6 sm:py-7"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-ink/5 text-brand-ink transition-all duration-200 group-hover:bg-brand-ink group-hover:text-white dark:bg-white/5 dark:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-900">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
                  {num} / 04
                </span>
              </div>
              <p className="font-display text-xl tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-2xl">
                {label}
              </p>
              <span className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500 transition-colors group-hover:text-brand-blue dark:text-zinc-400 dark:group-hover:text-brand-blue-muted">
                Explore
                <ArrowUpRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
