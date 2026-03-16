"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-100/80 dark:border-zinc-700 dark:bg-zinc-800/80"
        aria-hidden
      >
        <span className="h-5 w-5" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-100/80 text-zinc-600 transition-all duration-300 hover:scale-105 hover:border-zinc-300 hover:bg-zinc-200/80 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:bg-zinc-700/80 dark:hover:text-zinc-50 dark:focus:ring-zinc-500 dark:focus:ring-offset-zinc-900"
    >
      {isDark ? (
        <Sun className="h-5 w-5 transition-transform duration-300" aria-hidden />
      ) : (
        <Moon className="h-5 w-5 transition-transform duration-300" aria-hidden />
      )}
    </button>
  );
}
