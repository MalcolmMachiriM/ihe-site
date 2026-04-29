import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeProvider from "../components/ThemeProvider";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Infinite Hardware & Electrical — Hardware, Electrical, Software & Safety",
  description:
    "A wholly owned Zimbabwean company. Hardware and tools, electrical supplies, safety equipment and software solutions for mining, industrial, manufacturing and agricultural clients. Based in Gweru.",
  keywords: [
    "hardware Zimbabwe", "electrical supplies Zimbabwe", "PPE Zimbabwe",
    "Gweru hardware", "mining tools", "industrial supplies", "safety equipment",
    "Infinite Hardware and Electrical",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} min-h-screen antialiased flex flex-col`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
