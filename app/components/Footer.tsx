import { profile } from "../data/profile";
import { MaskText } from "./motion/MaskText";

// A plain close: the ways to reach me, then the name at full width.
export function Footer() {
  return (
    <footer className="frame overflow-hidden pb-[calc(var(--m)+0.5rem)] pt-[calc(var(--gap-section)/2)]">
      <div className="flex flex-wrap justify-between gap-x-12 gap-y-6">
        <p className="flex flex-col gap-1 sm:flex-row sm:gap-8">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="link">
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="link">
            LinkedIn
          </a>
          <a href="#top" className="link">
            Back to top
          </a>
        </p>
        <p className="flex flex-col gap-1 sm:items-end">
          <a href={`mailto:${profile.email}`} className="link">
            {profile.email}
          </a>
          <span>{profile.location}</span>
        </p>
      </div>

      <div className="footer-name mt-[clamp(4rem,10vw,9rem)]">
        <MaskText
          as="p"
          text="Kavindu de Alwis"
          by="char"
          hidden
          className="font-heading text-display text-display-fit font-[650] leading-[0.88] tracking-[-0.035em] lg:whitespace-nowrap"
        />
      </div>
      <p className="mt-6 text-small text-ink-soft">
        &copy; {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
