import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

const features = [
  {
    title: "Integrity",
    description:
      "We always do the right thing. Our actions are guided by honesty and transparency in every client interaction.",
  },
  {
    title: "Excellence",
    description:
      "We strive to give our best. Quality is of the utmost importance and we meet the highest standards in everything we do.",
  },
  {
    title: "Commitment",
    description:
      "We are committed to our customers and to continuously self-improve. Dedicated to delivering timely solutions.",
  },
  {
    title: "Respect",
    description:
      "We value our clients. Underpinned by innovation, diligence, safety and transparency in all we do.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 dark:bg-zinc-900/50">
      <Container>
        <SectionTitle
          title="Core Values"
          subtitle="Underpinned by Innovation, Integrity, Diligence, Safety and Transparency."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {feature.title}
              </h3>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
