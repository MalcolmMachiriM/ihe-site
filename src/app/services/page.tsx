import Image from "next/image";
import Container from "../../components/ui/Container";

const serviceSections = [
  {
    title: "Hardware and Tools",
    description:
      "High-quality hardware and tools including building materials, welding equipment, plumbing supplies, drills, hammers, crushers, industrial and mining tools and associated equipment.",
    image: "/images/toolbox.jpg",
    imageAlt: "Hardware and tools - professional equipment",
  },
  {
    title: "Electrical Products",
    description:
      "Full range of electrical cables, lighting, motors, pumps, welding machinery, solar lights, security systems, inverters, power tools, AC and DC motors, cabling, magnetic separators and floatation machines.",
    image: "/images/solar.jpg",
    imageAlt: "Electrical and solar solutions",
  },
  {
    title: "Software Solutions",
    description:
      "In-house developers and consultants for asset management, data entry, accounting, ERP, audit and event management systems, websites and custom software according to client needs.",
    image: "/images/software.jpg",
    imageAlt: "Software solutions and development",
  },
  {
    title: "Safety Equipment",
    description:
      "PPE and safety equipment including overalls, boots, gloves, eyewear, masks, helmets and all related safety products.",
    image: "/images/helmet.jpg",
    imageAlt: "Safety equipment and PPE",
  },
];

export default function ServicesPage() {
  return (
    <div className="py-16">
      <Container>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Our Services
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          We offer four main divisions: Hardware and Tools, Electrical Products,
          Software Solutions, and Safety Equipment. Each division is designed to
          meet the needs of professionals, industry and DIY enthusiasts.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {serviceSections.map((section) => (
            <div
              key={section.title}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                <Image
                  src={section.image}
                  alt={section.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  {section.title}
                </h2>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
