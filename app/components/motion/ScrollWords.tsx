"use client";

import { useEffect, useRef, type ElementType } from "react";

type Props = { text: string; as?: ElementType; className?: string };

// A statement whose words light up from dim to full ink as it is read down
// the screen. Without script, or with reduced motion, it is simply full ink.
export function ScrollWords({ text, as: Tag = "p", className }: Props) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const spans = [...el.querySelectorAll<HTMLSpanElement>(":scope > span")];
    let frame = 0;
    let visible = false;
    let lit = -1;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Starts when the top reaches 85% of the screen, done when the bottom
      // passes 45%.
      const start = vh * 0.85;
      const end = vh * 0.45;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end + rect.height)));
      const next = Math.round(progress * spans.length) - 1;
      if (next === lit) return;
      spans.forEach((s, i) => s.toggleAttribute("data-lit", i <= next));
      lit = next;
    };
    const onScroll = () => {
      if (visible && !frame) frame = requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) update();
    });
    io.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
      spans.forEach((s) => s.setAttribute("data-lit", ""));
    };
  }, []);

  return (
    <Tag ref={ref} className={`words ${className ?? ""}`}>
      {words.map((word, i) => (
        <span key={i}>
          {word}
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
