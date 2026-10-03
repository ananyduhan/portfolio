import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index?: number }) {
  return (
    <Link
      href={`/projects/${project.slug}/`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:bg-raised"
    >
      {/* accent hairline that draws across the top on hover */}
      <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-accent via-accent/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

      <div className="flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
        <span>
          {index !== undefined && <span className="mr-2 text-muted">{String(index + 1).padStart(2, "0")}</span>}
          {project.kind}
        </span>
        <span
          aria-hidden
          className="text-base text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        >
          ↗
        </span>
      </div>

      <h3 className="mt-5 text-xl font-medium leading-snug tracking-tight text-fg">
        {project.title}
      </h3>

      {project.award && (
        <p className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-0.5 text-xs text-accent">
          <span aria-hidden>★</span> {project.award}
        </p>
      )}

      <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{project.summary}</p>

      <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
        {project.stack.map((s) => (
          <li
            key={s}
            className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-muted"
          >
            {s}
          </li>
        ))}
      </ul>
    </Link>
  );
}
