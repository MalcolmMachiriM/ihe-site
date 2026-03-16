import { ArrowRight, Sparkles } from "lucide-react";
import Container from "./ui/Container";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 md:py-28 lg:py-32">
      <div
        className="absolute inset-0 -z-10 bg-[length:120%_120%] bg-[position:70%_30%] opacity-100 transition-opacity duration-500 dark:opacity-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(251, 191, 36, 0.12), transparent 55%),
            radial-gradient(ellipse 60% 40% at 85% 20%, rgba(59, 130, 246, 0.08), transparent 50%),
            radial-gradient(ellipse 50% 30% at 15% 40%, rgba(34, 197, 94, 0.06), transparent 45%),
            linear-gradient(to bottom, rgb(250 250 250), rgb(255 255 255))
          `,
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-[length:120%_120%] bg-[position:70%_30%] opacity-0 transition-opacity duration-500 dark:opacity-100"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(251, 191, 36, 0.15), transparent 55%),
            radial-gradient(ellipse 60% 40% at 85% 20%, rgba(59, 130, 246, 0.1), transparent 50%),
            linear-gradient(to bottom, rgb(10 10 10), rgb(24 24 27))
          `,
        }}
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-[image:radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.05),transparent_50%)] dark:bg-[image:radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.08),transparent_50%)]" aria-hidden />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/90 px-4 py-2 text-sm font-medium text-zinc-600 shadow-sm backdrop-blur-sm transition-colors duration-300 dark:border-zinc-700/80 dark:bg-zinc-900/90 dark:text-zinc-400">
            <Sparkles className="h-4 w-4 text-amber-500 animate-shimmer" aria-hidden />
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
          <div className="mt-8 flex flex-col items-center justify-center gap-4 animate-fade-in-up [animation-delay:300ms] [animation-fill-mode:both] sm:mt-10 sm:flex-row sm:gap-5">
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
        </div>
      </Container>
    </section>
  );
}
