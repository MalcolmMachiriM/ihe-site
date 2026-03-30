import Image from "next/image";
import { Target, Building2, Handshake, Star } from "lucide-react";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

const highlights = [
  { icon: Building2, label: "100% Zimbabwean", desc: "Wholly owned local company" },
  { icon: Star, label: "Est. 2019", desc: "Years of proven expertise" },
  { icon: Handshake, label: "Client-First", desc: "Customer-centric approach" },
];

export default function AboutSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,rgba(82,74,111,0.05),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,rgba(107,95,138,0.08),transparent)]" aria-hidden />

      <Container>
        <SectionTitle
          title="About Infinite Hardware and Electrical"
          subtitle="A wholly owned Zimbabwean company established in 2019 to provide domestic hardware and tools, electrical supplies, safety products and software solutions."
        />

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text side */}
          <div className="animate-fade-in-left space-y-6 lg:space-y-8">
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              We are composed of four main divisions: Hardware and Tools,
              Electrical Supplies, Software products, and Safety equipment —
              serving mining, industrial, manufacturing, agricultural and business clients across Zimbabwe.
            </p>

            {/* Highlight pills */}
            <div className="flex flex-wrap gap-3">
              {highlights.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm transition-all duration-200 hover:shadow-md hover:border-brand-blue/30 dark:border-zinc-800 dark:bg-zinc-900/80"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue-muted/30 text-brand-purple dark:bg-brand-purple/20 dark:text-brand-blue">
                    <Icon className="h-4.5 w-4.5" aria-hidden />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">{label}</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Vision card */}
            <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-zinc-800 dark:from-zinc-900/80 dark:to-zinc-900/40">
              {/* Subtle gradient accent top-right */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-blue/10 to-transparent rounded-bl-3xl" aria-hidden />
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 text-brand-purple shadow-sm dark:from-brand-purple/30 dark:to-brand-blue/20 dark:text-brand-blue">
                  <Target className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Our Vision
                </h3>
              </div>
              <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                We are dedicated to putting the customer at the center of everything
                we do. We take pride in delivering cutting-edge products that not
                only meet but exceed customer specifications. Our mission is to create
                a seamless and instant platform where our customers can easily access
                and discover all their electrical, hardware, software, and safety
                equipment needs. We are committed to excellence and innovation,
                ensuring our customers have a trusted partner for their mining,
                industrial, manufacturing, agricultural, and business requirements.
              </p>
            </div>
          </div>

          {/* Image side */}
          <div className="relative animate-fade-in-right [animation-delay:150ms]">
            {/* Decorative background glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-blue/10 via-brand-purple/10 to-transparent blur-2xl dark:from-brand-blue/15 dark:via-brand-purple/15" aria-hidden />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-200 shadow-xl dark:bg-zinc-800">
              <Image
                src="/images/team-meeting.jpg"
                alt="IHE team collaborating on solutions for hardware, electrical, software and safety"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent" aria-hidden />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 animate-float rounded-2xl border border-white/50 bg-white/95 px-5 py-3 shadow-xl backdrop-blur-sm dark:border-zinc-700/50 dark:bg-zinc-900/95">
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Serving sectors including</p>
              <p className="mt-0.5 text-sm font-bold text-zinc-900 dark:text-zinc-50">Mining · Industrial · Agricultural</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
