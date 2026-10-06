import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist-faint">
        404 · route not found
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-mist">
        This endpoint doesn't exist.
      </h1>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-4 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
      >
        ← Back to home
      </Link>
    </main>
  );
}
