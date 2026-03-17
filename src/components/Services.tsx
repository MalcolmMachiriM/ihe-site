import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import { Wrench, Zap, Code2, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Hardware and Tools",
    description:
      "A wide range of high-quality hardware and tools for professionals and DIY enthusiasts. Building materials, welding equipment, plumbing supplies, drills, hammers, crushers, industrial and mining tools, and more.",
    icon: Wrench,
  },
  {
    title: "Electrical Products",
    description:
      "Full range of electrical cables, lighting, motors, pumps, welding machinery, solar lights, security systems, inverters, power tools, AC and DC motors, cabling, magnetic separators and floatation machines.",
    icon: Zap,
  },
  {
    title: "Software Solutions",
    description:
      "In-house software developers and consultants for asset management, data entry, accounting, ERP, audit and event management systems, websites and custom solutions tailored to client needs.",
    icon: Code2,
  },
  {
    title: "Safety Equipment",
    description:
      "PPE and safety equipment including overalls, boots, gloves, eyewear, masks, helmets and all related safety products for industrial and mining applications.",
    icon: ShieldCheck,
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
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group animate-fade-in-up rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-200/50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:shadow-zinc-950/50 sm:p-8"
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-blue-muted/30 text-brand-purple shadow-inner transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-blue/20 group-hover:text-brand-purple dark:bg-brand-purple/20 dark:text-brand-blue dark:group-hover:bg-brand-blue/30 dark:group-hover:text-brand-blue-muted">
                <service.icon className="h-7 w-7" aria-hidden />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
