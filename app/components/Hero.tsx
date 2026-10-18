import { profile } from "../data/profile";
import { RequestTrace } from "./RequestTrace";

export function Hero() {
  return (
    <section id="top" className="pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2.5 text-meta text-ink-soft">
            <span className="size-2 rounded-full bg-signal" aria-hidden="true" />
            {profile.availability}
          </p>

          <h1 className="mt-6 text-display">{profile.headline}</h1>

          <p className="mt-7 max-w-[44ch] text-lead text-ink-2">{profile.summary}</p>

          <div className="mt-9 flex flex-wrap gap-3 text-small">
            <a
              href="#contact"
              className="rounded-md bg-accent px-5 py-3 font-medium text-accent-ink transition-opacity hover:opacity-90"
            >
              Get in touch
            </a>
            <a
              href={profile.cvPath}
              download
              className="rounded-md border border-line px-5 py-3 font-medium transition-colors hover:border-ink"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <RequestTrace />
        </div>
      </div>
    </section>
  );
}
