import Image from "next/image";
import { projects, type Project } from "../data/projects";
import { MaskText } from "./motion/MaskText";
import { Section } from "./Section";
import { Stack } from "./Stack";

const professional = projects.filter((p) => p.kind === "professional");
const personal = projects.filter((p) => p.kind === "personal");

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

function CaseStudy({ project }: { project: Project }) {
  return (
    <article
      id={`case-${project.slug}`}
      className="grid scroll-mt-32 gap-x-16 gap-y-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
    >
      <div>
        <MaskText as="h3" text={project.title} className="text-[clamp(1.6rem,1.2rem+1.4vw,2.25rem)] leading-[1.1]" />
        <p className="mt-3 text-small text-ink-soft" data-reveal style={d(80)}>
          {project.role}
        </p>
      </div>
      <div>
        <p className="max-w-[60ch]" data-reveal style={d(140)}>
          {project.summary}
        </p>
        {project.outcome ? (
          <p className="mt-5 max-w-[40ch] text-lead font-semibold text-accent" data-reveal style={d(200)}>
            {project.outcome}
          </p>
        ) : null}
        <div className="mt-6">
          <Stack items={project.stack} delay={260} />
        </div>
      </div>
    </article>
  );
}

export function SelectedWork() {
  return (
    <Section id="work" title="Selected work" intro="What I built, who it was for, and what changed because of it.">
      <div className="space-y-[clamp(7rem,9vw,8rem)] lg:space-y-20">
        {professional.map((project) => (
          <CaseStudy key={project.slug} project={project} />
        ))}
        <SideProjectList />
      </div>
    </Section>
  );
}

// A small project: picture on top, then what it is, its stack and the links.
// No box around it; the picture's own well is the only surface. A last odd
// project spans the row with its text beside the picture, on the same two
// columns, so the grid never ends on a hole.
function SideProject({ project, index, wide }: { project: Project; index: number; wide: boolean }) {
  const label = (what: string) => `${project.title}, ${what} (opens in a new tab)`;
  const base = index * 80;
  return (
    <li className={wide ? "row sm:col-span-2" : "row"}>
      <article
        aria-labelledby={`side-${project.slug}`}
        className={wide ? "sm:grid sm:grid-cols-2 sm:gap-x-8" : undefined}
      >
        <div className="media aspect-video max-sm:max-w-[16rem]" data-reveal style={d(base)}>
          {project.image ? (
            <Image
              src={project.image}
              alt={project.imageAlt ?? ""}
              fill
              sizes="(min-width: 1024px) 19rem, (min-width: 640px) 45vw, 16rem"
            />
          ) : null}
        </div>
        <div>
          <h4
            id={`side-${project.slug}`}
            className={`row-title mt-5 text-lead font-semibold leading-[1.15]${wide ? " sm:mt-0" : ""}`}
            data-reveal
            style={d(base + 60)}
          >
            {project.title}
          </h4>
          <p className="mt-2" data-reveal style={d(base + 120)}>
            {project.summary}
          </p>
          <div className="mt-4">
            <Stack items={project.stack} delay={base + 180} />
          </div>
          <p className="mt-3 flex flex-wrap gap-x-8 font-semibold" data-reveal style={d(base + 240)}>
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
    </li>
  );
}

// The last entry of Selected work, laid out exactly like a case study: the
// heading and a short note on the left, the projects two to a row on the right.
function SideProjectList() {
  return (
    <article
      id="side-projects"
      aria-labelledby="side-projects-title"
      className="grid gap-x-16 gap-y-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
    >
      {/* Held beside the projects while they scroll, as an employer is in Experience. */}
      <div className="lg:sticky lg:top-[calc(var(--bar)+2rem)] lg:self-start">
        <MaskText
          as="h3"
          id="side-projects-title"
          text="Side projects"
          className="text-[clamp(1.6rem,1.2rem+1.4vw,2.25rem)] leading-[1.1]"
        />
        <p className="mt-3 max-w-[34ch] text-small text-ink-soft" data-reveal style={d(80)}>
          Projects I build for fun, and to test out new tools before using them on client work.
        </p>
      </div>
      <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2">
        {personal.map((project, i) => (
          <SideProject
            key={project.slug}
            project={project}
            index={i % 2}
            wide={personal.length % 2 === 1 && i === personal.length - 1}
          />
        ))}
      </ul>
    </article>
  );
}
