import Link from "next/link";
import Container from "./ui/Container";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const socialPlaceholders = [
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Facebook", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-zinc-950">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
            >
              Infinite Hardware & Electrical
            </Link>
            <p className="mt-4 max-w-md text-sm text-zinc-600 dark:text-zinc-400">
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
            <ul className="mt-4 space-y-3">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
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
            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <a
                  href="mailto:enquiries@ihe.co.zw"
                  className="hover:text-zinc-900 dark:hover:text-zinc-50"
                >
                  enquiries@ihe.co.zw
                </a>
              </li>
              <li>
                <a
                  href="tel:+263776339832"
                  className="hover:text-zinc-900 dark:hover:text-zinc-50"
                >
                  +263 776 339832
                </a>
              </li>
              <li>
                <a
                  href="tel:+263712167281"
                  className="hover:text-zinc-900 dark:hover:text-zinc-50"
                >
                  +263 712 167281
                </a>
              </li>
              <li>No. 23 Lincoln Road, L.I.S Gweru</li>
            </ul>
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-50">
              Follow Us
            </h3>
            <ul className="mt-3 flex gap-4">
              {socialPlaceholders.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
            © 2026 Infinite Hardware and Electrical. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
