import Image from "next/image";
import { projects, type Project } from "../data/projects";
import { Section } from "./Section";
import { StackList } from "./StackList";

function CaseStudy({ project }: { project: Project }) {
  return (
    <article className="border-t border-line py-9 first:border-t-0 first:pt-0">
      <h3 className="text-heading">{project.title}</h3>
      <p className="mt-1.5 text-meta text-ink-soft">{project.role}</p>
      <p className="mt-4 max-w-[64ch] text-ink-2">{project.summary}</p>
      {project.outcome ? (
        <p className="mt-4 max-w-[64ch] border-l border-accent pl-4 font-medium text-ink">{project.outcome}</p>
      ) : null}
      <div className="mt-5">
        <StackList stack={project.stack} />
      </div>
    </article>
  );
}

function SideProject({ project }: { project: Project }) {
  return (
    <article className="flex flex-col">
      {project.image ? (
        <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-line bg-surface">
          <Image
            src={project.image}
            alt={project.imageAlt ?? ""}
            fill
            sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 90vw"
            className="object-cover object-top"
          />
        </div>
      ) : null}
      <h4 className="mt-4 text-lead">{project.title}</h4>
      <p className="mt-1.5 text-small text-ink-2">{project.summary}</p>
      <div className="mt-3">
        <StackList stack={project.stack} />
      </div>
      <p className="mt-4 flex gap-5 text-small font-medium">
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title}, live demo (opens in a new tab)`}
            className="text-accent underline decoration-from-font underline-offset-4 hover:no-underline"
          >
            Live demo
          </a>
        ) : null}
        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title}, source code on GitHub (opens in a new tab)`}
            className="text-accent underline decoration-from-font underline-offset-4 hover:no-underline"
          >
            Source
          </a>
        ) : null}
      </p>
    </article>
  );
}

export function SelectedWork() {
  const professional = projects.filter((p) => p.kind === "professional");
  const personal = projects.filter((p) => p.kind === "personal");

  return (
    <Section
      id="work"
      title="Selected work"
      intro="What I built, who it was for, and what changed because of it."
    >
      <div>
        {professional.map((project) => (
          <CaseStudy key={project.slug} project={project} />
        ))}
      </div>

      <div className="mt-6 border-t border-line pt-12">
        <h3 className="text-heading">Side projects</h3>
        <p className="mt-2 max-w-[52ch] text-small text-ink-soft">
          Projects I build for fun, and to test out new tools before using them on client work.
        </p>
        <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2">
          {personal.map((project) => (
            <SideProject key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}
