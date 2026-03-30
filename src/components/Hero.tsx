import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Wrench, Zap, Code2, ShieldCheck, TrendingUp, Users, Award } from "lucide-react";
import Container from "./ui/Container";
import Button from "./ui/Button";

const divisions = [
  { label: "Hardware & Tools", icon: Wrench },
  { label: "Electrical", icon: Zap },
  { label: "Software", icon: Code2 },
  { label: "Safety", icon: ShieldCheck },
];

const stats = [
  { value: "2019", label: "Est.", icon: Award },
  { value: "4", label: "Divisions", icon: TrendingUp },
  { value: "100+", label: "Products", icon: Wrench },
  { value: "ZW", label: "Owned", icon: Users },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 md:py-28 lg:py-32">
      {/* Light mode background */}
      <div
        className="absolute inset-0 -z-10 opacity-100 transition-opacity duration-500 dark:opacity-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 90% 70% at 50% -10%, rgba(82, 74, 111, 0.12), transparent 55%),
            radial-gradient(ellipse 70% 50% at 90% 20%, rgba(110, 181, 224, 0.18), transparent 50%),
            radial-gradient(ellipse 60% 40% at 10% 60%, rgba(168, 212, 240, 0.12), transparent 45%),
            linear-gradient(to bottom, rgb(250 250 250), rgb(255 255 255))
          `,
        }}
        aria-hidden
      />
      {/* Dark mode background */}
      <div
        className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 dark:opacity-100"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 90% 70% at 50% -10%, rgba(107, 95, 138, 0.2), transparent 55%),
            radial-gradient(ellipse 70% 50% at 90% 20%, rgba(126, 190, 232, 0.15), transparent 50%),
            radial-gradient(ellipse 50% 40% at 10% 70%, rgba(90, 155, 201, 0.08), transparent 45%),
            linear-gradient(to bottom, rgb(10 10 10), rgb(18 18 24))
          `,
        }}
        aria-hidden
      />

      {/* Decorative orbs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-[0.06] dark:opacity-[0.08] bg-brand-blue blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-[0.05] dark:opacity-[0.07] bg-brand-purple blur-3xl pointer-events-none" aria-hidden />

      <Container className="relative">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Image column */}
          <div className="order-2 lg:order-1 mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative animate-fade-in-left [animation-delay:200ms]">
              {/* Decorative ring behind main image */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand-purple/20 via-brand-blue/15 to-transparent blur-xl dark:from-brand-purple/30 dark:via-brand-blue/20" aria-hidden />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-200 shadow-2xl ring-1 ring-zinc-200/50 dark:bg-zinc-800 dark:ring-white/5 lg:aspect-[5/4]">
                <Image
                  src="/images/tools.png"
                  alt="Professional hardware tools - Infinite Hardware & Electrical supplies quality equipment for mining, industrial and construction"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  priority
                />
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/30 via-transparent to-transparent" aria-hidden />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-6 animate-fade-in-up [animation-delay:400ms]">
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-zinc-200 shadow-md dark:bg-zinc-800 group">
                <Image
                  src="/images/tools.jpg"
                  alt="Professional tools and equipment"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden />
              </div>
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-zinc-200 shadow-md dark:bg-zinc-800 group">
                <Image
                  src="/images/solar.jpg"
                  alt="Solar and electrical power solutions"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden />
              </div>
            </div>

            {/* Stats row */}
            <div className="mt-4 grid grid-cols-4 gap-2 sm:mt-5 animate-fade-in-up [animation-delay:500ms]">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center rounded-xl border border-zinc-200/80 bg-white/80 py-3 px-2 text-center shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/80"
                >
                  <span className="text-lg font-bold gradient-text sm:text-xl">{value}</span>
                  <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Text column */}
          <div className="order-1 lg:order-2 mx-auto max-w-xl text-center lg:max-w-none lg:text-left">
            <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-brand-blue-muted/60 bg-white/90 px-4 py-2 text-sm font-medium text-brand-purple shadow-sm backdrop-blur-sm transition-colors duration-300 dark:border-brand-blue/40 dark:bg-zinc-900/90 dark:text-brand-blue">
              <Sparkles className="h-4 w-4 text-brand-blue animate-shimmer dark:text-brand-blue-muted" aria-hidden />
              Trusted across Zimbabwe since 2019
            </div>

            <h1 className="mt-6 animate-fade-in-up text-3xl font-bold tracking-tight [animation-delay:100ms] [animation-fill-mode:both] sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="text-zinc-900 dark:text-zinc-50">Your trusted partner for </span>
              <span className="gradient-text">hardware, electrical, software</span>
              <span className="text-zinc-900 dark:text-zinc-50"> and safety</span>
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
                className="group w-full sm:w-auto transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-brand-purple/25"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
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
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 lg:justify-start">
                {divisions.map(({ label, icon: Icon }) => (
                  <Link
                    key={label}
                    href="/services"
                    className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white/80 px-3 py-2 text-sm font-medium text-zinc-600 shadow-sm transition-all duration-200 hover:border-brand-blue/40 hover:bg-brand-blue-muted/10 hover:text-brand-purple hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-400 dark:hover:border-brand-blue/30 dark:hover:text-brand-blue"
                  >
                    <Icon className="h-3.5 w-3.5 text-brand-blue dark:text-brand-purple/80" aria-hidden />
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
