"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects/", label: "Projects" },
  { href: "/about/", label: "About" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "border-line bg-bg/75" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-lg border border-line-strong bg-surface font-display text-lg italic text-accent transition-colors group-hover:border-accent">
            {profile.name[0].toLowerCase()}
          </span>
          <span className="hidden font-mono text-xs uppercase tracking-[0.16em] text-muted transition-colors group-hover:text-fg sm:inline">
            {profile.name}
          </span>
        </Link>

        <div className="flex items-center gap-1 rounded-full border border-line bg-surface/60 p-1">
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3.5 py-1.5 text-[13px] transition-colors ${
                  active ? "bg-raised text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="hidden rounded-full bg-fg px-4 py-1.5 text-[13px] font-medium text-bg transition-colors hover:bg-accent md:inline-block"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
