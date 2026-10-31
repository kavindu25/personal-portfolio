import { capabilities } from "../data/capabilities";

// Text at one size: each group opens with its name in full weight, then a
// tight stack of tools. No boxes, no chips.
export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="frame section-gap">
      <div className="grid gap-4 lg:grid-cols-2 lg:items-end">
        <h2 id="skills-title" className="text-title" data-reveal>
          Skills
        </h2>
        <p className="max-w-[40ch] text-lead" data-reveal style={{ "--d": "70ms" } as React.CSSProperties}>
          The tools I use day to day, grouped by the job they do.
        </p>
      </div>

      <div className="mt-[clamp(3.5rem,7vw,6rem)] grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-5">
        {capabilities.map((group, i) => (
          <section
            key={group.slug}
            aria-labelledby={`skills-${group.slug}`}
            data-reveal
            style={{ "--d": `${i * 70}ms` } as React.CSSProperties}
          >
            <h3 id={`skills-${group.slug}`} className="text-lead">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-1.5 text-lead leading-snug text-ink-soft">
              {group.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
