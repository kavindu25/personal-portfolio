"use client";

import { useEffect, useState } from "react";
import { profile } from "../data/profile";

function now() {
  return new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Colombo",
  });
}

// Where I am and what time it is there, so a visitor knows the overlap.
export function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(now());
    tick();
    const id = window.setInterval(tick, 15_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p className="tabular-nums">
      {profile.location}
      {time ? <span>, {time} local time</span> : null}
    </p>
  );
}
