"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Home, Info, Wrench, Mail, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/services", label: "Services", icon: Wrench },
  { href: "/contact", label: "Contact", icon: Mail },
] as const;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/95 shadow-sm backdrop-blur-md transition-colors duration-300 dark:border-zinc-800/80 dark:bg-zinc-950/95">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 sm:px-6 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity duration-200 hover:opacity-90"
          aria-label="Infinite Hardware & Electrical - Home"
        >
          <Image
            src="/images/logo.jpeg"
            alt="Infinite Hardware & Electrical logo"
            width={120}
            height={40}
            className="h-9 w-auto object-contain sm:h-10"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-1 md:flex md:gap-1">
          {navLinks.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-brand-blue-muted/25 text-brand-purple dark:bg-brand-purple/25 dark:text-brand-blue"
                      : "text-zinc-700 hover:bg-brand-blue-muted/15 hover:text-brand-purple dark:text-zinc-300 dark:hover:bg-brand-purple/15 dark:hover:text-brand-blue"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden />
                  {label}
                  {isActive && (
                    <span className="ml-1 h-1.5 w-1.5 rounded-full bg-brand-purple dark:bg-brand-blue" aria-hidden />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-transparent text-zinc-700 transition-all duration-200 hover:bg-zinc-100 md:hidden dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span className={`transition-all duration-200 ${mobileOpen ? "rotate-90 scale-90" : "rotate-0 scale-100"}`}>
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
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
          <div className="border-t border-zinc-200 bg-white/98 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950/98">
            <ul className="flex flex-col gap-1">
              {navLinks.map(({ href, label, icon: Icon }) => {
                const isActive = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-brand-blue-muted/20 text-brand-purple dark:bg-brand-purple/20 dark:text-brand-blue"
                          : "text-zinc-700 hover:bg-zinc-100 hover:text-brand-purple dark:text-zinc-300 dark:hover:bg-zinc-800/60 dark:hover:text-brand-blue"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      <Icon className="h-4 w-4 shrink-0" aria-hidden />
                      {label}
                      {isActive && (
                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-brand-purple dark:bg-brand-blue" aria-hidden />
                      )}
                    </Link>
                  </li>
                );
              })}
              <li className="flex items-center gap-3 border-t border-zinc-200/80 pt-3 mt-1 dark:border-zinc-700/80 px-4">
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Theme</span>
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
