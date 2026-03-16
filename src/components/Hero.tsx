import Container from "./ui/Container";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50 to-white py-24 dark:from-zinc-950 dark:to-zinc-900 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl md:text-6xl">
            Your trusted partner for hardware, electrical, software and safety
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl">
            Infinite Hardware and Electrical is a wholly owned Zimbabwean company
            established in 2019. We deliver cutting-edge products and a seamless
            platform for mining, industrial, manufacturing, agricultural and business needs.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary">
              Get Started
            </Button>
            <Button href="/about" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
