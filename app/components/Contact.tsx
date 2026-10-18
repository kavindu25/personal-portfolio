import { profile } from "../data/profile";
import { ContactForm } from "./ContactForm";
import { Section } from "./Section";

type Option = {
  title: string;
  value: string;
  href: string;
  external?: boolean;
  download?: boolean;
};

const options: Option[] = [
  { title: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { title: "LinkedIn", value: "Connect with me", href: profile.links.linkedin, external: true },
  { title: "GitHub", value: "Browse my code", href: profile.links.github, external: true },
  { title: "CV", value: "Download as PDF", href: profile.cvPath, download: true },
];

function ContactCard({ option }: { option: Option }) {
  return (
    <a
      href={option.href}
      {...(option.external
        ? { target: "_blank", rel: "noopener noreferrer", "aria-label": `${option.title}: ${option.value} (opens in a new tab)` }
        : {})}
      {...(option.download ? { download: true } : {})}
      className="group flex items-start justify-between gap-4 rounded-md border border-line bg-surface p-5 transition-colors hover:border-accent"
    >
      <span className="min-w-0">
        <span className="block font-heading text-lead font-semibold tracking-tight text-ink">
          {option.title}
        </span>
        <span className="mt-1 block break-words text-small text-ink-2">{option.value}</span>
      </span>
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        aria-hidden="true"
        className="mt-1 shrink-0 text-ink-soft transition-colors group-hover:text-accent"
      >
        <path
          d={option.download ? "M12 4v11m0 0-4-4m4 4 4-4M5 20h14" : "M7 17 17 7M9 7h8v8"}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-[48ch] text-heading font-medium text-ink">
        Hiring an engineer who can own a product from interface to deployment? Tell me about the team and what you need to ship.
      </p>
      {/* <p className="mt-4 max-w-[60ch] text-ink-soft">{profile.roleNote}</p> */}

      <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-3">
        {profile.workDetails.map((item) => (
          <div key={item.label}>
            <dt className="text-meta text-ink-soft">{item.label}</dt>
            <dd className="mt-0.5 text-body font-medium text-ink">{item.value}</dd>
          </div>
        ))}
      </dl>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {options.map((option) => (
          <li key={option.title}>
            <ContactCard option={option} />
          </li>
        ))}
      </ul>

      <div className="mt-14 max-w-xl">
        <h3 className="text-lead">Send a message</h3>
        <div className="mt-5">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
