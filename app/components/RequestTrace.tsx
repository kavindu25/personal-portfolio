import { trace } from "../data/profile";

// Decorative: reads like a network waterfall for one request across the stack.
// The same facts appear as real text in the hero and the skills section.
export function RequestTrace() {
  return (
    <figure
      aria-hidden="true"
      className="w-full rounded-md border border-line bg-surface p-5 font-mono text-micro"
    >
      <div className="flex items-center justify-between pb-4 text-ink-soft">
        <span>GET /kavindu</span>
        <span className="text-ink">200</span>
      </div>

      <ul className="space-y-4 border-t border-line pt-4">
        {trace.map((row, i) => (
          <li key={row.layer}>
            <div className="flex items-center gap-3">
              <span className="w-14 shrink-0 text-ink">{row.layer}</span>
              <div className="relative h-2 flex-1">
                <span
                  className={`trace-bar absolute inset-y-0 rounded-[2px] ${
                    row.layer === "infra" ? "bg-signal" : "bg-accent"
                  }`}
                  style={
                    {
                      left: `${row.start}%`,
                      width: `${row.span}%`,
                      "--i": i,
                    } as React.CSSProperties
                  }
                />
              </div>
            </div>
            <p className="mt-2 pl-[4.25rem] font-text text-micro text-ink-soft">
              {row.detail}
            </p>
          </li>
        ))}
      </ul>

      <div className="trace-total mt-5 flex justify-between border-t border-line pt-4 text-ink-soft">
        <span>total</span>
        <span className="text-ink">4 yrs in production</span>
      </div>
    </figure>
  );
}
