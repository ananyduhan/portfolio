import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-32 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">404</p>
      <h1 className="mt-4 font-display text-6xl tracking-tight">
        Nothing here<span className="italic text-muted"> — yet.</span>
      </h1>
      <Link
        href="/"
        className="mt-10 inline-block rounded-full border border-line-strong px-5 py-2.5 text-sm hover:border-fg"
      >
        ← Back home
      </Link>
    </section>
  );
}
