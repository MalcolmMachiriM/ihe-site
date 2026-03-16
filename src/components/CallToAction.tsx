import Container from "./ui/Container";
import Button from "./ui/Button";

export default function CallToAction() {
  return (
    <section className="py-24">
      <Container>
        <div className="rounded-3xl bg-zinc-900 px-8 py-16 text-center shadow-xl dark:bg-zinc-800 sm:px-12 sm:py-20">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-300">
            Let&apos;s discuss how we can help you achieve your goals. Get in
            touch today and take the first step toward lasting success.
          </p>
          <div className="mt-10">
            <Button
              href="/contact"
              variant="primary"
              className="bg-white text-zinc-900 hover:bg-zinc-100 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
