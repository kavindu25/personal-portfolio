import { experience, type Role } from "../data/experience";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "Nov 2024" as a month count; "present" as this month. */
function toMonth(text: string, now: Date) {
  const [month, year] = text.trim().split(" ");
  const m = MONTHS.indexOf(month);
  if (m === -1 || !year) return now.getUTCFullYear() * 12 + now.getUTCMonth();
  return Number(year) * 12 + m;
}

function span(role: Role, now: Date) {
  const [from, to] = role.period.split(" to ");
  return { start: toMonth(from, now), end: toMonth(to ?? "present", now) + 1 };
}

// Every role on one axis, from the first role to today; this role is filled
// in the accent, the others sit one tone off the panel.
function Timeline({ role, now }: { role: Role; now: Date }) {
  const roles = experience.flatMap((e) => e.roles);
  const spans = roles.map((r) => span(r, now));
  const first = Math.min(...spans.map((s) => s.start));
  const last = Math.max(...spans.map((s) => s.end));
  const total = last - first;
  const pct = (m: number) => ((m - first) / total) * 100;
  const startYear = Math.floor(first / 12) + 1;
  const endYear = Math.floor((last - 1) / 12);
  const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);

  return (
    <div aria-hidden="true">
      <div className="relative h-14">
        {roles.map((r, i) => {
          const s = spans[i];
          const mine = r === role;
          return (
            <span
              key={r.title + r.period}
              className={`absolute ${mine ? "inset-y-0 bg-accent" : "inset-y-4 bg-[color-mix(in_srgb,var(--ink)_14%,transparent)]"}`}
              style={{ left: `${pct(s.start)}%`, width: `${Math.max(pct(s.end) - pct(s.start), 1.5)}%` }}
            />
          );
        })}
      </div>
      <div className="relative mt-3 h-5 text-small tabular-nums text-ink-soft">
        {years.map((y) => (
          <span key={y} className="absolute -translate-x-1/2" style={{ left: `${pct(y * 12)}%` }}>
            {String(y).slice(2).padStart(3, "’")}
          </span>
        ))}
      </div>
    </div>
  );
}

function RoleModule({ role, now }: { role: Role; now: Date }) {
  return (
    <li className="grid gap-x-10 gap-y-6 md:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] md:items-start">
      <div className="bg-surface p-6" data-reveal>
        <p className="font-semibold tabular-nums">{role.period}</p>
        <div className="mt-6">
          <Timeline role={role} now={now} />
        </div>
      </div>

      <div>
        <h4 className="text-lead" data-reveal style={{ "--d": "70ms" } as React.CSSProperties}>
          {role.title}
        </h4>
        <p className="mt-3 max-w-[62ch]" data-reveal style={{ "--d": "140ms" } as React.CSSProperties}>
          {role.summary}
        </p>
        <ul className="bullets mt-5" data-reveal style={{ "--d": "210ms" } as React.CSSProperties}>
          {role.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-5 max-w-[62ch] text-small text-ink-soft">
          <span className="sr-only">Technologies used: </span>
          {role.stack.join(", ")}
        </p>
      </div>
    </li>
  );
}

export function Experience() {
  const now = new Date();
  return (
    <section id="experience" aria-labelledby="experience-title" className="frame section-gap">
      <div className="mx-auto max-w-[72rem]">
        <div className="grid gap-4 md:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] md:gap-x-10">
          <h2 id="experience-title" className="text-title" data-reveal>
            Experience
          </h2>
          <p className="text-lead md:self-end" data-reveal style={{ "--d": "70ms" } as React.CSSProperties}>
            Four years shipping production software.
          </p>
        </div>

        <div className="mt-[clamp(4rem,8vw,6rem)] space-y-[clamp(5rem,9vw,8rem)]">
          {experience.map((employer) => (
            <div key={employer.company}>
              <h3 className="text-title" data-reveal>
                <a href={employer.url} target="_blank" rel="noopener noreferrer" className="decoration-transparent underline-offset-[0.18em] hover:underline hover:decoration-current focus-visible:underline">
                  {employer.company}
                </a>
              </h3>
              <p className="mt-2 text-small text-ink-soft">{employer.kind}</p>
              <ol className="mt-10 space-y-[clamp(4rem,7vw,6rem)]">
                {employer.roles.map((role) => (
                  <RoleModule key={role.title} role={role} now={now} />
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
