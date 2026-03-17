import Image from "next/image";
import Container from "../../components/ui/Container";

export default function About() {
  return (
    <div className="py-16">
      <Container>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          About Infinite Hardware and Electrical
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          We are a wholly owned Zimbabwean company established in 2019 to provide
          domestic hardware and tools, electrical supplies, safety products and
          software solutions. We are composed of four main divisions: Hardware and
          Tools, Electrical Supplies, Software products, and Safety equipment.
        </p>
        <div className="mt-12 relative aspect-[2/1] max-w-4xl overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-800">
          <Image
            src="/images/team-office.jpg"
            alt="IHE professionals at work - dedicated team delivering hardware, electrical and software solutions"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 896px"
            priority
          />
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Our Vision
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              We put the customer at the center of everything we do and deliver
              cutting-edge products that meet and exceed specifications. Our
              mission is to create a seamless platform where customers can easily
              access their electrical, hardware, software and safety equipment
              needs. We are committed to excellence and innovation for mining,
              industrial, manufacturing, agricultural and business requirements.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Our Team
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              Our team is dedicated, professional and committed to continuously
              self-improve. Quality is of the utmost importance, and we strive to
              meet the highest standards in everything we do. With astute business
              practice, a passion for customer service and a can-do mentality, we
              deliver timely solutions.
            </p>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            Our product range
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:gap-4">
            {[
              { src: "/images/grinder.jpg", alt: "Power tools and grinders" },
              { src: "/images/testmeter.jpg", alt: "Electrical testing equipment" },
              { src: "/images/reflectors.jpg", alt: "Safety reflectors and visibility gear" },
              { src: "/images/engineering.jpg", alt: "Engineering and industrial supplies" },
              { src: "/images/paint.jpg", alt: "Paints and coatings" },
              { src: "/images/bolts.jpg", alt: "Fasteners and hardware" },
              { src: "/images/man-electrical-fuses.jpg", alt: "Electrical components and fuses" },
              { src: "/images/store-pliers.jpg", alt: "Hand tools and pliers" },
            ].map(({ src, alt }) => (
              <div
                key={src}
                className="relative aspect-square overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
