"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home", num: "01" },
  { href: "/about", label: "About", num: "02" },
  { href: "/services", label: "Services", num: "03" },
  { href: "/contact", label: "Contact", num: "04" },
] as const;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top accent strip */}
      <div className="h-[3px] w-full bg-gradient-to-r from-brand-purple via-brand-blue to-brand-accent" />

      <nav
        className={`relative w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-zinc-200/70 bg-white/85 shadow-[0_2px_24px_-12px_rgba(13,14,18,0.18)] backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-950/80"
            : "border-b border-transparent bg-white/60 backdrop-blur-md dark:bg-zinc-950/50"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-3.5 sm:px-8 md:px-10 lg:px-12">
          {/* Brand */}
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Infinite Hardware & Electrical — Home"
          >
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-brand-ink p-1 ring-1 ring-zinc-200 dark:ring-zinc-800">
              <Image
                src="/images/logo.jpeg"
                alt=""
                width={36}
                height={36}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-[17px] tracking-tight text-zinc-900 dark:text-zinc-50">
                Infinite Hardware
              </span>
              <span className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                & Electrical · est. 2019
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map(({ href, label, num }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`group relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-zinc-900 dark:text-zinc-50"
                        : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                    }`}
                  >
                    <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500">
                      {num}
                    </span>
                    {label}
                    <span
                      className={`absolute inset-x-3 -bottom-px h-px origin-left bg-gradient-to-r from-brand-blue to-brand-accent transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                      aria-hidden
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right cluster */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Link
              href="/contact"
              className="group/cta hidden items-center gap-1.5 rounded-full bg-brand-ink px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:scale-[1.03] dark:bg-white dark:text-zinc-900 md:inline-flex"
            >
              Get a quote
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
            </Link>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition-all duration-200 hover:bg-zinc-100 md:hidden dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
              onClick={() => setMobileOpen((p) => !p)}
            >
              <span
                className={`transition-all duration-300 ${
                  mobileOpen ? "rotate-90" : "rotate-0"
                }`}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-out md:hidden ${
            mobileOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <div className="border-t border-zinc-200 bg-white/95 px-5 py-4 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/95">
              <ul className="flex flex-col gap-1">
                {navLinks.map(({ href, label, num }) => {
                  const isActive = pathname === href;
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className={`flex items-center justify-between rounded-2xl px-4 py-3.5 transition-all duration-200 ${
                          isActive
                            ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800/70 dark:text-zinc-50"
                            : "text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800/50"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="flex items-center gap-3">
                          <span className="font-mono text-[10px] text-zinc-400">
                            {num}
                          </span>
                          <span className="font-display text-xl tracking-tight">
                            {label}
                          </span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-zinc-400" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link
                href="/contact"
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-brand-ink px-5 py-3.5 text-sm font-semibold text-white dark:bg-white dark:text-zinc-900"
                onClick={() => setMobileOpen(false)}
              >
                Get a quote
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
