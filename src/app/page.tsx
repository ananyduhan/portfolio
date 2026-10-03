import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { education, profile, skills } from "@/data/profile";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative pb-20 pt-16 sm:pb-28 sm:pt-24">
        <div aria-hidden className="bg-grid pointer-events-none absolute -inset-x-40 -top-24 bottom-0 -z-10" />
        <div aria-hidden className="glow pointer-events-none absolute -left-24 -top-10 -z-10 size-[520px]" />

        <p className="rise inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          <span className="pulse-dot size-1.5 rounded-full bg-accent" />
          {profile.status}
        </p>

        <h1
          className="rise mt-8 font-display text-[clamp(3.5rem,13vw,8.5rem)] leading-[0.88] tracking-[-0.03em]"
          style={{ animationDelay: "80ms" }}
        >
          Hi, I&rsquo;m {profile.name}<span className="text-accent">.</span>
          <br />
          <span className="italic text-muted">I build with models.</span>
        </h1>

        <p
          className="rise mt-8 max-w-xl text-lg leading-relaxed text-muted"
          style={{ animationDelay: "160ms" }}
        >
          {profile.tagline}
        </p>

        <div className="rise mt-10 flex flex-wrap items-center gap-3" style={{ animationDelay: "240ms" }}>
          <Link
            href="/projects/"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
          >
            See my work →
          </Link>
          <a
            href={profile.links.github}
            className="rounded-full border border-line-strong px-5 py-2.5 text-sm text-fg transition-colors hover:border-fg"
          >
            GitHub
          </a>
          <a
            href={profile.links.linkedin}
            className="rounded-full border border-line-strong px-5 py-2.5 text-sm text-fg transition-colors hover:border-fg"
          >
            LinkedIn
          </a>
        </div>

        <dl
          className="rise mt-16 grid max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3"
          style={{ animationDelay: "320ms" }}
        >
          {[
            ["Based in", profile.location],
            ["Studying", "BIT (AI) · Macquarie"],
            ["Latest win", "1st · Hack for Humanity"],
          ].map(([k, v]) => (
            <div key={k} className="bg-bg px-4 py-3">
              <dt className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-faint">{k}</dt>
              <dd className="mt-1 text-sm text-fg">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── Featured work ────────────────────────────────────────── */}
      <section className="border-t border-line pt-16">
        <SectionHeading eyebrow="Selected work" title="Things I've built">
          <Link href="/projects/" className="font-mono text-xs text-muted hover:text-accent">
            All {projects.length} projects →
          </Link>
        </SectionHeading>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* ── Toolkit ──────────────────────────────────────────────── */}
      <section className="mt-28 border-t border-line pt-16">
        <SectionHeading eyebrow="Toolkit" title="What I work with" />
        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.group}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">{s.group}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-line bg-surface px-3 py-1.5 text-[13.5px] text-fg/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="relative mt-28 overflow-hidden rounded-3xl border border-line bg-surface px-6 py-14 sm:px-12">
        <div aria-hidden className="glow pointer-events-none absolute -right-40 -top-40 size-[480px]" />
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          {education.school.split(",")[0]} · {education.expected}
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
          Looking for an intern who ships <span className="italic text-accent">and</span> measures?
        </h2>
        <p className="mt-5 max-w-lg text-muted">
          I&rsquo;m open to ML engineering, software and research assistant roles. Email is the fastest way to reach me.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent"
          >
            {profile.email}
          </a>
          <Link
            href="/about/"
            className="rounded-full border border-line-strong px-5 py-2.5 text-sm text-fg transition-colors hover:border-fg"
          >
            More about me
          </Link>
        </div>
      </section>
    </>
  );
}
