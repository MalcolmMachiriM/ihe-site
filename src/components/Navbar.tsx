"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/95">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 sm:px-8">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          IHE
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-zinc-200 bg-transparent md:hidden dark:border-zinc-700"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span
            className={`h-0.5 w-5 rounded-full bg-zinc-700 transition dark:bg-zinc-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-zinc-700 transition dark:bg-zinc-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-zinc-700 transition dark:bg-zinc-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-zinc-200 px-6 py-4 md:hidden dark:border-zinc-800">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
