import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  /** Short supporting text under the sticky title. */
  intro?: string;
  children: ReactNode;
};

// Title sits in a sticky left column on desktop; content takes the right.
export function Section({ id, title, intro, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="border-t border-line py-16 md:py-24"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-x-12 gap-y-8 px-5 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-24">
            <h2 id={`${id}-title`} className="text-title">
              {title}
            </h2>
            {intro ? (
              <p className="mt-3 max-w-[30ch] text-small text-ink-soft">{intro}</p>
            ) : null}
          </div>
        </div>
        <div className="md:col-span-8">{children}</div>
      </div>
    </section>
  );
}
