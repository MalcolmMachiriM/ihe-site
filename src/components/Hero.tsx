import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Wrench, Zap, Code2, ShieldCheck } from "lucide-react";
import Container from "./ui/Container";
import Button from "./ui/Button";

const divisions = [
  { label: "Hardware & Tools", icon: Wrench },
  { label: "Electrical", icon: Zap },
  { label: "Software", icon: Code2 },
  { label: "Safety", icon: ShieldCheck },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 md:py-28 lg:py-32">
      <div
        className="absolute inset-0 -z-10 bg-[length:120%_120%] bg-[position:70%_30%] opacity-100 transition-opacity duration-500 dark:opacity-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(82, 74, 111, 0.1), transparent 55%),
            radial-gradient(ellipse 60% 40% at 85% 20%, rgba(110, 181, 224, 0.12), transparent 50%),
            radial-gradient(ellipse 50% 30% at 15% 40%, rgba(184, 184, 184, 0.08), transparent 45%),
            linear-gradient(to bottom, rgb(250 250 250), rgb(255 255 255))
          `,
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-[length:120%_120%] bg-[position:70%_30%] opacity-0 transition-opacity duration-500 dark:opacity-100"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(107, 95, 138, 0.15), transparent 55%),
            radial-gradient(ellipse 60% 40% at 85% 20%, rgba(126, 190, 232, 0.12), transparent 50%),
            linear-gradient(to bottom, rgb(10 10 10), rgb(24 24 27))
          `,
        }}
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-[image:radial-gradient(circle_at_50%_120%,rgba(82,74,111,0.06),transparent_50%)] dark:bg-[image:radial-gradient(circle_at_50%_120%,rgba(110,181,224,0.08),transparent_50%)]" aria-hidden />
      <Container className="relative">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1 mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-200 shadow-xl ring-1 ring-zinc-200/50 dark:bg-zinc-800 dark:ring-zinc-700/50 lg:aspect-[5/4]">
              <Image
                src="/images/farm-equipment.png"
                alt="Agricultural and industrial equipment - Infinite Hardware & Electrical serves mining, industrial and agricultural sectors"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-6">
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
                <Image
                  src="/images/tools.jpg"
                  alt="Professional tools and equipment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
                <Image
                  src="/images/generator.jpg"
                  alt="Electrical and power solutions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 mx-auto max-w-xl text-center lg:max-w-none lg:text-left">
            <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-brand-blue-muted/60 bg-white/90 px-4 py-2 text-sm font-medium text-brand-purple shadow-sm backdrop-blur-sm transition-colors duration-300 dark:border-brand-blue/40 dark:bg-zinc-900/90 dark:text-brand-blue">
              <Sparkles className="h-4 w-4 text-brand-blue animate-shimmer dark:text-brand-blue-muted" aria-hidden />
              Trusted across Zimbabwe since 2019
            </div>
            <h1 className="mt-6 animate-fade-in-up text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 [animation-delay:100ms] [animation-fill-mode:both] sm:text-4xl md:text-5xl lg:text-6xl">
              Your trusted partner for hardware, electrical, software and safety
            </h1>
            <p className="mt-5 animate-fade-in-up text-base leading-relaxed text-zinc-600 dark:text-zinc-400 [animation-delay:200ms] [animation-fill-mode:both] sm:mt-6 sm:text-lg md:text-xl">
              Infinite Hardware and Electrical is a wholly owned Zimbabwean company
              established in 2019. We deliver cutting-edge products and a seamless
              platform for mining, industrial, manufacturing, agricultural and business needs.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 animate-fade-in-up [animation-delay:300ms] [animation-fill-mode:both] sm:mt-10 sm:flex-row sm:gap-5 lg:justify-start">
              <Button
                href="/contact"
                variant="primary"
                className="group w-full sm:w-auto transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
              <Button
                href="/about"
                variant="outline"
                className="w-full sm:w-auto transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Learn More
              </Button>
            </div>
            <div className="mt-10 animate-fade-in-up border-t border-zinc-200 pt-8 [animation-delay:400ms] [animation-fill-mode:both] dark:border-zinc-700 sm:mt-12">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Our divisions
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
                {divisions.map(({ label, icon: Icon }) => (
                  <Link
                    key={label}
                    href="/services"
                    className="flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-brand-purple dark:text-zinc-400 dark:hover:text-brand-blue"
                  >
                    <Icon className="h-4 w-4 text-brand-blue-muted dark:text-brand-purple/70" aria-hidden />
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
