import type { Layer, Project } from "../data/projects";
import { trace } from "../data/profile";

export const LAYERS: Layer[] = ["browser", "api", "data", "infra"];

export type TraceRow = { layer: Layer; detail: string | null; start: number; span: number };

/** The whole stack, as in profile.trace. */
export function wholeTrace(): TraceRow[] {
  return trace.map((row) => ({ layer: row.layer as Layer, detail: row.detail, start: row.start, span: row.span }));
}

/**
 * One project's request: only the layers it really reached get a bar, laid
 * out left to right in stack order like a network waterfall.
 */
export function projectTrace(project: Project): TraceRow[] {
  const touched = LAYERS.filter((layer) => project.layers?.[layer]);
  const n = touched.length;
  return LAYERS.map((layer) => {
    const k = touched.indexOf(layer);
    if (k === -1) return { layer, detail: null, start: 0, span: 0 };
    const start = n > 1 ? Math.round((k * 60) / (n - 1)) : 30;
    return { layer, detail: project.layers?.[layer] ?? null, start, span: 40 };
  });
}

type TraceProps = {
  path: string;
  rows: TraceRow[];
  total: { label: string; value: string };
  /** Draw the bars in on first paint. */
  draw?: boolean;
};

// Reads like a network waterfall for one request across the stack. It sits
// on the deep teal field of the stage.
export function Trace({ path, rows, total, draw = false }: TraceProps) {
  const soft = "text-field-soft";
  const track = "bg-[var(--field-track)]";

  return (
    <div>
      <p className="flex items-baseline justify-between gap-4 font-semibold">
        <span>
          GET <span className="font-normal">{path}</span>
        </span>
        <span>200</span>
      </p>

      <ul className="mt-5 space-y-4">
        {rows.map((row, i) => (
          <li key={row.layer}>
            <div className="flex items-center gap-4">
              <span className="w-16 shrink-0 font-semibold">{row.layer}</span>
              <span className={`relative h-3 flex-1 overflow-hidden ${track}`} aria-hidden="true">
                <span
                  className="trace-bar"
                  {...(draw ? { "data-draw": "" } : {})}
                  style={
                    {
                      "--start": row.start,
                      "--span": row.span,
                      "--i": i,
                      background: row.layer === "infra" ? "var(--signal)" : "var(--field-bar)",
                    } as React.CSSProperties
                  }
                />
              </span>
            </div>
            <p className={`trace-row-detail mt-1.5 pl-20 text-small ${row.detail ? "" : soft}`}>
              {row.detail ?? "Not part of this project"}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <span className={soft}>{total.label}</span>
        <span className="text-small font-semibold">{total.value}</span>
      </p>
    </div>
  );
}
