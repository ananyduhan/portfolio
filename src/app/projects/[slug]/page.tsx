import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectPage({ params }: Params) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const i = projects.indexOf(project);
  const next = projects[(i + 1) % projects.length];

  return (
    <article className="pt-12 sm:pt-16">
      <Link href="/projects/" className="font-mono text-xs text-muted transition-colors hover:text-accent">
        ← All projects
      </Link>

      <header className="mt-10 border-b border-line pb-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          {String(i + 1).padStart(2, "0")} · {project.kind}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.98] tracking-tight sm:text-7xl">
          {project.title}
        </h1>
        {project.award && (
          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-sm text-accent">
            <span aria-hidden>★</span> {project.award}
          </p>
        )}
        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">{project.summary}</p>

        {project.links && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        )}
      </header>

      <div className="grid gap-12 pt-12 md:grid-cols-[1fr_15rem]">
        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">What I did</h2>
          <ol className="mt-6 space-y-5">
            {project.highlights.map((h, n) => (
              <li key={n} className="grid grid-cols-[2rem_1fr] gap-2 text-[16.5px] leading-relaxed text-fg/90">
                <span className="pt-1 font-mono text-xs text-accent">{String(n + 1).padStart(2, "0")}</span>
                <span>{h}</span>
              </li>
            ))}
          </ol>
        </section>

        <aside className="space-y-8 md:border-l md:border-line md:pl-8">
          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">Stack</h2>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <li key={s} className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-xs text-fg/90">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">Topics</h2>
            <p className="mt-3 font-mono text-xs text-muted">{project.tags.join(" · ")}</p>
          </div>
        </aside>
      </div>

      <Link
        href={`/projects/${next.slug}/`}
        className="group mt-24 flex items-center justify-between gap-6 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong sm:p-8"
      >
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">Next project</p>
          <p className="mt-2 font-display text-3xl tracking-tight transition-colors group-hover:text-accent sm:text-4xl">
            {next.title}
          </p>
        </div>
        <span aria-hidden className="text-2xl text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent">
          →
        </span>
      </Link>
    </article>
  );
}
