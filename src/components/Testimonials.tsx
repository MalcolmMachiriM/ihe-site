import { Quote, Star } from "lucide-react";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

const testimonials = [
  {
    quote:
      "Infinite Hardware and Electrical delivered beyond our expectations. Their team was professional, responsive, and the quality of products has had a measurable impact on our operations.",
    name: "Sarah Mitchell",
    role: "Director of Operations",
    company: "TechCorp Ltd",
    initials: "SM",
    color: "from-violet-500 to-purple-600",
  },
  {
    quote:
      "Working with IHE has been a game-changer. They understood our hardware and electrical needs from day one and provided solutions that have streamlined our workflow.",
    name: "James Chen",
    role: "CTO",
    company: "Innovate Solutions",
    initials: "JC",
    color: "from-blue-500 to-cyan-500",
  },
  {
    quote:
      "The expertise and dedication of the IHE team are unmatched. We consider them a true partner for our mining and industrial requirements.",
    name: "Emily Rodriguez",
    role: "CEO",
    company: "Growth Partners",
    initials: "ER",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(110,181,224,0.07),transparent)] dark:bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(107,95,138,0.1),transparent)]" aria-hidden />

      <Container>
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Hear from organizations that have partnered with us."
        />

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="group animate-fade-in-up relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-200/60 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-zinc-950/60"
              style={{ animationDelay: `${i * 120}ms`, animationFillMode: "both" }}
            >
              {/* Top gradient bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${t.color} opacity-80`} aria-hidden />

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
                  ))}
                </div>

                {/* Quote icon */}
                <Quote className="h-8 w-8 text-brand-blue-muted/60 transition-colors duration-300 dark:text-brand-purple/40" aria-hidden />

                {/* Quote text */}
                <p className="mt-3 flex-1 text-zinc-600 leading-relaxed dark:text-zinc-400">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3 border-t border-zinc-100 pt-5 dark:border-zinc-800">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-sm font-bold text-white shadow-sm`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                      {t.name}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
