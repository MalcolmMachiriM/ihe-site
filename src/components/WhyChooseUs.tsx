import Image from "next/image";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import { Shield, Award, Heart, Handshake } from "lucide-react";

const features = [
  {
    title: "Integrity",
    description:
      "We always do the right thing. Our actions are guided by honesty and transparency in every client interaction.",
    icon: Shield,
  },
  {
    title: "Excellence",
    description:
      "We strive to give our best. Quality is of the utmost importance and we meet the highest standards in everything we do.",
    icon: Award,
  },
  {
    title: "Commitment",
    description:
      "We are committed to our customers and to continuously self-improve. Dedicated to delivering timely solutions.",
    icon: Heart,
  },
  {
    title: "Respect",
    description:
      "We value our clients. Underpinned by innovation, diligence, safety and transparency in all we do.",
    icon: Handshake,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 dark:bg-zinc-900/40">
      <Container>
        <SectionTitle
          title="Core Values"
          subtitle="Underpinned by Innovation, Integrity, Diligence, Safety and Transparency."
        />
        <div className="relative mb-12 aspect-[3/1] w-full max-w-4xl mx-auto overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-800">
          <Image
            src="/images/excavator.png"
            alt="Industrial and mining operations - IHE serves earthworks, construction and heavy industry"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group animate-fade-in-up rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-zinc-950/50 sm:p-8"
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-muted/20 text-brand-purple transition-all duration-300 group-hover:scale-105 group-hover:bg-brand-blue/20 group-hover:text-brand-purple dark:bg-brand-purple/20 dark:text-brand-blue dark:group-hover:bg-brand-blue/30 dark:group-hover:text-brand-blue-muted">
                <feature.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
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
