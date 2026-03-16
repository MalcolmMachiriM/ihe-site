import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

const services = [
  {
    title: "Hardware and Tools",
    description:
      "A wide range of high-quality hardware and tools for professionals and DIY enthusiasts. Building materials, welding equipment, plumbing supplies, drills, hammers, crushers, industrial and mining tools, and more.",
    icon: "🔧",
  },
  {
    title: "Electrical Products",
    description:
      "Full range of electrical cables, lighting, motors, pumps, welding machinery, solar lights, security systems, inverters, power tools, AC and DC motors, cabling, magnetic separators and floatation machines.",
    icon: "⚡",
  },
  {
    title: "Software Solutions",
    description:
      "In-house software developers and consultants for asset management, data entry, accounting, ERP, audit and event management systems, websites and custom solutions tailored to client needs.",
    icon: "💻",
  },
  {
    title: "Safety Equipment",
    description:
      "PPE and safety equipment including overalls, boots, gloves, eyewear, masks, helmets and all related safety products for industrial and mining applications.",
    icon: "🦺",
  },
];

export default function Services() {
  return (
    <section className="py-24 dark:bg-zinc-900/50">
      <Container>
        <SectionTitle
          title="Our Services"
          subtitle="Four main divisions to meet your hardware, electrical, software and safety needs."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-2xl transition-colors group-hover:bg-zinc-200 dark:bg-zinc-800 dark:group-hover:bg-zinc-700">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                {service.title}
              </h3>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
