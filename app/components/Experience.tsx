import { experience } from "../data/experience";
import { Section } from "./Section";
import { StackList } from "./StackList";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      intro="Four years shipping production software."
    >
      <div className="space-y-16">
        {experience.map((employer, index) => (
          <div key={employer.company} className={index > 0 ? "border-t border-line pt-16" : undefined}>
            <h3 className="text-heading">
              <a
                href={employer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-line decoration-2 underline-offset-4 transition-colors hover:decoration-accent"
              >
                {employer.company}
              </a>
              <span className="ml-3 font-text text-meta font-normal text-ink-soft">
                {employer.kind}
              </span>
            </h3>

            <ol className="mt-8 space-y-14 border-l border-line pl-7">
              {employer.roles.map((role) => (
                <li key={role.title} className="relative">
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[2.2rem] top-2 size-2.5 rounded-full border-2 border-accent ${
                      role.current ? "bg-accent" : "bg-page"
                    }`}
                  />
                  <div className="flex flex-col gap-0.5 min-[30rem]:flex-row min-[30rem]:flex-wrap min-[30rem]:items-baseline min-[30rem]:justify-between min-[30rem]:gap-x-6">
                    <h4 className="text-lead">{role.title}</h4>
                    <p className="text-meta tabular-nums text-ink-soft">{role.period}</p>
                  </div>
                  <p className="mt-3 max-w-[64ch] text-ink-2">{role.summary}</p>
                  <ul className="bullets mt-5">
                    {role.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <StackList stack={role.stack} />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </Section>
  );
}
