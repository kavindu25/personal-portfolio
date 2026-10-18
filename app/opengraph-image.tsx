import { ImageResponse } from "next/og";
import { profile } from "./data/profile";

export const alt = `${profile.name}, ${profile.role.toLowerCase()}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f1f3f2",
          color: "#0f1a22",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 34, color: "#096570" }}>{profile.name}</div>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
          {profile.headline}
        </div>
        <div style={{ fontSize: 30, color: "#4e5d67" }}>
          React · Next.js · Node.js · TypeScript
        </div>
      </div>
    ),
    size,
  );
}
