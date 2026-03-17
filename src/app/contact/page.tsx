"use client";

import { useState, useCallback } from "react";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
          body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
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
      } catch {
        setStatus("error");
        setErrorMessage("Network error. Please try again.");
      }
    },
    [name, email, message]
  );

  return (
    <div className="py-12 sm:py-16 md:py-20">
      <Container>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:mb-5 sm:text-4xl">
          Contact Us
        </h1>
        <p className="mb-8 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:mb-10 md:mb-12 sm:text-lg">
          Get in touch with our team. We would love to hear from you about
          hardware, electrical, software or safety needs. Visit us at No. 23
          Lincoln Road, L.I.S Gweru, or use the form below.
        </p>
        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Get in touch
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-zinc-600 dark:text-zinc-400 sm:mt-6 sm:space-y-5">
              <li>
                <a
                  href="mailto:enquiries@ihe.co.zw"
                  className="flex items-center gap-3 transition-colors hover:text-brand-purple dark:hover:text-brand-blue"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue-muted/40 text-brand-purple dark:bg-brand-purple/30 dark:text-brand-blue">
                    <Mail className="h-5 w-5" aria-hidden />
                  </span>
                  enquiries@ihe.co.zw
                </a>
              </li>
              <li>
                <a
                  href="tel:+263776339832"
                  className="flex items-center gap-3 transition-colors hover:text-brand-purple dark:hover:text-brand-blue"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue-muted/40 text-brand-purple dark:bg-brand-purple/30 dark:text-brand-blue">
                    <Phone className="h-5 w-5" aria-hidden />
                  </span>
                  +263 776 339832
                </a>
              </li>
              <li>
                <a
                  href="tel:+263712167281"
                  className="flex items-center gap-3 transition-colors hover:text-brand-purple dark:hover:text-brand-blue"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue-muted/40 text-brand-purple dark:bg-brand-purple/30 dark:text-brand-blue">
                    <Phone className="h-5 w-5" aria-hidden />
                  </span>
                  +263 712 167281
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue-muted/40 text-brand-purple dark:bg-brand-purple/30 dark:text-brand-blue">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <span>No. 23 Lincoln Road, L.I.S Gweru</span>
              </li>
            </ul>
          </div>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow focus-within:shadow-md dark:border-zinc-800 dark:bg-zinc-900 sm:p-8"
          >
            <div className="mb-5 sm:mb-6">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-50"
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
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-500 transition-colors focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/25 dark:focus:border-brand-blue dark:focus:ring-brand-blue/25 disabled:opacity-60 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400"
                placeholder="Your name"
              />
            </div>
            <div className="mb-5 sm:mb-6">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-50"
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
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-500 transition-colors focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/25 dark:focus:border-brand-blue dark:focus:ring-brand-blue/25 disabled:opacity-60 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400"
                placeholder="your@email.com"
              />
            </div>
            <div className="mb-6 sm:mb-8">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-50"
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
                className="w-full resize-y rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-500 transition-colors focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/25 dark:focus:border-brand-blue dark:focus:ring-brand-blue/25 disabled:opacity-60 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400"
                placeholder="Your message..."
              />
            </div>
            {status === "success" && (
              <div
                className="mb-6 flex items-center gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200"
                role="status"
                aria-live="polite"
              >
                <CheckCircle className="h-5 w-5 shrink-0" aria-hidden />
                <p className="text-sm font-medium">Message sent. We&apos;ll get back to you soon.</p>
              </div>
            )}
            {status === "error" && errorMessage && (
              <div
                className="mb-6 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800 dark:border-red-800 dark:bg-red-950/50 dark:text-red-200"
                role="alert"
              >
                <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" aria-hidden />
                <p className="text-sm font-medium">{errorMessage}</p>
              </div>
            )}
            <Button
              type="submit"
              variant="primary"
              className="w-full sm:w-auto"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 shrink-0 animate-spin" aria-hidden />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 shrink-0" aria-hidden />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
