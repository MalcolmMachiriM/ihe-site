import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowUpRight } from "lucide-react";
import Container from "./ui/Container";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const socialPlaceholders = [
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "Facebook", href: "#", icon: Facebook },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      {/* Top gradient accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-purple via-brand-blue to-brand-purple-hover" />

      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_40%_at_50%_100%,rgba(82,74,111,0.05),transparent)] dark:bg-[radial-gradient(ellipse_80%_40%_at_50%_100%,rgba(107,95,138,0.07),transparent)]" aria-hidden />

      <Container>
        <div className="py-12 sm:py-14 md:py-16">
          <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">

            {/* Brand column */}
            <div className="lg:col-span-2">
              <Link
                href="/"
                className="inline-flex items-center gap-2.5 transition-opacity duration-200 hover:opacity-80"
                aria-label="Infinite Hardware & Electrical - Home"
              >
                <Image
                  src="/images/logo.jpeg"
                  alt="Infinite Hardware & Electrical logo"
                  width={100}
                  height={34}
                  className="h-8 w-auto object-contain"
                />
                <span className="hidden text-base font-bold text-zinc-900 dark:text-zinc-50 sm:inline">
                  Infinite Hardware & Electrical
                </span>
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                A wholly owned Zimbabwean company established in 2019. We provide
                domestic hardware and tools, electrical supplies, safety products
                and software solutions. Your trusted partner for mining, industrial,
                manufacturing, agricultural and business needs.
              </p>
              {/* Social icons */}
              <div className="mt-6 flex gap-2.5">
                {socialPlaceholders.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-500 transition-all duration-200 hover:border-brand-blue/40 hover:bg-brand-blue-muted/15 hover:text-brand-purple hover:scale-105 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-brand-blue/30 dark:hover:bg-brand-purple/15 dark:hover:text-brand-blue"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-50">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2.5">
                {quickLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="group inline-flex items-center gap-1 text-sm text-zinc-500 transition-colors duration-200 hover:text-brand-purple dark:text-zinc-400 dark:hover:text-brand-blue"
                    >
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" aria-hidden />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-50">
                Contact
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-zinc-500 dark:text-zinc-400">
                <li>
                  <a
                    href="mailto:enquiries@ihe.co.zw"
                    className="flex items-center gap-2.5 transition-colors hover:text-brand-purple dark:hover:text-brand-blue"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-zinc-100 dark:bg-zinc-800">
                      <Mail className="h-3.5 w-3.5" aria-hidden />
                    </div>
                    enquiries@ihe.co.zw
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+263776339832"
                    className="flex items-center gap-2.5 transition-colors hover:text-brand-purple dark:hover:text-brand-blue"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-zinc-100 dark:bg-zinc-800">
                      <Phone className="h-3.5 w-3.5" aria-hidden />
                    </div>
                    +263 776 339832
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+263712167281"
                    className="flex items-center gap-2.5 transition-colors hover:text-brand-purple dark:hover:text-brand-blue"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-zinc-100 dark:bg-zinc-800">
                      <Phone className="h-3.5 w-3.5" aria-hidden />
                    </div>
                    +263 712 167281
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-zinc-100 dark:bg-zinc-800">
                    <MapPin className="h-3.5 w-3.5" aria-hidden />
                  </div>
                  <span>No. 23 Lincoln Road, L.I.S Gweru</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-zinc-200 pt-8 dark:border-zinc-800 sm:mt-12 sm:flex-row">
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              © 2026 Infinite Hardware and Electrical. All rights reserved.
            </p>
            <p className="text-xs text-zinc-400 dark:text-zinc-600">
              Gweru, Zimbabwe
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
