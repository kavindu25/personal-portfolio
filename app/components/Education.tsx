import { education } from "../data/education";

// Facts at the side, the record set as wide lines from one vertical axis.
export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="frame section-gap bg-surface">
      <div className="grid gap-y-10 lg:grid-cols-[34%_minmax(0,1fr)]">
        <h2 id="education-title" className="text-title" data-reveal>
          Education
        </h2>
        <ul className="space-y-[clamp(3rem,6vw,5rem)] lg:pr-[10%]">
          {education.map((item, i) => (
            <li
              key={item.title}
              className="grid gap-x-10 gap-y-2 sm:grid-cols-[9rem_minmax(0,1fr)]"
              data-reveal
              style={{ "--d": `${70 + i * 70}ms` } as React.CSSProperties}
            >
              <p className="pt-1 font-semibold tabular-nums">{item.year}</p>
              <div>
                <h3 className="text-lead">{item.title}</h3>
                <p className="mt-2 max-w-[56ch]">{item.institution}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
