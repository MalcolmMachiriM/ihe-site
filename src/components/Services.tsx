import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import { Wrench, Zap, Code2, ShieldCheck, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Hardware and Tools",
    description:
      "A wide range of high-quality hardware and tools for professionals and DIY enthusiasts. Building materials, welding equipment, plumbing supplies, drills, hammers, crushers, industrial and mining tools, and more.",
    icon: Wrench,
    image: "/images/toolbox.jpg",
    imageAlt: "Hardware and tools - professional equipment for construction and DIY",
    accent: "from-amber-500/20 to-orange-500/10",
    iconBg: "bg-amber-500/15 text-amber-600 dark:bg-amber-400/15 dark:text-amber-400",
    tag: "Construction & Mining",
  },
  {
    title: "Electrical Products",
    description:
      "Full range of electrical cables, lighting, motors, pumps, welding machinery, solar lights, security systems, inverters, power tools, AC and DC motors, cabling, magnetic separators and floatation machines.",
    icon: Zap,
    image: "/images/solar.jpg",
    imageAlt: "Solar farm and electrical power solutions - renewable energy and electrical products",
    accent: "from-blue-500/20 to-cyan-500/10",
    iconBg: "bg-blue-500/15 text-blue-600 dark:bg-blue-400/15 dark:text-blue-400",
    tag: "Power & Electrical",
  },
  {
    title: "Software Solutions",
    description:
      "In-house software developers and consultants for asset management, data entry, accounting, ERP, audit and event management systems, websites and custom solutions tailored to client needs.",
    icon: Code2,
    image: "/images/software.jpg",
    imageAlt: "Software solutions and digital systems",
    accent: "from-violet-500/20 to-purple-500/10",
    iconBg: "bg-violet-500/15 text-violet-600 dark:bg-violet-400/15 dark:text-violet-400",
    tag: "Digital & Tech",
  },
  {
    title: "Safety Equipment",
    description:
      "PPE and safety equipment including overalls, boots, gloves, eyewear, masks, helmets and all related safety products for industrial and mining applications.",
    icon: ShieldCheck,
    image: "/images/helmet.jpg",
    imageAlt: "Safety equipment and PPE - helmets and protective gear",
    accent: "from-emerald-500/20 to-green-500/10",
    iconBg: "bg-emerald-500/15 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-400",
    tag: "PPE & Safety",
  },
];

export default function Services() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* Section background */}
      <div className="absolute inset-0 -z-10 bg-zinc-50/80 dark:bg-zinc-900/40" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(110,181,224,0.07),transparent)] dark:bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(110,181,224,0.05),transparent)]" aria-hidden />

      <Container>
        <SectionTitle
          title="Our Services"
          subtitle="Four main divisions to meet your hardware, electrical, software and safety needs."
        />

        {/* Banner image with overlay */}
        <div className="relative mx-auto mb-14 max-w-4xl overflow-hidden rounded-2xl shadow-xl animate-fade-in-up">
          <div className="relative aspect-[21/9] w-full">
            <Image
              src="/images/tools.png"
              alt="Professional hardware and tools - quality equipment for industrial, mining and DIY use"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 896px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/50 via-transparent to-brand-blue/30" aria-hidden />
            <div className="absolute inset-0 flex items-end p-6 sm:p-8">
              <div className="animate-fade-in-up [animation-delay:200ms]">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/70">Infinite Hardware & Electrical</p>
                <p className="mt-1 text-xl font-bold text-white sm:text-2xl">Quality products for every need</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group animate-fade-in-up overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-zinc-300/40 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:shadow-zinc-950/60"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
            >
              {/* Image with gradient overlay */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-60 transition-opacity duration-300 group-hover:opacity-80`} aria-hidden />
                {/* Tag badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {service.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${service.iconBg} shadow-sm transition-all duration-300 group-hover:scale-110`}>
                    <service.icon className="h-6 w-6" aria-hidden />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                      {service.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {service.description}
                    </p>
                    <Link
                      href="/services"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-purple transition-all duration-200 hover:gap-2.5 hover:text-brand-purple-hover dark:text-brand-blue dark:hover:text-brand-blue-muted"
                    >
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
