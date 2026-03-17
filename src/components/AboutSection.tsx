import Image from "next/image";
import { Target } from "lucide-react";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

export default function AboutSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28">
      <Container>
        <SectionTitle
          title="About Infinite Hardware and Electrical"
          subtitle="A wholly owned Zimbabwean company established in 2019 to provide domestic hardware and tools, electrical supplies, safety products and software solutions."
        />
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-in-up space-y-6 lg:space-y-8">
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              We are composed of four main divisions: Hardware and Tools,
              Electrical Supplies, Software products, and Safety equipment.
            </p>
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 transition-shadow duration-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-zinc-700 shadow-sm dark:bg-zinc-800 dark:text-zinc-300">
                  <Target className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Our Vision
                </h3>
              </div>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
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
          <div
            className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-200 shadow-lg animate-fade-in-up dark:bg-zinc-800 [animation-delay:150ms] [animation-fill-mode:both]"
          >
            <Image
              src="/images/team-meeting.jpg"
              alt="IHE team collaborating on solutions for hardware, electrical, software and safety"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
