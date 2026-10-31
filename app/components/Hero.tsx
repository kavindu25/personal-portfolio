import { profile } from "../data/profile";

// The name is the page's title. On desktop it crosses the seam into the
// stage; the part over the field is redrawn in the field's ink by a CSS
// pseudo-element (globals.css), so the name exists once in the document.
function Name() {
  return (
    <>
      <span className="line">
        <span data-line data-text="Kavindu" style={{ "--i": 0 } as React.CSSProperties}>
          Kavindu
        </span>
      </span>
      <span className="line">
        <span data-line data-text="de Alwis" style={{ "--i": 1 } as React.CSSProperties}>
          de Alwis
        </span>
      </span>
    </>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      data-trace="all"
      aria-labelledby="top-title"
      className="flex flex-col gap-10 px-[var(--m)] pb-16 pt-[calc(var(--bar)+2.5rem)] lg:min-h-svh lg:px-0 lg:pb-[calc(var(--m)+1rem)] lg:pt-[calc(var(--bar)+var(--m)+1.5rem)]"
    >
      <div className="hero-name hero-name__scale">
        <h1 id="top-title" className="lines text-display text-display-fit whitespace-nowrap">
          <Name />
        </h1>
      </div>

      <div className="max-w-[38rem]">
        <p className="text-lead font-semibold" data-load style={{ "--d": "380ms" } as React.CSSProperties}>
          {profile.headline}
        </p>
        <p className="mt-4" data-load style={{ "--d": "440ms" } as React.CSSProperties}>
          {profile.summary} {profile.availability}.
        </p>

        <div
          className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4"
          data-load
          style={{ "--d": "500ms" } as React.CSSProperties}
        >
          <a href="#contact" className="button">
            Get in touch <span className="arrow" aria-hidden="true">→</span>
          </a>
          <a href={profile.cvPath} download className="link text-small font-semibold">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
