import { capabilities } from "../data/capabilities";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" title="Skills" intro="The tools I use day to day, grouped by the job they do.">
      <div className="grid gap-5 sm:grid-cols-2">
        {capabilities.map((group) => (
          <section
            key={group.title}
            aria-labelledby={`skills-${group.slug}`}
            className="rounded-md border border-line bg-surface p-6"
          >
            <h3 id={`skills-${group.slug}`} className="text-lead">
              {group.title}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {group.tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-md border border-line bg-page px-3.5 py-1.5 text-small font-medium text-ink-2"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  );
}
