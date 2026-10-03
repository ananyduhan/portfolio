import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mx-auto mt-28 w-full max-w-5xl px-5 pb-10 sm:px-8">
      <div className="flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-faint">
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted">
          <li><Link className="hover:text-accent" href="/projects/">Projects</Link></li>
          <li><Link className="hover:text-accent" href="/about/">About</Link></li>
          <li><a className="hover:text-accent" href={profile.links.github}>GitHub</a></li>
          <li><a className="hover:text-accent" href={profile.links.linkedin}>LinkedIn</a></li>
          <li><a className="hover:text-accent" href={`mailto:${profile.email}`}>Email</a></li>
        </ul>
      </div>
    </footer>
  );
}
