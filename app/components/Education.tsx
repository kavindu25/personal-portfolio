import { education } from "../data/education";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="space-y-12">
        {education.map((item, i) => (
          <li
            key={item.title}
            className="grid gap-x-10 gap-y-1 sm:grid-cols-[10rem_minmax(0,1fr)] lg:grid-cols-[10rem_minmax(0,6fr)_minmax(0,5fr)]"
            data-reveal
            style={{ "--d": `${i * 80}ms` } as React.CSSProperties}
          >
            <p className="font-semibold tabular-nums">{item.year}</p>
            <h3 className="text-lead">{item.title}</h3>
            <p className="max-w-[44ch] text-ink-soft sm:col-start-2 lg:col-start-3 lg:pt-1">{item.institution}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
