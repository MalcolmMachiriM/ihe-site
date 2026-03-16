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
      </Container>
    </div>
  );
}
