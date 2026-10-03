import type { Metadata } from "next";
import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Agents, evaluation work, full-stack products and ML experiments.",
};

export default function ProjectsPage() {
  return (
    <section className="pt-16 sm:pt-24">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Projects</p>
      <h1 className="mt-4 font-display text-6xl leading-[0.95] tracking-tight sm:text-7xl">
        Work<span className="italic text-muted">, mostly with models.</span>
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted">
        Agents that run real workflows, evaluation runs that check what a model actually learned, and the
        full-stack products around them.
      </p>

      <div className="mt-14">
        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}
