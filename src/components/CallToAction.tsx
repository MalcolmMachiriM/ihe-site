import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone, MapPin, Mail } from "lucide-react";
import Container from "./ui/Container";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="relative grid grid-cols-12 gap-px overflow-hidden rounded-[36px] border border-zinc-200 bg-zinc-200 shadow-2xl dark:border-zinc-800 dark:bg-zinc-800">
          {/* Left — copy */}
          <div className="relative col-span-12 flex flex-col justify-between bg-zinc-950 p-8 text-white sm:p-12 lg:col-span-7 lg:p-16">
            {/* Subtle accent grid */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
                backgroundSize: "48px 48px",
              }}
              aria-hidden
            />
            {/* Accent blob */}
            <div
              className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-brand-blue/30 blur-3xl"
              aria-hidden
            />
            <div
              className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-brand-accent/20 blur-3xl"
              aria-hidden
            />

            <div className="relative">
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-brand-blue-muted">
                <span className="h-px w-10 bg-brand-blue-muted/60" />
                Get in touch
              </div>
              <h2 className="font-display mt-6 text-4xl leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Let&apos;s build
                <br />
                <span className="italic text-brand-accent-soft">
                  something
                </span>{" "}
                together.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-300 sm:text-lg">
                Whether it&apos;s a single power tool or kitting out a full mining
                operation, we&apos;ll quote, source and dispatch — quickly.
              </p>
            </div>

            <div className="relative mt-12 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-medium text-zinc-900 shadow-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                Request a quote
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href="tel:+263776339832"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 text-base font-medium text-white transition-all duration-200 hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                +263 776 339 832
              </a>
            </div>
          </div>

          {/* Right — contact card */}
          <div className="relative col-span-12 bg-white dark:bg-zinc-950 lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-auto lg:h-72">
              <Image
                src="/images/store-pliers.jpg"
                alt="Inside the IHE store"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden />
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-700 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Open Mon — Sat
              </div>
            </div>

            <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
              <li>
                <a
                  href="https://maps.google.com/?q=No.+23+Lincoln+Road,+L.I.S+Gweru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-6 py-5 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-ink/5 text-brand-ink dark:bg-white/10 dark:text-white">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div className="flex-1">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                      Visit
                    </p>
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                      No. 23 Lincoln Rd, L.I.S Gweru
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-zinc-400 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:ihardware19@gmail.com"
                  className="group flex items-center gap-4 px-6 py-5 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-ink/5 text-brand-ink dark:bg-white/10 dark:text-white">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div className="flex-1">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                      Email
                    </p>
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                      ihardware19@gmail.com
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-zinc-400 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
                </a>
              </li>
              <li>
                <a
                  href="tel:+263712167281"
                  className="group flex items-center gap-4 px-6 py-5 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-ink/5 text-brand-ink dark:bg-white/10 dark:text-white">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div className="flex-1">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                      Direct line
                    </p>
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                      +263 712 167 281
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-zinc-400 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
