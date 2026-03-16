"use client";

import { useState, useCallback } from "react";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
    },
    []
  );

  return (
    <div className="py-16">
      <Container>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Contact Us
        </h1>
        <p className="mb-12 max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Get in touch with our team. We would love to hear from you about
          hardware, electrical, software or safety needs. Visit us at No. 23
          Lincoln Road, L.I.S Gweru, or use the form below.
        </p>
        <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Get in touch
            </h2>
            <ul className="mt-4 space-y-3 text-zinc-600 dark:text-zinc-400">
              <li>
                <a
                  href="mailto:enquiries@ihe.co.zw"
                  className="hover:text-zinc-900 dark:hover:text-zinc-50"
                >
                  enquiries@ihe.co.zw
                </a>
              </li>
              <li>
                <a href="tel:+263776339832" className="hover:text-zinc-900 dark:hover:text-zinc-50">
                  +263 776 339832
                </a>
              </li>
              <li>
                <a href="tel:+263712167281" className="hover:text-zinc-900 dark:hover:text-zinc-50">
                  +263 712 167281
                </a>
              </li>
              <li>No. 23 Lincoln Road, L.I.S Gweru</li>
            </ul>
            <h2 className="mt-8 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Banking Details
            </h2>
            <ul className="mt-3 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              <li>Bank: FBC Bank</li>
              <li>Branch: Gweru</li>
              <li>Nostro: 4490122252019</li>
              <li>ZWL: 5790122252019</li>
              <li>Account: Infinite Hardware and Electrical</li>
              <li>Vendor No: 719287</li>
            </ul>
          </div>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="mb-6">
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
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-500 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400"
                placeholder="Your name"
              />
            </div>
            <div className="mb-6">
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
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-500 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400"
                placeholder="your@email.com"
              />
            </div>
            <div className="mb-8">
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
                className="w-full resize-y rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-500 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400"
                placeholder="Your message..."
              />
            </div>
            <Button type="submit" variant="primary">
              Send Message
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
