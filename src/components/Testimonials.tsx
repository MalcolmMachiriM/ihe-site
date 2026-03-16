import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

const testimonials = [
  {
    quote:
      "Infinite Hardware and Electrical delivered beyond our expectations. Their team was professional, responsive, and the quality of products has had a measurable impact on our operations.",
    name: "Sarah Mitchell",
    role: "Director of Operations",
    company: "TechCorp Ltd",
  },
  {
    quote:
      "Working with IHE has been a game-changer. They understood our hardware and electrical needs from day one and provided solutions that have streamlined our workflow.",
    name: "James Chen",
    role: "CTO",
    company: "Innovate Solutions",
  },
  {
    quote:
      "The expertise and dedication of the IHE team are unmatched. We consider them a true partner for our mining and industrial requirements.",
    name: "Emily Rodriguez",
    role: "CEO",
    company: "Growth Partners",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Hear from organizations that have partnered with us."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <p className="text-zinc-600 dark:text-zinc-400">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 border-t border-zinc-200 pt-4 dark:border-zinc-700">
                <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                  {t.name}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
