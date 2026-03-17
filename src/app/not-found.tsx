import Link from "next/link";
import Container from "../components/ui/Container";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center py-16">
      <Container className="text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-purple dark:text-brand-blue">
          404
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-zinc-600 dark:text-zinc-400">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Check the URL or head back to the homepage.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-purple px-6 py-3 text-sm font-medium text-white shadow-md transition-colors hover:bg-brand-purple-hover dark:bg-brand-purple dark:hover:bg-brand-purple-hover"
        >
          <Home className="h-4 w-4" aria-hidden />
          Back to home
        </Link>
      </Container>
    </div>
  );
}
