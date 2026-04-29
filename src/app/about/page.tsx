import Image from "next/image";
import Link from "next/link";
import { Target, Users, Building2, ArrowUpRight, Quote } from "lucide-react";
import Container from "../../components/ui/Container";
import CallToAction from "../../components/CallToAction";

const productImages = [
  { src: "/images/grinder.jpg", alt: "Power tools and grinders", label: "Power Tools", num: "01" },
  { src: "/images/testmeter.jpg", alt: "Electrical testing equipment", label: "Test Equipment", num: "02" },
  { src: "/images/reflectors.jpg", alt: "Safety reflectors", label: "Safety Gear", num: "03" },
  { src: "/images/engineering.jpg", alt: "Engineering supplies", label: "Engineering", num: "04" },
  { src: "/images/paint.jpg", alt: "Paints and coatings", label: "Paints", num: "05" },
  { src: "/images/screws.jpg", alt: "Screws and fasteners", label: "Fasteners", num: "06" },
  { src: "/images/man-electrical-fuses.jpg", alt: "Electrical components", label: "Electrical", num: "07" },
  { src: "/images/store-pliers.jpg", alt: "Hand tools and pliers", label: "Hand Tools", num: "08" },
];

const timeline = [
  {
    year: "2019",
    title: "Founded in Gweru",
    body: "Infinite Hardware & Electrical opens its doors in L.I.S Gweru with a focus on domestic hardware and electrical supply.",
  },
  {
    year: "2020",
    title: "Safety division added",
    body: "Expanded into PPE and safety equipment as demand from mining and industrial clients grew.",
  },
  {
    year: "2022",
    title: "Software in-house",
    body: "Brought software developers and consultants on-board to deliver bespoke ERP, asset management and audit systems.",
  },
  {
    year: "Today",
    title: "Four divisions, one partner",
    body: "Serving clients across mining, industrial, manufacturing, agricultural and business sectors nationwide.",
  },
];

const infoCards = [
  {
    icon: Target,
    title: "Our Vision",
    body: "We put the customer at the center of everything we do and deliver cutting-edge products that exceed specifications. Our mission is a seamless platform where every client can access electrical, hardware, software and safety needs in one place.",
  },
  {
    icon: Users,
    title: "Our Team",
    body: "Dedicated, professional and committed to continuous improvement. Quality is paramount and we strive to meet the highest standards. With astute business practice, a passion for service and a can-do mentality, we deliver timely solutions.",
  },
];

