import { profile } from "../data/profile";
import { ContactForm } from "./ContactForm";
import { ScrollWords } from "./motion/ScrollWords";
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

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

// The ask, read word by word, then the facts a recruiter needs, the ways to
// reach me and the form. No card around any of it.
export function Contact() {
  const details = (
    <>
      <dl className="grid gap-y-4" data-reveal style={d(160)}>
        {profile.workDetails.map((item) => (
          <div key={item.label}>
            <dt className="text-small text-ink-soft">{item.label}</dt>
            <dd className="font-semibold">{item.value}</dd>
          </div>
        ))}
      </dl>
      <ul className="mt-8 grid gap-x-6 gap-y-2 sm:grid-cols-2" data-reveal style={d(220)}>
        {options.map((option) => (
          <li key={option.title}>
            <a
              href={option.href}
              {...(option.external
                ? { target: "_blank", rel: "noopener noreferrer", "aria-label": `${option.title}: ${option.value} (opens in a new tab)` }
                : {})}
              {...(option.download ? { download: true } : {})}
              className="flex min-h-11 flex-col justify-center"
            >
              <span className="flex items-center gap-2 font-semibold">
                <span className="link">{option.title}</span>
                <span className="arrow" aria-hidden="true">
                  {option.download ? "↓" : "→"}
                </span>
              </span>
              <span className="break-words text-small text-ink-soft">{option.value}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    // The question across the top; the ways to reach me beside the form.
    <Section id="contact" title="Contact">
      <ScrollWords
        text="Hiring an engineer who can own a product from interface to deployment? Tell me about the team and what you need to ship."
        className="max-w-[56ch] font-heading text-lead font-medium leading-[1.25] tracking-[-0.015em]"
      />
      <div className="mt-[clamp(3rem,6vw,5rem)] grid gap-x-16 gap-y-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="max-lg:order-last">{details}</div>
        <div data-reveal>
          <h3 className="text-lead">Send a message</h3>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </Section>
  );
}
