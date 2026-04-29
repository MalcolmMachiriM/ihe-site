import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Container from "./ui/Container";

const stats = [
  { value: "2019", label: "Founded in Gweru, Zimbabwe" },
  { value: "04", label: "Specialised divisions, one partner" },
  { value: "100%", label: "Wholly owned, locally operated" },
  { value: "24h", label: "Quote turnaround target" },
];

export default function CapabilitiesBand() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-zinc-50 dark:bg-zinc-950" aria-hidden />
      <div
        className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-50 dark:opacity-30"
        aria-hidden
      />

      <Container>
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          {/* Left — text */}
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-brand-blue dark:text-brand-blue-muted">
              <span className="h-px w-10 bg-brand-blue/60 dark:bg-brand-blue-muted/60" />
              Built for Zimbabwe
            </div>
            <h2 className="font-display mt-6 text-4xl leading-[1.04] tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl md:text-6xl">
              Quality products{" "}
              <span className="italic text-brand-purple dark:text-brand-blue-muted">
                that exceed
              </span>{" "}
              specification — backed by a team that shows up.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
              From a single drill bit to a full electrical kit-out, IHE delivers
              cutting-edge stock, fair pricing and the kind of follow-through you
              only get from a team that lives down the road.
            </p>
          </div>

          {/* Right — image */}
          <div className="col-span-12 lg:col-span-5">
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-zinc-200 shadow-xl ring-1 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-800">
              <Image
                src="/images/engineering.jpg"
                alt="Engineering supplies and components"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-brand-ink/50 via-transparent to-transparent"
                aria-hidden
              />
              <div className="absolute right-4 top-4 flex h-10 items-center gap-1.5 rounded-full bg-white/90 px-3 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-700 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                In stock
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-800 lg:grid-cols-4">
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className="group relative bg-white p-6 transition-colors duration-200 hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900 sm:p-8"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-400">
                / {String(i + 1).padStart(2, "0")}
              </p>
              <p className="font-display mt-4 text-5xl tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
                {value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {label}
              </p>
              <ArrowUpRight
                className="absolute right-5 top-5 h-4 w-4 -translate-y-1 translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 text-zinc-400"
                aria-hidden
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
