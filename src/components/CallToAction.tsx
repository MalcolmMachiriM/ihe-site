import { MessageCircle } from "lucide-react";
import Container from "./ui/Container";
import Button from "./ui/Button";

export default function CallToAction() {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-zinc-900 px-6 py-14 text-center shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 dark:bg-zinc-800 sm:px-10 sm:py-16 md:px-12 md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(251,191,36,0.15),transparent)] pointer-events-none" aria-hidden />
          <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white transition-transform duration-300 hover:scale-110">
            <MessageCircle className="h-8 w-8" aria-hidden />
          </div>
          <h2 className="relative mt-6 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Ready to get started?
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-base text-zinc-300 sm:text-lg">
            Let&apos;s discuss how we can help you achieve your goals. Get in
            touch today and take the first step toward lasting success.
          </p>
          <div className="relative mt-8 sm:mt-10">
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
