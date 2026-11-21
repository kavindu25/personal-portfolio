"use client";

import Lenis from "lenis";
import { useEffect } from "react";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

// Eased wheel scrolling and smooth jumps to in-page anchors. Lenis drives the
// window's own scroll position, so IntersectionObserver, scroll timelines and
// sticky positioning all keep working. Off for reduced motion.
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const offset = -(parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--bar")) * 16 || 72) - 16;
    const lenis = new Lenis({
      lerp: 0.1,
      anchors: { offset, duration: 1.4 },
      autoRaf: true,
    });
    window.__lenis = lenis;

    return () => {
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return null;
}
