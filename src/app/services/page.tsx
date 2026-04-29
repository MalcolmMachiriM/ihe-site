import Image from "next/image";
import Link from "next/link";
import { Wrench, Zap, Code2, ShieldCheck, ArrowUpRight, Check } from "lucide-react";
import Container from "../../components/ui/Container";
import CallToAction from "../../components/CallToAction";

const divisions = [
  {
    num: "01",
    id: "hardware",
    title: "Hardware & Tools",
    icon: Wrench,
    image: "/images/toolbox.jpg",
    blurb:
      "A wide range of high-quality hardware and tools, meticulously crafted for professionals and DIY enthusiasts. Tackle tasks with confidence — we are your trusted source.",
    items: [
      "Building materials",
      "Welding equipment",
      "Screw drivers",
      "Plumbing supplies",
      "Squares",
      "Glue & staple guns",
      "Gardening equipment",
      "Locks",
      "Jigsaws (handheld & powered)",
      "Crushers",
      "Paint",
      "Hammers",
      "Drills & drill bits",
      "Chisels, mallets & precision tools",
      "Electrical supplies",
      "Household brooms & rakes",
      "Industrial & mining tools",
    ],
  },
  {
    num: "02",
    id: "electrical",
    title: "Electrical Products",
    icon: Zap,
    image: "/images/man-electrical-fuses.jpg",
    blurb:
      "The full range of electrical cables, lighting and power solutions — from solar farms to industrial floatation machinery.",
    items: [
      "Pumps",
      "Welding machinery",
      "Solar lights",
      "Security systems",
      "Inverters",
      "Power tools",
      "AC & DC motors",
      "Cabling",
      "Magnetic separators",
      "Floatation machines",
      "Lighting products",
    ],
  },
  {
    num: "03",
    id: "software",
    title: "Software Solutions",
    icon: Code2,
    image: "/images/software.jpg",
    blurb:
      "In-house developers and consultants developing, implementing, supporting and upgrading software solutions tailored to client needs.",
    items: [
      "Asset management systems",
      "Data entry systems",
      "Accounting solutions",
      "Enterprise resource planning (ERP)",
      "Audit systems",
      "Event management systems",
      "Websites",
      "Custom solutions",
    ],
  },
  {
    num: "04",
    id: "safety",
    title: "Safety Equipment",
    icon: ShieldCheck,
    image: "/images/helmet.jpg",
    blurb:
      "Our Safety division supplies the full PPE range to keep your team protected on every site.",
    items: [
      "Overalls",
      "Boots",
      "Gloves",
      "Eyewear",
      "Masks",
      "Helmets",
      "Reflective vests",
      "All related safety products",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="relative">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-zinc-200 bg-brand-cream pb-12 pt-12 dark:border-zinc-800 dark:bg-zinc-950 sm:pt-16 lg:pt-24">
        <div
          className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-50 dark:opacity-30"
          aria-hidden
        />
        <Container>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-brand-blue dark:text-brand-blue-muted">
            <span className="h-px w-10 bg-brand-blue/60 dark:bg-brand-blue-muted/60" />
            Services · 04 divisions
          </div>
          <div className="mt-6 grid grid-cols-12 gap-8">
            <h1 className="col-span-12 font-display text-5xl leading-[0.98] tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl md:text-7xl lg:col-span-9 lg:text-[110px]">
              The catalogue
              <br />
              <span className="italic text-brand-purple dark:text-brand-blue-muted">
                of everything
              </span>{" "}
              we supply.
            </h1>
            <p className="col-span-12 mt-4 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg lg:col-span-3 lg:mt-0 lg:self-end">
              From a single drill bit to a full kit-out — explore the four IHE
              divisions and what each one supplies.
            </p>
          </div>

          {/* Anchor nav */}
          <nav className="mt-10 flex flex-wrap gap-2">
            {divisions.map(({ id, title, num }) => (
              <a
                key={id}
                href={`#${id}`}
                className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/70 px-4 py-2 text-sm font-medium text-zinc-700 backdrop-blur transition-all duration-200 hover:border-zinc-900 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-300 dark:hover:border-white/40"
              >
                <span className="font-mono text-[10px] text-zinc-400">{num}</span>
                {title}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      {/* Divisions */}
      <Container>
        <div className="space-y-24 py-20 sm:space-y-32 lg:space-y-40 lg:py-28">
          {divisions.map((d, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={d.id}
                id={d.id}
                className="grid scroll-mt-32 grid-cols-12 items-start gap-8 lg:gap-16"
              >
                {/* Image side */}
                <div
                  className={`col-span-12 lg:col-span-6 ${
                    reverse ? "lg:order-2" : ""
                  }`}
                >
                  <div className="sticky top-28">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-zinc-200 shadow-xl dark:bg-zinc-800">
                      <Image
                        src={d.image}
                        alt={d.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-1000 hover:scale-105"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-brand-ink/50 via-transparent to-transparent"
                        aria-hidden
                      />
                      <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-700 backdrop-blur">
                        Division {d.num}
                      </div>
                      <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-zinc-900 shadow-lg">
                        <d.icon className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text side */}
                <div
                  className={`col-span-12 lg:col-span-6 ${
                    reverse ? "lg:order-1" : ""
                  }`}
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-400">
                    Division · {d.num} of 04
                  </p>
                  <h2 className="font-display mt-4 text-4xl leading-[1.04] tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl md:text-6xl">
                    {d.title}
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
                    {d.blurb}
                  </p>

                  <div className="mt-10">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                      What we supply
                    </p>
                    <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                      {d.items.map((item, idx) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 border-t border-zinc-200 pt-3 dark:border-zinc-800 animate-fade-in-up"
                          style={{
                            animationDelay: `${idx * 25}ms`,
                            animationFillMode: "both",
                          }}
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-ink text-white dark:bg-white dark:text-zinc-900">
                            <Check className="h-3 w-3" />
                          </span>
                          <span className="text-sm text-zinc-700 dark:text-zinc-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="group mt-10 inline-flex items-center gap-2 rounded-full bg-brand-ink px-6 py-3.5 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:scale-[1.02] dark:bg-white dark:text-zinc-900"
                  >
                    Quote this division
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Container>

      <CallToAction />
    </div>
  );
}
