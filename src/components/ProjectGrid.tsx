"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("all");

  const tags = useMemo(() => {
    const counts = new Map<string, number>();
    projects.forEach((p) => p.tags.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1)));
    return [...counts].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }, [projects]);

  const shown = active === "all" ? projects : projects.filter((p) => p.tags.includes(active));

  const chip = (value: string, label: string, count: number) => {
    const pressed = active === value;
    return (
      <button
        key={value}
        type="button"
        aria-pressed={pressed}
        onClick={() => setActive(pressed && value !== "all" ? "all" : value)}
        className={`rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors ${
          pressed
            ? "border-accent bg-accent-soft text-accent"
            : "border-line text-muted hover:border-line-strong hover:text-fg"
        }`}
      >
        {label}
        <span className="ml-1.5 opacity-50">{count}</span>
      </button>
    );
  };

  return (
    <>
      <div role="group" aria-label="Filter projects by topic" className="flex flex-wrap gap-2">
        {chip("all", "all", projects.length)}
        {tags.map(([t, n]) => chip(t, t, n))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {shown.map((p) => (
          <ProjectCard key={p.slug} project={p} index={projects.indexOf(p)} />
        ))}
      </div>
    </>
  );
}
