import { Quote, Star } from "lucide-react";
import Container from "./ui/Container";

const testimonials = [
  {
    quote:
      "IHE has been an invaluable partner for our mining operations. Their hardware and safety equipment is always top quality, and their team understands the demands of the Zimbabwean mining sector.",
    name: "Tatenda Moyo",
    role: "Operations Manager",
    company: "Zimplats Holdings",
    initials: "TM",
  },
  {
    quote:
      "We have sourced electrical supplies and PPE from IHE for over three years. Reliable, professional and always on time — exactly what we need to keep our projects running.",
    name: "Chiedza Ndlovu",
    role: "Site Engineer",
    company: "Jacobson & Associates",
    initials: "CN",
  },
  {
    quote:
      "Their software solutions transformed how we manage assets across our depots. A proudly Zimbabwean company that delivers on its promises.",
    name: "Farai Mutasa",
    role: "CEO",
    company: "Savanna Agri-Supply Co.",
    initials: "FM",
  },
];

export default function Testimonials() {
  const featured = testimonials[0];

  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-brand-cream dark:bg-zinc-950" aria-hidden />

      <Container>
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-brand-blue dark:text-brand-blue-muted">
          <span className="h-px w-10 bg-brand-blue/60 dark:bg-brand-blue-muted/60" />
          Word from clients · Across Zimbabwe
        </div>

        <div className="mt-10 grid grid-cols-12 gap-8 lg:gap-12">
          {/* Featured quote */}
          <div className="col-span-12 lg:col-span-8">
            <Quote className="h-12 w-12 fill-brand-accent text-brand-accent" />
            <blockquote className="mt-6">
              <p className="font-display text-3xl leading-[1.15] tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl md:text-5xl">
                <span className="text-zinc-400 dark:text-zinc-600">&ldquo;</span>
                {featured.quote}
                <span className="text-zinc-400 dark:text-zinc-600">&rdquo;</span>
              </p>
              <footer className="mt-8 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-ink font-mono text-sm font-bold text-white dark:bg-white dark:text-zinc-900">
                  {featured.initials}
                </span>
                <div>
                  <p className="font-medium text-zinc-900 dark:text-zinc-50">
                    {featured.name}
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                    {featured.role} · {featured.company}
                  </p>
                </div>
              </footer>
            </blockquote>
          </div>

          {/* Side stack */}
          <div className="col-span-12 flex flex-col gap-6 lg:col-span-4">
            {testimonials.slice(1).map((t, i) => (
              <figure
                key={t.name}
                className="group rounded-3xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 animate-fade-in-up"
                style={{ animationDelay: `${i * 120}ms`, animationFillMode: "both" }}
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-zinc-100 pt-4 dark:border-zinc-800">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-ink font-mono text-xs font-bold text-white dark:bg-white dark:text-zinc-900">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                      {t.name}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
