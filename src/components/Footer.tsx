import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowUpRight } from "lucide-react";
import Container from "./ui/Container";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const divisions = [
  { href: "/services", label: "Hardware & Tools" },
  { href: "/services", label: "Electrical Products" },
  { href: "/services", label: "Software Solutions" },
  { href: "/services", label: "Safety Equipment" },
];

const socials = [
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "Facebook", href: "#", icon: Facebook },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-zinc-950 text-white">
      {/* Top accent bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-brand-purple via-brand-blue to-brand-accent" />

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
        aria-hidden
      />
      <div
        className="absolute -top-40 left-1/2 h-96 w-[600px] -translate-x-1/2 rounded-full bg-brand-blue/20 blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        {/* Big wordmark */}
        <div className="border-b border-white/10 pb-10 pt-16 sm:pt-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            Infinite solutions · Est. 2019
          </p>
          <h2 className="font-display mt-3 text-5xl leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-[140px]">
            Infinite Hardware
            <br />
            <span className="italic text-zinc-500">& Electrical.</span>
          </h2>
        </div>

        <div className="grid gap-12 py-12 sm:gap-16 lg:grid-cols-12 lg:py-16">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <p className="max-w-md text-sm leading-relaxed text-zinc-400">
              A wholly Zimbabwean-owned supplier of hardware, electrical,
              software and safety solutions for mining, industrial,
              manufacturing, agricultural and business clients.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-zinc-300 transition-all duration-200 hover:scale-105 hover:border-white hover:bg-white hover:text-zinc-900"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div className="lg:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-1 text-sm text-zinc-300 transition-colors hover:text-white"
                  >
                    {label}
                    <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions */}
          <div className="lg:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
              Divisions
            </p>
            <ul className="mt-5 space-y-3">
              {divisions.map(({ href, label }, i) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-white"
                  >
                    <span className="font-mono text-[10px] text-zinc-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
              Reach us
            </p>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href="mailto:ihardware19@gmail.com"
                  className="group flex items-start gap-3 text-zinc-300 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  ihardware19@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+263776339832"
                  className="group flex items-start gap-3 text-zinc-300 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                  +263 776 339 832
                </a>
              </li>
              <li>
                <a
                  href="tel:+263712167281"
                  className="group flex items-start gap-3 text-zinc-300 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                  +263 712 167 281
                </a>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  No. 23 Lincoln Road,
                  <br />
                  L.I.S Gweru, Zimbabwe
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">
            © {new Date().getFullYear()} Infinite Hardware & Electrical · All rights reserved
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">
            Crafted in Gweru · ZW
          </p>
        </div>
      </Container>
    </footer>
  );
}
