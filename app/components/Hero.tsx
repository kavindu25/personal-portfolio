import { profile } from "../data/profile";
import { LocalTime } from "./LocalTime";
import { MaskText } from "./motion/MaskText";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

// Who and what on the left, in two sizes; the summary and the two ways
// forward on the right. Nothing else on the first screen.
export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="top-title"
      className="frame pb-[clamp(3rem,6vw,5rem)] pt-[calc(var(--bar)+clamp(4rem,10vw,9rem))]"
    >
      <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end">
        <div>
          <h1
            id="top-title"
            aria-label={profile.name}
            className="text-[clamp(3.5rem,2rem+6vw,7.5rem)] leading-[0.9]"
          >
            <MaskText text="Kavindu" by="char" onLoad hidden className="block" />
            <MaskText text="de Alwis" by="char" onLoad hidden start={7} className="block" />
          </h1>
          <p className="mt-8 max-w-[24ch] font-heading text-lead font-semibold tracking-[-0.015em]" data-load style={d(650)}>
            {profile.headline}
          </p>
        </div>

        <div data-load style={d(800)}>
          <p className="max-w-[46ch]">
            {profile.summary} {profile.availability}.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a href="#contact" className="button">
              Get in touch <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a href={profile.cvPath} download className="link font-semibold">
              Download CV
            </a>
          </div>
          <div className="mt-8 text-small text-ink-soft">
            <LocalTime />
          </div>
        </div>
      </div>
    </section>
  );
}
