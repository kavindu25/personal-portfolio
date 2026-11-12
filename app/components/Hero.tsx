import { profile } from "../data/profile";
import { HeroTrace } from "./HeroTrace";
import { LocalTime } from "./LocalTime";
import { MaskText } from "./motion/MaskText";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

// Who, what and the two ways forward on the left, in reading order; the
// request trace on the right shows the whole stack I work across.
export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="top-title"
      className="frame pb-[clamp(3rem,6vw,5rem)] pt-[calc(var(--bar)+clamp(3.5rem,8vw,7rem))]"
    >
      <div className="grid gap-x-16 gap-y-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-center">
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
          <p className="mt-6 max-w-[46ch]" data-load style={d(750)}>
            {profile.summary} {profile.availability}.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4" data-load style={d(850)}>
            <a href="#contact" className="button">
              Get in touch <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a href={profile.cvPath} download className="link font-semibold">
              Download CV
            </a>
          </div>
          <div className="mt-8 text-small text-ink-soft" data-load style={d(850)}>
            <LocalTime />
          </div>
        </div>

        <HeroTrace />
      </div>
    </section>
  );
}
