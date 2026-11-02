import { capabilities } from "../data/capabilities";
import { Section } from "./Section";

// One column per job, its tools listed down the column so each list reads
// top to bottom at a glance.
export function Skills() {
  return (
    <Section id="skills" title="Skills" intro="The tools I use day to day, grouped by the job they do.">
      <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-[repeat(4,minmax(0,1fr))_minmax(0,1.2fr)]">
        {capabilities.map((group, i) => (
          <section
            key={group.slug}
            aria-labelledby={`skills-${group.slug}`}
            data-reveal
            style={{ "--d": `${i * 70}ms` } as React.CSSProperties}
          >
            <h3 id={`skills-${group.slug}`} className="font-text text-body font-semibold tracking-normal text-ink-soft">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-1.5 font-heading text-lead font-medium tracking-[-0.01em] text-ink">
              {group.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  );
}
