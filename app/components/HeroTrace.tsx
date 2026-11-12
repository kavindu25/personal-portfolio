import { trace } from "../data/profile";

const v = (vars: Record<string, string | number>) => vars as React.CSSProperties;

// One request read like a network waterfall: each layer of the stack I work
// across gets a bar, with the tools I use there beneath it. The layer names
// and tools are real text; only the bars are hidden from assistive tech.
export function HeroTrace() {
  return (
    <figure className="bg-surface p-[clamp(1.5rem,3vw,2.5rem)] tabular-nums" data-load style={v({ "--d": "700ms" })}>
      <p className="flex items-baseline justify-between gap-4 font-heading text-lead tracking-[-0.015em]">
        <span>
          <span className="font-semibold">GET</span> /kavindu
        </span>
        <span className="trace-response font-semibold text-accent">200</span>
      </p>

      <ul className="mt-8 space-y-5">
        {trace.map((row, i) => (
          <li key={row.layer} className="trace-row">
            <div className="flex items-center gap-4">
              <span className="w-16 shrink-0 font-semibold">{row.layer}</span>
              <span className="trace-track relative h-3 flex-1 overflow-hidden" aria-hidden="true">
                <span className="trace-bar" style={v({ "--start": row.start, "--span": row.span, "--i": i })} />
              </span>
            </div>
            <p className="trace-detail mt-1.5 pl-20 text-small text-ink-soft" style={v({ "--i": i })}>
              {row.detail}
            </p>
          </li>
        ))}
      </ul>

      <p className="trace-response mt-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <span className="text-ink-soft">total</span>
        <span className="font-semibold">4 yrs in production</span>
      </p>
    </figure>
  );
}
