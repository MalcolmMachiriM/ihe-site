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
    gradient: "from-violet-500/20 to-purple-600/10",
    iconColor: "text-violet-600 dark:text-violet-400",
    iconBg: "bg-violet-500/15 dark:bg-violet-400/15",
    accent: "border-violet-200/60 dark:border-violet-800/40",
  },
  {
    title: "Excellence",
    description:
      "We strive to give our best. Quality is of the utmost importance and we meet the highest standards in everything we do.",
    icon: Award,
    gradient: "from-amber-500/20 to-orange-500/10",
    iconColor: "text-amber-600 dark:text-amber-400",
    iconBg: "bg-amber-500/15 dark:bg-amber-400/15",
    accent: "border-amber-200/60 dark:border-amber-800/40",
  },
  {
    title: "Commitment",
    description:
      "We are committed to our customers and to continuously self-improve. Dedicated to delivering timely solutions.",
    icon: Heart,
    gradient: "from-rose-500/20 to-pink-500/10",
    iconColor: "text-rose-600 dark:text-rose-400",
    iconBg: "bg-rose-500/15 dark:bg-rose-400/15",
    accent: "border-rose-200/60 dark:border-rose-800/40",
  },
  {
    title: "Respect",
    description:
      "We value our clients. Underpinned by innovation, diligence, safety and transparency in all we do.",
    icon: Handshake,
    gradient: "from-emerald-500/20 to-teal-500/10",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    iconBg: "bg-emerald-500/15 dark:bg-emerald-400/15",
    accent: "border-emerald-200/60 dark:border-emerald-800/40",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-zinc-50/90 dark:bg-zinc-900/50" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_80%_20%,rgba(110,181,224,0.07),transparent)] dark:bg-[radial-gradient(ellipse_60%_40%_at_80%_20%,rgba(110,181,224,0.06),transparent)]" aria-hidden />

      <Container>
        <SectionTitle
          title="Core Values"
          subtitle="Underpinned by Innovation, Integrity, Diligence, Safety and Transparency."
        />

        {/* Banner */}
        <div className="relative mb-14 aspect-[3/1] w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-xl animate-fade-in-up">
          <Image
            src="/images/excavator.png"
            alt="Industrial and mining operations - IHE serves earthworks, construction and heavy industry"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 896px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/60 via-brand-purple/20 to-brand-blue/30" aria-hidden />
          <div className="absolute inset-0 flex items-center px-8 sm:px-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/60">Our Foundation</p>
              <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">Built on trust, driven by excellence</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`group animate-fade-in-up relative overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-zinc-900 ${feature.accent}`}
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
            >
              {/* Gradient top accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient.replace('/20', '').replace('/10', '')} opacity-80`} aria-hidden />
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} aria-hidden />

              <div className="relative p-6 sm:p-7">
                <div className={`flex h-13 w-13 items-center justify-center rounded-xl ${feature.iconBg} ${feature.iconColor} shadow-sm transition-all duration-300 group-hover:scale-110`}>
                  <feature.icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-bold text-zinc-900 dark:text-zinc-50">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
