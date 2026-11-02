import type { Metadata, Viewport } from "next";
import { profile } from "./data/profile";
import { Motion } from "./components/Motion";
import { SmoothScroll } from "./components/motion/SmoothScroll";
import { fontVariables } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name}, ${profile.role.toLowerCase()}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: profile.name,
    title: `${profile.name}, ${profile.role.toLowerCase()}`,
    description: profile.description,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1f3f2" },
    { media: "(prefers-color-scheme: dark)", color: "#0e151b" },
  ],
};

// Runs before first paint so a stored theme never flashes the wrong colours.
// It also marks the page as scripted (data-js), which is what lets entrance
// animations hide content until it arrives. If the motion script has not
// started within three seconds, the mark is removed so nothing stays hidden.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}var r=document.documentElement;r.dataset.js="";setTimeout(function(){if(!window.__reveal)delete r.dataset.js},3000);`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={fontVariables}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <Motion />
        <SmoothScroll />
      </body>
    </html>
  );
}
