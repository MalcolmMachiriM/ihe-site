import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

export default function AboutSection() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          title="About Infinite Hardware and Electrical"
          subtitle="A wholly owned Zimbabwean company established in 2019 to provide domestic hardware and tools, electrical supplies, safety products and software solutions."
        />
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              We are composed of four main divisions: Hardware and Tools,
              Electrical Supplies, Software products, and Safety equipment.
            </p>
            <h3 className="mt-8 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Our Vision
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
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
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-200 shadow-lg dark:bg-zinc-800">
            <div className="absolute inset-0 flex items-center justify-center text-zinc-400 dark:text-zinc-500">
              <span className="text-sm font-medium">Image placeholder</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
