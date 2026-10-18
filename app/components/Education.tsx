import { education } from "../data/education";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="space-y-7">
        {education.map((item) => (
          <li key={item.title} className="flex flex-wrap items-baseline justify-between gap-x-6">
            <div className="max-w-[52ch]">
              <h3 className="text-lead">{item.title}</h3>
              <p className="mt-1 text-small text-ink-2">{item.institution}</p>
            </div>
            <p className="text-meta tabular-nums text-ink-soft">{item.year}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
