import type { Metadata } from "next";
import { education, experience, profile, skills } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: `About ${profile.name} — ${profile.role}.`,
};

function Label({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{children}</h2>
  );
}

export default function AboutPage() {
  return (
    <div className="pt-16 sm:pt-24">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">About</p>
      <h1 className="mt-4 max-w-3xl font-display text-6xl leading-[0.95] tracking-tight sm:text-7xl">
        Building close to the model<span className="italic text-muted">, measuring what changed.</span>
      </h1>

      <div className="mt-16 grid gap-14 md:grid-cols-[1fr_18rem]">
        <section className="space-y-5 text-[17px] leading-relaxed text-fg/85">
          {profile.about.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </section>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-line bg-surface p-5">
            <Label>Currently</Label>
            <p className="mt-3 flex items-center gap-2 text-sm">
              <span className="pulse-dot size-1.5 rounded-full bg-accent" />
              {profile.status}
            </p>
            <p className="mt-2 text-sm text-muted">{profile.location}</p>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-5">
            <Label>Interested in</Label>
            <ul className="mt-3 space-y-1.5 text-sm text-fg/90">
              {profile.interests.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* ── Education & experience ─────────────────────────────────── */}
      <section className="mt-24 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <Label>Education</Label>
          <h3 className="mt-5 text-xl font-medium tracking-tight">{education.degree}</h3>
          <p className="mt-1 text-muted">
            {education.major} · {education.school}
          </p>
          <p className="mt-1 font-mono text-xs text-faint">{education.expected}</p>
          <ul className="mt-6 flex flex-wrap gap-1.5">
            {education.coursework.map((c) => (
              <li key={c} className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-muted">
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <Label>Leadership</Label>
          <ul className="mt-5 space-y-5">
            {experience.map((e) => (
              <li key={e.role}>
                <h3 className="text-xl font-medium tracking-tight">{e.role}</h3>
                <p className="mt-1 text-muted">{e.org}</p>
                <p className="mt-1 font-mono text-xs text-faint">{e.period}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Skills ─────────────────────────────────────────────────── */}
      <section className="mt-24 border-t border-line pt-12">
        <Label>Skills</Label>
        <dl className="mt-8 divide-y divide-line">
          {skills.map((s) => (
            <div key={s.group} className="grid gap-3 py-5 sm:grid-cols-[12rem_1fr]">
              <dt className="font-mono text-xs uppercase tracking-[0.12em] text-faint">{s.group}</dt>
              <dd className="text-fg/90">{s.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── Contact ────────────────────────────────────────────────── */}
      <section className="mt-24 border-t border-line pt-12">
        <Label>Get in touch</Label>
        <p className="mt-6 max-w-xl text-[17px] text-fg/85">
          Email is best:{" "}
          <a className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          . I&rsquo;m also on{" "}
          <a className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent" href={profile.links.github}>
            GitHub
          </a>{" "}
          and{" "}
          <a className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent" href={profile.links.linkedin}>
            LinkedIn
          </a>
          .
        </p>
      </section>
    </div>
  );
}
