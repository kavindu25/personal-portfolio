"use client";

import { useEffect, useState, type ReactNode } from "react";
import type { Project } from "../data/projects";
import { Trace, projectTrace, wholeTrace } from "./Trace";

type StageProps = {
  projects: Project[];
  years: string;
  hero: ReactNode;
  work: ReactNode;
};

const WHOLE = "all";

// The split stage: a deep teal field that holds the request trace while the
// hero and the case studies scroll beside it. The trace redraws for whichever
// case study is in the middle of the screen, or for the one picked here.
export function Stage({ projects, years, hero, work }: StageProps) {
  const [active, setActive] = useState<string>(WHOLE);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-trace]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.getAttribute("data-trace") ?? WHOLE);
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  function pick(key: string) {
    setActive(key);
    // Beside the text (desktop), bring the case study into view. On a phone
    // the trace redraws in place, under the visitor's thumb.
    if (!window.matchMedia("(min-width: 1024px)").matches) return;
    const target = document.querySelector<HTMLElement>(`[data-trace="${key}"]`);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: key === WHOLE ? "start" : "center" });
  }

  const project = projects.find((p) => p.slug === active);
  const rows = project ? projectTrace(project) : wholeTrace();
  const total = project
    ? { label: project.sector ? `${project.sector} client` : "Result", value: project.outcome ?? "" }
    : { label: "total", value: years };

  const options = [{ key: WHOLE, label: "Whole stack" }, ...projects.map((p) => ({ key: p.slug, label: p.title }))];

  return (
    <div className="split">
      <div className="split__hero split__reading">{hero}</div>

      <aside
        aria-label="Request trace"
        data-open=""
        className="split__stage on-field mx-[var(--m)] mt-12 flex flex-col justify-between gap-8 bg-field p-6 text-field-ink sm:p-10 lg:mx-0 lg:mt-0 lg:p-[clamp(2rem,3vw,3rem)]"
      >
        <div>
          <p id="stage-picker" className="text-small text-field-soft">
            Trace one project through the stack
          </p>
          <ul aria-labelledby="stage-picker" className="mt-3 lg:pr-[clamp(3rem,6vw,6rem)]">
            {options.map((option) => {
              const on = option.key === active;
              return (
                <li key={option.key}>
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => pick(option.key)}
                    className={`group flex min-h-11 w-full items-center gap-3 py-1 text-left leading-snug lg:min-h-9 transition-colors duration-200 ${
                      on ? "font-semibold text-field-ink" : "text-field-soft hover:text-field-ink"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-0.5 shrink-0 bg-current transition-[width] duration-300 ${on ? "w-6" : "w-3"}`}
                    />
                    {option.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <Trace
            path={project ? `/work/${project.slug}` : "/kavindu"}
            rows={rows}
            total={total}
            draw
          />
        </div>
      </aside>

      <div className="split__work split__reading">{work}</div>
    </div>
  );
}
