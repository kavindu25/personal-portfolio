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
      <div className="space-y-[clamp(7rem,9vw,8rem)]">
        {professional.map((project) => (
          <CaseStudy key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}

function SideProject({ project }: { project: Project }) {
  const label = (what: string) => `${project.title}, ${what} (opens in a new tab)`;
  return (
    <li className="row">
      <article
        aria-labelledby={`side-${project.slug}`}
        className="grid gap-x-10 gap-y-5 sm:grid-cols-[16rem_minmax(0,1fr)] lg:grid-cols-[24rem_minmax(0,1fr)]"
      >
        <div className="media" data-reveal>
          {project.image ? (
            <Image
              src={project.image}
              alt={project.imageAlt ?? ""}
              fill
              sizes="(min-width: 1024px) 24rem, (min-width: 640px) 16rem, 100vw"
            />
          ) : null}
        </div>
        <div>
          <h3 id={`side-${project.slug}`} className="row-title text-lead font-semibold" data-reveal style={d(80)}>
            {project.title}
          </h3>
          <p className="mt-3 max-w-[60ch]" data-reveal style={d(140)}>
            {project.summary}
          </p>
          <div className="mt-5">
            <Stack items={project.stack} delay={200} />
          </div>
          <p className="mt-4 flex flex-wrap gap-x-8 font-semibold" data-reveal style={d(260)}>
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

export function SideProjects() {
  return (
    <Section
      id="side-projects"
      labelledBy="side-projects-title"
      title="Side projects"
      intro="Projects I build for fun, and to test out new tools before using them on client work."
    >
      <ul className="space-y-[clamp(3.5rem,6vw,5rem)]">
        {personal.map((project) => (
          <SideProject key={project.slug} project={project} />
        ))}
      </ul>
    </Section>
  );
}
