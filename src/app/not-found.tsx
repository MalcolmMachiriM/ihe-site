import Link from "next/link";
import Container from "../components/ui/Container";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-50 dark:opacity-30"
        aria-hidden
      />
      <div className="flex min-h-[70vh] flex-col items-center justify-center py-20">
        <Container className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-blue dark:text-brand-blue-muted">
            Error · 404
          </p>
          <h1 className="font-display mt-6 text-7xl leading-none tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-9xl md:text-[180px]">
            Lost in the
            <br />
            <span className="italic text-brand-purple dark:text-brand-blue-muted">
              warehouse.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-zinc-600 dark:text-zinc-400">
            The page you were looking for has been moved, renamed, or was never on this shelf to begin with.
          </p>
          <Link
            href="/"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-brand-ink px-7 py-4 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:scale-[1.02] dark:bg-white dark:text-zinc-900"
          >
            Back to home
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Container>
      </div>
    </div>
  );
}
