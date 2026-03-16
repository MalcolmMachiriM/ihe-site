import Container from "../../components/ui/Container";

export default function Services() {
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
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Hardware and Tools
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              High-quality hardware and tools including building materials, welding
              equipment, plumbing supplies, drills, hammers, crushers, industrial
              and mining tools and associated equipment.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Electrical Products
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              Full range of electrical cables, lighting, motors, pumps, welding
              machinery, solar lights, security systems, inverters, power tools,
              AC and DC motors, cabling, magnetic separators and floatation machines.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Software Solutions
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              In-house developers and consultants for asset management, data entry,
              accounting, ERP, audit and event management systems, websites and
              custom software according to client needs.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Safety Equipment
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              PPE and safety equipment including overalls, boots, gloves, eyewear,
              masks, helmets and all related safety products.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