export default function About() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-200 bg-brand-cream pb-16 pt-12 dark:border-zinc-800 dark:bg-zinc-950 sm:pt-16 lg:pb-24 lg:pt-24">
        <div
          className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-50 dark:opacity-30"
          aria-hidden
        />
        <div
          className="absolute -top-32 -right-20 -z-10 h-96 w-96 rounded-full bg-brand-blue/15 blur-3xl"
          aria-hidden
        />

        <Container>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-brand-blue dark:text-brand-blue-muted">
            <Building2 className="h-3 w-3" />
            About IHE · Gweru, Zimbabwe
          </div>
          <div className="mt-6 grid grid-cols-12 gap-8">
            <h1 className="col-span-12 font-display text-5xl leading-[0.96] tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-7xl lg:col-span-9 lg:text-[120px]">
              Wholly Zimbabwean.
              <br />
              <span className="italic text-brand-purple dark:text-brand-blue-muted">
                Infinitely
              </span>{" "}
              ambitious.
            </h1>
            <p className="col-span-12 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg lg:col-span-3 lg:self-end">
              Established 2019 to provide hardware, electrical, safety and software solutions to clients across Zimbabwe.
            </p>
          </div>
        </Container>
      </section>

      {/* Big hero image */}
      <section className="-mt-px">
        <Container>
          <div className="relative -mt-12 overflow-hidden rounded-[36px] shadow-2xl sm:-mt-20 lg:-mt-28">
            <div className="relative aspect-[16/9] w-full bg-zinc-200 dark:bg-zinc-800">
              <Image
                src="/images/team-office.jpg"
                alt="The IHE team at work"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-brand-ink/60 via-transparent to-transparent"
                aria-hidden
              />
              <div className="absolute inset-x-6 bottom-6 flex flex-wrap items-end justify-between gap-4 sm:inset-x-10 sm:bottom-10">
                <div className="rounded-2xl bg-white/95 px-5 py-3 backdrop-blur dark:bg-zinc-950/90">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                    On the ground · Daily
                  </p>
                  <p className="font-display mt-1 text-2xl tracking-tight text-zinc-900 dark:text-zinc-50">
                    Built for Zimbabwe&apos;s industries.
                  </p>
                </div>
                <div className="flex gap-2">
                  {["Mining", "Industrial", "Agri"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white backdrop-blur"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision + Team */}
      <section className="py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-8 lg:gap-12">
            {infoCards.map(({ icon: Icon, title, body }, i) => (
              <article
                key={title}
                className="group col-span-12 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 sm:p-10 lg:col-span-6 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-ink text-white dark:bg-white dark:text-zinc-900">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-400">
                    0{i + 1} / 02
                  </span>
                </div>
                <h2 className="font-display mt-6 text-3xl tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                  {title}
                </h2>
                <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="relative overflow-hidden bg-zinc-950 py-20 text-white sm:py-24 lg:py-28">
        <div
          className="absolute inset-0 -z-0 opacity-50"
          style={{
            backgroundImage: `radial-gradient(ellipse 60% 50% at 90% 10%, rgba(37,99,235,0.18), transparent 60%), radial-gradient(ellipse 60% 50% at 10% 90%, rgba(255,107,44,0.12), transparent 60%)`,
          }}
          aria-hidden
        />
        <Container>
          <div className="relative">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-brand-blue-muted">
              <span className="h-px w-10 bg-brand-blue-muted/60" />
              Our journey · 2019 — present
            </div>
            <h2 className="font-display mt-6 max-w-4xl text-4xl leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl">
              From a single-shop startup to{" "}
              <span className="italic text-brand-accent-soft">
                a four-division
              </span>{" "}
              partner.
            </h2>

            <ol className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {timeline.map((t, i) => (
                <li
                  key={t.year}
                  className="bg-zinc-950 p-6 transition-colors duration-300 hover:bg-zinc-900 sm:p-8"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                    {String(i + 1).padStart(2, "0")} / 04
                  </p>
                  <p className="font-display mt-3 text-5xl tracking-tight text-brand-accent-soft sm:text-6xl">
                    {t.year}
                  </p>
                  <p className="mt-6 font-display text-xl text-white sm:text-2xl">
                    {t.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {t.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Banking details */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-12 gap-8 lg:gap-16">
            <div className="col-span-12 lg:col-span-5">
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-brand-blue dark:text-brand-blue-muted">
                <span className="h-px w-10 bg-brand-blue/60 dark:bg-brand-blue-muted/60" />
                Banking · Vendor info
              </div>
              <h2 className="font-display mt-5 text-4xl leading-[1.04] tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
                Verified vendor.
                <br />
                <span className="italic text-brand-purple dark:text-brand-blue-muted">
                  Easy payments.
                </span>
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-zinc-600 dark:text-zinc-400">
                Direct deposit details for clients placing orders. Email us for purchase orders or full vendor onboarding.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-800 sm:grid-cols-2">
                {[
                  ["Bank", "FBC Bank"],
                  ["Branch", "Gweru"],
                  ["Account name", "Infinite Hardware and Electrical"],
                  ["Vendor number", "719287"],
                  ["Nostro account", "4490122252019"],
                  ["ZWL account", "5790122252019"],
                ].map(([label, value]) => (
                  <div key={label} className="bg-white p-6 dark:bg-zinc-950">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                      {label}
                    </dt>
                    <dd className="font-display mt-2 text-xl tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-2xl">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* Quote strip */}
      <section className="border-y border-zinc-200 bg-brand-cream py-20 dark:border-zinc-800 dark:bg-zinc-950 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <Quote className="mx-auto h-10 w-10 fill-brand-accent text-brand-accent" />
            <blockquote className="font-display mt-6 text-3xl leading-[1.15] tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl md:text-5xl">
              <span className="text-zinc-400 dark:text-zinc-600">&ldquo;</span>
              We are committed to excellence and innovation, ensuring our customers have a{" "}
              <span className="italic text-brand-purple dark:text-brand-blue-muted">
                trusted partner
              </span>{" "}
              for their mining, industrial, manufacturing, agricultural and business requirements.
              <span className="text-zinc-400 dark:text-zinc-600">&rdquo;</span>
            </blockquote>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              — IHE vision statement
            </p>
          </div>
        </Container>
      </section>

      {/* Product range gallery */}
      <section className="py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="mb-12 grid grid-cols-12 items-end gap-8">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-brand-blue dark:text-brand-blue-muted">
                <span className="h-px w-10 bg-brand-blue/60 dark:bg-brand-blue-muted/60" />
                Product range · Across divisions
              </div>
              <h2 className="font-display mt-5 text-4xl leading-[1.04] tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl md:text-6xl">
                Eight categories.
                <br />
                <span className="italic text-brand-purple dark:text-brand-blue-muted">
                  Hundreds
                </span>{" "}
                of line items.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 transition-all duration-200 hover:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-white/40"
              >
                Browse the full catalogue
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:gap-4">
            {productImages.map(({ src, alt, label, num }, i) => (
              <div
                key={src}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-800 animate-scale-in"
                style={{ animationDelay: `${i * 50}ms`, animationFillMode: "both" }}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90"
                  aria-hidden
                />
                <span className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">
                  {num}
                </span>
                <p className="absolute bottom-3 left-3 right-3 font-display text-lg leading-tight text-white sm:text-xl">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CallToAction />
    </div>
  );
}
