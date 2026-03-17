import Image from "next/image";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import { Wrench, Zap, Code2, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Hardware and Tools",
    description:
      "A wide range of high-quality hardware and tools for professionals and DIY enthusiasts. Building materials, welding equipment, plumbing supplies, drills, hammers, crushers, industrial and mining tools, and more.",
    icon: Wrench,
    image: "/images/toolbox.jpg",
    imageAlt: "Hardware and tools - professional equipment for construction and DIY",
  },
  {
    title: "Electrical Products",
    description:
      "Full range of electrical cables, lighting, motors, pumps, welding machinery, solar lights, security systems, inverters, power tools, AC and DC motors, cabling, magnetic separators and floatation machines.",
    icon: Zap,
    image: "/images/generator.jpg",
    imageAlt: "Electrical and power equipment - generators, solar and electrical solutions",
  },
  {
    title: "Software Solutions",
    description:
      "In-house software developers and consultants for asset management, data entry, accounting, ERP, audit and event management systems, websites and custom solutions tailored to client needs.",
    icon: Code2,
    image: "/images/software.jpg",
    imageAlt: "Software solutions and digital systems",
  },
  {
    title: "Safety Equipment",
    description:
      "PPE and safety equipment including overalls, boots, gloves, eyewear, masks, helmets and all related safety products for industrial and mining applications.",
    icon: ShieldCheck,
    image: "/images/helmet.jpg",
    imageAlt: "Safety equipment and PPE - helmets and protective gear",
  },
];

export default function Services() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 dark:bg-zinc-900/40">
      <Container>
        <SectionTitle
          title="Our Services"
          subtitle="Four main divisions to meet your hardware, electrical, software and safety needs."
        />
        <div className="relative mx-auto mb-12 max-w-4xl overflow-hidden rounded-2xl bg-zinc-200 shadow-md dark:bg-zinc-800">
          <div className="relative aspect-[21/9] w-full">
            <Image
              src="/images/tools.png"
              alt="Professional hardware and tools - quality equipment for industrial, mining and DIY use"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group animate-fade-in-up overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-200/50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:shadow-zinc-950/50 sm:p-0"
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-muted/30 text-brand-purple shadow-inner transition-all duration-300 group-hover:scale-105 group-hover:bg-brand-blue/20 dark:bg-brand-purple/20 dark:text-brand-blue dark:group-hover:bg-brand-blue/30 dark:group-hover:text-brand-blue-muted">
                  <service.icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
