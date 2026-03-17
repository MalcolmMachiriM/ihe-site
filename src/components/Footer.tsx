import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
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
    <footer className="border-t-4 border-t-brand-purple/50 border-zinc-200 bg-zinc-50 py-12 transition-colors duration-300 dark:border-t-brand-blue/50 dark:border-zinc-800 dark:bg-zinc-950 sm:py-14 md:py-16">
      <Container>
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xl font-bold tracking-tight text-brand-purple transition-colors hover:text-brand-purple-hover dark:text-brand-blue dark:hover:text-brand-blue-muted"
              aria-label="Infinite Hardware & Electrical - Home"
            >
              <Image
                src="/images/logo.jpeg"
                alt="Infinite Hardware & Electrical logo"
                width={100}
                height={34}
                className="h-8 w-auto object-contain"
              />
              <span className="hidden sm:inline">Infinite Hardware & Electrical</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              A wholly owned Zimbabwean company established in 2019. We provide
              domestic hardware and tools, electrical supplies, safety products
              and software solutions. Your trusted partner for mining, industrial,
              manufacturing, agricultural and business needs.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-50">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-zinc-600 transition-colors hover:text-brand-purple dark:text-zinc-400 dark:hover:text-brand-blue"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-50">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <a
                  href="mailto:enquiries@ihe.co.zw"
                  className="flex items-center gap-2 transition-colors hover:text-brand-purple dark:hover:text-brand-blue"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden />
                  enquiries@ihe.co.zw
                </a>
              </li>
              <li>
                <a
                  href="tel:+263776339832"
                  className="flex items-center gap-2 transition-colors hover:text-brand-purple dark:hover:text-brand-blue"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden />
                  +263 776 339832
                </a>
              </li>
              <li>
                <a
                  href="tel:+263712167281"
                  className="flex items-center gap-2 transition-colors hover:text-brand-purple dark:hover:text-brand-blue"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden />
                  +263 712 167281
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <span>No. 23 Lincoln Road, L.I.S Gweru</span>
              </li>
            </ul>
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-50">
              Follow Us
            </h3>
            <ul className="mt-3 flex gap-4">
              {socialPlaceholders.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue-muted/40 text-brand-purple transition-all duration-200 hover:scale-105 hover:bg-brand-purple/20 hover:text-brand-purple-hover dark:bg-brand-purple/20 dark:text-brand-blue dark:hover:bg-brand-blue/30 dark:hover:text-brand-blue-muted"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-zinc-200 pt-8 dark:border-zinc-800 sm:mt-12">
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
            © 2026 Infinite Hardware and Electrical. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
