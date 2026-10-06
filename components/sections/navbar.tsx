"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "work", label: "Work" },
  { id: "engineering", label: "Engineering" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line bg-ink-950/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className={cn(
          "shell flex items-center justify-between transition-all duration-300",
          scrolled ? "h-14" : "h-[72px]"
        )}
      >
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label="Ayush Kumar — home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-line-strong bg-ink-850 font-mono text-xs font-semibold tracking-widest text-accent transition-colors group-hover:border-accent/50">
            AK
          </span>
          <span
            className={cn(
              "font-mono text-sm tracking-wide text-mist transition-all duration-300",
              scrolled ? "opacity-100" : "opacity-90"
            )}
          >
            AYUSH<span className="text-mist-faint">/</span>KUMAR
          </span>
        </a>

        {/* desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="rounded-md px-3 py-2 text-[13px] text-mist-dim transition-colors hover:bg-ink-850 hover:text-mist"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/ayushchaubey17"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-mist-faint transition-colors hover:text-mist"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/ayush-chaubey-4a9702271/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-mist-faint transition-colors hover:text-mist"
          >
            <LinkedinIcon />
          </a>
          <a
            href="/resume"
            className="inline-flex items-center gap-1.5 rounded-lg border border-accent/40 bg-accent/10 px-3 py-1.5 text-[13px] font-medium text-accent transition-colors hover:bg-accent/20"
          >
            Resume
          </a>
        </div>

        {/* mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-mist md:hidden"
        >
          <div className="space-y-1.5">
            <span
              className={cn(
                "block h-px w-5 bg-current transition-transform duration-200",
                open && "translate-y-[3.5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-current transition-transform duration-200",
                open && "-translate-y-[3.5px] -rotate-45"
              )}
            />
          </div>
        </button>
      </nav>

      {/* mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-14 z-40 flex flex-col bg-ink-950/98 backdrop-blur-lg transition-opacity duration-200 md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <ul className="flex flex-1 flex-col gap-1 p-6">
          {SECTIONS.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line/60 py-4 text-lg text-mist"
              >
                {s.label}
                <span className="font-mono text-xs text-mist-faint">
                  0{i + 1}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 p-6">
          <a
            href="/resume"
            onClick={() => setOpen(false)}
            className="flex-1 rounded-lg border border-accent/40 bg-accent/10 py-3 text-center text-sm font-medium text-accent"
          >
            Resume
          </a>
          <a
            href="https://github.com/ayushchaubey17"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-mist"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/ayush-chaubey-4a9702271/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-mist"
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </header>
  );
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.66.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}
