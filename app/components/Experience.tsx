import { experience, type Role } from "../data/experience";
import { MaskText } from "./motion/MaskText";
import { Section } from "./Section";
import { Stack } from "./Stack";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

function RoleEntry({ role }: { role: Role }) {
  return (
    <li className="relative">
      <span className="track__dot" aria-hidden="true" />
      <p className="text-small font-semibold tabular-nums text-ink-soft" data-reveal>
        {role.period}
      </p>
      <h4 className="mt-1 text-lead" data-reveal style={d(60)}>
        {role.title}
      </h4>
      <p className="mt-3 max-w-[62ch]" data-reveal style={d(120)}>
        {role.summary}
      </p>
      <ul className="bullets mt-5" data-reveal style={d(180)}>
        {role.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="mt-6">
        <Stack items={role.stack} delay={240} />
      </div>
    </li>
  );
}

// The employer on the left; its roles hang off one track on the right that
// fills with accent as they are read.
export function Experience() {
  return (
    <Section id="experience" title="Experience" intro="Four years shipping production software.">
      <div className="space-y-[clamp(7rem,10vw,8rem)]">
        {experience.map((employer) => (
          <div key={employer.company} className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
            <div className="lg:sticky lg:top-[calc(var(--bar)+2rem)] lg:self-start">
              <h3 className="text-[clamp(1.6rem,1.2rem+1.4vw,2.25rem)] leading-[1.1]">
                <a
                  href={employer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${employer.company} (opens in a new tab)`}
                  className="transition-colors duration-200 hover:text-accent focus-visible:text-accent"
                >
                  <MaskText text={employer.company} hidden />
                </a>
              </h3>
              <p className="mt-3 text-small text-ink-soft" data-reveal style={d(80)}>
                {employer.kind}
              </p>
            </div>
            <ol className="track space-y-[clamp(3rem,5vw,4rem)]">
              {employer.roles.map((role) => (
                <RoleEntry key={role.title + role.period} role={role} />
              ))}
            </ol>
          </div>
        ))}
      </div>
    </Section>
  );
}
