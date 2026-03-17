import { notFound } from "next/navigation";

/**
 * Catch-all route for paths that don't match any other route.
 * Required on Vercel so unmatched URLs are handled by the App Router and
 * app/not-found.tsx is rendered instead of Vercel's generic 404 page.
 * @see https://github.com/vercel/next.js/issues/60477
 */
export default function NotFoundCatchAll() {
  notFound();
}
