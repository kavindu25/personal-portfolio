"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __reveal?: boolean;
  }
}

// Section parts marked data-reveal, and headings marked data-mask, rise
// once as they enter the viewport. CSS keeps them visible when script,
// IntersectionObserver or motion are unavailable.
export function Motion() {
  useEffect(() => {
    window.__reveal = true;
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal], [data-mask]");

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
