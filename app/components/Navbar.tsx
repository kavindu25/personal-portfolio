"use client";

import { useState } from "react";
import { profile } from "../data/profile";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  {href: "#education", label: "Education"},
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-page/90 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-ink"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#top" className="font-heading text-body font-semibold tracking-tight text-ink">
          {profile.name}
        </a>

        <ul className="hidden items-center gap-7 text-small md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-ink-2 transition-colors hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.cvPath}
            download
            className="hidden rounded-md border border-line px-3.5 py-1.5 text-small text-ink-2 transition-colors hover:border-ink sm:inline-block"
          >
            CV
          </a>
          <button
            type="button"
            className="grid size-9 place-items-center rounded-md md:hidden"
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
        <ul
          id="mobile-menu"
          className="border-t border-line bg-page px-5 py-3 text-body text-ink md:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2.5"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.cvPath} download className="block py-2.5 text-accent">
              Download CV
            </a>
          </li>
        </ul>
      ) : null}
    </header>
  );
}
