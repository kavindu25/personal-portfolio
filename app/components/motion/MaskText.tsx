import { Fragment, type CSSProperties, type ElementType } from "react";

type Props = {
  text: string;
  as?: ElementType;
  /** Split into letters (the name) or words (headings). */
  by?: "word" | "char";
  /** Animate on page load instead of when scrolled into view. */
  onLoad?: boolean;
  /** Extra delay before the first piece moves, e.g. "120ms". */
  delay?: string;
  className?: string;
  id?: string;
  hidden?: boolean;
  /** Index of the first piece, to continue a stagger from another line. */
  start?: number;
};

// A heading whose words (or letters) rise one after another through a
// clipping mask. The full text stays on the element for assistive tech; the
// pieces are hidden from it so the heading is read once, as a whole.
export function MaskText({ text, as: Tag = "span", by = "word", onLoad, delay, className, id, hidden, start = 0 }: Props) {
  const words = text.split(" ");
  let i = start;

  return (
    <Tag
      id={id}
      className={className}
      aria-label={hidden ? undefined : text}
      aria-hidden={hidden || undefined}
      {...(onLoad ? { "data-load-mask": "" } : { "data-mask": "" })}
      style={delay ? ({ "--d": delay } as CSSProperties) : undefined}
    >
      {words.map((word, w) => (
        <Fragment key={w}>
          <span aria-hidden="true" className="whitespace-nowrap">
            {by === "char"
              ? [...word].map((ch, c) => (
                  <span key={c} className="mask">
                    <span style={{ "--i": i++ } as CSSProperties}>{ch}</span>
                  </span>
                ))
              : (
                  <span className="mask">
                    <span style={{ "--i": i++ } as CSSProperties}>{word}</span>
                  </span>
                )}
          </span>
          {w < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}
