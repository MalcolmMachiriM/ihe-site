import Image from "next/image";
import Container from "./ui/Container";
import { Shield, Award, Heart, Handshake } from "lucide-react";

const values = [
  {
    num: "01",
    title: "Integrity",
    short: "We always do the right thing.",
    description:
      "Our actions are guided by honesty and transparency in every client interaction.",
    icon: Shield,
    image: "/images/screws.jpg",
  },
  {
    num: "02",
    title: "Excellence",
    short: "We strive to give our best.",
    description:
      "Quality is non-negotiable. We meet the highest standards in everything we deliver.",
    icon: Award,
    image: "/images/grinder.jpg",
  },
  {
    num: "03",
    title: "Commitment",
    short: "We are committed.",
    description:
      "Dedicated to clients and to continuously improving — timely solutions, every time.",
    icon: Heart,
    image: "/images/bolts.jpg",
  },
  {
    num: "04",
    title: "Respect",
    short: "We value our clients.",
    description:
      "Underpinned by innovation, diligence, safety and transparency in everything we do.",
    icon: Handshake,
    image: "/images/reflectors.jpg",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32" id="values">
      <div className="absolute inset-0 -z-10 bg-zinc-950" aria-hidden />
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: `radial-gradient(ellipse 60% 50% at 80% 20%, rgba(37,99,235,0.18), transparent 60%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(255,107,44,0.12), transparent 60%)`,
        }}
        aria-hidden
      />

      <Container>
        <div className="mb-16 grid grid-cols-12 items-end gap-8">
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-brand-blue-muted">
              <span className="h-px w-10 bg-brand-blue-muted/60" />
              Core values · The IHE way
            </div>
            <h2 className="font-display mt-6 text-4xl leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl">
              Underpinned by{" "}
              <span className="italic text-brand-accent-soft">
                innovation,
              </span>{" "}
              integrity, diligence, safety, and transparency.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
              Four values shape every quote, every conversation, and every dispatch.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="group relative flex flex-col bg-zinc-950 p-6 transition-all duration-500 hover:bg-zinc-900 sm:p-8 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
            >
              {/* Image reveal on hover */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" aria-hidden>
                <Image
                  src={v.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/85 to-zinc-950/40" aria-hidden />
              </div>

              <div className="relative flex h-full flex-col justify-between gap-10">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 transition-colors group-hover:text-brand-accent-soft">
                    {v.num} / 04
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-all duration-300 group-hover:bg-brand-accent group-hover:scale-110">
                    <v.icon className="h-4 w-4" />
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-4xl leading-tight tracking-tight text-white sm:text-5xl">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium text-brand-blue-muted">
                    {v.short}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400 transition-colors group-hover:text-zinc-200">
                    {v.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
