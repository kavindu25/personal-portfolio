import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap px-5 sm:px-8 items-center justify-between gap-4 text-meta text-ink-soft">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <p className="flex gap-6">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
            LinkedIn
          </a>
          <a href="#top" className="hover:text-ink">
            Back to top
          </a>
        </p>
      </div>
    </footer>
  );
}
