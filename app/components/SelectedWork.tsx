import Image from "next/image";
import { projects, type Project } from "../data/projects";

export const professional = projects.filter((p) => p.kind === "professional");
const personal = projects.filter((p) => p.kind === "personal");

function CaseStudy({ project }: { project: Project }) {
  return (
    <article id={`case-${project.slug}`} data-trace={project.slug} className="scroll-mt-32">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1" data-reveal>
        <h3 className="text-lead">{project.title}</h3>
        {project.sector ? <p className="text-small text-ink-soft">{project.sector}</p> : null}
      </div>
      <p className="mt-1 text-small text-ink-soft" data-reveal style={{ "--d": "70ms" } as React.CSSProperties}>
        {project.role}
      </p>
      <p className="mt-5 max-w-[62ch]" data-reveal style={{ "--d": "140ms" } as React.CSSProperties}>
        {project.summary}
      </p>
      {project.outcome ? (
        <p
          className="mt-6 max-w-[34ch] text-lead font-semibold text-accent"
          data-reveal
          style={{ "--d": "210ms" } as React.CSSProperties}
        >
          {project.outcome}
        </p>
      ) : null}
      <p className="mt-5 text-small text-ink-soft" data-reveal style={{ "--d": "210ms" } as React.CSSProperties}>
        <span className="sr-only">Technologies used: </span>
        {project.stack.join(", ")}
      </p>

    </article>
  );
}

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-title" className="px-[var(--m)] pb-[calc(var(--gap-section)/2)] pt-[calc(var(--gap-section)/2)] lg:px-0 lg:pb-[calc(var(--gap-section)/2)]">
      <h2 id="work-title" className="text-title" data-reveal>
        Selected work
      </h2>
      <p className="mt-4 max-w-[44ch] text-lead" data-reveal style={{ "--d": "70ms" } as React.CSSProperties}>
        What I built, who it was for, and what changed because of it.
      </p>

      <div className="mt-[clamp(4rem,8vw,7rem)] space-y-[clamp(5rem,10vw,9rem)]">
        {professional.map((project) => (
          <CaseStudy key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

function SideProject({ project }: { project: Project }) {
  const label = (what: string) => `${project.title}, ${what} (opens in a new tab)`;
  return (
    <article className="seam" aria-labelledby={`side-${project.slug}`}>
      {project.image ? (
        <>
          <div className="seam__pane seam__pane--l" aria-hidden="true">
            <div className="seam__picture">
              <Image src={project.image} alt="" fill sizes="100vw" />
            </div>
          </div>
          <div className="seam__pane seam__pane--r">
            <div className="seam__picture">
              <Image src={project.image} alt={project.imageAlt ?? ""} fill sizes="100vw" />
            </div>
          </div>
        </>
      ) : null}

      <div className="relative flex h-full flex-col items-center justify-center px-[var(--m)] text-center">
        <h3 id={`side-${project.slug}`} className="seam__title" data-reveal>
          {project.title}
        </h3>
        <p className="mt-8 max-w-[40ch] text-lead">{project.summary}</p>
        <p className="mt-3 text-small text-white/80">
          <span className="sr-only">Technologies used: </span>
          {project.stack.join(", ")}
        </p>
        <p className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-body font-semibold">
          {project.live ? (
            <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={label("live demo")} className="link inline-flex min-h-11 items-center gap-2">
              Live demo <span className="arrow" aria-hidden="true">→</span>
            </a>
          ) : null}
          {project.repo ? (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" aria-label={label("source code on GitHub")} className="link inline-flex min-h-11 items-center gap-2">
              Source <span className="arrow" aria-hidden="true">→</span>
            </a>
          ) : null}
        </p>
      </div>
    </article>
  );
}

export function SideProjects() {
  return (
    <section aria-labelledby="side-projects-title">
      <div className="frame grid gap-6 pb-[clamp(3rem,6vw,5rem)] pt-[calc(var(--gap-section)/2)] lg:grid-cols-2 lg:items-end lg:pt-[var(--gap-section)]">
        <h2 id="side-projects-title" className="text-title" data-reveal>
          Side projects
        </h2>
        <p className="max-w-[40ch] text-lead" data-reveal style={{ "--d": "70ms" } as React.CSSProperties}>
          Projects I build for fun, and to test out new tools before using them on client work.
        </p>
      </div>
      {personal.map((project) => (
        <SideProject key={project.slug} project={project} />
      ))}
    </section>
  );
}
