"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "../data/profile";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

// A plain bar that steps out of the way while reading down and comes back on
// the way up. The link for the section being read is marked as current.
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [current, setCurrent] = useState<string | null>(null);
  const last = useRef(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        const delta = y - last.current;
        if (Math.abs(delta) > 6) {
          setHidden(delta > 0 && y > window.innerHeight * 0.6);
          last.current = y;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setCurrent(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className="bar fixed inset-x-0 top-0 z-40 bg-page"
      {...(hidden && !open ? { "data-hidden": "" } : {})}
      onFocus={() => setHidden(false)}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-ink"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="frame flex h-[var(--bar)] items-center justify-between gap-6">
        <a href="#top" className="font-heading text-body font-semibold tracking-tight text-ink">
          {profile.name}
        </a>

        <ul className="hidden items-center gap-8 text-small lg:flex">
          {links.map((link) => {
            const isCurrent = current === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isCurrent ? "location" : undefined}
                  className={`relative py-2 transition-colors duration-200 hover:text-ink ${isCurrent ? "text-ink" : "text-ink-soft"}`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left bg-accent transition-transform duration-300 ${isCurrent ? "scale-x-100" : "scale-x-0"}`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.cvPath}
            download
            className="hidden min-h-10 items-center bg-surface px-4 text-small font-semibold text-ink transition-colors hover:bg-accent hover:text-accent-ink sm:inline-flex"
          >
            CV
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open ? (
        <ul id="mobile-menu" className="frame bg-page pb-6 text-lead text-ink lg:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)} className="block py-2">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.cvPath} download className="block py-2 font-semibold text-accent">
              Download CV
            </a>
          </li>
        </ul>
      ) : null}
    </header>
  );
}
