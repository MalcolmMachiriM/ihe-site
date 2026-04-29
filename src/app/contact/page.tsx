"use client";

import { useState, useCallback } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import Container from "../../components/ui/Container";

type SubmitStatus = "idle" | "loading" | "success" | "error";

const subjects = [
  "Hardware quote",
  "Electrical quote",
  "Software project",
  "Safety / PPE",
  "General enquiry",
];

const channels = [
  {
    icon: Phone,
    label: "Direct",
    primary: "+263 776 339 832",
    secondary: "+263 712 167 281",
    href: "tel:+263776339832",
  },
  {
    icon: Mail,
    label: "Email",
    primary: "ihardware19@gmail.com",
    secondary: "Replies within 24h",
    href: "mailto:ihardware19@gmail.com",
  },
  {
    icon: MapPin,
    label: "Visit",
    primary: "No. 23 Lincoln Rd",
    secondary: "L.I.S Gweru, Zimbabwe",
    href: "https://maps.google.com/?q=No.+23+Lincoln+Road,+L.I.S+Gweru",
  },
  {
    icon: Clock,
    label: "Hours",
    primary: "Mon — Sat",
    secondary: "8am — 5pm CAT",
    href: null as string | null,
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(subjects[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setErrorMessage("");
      setStatus("loading");

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            message: `[${subject}] ${message.trim()}`,
          }),
        });
        const data = await res.json().catch(() => ({}));

        if (!res.ok) {
          setStatus("error");
          setErrorMessage(data.error ?? "Something went wrong. Please try again.");
          return;
        }

        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setSubject(subjects[0]);
      } catch {
        setStatus("error");
        setErrorMessage("Network error. Please try again.");
      }
    },
    [name, email, message, subject]
  );

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-200 bg-brand-cream pb-16 pt-12 dark:border-zinc-800 dark:bg-zinc-950 sm:pt-16 lg:pb-24 lg:pt-24">
        <div
          className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-50 dark:opacity-30"
          aria-hidden
        />
        <div
          className="absolute -top-32 -right-20 -z-10 h-96 w-96 rounded-full bg-brand-blue/15 blur-3xl"
          aria-hidden
        />

        <Container>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-brand-blue dark:text-brand-blue-muted">
            <span className="h-px w-10 bg-brand-blue/60 dark:bg-brand-blue-muted/60" />
            Contact · Let&apos;s talk
          </div>
          <div className="mt-6 grid grid-cols-12 gap-8">
            <h1 className="col-span-12 font-display text-5xl leading-[0.96] tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-7xl lg:col-span-9 lg:text-[120px]">
              Tell us what
              <br />
              <span className="italic text-brand-purple dark:text-brand-blue-muted">
                you need.
              </span>
            </h1>
            <p className="col-span-12 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg lg:col-span-3 lg:self-end">
              Quotes, custom orders or project enquiries — drop us a line and a member of the team will be back within a working day.
            </p>
          </div>
        </Container>
      </section>

      {/* Channels */}
      <section className="relative border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <Container>
          <ul className="grid grid-cols-1 gap-px overflow-hidden bg-zinc-200 dark:bg-zinc-800 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map(({ icon: Icon, label, primary, secondary, href }) => {
              const inner = (
                <>
                  <div className="flex items-start justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-ink text-white dark:bg-white dark:text-zinc-900">
                      <Icon className="h-4 w-4" />
                    </span>
                    {href && (
                      <ArrowUpRight className="h-4 w-4 text-zinc-400 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
                    )}
                  </div>
                  <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-400">
                    {label}
                  </p>
                  <p className="font-display mt-2 text-2xl leading-tight tracking-tight text-zinc-900 dark:text-zinc-50">
                    {primary}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                    {secondary}
                  </p>
                </>
              );

              return (
                <li key={label} className="bg-white dark:bg-zinc-950">
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex h-full flex-col p-6 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900 sm:p-8"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex h-full flex-col p-6 sm:p-8">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* Form + Map */}
      <section className="py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-8 lg:gap-16">
            {/* Form */}
            <div className="col-span-12 lg:col-span-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                / Send a message
              </p>
              <h2 className="font-display mt-3 text-3xl tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                Drop us a line.
              </h2>

              <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      disabled={status === "loading"}
                      placeholder="Your name"
                      className="mt-2 w-full border-0 border-b border-zinc-300 bg-transparent px-0 py-3 text-lg text-zinc-900 placeholder-zinc-400 transition-colors focus:border-brand-ink focus:outline-none focus:ring-0 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={status === "loading"}
                      placeholder="you@company.co.zw"
                      className="mt-2 w-full border-0 border-b border-zinc-300 bg-transparent px-0 py-3 text-lg text-zinc-900 placeholder-zinc-400 transition-colors focus:border-brand-ink focus:outline-none focus:ring-0 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-white"
                    />
                  </div>
                </div>

                <div>
                  <p className="block font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                    What is this about?
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {subjects.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSubject(s)}
                        className={`rounded-full border px-4 py-2 text-sm transition-all duration-200 ${
                          subject === s
                            ? "border-brand-ink bg-brand-ink text-white dark:border-white dark:bg-white dark:text-zinc-900"
                            : "border-zinc-300 bg-transparent text-zinc-700 hover:border-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-white/40"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    disabled={status === "loading"}
                    placeholder="Tell us what you're looking for, quantities, deadlines…"
                    className="mt-2 w-full resize-y border-0 border-b border-zinc-300 bg-transparent px-0 py-3 text-base text-zinc-900 placeholder-zinc-400 transition-colors focus:border-brand-ink focus:outline-none focus:ring-0 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-white"
                  />
                </div>

                {status === "success" && (
                  <div
                    className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800 dark:border-emerald-800/40 dark:bg-emerald-950/40 dark:text-emerald-200"
                    role="status"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <p className="text-sm font-medium">
                      Message sent. We&apos;ll get back to you shortly.
                    </p>
                  </div>
                )}
                {status === "error" && errorMessage && (
                  <div
                    className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-800 dark:border-red-800/40 dark:bg-red-950/40 dark:text-red-200"
                    role="alert"
                  >
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                    <p className="text-sm font-medium">{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-ink px-7 py-4 text-base font-medium text-white shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 dark:bg-white dark:text-zinc-900"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map / aside */}
            <aside className="col-span-12 lg:col-span-5">
              <div className="sticky top-28 space-y-6">
                <div className="overflow-hidden rounded-3xl border border-zinc-200 shadow-sm dark:border-zinc-800">
                  <iframe
                    title="IHE — No. 23 Lincoln Road, L.I.S Gweru"
                    src="https://www.google.com/maps?q=Lincoln+Road,+Gweru,+Zimbabwe&output=embed"
                    width="100%"
                    height="320"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block w-full grayscale"
                  />
                </div>

                <div className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                    / Banking
                  </p>
                  <p className="font-display mt-2 text-2xl tracking-tight text-zinc-900 dark:text-zinc-50">
                    FBC Bank · Gweru
                  </p>
                  <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                    <dt className="text-zinc-500">Account name</dt>
                    <dd className="font-medium text-zinc-900 dark:text-zinc-50">
                      Infinite H. & E.
                    </dd>
                    <dt className="text-zinc-500">Vendor #</dt>
                    <dd className="font-medium text-zinc-900 dark:text-zinc-50">
                      719287
                    </dd>
                    <dt className="text-zinc-500">Nostro</dt>
                    <dd className="font-mono text-xs text-zinc-900 dark:text-zinc-50">
                      4490122252019
                    </dd>
                    <dt className="text-zinc-500">ZWL</dt>
                    <dd className="font-mono text-xs text-zinc-900 dark:text-zinc-50">
                      5790122252019
                    </dd>
                  </dl>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </div>
  );
}
