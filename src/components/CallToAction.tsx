import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import Container from "./ui/Container";
import Button from "./ui/Button";

export default function CallToAction() {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          {/* Animated gradient background */}
          <div
            className="absolute inset-0 bg-[length:200%_200%] animate-gradient"
            style={{
              backgroundImage: `linear-gradient(135deg, #3b3156 0%, #524a6f 25%, #3d5a7a 50%, #524a6f 75%, #3b3156 100%)`,
            }}
            aria-hidden
          />
          {/* Overlay radial highlights */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,rgba(110,181,224,0.25),transparent)] pointer-events-none" aria-hidden />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_30%,rgba(168,212,240,0.15),transparent)] pointer-events-none" aria-hidden />
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
            aria-hidden
          />

          {/* Decorative image */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2/5 max-w-sm opacity-15 pointer-events-none hidden lg:block" aria-hidden>
            <Image
              src="/images/tech-setup.png"
              alt=""
              width={400}
              height={300}
              className="object-contain object-right"
            />
          </div>

          {/* Content */}
          <div className="relative px-8 py-16 text-center sm:px-12 sm:py-20 md:px-16 lg:text-left">
            <div className="mx-auto max-w-2xl lg:mx-0">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm mb-6">
                <Phone className="h-3.5 w-3.5" aria-hidden />
                Get in touch today
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Ready to get started?
              </h2>
              <p className="mt-5 text-lg text-white/70 leading-relaxed">
                Let&apos;s discuss how we can help you achieve your goals. Get in
                touch today and take the first step toward lasting success.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4 lg:justify-start">
                <Button
                  href="/contact"
                  variant="primary"
                  className="group w-full sm:w-auto bg-white text-zinc-900 hover:bg-zinc-100 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 shadow-xl shadow-zinc-900/20 transition-transform duration-200 hover:scale-[1.02]"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
                <a
                  href="tel:+263776339832"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:border-white/50 sm:w-auto"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  +263 776 339832
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
