import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import { Wrench, Zap, Code2, ShieldCheck, ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Hardware & Tools",
    description:
      "Building materials, welding kits, plumbing supplies, drills, hammers, jigsaws, crushers and the full industrial-tooling spectrum.",
    icon: Wrench,
    image: "/images/toolbox.jpg",
    imageAlt: "Hardware and professional tooling",
    keywords: ["Power tools", "Welding", "Plumbing", "Mining tools"],
    span: "lg:col-span-7",
    aspect: "aspect-[16/10]",
  },
  {
    num: "02",
    title: "Electrical",
    description:
      "Cables, motors, pumps, solar, inverters, security systems and floatation machines.",
    icon: Zap,
    image: "/images/solar.jpg",
    imageAlt: "Solar and electrical solutions",
    keywords: ["Solar", "Inverters", "Cabling"],
    span: "lg:col-span-5",
    aspect: "aspect-[5/4]",
  },
  {
    num: "03",
    title: "Software Solutions",
    description:
      "In-house developers shipping asset management, ERP, audit, accounting, websites and bespoke systems.",
    icon: Code2,
    image: "/images/software.jpg",
    imageAlt: "Custom software development",
    keywords: ["ERP", "Asset Mgmt", "Audit", "Web"],
    span: "lg:col-span-5",
    aspect: "aspect-[5/4]",
  },
  {
    num: "04",
    title: "Safety & PPE",
    description:
      "Overalls, boots, gloves, eyewear, masks, helmets and all related industrial safety products.",
    icon: ShieldCheck,
    image: "/images/helmet.jpg",
    imageAlt: "Safety helmets and PPE equipment",
    keywords: ["Overalls", "Helmets", "Eyewear", "Boots"],
    span: "lg:col-span-7",
    aspect: "aspect-[16/10]",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32" id="services">
      <div className="absolute inset-0 -z-10 bg-brand-cream dark:bg-zinc-950" aria-hidden />

      <Container>
        <div className="mb-14 grid grid-cols-12 items-end gap-8">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-brand-blue dark:text-brand-blue-muted">
              <span className="h-px w-10 bg-brand-blue/60 dark:bg-brand-blue-muted/60" />
              What we do · 04 divisions
            </div>
            <h2 className="font-display mt-5 text-4xl leading-[1.04] tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl md:text-6xl">
              One supplier.
              <br />
              <span className="italic text-brand-purple dark:text-brand-blue-muted">
                Four
              </span>{" "}
              specialised divisions.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Each division is staffed by people who know the gear, source it well,
              and back it up after the sale.
            </p>
            <Link
              href="/services"
              className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-900 link-underline dark:text-zinc-50"
            >
              View full catalogue
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {services.map((s, i) => (
            <Link
              key={s.title}
              href="/services"
              className={`group col-span-12 ${s.span} relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 animate-fade-in-up`}
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
            >
              <div className={`relative ${s.aspect} w-full overflow-hidden bg-zinc-200 dark:bg-zinc-800`}>
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-brand-ink/10 to-transparent" aria-hidden />

                {/* Top-right number */}
                <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-800 backdrop-blur">
                  {s.num} · IHE
                </div>

                {/* Bottom title overlay */}
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
                  <div>
                    <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                      <s.icon className="h-3.5 w-3.5" />
                      Division {s.num}
                    </p>
                    <h3 className="font-display mt-2 text-3xl leading-tight text-white sm:text-4xl">
                      {s.title}
                    </h3>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-zinc-900 transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between gap-4 p-6 sm:p-7">
                <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {s.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.keywords.map((k) => (
                    <span
                      key={k}
                      className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
                    >
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
