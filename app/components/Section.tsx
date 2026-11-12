import type { ReactNode } from "react";
import { MaskText } from "./motion/MaskText";

type Props = {
  id: string;
  title: string;
  /** The section's existing one-line introduction. */
  intro?: ReactNode;
  /** Anything that belongs under the intro, such as a link out. */
  aside?: ReactNode;
  children: ReactNode;
  labelledBy?: string;
};

// The one shell every section shares, inside the centred container: the
// heading on the left with its introduction across from it, then the content
// at the full width below.
export function Section({ id, title, intro, aside, children, labelledBy }: Props) {
  const titleId = labelledBy ?? `${id}-title`;
  return (
    <section id={id} aria-labelledby={titleId} className="chapter frame">
      <div className="grid gap-x-10 gap-y-5 lg:grid-cols-2 lg:items-end">
        <MaskText as="h2" id={titleId} text={title} className="text-title" />
        {intro || aside ? (
          <div>
            {intro ? (
              <p className="max-w-[40ch] text-lead text-ink-soft" data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
                {intro}
              </p>
            ) : null}
            {aside}
          </div>
        ) : null}
      </div>
      <div className="mt-[clamp(3rem,6vw,5rem)]">{children}</div>
    </section>
  );
}
