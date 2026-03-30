import Image from "next/image";
import { Target, Users, Star, Building2 } from "lucide-react";
import Container from "../../components/ui/Container";

const productImages = [
  { src: "/images/grinder.jpg", alt: "Power tools and grinders", label: "Power Tools" },
  { src: "/images/testmeter.jpg", alt: "Electrical testing equipment", label: "Test Equipment" },
  { src: "/images/reflectors.jpg", alt: "Safety reflectors and visibility gear", label: "Safety Gear" },
  { src: "/images/engineering.jpg", alt: "Engineering and industrial supplies", label: "Engineering" },
  { src: "/images/paint.jpg", alt: "Paints and coatings", label: "Paints & Coatings" },
  { src: "/images/screws.jpg", alt: "Screws, bolts and fastener hardware", label: "Fasteners" },
  { src: "/images/man-electrical-fuses.jpg", alt: "Electrical components and fuses", label: "Electrical" },
  { src: "/images/store-pliers.jpg", alt: "Hand tools and pliers", label: "Hand Tools" },
];

const infoCards = [
  {
    icon: Target,
    title: "Our Vision",
    gradient: "from-violet-500/15 to-purple-500/5",
    iconBg: "bg-violet-500/15 text-violet-600 dark:bg-violet-400/15 dark:text-violet-400",
    body: "We put the customer at the center of everything we do and deliver cutting-edge products that meet and exceed specifications. Our mission is to create a seamless platform where customers can easily access their electrical, hardware, software and safety equipment needs. We are committed to excellence and innovation for mining, industrial, manufacturing, agricultural and business requirements.",
  },
  {
    icon: Users,
    title: "Our Team",
    gradient: "from-blue-500/15 to-cyan-500/5",
    iconBg: "bg-blue-500/15 text-blue-600 dark:bg-blue-400/15 dark:text-blue-400",
    body: "Our team is dedicated, professional and committed to continuously self-improve. Quality is of the utmost importance, and we strive to meet the highest standards in everything we do. With astute business practice, a passion for customer service and a can-do mentality, we deliver timely solutions.",
  },
];

export default function About() {
  return (
    <div className="relative overflow-hidden">
      {/* Page header */}
      <div className="relative py-16 sm:py-20 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 80% 60% at 50% 0%, rgba(82,74,111,0.1), transparent 55%),
              radial-gradient(ellipse 60% 40% at 90% 40%, rgba(110,181,224,0.12), transparent 50%),
              linear-gradient(to bottom, rgb(250 250 250), rgb(255 255 255))
            `,
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 -z-10 opacity-0 dark:opacity-100"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 80% 60% at 50% 0%, rgba(107,95,138,0.18), transparent 55%),
              linear-gradient(to bottom, rgb(10 10 10), rgb(18 18 24))
            `,
          }}
          aria-hidden
        />
        <Container>
          <div className="max-w-3xl animate-fade-in-up">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-blue-muted/50 bg-white/80 px-4 py-1.5 text-sm font-medium text-brand-purple backdrop-blur-sm dark:border-brand-blue/30 dark:bg-zinc-900/80 dark:text-brand-blue">
              <Building2 className="h-3.5 w-3.5" aria-hidden />
              Established 2019 · Gweru, Zimbabwe
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="text-zinc-900 dark:text-zinc-50">About </span>
              <span className="gradient-text">Infinite Hardware</span>
              <span className="text-zinc-900 dark:text-zinc-50"> and Electrical</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              We are a wholly owned Zimbabwean company established in 2019 to provide
              domestic hardware and tools, electrical supplies, safety products and
              software solutions. We are composed of four main divisions: Hardware and
              Tools, Electrical Supplies, Software products, and Safety equipment.
            </p>
          </div>
        </Container>
      </div>

      {/* Hero image */}
      <Container>
        <div className="relative aspect-[2/1] max-w-5xl overflow-hidden rounded-2xl bg-zinc-200 shadow-xl dark:bg-zinc-800 animate-fade-in-up [animation-delay:200ms]">
          <Image
            src="/images/team-office.jpg"
            alt="IHE professionals at work - dedicated team delivering hardware, electrical and software solutions"
            fill
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 960px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-transparent" aria-hidden />
          {/* Floating stat */}
          <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-xl border border-white/20 bg-white/15 px-5 py-3 backdrop-blur-md">
            <Star className="h-5 w-5 text-amber-400 fill-amber-400" aria-hidden />
            <div>
              <p className="text-xs font-medium text-white/70">Trusted since</p>
              <p className="text-base font-bold text-white">2019</p>
            </div>
          </div>
        </div>

        {/* Vision & Team cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 animate-fade-in-up [animation-delay:300ms]">
          {infoCards.map(({ icon: Icon, title, gradient, iconBg, body }) => (
            <div
              key={title}
              className={`relative overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br ${gradient} bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconBg} shadow-sm`}>
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                  {title}
                </h2>
              </div>
              <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* Product range */}
        <div className="mt-16 mb-16 animate-fade-in-up [animation-delay:400ms]">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-3xl">
                Our Product Range
              </h2>
              <p className="mt-2 text-zinc-500 dark:text-zinc-400">A selection of what we offer across our four divisions</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:gap-4">
            {productImages.map(({ src, alt, label }, i) => (
              <div
                key={src}
                className="group relative aspect-square overflow-hidden rounded-xl bg-zinc-200 shadow-sm dark:bg-zinc-800 animate-scale-in"
                style={{ animationDelay: `${i * 60}ms`, animationFillMode: "both" }}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-xs font-semibold text-white">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
